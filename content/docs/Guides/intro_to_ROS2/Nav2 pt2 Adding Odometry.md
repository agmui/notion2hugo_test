---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=44c84de39e2971f629367f44ea575f483c53dda8adc2fc761dea9e83363e00a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=84e750ddb979b0c7e3d1f0b06193142cac600a37a0836be302c5afbdfc9e8e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=5c8b3376ad5df1125bbfe1f7f0bca05507d1aeb472e14eea347f5cb1addefdd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=9ab2be0c5a62b36deb7303f719ce33cb4bad950d553f265edfc79379c65cbbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=0ac72d93ae50e2d5ba94132e50e338a2752860e94a651d5f6da1ae8981f8af9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python "1-17"

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=43d9cf18eb73d23a25fbfc9e09236dea3bc04b6ab5b238f66928c9d3d8889125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=5002b4761ddee0949cd22453370b52d4b23a4e4688449315f76e5926bb5514ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=e36a5c1eb35e9f6e0ec68ff67c1e711ba9e3e16b072112a313bc02e6b28b6a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=8fe49c91bb51ee43dfb2eac99129bd170580930c2b470884db97c64c82e1b2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6ZUR4M%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd7gduyTmES%2BLyCxk80XJvOqVcz5Fv4ViqAtoRrl%2Fg4gIgZ%2F72jWAZ7l044bMOq7kOUA%2FfZo6Pliw3EbLPztFdJNcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSkaAXUffL00BniHSrcA3xJTpKqGctfXD32dpCHF56vOYUu1UTdSdMj4qIP6dIFGgu0WZOA9OpW%2B1URffcu1YAjj80Yx9WM5d8q%2B75agO9daD6gRtBjOfRqp0vrbG0A2aBTISrHZRHFkS00TJpqw0%2FNojh75%2BxwhbJ9YRgRrTbl%2FUG91rdH5qUBTYe0UEbe1Qrv5VJo%2FU5tF4Rk3raUmi%2FM4m7a4OmFsekvaTzIvAaBO6tRjaVKVCBu8bpMZ%2BvrAQ5mzOIk%2F822lmIHuakZsMDH6dhBL5cqs1yH9eaK8SwoxPvtmGZ71gW43jtpy3jYrgegxHtl9TawZIZynbvk%2FNRQ5bG3AbN%2B8Vy0VO7d4KYEM9%2B3XIDpmhH4qAkmgvLso8Enuc8FEnb7bolkK6gJDb7LLexOYqSZWUshZD9JQje8CyWG%2BjG5FDxbL1T4pY725kFzX52VmhF8K5%2BTZF0kVwWgXX5aelZrRkrfktE512CDyV5qEt48u4vBaNgUyY9mPad3o%2F0Vi80jqk1jEejsd3DKj6Sp%2BYzniE%2FDN8%2Btkuun4Ip2LK2HVQKCO3nnV8iusbvZMCObx%2BQqnExSA5ue4vhIULCoIUL9Cmk0BDRnxi6BPxcHSTJSiPPt05dGnuXBAHjp14heDD%2B2unltMM%2FIh84GOqUBVb7JKR9D03YhN1bpKYO8haqrhilxZzKpu%2FUzIP7jK9CSVMqqzBH6NuvlenpHMu1eRXAwhcXOCDJWqRHLedia9F5WKv9bqZ58dQEqPV%2Fa9GgQzq3wiK8wAKXaERlFc12sSWuwUO0ccIZJxPh%2BzyhklwgiDpUe%2FSH%2BPuWmc3SPJ0rsYEesImhCe1mch7mrCKJ0%2ByjJPvIqFidYn%2F2TtPiuEHl%2F9cc1&X-Amz-Signature=84d4a58fd26a39835299ae2c3a487b81f813d364588edcfab70ca316cff829df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ5EEVLC%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk4Yf0wiX%2FqF9UEb7gBGcJcKQAGoJSMREhwk2fErraGAiEArLXtbAD7T3NlqEkFFnVKlkyZrSuVe8VaWOVUJs6brtYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLvWTg3ra7tC%2F3VKSrcA%2BqoBQnZZsWfHrrgnGuzTpSyx%2BHPfOz4MovP6xMCEw0GHcnqZHUNdFp1pJjTqaVnaOmhk7YfZheAookT8GTXlPih2KEVUlFIOOzfnwlubeMkeeudut90CXJAocWxouC9eMFt7kmXn%2BpjYXuyuLfK8jA%2FEiHYhuu5661urDWIVmuD3zMCRryA1kFm1lJpAuxUpUY5hw4rKP1iRm3KAN4KLBxG7g6%2F0qg3PIY5%2Fdl8KQfiWKdqY2Hxc7TVlI%2BwgR5OMny7zARgj5Or5oL3clsJxqWEbBKs2h3FhrIgQ5uQTAl98jBLvOAMfPUo%2B24Z26sFxfBCgH276cN3iwcv6gaOrR7wuaHQGd70WzIgvPGAyGjkcX6c6Kkp2WSZX273w7%2BuNWiAyI1%2B8bMu2bV7MesNc2wsgaK%2BSX3dF2RQfBmBX1nVYb1pxazs0bVFjORh0gbWIUw7upeS08gC0UpunhL7VTygbruWpP%2BxplTUZiBY2jRj%2FpBbkuguctRaZ%2FKs4lk3DNIZ3hIQe3pLuNoc5NyG7Kk1aTPpvM%2Fv9iUO%2BuIH2kdiAp4CW5s82rpv5uf2bU%2B%2F9Jt%2FoSTbQvGbgMNZyHt2Mi0WpyeygkiP0ErGbXKjcubLc%2FoYLL9F%2BHBoPGZbMO3Jh84GOqUBAyrsu%2FoEEQ4Qsq8e6tc4Mr3HVx4j8Rm%2BFzYd43MzH%2FmWyjYLA%2BVc9bguTfKVWdZvOPuazPNE0Kz00y1Ia577%2BF4Dn%2Fpq%2B%2B6pQAKOgj9HiYO0Bx6IMFCAE5j9MUhZyZLDnxAI03m6hkv6cbQ1szu3mg861KSTVGzGf%2FbmH1K3H9eBD%2FTztsioBWWjqkztjd81kiQVwnxHMmXIH57Ttf8DXzI1YvE%2B&X-Amz-Signature=d0948065c95e8f44963aa8a9f9e2ba9a82880fac6baaeb28c4d958f2d7b2f612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

</details>



But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python "10-11","12-17"
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python "9-20","20-23"
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python "14-14"
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python "6-18","18-19","19-20","20-33"
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=0a8dac12b1f9152205cc2c247ef3e04c88ce1f5086ffc266bec2c5146623c20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=af501c2c6e9df441022218c47b798d342484d18332839df08aebaa88bb2f9655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=bd4208371d51808e3ac7f24cd75e9c73df1868c6f0c83a9d850f6b73d70ba55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=885010c860b7f66c9191eb83818a77fe3e0a6ae7ca8a3affcacc4f5519099905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=00510051cba61b51f4cf3a51a66a8134cc4ec51c1f732548ca9405c9671d34c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=661d068764bbdc784602a6dca8651b67be611353a06812e09ceab65268fdbf07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=91ec8143ca47a89d285fd9fe9f4eca70dae039ae247a2196fa1ee3cf0cbc6204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=04e619d7bd238cb2fa1d695494109775e592d289daa5d1181dfb0470ceb49ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHO36VC2%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiKcim%2FQ7r9oF%2FwXj5%2F9WAwPsQI%2B59QrFkN8CnnrIKQAiEAxgqMUvTFSDCDj0s4t1JkysdlJcoxJp6x8shMpw0xR4EqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoER0kdGoDBvFDrTircA5LURjbF%2F05%2BBlz90W3d%2Bm9yv%2FWc6IufQSkVKP8BY%2BF%2BuU%2BP0yQLuRabzA0PW9uJxx5kMbAG1d5y2a%2FovLQwUkEimr92E9pUYkoXcs1VUBAe%2FM0ehywtuZZ3hORJu9aPY9XubvqCRZr2JahcEhNuD%2BIRzpeOeEd4PfE4GqgitqKZ4GF1cAh0rUVOMiR6a3VPyIHN4hVCFwX09LahTBp%2F%2BjLZ5hkDh1pEqK%2BAtrkZ%2Bc4oQgdfFne0FJVpDDXLZbSg8LF%2Bb5kJ%2B6aOXTVPRW4uf1BpNLvWgMV0KF%2BJRK33L7Ymi%2F9%2FRULahHfDJDt4gGZKCCwy8M4JgFhZDCu501pypz1VPoXijR4iq3hZQnYPEZrT19Ta81jR0Lnwj7cg53wUycPmm8UK%2BRn9oXrfPvVLzrdpYqGWzGCIVqAGmQCXf%2FmqQ8VYehLD8QVc4%2BpSqJpm7wr5xV4QBjaegLB3NrSqU2CvNiXZMcQ2agL4PUqTuQbzWgc9joLbXDNqolKQ0g3OvpVY1g1%2FdPqrobflJuAJ9zFUJfvzSZBP34N30K2v0yhZvfUl8eHgt3xLFuWBMVY8Q%2FYroK03FQi2b%2FIB9ETEKmtAw%2BuP%2B4d%2BXUYVLN2H1zQ5nGoVOHtRq8VLnl1rMIXJh84GOqUBxB9aSmfc5CLBAqNAERe6IAJQHZcr3wr8gEqwIoEqvy%2BICYdyzebva0W%2BQrZD9dPs5Y02LtiL%2FsSKCE%2BW0vWW3M9jCQ8nRd1Oh2auIP1MZ0MXh4A87r6PlC%2FwO%2BQHT%2BUVmtd64mwE%2FHrrqh1hnlrA8MudCB4Npw6WdGFxKB4h670dcKC2Va7tFVy5QS%2FaYkRnGDN4I24j7b3X2DZBWLhoCk%2F1oUpa&X-Amz-Signature=6809ad7678497c7bf5917e65fea01dc3b625ea714fbe86b8998b979770729dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python "10-10","16-27"
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
