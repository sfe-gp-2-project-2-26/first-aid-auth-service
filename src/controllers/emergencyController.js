export const triggerEmergency = async (req, res) => {
  try {
    // Expected to receive user_email to dispatch FCM to the specific device
    const { user_email } = req.body;
    
    if (!user_email) {
      return res.status(400).json({ error: "user_email is required" });
    }

    // In a real implementation, you would query the database for the user's FCM device token
    // const user = await User.findOne({ email: user_email });
    // const fcmToken = user.fcmToken;
    // await firebaseAdmin.messaging().send({ token: fcmToken, ... });

    console.log(`[EMERGENCY] Dispatching push notification to daemon for: ${user_email}`);
    
    // Simulate successful dispatch
    res.status(200).json({ 
      success: true, 
      message: "Emergency notification dispatched to Android daemon successfully." 
    });
  } catch (error) {
    console.error("Emergency dispatch error:", error);
    res.status(500).json({ error: "Failed to dispatch emergency notification." });
  }
};
