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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=5140bc7e34be9796534b15b984ef4180d709adc55719a4fa41e0adc527e1a1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=8432431c17439c5f7dc5e63c8c777cac92db4f0e1fe7aa482b70a1c519aec404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=35e4063fc93ca240dec3e35674a1bfcb18bbb9fc4b2081c979273c513abf1d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=59ce6c173aeabc5d14109aa41c24e9d0a0876b28c58fcc8cc20b7a6aabd6ef47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=7bd6c51e153d485186cad40c00c9a44ef72d2b103d081c2ab3e177389c030d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=7df503bcc0a7a9e509ea794d09e796d940d3ab7d06f240de524daeb38e3dfb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=b3b3874473ed1a1c952bc4bd2214acfcf34a074f305e99f2733022eb46f9b4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=aca30ec1730a095f2355e285231df6b89b2393ae84d958655df1efb38fc7e508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=21a286c88f80db928714128915e4e677349119fc4c33755789fe6bd0b1eb9aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSW3IDYE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLxpETKBDOk5RW9RnqcoLVpSNMrzo081o8iwc0oap3fQIhAP4kTvIe2bOB2CHfPlgRtAMCUA4%2FEhH1S9USxT6s7mjRKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9QX%2BLH1RhVkpuAaAq3ANTXSguhYOtVSwd4cEa1%2BvQVi14lyNYBCvMMOLEfa4CToZgEQr86S6KMjZDv3iZrm7DEe28R68YSt0Oznz3nJbTd7A7qHRAB%2BrIGxbTuxHqmDRvKcGKSXWwlhJWOorc9IXwObZJr3WiTY0PRcBxAwTuv%2BUeqWPvT0u%2Bp6I7wIkqdaTMdCyTtM7btdGn1ot6ZAYrCuHLGbOJ0lQK2nuJyyi97wpqjWjzumj4CsI8K4MJrfQBCc0cc5mL%2BXJvO1ttVWSyxEEYUW7lZI5pq2u2bAcxgQ3TBzWiBK312r0ZTguC6FQUrDqRDwxgOedTRaou5Tt3cAbBCsfMXYtDBJybQ5t1Del2PSdTxC6CTHUOkykBvfAYEBb%2FScydsGnqvKqepcgPQOx6VH%2BNMXuYaQPExh5J2AWcrX2vcR206zPLuVDWKt7RBixmn7t76hqIQNcIaSGBp11eB3pJWG5UhvWFq3UmcgNoEjYtwhH9EFxyXXUlpMtG8LlKw9nvXh0Ilmm3XvI%2BG4R72ZRNJ1qPQaqDzLXM%2BzQ233YrcO2ViigWeMhZl%2FNYwc3JT2BFRd3m9%2FOJu2XNGIfqzovHUT4swx5wAOPDqn9TqGuw2BaMGVsXuWiEt8ny%2FLmdEOJGwHxLVTDHoqrEBjqkAQn4BAnJqcmOalh8FndAlEPxK1UxwHOA%2FdnUIZa0kJrETYTsqJno0jTmz6S%2BgiMwSaOjeaAm4fShd00pvuvm9KHfuubLSdLIi2JPm44LozVH1O78iBrjDJ11HegVxxfdRmgKKYZfIkBxEgMzxLAphDhURKeROXPvmUO77VI%2FNQc%2BrasYnsE4D8WejezKfqQS8I2BfJQpduHNbhsTvDRfqSYvDoDh&X-Amz-Signature=1649b3f4293fc76f2bdbfbfdcce0bf0190a9282202b170b03d8378955c9ad847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYHO7I54%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEG1XEjrmR%2FrGQ2XUtCkEEMBgPwZDh9fWEDxiXKfKoRQIhAOtCcZGYxKM6af%2FJk3yyAsTOGTVV9Fsln5oE6FxpFjglKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9cHvTc5FjJdl%2FHUIq3ANIQnc0dsxi%2FsmbFKoSUU6HmWtFnZojLoDHJpp8mQ3WYTzPkYm4rjkyvX5lWvnoR5tNNTcXpVaH5CIB%2ByJjecIree%2F7LElWYQ%2Fna8aWeSlD3u2KGg60AqcIrXyNT2kgGjQG%2FwhY4VBFu3%2FAht35UxY2oUSGEzbMYZ0dUdm2wE%2B95O0GTsjDasLUyVM%2BECX%2BdxMQHfaSzCJo%2FLr6upLbBJDN6vMjyFMf87CszCWN9I4Uqz%2FjEoZBHHTY3KPBddcBBKjmdsZde1Fi9IJApuQanFHZUJLe0Col0%2Bb9LtMpR7Vbf%2Bzz5NZ4HTKDQc6RbZCBD0vL2OOzAkMgDf8kaWMzSiwAQcofuR97PvhWwp59hus3DzVMtrQJ2KQflNPB%2B%2BxIe50yi43B8Or7Aivq4XZrPmnxbQP7l4dKjvvyThjXfn7gQITxP9%2B3SwVJkXyFamu8veUJddQ4Aqpcg8x51%2F%2BIeKFZftlADWdQPBnyPg48ETrCYVVLPa4rg%2BXv58DRbngiASpLgtjPcYZRgeKoHezDXAHJOTNWyHjjdlRwPAXM1NP1ZyPfdoENIGhePXwTwnv3xmh5%2BXEYfpjKrkO%2FARd%2F0aiAewL7f9W9S4rxwNeYdZGPi%2BqPYL1ExzLGL0H%2FoTCZparEBjqkAVgA6jtT0e1DSvnuje%2FxQ90AMvQcIE9YoL6qfEqHThEYnCqUPtXscAx7AJORDSAYiLz%2BQ2oMN5iQOK%2FHSzJO2cJsRYtS8rZaiF7ZcjWd1mlHtjdK%2B5GeeMtZ0OtHbZnyT50c7XcwKQVk7UW8tWn1wbeWMmby3IL8opToEki6kgShSsocD3AbU6iUtA5NL26LWCG3MRifv9SOzp%2F3zm8KX36QrqtS&X-Amz-Signature=42d84de6d6fd914b6bfa51e8b5f05a5a27825f387c6f747a83deb814eed7b8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=2a79052ad52c75c2518e5af36a8467533f390040080eb3a90a971f9865ba98a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=38ec8a54b4bfbe831bb837dd86f2c26003ee07a43dfb0a329ad555be6d0f1032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=e2526bb44d64b35dc5b4a95b30ee4828d5435dc6354fe5a19b387059c10cccd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=003dd03957d157d675215e122443aa526acdf50d8889793c886a7e8be5561215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=ce20da8dc560ea3d28605c52db7ac41122cbcba2402f9f0a8794e10de2734a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=98814f979f843cd862920de15296bb3d1fac6f75466d8c3955023b8339bee816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=5ae833be09676afaefc93db17d83624af0224962477a99b5e17ea87fa997f997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVMLE6BG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvlxkdOo79rNyI6B4EAaeMO1yoL0q1eCl6cb0aEUz5TQIhAPePDb7sdDkglkYsELUMreCA6Mt4KDM0Zpxq5nDpf4ArKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FNk%2BgCCUiPEUGAWIq3AMU%2Fl%2B3r5xXb9S9CLTMd9oj0z6nTqrNCn51MRgqHkQQQKoaphPxUAyohx7%2FiuRyThynP0C91HYcNkA9ATjim8Ptr8TpIbWxSZd7Dlg7BrUznUAIaLHyQOM1OWg%2FIQvKDdiN4OisrVXQav4l6bvieguhArGeLZkaWo9bqNDyA8W3OdYPGiZ9Qef5M70ecWVEToZXIHUFCzQTIhC9n9PO%2FePSU3z%2FSIFer5Rya2qlglQLumlZZ5kSGsdq%2F3or50HyKO1sAnMo697UbNxu%2Fh58EPosifHb4bj0sDLxHYzArkXe1NgGDHie2s9ePwaeK7sGSWN1A1kNzb5tD3DvLTdL%2FrERdg3RBYBp5kSdro4aI8lQchg4j7GuNYdkpa5gOfD9zT8KZ%2Bsfdv2HnZJhp92pvVe9iWRaEu7Gt9Zy%2BZvpepLFMlQtNtg8O4ol8Pwu4JBXwNfMVa6hGnx60JysvZvIUhuKNVIxtGFKiu0tc3bOkYYuc%2F%2B%2Bk9FVVNS28%2F2SudUGjGQ2YFyDkdDBPOujzttwbxfGdjeBQ%2BDaCKJo8ChNKeMNhfD%2BxiT2yQJ0WSzUDOdT7lDPDHcBKWSbEHC5%2F5jMgl2DEkLvwBDbPHNVf2rFjiUBNqtuH12taFaEzHokwjDxnarEBjqkATigD4SOfLUNGU1OySZuD4EduyuIlOEJnG9zKfi1IfAcpcnL8pza0fCbYFIXwmKx6LwMv0CJjj%2FHN8uL21NCjeShBsNaavnWknXpvwsmLeacNIo%2B8TIljZ5hulh8RNn%2FuSVCvHJSZ6UTorPyxQdaGHzbpaUEFK2Z%2FG581OkGtDcSQh9hrirBSpPXbCMap5r2lkjywide9DCvjJRXMqerwjiVYwIH&X-Amz-Signature=8da4f85531532f186da7fb7b3081ba3e21be2e8f224cde65aab88e9ea5dcbbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
