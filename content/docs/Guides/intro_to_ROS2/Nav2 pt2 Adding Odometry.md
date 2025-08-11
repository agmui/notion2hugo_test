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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=c44dcaa1b2b38f2c2b11f000b4176b8f4b107bd7189a240c0589ce56f0f8cabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=0da3ce7289f712b5ec71ced011a503325325e9692256b325cbf0353d20d1a920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=ef02be4579c492803d842e7b412634e912cc2a18cf16536124003d32a023b40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=82f8b21710daa3e904b0156325d0daa22f3d52035de0d64ad5820d305323d429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=7eb6a8fa276664cbb6e0fad1c21261c364aa51f3c583eeae6e5c1efec4660daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=cb76ba6fb5ad55b42bae89b46f47a989a1803b03005be4b6190c2c4a4ee1b97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=0ca960c796f0a792d438728459f146f31e0498abe788c3a8e6021082f0825202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=417aa6d9fd0df9a141ef26899a4f91a4076e09e275bbaf4e577bf1aa84fe1a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=a2da4d211883d6555b184e460f7ab628391621553025c84c7514c90db24c6c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPUH3HR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv1Y7qfZgoxsQ%2FsJAszg4Bc38Fv2loL1x11EZ0MOkWeAiBGPFLdgqQpUBhy8SwaDNpJtu6trkWfNLdzr2OS0K%2BUFCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41wnnQ9Er%2BJa2GoeKtwD5n011YpKK2wjufNO3VX9pNFrReFxDNoyqb0o94AQgaTWeG%2B0RwPFT6oWwVyNryeAYwVtRIWLd8gcu5GRcRRrmUv7kV5t9W0vG%2BKy%2FHZwYyq%2Bda3H9fio5ZKxydDPda188tNUS0ViIyHjup3dMjGaBPyVwsBUal4RbX8X6HELMRWy1u4nvVMujfl%2FHycrev2HfQjH2ZX9pcpKLDadQKC7l0g62P8GYdEHShMo2vZe6kGTRdieM3%2F%2BUGUlPgf6j2gBWwCtwqWjVz9bXQ0Dei8V0XPdbH0lQJHtyO4ukw29T9vZbWyCv%2FQruDeL0SG%2BYXNI%2FzTT2wigH7qZmRFK9YMzAQ11U4MsCoeQB7i94ZANFas3x9zewYISIiWXxraSU0x04eDXAhI5FMpUBQgY%2BX4Ty7G7D6u%2B2pm5PoIGANRiSI4vhwApJvkos5ofxiePNPDaR1mj0ZFsGtIYvPfhnUhBJ7RdySbBdA1%2BaPw8B%2BlxbJYc%2FctvXYGWOkrIe9%2FAOXL3uUVU7ypclw6xBqmkLeUZKS4Wle8Tcjfn6zUYLwmY3yOfjQCrDMtJy47au5VkXQvcIdCJIwca58AwWq8pEQVgzcR1WkUP0rq18IfLriKNDo9CIV9bl3FssKdnGN4w4dXkxAY6pgETDVE%2FjFQAFRJVs1dFzR7FWP4OzFa2rmubDQVid3plFYgQT8e6Rc8i%2FfM75Ski2Oc7X2TxChHd7vrRBBUFCN0UcutH5UiYUKSQQ%2BDYQiYEbjChi8aiNTUjFioU0xqhx82NhvZdodCA9h%2FUu2cIIYqTUBZ4FoN4uyqb7B96RDigrTe1lwE9TuVbO4l6HQbo3aK4QH%2B1jC75YDa4K1RU%2F%2B4THvbAKgXZ&X-Amz-Signature=31414a75e8f6390b76525851a478dbe1ffb9bd67582a42f71df7a14f073bf3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVGPHWRZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyfKpf3vYR2t63GYio2klruBSvsl86yBdVRRLmxO%2FjCAiBQztozQ8OVk0kpZtuhhQ8n%2BAePdLz966DHKweKDY4ofCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8uCEmpGAYcYVQPAEKtwDCaLkd6jTdrUNOGIEx4AAQFw1Q87dSUlfQ5fmh56uMPyEuGCkWsWVPT%2Fqx0wSMy50N1E3ayoVNjNS69x1H5%2Bvndpqh9b1B52Gbe%2BsbfOpZrrL75dRgnbezVkXKYLp3bob%2F4xnHPHfPWt1PbYEOa1JDlDmm%2Fgbd%2FJQjgOv0stRHR9CCA9WpfD1QuamcDeqMBOb47Mv3oBgYt5DNpMMyYA2o1YagznF1HCQkceUWqYe4virm1%2BdKSJOgsELOx3p9kyLrbNCBbcWUs5ETcFho2bJRnqP1U76%2BLPN57e8m6rHX5NRyE%2FYubnbXJCV%2F3l4I5MHKOgjtJnGShoCQZaYOHIQ3LZECAHzVdCGQzQihVZcwTeQG2FIIFCdq%2FNFCoPR3jwurpIMX3VQ1%2FJ4Rw8wChhQhyEqz8ik3C3tOx7NtsnAUzzs8UwxVYvRcC8cf61VXIPQ7nJptJ42ZlkjcdYigkIwnBwy9PJ18WD0E0x7Ec7Gt2rvqB%2F5J6gkzIQuAxAuzyNlUzUg1rjuR6s78xD4QRA6kEjenOsnhJAJVsG1cKsZ3qe19v2Hi8hkHbk71hif8u2I5GXGzzqrCbZVONgbRi1sBypCLKpSurh00jrhWEi0Y5G77e1g5pZaQnGcaKkws9zkxAY6pgFFdbTMSjJ1pxLTXs8keivq3zs00oO5uwJEoVDRUEG1A8WxLXC5O4Xmdnz0JtZYEGQGMFHNKEhyRfRJKDSNuWvSvUE8Sa5dU5XJV%2Fg4w7hMTQCrpXu5thsjvpxmZOrmQTY9RMdO9JxErn3EtZKA4SbAlilo8sqicRfsuQbRMpPpbtqhbuXtgzXP467XvFTDVGJgAScFamw7ZI%2FsqihqFFnyJ1Zv7lZl&X-Amz-Signature=a9933ec8e3f08cb97241ac15ddae791730d71832ebbec1535537984cfe1d6bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=a7bbf9c7b8c381b4829b75dcc22fa5b1b1d3081a8d78cc6f9eb790905df05ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=55714002d21421ea1702422664fe1e0f2cab10dc62e39eab1647535319dff62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=31a6c16da9706b59b96c273bb9b4b9a85638cb54a73f162690293399f259518e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=edfa3a6ee0c0c8b2e24e0e215ed45fc8e96d1bb1b4fec56ede77bb1ba5dc637c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=440d4ce226c0360132b630f4b8ee5772ba369f9e0f272ecbdec0f4a5b424748d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=b3791d722e814fb4f8811cc0a28b4e54fcbb4585b87b92a436e01ed0badc1bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=7cdaf62f417856933f2d9134a573a148ac19b32084b5f8ee0ff7dc7862a5c1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=0d9627f66fa9c6493d720c2a5b90fe4db929652ae7e238ef631885abfb0f03b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFIAJRF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuZTSnQmfol10VrSXF7ZGrPgUtzp%2F2uazKKUz69164RAIhALMp68oZE%2Bsa%2FJZikrbBbd4GUUN%2FOpiRRWvSh4fR0t4aKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDw0bCg4%2BY7BMqV8cq3APG3jP90KOriVdCyeID8qqOAzmJxpevPftCLwS2fM9oTiXYU8%2FaVqJ8mcxicAF%2B2VTFPvRlxHbs7ns8cPqkF8uYmXQGSTl5fw6G7jXLPuBESIv5gz3%2FecDWMQTKX4bpAcZ1pKjzMluc8NSpirrrRubtnJiyy8RzNm9dWgoa4ASwKeg7pdS5cpjQqp2GDyRglz70KmL02kNFKza73vfMtHqDmjpxSBs41ByMMLIymfzxJjUr4VRj9ozHoEkqxxbYOD1c7xPt9VmGmwXKwNtT8jdPe9pn%2BR4ZXg1NN43gqMdQXX2qggBTQ87F2KNaxqVMvMxwtWQUusTxGpswVPkh6BHNnP1xCacJPp5vh42Six73jdh0W4EeNLcIdCEPJUzX7ZCBS4eF5h7cg%2BK%2F065Yh5UarYBfA9SXe%2BY2MTpoIoeOO06T4JW54FOGYjlDuSf3MCVrqbBUTL%2Fa7q7vj7%2B%2F7tNkzqFnm%2BrmySdnJmI%2Fg7oQUGquh03hHBpbwkE9XNbU7rWmaxGNrEkOb7bnl6D9sytEcncYV4zZ8SLooTYMvHzaV8%2Fu6LeuJ2mgWFVliCrqtYH47r3Jp%2BkawIt49oz%2FVIUO4xN1fsB1X5Mm2dNOPzcwRgmJguZY%2FRK2cqccZjCs3OTEBjqkAQ3UGCHzvlCBQJ%2BOUvqS3ljJKKf5PBsfPiSkM0HQThbG2cyBBhzUC2a3MCF3pIkYjYGfut0CvZRPJhGTIUjWyjvTNuZw4CqL9qiCSEgdpagHSsEZE%2BCyl8Rg3I1SY53RWUZwoXLkw1dSriGVxk0iiddfcSZi0Sp8XLfEE2QT1e2eh8euBsSxHu3gghiOTGzN7dBgX0k11NOieu9%2FLSV1z%2FV1GY%2Bl&X-Amz-Signature=50da819603253614303e457cbfc1ca132eb27090d7b7fc269894510b11c80dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
