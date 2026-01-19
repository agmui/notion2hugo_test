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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=12d69bdccca52456b5ee74e7dfe4de5f2b98c374ef5271fad06242a88b33e4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=d7a8ffa1d34f37b0dad9ce3203b5a82555d7e4946ae3b84ca1e654c0bc5f6833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=0364ff5ff969d8de6b67edc58956eaf33152d26d945c30033fe101eb4a455ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=809441bdf01ade31e24f5c9804da448e526a10697af020d7c808d27694b1c0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=e5a09c6bfe3423d050453a5f6573c5c4ff5fba0b8658ff27240490126d8d4645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=b40d8d27008ca58a4a7f0a420434b72bf256fe0fb1ad758eb890744126798607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=a0e7e83391e28b2c2073c3c1f17282e0fbe4a6d7d092d860c07257a5a2faee02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=77275c29b237404dc603cbe70e735c8176dd22ee038863766bbdc8ff24b94a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=0058ca8604a1f45a435a44bac5dca47516990cbaa8a48c7dd3b4ded4aba58a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6H6RXI%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZMEf7l1GQ8MfTsmytsX8KqM4M1F%2BLw9plg0tKG8sQwgIgRKCPXif9ojyR1KVe2byZaaBhi4oO4MvO5vxg3GYCuHEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuSmaJwYx7z1USpKCrcA%2B6S79aVB1qH9vVsG3iLBe%2BnZHACQH70IVpy3n9kvRC01AovpbpWTp98FHsy55XdSSoCuC%2F9%2Bcl3ReMKL3xbcQ8t1JOO%2BHh4jA4BCKWx9dw%2BgsvfVvMTFcuzpMPozoEsovyb0QFx0B0q6jkBm6FoYPDQ5uq5YDqeAgTlcVWhkBgdwiZdyj%2BwxIquOZjgIM3IBrAXO8iRIIOwbFVWWKnrZUHJauM6Qr7oXz6GA6tyvQnY854iqAhK%2F5PNbEoYzZYanoN2GnkpioMLiG5t8DbgsgL9%2BCxza4yHznkQpK7avo%2Bppvcdle6ZltwtvPvuBi8QXkMv0WsIGu7m193eexze%2F0%2FLNT7qrXHJjOSt4rYP0TRzRWUaOhimRqdV9HDXs71e1KmuShguCSOqMDNk6CaN0EvISVGeYaa7OTxa3CDsSKMGiSo07xi2B4stIaSMcQFnOvNyNtNYLbuavDYxgHCKNENPLfIUAL%2F3KdneYuT%2BCopjhDJ6hbMUkbEvC32N98wGDYhvj%2BP%2FYAkjZi%2FSdVr%2FtDXST3nmRrSZ114fzpY%2BoDw4Zc6tzMH031v4VwhbIzXpCbHmSq36kNzYy4aCH4z4zIZdcq9aQj0bkv4MrZE1E6vCGG2P2UE%2Bt0UOgTxuMPndtcsGOqUBZkJxzjb2LFu%2Fq90XB%2FFqP0mFqWcdReWYktTJG4iMA3RgJROKuQHjiNHHowc1l%2BzRdgVuUzCs9iCcDsTczrxOtNDL4vNReKiH0tqp2pHXuLHRvS%2Bh13jtC0qv9Pmk2udb6Y6QTOZqVoYy7NFpAkwvz7EGUlL9WA4aXd93gyJ3imzX9D7agZe7w3mCYhgN6jbHSgrjA8kYxq0hZQMuBqlOy86EUcjp&X-Amz-Signature=6c44bf034f4ae74490b0a74c6e92caadd922fface13b3cbf4bec2af7bc4d0d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMP4OGZY%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC65e1BqekQtfNsSfQgVx2OGEZb%2Bh5ID1DqGJMnTRV1XwIgLWYpK2XUdtAi%2F2DJ87FENRC%2FqF6k%2BRrecfRHAoTmbEAqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgBp92Tj%2BzVkX1ffSrcAwZtvIphmE0imnkOV9Tby54NlpWcPocBnjptNuGpBYCgY68223UGwHZAzNS8zCgMhe4PHGeUxGRbsD7Lu30sR0FngOauTIJnEPFufHM6weaw4NGM1TI1%2BWaN4ZchpDbkG6aZY7JjdcxyD6%2FHX%2BjVHN%2FtOi7R%2FyKp%2BAWqnOLX40b5IotIqMCVhR7XNKQIGnAef5aln11lCVEg9F6NqR%2F3yNhOPiyQeDmNX1MmhmjviMdTDZtGaBbmmgzeN7QEcG7fTZ4vUXE2rb52jxA0%2BG9XH9G9kxmuPo1HI%2Bx9Eox%2FivTqReYmbBmZ9riGjCGRsuFuNin5yPYnzR8sJckgx%2BtfUcVQnUhodzXgDIZZu9Iq83B%2B9BDFDJGAQmmq40r07nxFpNff96dz8XDcVzQsWF5ON4%2F%2BoLM1pH53tGNyB9R9obmSY2KWxD0QGvTnlWHPHYbFFXviuZDzSO8EqG3nDZQ7I0zFeB1W9IY9n1%2Fhj6jjURxTUBammL1EdXDctzwGK5pOq5Z75c%2FTNd%2BVODZOQHgJuQJ0lYbseFOUm1RHdf7qDRLdOmP5EpRj9TyYibuOU1MnjP8mfzLf4WIA3p%2F0OLs25x98OoCrq8%2FJNRRqJ5LL04EaR0rsIl9lI3Sa2dHhMO3dtcsGOqUBsCNRpargj15R6S%2BSzJUitgGl%2BCHkMiwV003t4ya5IqYE99WDMOQ%2B%2BMzBFW9ihvfckY9seumfRWhoXVhNRhO34o6kKRGLpk17I7FAxsOoi0Usb%2FkDeQC4kf2dG5ymBY2s41%2FQ0PJ9dbkHl8Tf0NYCkLRI6gDYM8ltEz7gvY2qclSmHfWogXDWlvyD2XlX7G0hWpyTvqiQqCYclbdwXf4AptPwsnf3&X-Amz-Signature=d5b935f3de8ce28dd183055f3cd037f877b9e55c6ddb85366ce36ba5b8ad69e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=af33c9b80eac1677d881d2b316ad25edcbaa7ea0369a48e55aa0aab166f04124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=3037b45bceaa46910e991fb02e6a69467f3f0d996ac56a30b279c92c06593952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=4ffa676f461bfa8877f4ad84cdcd97453ac625cb8d15666438bef5998ba439d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=da842055bc9a043105fb07b6e72d2a69fcc64db5af42ea3ee1f79088b5fb2185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=ac014cbeba20cba015f5f477007e25d29976b56946c50aabd4a12f89c78ef519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=932f18e86e7e1c777c95d376d08c6ea0bfd8b288335c06d17db2f4eead82f361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=ab7017b0411df7b1b823d094fc04dfec51aabc03fcd560af9005beb21c944393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=645ed85c9fcf572e34ae0b81f7300f4be6bc0dd5846517b80023c7f6d228ce96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSCVMY7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTq%2BJKFHTCNUhRMX1SQW%2BuQfdmcnmChrebnvxOWuSt7AiEA8LZJAgP1Vpr5CVNVWIFbMZaI3gYLieqxAwnu8IvYlsMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWLdKc3Hk7VOcWYuyrcA60IcK7uKZ98GpplQmqszcjnkEigvbt4N7h98xDb38mwr%2BsEorNEdzviBfFLd2EPzLbCzeCwBWepP3E7rIYc6tbEJFADJkUsEvu4AIscZytRRipHKsEtvFb1tjkuhYfdEUCNlkq00KCFF%2BFeRvmplBlK%2BYhQ4JE1arNYC6UHTzgtO31LORLHZlQnqLqWxlIqHuaAc3Jdrcrj1ZHdV5lzjNeaI%2FqGmFruJYPEecVX8pWIZw2G9NlLdjDBg7q9EPnxzzI%2BTbb3fA8mTZRX8cDCyjOikFVDtnOgXNNZnbsAHnDie8U5Wvb6oi0eR%2F3%2FeGT53oppMNpMeY3Z5w81B3wZVZ3Q6I4q1AOWSLvGa%2BO60uaxpcsD0KPlSFWpMv8N%2F5prxiZ8p%2FnMXmNTw3OXpzJHCOqUZspCIeVn6AN3dvn6sWQpa2G1lXYh%2F77YiyyNr13ze2FMJej7cDJrJPu4HM34EhMxMtwdIls6dRtykB1OQ0jO%2Bat3TYQqhMpzF%2Bo6EF1epGirL36V6e%2BzK%2BZFNTpIEFbtfb561SaFtcOIbZJLhEJRvV1QRrvdzPKTq4B3MDAIEN60P9uciuvPZ75tAOF%2FlMRHoVWUbiVZPGfL9k48e5IXjbhlLtlOllSRvFkrMKndtcsGOqUBPhxHodRUcDG%2BjlOYW3iS7%2BKFpODQxF6k8AEQtS1WXOUcQsA59ZuemvvpghcTYTRVYakhBRboCuN96osM%2BUrO%2F4MOMW5LCLQj8Z9nguoBNu7QRyya1u4pWrRmcQWRIrdcHtLpitq9kIj5%2FcnO61UTEdAhmBiskogZr95LUOH6S06DAYmvHwrLBCspTDDqfJunOSDKSwVkX%2FDxaDt98s4%2B6y8O2Ond&X-Amz-Signature=2261c6c53712a00c01c3d1f0dc1eae77fc504530984bf31b2d6b291c3698c90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


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



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
