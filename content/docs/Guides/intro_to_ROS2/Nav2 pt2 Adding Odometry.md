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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=6a25453f9caa4d5563b5ef79df3d0beae4cd33670611795fd3e29bf20b448718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=1056addf5b45da025a1472a5ae2b5b7622afa13938f51556715176018bfe9a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=407cbc515c2b31df7f527e9b9db9f15bd349c96dfb3793847b98f953c833cfd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=9aab736805b10748d8fba5c32fb2edc02e3d991e293848acef4fd9b293d6b47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=832da380609e2bf98a071a6c9baec13fa508fe1c103565938e68988c9c974c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=7acb1acbc955ee97486ed8d06333de6eb8e9c560002630ffc33f0bd60ba46a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=f58b47a02dd445e01f6f043630b1c12fd1e7f6b7dec4a6e60cb5a2a072397186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=c159c9b7419d205634677c24cc81e20aa365b6619ad0d7f3cb29e0ff89726102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=99c77181994260d5ae57bd80085cccf58499bdd26d698c3abe720749334f0d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XEPEQRI%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIC3ypA%2FH78wgaD3pLA0hlob7Ex%2BehJyEke5psC3ltbU5AiEAjZPE7fKidcAy5hH9Q78BSXzVNGlET1csdO%2BObMPfX9Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDARRmlEg5azAK4ytyCrcA5n%2Bp0o5FkHj%2Fz9HgDtBR0%2Bc8xsw3fXJMKpDCUvupLJiYFQ4QqXhhheJpS0iqFmG9Osx4%2BO261qQsw4CLX6s%2F3%2F7ei3nmKLy4b%2Bb165hZLi5rOHJZl2JMGcwWPwwzv7eqRpaCHbM1VDXSayXzcP6rzNeY%2BfHkLpZwd1UUA%2B14XR1nqN8iDd3aLuTCNbNTTqqYVPZNh1fXPm7wbsnk7YN2CUPj6PNlzZbQSZDDYuShAE9Eam60mTu6jw%2BgZFToTtodwOM6ZNlCnMyh9YB49lH3SipE6u99IjTYVtMN8GzFpXkC9nYCOa%2FPNnrJIW7tjfiMCcvNBcihlNnq0HXyoxBERMwr4bQMKt4i3ul5oidI9xPqcyO00HH9WyZ2XJdRkb7fEZx7XrHmrpPuLLotkdgQyaKL2p3AZQxtHgwot6rGYeUd36wxVq%2BkFYXe11GApCu3CbTq0ZBicjvukqOZzpURhOR4gyrbmUWAZQxs4%2FqDFneLjqAm8VNIVLu9vILKlR9efS%2FEurA2bfP8QdZocmfue5DroCMC81mblwl3Iu4GQmkeMMtESsVJlGXawPyHK%2BrytmqOxWcrnFBj7aK0Oh59Go4cvMLfxdKNvDwJncjBjz4rzBRuMSvmtNyGl2fMJXe9s0GOqUBxPXE2ocngXQXlX37k6godSgqKhATKsYlpyPx4%2BlCExxb%2BFjuxunFc%2Bq6O%2B7Mg877YBoPM2LcVtwn3WU0Wup5BepYGuRKF90tsxrLXz3m%2BxxeL6a3%2Fa%2B5abHs5eG%2FVujxe3kBjCukWxzfFiQTkK0p0uP2wdtt7JlCPGQzMTZ%2Bkb%2BCcrpLsZuRVekmwJl3xJt%2BauDveiwSBYVXGdXvDwpD10T52%2FOQ&X-Amz-Signature=a4e311fbfeed92f6f64d3d7a169fa4d8846f5a6060430f9c7d4bcb404e055955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3HE326%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHuI59qy8%2B4GWbKQkiVGEkOpVQ%2B6uIhD3aUP%2BxH5T%2FR6AiEAjmZqHSOvRJhDZPjB5n1HPhJvk2FcvgSuakJNXMe%2FEvAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHR3qPPi7VLc7jOgfircAwrpd%2BJqPWJbaPCQa%2FJpwjXVmEihB5gx8i%2F42o0b%2BJrf9Vydz3pDFYNPP9UuS8TOrF587CTyeIGt78ODvlawDzm%2BDMgVs2AYRwoNriUjZD58Vy3pJahzxQtLJxKyz6TRKQ0fCBOSymWYxM5nvx%2BKAJd0fCRwUj0eIFQ1e%2FovAyAioxJ%2FMQpyVEGun5GX8FrDTJx8INx6tDQ4BqcFvirn%2FSGRd0j3M%2BuvAcwLjPu4mA78lMfhVpt2zJYHdNScvcQInLjTDvryfVmEGijV8GIsFVfs7VZ%2FAvAQmL%2FIzckeGq%2Bx2fdFtQjD2pxO4CQRcXXSzxSsORHLvKCUFCZv9fs3h%2FHpQ4gLFKdAgOyfmY%2Ba4ezpWEG%2Ffegd%2BBcyZt9NVaupzogyiPad8i%2F%2BQp7xNzxiVpBnB3d3E2w6XyJOO1FJMznpB5IJK9kUMxHhv%2Bxnm%2FsMBOaf7GwpcaHBgnLQo9vKftH6q7syK6h9GPYUDLbJ0X37oPVuFskjtDgds8pC3NVO2P8mLLxlaHR5xWNDkeXNAWVuOqxtgmlzl7aBTLuw6T3O8B%2F3Han5MmvLu20%2BuZ2Iwdw%2FMnBgq%2B7h1NHERZgIBPo3vjzZTHRch1WxoZ1CDZYVkK7mLkfy%2FCpJ2Pz7MO3c9s0GOqUBa%2B1Ph3FdS8FUb9taS9jGi1xO1vPztaMNJfCh4kI82MrorAMdaA%2Fjjt9YxgWfzy3jXR5MsA3Q5rYhw%2BRlJLowhID5K1E0%2FNhb2Zf%2FCxt9vaQyKnkbyeOEBm2vlVro2%2BG2B9VdRXFvVSj2aEmNPpXVahUODUBFtXx1DegojuIhYT4SYFmIKZQ%2Fd4mlV7HdsC6KXU%2Fx1BBb75cUb0UGyKyM%2FXgjC%2B8o&X-Amz-Signature=27f7446d777cea8ff0b8979cad4ff6c3767edc848d29fc0fa22f982997f44394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=e5e2da32ffd9e2a513691d83459b300e749696c03e0bdbddcfb56a18fd99896b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=bc627eaa1dd9383baba379dc9455b2cf1eb51b695954e6390a1b7edfd9805ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=1d301ac65f946139409bdbcced05aca7abc2a302db60f710a2bcb1bd919ab290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=8c631849f0ae44c399982e63821b9ee8d3ba1b57a101a215d5f50b8230973485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=b1a3bb4f1584595029ab198293acc5040c5584fb8b1cdbd828bca79b851157ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=923be238b5cba86576b9a4368aa6ce463f0ae20a43b1e139372f2ec6b6d32513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=f8e714637e2dd4f6cd01f4d6e533a97a988883ab6587aa2f6faeeb094ccf1977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=5fccdda59e0fa8de0444927e1d9a66d8d7a36d69463dcedb137ba67c41275aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZXHDBT%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFgvdbBsI40zOa7fxlJdYHypxbCREpZ%2FvLZ7NMbW%2B8K6AiBYLhh%2FIIs2G3qoRBwvqAQ0BA82gUjWvw%2B02wiJ8%2B%2Bc5yr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM1vxZIbp5Lln7SxXSKtwD4vfGx%2F%2BRl3KtaXFIyNNP59WraQhrBKfw5e%2FDgqWAkdTpldCZEuAuF4fOIXxoiv1nrmq8Syg6%2BGIfW%2FmFzXJBKBWX3XzFPGU22eo7ksLk1Ne%2Fn%2B4rKLSRLzYma%2FIQj5FEF1FQK2dszdAgcBgJxsw6Pz2TaiaQlduJJV9IWGsQEisCK7Qsd1HnTsE%2F4%2FtNF%2BqLWUajn06utma9Zj7npDh6EpHZxp7%2FLWHseSIRm810lXkmdvsdiZOs6ULxnx85PX9gdIrxnpPMEFEF%2FHvnFjEP%2FsvqA3o9ZLMrhKi2LjJGv897Z6HZwbscK3%2B9XcAVXJYNwtfmGRE9oWXCVXWdNG5Acbqh8LkFLDH6puF0qeUJ%2FRyeBL19KS6zdEfIdbpCOHy1TFCUR6yx5gAiTzfxi68X%2BEa8hlgPUv0Di58W8IPXWsV61j5u%2BDs2d7zZ9j%2B54P1I3iRf032ogMV5ZATpHqdfAsvD2t3TwHDk%2BjPx2AIHIib%2BqaKvyq5IpCSppP5HmpmBI%2BfKOAaIKvildGTbNCYXQBSkW3GA4op2eReMLIcqhmFrDff1QTbU9RRzzHasPxagRxVXLaz2sbt%2BXvvUWxmm4ozvA1NqIDpte%2BUqF2xdiqBX7JHmDWqhrbo9tsEwmN32zQY6pgF9qzdFAnrby0xDVOSBCDlbWqDGDputdGIdSD85DId90T%2BcRNYtlX8AB%2FURsT1thaAe2cSgj4QzK2pz%2BJpbx004qWvgGWwJy%2BhQxlJJdQXOOohb7e5v0Lt%2FZQ2RBtRBRpwZ157LQW8uaL%2F4nGBTTbX0MCH%2F%2FbnZR20ZVKhIXR8DIyidSbFUIcTFO6C0m3Ga0AtkU3eRkHtHab%2FGIuayC1Q%2BMO%2FejpDo&X-Amz-Signature=947b9e79a025840c16f6f90f686d40d968ff93eaa3a267beeaea7893141d6f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
