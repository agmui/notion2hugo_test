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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=dc99d827f830623607b9745a8077605584e72936313fb6d6a50f219211b35455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=7f89b38ece1c7738f7579e0dd72618441746ac227eebc2a49e0cfd006a505c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=aee4b3750b0d934219c1d202e5286e36fdf4e527af944b7ff0bf17da3551fdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=059ed2f83ae8afe26627a392d274493aa56189e6c8c9b6cf18c5cdaa8dbaf079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=523425de0a8c0e294e55e4dfcf10ec2025459a930e4287dfebf5e4bfec288ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=cfbc525f3f4f1fd24f277bc29f71209ac2f1e3f8561a084facc55ae2a5b0a67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=e3c86e56e94ec1646c4956913f27f32e46b3205e18200cf4830eac984f063f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=9d0f54403e705b05b2dbe306539935759bada718186538c53d3e70b7515330ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=6b143d7be960185d0be387ac2f7f72e02ecd862af07b0e9889c8bf5055cd5235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TKNDMEZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAertnqRgPA6nZyaT0BZwfShteEcR4L7hTcsatncYWiqAiB4O1Bk1r9COavBm0lrnt0jQ0Bfi0GsKHVysIvXZUN%2FsCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlLsVWuk0bybepUdUKtwDPOFGsYGiUb6oxCSmKHPET3CDyR8%2F7shiIwPCdy%2Fyhk9rjEmp5zQQtRD03XiHcUlSLqEWpFFhYK9H7WQGcUNtjFJ0t9wFdwL0VFGhIZN31MqrDX32Xny8L8EZ8oGQHFGwWHguEUW6LXBwX7RyKQ0kJdIFRuvAA93q7PKFq6d60vygxkJJ%2Bwk8EMCU6AJ3q9uP2o9ZZTREYq8xy5O9hmOpPTOMmmoX0NSCYcpvyM9SDYyZyvt%2FSAJav4lAej7ijClKiUJo7FG8%2B80AnkDLBVZZXynKaFD6g1Vt9B7iI4uyRyqlAoh7Dd%2Baj8qOlgnZVcZRUYT9SSd%2F6e0F4Wwrjej8xuFcu1xxcULnKZ9kTAG%2FK7b60la20YLxuyBHerChVDbjfWVjyIOI3QYuHRhphWbOYcxtjU6duTZn6%2BmUtHwBbF%2FYwpgid7qjAp95J81dLrZbOx3ifeUyC2VWht%2Fk6ohhqnPkDvqHebPef3kkPLIcrHpGazOKCuSTegiNZs1olKviXdl1igZIcxGx%2F0qDzNFWBUpLIEtobvFHFytYTukN5bnqc13AJ3NGczhPaRDlU%2FOXl4P7lnAkNUqZ4iyZrF4G15hzmJ8JgtOGHTbikPtubDKPaeFyFZCXePBXUTowsNvXxAY6pgET6807Zz%2BG1562w7Cvqgm8O8M0RA2uglfL3nhMMF2PwBfXoBIdE1Jc8P5mKY4doBm7xPM0DvUTYZBLXwJxikhgWGLnwcPolt7o7HoLKM6kzw4YQiLAjZ0BGGNrixgGLAW476CRLBV5qRQgMGwldkp20yiGneBwz%2FAwS%2FHUnOxYL9QPhJe8rwNIbR1vvwQrAQhMrv5Pr0dl26%2FWYYhMS2LJJ5gjU89Q&X-Amz-Signature=405aad75c3bedc7ab20b8a121da0dc13dbcecd121c8d583ae1d6b40c48044252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUWB7USB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDmJ8uTf348Tpe41p88EOZBxEq%2FHnQmwpxwRe2cajM08QIgMHCcqWQ12dtlBPIzffVRr18qvpcmiaaQpRbsffdA6mAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRYyFiXuUGUAEQiuSrcA9dp3EfCPfVnjENtF6GMK3ptwHC8Stt4mNwCkL6llA%2FLJXCQl0HOPE6INxYNjDrLQWzTgyGJS2Xb27hU5GktfeU0b7a0vNFE8ZAh%2BVKsvx5fek1ZubYc%2FW%2Fa%2BjvALpvzRR%2BjFvaKV%2BQl4tAKyi6TRXFu6ObKqKZKuGwezCa0VwEnUVb%2B50Y7RpK3GvdaTal5jYccc2bsGQHtdHcElid4broW%2FBfJNc%2F1IJd%2BnpfV513U%2FZwgCRb4h9On6LpA15UTeyoyhndezwdr9Ff6AYQ5apYscj7MR81Aj0KoyGd3LUMN3Jb8zsVxcF07E%2BvhO2Sip4c8wtVd9iQlrWsZR8leUPtnD5cTkR2XhiEq9P1suTgzKbvugSvWV3wQ64kgrnD%2Bj7CrrisiffHFM72LBGbZPwLK9NKlJAilVeHj%2FfEsQ1c%2FDMoAb75xnjzddJoGInt7v4wtO3j0khTNn%2BCm0KTLWmX1%2FRMhglrNK7dzOfLWIQ%2FCsP5DlDkHG1amgjZ%2FgVZvThlaeReuV1OiZSwUEmKCt36HRyQCTlAtzQOABDzJdEk0Ja8vG9elmU6FvrHfpA1TwoYtXmFnm2%2BJuhu4HzJacFjDbaeHCSH62rinnBcsZNIs1OTJulmN3DvnD3qsMLrb18QGOqUB9%2BxmV3Fj8zBKnZHfsmSzPvbrJLnqCQ3CRwCisPz0I%2BiwGcb5UtqIG9a5qb9Wh591FhbwnEg571YYu9WoddD1HJEzmN5wLlcYHq9uEH9qIFzJmkcKcQ%2Bocq19DcacxMkeWrGXE9UID7se%2FMTUmr%2FrX%2Fd91xnG0q9NJKfGqb9fqslXo5NjieA0hZ3BMc1EOYsjMT6GMVMXQmFY9T0sDxAng2cQepUg&X-Amz-Signature=f8d79c3f3b898d08f99b44028d331e3a5a6f2dbd9368aa2e192eef14c69068e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=f4d86787cf2d7939243d46c7ddef07bf23d1a3c58390615f4e980450ad9ea621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=88f3b74d5b123ed096bc669778f9947dd6cb7013ddb1b9b4573697223a42b063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=8e6e92e341a997172a60f72e7508b6c9e6d3c97a61c0af65981018d5a659d8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=6bb5683ed116be35643ca85ae13b1649d073f882e2a74d1879ce155889f45636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=d8c10ab291d67289503a942ef5403925f4278e43b834700a02956973a38f7f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=ab782444a946c1d881732c3c718ec3f42745dab738a652893d2754b233cd390f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=4c58e8fdddbb2af0b8154b4c4b888c334c4202e3de38499873f51b2886ac4585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=3497c9a6b0645b3f8f6a161cb3e86b814bc4fc638cd2302f558df85373edabf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD7F32CE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD14aTJPMIrC%2FMuwhzqjiU%2B%2BcKGnRBzBuEN07qWDCuUDAIgf3vNjFPbaEvay7wIeyq6N%2Fr96up%2FeVydxYixVlm0aQkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2n%2B929nIaDQnRevCrcA5BPUZrz6%2Fm953tObWI2GM8VjXRDszD7Xng%2BmCpnbV6mXY9omCm6B9lKe9Qr9kyu1DnAMD2ymC4ayJVfuktfH3b9bqqCoSHa6Ti9FLoju8Ru%2FTpiW9c9VfO4cEplC1TS32y7PpyMX9%2BpQA33T3gp5SJ24IKCh188hV47nuhyqqwfgv%2BWX2rIK8U5EZwmP3%2BQ7vbYlc%2B4hq0sHzJMqULNpc2L0e0aLQBykA3WoNkv%2B8U8kWYv%2Bsb%2BCHJ8L2PWWOIGd1aH70uWzbzTQuGwvuyQxJErrAsvWqiG1vSOWFvtvYiVTm5Rw1Ds5EvxBkWgeWry26Fc2tUgNF9VkAb4voBDX%2BmBOCWxreSIdRVZKzOVSky6eH3BUdz5FHzkZT5cVqAsvtTN37yzh3t570PGSgv70ygX7hqdqn5CkmrhzFnRyNxjFiazTdjLEGpVSkOCQVMXD0o%2FI7ZJctR6qj37xtjdI93%2FgBj%2FXmsgeIO6L2ry05OyXpjlysdQ0kZ8ldzWy20LUxpD2XoMLtgnZ8XoenTLLSO6JL4v6wJWdQe495K2r4EMz2Mz2rfUdHOUc0vXNeM3V2Bdy9EpUhEYEh0ZuspqTYmTYO2gdIXvRCMc07yph5BWq66itn72gnszo6TyMP7a18QGOqUBOy6m7RgJdJ%2BrFrkLSHLwE7E0eQNOyhhn1HVniLxcNJk%2BaWI1gm5s5%2Ft8zF9%2FQXsfx7ehCGTpV1aVRjgA05c8lvWz6uYKYr2bT%2BXGngfX4XR4PICIkfm%2FqIyZq6Nxef4EhhYE3%2BToYuDAjaHh23Tlhg2WMHeNqstOnkCrSrgPP%2BUw1E7deeDOVY3WjVavoxsx8uWo6YM8zYS%2B0r8xOE%2FocpE6L0IA&X-Amz-Signature=3d5fdfcaa83cf3bc98c4f98561f1c27ff751005efb906f58dbd6af2258f662a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
