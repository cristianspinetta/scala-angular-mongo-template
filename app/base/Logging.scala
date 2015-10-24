package base

import play.api.Logger

/**
 * Created by cristian on 24/10/15.
 */
trait Logging {
  val logger = Logger(this.getClass)
}
