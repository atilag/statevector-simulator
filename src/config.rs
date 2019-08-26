
pub struct Config{
    pub shots: u32,
    pub seed: u32,
}

impl Default for Config{
    fn default() -> Self {
        Config{
            shots: 1024,
            seed: 0,
        }
    }
}