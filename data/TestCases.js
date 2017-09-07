/* Heartbeat x2 test casses */
import HbTwoVideoStart from './test/heartbeat2Suite/VideoStart'
import HbTwoVideoPlay from './test/heartbeat2Suite/VideoPlay'
import HbTwoVideoPause from './test/heartbeat2Suite/VideoPause'
import HbTwoVideoSeek from './test/heartbeat2Suite/VideoSeek'
import HbTwoVideoComplete from './test/heartbeat2Suite/VideoComplete'
import HbTwoVideoStall from './test/heartbeat2Suite/VideoStall'
import HbTwoAdStart from './test/heartbeat2Suite/AdStart'
import HbTwoAdPlay from './test/heartbeat2Suite/AdPlay'
import HbTwoAdComplete from './test/heartbeat2Suite/AdComplete'
import HbTwoVideoStartLive from './test/heartbeat2Suite/VideoStartLive'
import HbTwoVideoPlayLive from './test/heartbeat2Suite/VideoPlayLive'
import HbTwoVideoPlayComplete from './test/heartbeat2Suite/VideoCompleteLive'
import Comscore from './test/comscore/Comscore'
/* Heartbeat Q3 test casses */

const TestCases = {
  Heartbeat2VideoStart: HbTwoVideoStart,
  Heartbeat2VideoPlay: HbTwoVideoPlay,
  Heartbeat2VideoPause: HbTwoVideoPause,
  Heartbeat2VideoSeek: HbTwoVideoSeek,
  Heartbeat2VideoComplete: HbTwoVideoComplete,
  Heartbeat2VideoStall: HbTwoVideoStall,
  Heartbeat2AdStart: HbTwoAdStart,
  Heartbeat2AdPlay: HbTwoAdPlay,
  Heartbeat2AdComplete: HbTwoAdComplete,
  Heartbeat2VideoStartLive: HbTwoVideoStartLive,
  Heartbeat2VideoPlayLive: HbTwoVideoPlayLive,
  Heartbeat2VideoCompleteLive: HbTwoVideoPlayComplete,
  Heartbeat2Comscore: Comscore,
}

export default TestCases
