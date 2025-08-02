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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=b7cebcf02be7bf4f55459eda6be585737dacb7a874f93fcb5297cd31166363af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=52bfcdc835c1c1176f859d14dbb083210661e2a7d7de443627ab8b1ca6440199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=efe31c4cae32e8e6f0c96c7ba21cdaf92ad9240164a71804b48ff93f36ba4ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=406ab7cd7d6d37eb9ba687577ffa6ecbae7eea2bbfaaeb60c27652de92aaafce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=3efa0e5410725aa3af5c3d3d221339e410b98fc5acf7d32eed00ee921a0d908b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=2fe57180c06d19ab8d9a561264c06c518d6085dce053d901c366a9a759cfa63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=5160132cb80ed17ad7c9affbf6b27e6f837ea35d96585532e8fc4a405ee85f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=b3fd9cc43713a20b009f663d38bfa8373a31845e8a2dda71a62fb9b4c9d73376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=706418e85d4027b98f5404312f95f8375eaeec4be87a19adf8ae7647c49c458d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N2NTLKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPBy2kHUf3flm5Fh%2B7cWJsO6%2FN2%2F52E2V1OE7Ez5QTwIgDei1Dudkpl8MjmKWXb4u5IkKhpo0fi6TJt6e6DzpUtUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfvttXyWeN6qlyR6SrcA98rq0jJqMRjR%2FjKOmpZWw0TPAWGyVAbwmhUQ6FV5XlVS%2BEFGQ21xhSpOuf6QSE3WCfxf6iEq1LfkZk4upMj0Uel6BQ5qY8s90%2B9TzqRc2Hc9JvYhrpdZf0DPPoY1JqyaWoeFo2ETFWyR%2FePT9f7RTIITOJEn%2BHkcPj1HbM0Iopt42PBZqL7FJ1s10NYfR8hGaNLC94ZbbVwrpjEvAXAKn3KCk%2FmJaN82CNzgBRBaTJGBcynG%2F%2FmNdqGzU0SyFSAKWBWU%2BHuMAfd6UWpvY34m9YBlAL%2Br5TBUZSeGd7jmZ%2Fuk4SQMlZ%2BvTk6ZFWzYtgv1FeStr8zNrRGOdrcbNDHbEAC7nsmFV3T%2BZPhI9L4NljXEdlG%2FzrQ9BJqF10wNUoZeB55U5y8wCsidzmsSowM%2Bx3BfYcUSFA%2BYssijWscVQGQPGOp8n%2FW%2FFnKdN%2B5lPhDmODt2BbtQG4%2Bgu9daa10jzWVYYn7geTWu%2BtKiTINzJfVrTdtFBHNjHhN9LPD%2FOVNRx4%2Bx3GOUwB7o4Ck5eqVrkT0JyzWmznJO0kEOLv9KTiXRxoyQHC4Q6vhZMPqQTxEdZwZMLeIMN%2Bl%2BUDoK6fGi%2FCSCz%2FdoFwOjLNXve9KqO2OmK%2F0FjMiCDNbrIMiMIydtsQGOqUB0RBWuVJJQplRjNNlVcV4M0kBjVM7CvSjIXBmDK0wdK4O2NP0fz1%2Bugh7DsFrb%2BiY9fuorHelPWTmIpHMeRtU92Rs0M2tSlbnOlvOyZLyMSusx91mIYQHwUKxosSslFaPkAwFm2T%2F9SyQmfSrwMo4ML9eUKw1iIcwp8%2F1GMNLA3lZY8g7lt%2FuXR2OBKRnPP7uoVbCaDmLZhdDZWHKuEyRqesfdDTi&X-Amz-Signature=3c8ba36e6155fb07333edf7de7148b0c8a8a5ab2bd9f0299bb511f832b494558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S22CV7RI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWqkMGIz46LDss%2BhcJ9cyafcMmpDl6Xb%2FgGPAJC73FlAiEA9POL1xBgiXSvbppxiYMUB5hpIxe4QK%2Fj%2FSaW3WF4RakqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdN235dSqS202QZuyrcA6tTtJHIaDXq3GKsF6zKKoZ8dRbATy0CsqhTXKyijso62m4dXtbv5nzxhQ%2BYtPr5rgV%2FVNy5ujBqwoyp%2FL487nvVSsEUHjLY5ZtLOWIU55kVNz6o%2FnGFmuKSrPJHCOozY7e9ZQklFHu0raOo88nBuVQVZq0M8fK0XZ1gO2xHUCt1oGmkwUsdToBnAJplKxkm2Opc24soR%2B3tiYZ1GS01HmFGqosqjZg2VioZxdvubwXibPRO4n%2FCqsunm7orLXUNZT4WUFwK5uy54ObV9di3bMcsXdUYELY8oFnCQ9yIYNN05JRQSsmwRCNU97LiF74wyhyy0WpmI3qmXU%2BVhlFW9jDhI5768K6rOWcCv5qZlfeWHShsiKUMjUiEGFZ8J3XXSYg4ZuZgXLMH%2BT0ue2cmWROAoMAnksW6rh0%2FIzrl234kCrt3WlkD4S8rixdjE%2BiKUQnKElHPy4fIDp8Msl%2ByMcCTu4fkSDLwzTRhYiI9jr84KrHn8dEHG5QYTmTF2hErMlHd7zgiuGvOrxJvDyNKToleC4zYoizzPI5ZA4GRtgldV%2Bo6OEJbBjthSqEzV74f0xBSRIrEjpmgpOGmAxQAMqL9jaiqWnPi453OJy5gSr422Ouq3MaSFF9ctqeXMLmdtsQGOqUBN76dsttodTx1%2FXNNhUEmcDZviQVdXfPOfC9XP8H38hoDqnTAyEFWFukQScbY%2FYPGQz4YxxfrOLGvUVRZm77hupQq3EWwWL9Es0DEPgStC58%2FrgYbj9YyYq7UAqaGacCgBxdpdn33zGG9v1l2OudmZkvAnCWbAme4m8oyNr%2FBymig0X8LxVwTg5XT4jqvVBLpiQdrt6BVwu1rf851KLLmaSSxOl%2Bg&X-Amz-Signature=c41a67dcb776aef5316860afdbda7920327d43b6eaaa844c8f674370f652e774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=9e34179003f673146cfc96bcec02fe3e15c105ccf069cf1763d5bb50b637c7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=1559e5c283bdd7ec9281cef778d41d868fb4c5b0e0527ead2010c764d11d66d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=1b631f364308206c56919b75137db998298e25ef177f8c0520e770592f460479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=96566216108a9ade127019e55618c64d0d0e004e8699a7cb564c7a3afc54abdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=bd2b06cb66dfb9e75b4fd552115b759b4cd00a15014f54e7325b9f51498d447b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=3b1140805bed3347525cc628d69c79c829e6dc13fe4c1b4c34f232eb44e530d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=ea0c39647b19eaa170585053970019cf24af670ed703f171ca49cd6649202a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635HQCWFB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDML5r%2FypUhljdRhIKuyVGB9A9fAtF%2FPHkfUdvSZ3JOVgIgeWq5B2G7VHnGTMziYIkiJQ%2BZo6HGHej6F3zuxj0OoRcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXy%2F0Sp6GJZyaVqyircAxMh7uzLN20AqKgdMoBqpXZvzGGSbBeVHk1zguKzgdRSVvz%2BE%2FYKJXVMeQEJHo3johPT8VaglqJl6JL3ddkVjqZ5r9SCrHMnooh1W7f5noo51m%2BGFA1cXLmoWrGOsDBbCsMuRdKUUQqCa3Jgq91tYqdBjgoj2oyCBlpwJwYp1t%2Ft%2BsYwiaCcUV3T71wPlnfd8%2BDlTDYoHzgMpEpfyz3zxU6fFMGNIdgvUDZ2dEm0d4RTYoeRY3rjx7Kw%2BAhwyHVozSTlgwka25deFr85CaY9MxgdbZnr7yS3SecjCiKFpTCCj8S5e6ELF4XE7yebhU4PKWEBQESlqZlJT3kfFZysbfFn9AbBkanDFqyF7D37Sl4ab3Ifid91%2FKYeiMpoHfAlGljoLoVgiLJSMmuvA3FV6a%2BSoZTzD3xbmisq5y18nT5snHg7zx7N1oKUR%2B1UdJxz9GO2FiuWZOw%2FDNYainJdxyfPvvOZdRhnlxiDLsweNavIIGV7DZmStRdz4YUQta7P9K5sepL5BaaRjbuMfLRHTYjUyvzLB5Y9tZdBDHiIuMYFj%2FexdkdUl1IGX7DbGXgoLP6OS%2F7XLTuI%2BDF%2FTfooOl7f3jSOFLvGaGb44M3mySDbam%2BPh9nHLQZIdRXIMI6dtsQGOqUBcsbgYol7orNJPX8fBEYm6T5ySeHxFg9TyND6NU%2FZF4Qp9hCnUoAc%2BdCQ7X9M1v8R2hiKtuyyKIcH8w0k4wRWdc4eY4Q%2B4ZCW28DnpPbxq0Rwma1%2F2f1c3psFb4s2YnQr%2FzouEs1AEoMIsN5bapQX%2Fmf2WPLF7EvMGye%2Be7b5clR2h0mEHm1TaVQmv8TNSkUhLWyVR78Krq5j5yUd6kT0rtwrlXdX&X-Amz-Signature=c1dc721e2f617f37b63baef69d0cf30adfa1fe3f7084ff766a1dcc23d10ffcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
