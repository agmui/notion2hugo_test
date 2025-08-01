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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=02d9088894ea14a992ae2203cf0f1c54e05ffaddfaa4857c9c2d6ad124da4304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=335db92f7dcdae7fd7520361137a694673c6a75300de8f26b80b81518f1f9d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=0453d2e5eeb2857d00077eb725f3bc2acf457302c61d399964c360cc236391be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=9ee08e11c6fbdffa051d0fbd292a4b84c37ea9f1ea040f0e2516f216b95d5491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=0681e2585d6b100e42375de42d15baedaf32c8f053153ed59ea5eb91c346adf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=0e56d5d87559de816a43cd972446305f01fa17e78b32c43d766e35ba7a29f7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=e05a4e591b0253f574eb2a27f3c2dfb5f3139978e70059f3d44f8ebd8f6352ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=a7b0f1a80a3a5450e8e83620263ed849962bd429f5f124cbee6ce84a8eadaa3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=8e8448b8335a287225d1ea27ae6567327832137d960c267cefbf599b8eedb264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZUGR2U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0abbZ8oGkxj%2BSwIggSrvklK8GNCYk4qzM0oPLSVjqYAiEAzimq6f3o%2BdDDY7TeVLqi9CXKjM9skOBFe744Wq97ahcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJJhBQadn6cAJksDCrcA82ZzsKeo17yUk%2FtaDWkmkOVEo7gAR0U44oaa9N3xgDaeMFVio74vQXRVIBqjNjEgQuunf6fwdl9G%2FSkY%2FinTQk%2BkcFA2UxW9SNtSNm5ALWQBlpXZVvrIBrKjAlx16z7DOUvY%2Favyds5hsIKZNJWT%2BkP71a6NARTax5NGFzilcc6xEZ4e1tFmUyfahwL3XdVDDYtNu94IstnmHd9wlAtcdNaKlol9S0X7yNdLBD5WLeXV512slVdA1PCq4Uavev63K4D8nOUp6YoWrjq2cJ89IvXidpW%2FmplGSl%2FejELouEVNUyoQHOzOizs4Q31d0KzLZMzFaAfKtSk9CV72JRI6PIRDxRKeWqc%2BHxizrUIAtpzb1Fa45TN9xcjfs%2B5v0kkRGEOGLKxLQ6oCgm9k5bPMvCdkzsulaNJW9664FhMvx1hppVfsEMMqdT1KYO5udoT2t8qWhUHKPF0Gn8zBjjyxszvR08SkAMNaJSAUxLSnYvTrR04F2%2BlkF5EEsAf1%2F4RDNGwDT%2BccgH%2FMusk%2B3gpaDgiGcMLR7PUoMarHDwEXU4jYFSJHkOGdyzhc3Py%2Bk0tbhA6pR67TGcgaVj%2FQXKYBA3fGsmp4BpnR%2FyhwtYMf%2BCsFbnutFWV%2BkUlKn8AMNews8QGOqUBZHzwuFw68q%2BI1khqRypToc%2FYkK3i6ZA6CnU9RoUqZ31PWULXu%2F2iIHLou4YklwgETcFsaYKrZE8iNkxwHinTBTimLR1U4xFi6S0AVVEFvCPyeaK8ePeWnquFAAVvKJJBerJlGMu%2BV%2BBLwLnMWnm3LKv%2FeGWJkpbcQNJf4mrgRlGQxwLvTx68lc9aW5UqaNCH1cAceEVwFa6q4Cd4MmQVvOg4xKJR&X-Amz-Signature=1d35a29f9592bf25fcbeba0549f2a5e53cee0ecb3cb9187a001ab152bb2f4da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZZNB32%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ypTou0xT97m3wUioFviKovqeVQBEPNCkfLusazFRjgIhAMt6Vs7RJvbsKSjnjI4yJ%2FAXgfMiuajjt8mfjWGFxQ20KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoUsdkKyhYee3A5uUq3AMFK8j9SAivkU8g6Qzy%2FMWm2i%2BU2BzFN%2BMMn0OCgwH2z%2FXHsd8H8hasbazjqdmq%2BLrLnY1WIPJPsJEoOMd6xy65dU0UWJMdVU5r29DBLyV9%2BcEDUhuu0BJfjs32zbXsSrJ9S2i94jEUiRujKPH2Or%2BtHro5wtI%2BZ%2BL4flEmY23GtwdMhcRJ9TkgU%2BPQoowvdzaNeT9d8wF67RwjKpjfz9bK8W%2F8amnpYoHcc43hdecYly2kOfbyD9C9SaQHqGgmUgwB3vVdI3%2Ff1bIxUl9RJuaK%2BTBPxw5BIpMXFywCgMAl%2BtcNgQA6eb0PREtSkL83EeTWT4FhGc%2BtJE7bwTetUA2vpUL8RFZSdUggjV%2BoDEa6ihIDR%2FMGMVNDADuXO79V8Ufnc5mYe3ushKHsN2ufzdFBEUMTa4jU8b0peXD5D9x7TASU%2BkeizQkHLEB5rIH0rkhxxcvDyJB8Erk6HQJqSShcPTa6tgEM9YtnA65b2csSOKj3pzMPMeOFLpDmCIgvNsozwLWlkFjyiDM2tYEBCdhv0SQrUr9%2FCt31DPvQNRYZV3LGYh4vVIbhU%2FODoBaqkfbxF67RAObytxxf9UjwLyn5lygUKIFZ8zuyBQKfhQqMksUDs4arboBNuxb%2F%2FDCksLPEBjqkATmkQzBnqyXFxHDEidUrG8iKyGnBtrpKjdDY98e2bnX0OXk3oGLY1xlz0K0EaohCD%2FnG96YddkAOcAcFb3g7cwNk6BUjYHoJUljxBuVpZ95xMRZRDYfBWdxhA4zScn6K3ZFIMUPDRJ4IBGlEFAe8MjucDK5R4miOorJGce8uwqV46jkUGTcdP6ZzBJWnUIShdxLL7KiY6QnFqUHPRkYn9LqhNiUZ&X-Amz-Signature=3cc78425743543f0578ad36f0b99a286ee09639bbd45a216acb4821937e4e409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=456d169f54f1adfc8881069079c760ddc375caf6177e461441252fe574fb2d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=211a6ca34945d96ddcb0c6903cf3fa5b5785420e86d5e4174a366cd96c78bc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=bc83894603ac9c4fba1bb5204b62b91e2ff4236ee792cecdd22c5a22ca85e53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=b3f841f92c42475e8afb2269fe402e16a16ae0e3dc0089086b7d91e6222990fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=766a7d6e6d8629a1209df693922ad7dfcbf18038e70db50d42f15c959dbaf803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=6e4131775722b46c62eed6fd9f92121420b6b07d14731e9fa0302aa73c28b4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=ff5b1bbb9c158a45e5b37f45bf13acb924198364580db1e917c104557ddd808e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVELIYXD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4pFsLLVAsoBHdWjxebePpIYUW%2FBANfczNiNWwcL%2FGQIgR9UqthDPYWU8zvYgokl3wdPXJ%2FwH1EF6xp0lknQsQyYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKntFT9eZ4lfiEVu8CrcA4%2FSqWCKinhH33imSCCAkeYbZ3uu9G%2BdiIgROq9mkVyYKrKyvfH92iUGDduV1kuNUwZ7KdURqO9%2FicDWqaWZ0NVe%2FPg39GisxJyA7NqDq4EM5lwSrlW6rDWfac0tw8FDxfw6VSshE4JKlOvwbt%2FkLF1rtF6XKBMtFxosJOjhoOh7b8Qx24wmDgxAJytfVOwvrMe%2FQKJkF7gq0kjnvb8IbVVIGfvVesJnTNe%2BPJQpm1WlfneHUuBuWsGE59t2ZfbymIl%2FHFS0uFfrD4ydr1nLPfWkWstSpFfaulaLdTjRmzzLLqqDskImyl%2BK7EKm5lrD7fa78helrLHw4c%2F99kYSRLeydF4RM1RxZILjtw6YpNQXhpSdcnavJpyl4OZSa%2Fl9MfVbqDU6P161IbB7ytRuQOUDq0OnPUeH8vXh5xFKLfRBIamjYa%2FFrUWS3MjIQoM7PRA72TLcBuRL5qHfET5%2BissYpetUfT8yCHNBl0OhzPtrCcOFWhgGc7eaolFVHjfMduumQHY0Mrs%2F2J3IJeZitbLDYnuSC%2FyFUsdhk3nTekDfoswg%2BIdsr1MSgmgVlwuAr%2FnxjOMJ7mDaaJfxBs4ue9Sm83T%2B94rKXEfvvRvNkRT6zUPV7VP18XFei1caMIGxs8QGOqUBastF0FUMUwxyC4c6rBwJkTPVO6%2F5k3j8fFHGNn4qvuh%2FYC9cnMnhLAspaqxjb0VMzLoy%2BVqZP15N0cz92Y8PwfSugPGUY6sSc%2BCQvsh5Y77jHgV%2FO9R2rfJiH6UZoOshG4fWSa5UBiX7KrKnErOk8hbFuMDPbQ9cg0BzqNjEsjvfeuorX4YTmXmbTLQ%2BF9h9KUcodilcETVMpF9KwezqIf42f%2F08&X-Amz-Signature=de1624c823bdab257b7bb4ef5218bbd88fe642f1b857ef89a3ed95b24db077f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
