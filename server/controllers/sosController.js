const SOS = require('../models/SOS');

exports.handleSOS = async (req, res) => {
  const { location } = req.body;
  const userId = req.user.id;

  try {
    const sos = new SOS({
      userId,
      location,
      timestamp: new Date(),
    });
    await sos.save();
    res.status(200).json({ message: 'SOS ricevuto' });
  } catch (err) {
    res.status(500).json({ error: 'Errore server' });
  }
};
