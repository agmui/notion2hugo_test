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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=ce013425bec06138266a9260b78e457d0e399f84cafa2b49a7c6fe8fb0a4566d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=2931b24445f5a139dcce29330b72fa4aca61c8711af850b6f415ee3cfd92fbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=c5afc3ac3bc4eb5b0b82504c186af501a8e67f4203c5c1eae4c80d257500690d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=92e28d1e9bda397ae10d03f0adae76ef214dab36a670b866db63924921e206e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=9df33754a7d5431ffd7daa4843ace3cf87adc0002c098773011f8969ae97ac69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=4a212ee30f5c36eddd2ecb83f283e9d36e28c2c18f2d1ed7ee481109fadf5922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=ada379dec669d31ccbc0c84f8e203c46f9c33e689bd364ef382347af27d07b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=89014e2c3eb1d522ca59f20430c736090ddeddd1370f0a72f7f5ee5b7e6b3f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=584638dff6a766bdd228a3db3b696fa44654ab8a1f8532a21b0b54511d6a4d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T57JHRD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHGCxY6TsFrt72nuZEcRe%2B9w8Owu%2FQzrMZoxi0Nw8PCPAiEAzO2uC0NQs%2BTfquCQ%2FFu0njPOHiv03I9wfActuKXp1eIqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6Ibgfmr5UbcmJVHyrcA8iqgTuf%2FGssk5fUVrAvAKtOql%2B2pqUSNMWlDdpRMH8PFSUWjD1iYyL8boV9AfOFTjacvvdq%2BYl5Arr6DkP%2FEFxaZXRUHxEOCJoH83W%2ByQ65rIxWuMSLKLXl%2BKJrldRHxggG0hgsGQRdArS88p0jn%2FJ%2FD%2BF5ah7yMhKxjkVagN%2BN2FGZequAA54XslEduT5EsTHYTPiPlo%2B6LLD2kUuMq0N6GxIXzT9XaBPv%2F47YAOR9OsciwsMFAMoRfV4UvzIZ5CrQ7JPrwSqQDFNziPYOyUDyaROB8kY%2B7NoHAonXrkwRorrt1JbWZyTmgJ2GiRUpd3dYyHSAP6EFcFS%2FFMy%2Fpivgv5JahVV%2BSFzpiLI421hgPR%2BrB44XaeDoHVpUTMFOP%2FwQ9evGI6usq937HztgTfcutpQE7vdGLYSINf0nTyYAqhGTFH16P2FalCzuQ%2F07l8C9mCdfHlg4nOCLlwVr9GtMCb9Z8TWcMwqlbao%2FydNRKs5Cz8oD2iqLbhvoXm%2BVRGle82kQSKfcP6Zxq0PCq0Ar6cxn1%2BT92uJ97aejirC%2FAktk3btGijid%2FOHOKHhLCtSLYIvLKh1z1W2KPELNIA0uL9224p3DyGKMP1TDly47Ds%2FKbpFrSJ%2FmU%2BgCMOaU1MQGOqUB%2FmVwwca1URGmN84nSTTY4jpvhXpuMfTGl6ioNAqn%2Ffmxbmh8%2Fmpdt7z28E7bMH5U86UO%2BaICY1PAUjxo1meXrDIPvO22utNrsK%2BN1Ee9noVKAMeOtW%2BXt1MFNWzLvuX3M7swUFZ2YKLrF2A82jGKWMju1Fy9patgy%2FQyRpQzsiBtHHnznB9NS7pprwqkoO2ZX5g1Cr76x1LRmsF4olkt6W98GJEn&X-Amz-Signature=85a8c803627f9bbe273a8f19c4115bb9bb77cb34deb84db58c04d232b5526236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKPISVFJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHiy2b5l%2BA%2B%2BtMTt1npfcfjGSyHa0qUjfFt%2F%2BkJtmswbAiAhQj%2FCCLJfuy6npsWInk93DU6zJLjZ0f0mLlUHiTdAZSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBoPLtVMhnWuc3AtgKtwDLyl3st%2F98xfIxbuC%2Fizu8sG4pBaT%2FkFvxSkANRv3adija2kLQold%2FD1cKzOY%2FlMuAXhRGNxhYOFnhdw7%2FF3fqFd3RvZZTLlkge7AErRfcLYro7FAgdxzOXdiPbZChllpR37SZLKOkZj0Zgm1BqPMYZEDrPEtSU1oyoJNAUOcoZx9gm7xp2N38KqmaLgOmI931GeX18QBbz0mUOc2N%2FyOrnlF5OE53Ry9O8PP%2FGEZ4lGDH9lGG4a3cnaSsLiq9DiSD%2BTLIwODufvSJWILe2ion7OYFFJmUj6qffnLnfl1xZFExUc626W8mOmzStLWIv0ufxpPpEoDoyh0ApmlMUe1AzCnxeAJ6Y0WyCa8kC5BeGtMGPsWktkpXOKJL%2FQhehZc6Ead%2FIwd7w5hP%2BT8R0YJU0Qljg5RXbOius6f9YUXZhBsuAaPtC0pyeP6VJTxIZqgLzv%2FOXugvAI6XOD1XdCBCfq1l2rIwOftL%2B8NoTZM1WOesiylDhB1dEAnIozmoPxM176x6gyW90NnEBfur9p%2FYOmE6%2BLupRY0FOAtEviAspP9T%2FGUIpeuEhElost1pleTManxQvMVOotd5A5in6d6pzio2%2FS781AvpjQZKwXIHTeQFJyPblStL6oDGMUwv5TUxAY6pgFFgmFm4BiMd4cnHxjY%2Bhf5mu83TikgO7l8JYbyH3xF1k8CqSX%2Fk5akt4%2BOTXmtm02FKK0p5Gq1cTsmEPmkniIdiggt1usoWqaIOqIw5IZWUhHKR7Y1gvT3GmbKBK1TDKqu5YXRVcwyA1FdQwFxYQUOvQkFUA41X%2BcrTT8Uu0eAlFbK9Y0E512vcr0%2BcHAP61chhBYJdDDXRNBx1pGsbof5jYuFCMUA&X-Amz-Signature=0ebbf74e23559a235b5071d1eb46e32e92ec49370310bc80dc08c0ef49433551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=ae21e57106d8ace278688da6a93abccaf4de8b532e0891c0560c4e63e88119f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=613074cf14c8d438f597cebedb927244eb4b635b3af0c99d47a39cb6dbddcc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=ba521986d5d86400be928147ff7e87524275c996a144241b2abfab14453ab1c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=eccaeff5d1df2cb16864b06ffa5ffb2cae669398e3d047fe075f30a0e4193d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=040360f71439cdc5702d11802303606b4e3a26b3d5e3c7677aed16a2e704718f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=37d5100cc043abb516443d967b71ecc332a1fadff2f95e12684f1d9e35fdf86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=490527c8dbc9328a0c927ce5d699d0ac21491c791c6b450e37fda898771efa2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=319388419203955192cfd840a782ae81e0c85975c0ed66b7ab228e8b2939bb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFXEVRD4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCV3FWqA7YCN%2B89Yq7uWxjfAb8g7D9SFVvpTMH7e4rFAiBDyrce9z8KED18X3Ta1uHk1lWKs27iufDd1MF1FyJbcyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7GQGlP0E5u5SHiDGKtwD0IzKsQq%2BhvnFb6rspqPSCx4yNtZgu9xrdXZHgL22mRbpHSqGQGY06B8K8rKsVSu1ImjksZzVmLttodddLQMnDwI1s7eZ8jQkKxi27D1z%2FBYZ4L4QwN3g5unLFYsEljkHuvaN5B9jXQP4wZyTFjb%2BLjEEV2C8%2BzdS30%2B6dmzbyBw8txp%2FxvFvDpGd0O8H%2FH8%2BNV5ktsA6aRyRx2%2FHpTzH1qHzDJUAOV0BU4CnGNC7cAp%2BRAEaFXQcQzLwpikRdnDbjwzeNWxpE9ndiVOHQG8d8%2Bv9uaPfnT1SglcnsWzu2RlhGEpk2smxqHjcS0Ih4oVwmnrGvycT65CIcFNSTc3KsPD8jPzVMr3mqJPHANBv2DyfxPPXTgVGNloCtwUOOrXOuY4iTxcZPtiXT08MiD49f%2BUlhGqfoR81QQ4BOsdPH7CcuX6pAgqjdsCjp3Qsx4sDfmUCz84RmtyBBHjzoo1fVbWQXLwyXMwKdf8YVTVRzI3sU%2FuyrX0gqthkO1UqjOrHIP3GawDnqDEnZM%2FAd4KlXKxutyOifcB0CzVTyNbf5Pl9a87sg5%2F%2By83AjD%2Fj2LmaUjEkxskjTBSyb0j2EXyiIiMenU9kPR5NrKvvYhtk2PjJ63%2BNO2ojny%2B14TcwtJTUxAY6pgHwIrqer1wdZsO21nnTPe9jG%2BxJOeWwIMonPJ24BQjrwITEnsq%2BIveKfyKVIaqBM%2BXF7nU3g5L2%2F7KSOxDikpkKfbOGj58dleNffPm%2FoE8LCye%2BYqSZG6vI4%2B2VFwrDXzvMqKdmML%2Bz6KyD7T65SIB0vObHpTwr%2BIxGhUBYahYSDTf0lsEsiaX2C8d6RJ3zcBgs9PDcYqpNK4RtkGq4C0GxugfAYeaS&X-Amz-Signature=a99c58f490e2bdbbcc63a8388aa1ec60d8f9e833f96f82570c91d229412e0686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
