---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=43029c6e9ca5b7f3d5cf760eb7a9540e6b5c5d5a3e392ebaecc6f1c9a803cd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=b949143d590936617c7271c8496d920efaaf6240031f0ed18f6ae06ff308e187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=d69ebba931c7ee7216535ef5aca5a3072c1694c3d151a4cf7d40d172cc017663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=60a61d1766fca2480d3e28dc66cd3cedcd5d1cac041a55a8be72a2942e9cdc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=517efe98f732bfaab25110ee877a32176a435550559787d46332ea1bf5364929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=feb3b04b7fa3c24fa8ccb399994f373e282f0b5732651da7e78fea6cb325a80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=ef17f072a7a97d30435c018f8e37123ecc5188fef3e07c18b1a105f2d171ef03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=c2fd23412d012c6f5033fa8d3fb9560d9f833d1173fed12eddd5f77f5e910d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=08d676b6c947caca1fbeaf50895f42c21e7639e6dbc7c9aab03d0e9ecfacaa3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=b9ddbfeb956a2d7ec105538f06e4a6a6dcaf13b91c95cfd3da6c5dad3cef6fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJGKCXH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGgy3sDiB5SCOS9gsfK7m4WtCwrb3%2BZIJvC1jp%2FjQm2wIgcY3C5NbnL%2F%2Bt9iMhHhtuAlu%2B%2B3CACeHllzX%2F6TuWPZEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJSFSOqkUVnZvApeiircA7E9OqXWg7uxW%2FvGrzW4I63vCkD3ShW3aP9YSiTZMY%2BEF53gDQXnFyTztu2STBCIgzQkQQxJ2oJt%2B3lHtIyYuOedpTCW4qi5qpjWDYWrFPc%2FZLDd8glV9%2BPkKs8qa6%2FepFay4cYztOlzg0qQT4LkqPYX2Y%2B8DbPpSHYulos0neLQ2hawp%2Bni5HmCmfGO5voFDmk0uTCZcyYDNFriRkR0zKa%2FsMSw81m6U3ICeqru1r99RHBroTWPm7b4x7NZ8DlTMwfBzyxY6vJk8fDPo1bbR89u3rm%2FKc6lYG8jja9Htb7K%2F8yad%2B%2B8X1SIixS0P7rosEfiNV2FLUeysG3KpGDhqMlyFddl%2Fuli4u1DT3KwKXyABcpb4o9fwfU%2B5Mqq5IUKp8Vl7k25t2Vbi1VEDrb%2F5%2F5MGmcCzU2XOEejnG7qksjdTfRj5iIznz5hdOPFfIXkzqhKYbrcW2ZcSokUhuGfG9RQaZTdh2wuWE9ayBnXASFhMAnlf1RzDA%2BNIGWrP4qqwwO1EHPNRDGY9ZKqqHpwRbp6cNfvh%2Bp2i0U1hrsqIMz804sVMceG2WGZWZhBppCHicD3B7Ut3a04lcJ6myDyekozZwkxb5A6KdtGn1dG4bbQTpZazz5R%2FX440pJbMKyrvsQGOqUBqYyIdaQUThiKDoOXGjNnV1nXn5jvylpVuqTkZEYD9rQLIjxIPU1uEx0EyaqrB%2BBWp85TPFiqxjjXWNs75awtab5JLmjianeR7BxyLzrdnfz9HV5OwAA2ifC9wVGpR27xhDFKlmg%2BE4WQZzvWKzlJSI%2FVKElJUjBG13mF0R50fWN8BvB1fC2eUbAKgizyUBvCMQMYyHMo74cc0u%2BahKlNaFLZo4JJ&X-Amz-Signature=9fd0061015a19ff914f85fb06b05d8f0ae434ab8bb1a0f5888854bf5d0504a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

```python
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

```python
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

```python
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

```python
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUFUFBM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bllkm8TcTpBDcbq95cIW9S%2FhDcj7md41MYgt6yt2r7QIgVxEkhm3fEdKquIghdXRfp%2FU%2FnV2CBFDMmhbJOleKg1wq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDHLOtUdSNjx89xFG%2FSrcA4aWVxYZ0V2BRtCAW8kvkh6vgwRxQncbUBc60KHu2pmkhRGbw3vBouWhzat%2FwOqjm6XJnG0uyziLqE3fRv2SwBglrQ8WSzM5BoHiB6uFCWbS9vuuRTCrPwBFsapNmBAZ90LCbyX8d7OkPvaw%2FxlV1wRv2jpbNH63dk4x0R2fv5TCtsvU467fV4QYob5D1RcdmTTj%2FXcQEOBUczUhyETfszmNAUl3osNMSH0pUDX6GjzfOM2o%2By2hCPySTPcjo%2BVd4yROjieTi%2BYfV0eOEdPOdNnhPaLY8qiAfhbZ3zu5q0e7Kqu3cIOIV%2BkFdzEL2kaZmWKMpJmtLeQYzFzbsk2CDnnDhXnPmFqjb5A6INtmDGajDE8AkWJkW5WJRbzeIvjwDrLzajVqibS5Yt3Wn6ekhpAFPfYGlGG1X6iruiLQWmn1ovn0kOsISAbJXqNZvfiuZ2VI%2FfVrM1j4%2BnOgVYIzFnpZ%2B5iTGBc%2BgYi7Rvadt2PCP1hyMf0x%2FDp%2FPbdjz%2BIrUJXAzcfTSyjO1tKIhV%2FpvtA%2Fw%2FS48WbmKEjsD2og7XIkZFPuhvH%2FESSYJpjwJ3b6U%2BLgN3M0iA9nyz%2BS%2FwZFfP0R5sFwgbuB2gZr1AiYwXm8JYOhM2a9CMcibHvRMMarvsQGOqUBJigxwi%2F58xDXPH32XeWlGAjAhcqXV5mO%2FFm820CIuhR5ZiCleLqYEVavaJlIpuJY3Rqplnmf0Qt9JCtbO2f1U%2BZQIngkkXS2RHHvoptUhycJhsYlb3SOwX7HY5UgoGB7Mbdg%2B4BwKmKun0xMO7cCIUnglGhyU7jsw%2F4l2wfnmPPiaILJShOaZDHZznW8eWoF%2FxEE2YIID1HM%2FgxL7AO0JUiRhmC4&X-Amz-Signature=0df98e10783e28b346e0d253f6fb0b2274a0497dd8086c60e212af3b620e8df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=71b585e7d0fe6501eaef75e9d927540b52df81951783d29da07dd45fa2495b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=8f680e41668de9cbd3a240a5621b4a5d07df83dcfa46f11262983633b4eed2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=211a37366121573f22912dc2a1e65096ec781d97e8c69bb112fff5b24f007af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=520324aa39a0d80b0a5ea10b60c78bf8c0e1adbae5827548dd098125dcce6f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=24c4f4719124fa9e885542e99d4591099357dc4c1ed06c156df3ad89f0886514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=d6be0ec57a9b35401727b34d4ae93d898237c4f4a562199407f0e0993197861d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=02329fd21434465ac72014eb84eb49e2364ae234dab320724348668e95fc49b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBZI6DA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FKF3DNM7IEZ22BA4Do6PJ5uelZk0by5t%2FUDg9sk27oAiEA8WNw1dMf84MnvhXeGUY4jPUpfOSNOLP2REJW%2BnSBzY4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDnrHTJ8gzCwttd7HSrcA8JBoeOMKRZijqxwmUZU5dW045VnN4WJ0HCqoAdMwy8k1qTFWnThSUQzJmpvGQkX%2FmxphqgoJaRYZaJqJIqQvequOUlvYDaBivjh7AZckXFkF%2BZSOchyLpPBaXGhigkn1r2LJwr46FO99JBzH46kde7u1CtUijkKU4QHwffgkZuQHZPn6sfhDy44JCcw0D3V%2F9244648yyPih8d%2BgwXm0P4uVNb1YQaSNRn4wcRJjTrvbF5gKr4r8UnVRlHRTqm6CDwGw9Tmj8Nn5FZqeotdobDjfr7luXcKCgPiDJhZUxj8YjdlqhdmavZFhGSJOovGLNE%2BzT%2ByUOUFuf0MOtCt3QtZ%2F%2BWMPgL0zAKF%2FOYjhsGKOWVlyug0hoeRpQjYGPzs6FMPV7jEab1PPG83jK6mQnbHbxM2NHmUy1yPs5p5STQMLDUA9%2BAzFtaxbiAG4FNLItjocucLuplaIotAtxI%2FRNICEAocmj5qKXWLvWeVZJ8yexPhzncn3GoYf0X24XMLimJZbHqXxVXt1EYQl1Qq%2BovbokuYkFTeRFWS%2BHtDToUs9CwR6Qy4hkLiqMPclCYEd0tAUEA5TlurvBkKe7fFowiny3vYdif3pqFyMO0a9eQ%2BJSp%2F%2FV8nuADJB6QaMMuqvsQGOqUBPt%2FYwEli8p%2B2jvF%2FxqlBA63jfl5hXZj9px256ZqT4ost6YdUFIjVnwiyJpD9GB5Ntvs5eCiA4Ac8UPSjDmQeBitwdbh6EUTojQQgXwzs4Ce23DpCrAwVYKfi51iR6lTnJ71eofIOaliJua5jW2gUJfAb5sDqPXgggFNF0Khlqg3fdwTVkokIeNBqrd27Q8d1p5kdrtzACPMBIhILqSS%2BxOakpZ%2BW&X-Amz-Signature=2b549516b89f6185814b91dccbd6e10f895aabc3c5b02b060e209923d0628d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python
       
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
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
