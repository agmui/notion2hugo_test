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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=47c38d466b4bb713b044a9a9031ba14b8bb8742177ac08b262f43e85524da107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=23189443c56e213192e285c7aaa6d01a36a8edffaf997707a60d7fd2ac994f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=6f4993025534748fa75d0751804f200341155466c58f5641bc5772056b6e62b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=6529f923649b25c8e5af3d8be74b065c040add3da21b88589e9a416182df0feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=9e694e5e4f8bf8603ffd7cd178c217e04efc234edf58f54213a2dfe85482b701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=52c2b9dc013b14a56ae90a28b752f5f20c602edb27bee2616d8fe76cb6773629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=94b894464323f012ea39a38eb74fe456c4b4fea7409af1feb2a979667e509548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=cfd128c91bf87a6a70fd4d721da8c1c8cd2af5b54feed1fcdf96ffa896dabc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=dedd44b5910874c10d115e75258f19f9d117c3c6d0c80b44814199998991e52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNTJTZH%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIANN8u4%2FDVPuJrhN%2BKCurldd2XabncW%2FkE%2Ff%2FyGf1B0JAiA3RZ55AsUapLAHBDWwepQShkcFO3u1rqzwC3UQjO6j%2BCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxrYE9Lca%2BvtSrVJkKtwDG%2BLM%2Bxs%2BbmTM3V%2FpZwo%2BF4gNd0PwuvmHZvzFnv2%2FqGfFJOJx9k3aFtBJEHIpq0oPgdNwtPHIAQpvdAj%2BKBD0QGz2klmK7iPnHNcsvP7mFGvJNut%2BZIGHFoW2HNqLkFf8kIjffizFl3y%2BBCMCtu9girWFUSTLbTeMofDX08tZCTRY8Vb5b59EJhQxg0Sao5XTOVQb7ndaear1TByJYRWRbL5kI%2FOQlVfZYwvt0bGE2qOdyb9JuGkUcs%2BAZPJIbWP8BihNY3QKBTkkE79pvdbfpoNPgqpcriMelIfluaeYCpFdEWSdl8PJnVU%2FGroQKyMtl0Lb8H2lLaI0diiB0ORorYmyWIsPp4U%2FmvZ4Dp7wAjWYFCly0NL7eddAkGPDSwUgL0Tp4pTeI1w6ctaNJbe0pkLJC79Zoz3OAMpBtQ7CRUxA028NF1Ow6kq3EY02Hdqhor931sDo8CpR%2Btggbxc%2Bh6nkHjKw9Da80%2B91fQefg8yda6zFjknOVMWWNcxO8zAsnMfsg3aQPFHvMMWaV5OtVGolqNo8TgVGqCt3Q4mJJvrWGz9N7kvtN%2Fkj9PZ7JCW0WZU7nOJ%2FJbYcpYW6o4PXDqmW61vXbPg%2B7m%2FpuLVpGkzSDjzd9vwquDJLI%2Fsw%2F82PzAY6pgGrCcTj7a5ZAw8HwxJ19NdSe1Tqcf6HJiNHOZh6tSL4DbrhnE5qHuXkCjmBAuCbUhF%2BrNv3xuMmi4dnBGbBumINY6J%2B4RVORjWUdakO4GlvBmkVkSy8tbK4BXM1Hs7uLIPjU1CcSpCkjR8LXa10aZ6Qq2R%2BHx5A7u3Nit4AvE%2FN1miy%2B3pe1%2BaT0bLhfOyN78iACw5CF6ezx7Kx3P2X6IHYggu2KnZA&X-Amz-Signature=deccbae01417eb61a2fe1bf1e631e9df4c2908730ebcaf1d23ce6d3ae31de45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L54YHEB%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDI0seg1LIKZZ7s02qsbrmbkoxo2spcit2aZAZFzpNwywIhAJVIL9k1X5It202c9qYC5Epqix8feR7NpkC%2FNGjDeQrBKv8DCCIQABoMNjM3NDIzMTgzODA1IgzuIraQBUxTe%2F4Erp0q3AP5SVvljNKJY3CImyQCjQg0BJnpYnECFmKbdmNyHHNfS7s1q%2FSt3f42Ux%2B6PYyJpo%2BuygF3R7iVspuD1Rbva8zkD7G2dcenRgr9WrYNj193XK2aVyiM27EhTtLMLh%2FoadLZHe%2FzvPR%2BytJuYTTMC4SjiXGG%2BzV8fAZiRJiuqs9ns8NRosfGndJvdWhoAeE7NRiVw9FLz2dph5eQ5r0BWaJvRcdf%2FjPZzpmKlG5T%2BMIAFabbsdtzRwcJVEulDVYDikedUDcpyN4OmrAd%2FyttOBSn9NG6DOTuFlOkeFuB%2Fp07EZNGif4JUmWhVRTWL2eZm1IS%2Fb0Sgovc2ATO4Ge%2FqQvP9TTLVBfYpmgPBTOKg9SOHuAI4J9rwLS598Vd7UPXCPH8nF1EPfwFfHnsjpsBO%2Bab9cZDwxh1uAa8lbF3%2Fx2qmwdOo5mqKG2hVdu7MsFPnzURUoCu068vVaqctMzn8aLBtYw7uHWCT3cH0MtsDT69faTRU37vzQkbL%2Bo8jo8mSP82hAC04%2BjD19tdl65sNPtGzZ2RuQ3TpS3dXBQgFI%2BdgLdIcuWDJmbrMriw1QM9rVoYZwqCvGZvenFBOplVWFRB51wpq%2FR%2F3HLEssTkDkwHHvHIsZQYbwZVO8Rp%2FzDIzo%2FMBjqkAV%2BXqAk5kSfEe3NfRpOtjIAVq2%2F3teblHiC9yarZG0Dys1Z1%2B9wuR3uWUKk1ElAiHR2slsCEkE2iQivTtZdVIaGTdPC%2BZDZxVuvPn%2BgxxySL1Tnu%2Bv64cJxhvmuVYOZGWXRGNeFNpKxl76gJ%2BOH0BQ4a7C785wBKKroysxnCz%2FGGn%2FXhejm0c4C5qqcNR8Vk%2BB9t48NTmTg40Hv%2BLkkTyz%2F8TnlU&X-Amz-Signature=8d918b40af19429d71df6642af07561fb95d6db96218b72bace1a93a432070a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=5d4f8a306c1d2f6ab92ce246c9927f181b503710e61bacea5017747d3dfb2ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=df6bc1b2a63bb38cc0725e48c20f7fda515b13a2c5f2ec8535a1ff5fe3839bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=79bd76f7dd9b4bd664696e6b04761da051f9d59c1decdd48a351bc13c3d8495a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=8f86ad413f79f9597d939ca5f162c45a7c4e80ef972736bf0e978459a6076fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=14826d3d33064df03a958cfec792197d8ec57060744c496731c385e78d618aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=32ac45e8732f86167d953595cda4c217e7b7b957f53756d1aa99da4ab134478f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=cdcefb5a3d559ee66e88a0511bc7cc506749bd9fc10347d6143ec189c2123583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=735f48510d00cfd1361c0dae5866093ace901f822df9d1943fa2e18848a4fd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4RI6UX%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHg5Pe%2BAChPzp66wF%2FWb%2Ba%2B9ncPdJDVOxN0oK%2BMdcgveAiBjlOA3DDM02zt8LE6oVsLSzBXbTh9y%2FF8hBBqas4BX1Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtQ8T1Mozgs547jscKtwD06n6KNs4SJizvfAiqkz1h%2FRxi9wBc6Gh7I4Blwdm9%2BA7Gz9gtzT2wHBAZH8NGtqOYrv%2FXuyt1aOThEVt3wggJM2WU94a6GIu9aKRPrNcogbhzp7A%2FzZl%2BIXlddUT1ghebOUa6hS%2Fx6HxSHRf6dNZJ7ICJzQsV%2BYj3fjNcBkOqPHIPx6uSGwTyH9Y7LNHQT8qj%2FT9DA2IrhUDdPjoAmtK8OVHUhvM7kh0N9lfKjMg68L6DLNwdEt2DNbPYWwMAhRUzTK68HRuIRE4vNcbkSZdjyZhGiItMPN1Hrj8AHQbE3n1QiUWHnIincU2dIlvNqsKpxAj6jbFXk0V%2BwmHbWIaacVO3kK2EKtejjD4I%2BCQSHAjg8C2ft7KPHsus300%2BGqgPsIym0BgsCo9Ybc4cO2YoqZjtc35nbIougYB4Vpl%2FMmtpQHtbuxBS1QQTrphxiibCUGdg44kBe5e4NiTaESGHfO6UDuOOD%2FBV6O2lt%2BgFinDMFjKwHp3nMHe%2FJYqIa4ho5TULPsOmCpZJrV2UF%2FtJZHa6QVA46H5%2BhrDlmgoWFmycCGkXITK6Oher0vNskKXxLACTByMLX2pRZlmjO0CyONsQj1choeUw%2FmwOAXnS9u9d8obAj5sHZGJApow586PzAY6pgF02d2IA%2F36%2FOvquo80tq1VUs56E%2FWfvN%2FNO1Y%2B7zqWocKM1fqjmNTQMKXjtXDS6ETRjBQK4ojrbc7wcaRHfgYGYkuLkgzT%2FEJmTk1u94ISJkOkvhr3pY7riWI%2FVXXnwqAIKaGKf7jtm%2BaKT1LRZJBgh1%2FMkJMDdZsubfUerS%2FdcLcg3CHit8LwYdHW5rYe9Oww8rwpLS5iLvGVMR7VWOZR4oizJSva&X-Amz-Signature=a198f8f029c209e3214c75e56c0e287fce6e7a49bbae638262a3e29a937e2cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
