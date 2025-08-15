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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=6d3d7ac22ef4329c00dd7ef712edc493f43fb615139187d19ff7e4040fcd2551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=a43895c37475394555f491a9de6f062ec651f5e196ee8de26362a61be202b55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=3d111ab9fdb16191e4e9ad60fdfff70de98a2354b2b439ad7a1a5f89a3c56ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=856e1876c4d5b60593d9c5b2774c1fc1353b69e1d378a50612e2eb9e34fb7228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=15d4876897762bc2992c6928d619996aba909e74c8b99c26c852657eb227e626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=e38f3614ea2ff7a98e187bcb226944e6f36b7e6c3e1a4046f0c63dd4bf6031fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=5493b78dce27021e05d3a50ce1494974f699e84965113850665de98340a94570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=131fd8161acc09d966fdd94020465fee6d20650a546f7ec5f229888fe8d7c5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=aef70748bb07406e66be9ed1d811047dea7eca801cd754131b24e5afd58bba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMREF7N%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIGrXZlwhRP1o1N0WfUc7cmQVwXCV8sb2YyBuIpl4c2j1AiAfNhuqZcwBtS5OrGHyG%2Bm53AV4L7VSwSd6W56HhHEGXir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQeEO2pUN7SbHju55KtwDxje0j7d59CzlP8iF%2FkMlA5L%2BT0cTHAXmNiOF5q5rVw3zCOI7FTjhp0gjKsfwYp7IqKyGQfWTZIkrvU0a2CmkEKRjQhtA%2FzWmh8buV6ITP%2BEG0BiZcTI02ez55%2F4qUV9G7l7jT7yxGvP5kh5vpV3VlVItTnS%2FvdW4OUHtqFt5khOWXHe9ExGvAosu%2FhEfPmPf4j95%2B7nXK459Coc9I3B5XfGKJHqxGvSXwHwaR%2BRAoaymaSybSqeG5O%2B7MUHLAS%2Bv97SMULsN4b%2BQ0%2FBlBYAZMEPBqn4oGQbYRG86q8vgjcD2sIU3%2BoVWFGXjH3Ra5UN0S2m816P9CnVXISC7Qdfqk%2F1NiA9nLcObHneyUXEuSknDgT%2FG1dkeemezggfCU%2B2nFZBbzgiHpWuJY9uncOirZuIxABJDW%2BrX9JUq2Rpu3%2FtMxAUOjbL3X0dingM7H5ycoD3gOGKFj1Ke5l6DrFlal1FZ8yIPePYZaJB8uKZiZ4av993fNBynkAxDcgNPnqjee7wQHzyyjwYuK4qY8HGQd%2BYRgN7WNCY93qjkFxZflnak%2FT21g95PTEMUYot3hI4gdDnkf45NTK49ymkhGt2ZoYiaiNuMX1uCNU17ZtNbZFz%2F80vTWcB8fVoMN7kw7qP7xAY6pgE%2BY8tQIIIJP6QM22OlAVphDXKhT3f6yoDKhQXJWauzy2NHtnkwxasq3ZSoocO4c54cUvXZw0RrYcYQ%2FOIVXEDy6Ol2eraqIiFxGzen5GtaDgaqj3sxR9P7PhZ9%2Fkwd6eJG1m415HkHUGP1WE2GVEIk%2BXbXtT%2FSlVI2%2BG%2B4KBYMpMUUzxDT5s6L%2ByBDaUbuPs2d7odONKLjHD%2FToxb6hTzqdqBiO6p%2B&X-Amz-Signature=9bcffe2da51867ece1089f73b0921858428e12112c27a3efe3743ec6f26ab610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PTHTCFL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDtu7UqbqJ6NmMjvFM3vylMMJ5qbzKQ%2BZvvzh9bX4OZVQIhALLEoBxsP54rMTkRihY8DDMP4em1uzlVUYUNeba84jrEKv8DCFcQABoMNjM3NDIzMTgzODA1IgyjeV6bYL9JwHgYz9kq3AOL9NRuj%2Fh%2F2Otd8Oy8vwjDKew%2Fb2saV8elFb0AMt2eYBsdmCXCaiZKPbuap3Tc7nGuKWYb37SDxiMYMxCguGR3jAYM9549fNB2gui%2BsyV0RP4DLWA2hN%2FP6dD%2Bm5EVWyeI8%2FjJb851zTKgqPFJ%2F48FGkuQigYMboUQW6GYiYdLwsafsbVauhexaysxDIInHCE7KFg44CqzrTYE72uwwfETF9gHjd%2Bm2Ex6t2dBUM07kTMrH%2Fabb1GEmv8g3JFbI8mPXU9kUh19%2Bdn4sfEdnK4ccru%2BLYmSkHed4ckkiPKQw65qFZm89nHy6V99%2BX96qQH%2FIDvV1Z9a%2FLox8LkKyNmOZrAx76Y2vNE786X9n5am5CHNK%2BIXOkHT8hZIW2a8MxGqy0W3q8lVF%2FsS7B7asPW0NhW9wZ88UGEMCakOlUuV1K79EgLPVwTjWnhsoYQpbPZvFtt7JIlhzDYyu6ZerTytfSctPsMNenbqHdWcSaIbbgKFkxHVFH4vSv7EZdQhIHY36lMb4U4iexTRgMDqxUP3ehbhrr018WZ2HPOQ22RGeuGsDgQXb5IN67FyxG%2B5gIf%2Bqt%2FW2w%2FNvJw3yqd1a%2FKpnRz%2BpNlqImTumkaHs1C5ylcFTeBHTBnEUOTx0DCxo%2FvEBjqkASkXmS9SbSrStGkxUoMjryWAvN%2FksgfaTQkusAtcbTtDo9TVnCOczFX8DIXsxXXpPIvrxbZYt0s2%2Bd0WnqvY8wyT0TV6DP8CMb1NeBuabYAV%2FlRhwY4hzDU5AyViYOrOolnxpZOuojS%2BRcuD%2FGBz5TbsaynEMKhEXG%2F4ich%2FDE7f6P7%2Bopxbyq2J866Uqz4tL6G7RXw1DQxNvePxvKcYb2cIpAYz&X-Amz-Signature=b399436e547660180e0dc2a144d39b92c4af2148e2acc013448399ce653a9424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=4cc14b2c74e46f330c469d0865f5552ebaeff0400c679328ad3eaebd53df4888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=e27eb25d8353cbd506650ebe69a299c220c5015bc05b82bf1c44044b831b2506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=8910a5cca6b38f7cc275e064718dc9200c23f0831a6ee0e6982dc04ef3bbab5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=e79af89c0bbf0766f45b94f10b50cef354b336fb2f45d587bbd8d56da52480ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=d90773b1254e847f361ec3ad0dec0b2e46c5e60e3b63fff387ce92704f23a48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=e62272ea632db088514cc7e716cd8c859b97eb55fb9e8486df2e9063d62be6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=a1dff7f76f2e22d59531eeade2687833490933a183162a15c47820dfc4226fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=bb63ae3a4e5807fe2c6ab449ba5929cf688d703573986fed0651af8462b596d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622W5GIWX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICLLJTlzDpvcRxCygWM586A4lR%2BeOuHKK%2BAovQXY9uXtAiAjwMevNNXWMfrwusQZcRn02vM6AqhqFtp3Ssi85DMKTyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIbNfrhKAxJNFEt4GKtwDMCi0tTMBBqVxqxG4AUWf8BvAgNJjHy5QG%2FjsWDvst3a3NhrFD07nk0xTzy90cJ88%2F3VWKXgg5jaFnB4sJaS%2BnxfYWWhKTjI%2FHtew5Ewqe%2BDWEPtvePcDqGCD40eVklJjh6a%2B%2BONlEO%2BnZluZpGjcYbTFInnanYT3p2Fgv89TFXz1xyS2etenj3Uqay8enqkidOAon%2BPblmdNCAllj68oDjV2EsyNQcj%2FI2k0nnesDhZ8ovypnTidQUW1DYAdTeS7tbRRQILU%2B5DBjXS5AcsM62F1n5xvrgEAuZx3OMCDRwlHokZFwlNp6h6DcKY5KdnTzy96FxYkj8LdI0IVUq307mSlN2RQK4Iv3W%2FmTQgVTEQO4aRHjHfHBkV23GCHsih%2B%2BfyrOSwOGvC03%2FNxf4DwW0298WDVQ6b10okHXtgKrHR3G4wQj8vfKSx4CWS28qfwVsVyE8n1mosxL9rlWwx%2BYnnvP3mMvZ1%2BuA2b1ZypL80w%2FIZXBopNVr3i5sZXha5wSYdMRp4jzj5C5w%2FzEWAGMk%2B3w2DwwteQ3etQMus35B4IPXC2outlHEGr1LGZXG5O0qwooCJu59TJs7E5anPzPaepzT81EAmsrNh7U%2FusMv3ZNKBx%2FO8q5Vm5bfQwqKP7xAY6pgEp4YVjVs6qbBncawftTFQORob6KLLw6XyzkVuHWVdi1L6J6YNvlq0k6ULfjUtqGp%2BT%2FihyahpeiggHBJFsPpzQhKJLCz3cLJ6bYmf2Eu1InHEVlRy0FdFqdV9HnJ%2B8d29WYUd3d%2F%2FfctneSct7hvHoNYTKD1OYnrLNjX702CvkQkNxWwguwDkC%2BHQxxEUrQYZnuNR5vIxlsahOvJNUIQHxm3Svudw9&X-Amz-Signature=4c94cbb7de2485fbdbe1f87d29da9e3412e631f9ffe1c36d81502d90e1cde71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
