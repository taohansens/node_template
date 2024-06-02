import app from "./app";

import { logger } from "./utils/logger";

const PORT = process.env.PORT || 3000;
app.listen(app.listen(PORT), () => {
    logger.info(`Server started on port: ${process.env.PORT}`)
});
