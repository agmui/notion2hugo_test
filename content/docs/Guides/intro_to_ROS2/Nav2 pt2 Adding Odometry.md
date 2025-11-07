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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=2cbec064fa8ee9e0b27c3268f38c215d93c99c943535df0fc5396992d5291744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=ae80d36ae71027b404ee6f68330edd4b40a3e4afe9372167a4e5b70b02bb8af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=ad97ab59b021e2658400fcd8dc38d863759714b4ca95253df92b7d83523d7ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=afa167c612c517ed1ff468bb35d5340d646833d8d7890500d538cfd8304ecd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=f107075b6591043d47e503720e04575b6e7c0f77c605bb673de0c0e58d49e4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=013e9cd1b7bd86c462b32b92f821a6baf271539fa2e81d6017cfbfacff9e9619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=92b9759abb8e9dc61705ea50d1bc5d880fb7490672b85018b916caec0a4fe771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=1ec7bd460f93b8aca38b311fc877c15deb1de028980058def021821972104995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=ffea9772d43b692a8894ea7bc184d95ff2d2d8617a95b4939434637134caf7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE6G7FK%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd3ebMxcWZaTlY8bMch%2B8jziYGW9C8QR0QdmtSzgzcsAiEAkW1Yi8MqzFYCu6j6UfmKTTE9NlZwFa8Q87Y8vozAtswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzeZHa48Se%2FeAz7UyrcA%2B1aUeXDQOk%2FgWeg%2FE5vRsIwq0TyIevclDOLjpkLntHhtL1%2FfeGL7R2C8FjCRxiLT03V3U2Kkbw5W9OZpnbsVz7NX1vXjlu2XC2WyO%2FSeYGhWiJFEHiXRID6y55C1YtoTdo%2BYESpynm58FoQneckWzMZVSUHuCGhlX%2BHDXKgT7nMGgi8YbWofjZ9lHtomHu7enIy1rTBTT27NOvEXGrWJIfpixvE6AEvGpUBeXxtgbVVF%2FrtAWkMDxYbLi63xLDt8mGn971rzACXxiMvyPxBNIMFaDKjU6yxrE%2BtOv10IsqGRY8KFVKyZWevVbjaluAADid6EEQFtzBlAj4pGIQjSlx9yaKIvH3rnA2SBMfz0IY3ftH60NB9nQ%2FBI1pfsLS8DSpOjJVb57YDGZMmUKdvyudqGgriltEU278EhyslP%2F4YLEYaktkJoW6iEbmIoXuthmoPjVUxM9lsMZFbN1zCyaKWe5fMrAwG6DkworfJKo0%2Fl1QQFzuqeCWpeissgEdKvbETHRkF4t6zhoEtVD9lqlbTyxHyQRNVM7fh2ZhaW2VdSbmrAoESeH6cFMKhI05bj7t4PbzRxkMvSXl1Shpkpt6Xu%2BebBk%2FcpiBROY67y6v%2BmtCKPlwgdUGeNtaZMNiVtcgGOqUBrh2GfEl%2BMDOwCILorCW3mT2tOAsg0KwrNgzm7%2FslbAfVRJAiI3rxVPeNoN9Lw23FFIUb9AXRDErlt4u5GohBSXzd%2FMpW5no1s6sxxKV9xU3xNM3T6BybkVqxK3zEvvnua%2FMA0x9InDqCuHT36MssakTJqrMHS9YULsvSEF2lyA3IqhgbtPQmiCPLG%2Fp8LLrvqhSHXEvX7uleUiR1gmtueghQxHKR&X-Amz-Signature=69b28bea196af87f3a83a301af15e2814be4b7a0844696db8ec44a1350488d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KFAW47%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B26wWrDLC0DK%2F%2BeR6RfngnEo2F6CQfxJ0DbOgVBpe2AiEAsamCT18G8oFw%2BjlW23gKunM54UIVKm8H6FmQR4qYBFMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2rKtcR80fJMmB6YircA1ZKmh4VicfW6I6mW%2FKqZp8yirR7c0QNoCR51ph1tA6LqDcgJPJnEGHzidoXslEUU9%2BaahgsHGeybY8NWzcYB4PTFcf3w%2FgzKmG39BJzxgrkW6ZRJX71HnrEVLTad4PnJYtX8OUsoQWZVh4qpMaLxhUPQK0aBspIpyl36sh1F8UwuXzf1%2Bhf4GUObog2hIe%2BiNwHLVICJhvlJLpGKOY%2Bt8wlVH93KGaEISP4V8SJtAAyllLy75rJzwEuPcUCdX4MY%2Bi3mLEC2Uude0yJHSo5iOdOn94duH%2BZO2eucrCKZF4L5Exaw6qJAAWB3%2BlW0DbNnwHW21topRiXQjfPx9iasc%2B87H187nWjaerCIQNgp0lcidqGf98y07dufnNsfoS5w0VN1hSdNwHCPS8wBLXaRG3UK7z2Zp2kIqLXBEWZBTJc4JXYqpO%2BOxlouivr0zU9eLJqoQ9Qpk5vLtWP2o8IEE5iMPrXYuJBG5wDpdAtuJ1a9CV4x8xRkj9%2B8eMtiucvDDHvBKu9OD6izCHSM%2BHADVyIK%2BvC6BUNpYH3mxYuBW9mde%2BfoBiera7hAgR6v1nGEPAjbh80DklzBc47P29rldpFxMYiwKoJcNtBUVYGoIKuxO1S%2BA3PRoEmqDqPMJSXtcgGOqUBmDT4PzbCBwr%2Bl4o08Ukt0sPxkpsno6zn6SY3PFFTdnbq31JLNkkivMqlNxU8Z1THsvxOgZl6YY7mi2fhfhGnnUM76VMN4ca2ypBdGBWPRT72bF7RfXdP9KhJS%2FDv2B3gk8HXlDI3NutZnXGeJvk9foPIxDWTzWN1blgiEY%2FRA3yRJ%2Bcqg5p3ltFnholYhfq8trjryts398k65k2J%2F68%2Bo%2F7YbBkE&X-Amz-Signature=310f97599a28dfdcec3cd10d4b4a4ffc80d4f8591bbe29d69c681a0de6e6ecf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=f058dced51c99ce19e056fb8e87b371087b3ade7043cb957baf755e7ea8b3282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=31c218d1de83ce7e54ee868b7095c6dd037812eb1681099217a920bb4451af33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=ee9805ee7f74faa1cbc9706d721022a9de251649bb1cc20a5d62bc11363cd297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=a0b1a2e80dcfca0b0a1158599c9f5358ee879ba61837a0ad3209a795b0ed2ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=bf57e82edee6826a8a75d1fe24e591bf907c048828a53fdc99891cdfaff50b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=1a2f8042285cbc23f9d26b3cabdfc2ba58ae2a47d2d79b1c1b9a730c4cb0c70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=ba701474a39661c6ac8186b3f853de9b66baf67c61741c283c02a1c48ce6b49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=6dbb1c3f4f1239d39172aee2225fd9512e64a73ebeae7fd85c2c3152bfd8351f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2I6GCS6%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBmc7wFjp5lvb4SjiNJQs%2Fn5V59kuGvQgibyBTpJZ%2BR5Ah9ZcD9SnTsL%2Buf7LJZk3OUegdQoLUCkmQlSUjHv1RMaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFOtR5zAdomhWGsU4q3APG9sl8uBjZrevLpDWnNYdV3%2FuKiEEa1VsjMqH7lj2G4d3YbaePoFNDQmIklVrO4qo1h40lY1rjATGG8qOH7JrV%2FRPcZB5HmbE1aI5qxSyyzlOq0WS4M0ZjjEnbh0NF%2Fz3km30gNvd2x8Soa2K7IqA%2BHZIuytaiO34zVI3OeABst52%2B4ixDebKTRW9kC87dHfCDAWKAlCeVgZ7q4qBR8i%2B8y6QjwIw9gWQiD7CSXja6sG%2FbKwSG4LFKX%2BSXNUdubBxyTLI7TXGCTIhlFXmRjbFsDGFXL%2BdmmmBYPps8ha6J%2FhiDW4B4gMnIg3H3fsNKT%2BlEqCsYrV88KQM6KxJgtFLGq4ThfvpbnhsUxYn4i2ROsqYR0svmUE%2BdqzZOn3EKj%2BiN%2F96AnMtcJe%2BLtJgU5LOMjEoEvi%2FeqiZX43AqoNYWVKaE1o%2B18lQhh81c7BmDUu1%2FE2rn%2F5HduyCCzwLV9XVAKh5iq1zfxB%2FPJaW2Ticl3ZRGO00tQ4iHtZ%2BmuMj28hadDH9S4EM5%2FY012bS3vZh2dotb3ohMByLz%2B6HdOLrbzgSnwKAHQRRty4iDQhAv9KBFQorRRdmLAvKQg2YUon7s91%2BIZtttNNWJnuzjUhzSoraz%2Fi6MbEVmCjOdKTC7lrXIBjqnAdxj14PTyIHbVPLJULRC8zKfp1sT3rjjZ0%2FQG5GmIlU%2FzZv9wDQOaPAIMr1ne8v8lbdBXfFxxvk1Ysaqi5PvD%2BtVswPKvMwE0CbU%2FpCva5qSS4YXfks7Cz2sNYWqGAudX6X6tb82Ath%2FuHr1LHqWlcOaMKH3uGwfme%2B%2BAo3lYYWTYkGXKxV5m2pvEToHmGw5SbDFH%2FngFTTqgQx50hwwGKK3Thxt4I1Q&X-Amz-Signature=53236a89f3bf6b3f44d20afcfe21962f88015e294f76179aed99f2c8cb59380e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
