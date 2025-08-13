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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=b384bfac55f8ae550c270d5b08b07c9ab8b52d7e4fd5d579b7ff7dd5a67bf953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=08d6cf0e627a28f8df64ca7b0c6d81085cce684e53aa48761a3bf337c978bd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=31361b3cdbd4dfca1152143589bd3a9346094b6831a4d502c62312dcbe7408c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=231583ec0439d4c1dfa4a29dc55bdb2f02dc90718b15b4f18e49956354a14540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=d6f6b92542278d7e1c59b4f5e833480e44f1f33de90d05134604b08289d52ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=05343cd783588ace4f440707509c549428684ade893aa4bd9c855c722b6ae4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=3d4c74757af0f5454ea5ad2ecef1a5d3c3e321b02086c66d10042a8a96e0ca40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=b5fcb53c857afd9747789614191f83b1c321f868f61fc93610ff19b3e96c134b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=f464b756b58810e0240bcd61e8765309268051f21f651b2dd0c2e993de44399a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SNIRMLG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0MGuT7lGH4AljZTWjo9ZOiu2FOjmcw0rKDWKOdUG6lgIgPVK0WQGb2QCohgkh5U7TsdYhZwDVGUfJHL2Kj%2BOBRxQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAmMoq57nbur1JC5bCrcA7OjxaKdM0qOkqXi35OOeWEFqchHGVcQZ1BfERZ8Pxqkx0V%2F%2BR8UI2iWh48jzECTUpn12xb44foSDz%2FsmxA%2BZ%2BmmWb%2FFSn9qlpqfPVqZ%2FrunUHkh7Jp9ir4YMPRYCGAgTO%2Fjy%2BziZIo1oxVpERaCI4ck6kFkNPLlD6qcFr%2Fed7vxvWv9Br4g%2Fpm49%2F%2FaY5pRjBVTxmBNgh%2FZY4eWSIkeSa2Jp4zNVFNmY9kt1mgVChJDI7eB3xV0gVcgR0wFUVZ9utd%2Fo4%2BQEoO6GDUMOcwsm4tX9WvYahYKuC8WhkrGuHwy4evlEiDtu9Q6oSEjhVcfbjRRqvAv%2ByjgJj25JJm%2Bh%2BxbbnimGgaLUrDoKl5v2bX9B4w%2F1%2B6yKu%2FfAouTer25duYd2vxJXIur75ZM5jIdNx1zXzDOQqGyYb%2Fs0rVyUAXHQHeTCxN4l94yCNFIATGiQkPVHkfYBZEDH%2FJnELlFOcJwH%2F99ZQ7HjRRb4lRzqSl%2BRa5%2BTX%2FOoOVhbyO4YEaUsLh37kONBPSkMS%2BP5pIyCIxhgHjXZxL%2Be%2BPwHPtE%2FMbTGe2UjOvxvCivfo%2B7tPS388iALfAY3pB007yQpGTDSBqbeyQEG5rhacHigm8evkkSWH%2FHa2Gq0En7bYRlMI%2Fq88QGOqUByjqbJVI2sC9Ox%2B8ifBUMYQOGtF%2F3G%2Bg1SuXTRoPkw67qUnVfyw9%2B0HrgA6vXMOij1xuBE%2BTYsXjzoFjzyNTwsX%2F9qD07T%2BXoKiq5zXdrFZmCd1W0GqO5cErimkwelhsivD%2FbbjSBR8FsiJeHWTdE3e4sWlZyyXcUDYrZZNraZ3A5efMp9sb1rh3ypyuEjSzfxeYjlQBJM%2FCMTzXUDbG7cwTERMM7&X-Amz-Signature=7490324ceec28447c3e3ae65f9f0dee7584e68b18669a12ca93ae419c86a21ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FD5QSM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhpLFT4%2FIHM1P2b7fQ3eyuFXZ9f%2Faee4yn3ciYnxoZWQIgdEqfdE6aBuMHf7sMJMK8gcDOpjxBeSmFT1JDdxL%2BWqwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFUByvy4CJ18ZQw7jSrcAz3HZK4rRhGN%2Bl1vsanxIozXxGYv9%2FhxtK7CpqfcLBKje%2FcGtBzr7YH3OQ1EubVptjTBTltowT0ELk3Fk9pqRWo%2FeD76kJWQcK1U25GyWHC%2F2skWVRJqEn3RqR754UNjFPHvKPdGxH%2FclnkZ7d0cKiCHVG040wWQxUDGt2wtRnLmNHhQnZSJqsZn3UBdvhivhl8RPksybOVZN%2FXPMiVIk9%2F09QzJYvaIA15qCCvmBkDdT%2BmAMnqEG6f62E%2FadX%2FUlAsUcl60tbDGRqLYX1wHXXD5%2BTILI3LqxqQwogELP3FOnd99MeDF21k3EgUF51yDR5S8UrZ%2B0P5bjU586uFoAbA73HOSuOYSIj9uUOc0MY%2FP1Xunmnb4r1zOMZd32ieilJVM3RklnGdJmQOBbmkZCOOmS0Mgi0twjFv%2FJy5k5mNYuDzVrwpDh8ceAFbIMU0a2tGGLvKXA1zK93NhNX5fbGLEMOkXr%2FHuUDfRuLnWH4%2FIpxDuFZk8uDDQxCPSrESstSF07ES7YoGlW2lr%2BHU%2Bs1%2BMl8ih4oLqKgD8iX7y5Ctel8YG3CmbhqtzCgIisU0kgRDHYocC3jwk2XpzqDd2uWqLrY%2B1UYGaRF1wjfkcjAftGlab5UQGfes%2BRdNYML%2Fq88QGOqUBcB4Ot9%2FXhfTbDqq885RS9OcbI9t79fD1w%2F4QyY%2Bswuo23VDIP1VyBmDC6sIEk9uzvi09qx%2BU339GK3TaXXKxiBBU8BpzUv77xzANABxS1925rPOlWXXCQFGQ8wf0yrURN2NxQhwKjvi1%2BMfYFXdrdFdMSFaYOEa7F%2Fst8vhCeIYeHBz6dW6GGwQ8B7EDHtFcT6fdctZcFEdbVh4moFsMEc3zf4JW&X-Amz-Signature=5d52168f495ee86806b9601097707896d8e215a1bf49c6a910cb14608b6cfa17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=e42dfcc314cc3dd00e9d447f5d66f8229a3ff27601981d613aebb11dc003c682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=33747d6d80fde71fbd37efb1faba2c00ba614d6c61261765e65df4895c08beca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=9699b3d088de0176432ec6bf4f4e6f019ec61f0b4241cdafe9df0951c66ecf56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=d895993f83af690c91b81fecee505f7d7151302046e8eb6922228374aa4aee91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=1b66d4a0799cd7f7ad71bd7b1b258e72cdba151384a2a8596a8bb77e04609555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=60eddaa13fa8bf75de8b1545cf734a1075695121c2dab352f4e78879267c5472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=6ab933a9ee677b31e22e338b4d3e35617f1c3be7e0129cdd141fbe4e124a9e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=30f0d733b1539b580288e9571dca42593d889a86fb745b6b38e50b4c12717b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HBJD5IW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsKxkp1BsJvK%2BokjkEr4IvKGGC%2Bte5xysTbq%2FGT51peAiBsXUOJY2HFww9zlJ8c4RNhFFhM9PRxVVOhO10XyVA89Cr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM1H7w%2B4twNxRD4goSKtwDF5VltHdAZ%2Ff7X22z5iQdjJoZ2tg9usIjtPFEOLo7TswSjOxIHBx%2BPxt%2Fk1wFXCMqZlAckT2XiSYbqtgbR9lKEQfXZSveuofI94Y3jUfC4ni8V7ms%2BIV3s2Ts%2FuStOD%2BjlbnF1kLpQeQ5R%2F4KTqJn%2BAYeyHcaEdRtKxKFOGb19xQXwabGxDvk%2BMBdOQt1SFCZipCP9mjub0l85%2F8yKUgkmJmNJ%2FKf12Ef9Z3a0j20L%2Bnc8uw90fXo7p%2Bf6%2F%2FvlIo%2F0wNdKKrqRNOQcPp1zsgsC%2FkF9EJ5vg5DMN%2FaIjVz%2BNQaJF5PHWCEy7tUz8dj9f2f8bcAT%2BE10NYNR5Rar17rokbrdz4f0NYCIIpa8svdRrmycq21O1tkxiduvVrjXxibDV4tTfhSgrHS%2FB11AmGRsopieDkq9TqoVFiVW049cWqUsI8rRy1Yev3exqwiq6Mhb4zjJ%2B09O5CM337xL2L8U7hKmAatoAH2%2BcTHXx8mUOijSo1wkirJT%2FXw4IQLl6qGH497gyHVHukQoCn%2FdnAI%2BQNjFpPPPZat%2FDgfIndCeRm%2BqiMeKYXlP5EuVeNS9HaoknqGDge9udpLE8OsIls%2BRPdWIpHJPWBegUO1QqeN0ZGj5%2Fc78kk2ExZ1lGIwrOrzxAY6pgHT95l6pyjhDXaQbua7jmb0lKf0%2F%2BkXaoNJq8%2FAQeY0DuzggXvVVhw01bfya048gpKr1EE43YJH6%2FX4owZK4VDx%2BjlvKAkPcA0zGQWjFVW06sWApqTS3zS4RFoQNBqj3ZXy2k9xfkm3%2FthWzMPPSXOuR2s5wNzdLJYqEwGrbC5FuZHsRFLnkbPna67rn3MReJOfi4MlAA72UOOKgY4VY7ExD04ukt%2B5&X-Amz-Signature=d99aa755cb0f1a368b08c6799fa24881ca6312cc8104d1493bd7e3a40df1758c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
