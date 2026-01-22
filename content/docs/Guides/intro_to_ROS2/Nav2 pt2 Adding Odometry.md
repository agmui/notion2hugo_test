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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=826e0ffd38f6356406a045d2febee8ce1ad8d3f9788fc5f3205e1a2ff4f34c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=06034d184aa8c6850dfe281e3f6e6b8b14e1d3a449509b97e03038aa4ffd7271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=d2b14e490c79cc133d1311b768a2dca13cc6e216f8f9843d5ee531ddcf31aeb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=3a745824d60b17bf736b96e37120acecc20b081ddb9084bfbca094c0b5da1ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=741f9dcd912adac1bac74b3a89e4c52cc38a4e395e812fb0321b9216a2c4417e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=08ab66fa10d27aa84699f1469cfc78a30bb859aa94e401880e9d4374bb064307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=f3d526fcac5f67fcd2651e7c83d06304b692623bb68ad660e9b4dc6ea0a0df2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=dccb117a9f83c149ac4ff3e2953188535da80d12e8e3edc731cb0bb7ce63dd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=9cd57fba818c6d3a0bc48e2fa6ec7d44e4dca8a052fbf823f5d306bac7a470e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCK7JSK%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2Ba04%2FZ9osRrhqr9Z9mt5Mw%2FSfgWahfe5aNnJczcO2YAIgc2wsJJLTffPlhWoVvsDQqvD5LBcLNc2PEkO0c0Ti0aIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLFZMWuuRZwUnrhQSrcA5UgYsXJtC9OwTzgw5LvWrnqpbavmVC1SgHOsuQubhb%2B8Uzc1DXdYlyCWvmIPuCpK74ldLRj7EfWtwdk9QC2Bp7qmBnvIKbWKIYyQB2XErwBde040wLgMefEtmikDX6AwHseNhz3ceiCOsz5aSZtglyT%2B6eRzNEgC1KCcCZWTVa6QxdGVNGPHGepysdJlwGS4Mi3nRBc1mCrfU2hyrDdTStkViz%2FW10wE%2FcdmpfI%2FaR0RZvlBnh7QRIiBuuX1JUWBNhx88oi9DRYZGZU54ArhXN7LwfdGgeeJ5T1aeAf5Vv40e0aE%2Bw3byCeeh8rzN4mKCwJ7KGlhldmaQkeW6zYFlQEBar6dFU%2F259%2FP08Hgxqp3UGhNvmwCxAWhMg3Q%2FV2Pd1YZPVDm9jGrZ366I%2FN%2FRLX48XBvaGEFpyZHngadX25BUVMqdiDJm3oUTrI07O9sEqH6ow67wnRbmgGnBQM1ZcLJGMa6J2MvlZScfD4pfSBZD3Zi60aQ3eXWiLJzAsesZbhgKW8UBf6jYELT6XHT6CEZ2mV3OyS1dh6COW7K1z2h614evbumEUga%2F9RBaujHkuO4ui4R0prSO%2BbfC%2FdzjKjbY%2BC22WpOC0LZI5wDU87h18sH4fOedwd1nX8MLPXxcsGOqUB0FyZUWYN%2B%2F1JcolgkQyN7y1h%2BMJPyqZomJ2l2Zhwm%2Fg7V0zz0pNwaGBu7ASU577oblkWoZc5bHb1b78OxsQ3fw%2B1B%2FTRZtlXAL4Xms%2FYowkDQKp%2BUUCX3DQ1%2BKAkgfZzKrQJMTT%2BAVc0BgLRM%2F72HwDBeLGmiql557j%2BASAZq7yKsN8c1YvRjSb5bwESJTmD4QcoSvVf%2FVhvQtYGIa4xU%2FO7QZ6p&X-Amz-Signature=3c9d93715f674b53006c276051c8a893a8a011989e1c85faa3b20fbd49d12685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X22FXEN%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCXlnA9Gyxklaffxdur0YLkEs55knfEx2DGYZrZL%2FF%2FqAIgZcm76L3ui0Vjy5GCo1PDi4HTUERERx7XC2b%2BrVmZttEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCItM6RPrSMu%2BUKCrcAxM2PvKlHXJQZEVYqNiydTPXuI5gcFrmNxcAYP2%2FRvdxSSZuM5ggGE62DxKxpPQ6XWIc3WnDcdzl0JKilwpyjG99PEYXUEWar8xA32H5XS5xRt7coBj%2F%2FObWo2xDQTuPurFsfOZlzm3kAGgb%2BYe6K9h0azOjaYF6YqcrgxazC%2Bbm0%2F1hlJYCdEM5JyooJaBBk95mNboC3avm%2BKJ6TSv3zLXDVBwG1TU7pUoMS1cooL35V%2FVL1TOt3fcRWxdNH5RR9ZWTJS4U%2B3SDZ%2FEqBQP1II8XX1Fr576LZl73QHNzyMmjWlpCbO%2F6sE3Mcgp%2Fzla05TUK6vu0L7E%2BK3yp%2F1%2BYjgo3GDTl4OvXtHbGGqk5yMKwkdQizieupRDpldc92T5i83TbR3zvpMyU5IsjXNv06UWL%2FHEANqI49ZWtXqvIJVCTtUJN94aXNTfWK4ze2I69Pi%2F8gTd1mnJBa4L1VJtnLgLoRPJCuCLwGLsjBQq5ezk2r4fwRA%2F8ajH4yFQ4HIIp5vUpSDUAv8pZl7S6rhWLBwW5Eaaxcs%2BHlmyoHGYnmeHd6KtatttGimuJDIdwq3Nhzi4W5iSxViuKoe1b971HG9wHZsDdaatOhDQRFTZF0UB6VnR7x7t%2FulgrPikJMJvYxcsGOqUBBM9keV9EDy22LES8MBFsB9FdCjnzOTdBbtpHIcrn6nKCHKTtpgqfb6HrORcd6cHbGxqsJE%2FKdnh0qlSxty1VhlAVwz82wAM5WUbskGwrtKgB%2FiXPyVthTYdQTo%2FkatYrxTUgmfkKREyazMif%2B98PVrv9gAK5aITavEbD6FGMx%2BazSny78nakXqWSdwJCwU48vQyqxfa4kyXWCtaMzrLdA7dPs5wv&X-Amz-Signature=56399194639cf4daa71e34e0ec16a31c451ed1e2672da237e04d221ef519e120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=72f4876f8df9053d90c65d7d308e1fa7458af15ddf154a39709f2c1dd6aeb5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=3493cbd0a666717852b440c6a37daaf8f0f99cef42bc011c802d386a06679fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=f8bc71dd3aab8d9a5f524864c53784f031af1885911d8e760e835fc62aae1c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=c7056a98ecb190bf9f2de50c5361bb1865ebe55ff235f7abc88fd965f626d384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=9d386e6bb2117268588e4c3a39e9cf05151280828be2fc149cd91d4880457d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=32e8eab51597a0763bc1eb20b44187a6a5f1d3f9311f4be9f77e113ac830c745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=c7fcbee958dae6aa597d363fd19e6090ab7034a27f3baf41b295a504179ab55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=9bc6f6cd36fa5bd0990923bf852af3ff9d2f447bb6f92c83d1a0c5ad75fe055c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMUFXHL%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDdICvc6VlAHKhkbcec9dN4xAY9MqWdDl93mCt%2FmXHM0QIhALkK31JslbSWR5fIOxmcUHU4KfWMCsUxyoEsuIQrtTN3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyR6COJYjZPCyKMUPMq3APx6VhWJ%2BmqxQxWXLqR%2B7F3GzWVAYlEpGUnao0RMF6B4zoByjx5kVHqe9nmDVac3at0X6wozBOFEt1tiCDVkX%2F%2BBQM1eegVPdDKijwSJ%2FpxM%2FfOqgI6L0%2BumOGuK7cAP5Ihuij2DcUAfEMDMG35a%2BfdZoJLd0NvkXyf07a4d72QNNDUfqOVdmftbWtZbZnhDskJUUgPLICpfbKtY%2FYwnXFNyh05%2F8ERzq8IaMoSQoUXYrLJOkNI7GbIoKLqikCreSLQRnmk06V3C0lzkBs2aacRtLQKGHf3bporjS9K13Uq1br9q8avPjYndQaz5w9ntIhuosOwESCa10JZHmknqpYWC%2F3TVL3bOGR%2FuWC1L1Jj9B4bWV1sOUDv%2BuZDwHnv1WVF1hZO9GfjqfXG41oV%2BEUILjVYPMuz917v7fOMcDlDkplC%2Fxa8P4qtNJ2iRg%2FaW6JpDNL%2B%2F1Ef0eg2Vk0vfLvo0xNJRBjRL6x3k%2FceX%2Fh4iubwKMg%2B3wP4z9VuR3RCeZ9DfFgnE4truk3RJADJ5toy8htg1YvmawAVkHR9fB57q5gCAhkuAqStLbPcIgAyDAML77XhOdIL5H4GfOz7abWqhF26KOnGqXehemcZuJmYbzsV0PFPPaLt29GuBTDb18XLBjqkAQFc55jlyWYXrJvv7QAZ0wLsusBsrc0Q3cu%2BzH5q3W1q6r4cli1YYmhQ5El5C77LmjpgHNPD5itYRM1%2Fk3Xc1VYhlcGnPtwmEI%2BwFsDg%2BTIEO4ollqILbbzvE8z6ftrQDM4%2F%2B6r4gJlvpgmIfNlrkXV3POfY5qDp6VRMonJDmkEygKBSp%2FvzfN31UWBZ5tZkEDyByZyQzqekIYAsoQSB%2B55fmzoU&X-Amz-Signature=6553d7f4ac99c87f1d47cf1ab456378236300b9152c1f3c951451a3ded96cd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
