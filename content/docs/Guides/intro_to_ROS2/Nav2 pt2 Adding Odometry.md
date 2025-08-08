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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=e3e91b263964f09fca0ffc821bb222df4faa7e18cf3682c88146c19cb6b1288d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=e27df0dddf97fa5277d1fb6adce37c7cd86ecc119d2133a637312b79a172293d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=53d8b732b4f013147925031975a562f337ba8f801fcfb8112d638722a93cee18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=243e50df7faea08882c2f8dcc98bdb2e48bd1fbe8895d86d7aa5c8bad60ad968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=d02bfefce63df029e133346dd282c4357ffe1dc1defd30657eca2dac45061f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=a021a5ea3319d437fa1ac7cc70242a77c38dbd2038b3da020ae0d730337b7612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=522ccf2e1331542c2e380d1d5cddea1c0e08ba079afc4e88b27ae5de503a65e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=55fee2c06c223694c2aef083addb5a3ac2dce046e8c3c1b8a9e8a61075e51082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=c6d044924762f217893bc295d725c5bc395781c8a4eaaba967c0e871b8fd057a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LULCK4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB00cqxXXWDMmQyCq73rAe6po%2FmLnkzN0TgMhy3BOzC7AiEA0JPUhKu0sr6BTa%2FdX8TKOnBeNZQeUY6%2B82ttDyq%2BfboqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDooxHFEVisMBtY4lyrcA%2Bg9edxPhi6PcDn2ClWK3z1qHDg52OQNS6n93ptvyozgNPMnUTZeGiM5qjo7IFqThEDIMqKh%2FmONvpCnod%2BhrYMcwMdBOXijWxEx9fKs9D2JlwKlXs0etxPyplZ%2B9%2BpuMxAxBFdkqItP0teekXIWTJ0%2BwSI9yD7GHsqU6x7NSjlia3umaOtqkNzXAASD%2BljwsQuooZTMaZnu%2By08wvNWR4CWAtkvbAZWyBappJR31fzZC%2Bsas1SxD%2BjdwFSYLFW%2BcQWB4u9idEjncULhOHPqnrzKlomID%2FRLNp2ptsoCCNpJBZxnBLcrGHOAHK2VozPwn7TA235lmKLJkHHg35INHzUoxxXZ56Ai9g7chSlYGIaxV8Qas3S1xvGUyvIf8uwxpq91ZLyKDawkxrrPo9Ak2jdZk23YhxWI9uUc1%2BiKQOZmyYhhaTFi5QrVjDPF0EJ5He3me2txhbR%2F6tP3a%2FLQ0lINLobi%2FaxB%2Ff7YsIUYmd5Tpv2s%2FZTun%2BXln7KZvkajmHP0ie0RmoFbje1uj0MVX%2FJy3P6UGVH81jfMMFuSCXVLtuY6aXr2sIGWoZj91MVKH1Gl6Sd7C8IFhBnday9X4ZTakY025o0gfcpnZTRiQlzv7BL4I7CqIESKZiJ%2FML6C2MQGOqUBe8S9ghPpe8zwmltKIjFwgchIqt2%2B6NWQo5f4SWobCyeM3to50%2BDqbf31YF2bmmOlKxqOjItTaOYf7oH%2BKcwkdxZgja3g1FZpciK8BGvesgPmcvEDhcwqrivSCtMoIu83Ky26ZA6wR6WOJjEgf5yrNOowGVsHZTVdauawwM2J79GMELWtapCIym%2Fx4QziBBe9CXyLw1c5ppEps3kgnVhlhOyIzMK1&X-Amz-Signature=53f0084fbcc0e4b2d992c063eb3b3f48d34b5fb00699a558c16c66e0b7a6d8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CWMV4D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDtI49BrkDT8iMLn%2BMmmIGSZhGdZLDKSHHziYBCtEu5uAIgWl0urbCui0EjAxfec%2FKfYjO220a7AxVLj%2Fl5NvUbYkgqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPiS1gUOkIh5pcP5SrcA2U77AiGwDhCtCX3z%2F1yBkN4kFiHN7YgNVfAs0DaRU%2F6W7owgWMsO7%2BDTjBe7GWqlsiLTjupOYLgIEgVZFzQHZQ9sRl3NT9s0gVGd7btuq5fiX3xeRUfAaxHPycoQxmxHKQ4hjaqcthCigxRtINpa2rcwGCeDKLXsbIiT8QqWmkv84xa2yXC0QHwSxmup7JdaZ5v7jkDkHpIqVbjr%2BDwFZLJ5q1CKQi2Q3tfsrZU7med3jjEeiduUi1t9zKeGWw%2FKK019issJsutxS25gdniyTFIV2sMee8bqfuvkZl%2F76JtsIpbtPPkgq6htUr%2BcBmucBo%2Flij%2BDgEaNw69UhBrEoyOY5NHanvUtYlVp10FVCoXDYPx9nx4ei95RtUG4jRZzxTtYNc4gdgol4owrPTSfdogqNbRXE%2FOAPwKHCLqpsIEHhBMqafuhSNz0OhygxcuO0RW2a7IAOodF9VCKipaEqUY6p7NTEZ7tRgcyL6xWsY3v5DiUx0Kgp8IruHhe05TEYlTVFcrxgZKiW%2BDDAL7lgpSG3%2Fn56%2FgjNHQ7nfeXSh5iUWbKDaZq8BSIXTFSp3XXCuFQaFxc3ciUDbo57UvIxtnzuJ3v3igMOYDHigAqrUzfhoVHyi3%2BgdzpUG1ML2C2MQGOqUBNiml9WNuLM7zHTqL%2F7FKa55zb8R3AWxbCHJGd1m6oUoadZm%2Bqj%2FfkZARvmvykAK2w7y6LwqjgFuB7QsH6gYw5VnLSKf9RhNG8rozI7nqRjkzIzSALeML7vVH4%2FQuBfSax%2BNyvMRs0dzYzMv8TZw8WbcwVGlDR6%2FT88G3lceDyhzhg1GgxCWSdGIFEATqwtGirSoa9KVs%2FNswYS2zkp%2BATaFnLagw&X-Amz-Signature=e2a4b9ca7404c12dc9ba169b8f9f3dc1a8b5024dfe4de05c6f2fc974e11eb56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=7b9d6fe7e14978bda1225a8e3f5307aa08e0b852aae5655c0c1c75752f2fc09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=14f9711206f7e20eab5e4afc32fe783d43558db326eefe8069b8747ea3f077b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=2779bd2a003d4989707dc4d4e43524da6604d3c759bc7895ef16fd8daf975a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=68cb4ce130c30822e45f29823d87b4966e513df93e37fd0930cfa6bc65f3ab1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=5c7f1b471460985034c0ca32d7ba414880b5dfc0604ee4adc5fff63d5ccfb5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=eaa7755e87739e244080f3165e276d87981befbe2a712fb44e23eb11bcd951c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=2a4e777335889922781830fcef1232ecc8808f7f6e64f25130f2b8b85fa81172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=edcae942af8382f571a2d8484cd29206d078ff32474ca4fc82c094b73a170b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHFXNAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQBbWdqWAFg0nz78ji7gPXpShZpYcsJcTBaTdMxgWUAwIhAKUiFhXu3lKAgkjkHvfD6OoDj0ksrVk9YtpXZ1xdG8U0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyugq9NQJYb3r4Ckoq3AMsLUG1XpmnolSJ2ne3ZfIDmG47J5lpsFTxVoJTQfZhNyRWL1VSaAo2ckQ47iMuYcr5X8mS1FLl12BIcaGxL12aiz%2BMcH%2BPLYX59XD4wEhJtxi0clFnGS%2FdRmT%2FFLvjlSvFVfaI%2FvrbuiLBd7oW3E%2BYt1hTjElcWXXUEPPEB%2F1ku5fQz47InawUCEDumQxTDgIF311Q055zPLFHs5nYT1zytD64OSt7MhfIlJJvmNiYWAM5w8WmLJQhNCXGB0dJxxXNF7hkyrcsJ1YoUEhXxOEfcQnf0rGwmt%2FL7nxFOOxVgsillRFjUpSik1y9IAuzD4wcTvQMruQ2a2NQ8UBFFIogpZsAuFWX9yZXd9m%2BA24r4VqyJIsHgYOEHHIdtE6gj8tiTZp0TZOaeFyu5rMsqqHsMNBYA9nMZoHussbGTFNYv2wAUbqeBclKu17pjuWBitGtn3zAum51URDD69rNja7wC0V26jEL98qjSnwnr129CcsiA%2F4gHPQhVjjG4k%2B91D%2FxzCobW8KfT6tmynqgdHSzckUf9lK3Nt0MQ9a5jTIx97mW7Xz2J2fompDWzjeksgUukO8gzPuyShQsd5mvRl7Iqqs3fY26lzLYYAzh3tQ8RHMgvz%2FL%2BP1f0GL65jDpgtjEBjqkAWBBT9FBOL3DymRQlJlQ3q1WJqoveIK1coWrWi2PA2RV7Ii%2BZJJu%2FmCjDaJ9X8rAV2oyf0mjl0%2B%2BBbMuqGOLXML5hrAUEP7%2BCkRt%2FZ%2Bs9AC8ixgpb3Y3RdYIiipVQeJjxLRDwUG677LuZ%2FJHZ5tnGKzVLD5dpdckEC4Vn6RWIsiNTFSzQLXaTAMH6UHull7THs8m1yltLwjr2jmVJmK7Wr%2BXFpQA&X-Amz-Signature=59411d056d8a5db05593c98aab4d83ce505836c299b6b9150d7a7a4035320393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
