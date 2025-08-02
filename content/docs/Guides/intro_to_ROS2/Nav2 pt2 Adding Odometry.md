---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=0cf8384c0a3f27749f938694817d5589991aa42417ac0fecd8b4c029a116fef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=77f08ad50a7cb3da92e63733175d0ee02894ebba8757c9593d0f0f5c10d4e406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=760a63ae659b24a83ee91991d1e61a1990f1ace6b9b4bd079b24ca9e0bf5245f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=67a6d254e90b6e4e616b7c914852243ad5b8207b7fd9928cd03dc0fcdad42054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=4f5a533db711b1cc6f238df98db487019a338bd6a83188683f5ca7c170fd977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=6aed772b1b301433765c2b8c58299db5c0cdd3bc07e6f98720c98cf5b6490298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=c1b44b101e46ad2f7fe778715cbfc62934015cd01d505e36e6281afaf8730e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=f368932adca867f7654b7115fdf013d1a9d1ddee17d2f7af8b06c73b38d6dec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=c714ed902d487d846a6b0ca6ec51a9fb594166efdd8e3b91adba095abb56dce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSPKAFI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpNsLIU6MwGTWWj%2Bt1VrLTYHCPrtP%2F0fE1A9v5PQkBfQIhANWLIqmqNoFtLubsMaL2h1FPHi%2F4kOONhEzEKK72Sk7CKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE4UktcBqVwb%2B4wrQq3ANlFLQeygcSK5V5uZtfSA0W2kwXT%2FKvPuqU6u3V0wneNzju2VBlvFfFDlY7UzwklvCTojPMpWav2WBxtvwqxkIlflFwcwgw4k8TQK1yCb0kltqjHoWz9ULFE%2FXZYXvKeHkYgRbvSpwUnJRnrAu%2BRl6do7YW8f%2B38tXW6H4WDzNzeelm%2BM4QR7Bv0va9qPymN6xrvluFVU1soDicsv%2FHLYnz%2BCnYFpVNlfSvar5LDqKFE5ZZeEuNT%2BRq5HVpqoO5bWkDMwvpRgBQ8FAsDLdEPuYKTLEBt16FYC8qE5yUqvckCNej%2FkYfYz%2Ftw3JvqIfi2lZ7lC8fz%2B5gxQlGcQgvjO5CbzISnbl7YaqyRCMvORvv723yh4cFNnt8crGzle%2F1cHqXihFvMH312Hca14xssWedxRz9%2BGr%2FglcfOIjbhx7oVfjAFyvEMbFGhnQ%2FvpLg7oxhEBeoXczKK6IOdlrH%2BUnMXZChXQpjhfx21J9f0j7miLrmjJtlp6DyJiYhhUYMsVRU1gF0mSZG39sVAwpzPURDqO4ZbgyBOHAecY%2B45rzXpvhPX4LA%2BxAq5Rw4wJ%2B%2Frym89Zqld6iEXIQXDhfmq54RRyCNl7k0VZNsbTV6RFq%2BBsZpqrDXgdtiXnklxjCE%2BLXEBjqkAdY7Nr2Mx2NkKz3R7tHZGoaGXXP18waNMFeWIBM2AbFbhivGAdMOG%2Fp6DlAxi0CJBeiVaYJQELhdRLBBFyoQTGcZK1uY8%2F88hzj0N2Ux%2BWgztvFlPDS4WFFCD4vB2%2BCB7JzSgIfWF9i%2F20qTFuICQm6W37O371VirJt7chNOTlAuy1rn2Sd7gXC01wKRXg5VOGOHgWZb20upZhdpmE9hJ73fdRP8&X-Amz-Signature=77611bcce20ad3aca96582cbe0781378abda72c2b964d18e7088d40f6ad2526c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XKYAVLV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGL8y6HCx6gG2btla%2FuJsdm17ayQopuMPa71Pliyfu1QIhAMiJWJU1KytEhZmsKDVcu4vHSk5%2BR9Toqm8eYjNorqEUKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsnXngQxErS%2Bv1xIq3AMLX9%2Fkwi62KxpHD82PK4dgB1Kf3TtnZtvpAsUztftiLpCCGgFfncP5VxmkDBrzV%2BENhb7pqKYT%2F1IcJsKpnq7SEUO3%2Fry8QvIaWTYyw2%2FMzQEtMQaHLcdN8%2BomIr25LmxomCMZErVEd3rOGhOlE3N5Qn9UNVXY1v2QNFESYSe%2FTVj1QaAaG4XJg%2FwbubxzqQB6bKaVa%2Fe8WYzZe3Cyv7W1G92uATrjzQLCKOkub6bF4qTAiTGOSF%2FngCh9CsZ4rk5s1tC0z72aFSI5o1IRIQHrzMTe%2FUu%2B8x0%2B0U8Zn2Z%2BnH8taAPbZbIHSPLn9NYdr5yRBW4a9hkVqgEvyf%2BZCLTBU47FTzXO48rgc8Eufd07iSByRSojOEJW5JmMPM%2BsuZHkzhWghuqaUkQQHff7Nl28CyI2%2BKTjNQG9CE9LXjHB0Nq4Jdk43b7w6jau%2BsXhaCITGjBjeFAHyQeqyjHzSjDX1%2FQ2p2XPX0PI5mXzWeLolSNftgdI9fIA5PY8OhgL1vWauuyJ1Oabx3uENF04J3Kse2hgEoU3GVP8z440%2B9bhgCUaUqY06hakdhy2bVZGMGcuLuxuEwmQArczjmflnQqBrPgbvufG6K84KQxChLPwIN%2FpQo8CCr6d4%2FRtNjC497XEBjqkARsDl%2BVsds7xl8A04cmm%2BTfCnDiwkQd%2FYFUzQXPtQuOd2iwBM9039fDW44nSEylfZTd47t2j1jvy%2BYxzQvruHNGln%2B2SaBsmHkpGvA0S8OTpMUBJjpDB1JDCRpKwDyzESMZE6i6hiQhg8rkZsgCFV3F6fjiwjU8c9qIQ9GZHHcJEyNbWByzGDgMVYTkzlucwphIM7jD37%2BW%2FCjD%2BoW5lyZifs2Ne&X-Amz-Signature=ee41201753223fcdbfa5cf7cb862b61fd8fce5369d3af94f3643ec09de7f95f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=44f3408ebb8d228242c5bfa94b66c6f70b3ac92548df2cb6cab858ac20ce76aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=0610f1769bb487e45866678bc7fa57b92d2a79974e4ea25dca6715da04f8e6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=7ec6c96003e7000d594b00ef369120e1199a4c2bab810fbec79c6e028b0e0000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=563642d4461a44cbbbfc5e7ddc194d2a1c82f324e95db0ff29f53c2d55da9949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=8eb18b0d2bc1a48bd84cdb5694153ffd3c1c93f0dce61cf337dcb965e7cfa643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=b9cac13b789f9339305f685e07e7447d3ab9d9c8a9e2d36b5e898cd2e21ef0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=598e02926c8ad4e9cfdea619028b17532cda94857e86adc482b3f461549e7070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DBVHGCZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVOQW9TXRzr%2FhlIhAc3ICagqYgBgji0cHFajOFxefFgAiEAu%2B7ia20TzfhkhbVye%2BgU7WpjZzOGKbEboIpjrKrvX2YqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgkDAPL3zoiquCQ0ircA%2F9lsCf35ijLw33MSktdEpDY2Gm1BB6iIKXgY9HkJfcVkZspcVYQs27k8PgIDNY9jdeoY5mF5p9aCwFC%2Fs75CJ%2BTQ2Sj51g7HqRUiutN1ORS9PyOEQBUgBxM9VvADZ7IEzls8nwc3Rr4VModCv1GBxW9nxIG5ncOPGT1jh9UDjDSpCcAdIHaHQ8ioVZyakw9yIIF%2BAxVNj226dKk7sK4BUeDqZB0uu4z8COKdl0RAR2C51nl01XYxKCTAfXd8y9ts3uj3QcSEQ19SBYiGI7lUX0lR%2B5WkJ3OuSZF%2BLXI%2FPfe8z2WYCfoWAo3bJxqry6kxmbaDhZ8T4G614Q5CRAA7hu2bw6FpWm%2BDZEi9WMLn5F3j7XdV%2Fg0TtRWGrQFLshDSxHN1X9fAqCCNIej0HDELGsrFZaZQ579bVhOaq43yJKeaYjtNRwJXPtn9uUHU4UKJxEdrt9HQ4A5%2FjFLWnXVA2S2yrY4PKF2l1CYSpE10ehW2tjJ%2B59l5wxg2qkvoBBSN%2FBliUqOofSOy%2B9zpvbuu%2B647R6kuBbZVDanUWVZE3AbRblOoczGELA5eY2bEwhf%2FPFsxCbvjIfy%2BgncfS7DADyuIqiuHSsekciSNSc1SmMcYAw8XCzIlTNT%2F7q%2FMPz2tcQGOqUBJAgioTeh8LAx%2FtDwj6aB0SQQYFbObNreTazzb4eKFG3w7R0hCwEN8XFOgyfeIho97dUT2cHs13IEbrrsRXVKmsVdVVBps%2FSPNdHqXYVl6u44bXyPSyHlAE2u1kX1Zrx1fMJUW8ZxO2t4a0fZ3dkOcXQlDXmOtjKQMzLl%2BBhELVcM5by%2FSZaivM070%2Fpq89TayKPdXOo26%2Bev1OsnW4kB%2BFLrmPCA&X-Amz-Signature=f71d3eb77325297aba2c61496cd3ed14ca26ceb023a3508ae0509400368be5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
