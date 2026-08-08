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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=5f11a4a4e14accd18997d685e5ea44d7b6ce0be1580c4f7c4053abee9981e89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=2b610f217b6b434a36672efbf6576577edf37a4b500c555d8b5a45a3a204c854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=40dc7120a0a1ffc753ba053d0f5c2705646984ee66d99eec732e50fd48256cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=874680c5e2f187c1d5529e677458650e8f91cd940aa3916ddab81a260f2eb369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=dff010460abb8cfbec6a5fa88e99b1adebfd40d8d293e0b50fdb7b0737891ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=1e415ddd1bfb363c2a2f741814006c317f0a46996b1b6f26c935cc73130dc15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=88b2598fd89bfd5079c84d9029a125c73ac72b1e63c213efdb145d4404d43f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=16324d522514ce01711c8e3f84aac72786b7b111b48251bf10186b88e4503c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=097f991e854fca5892325bf30bd7cf6a1c2190f2522480dde83ad60a8119e595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OLWCET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyIppip4w7aA5X7jCczowa8idxyQ0ii7MKnJ7imVsOcAiBBXg2T1p84HRxGGyxhif6tpJYriT9p3Pq9w2VDT0VUCCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMt1X%2F%2Bt5QAh1YnbnXKtwDujCibsYl9yImfOcPv%2Fdu9jihGP43Pcv4TqkVF4Ac15tXHFQSgWO9fEd29Mf%2BHGuOBI7wdd%2F1rTcqGH2KA9a7r96UFFxvL0VRsjE4I1ji9tX9kydqlHRDKyJjXdd295EcvN9jLSJb4bLUslbFKCkKZ14V%2BnzBQic5DnXuoTAaabWX1lgSR%2BJt%2FYKKEH9Z1p2%2BVe4Uhbm7dos9a%2Feh4blzdDZFjv9TOoHOJCDCEQI9NNIWFqHzBV1oQgPTANxEwqDb80tlU%2FWjKIRCJ8wzXsZpa7Eh6H%2FDUSR85txFd%2BPcAR0nqjfw%2BVcNWh0l49KtdJ1p3BpLEV%2BTnW8LKMggmTwnNc%2BOpTdL8WxgMdp4PVYOY%2F38J45U%2Fsyi3vSGgQgj5ZD8iHtjhrqSgt2tc8WrlWOyL8OQhTAvPubnWfKVlKidrDqjbEwUeeMrujfnZCH4agJ83tHDkzA9FAmOzX%2FZSyVFAmj3LDYOEOLFOdrUQ8pmAZPSQ8vaEUmw6kbb1%2FWwKXlpG%2BgZwYFIAc%2BG7K%2FJkczJTFSWTAwO0GeSLuqaAI9TjF2T4b0TPj5LQOYvl2xn3Ah5fj49kp4Grsc7bedTOxDqtJSv6B1lt6Dcn087QIwJxlZngFPFF6fyJPyYAU8wn%2B%2FZ0wY6pgE%2BmBC7MS47%2Fsz%2BtPzhTtbGdFAEagyHs7uTKVyT5BzrSQr02p1%2FRlBZ7eG7fAODM%2FLTRIHWkO2VAMSyFwSrbWvBJblw3bKxbsXKLCfeVte4ewrYSV%2BlLS3KytaJKYEvrtbiVYF4Uzt70gTvVg92dEY8u0KLBmwA3nmnDG4vF4CD8HXVnq89fiyaUiU5Niz2OSkt8B6mxdjTdE9exOyvaQeITaqRvZ7r&X-Amz-Signature=f120882338b7ea49bfa117d475d190cec4cfd2382aa32e694aa63862a19fd88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVXGZGD%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHxjbcpjEaUSqIKmNSOk%2BjswMuPHxTFDQ85vDVS%2BKu9AiEA80Bo0p1vaZVonKF3o9TatWUqliQScunAfjT2hwhO7Ecq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEj%2B6Iw7vDvaWf65ySrcA%2FxpHsbgUvNyxfpzb4pxaUSH%2B1QKECXxSttYYAVBaWgI8G9kj83l3qSLcHOLc175aSlywC7VK9BhbV%2Ftg5KkjYO1Untj72gINkyxfJXmiG7Zf8fRhR8okt2iLLn99KdxNHJvZwxsjyNppk8eMFU64gU0zWejnN3aKlx61CBVya1QLUoiNtn9UlZCjAoQ%2BOvmbB9bQuiCYLXOfeCtqL4kvKljVHPqwS%2BAXdNL%2Feoj11iDYwqz8YUNhl58kz3yhpCOIMP4koWZw1WWKTkLKzNzxJxTLIoyMEsvQTYXMs4yZSMfh9PDgt%2F9obG7or7Vmv6OWS%2BAVQLhPFVK3uNi45PtFJhkERoglJdbKroTypj6PALdnUSQCmv8LHtGH%2FOLk3s0lCLnZjpehX0AbVvCDTsPoQemRn0Wx4dXTi0kgbCamidCSFcnPya98DFspM5fK5FMM3yTRnOM4UbyVsR1kH%2Bl7mk1do043gQ5ZCCtpIMudbnF5PR9VwAGnzInPkagfPWijJHU17WQEaccafdtceub%2BLJASSXdGNv33h7aCvKEAzXqFuP6oKYl923d4SyjWCuGXiGbV8nO0mmmAvPlJsahyK6hInpoNcjj4g39sntdT%2FxrVLkF4bIxD1YeVYUPMLft2dMGOqUBbqCPKjKtL10vgbI74Vwo1bsauhDymazTCb11lEFah0IukEewRuzePpDc5Yht%2FDac3mHSRHden43utzcWJTcMHx4WCpNkRtF99gdXbzQCYYsEg0mK4JDi95dcnTP%2Fa%2Bfl4mWJuNfrIPpxZX7qz2hsYREzGxYr%2BXSO%2Ba9aUowJrruslNpuzx88J493u0lHeQhZy%2BLfjLYdftDFuvoU6XtwD8TU%2BExN&X-Amz-Signature=6bd93b09d51dee2a70b187e4cd62db61431745b0c148692ec1281bbb87f64068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=04d93871f1487d7278feaa1d9972a30be144a0fde961405751433d0dd102083a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=3a44ad3cfb4d795f98baa3c7babdcf79a81b1992fa57c6ea787801f7cb0e0de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=178c4afcb0e075b00adbe083e0aa76788963f11baff485fa3dd88b590ad6a585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=2f24b86d7203fb0237492bce09874117c1d4e4edb3851962d6e5569ce767689b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=0aca5f06ddad2c1b625aa47add9ab21f4e2036140ea24993a2ccc2873dad26a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=f79627839913635c8a7b77288c84201a3f340e925017240d5412e35e6890d0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=e21a8df9b977edd347a18e9b2be159d85f74719d773b0d6826bff9ad16383184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=9bdecb42fa7fd9b5ade7062a18f29a7b2b422ee2e730e3476e5bf4c5374b410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43H4XBS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7IwZ8aSI8QRDU7U8H%2FSidQ%2BrMXcz8TK5yuJ7Bo7ExgIgD%2BaSoYEJXFo3Mcxk0BgQcZDak9AkhMoQY3mHF4V8Mg8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJAZauUh4Tw2HUzsQircA0gJwh77fZMJkVO7WzDDYINmjdp3xizfcZLw7D%2FUGz5yDPC7DRslCXuKxk0o3deM3ZNg7wU03QWWQQaHL0%2FOsn44OfLdLOg1N%2FsegZNW6xL4RfI%2BxpVqnq7hVG9EA49xmjzehzx1VMO%2FTXzIPUPb%2B0%2BfzeAEBXz45IoHkFIbG0fqTOUqqwPj6NqfZigG9P84ieowpacLkzD90SYDRkBR2J33yiEBH8k1gbp0WXS5cBbrnRv59lCQ8zeriIvZVHu9znIJtalfP6NFgLAUGyT%2Bg4vC7zjOtnLMvU2JCD%2BLyET8C1oqWAr%2F%2FzahVRSVgkbzDg7k11ZYTsB3zS3mWcFKKqyWeJUr7E2jC9p5Z7FA9HhZrXF%2BqkkvUHaFmON2IY9C%2FJzEJ8iXhEQI%2BTCZZbGbdm11qtaqTP29dyR%2FVtyiFJE%2FQCKwY3%2F5BHXehYTu9Hw96fcMSn2%2Bjmu2YxuifsvzkEHCwGxQG5DiPKmTDcPgkmt21VQEXS%2FBfWSle3VLHnT1jsUJUrBJogkDs6yiPhn1ic%2BwPCmIe4dRWywIFng9Xg3KjlFTlzwT2U80b%2FjBauuMZt1JjtJO4NkIAw1%2BGneBRvEfHtIOQY3gOzPZUUlRP3Y%2FlI3vm%2BgDL9ovsxrcMNnv2dMGOqUBkYbzQjnTudTchRrJR1IhvgNPo8alfX6Q2kiezS9HWq3uO6ZMOpvfNgKR8MvPTyHLMSrlu2RHFhBhC9GalMhAZQJu7GD5qWiVHpcCR0XGhPA4zkFgcEHZA6ZQp9zMLFO%2BfXyBVZhzIugD6sFFpmpehv120zzCjkMGgpmN0ByiLRYTGTTkx4v9lAQZtBm7JlqmXk4%2BVyTCW0Q1KjX1lSMbXhWl6l%2Fz&X-Amz-Signature=914875268625889f11ffe45dff2816e4accdad8b4ac9c9988265857792172a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
