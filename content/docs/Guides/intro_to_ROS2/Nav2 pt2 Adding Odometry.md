---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=e77303e3275baa130e45bacef0594fc9219af60d0cfbaacc84d13bbcd0f0da36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=7ff0cb7eb7076db4d92b4a98b3035e8d7daa031a86094fea772faea59de19966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=042103db3f23db7f97e12139e43c1cd9a22424244f56b6b6eb15b465a2339fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=0f614c848a0ee8a37577220273cbb4f362d24df5fe3fd211d78a44b1a61fb684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=8176c765eae41a829eba9581f68f26ae8f25a92b60a2d12d720171b144a165bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=21f5392c7af564b8316a4dbccee432646a0b5330344e93937339cee70ec535a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=2e3213823ac7e3c3146a41444cb4b92f6b6914f3cd207021c6539169aa528d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=61e947e09504032b4a734514c2eedde38b5843b63bffd7055dd3fe292a1b4a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=8eab40a20885d65ab0feba8ada6aa6e48a994938de9bac8d4074f756e854e80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=4f050db65f741cfc7d87b7a50d8eafb0a1e31f4c8de9f8de7122526c7d11ae34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DCG6XQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX97gau3WVVIoXv2PsKVXWEu1FVb2vx9ERIriJEbQT3wIgXtrO%2F5ecLHTCYdHdYfw8SlAkkc5zDKNNL%2FXFgLfv1ecq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNs0G4h2wE9kklTA0yrcAwipfblwRViyEN5B%2BM%2F68VZnMVykkaerNQ4T5eUNpeMoDi7tv2B2wZspqchw7%2BLstuwr9spB0KyHhPeJxafZ%2BRgw2rcVURwzAV29CymWipUkKvaHL7AfzAGCXj4vhs2Z7KwS4LG4ClWL6euPZjapM1jmT%2BFJPpfSOZ9RB2tT4PfkQZiiI7RRFfhzp4d6M8p3R4xW5U7Eoybwl5fiPdALl2qK2hlV87%2BpukksRiS%2BPZRVaxWoSnOhAdsddFSxdtQ5RNAYq4pwnF25Xm0Ssr8KVH60rB2e4nYjpSy74CpwUv6QWPHyerg7clFP8mmAExC9q%2Fqln4bW7TvxvVNzgzI0agLk%2Bzsp0Va8C04ExU2O6EkwBj8Vk9T6ESsm9F769cpoS2KdTEoBWVw%2F4z2I0WXma8kogqxTPjv0mJJpwhS8hQFJho%2FnDwkGij2nViorfuMmxQRVyjAKZy2z%2FMzx6vanV8BCKULnT7aNVDgRAGtQiyIh5XCtMT2NbmA%2F88vSsWpQQ9eA7DY3yxUBqwdgyGYdlE%2FLcBwiPJV1pbrP21oWwQWlMje07qfF8A124b63SuUr1%2FwCJSbL8RQIy4IQoBuuJSWQ%2FspgvglZKKmSAWNXymd4OO5w6AQQVJpR7MFKMK2ju8QGOqUBr0HhU%2F1UIf9alK4N8mco7yI6jlpU4kmY99xcPRyGb6eUiAChkE98WA%2BipccHbcOVypTJGnYEq7h8TcbQZmsAwFmFp742gg1n6P94idHRQcAt57O6A0TZGn%2B6n5GMc8mdv20kxS7XL1ISLyl2OZPJHJkQzlKfsA2sYwuZl0B4SeMrcqbMnZ2JD8ZF5dJ85VuBFwWe9%2B2hvc6%2F%2FK%2B3gV1H9WHmD0rl&X-Amz-Signature=450c64afbe7cb1e6ad67794958a706745576bb0260bc6625e69f8191c1a75cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLQ3KWGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd47Tnf2FbTtAefV7oyBqMbd27L2TSc9TlpZ5FMx1lhAiEAsgv33%2FNUorDbe25LMjGVPkxOFJkLskcv9fJrqK4XXaoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGjALgf8e1AKOZoM9ircA7CZuFgJhTydKszGDmzBTo%2B6jPvb8JfSZXbMns36poxgC7Fig4V4JfZdlX%2FG6qpEFyh0lZa0JFvwUa09lYY9C0EcD5dZJejT1%2BojWrTbLIYneHh4J6WKvS9NaDaM14QNF8vuxcTT2pJxhykX8HvonrbzzWOg4DnoBKVyBq85mQ2apFjyvpcNJtMz09f4guQVOZzdVpm514MUHjXNqXybFYsAXnBiNTnXY2NpxSOHcQlmggdCKAe7305uFJYw41f2prmq6I2%2Bxf%2B%2BIrirxxRVPm5wdg9aw3wnu1Eq3EVjz%2BUT1n7lkMjRWewC2d42ExUegPtXXhLfz3MS6s7TWC%2F3B7x9e7Fq03nJu4jCOVWpIpqaLSrkiJsBVFbsBb6geU1RAjZ6VXFEoCrlnqM9U4Y50w3D7JBb6AFHAUwEsFLv00neF%2F6%2F5I7SYDpfxtgZ9%2BMTsx2XjjSVG6PeJjgGfLl%2BMUmTV6f%2FrR0lgmgskLg03R7na55Sq%2FNrtzXIumrWuKdrkYdzamlpdzlmJIqSbCO6Rilzd%2FAvTozZRosZoRMD%2BybbyvlZ6udsrVUGBWYm2q133m%2Bctve45zdxam%2FbvhQVB4t90beKoba8d0sgEJvgLfJ5uJ%2BmEQ3NyKd1YBTEMJ6iu8QGOqUBCidxTvtHoAae1bqLYMAY1bI0UOMzUeJ3Rd%2FMlt6%2BXMhZVtYueTwwwXBRvxfkFJyaZOtH%2FkMBb6iTnsLduMpuWXgVd61r77XEkyzDdUEwfvXFylsxLAq10hd%2FBi63n4ydQmuVQ49eXilX6M6K7V1d6ZzNumTPmgpcIdeKhR%2BhmfhZtzN9tddejSLKNpkoeSytwigEMKag4oN2%2F8hYFEqeOzbsvQaL&X-Amz-Signature=97a3bc61112d57a8a10730329d0e5b8d7e25df15c70c6c063655511a56fe3733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=571130dfc920765cc08da014e30a3a2fef3a582100b8193d8986ce97434c787c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=a5c73f4b37a8ddba4d2aa0a41f963dc51f0f2eb570a1d54dbceb406b9c6afd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=6522840ba4666e4f3ff3b26c7c38e3b0d2cf65e8fb8c6a04e7786c439001de7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=c27b59fc92c64fdca55db3b88c8a724f8a8dc03762cef5bdf432b5b544b04b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=f32243de9f541d0507af7f1439929122979fdf94c265e52c87480d334b43a380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=516766b94b46c54276f1a5a693c3aef8be65e771b7b37e875b37a2737b5c79e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=711bf6fbf10696b59472f9b755fbb689b5de6b655e927deaafa2ac3043d263da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XANHV3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpUCHQpv96Dgfshn2zqaejOKur5lLHZx8ho7HNZY3mXAiEA%2BPVcIFHhBLCgalAXFh2BYYB%2B6e%2B54vRBcz%2FA1dpXW5Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJDy78W8ub6Ca6nCISrcA5mFrwbBCghCMrXIWE8QmUhpQAEeqr8kI8S7x9%2BcNKZPn9owPF1WlzJDTp6MsM84gkj1EGJJQ604zb1s0U8vir8N4maHfy1T94wy9P9h4NIzW1hzVg5O8SRlEq%2BMP1FACacN1%2FN%2FZhIr2HFxTSA%2BFoLcBbX%2BZ4yp47xiTEA0WPJBuTm6oU9%2FZFvFs2flwLzlJiz4ugjVtVly7uTaNTqsfrNpssmXclFez3747n3Ww%2F6B0b5Z9dDfUpL%2BSJF7vk%2BpXhq0ENdGVidyD58krEnqG98F7CphJYPDAWwp%2Bbym%2B%2F0jvCWv5l7mIyfsvlMlE7AEjCQupXuDnmt%2FDsSBlkuo1nIoFiW0ZzxsWfY8PFPao247Da4p39gbsbig7l2xu9vv3tP17qfw70TR1KHUN1mqnGTZIBlBwjpuDDSrfVmtLJ8YkA0PA%2Bv7qCfE0jDuQ6%2BsCfAgGKp35MYUTX7BE2NgxAAu%2FkO%2BOqUkByLaS9q8DvzlPdemHoXKpIwB5I693LJvy3zVNho5xeMVlIOKaCPuNWJrsFurQzbqXKPQg9fHKGCKL8RyxnDJMaSSVUhsYFoK3y06x7ePO20CcmDi%2FWE46PpljHAKcDgIDKsixP7od4DUgJjmvlaYDorEqidaMIecu8QGOqUBrXNN9AIqcUAoDDGJjUXKDfpR9wbEA8%2BW65xKk7tRDwIMokcAR6miojn%2FIrrcO3%2BIUs7euA1ohAjsw%2B363FVLSiFsYo6fvRAQ6pL2LrsGAFznJwGtD175%2FqZqPeahvOqa2mMP%2Bq7jwkiW0j5B4ijE1jVSfUXjTqI0gI5XuX6h9T1uQM10lA%2BC41noz4WjOPfUM1ZJuBOdKMB0YuLo7AD81Wq6NIKB&X-Amz-Signature=5d89d7bb614adccd4f74f7394140c94c895af2ba31a4cffdcd6c4ea61e4d7cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
