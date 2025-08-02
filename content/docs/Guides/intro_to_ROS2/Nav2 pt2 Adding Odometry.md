---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=0936e70177b11220e746c760a86c7d14e04a184f3bef06bf1a5be2d85b036aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=41617233dd215c057b8b4391c8d5e995ee63aaea445a6979d10dd49b813e87fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=d175d0e5651c78ec60ade595b85f029f1d204c9be755e0b387162e7b1d77b0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=ff6184452c96aef1fb678071c11e42256ae0346365fea0fad8570a663a5a4107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=164c9b4051161fdac17e2a8854f0ea7b736f16efe5338942b2351e9cdfa50910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=22556cbfb260d2795cd7fffb5eb0cde101cb4f9e1bf9b9a3f145d75c90c53577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=7520ed408546695cf010bdd87012ee5897fc4e75785ac06068a8c3888d96c103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=5b84d4c623f842a0411d7f8fb12f8fc161d821bd052556021536646e9de8a8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=59f9724209e38758e31d78b16bfa3cf875d2a106a9b8018782fb7788dcca9e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=2ce582ea6fc1c32bc550fb7ccbf220105b65ceda53a1d934a04b577fa7ac70a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B6JIUPZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDToa5SAoDf%2FtGUX%2FJe%2FQyz9CYCYZpnkUPYkjP2sXiZJgIhAP2TnrsSd8oDUSzbHjGLZMvb1SamsR6RGfXQPO68uI3nKv8DCBwQABoMNjM3NDIzMTgzODA1IgwzYhn87to8gdBKSAgq3AMmUmMRBYbPGUceie44P9GJ5GSiLaPLV3Q%2Bw5YlY%2BsljHBTHUob9I7jt8H0xn7u%2BxhgEHTpo9MjNyjB3eLosCbVusRapchapechz%2BvgPgsZ74bQ%2FLLcpCUSieNQvq1f9WJIoXMB6m2ZXgSlv1mDeh4GpnmyM6ArGCHx2lUUGh8Iy0her8o%2FPZP%2BKjSTy2kGKzcEm9zhwRDzOh6M6gEB79NxCbzV9Dw1O8sz4ak0btN0xGDw52EPRG9VHVSnruHG4m9lG9jcEDLhXmXP%2BPf%2Fmp%2FqGqg86DZdjXw7SMjRfLB5TMNnTSq8HooQSNxIUr%2BRWy%2FEp5kFY5DmlM69Lyu6pdLaYGbZJ%2B4zy1gSugkbXSX0dUoQxuNwj%2BTWdVZXEKwI9r%2Bdkqb9gMsIeUnrbxtpKbB5WA9jXd0IrVWT05v9pm5%2FwCw8u%2BlxX7Q2WJSWBGbChh1fTOANuDjXJAudbEEsKyBWBYZyD9vdkS1eKnaFIZ01VP52VOrAn6G%2FyO5%2BjeY2HQY15hn0Imcak78drfUWBsrwLx24z%2FaaNa9X7IYsi%2F4X71%2FDxBdTWHcyaWqGngYfMO0oQraYFfEmXkXdtuaW0qUThJZ2sShon7Gj06NBtwyTyp3QIOv3L5c%2BkcGBrTD3w7nEBjqkAfu4jF1HPzsmNoBi53Da34gKMHSfb2jgNg9b%2BspK4sALYi9uojcK9Tl7lklQyPatQJjD72%2FHx6x%2BHQW7GPievcWkWXlz19dPdBocTZS7vOnmN4%2FdIsIulbKSubVyYwHTtzHpSj3%2BkE6%2BmclVzC90vtf%2B7xowie3N3CTpwVv%2B13nVLa3u%2Fqcl6Ay%2F52Hv17UWM9d%2Bbw4PRiqEqPL06bSmBsn3dSXh&X-Amz-Signature=c1985f655f7584fb6a0f55d7544a742b8b3c1a1f7b50c91d7e8179282765c51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4Y6XQ7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAhcPlKsD%2FRDeUYttlXHiUATmM9Eb9Se%2Bb5wxt1N1G7AiEAuEHLGanvzhEeJl7Um23wVrGJ%2Bw6iINV8FMsflO8tUSkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDD9LIBhRpAiuwwmIRyrcA3jBS3fLVWh%2FxMRP7lNuL1E7WbwIrwjQFz%2BguBR43EYvvHnY2%2FwNsfCFdI4aBZ38nf7CpVyJemsrTRzWkSjvXiUVgdlKs4uFz62RD12QOHE7TkPwsUeKX84Z8oWoRY%2BZaDXrre4%2BiLxyTbOXSHbBnV%2F3k6CPHFINCByTb6TMsGqm9J30kFLhuKLSUnChBncARSgVH8YbusG5u1TR1E2B9CE3RCtOufiRwAuRP8TCjSTBiBrpe5%2B9EO3jpC0SE2qWvkMxp0lwgpD63aX4n43BcUxBYUd63RdFonrDWHYlN12NrSxwqJMPt3wjFSXEyo%2F7vVP6mUVf0UvH8GTEvqU%2FnUuKACF%2BAMGlnxgM6FwpthAFhot8G%2B8FueKSSK2qzW6BVyCEWwFW8%2Bf7aYP6hD5qVGY9NB%2FZygjCOqincM0ikjgDOzx1ai5Xu1VkzgcoZOl5wYJ1jvC6YAFNuToe21tLIXcgpogXCume4mPAksgBx%2FoauwrqnEUfFqltjoIyIuP6f3OK8yc1wiGkF4w7Ef6Gynb65UxLxBdY55lpRnD5ErEyrseaZ1AkOWUYYMXPJRcjsVG%2BpAd%2Bt6SaeaG2TFJIQThgXjAHV99zEyMU8PVhbqAN8ZN3UwXiIW%2BJ%2B%2FAdMNbDucQGOqUB5hkNcYL2%2BRqjg%2BNWWiPgFbQbil5oMKs1%2BiDghNmyrnWCb7J04xC5NyggnCVoGSMLpFaCxTFc3RS3UjpOZFdvypKSG2%2BGzXKpeLbULpKCJ3kJCgvhGzTcQh6CiL%2F%2BRteCMZ4vA%2FowTqIv%2B4vvKCdRVHSXhxIXTedNLI96HsBCu38iZyWo2qmykXmFxFxef%2Fx%2F5dkaQdfv4QkOsbzBhXHSodKEUbsP&X-Amz-Signature=925adc256dc0fe5e781980ec224dad1966b0dca76b55454e32eb442f7d01d275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=4451fe893b4f1da45de9a140f11cff21c205bbe33c92bc1dacd018b0483d0c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=c446ceb686ce74af5941c948a23cf0da31c64bf0169833016032d22d6b706c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=6e6d8078d3de4104c7dd7317455ce3f0c0df21e3508bbcffa8a29b9439e6748c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=7bf539aef3eb55d31451785eec4ea53329c8035874a4998c7a5964988183e12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=a713cf9e206deacf539985815bde1372ea1d1a17586d7b608692e2e0dbdbc4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=3af38a691b4f98e180ab2bfa29747f5f654517115a8f7609b5e193a0302e6ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=3b2864e679a98665edfd1318c10ba3bd0eb5db36b2c3b259bb4ceb330e45593c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XIN7KW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7pUu5LAZ8cqA0cMow3wbZiJY3DPrTTl1bg%2BF3416EAIhANk5DUNGSByGuGpx3EnLlMMMD1Fc%2Fymfdy3O%2FYMyUPFmKv8DCBwQABoMNjM3NDIzMTgzODA1IgyOfo77U8XjoDYqNUcq3APnEneDBbkV%2FZhIkVIVySECKsWEJyxdsp2qNN0fxDysXorOPt4xoU7MYw%2B0bzxJuAg3BXR7FGcOs0KuHXV5x6w2UZUrioS2wCD2YdQiaG9%2FX5EZk27mKiOyzp5dZC1Wm8nq9xcSwyGOl33L4hFI9o7RO3gHBSChBeAkWO%2BNjLayAEmBhBe70hyyEre%2FDesmEHurCBdfbukay8pdoiP9oIqX7eiS%2FSyRkoDu3Ji21SrQZjHschA%2Fws33Hxm4el95PKckPWifNM%2FkG20xtw7w2CC8qFirOCJC5qjIZx5qkI5KCKt96Raj4YmvVsay6T1Kxl5uCttu%2BWIvGBrBg39yBlHgti4SoMqu08c2cCItx%2BxIHiAImDT%2Fgo2uNgkNIw0sSI%2BbYAzHcBc1EK8qGgk2MajfiBQ%2BiKA9oApp5OKQUghv51gb1TPtZXx0iMdEo4w4nV2vUXjSD4Z%2BJFR0r0l%2BSINRbw5EKrngPmyEGt3KoblEOHLg0i4QOsiiCqBUhg8oGdfgcL64BGu%2FCRvt9QCLg1g%2FMHCRQX7qZn%2FXjFCb0lLITqDaSznIqe3OFT3g929CThkLl5uj%2FB%2Frodmr%2BYZnfqt5cWEUoVb80TGfqdI%2FJxYeoNOu8Lnl8zjvnF0WWzC%2FxLnEBjqkAaTdy20UtB2ORuj4FjiKVpn5U28wxhqfLTRQB2fQLquvXIG3zQwZ%2FjBHZ%2F%2FyvFgzieIDk2cc6QJRZgcOsizmg9x8zODmWxw%2B9JOKrKLk9O3D3DrYCnTRx0GszE7GvpXhe9JZr%2Fm%2BrQQlUu8jOj6LF89SjFWBsRM8pWt3VE92mVPk0Xesy43SYGRU%2FJDNQ5s2VTCZm1UrdJOrTUZPRC6uVsJZqNe2&X-Amz-Signature=4133058ee96b9d3a782c04f293ea657f92b1cdf6df4efe32eaa3ed725c3f1579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
