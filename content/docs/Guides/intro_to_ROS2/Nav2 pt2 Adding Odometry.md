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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=c1da2edb56e033f1a1f4026ca879614207e2e4a6d6eba29197acbde26adda5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=37150ffada1fb7bec03af566f93e557596547485e7994737516bfbb71432d562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=b485f5a2494f4b4e6c34d69552d6c196fefdcfb535795cdde8a745a513b024f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=5ce601b20465949211731a13f30702cf23101a20fba5719ffaeff7043dbadb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=009ffdd430e56ca105694c4c4cac6771067e9ab5bb6b6a9a7eceef78f09806d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=4a3258d0a3009c1f93ba6c9d4ee260dae71d061201efade0f9dc79178f38198f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=99680249d50611a8975dae93b2371aa004d2a536176cd00f98f1b8934809723f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=c21260e99078a897c1ccb8d2a49577308a01aa809df6021d1eebc970a1207aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=bc3f3d74dbdf24f4a2ba300efbe708875fc83fd6b031f19f2586dd741753d506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKFF6MOI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEpOHVsu7dz%2FqOOlXDAaVAIHUGENNHTGX9%2FZ4jwt4iiFAiBctO%2FH0C%2F4S1JKKcbaAGbgIj1EQFJR0QVP1Ca4xppp2ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMHYoB4WcfZL97%2BlXCKtwDzXpVPJ7AAPZvVTcINFvyYV2YNzxsbUILeXH2odv%2FgteTV9NaDcKbZjTZqHOT4XdtzfcJ%2FL1AlHuKaOFv6btn97rjsOrrsiXK9CYlzQ6N%2ByZwPIBSOhTy74g6%2BfI0vwMBdVh0YISwpStK3Z9gkyhu91sxVXmZCsrbLxhsG5KIQwSm%2FLRQb53d9pJB7kng11m3735qfTtgi8PfkWoiv6BJw%2BwCFR2nIuVXTTabv6cXeasDw5jNnwAuzbEzJBH6JzMwP70yW9aUl3FvE6gJtK%2B2ZKJ4emX5wP8UlI0lC94YfK5ySWKZfoNCqBT5eG6vhEGt%2FIvAVfeWj9HQ2%2BJ5izi3kMhIBv%2Bu80GDw8V3ewS4ncDAje7x4AzWrIiNVrzB8fI6QvetlTXwFX9p6pogYFh4Suf6JAo9oDeMq%2BrN8PGUoMsa88JBUChcoJrQWQfmRY2VTEzghxFMU4FJ8Sfpay3QSIeLy%2FbAF02yK1BISx1JftivUhoGula%2BoLPw5XpILaPwNWfLfQQrYxb8vB4ntzJgxENKFHvhQyfK60Q4fGC2N6qXLQ7LZmiPKer1q8mnjqz4T05i2GhvcnuuCjMnt536oyQMldRKj5PFAc67g7edVYWBZYArHnvMrX6kcuswlO%2Fs0QY6pgGJZiOKQd4L3o02rS089UyofDNaCL2Uwrss3hoQ5OlxUJEGkgx3P8cICiI%2Fek%2Fj1i%2Frfg%2FbnGgNWjYWHRjsOhhFXUHK9LDJNyaRBbw2SpuAv3q3lPviyWqP2aeaOX%2BbQSXN1j%2Fv%2FJXNY8g%2FukqvnUj9J24CCg04KB6cwD3U7Feg4JJaTAwYH0%2FwK39W0RjTLC2U0ZtHkD2KpckpR%2Fq4il6Is5nXnr9x&X-Amz-Signature=8d63927b42f7358066196d4e16b8f02de87aff0231198fab7ec6774eb3ca4446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLDK4GOX%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD72f8wdZz7HevnZOrghZgJqFSrKMjv0bqvnRGlCQBGWQIgVQQ%2BP40Z4TjLHJbrPzFAOeU%2FzJI3w4MKe9J7RTCIC%2FMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCzUwCWpq2TApUnsEyrcA3%2FosRJuh9h2gas%2Bc9GOAPmAez3xg5rabuaych7qAlGetkxtArp%2B2Edd6DHKWyvmi8%2BJ0649HhhUoWIMqky%2B23B2%2B%2BBDIpr%2FbhycBw8G89uPoqJ7pXVTRt2jUynFhisOfj64xIS2%2Fpru07YddQHQ7aGzoyb4F5IDMbkstfv%2FgkUXMFPx0NL7h8NQJTPBMaBF5NJryEXuj4QXuX74MMRb%2Bcn6QG8fjaE6s9aJeRo70i3ZYGmBasf%2FfjtcWFdGZLNI4dMMcEnBpSQyXa7aF2J2m7f0j7OE3pHgIQXmEkBpvTuYaQVWPebBbWX57e0uY%2FqOPbAE%2FsnKPkP5LLXtxUg84SiuuJIaj9W0lwpm6COXlZjCefxcpSfPtfT3LHviq57YH1UAUrQcd8L3y1ydGZdmQrE34I7VN1BJtlp%2F3YFXOscabgw%2FVPu%2BhTlSzcx9fxfUPohlxBOG%2F1bZKC4ofbICjUWeLTCsj%2FAWSsE6pnAq1D63nWLQLlwic5xWIFo5DQ5To9%2BH1MOt9FHQ3TPcTb3HieTPq241KddNlTdN84BwaS%2FvKhcmlS%2BQBwF%2BxwHXFKPvRinio%2BPlujmetHP0wvSsstgvlIq8w9WFVsVn%2F0iUWZstTvQyV%2FY8CihYbQ6FMIXy7NEGOqUBLZngWzDCcxhmBDldSSBnZqaz7pwYi4qMf0ZT5ulJ%2FGmbbjcVPKBjpxWQjDRNEnKngbz0Llx0%2BhOBowruX838XO5FZqBnv1xx7C1LYhXrzW1DTHHUymkdYR6tAJFrRFu5tWv1x27xFLWnOVkuwFCCG%2Be6zAe7QWozkO%2FyRxCSKCH7SPLDKZgir06CIPLGKsz7khiUqdFCsv0RgcQsHL2oEjbtlix9&X-Amz-Signature=441b23cd07035d349a3f143f9ca57728e22cf29cdcded6e9ff0d01868a508822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=c862fac719ecd89414b52127a06fe346b61d66450ebfe777a0a0f2f33a4cacae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=a8dfe76dd9230e2443463f58f9a80d84cd3fd21993eeb455807ff92b0f54b9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=7e5380746aa4519ce2dc45353fc2219a1af4fe100998f1952e622198c6d6861b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=db4141590069e1d65733826828abb2dba0a785f85a5df21bd79f1d73081f37da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=f40a24b501172b10fabe0f30fe3f4618df627e1b0517282349873d3dfd6e5410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=47642373a089fd80e1c6a2063caf2bd5c3c923c3b0f3a1603bef3a8b4f24e36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=989d7961bb3f54c158e0973d6f25cd95467c860989b330aa08f61b50f6b5ccf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=3a9185b313c3cfb120c200bf432cb8779cb6afb732be45c6ee75726d59d0f5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67BYOWV%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDdjoUt6SfQTYthbOmaH2uefIRhwvfAEXOcR9GkkOmJawIgS3qSGSouQR%2FD0ztsSD7att%2B9JZmoUY7GBPyax60%2BcVgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCT%2FY2C%2BJzslH9VuWCrcA9EU%2B3B3UkImD9eCPSd9hYg7uDVW%2BcSy2mglx5KQ1ttyeughqTrtRi5pdtoA4qaeviE33QhNoLFVQhVyHAmLNGj7LvNBY%2Fb%2FbZgHDwBhnnI3eF1fGkjuG5uInn3ZYz3p9%2BYSLaTBN0a%2BjL6FNufnMn3mT0b5Qr4hCqwT8cPZqNjMLw7IDmLVJf4prdouLWiymNb9XEsdwOqaDdgxwVAN63eJHG9aKG8T0a5w3P8U8z915fvSbP0CvCYk8SoSRngMN6nCBZwQ48dnW%2BeIcbMYYoJy0JDl6YfYi2ELZN2xN49UEUcYoh52B5H0TQj6VxmqKKN%2FNLWmtbonz8j3Gv9L4eqWw7ntBCDMCCExs%2FPK2WTIbIRXS%2BINncF2pJOTxIP2dqpGP7OTEtsX5V1zWjAUxVsUxedSnLeJ0fAyTuPDZ9v6INORxuG8089FoK9dvlwYUKihyDYAPFwepDiPeO1C1x2biwSksuoGw0Idmk%2B8irOOj1v4%2FjszggdcRu5O6kjkzuuYC2tIWzs0yWJTEtJBwr0MBeo1A5VtuWaQaqN7HuRhqg6imU7lNJvkolpZcWTMWQ%2BX6GTsw4T1l5XC8xhr5SpPQH97U%2FS8wn2xKkG%2F83TdHEmKhQsPEDE76MCXMM7x7NEGOqUBNgwiNpw2MvSXgaTbzdehgCpQm9lCpmkEXbhIxPFPQnV5Xqor8SaCvQn7jrltfLEm6h1k2o6siH5CVLGm2AqdOyENZ1%2Bb41p%2BN93TQ4kr%2BeEzgnlzwp3ske3F30kXHsEZxsoV6gPYk3m3wgcc6a57ViYD%2BelFQtan64Q8hAjXKuIYfg9Af0feD8eM7ZLo%2FM05gznPQhjibYnSnxahnYgVJbZ6wXVg&X-Amz-Signature=356bc0b01fae16b85567443d3630932661237011890e5db0365a024a3b0f80c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
