---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=3ca10667e8bbd9e72952d1a8d7c10099a75df9371e2905dd9bd0ccf98ed83093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=19586f2a17bb7c00dd9197e6a059ceecf1abc35cdbdb3ac3d26c9a774a992cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=3dfdbd598067da2ded3f7af4afd6c2c164c9af1b7f3aaa6d9324c808564defc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=c88f885d11559f5d4386a8c4f46c37206819563239869a0fcc23550fdebbda8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=70e4545691c19bdb8653fa7a296340fee90eb3ba6ce0b6012b5b6b2bcc49df7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=f0e5e6546c106b0c85857c5bf1312220fb501b7b6d90b189c94f7be7109cecb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=86f2ca9600f27c8bc0c00aaf6aae50e4a7471df76b3ee8e1692bcafc69373a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=d4704a7b6377530810e33942951879bded0f285bc391b3576d1b50bc5c30b0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=3b7bc367ed5ecbdb2c38289c29ac48a9f37694986b150f9b4caed7c107098212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NDWZOS4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDVbiX9OKj00CA6c3oYH7BI5r4Pj68jW5MCjIiy7ThomAiBCRyuhA3nJnw9kybEXS9aqHXW0DE9y8V0tbhuc83RUkyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM5VN5rNrgivgr%2Ff7MKtwDk3k%2FbpbZ%2Bs%2BjUqgjsZPxlJI%2B7QQKT6opuI9DtJgIS4inUYh%2FpCv5Rpsvx%2FC2XpBJNj189azHbHd%2FBGI3vfEmJnlsLqrbpneiE%2FR4mNSDdRlmKJf9PgF%2B6%2F99Zz0oUejRoUY2xN8tKywg8jQADmyWRcmPovHWX8um4CpSOrAaU02%2F8NMebQov4jNmz7keikE9QcDoTwh%2Fcko9uvTAMnWRPgkqbQuugCGIbB%2Bu%2F9sPZ%2FPql3azdUho1Gz3eIvwY6DxRVF7OuBhGqWejHnXvPIHaH5UWhePZcjWTOPt3kSlacK3Tfw%2BK5Ut6kA0t2XwWqvQ732gVBqNCzobbpVilX0KjqH%2F0CsFqL%2FxeKQpt2G5KKJYHaKwwjP1HWEv9BQS0CKmu23F6UnKZ%2B6J2jMtUAfbz9lyojjGyfA2%2FxSRTqoceGVPCzpSd362r6XGyx6G0%2BYEQ%2BFY3u6V3MX9H%2BJxMl1hxQmWwID9451a7zF9J%2Fdp%2Bm8mwGRCWaH0gK5v2mRUBJNiEOOxj5kAyahv5UJGsjkNrjrp8VmoA3YnTPulZNBxqhqqDKfJSNXCdLj3nD3vEWfImZ5gAyFIDKPcHtEHp2YflVnFr1XaaIrbXy0nbAMJzlE9df1ghjpOy77DSCMw6pyMxAY6pgHYP4RIkEnk23Qm9HB2m7xxqBCNujEZ8cXinrttZD7GCpGxR5JvgsxrshxvK1FiI9Nosee8QE8p4Kri0yKFPsjhfbuThCZMIZ%2BpXEpN3vTkd1iJAChHeukdLLwr5VWz3ED8c%2FAeMaH5Phbu03QwdkDj4p%2BA%2FB9aJJ2Btian1cf9yaiBp1lht7ZOJ3HsieRD9%2F8Uma90IN44lvmj8szmKtQ6u%2B3LQTvS&X-Amz-Signature=006585c0c998e920b713246975eb7d2305fdc97b2e9238894dd5beceabe18ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666EZLXQG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGR6gz%2FDGV%2BqYyq6PLfkI2rT%2FFzfOWYa56qIbH8wZRwYAiBcUbBmDxYwV%2FZDRzoVYPDwNCyiN8DU3i0B0QqIgDk8Gyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQ59dyl5%2BXDS6RDW8KtwDG2HMFHXieIRVn7m35lspwu8bGW1OyWbaDx3TbaZQL6OLKtGV0aEWQDbYw95moxPlovpNg60c1zwwO6Zx%2FkyqBOBcpQ%2Ffex%2FtlcY5eKhI409Ya%2FD2TaUEWPF3gF08qr%2FiMtKCKn2oAKkpYi3RxqXb%2BKW482tm2HvaHZSmITj5NgE91PnFzBdE2EajprMccBnZ7txJ6LKgpiE4vqY1hBbCBQKE0Jdk7Q%2F4UIQoHbC11e6gp3ei1iUVFaYz7SVRT4tcQeLjSBUkR7PMe3yFMLsHThjHtevCLnOywvVwo1vbRniKqaXGb1XNTZguVoTcEypaM3cO6KCV%2BvqUcfwMqxa1z4yVKtBxn9KIUcEsRINPYxi3MNAk7%2BpDwc1PkYsBJNNWvSeRT5bTe0wEqxLEC2tsx5yAhESRD%2FJga0cbvg9qezvCHfj692C9H9zinOt%2BD7bih79J0HG5S8fT8UbiWDg%2F5F3RxEvMKTSsfbX%2B%2FukqdO%2B44JZHKC%2F55B%2BsSHJgNvobLZoumrD%2B%2BR6SSAgc7mV5Xy5DbKcJvsO306qgag70%2FZsSJhFGxQECAkt8gOXZPQXTURbcuRcGy44Is50DsS97nYOOGVPGnCRERGXXApKnp45Bk0pvOtt9CuI3J3ww8pyMxAY6pgFqrCpnmk0rU4%2BjtEcqQ74x2ZrGu6lmM1p6ePoFL%2FHGakDQh5wXo2701vgeV74dgnEIAFQluYeAppX%2B1xvSkdJ9bDIvVO%2BLDi1lmb1pO%2FdQFX4e3eg4wiuKKAQpTV3hIBbjsI6pjA4U1JLmA9LatngXS9QRITLUnn0bjAWqKPnYsPpmg1htLjPLjDrlq0zNV3orMLl68ZSE5XkmK1WMkoGI2q4bTZcf&X-Amz-Signature=19c063dde22e2a2c21e706f578985031272bbda5a1299c56d0528d5c900af3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=0384fa9ee2cab4a89746946fe79331ea4f002e6c36219a050590eb267ee8da29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=c9f3d96acb74f7fcbc61aa4d839581a953e0095f7d42f15b6c68c68e35f9e0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=be214f989a5bde92c815e90e90f8d4c379f8a0ad91e3bc8ad0ebaea6849a207f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=6f3083264ad28fc3141235098ab73fdf42947748d8bf5354eef7bfea2882bffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=2de36a50a0e6f9deeebb4822ff013403daaae2befc8897f0a4c8acd2af565a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=59cfacd140366e0b30bcdd978b9e94adfb61a32251c2f6da22e857e8d89f6f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7WLUL3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDe%2F9pGCTDMbu72gwtZuF%2BS%2FZsocbB06KuWsXu5jF11QwIgd77r6l%2B8jfuAtbQMzCIT3%2F2jz%2F1pdowHhWRG%2Booi4fUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtixM3VlxbnQRdn%2ByrcA4ZjQIKw6PQcjxApTeBTOI4xJ05PTmfLiifHi8KTWInOJpZRigJGiNPdrOp8vURDsUHkYlqNGiEGRsjpE%2FGpX4DT%2FakvBTRUs%2BKmygA4dX8lCZQxylPJSHb5DoRtbpmvdNnhqaqX9bBoAeitQ8YMdM5uPoisIbylM%2FeZVy0vjtkJdPcmB4%2BtEyN6dCjuv%2BkjwzJ1NJpdnC7tG0isOKOnuBx%2FjvSuvcOppbtjOoLTKpc2tsNTSvFcI1a%2BEf3Y7kCt9QDxJbZXPj%2B7gK7rd%2BuTgGFmL88Hb29xS0vSgKAxBkL5I9MiYFiR192%2FpNm5eGaxJ0SGJQKSir4T9f0HoEHY8wPyAaDDVXunzyYOQwxjb5smp3iHjH%2FBE8ydUTHavQ%2BZQuayM2CtodavSTg%2B2YWwBlkiTUvCAkArzeIPBdcsFuK2nMIHRxS1pei%2ByNpjztsfDXZ5DijWtZsryjIsLd99jeVtYSqkc3MpOptxgYen9az%2B5DuyU06K7LZGfLrXb2jtDtrvlxf97EHDjvIqKmpYw1s%2BVXCGWXAB6GSSMeRwayyxwltl2653KRNrqLTYVwrR7imcjXxBzt29YDjFIqiVa5kyHuLR8jVhN%2Fx3NPHCT7BnMnKRuMaIb%2BACYFlNMMjAjMQGOqUB3YXQ%2BkbmCW%2BgT1dwk4oz6XpIo61jnLTDJ519XuhfrLl1pqIqntClhpTO7rwCoHshJ06h1oM6reyLmR48OQjXNq%2Bdetb7IkryQtTkd1yD1mgp4C46YM35feeogOI%2BEvtluubBKKzE8P0UaShkHeJMTQE%2BMY1kgiwSC%2FsTkNatTBQEW2HZzIPaGQlJt%2FmM56aK3yoIWVKN7VkjjOjZJwSv3UOZ%2FctJ&X-Amz-Signature=ad191248246361043f1dd045f1eb689f34accd2d6f969decbb22e7b9ab008bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
