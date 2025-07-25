---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=a8b887db7f49b954285bc241c28b6dbf4b1821c9cf14ae90b8c1d78d3aa33fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=a793ee8fbcfac13cd9409e8dc0381fde90422db9baaa30ca5e6f94ba16537b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=09ed03f0397e0647d7276fd9098fc0de2ee0ad7fd0d341fdd384386d61370712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=0f53427f47aa84c79d216bb89d367cca90269c6a2341cf9cae31ac7a2dd9fc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=4bb8a9ae68d7cfa78cd6e6118676856703ba6ff7042596117067cb046e370986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=32461a96960e412cf75ff550f490ea07e6db550b69c14cc1dfcf391c861c14ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=40905b8df0187024c91e0645b24ae1aeee2cef401c8657a08755acc3de2c68d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=70ad9134d96fa3fac43328695d28b5b8cec2788eff7f27aa23642bf842fda293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=3f263735b060f438b39d9b8cae08d37a41284ba7b86badefecc0c325e6d0a92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IXVX6O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGsIizZjUn52cCDJEJKlVtBquwoWBn84lDWPZInwui5AAiEApWun7FXiPrM8%2BhgzOEnxBDZb8qtzGA%2BfewG0nSvMct4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDK5JRwyMIebI22UTJircA8aNtvjQcp17A5XRF8ncCTK3D7L1UPdQ%2FGxCDCelNZuajNbj%2FeKi7%2BnGqiCv1W5X%2FYkZvPgmaJrPlZHlw25RAcSRIiruVQhGMicxMyyRd7q0Nh17582qsLWYUGNdoSEaEO0EheSe1ucPQycvkFkB3S5NxJgcUgrTh2jKJrvgDfUH0wzlsLznfkVVNkRvPgd6cyTg5TQx9J9n8gzuHi6T7m1Y24vele%2FHdN4zCzHK%2Bjqoavpq38l1x13PY%2F1rpfc4qJorRZnkVAPD6K9lO2kfUtaa9nZBp3CLnHsBQlhF3t%2BBTwZKEMbiYAoAqQFSFytNop%2FMlGFmdGPp9q0EvOhxdbSrIdZIPgS9qoSRaeRNgXjsmAkqwp14jmtKxmd608S9ME2sqAqSxjMezRAbbvXXiCVu849dWFIsUq%2BUuagYXbJk0C8A1LdlLkpLfzz4eYBkL%2B9Ef5MOXqIM8P16stLSfuc9%2B0M3tgjmUqApSQmNd%2FcxaN7BRAKUYpiebDc55F45OyP5WD7LyewFbu4ZKyMcz7AW%2FSZBvfqlz8AiRtO01ex0pXf73oJIIAIiXXzzEKHS4pvqm0Y%2BHFQbMlnhgvoO2rrRcXosucmfMFv5cAI1YMC54dUPwGAwTqKjQsC5MNXQj8QGOqUBBqbvzbJJarvkueUOZvqJVXhNDcNkTT7vbvDuLwSwUnaWG9Dr71oCW5M4khz5yDRhyL8fjn01c%2F6Df1vSvJ0WXCmJOAVGsUJbu%2FXZCi4Q5XXD8Wl23ydG%2F0fDOQt4bqd16zTt8DdYO%2FvNs4xGjKAoA3fnw9mIGMCikbX0la0pFlqkyd7n0UDbO7szD%2Fa71NfisirgOD9jauhIWjHwKQmMbQlNUAF6&X-Amz-Signature=75cc406de3ba27224d7ab253742b5733d3ff068f45b9a53481aca789e975a31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRUQYVC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCwFtah9B3LWSj78suo3aFHdul%2BnNIV87lEicpKtw6%2B0AIhALSJxsLtL9yNZMj1NfQt1Xy78e1HxPq8diIfOy149boWKv8DCE4QABoMNjM3NDIzMTgzODA1IgzFAJYc7vTI6i%2FVMLEq3AP3S%2FkcbelfrBlmHmOjd%2FLq3AiYiLSDhGGiR1p%2F0NsJjBsdTvGZ6ZF6QiMrWgxZc%2FJGBALGvgp%2B%2F8W%2B1GzVNy8%2FezCE7P90dbUPFh5CrYna6C5I8ajQVcgoyEcY%2FFoPSskmfSzM1EIxOomIPe%2FfnfeFYePzMVbtwhHJ0G%2Fej0OWSQ8vG9YJ0WvBI40%2FrgyNT5R5V2MS1K64JYqXHxrHBqeByzg2CFjpVuQk63k%2ByWuZnlHu8DEHdOhzpZm0t4QmQ6z4Suql1XdgB0cqbFa4991QJOrf8x00WiNUP1OhH765Mg%2FDa%2BgZEgrjAD%2B9Zbp%2Ba%2FSmCv8jpkcPuzjclHJAehvsEll88IWCvXF1%2B3LpASqyWR%2FQuVh6eC4GVbwZWhRbpGM0W1PGbhAtKAGfZAUgLMuOdO2jBNQbGbdanxffz2euzRv6K1cQxJOkFQlL62DB4kWLQUOMgRpjEXLyN7VcECqGaiXA6sXTV8LzYvzF1MvAPvh7Ls8J%2FYxJTjm9NBlOCWElRjbx%2BN%2BNla3WrbwNDtGiK9JAEdScVFS%2B8i3Gzn%2FG2aKS6q6%2BpUsLTMQMmeURCzmitBGviuF6n%2B3gYkn6zWrQ7mRn0ksH0laKmMsPTDz2f1yhB3l8YMEVYpLEqzCC0Y%2FEBjqkAdf2H8RE47eTY%2FR9gqLxoY9SL2YuB1tHDEP1xN0f5GeT8AXhy4SCE%2FQ1OhKTWv0ptVnJmZpWWUK%2F2tE9PYNKhyYuRnBWHnXwlfUevLt%2BxzfFfcsJ4uJm3m3omDGyzwpxvFBLx%2B1x6rh01RXfGkpfi7IKuZCwZGzcKACbSYaZV72bjgAzj44rXSv%2F0ihIGjUJeYXlDtBNLKG8I5S5GvTNPoFzsfsL&X-Amz-Signature=9f6256090a376e1b4a26f9cc4a26d6f7ed99abd6c0302ac4c336c48ee8736e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=f96ec9aaa1d80025186f9a6eb0410907752380eb3b05fedcd010005e101ef1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=6430581560bf1b61bb599fe0a487e14272e62567ce2bc8264685b5714b38737b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=56a54fa524d275c52fa0dcbd8903ca15ebecf9830ef316df5dccb73e97e9c017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=facbea8730610c21d01de332e2b0c2cf98bb467cb3344a74f56b2d23189f7ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=393fea8b77b5da2e63003a222418dc5bd1e67a03db26c1b9b3a2f9dda3740509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=c4505b358443bbae46c9821d996bdbf100505b0f95478da44a796f5b58202b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKHXXUA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCbkg%2FT5C6SOfMA6tXx%2F3takxoNjuM2YVfDF4wMKhweigIhAO4btYy9DrgHydtCfnNaPN83gHwJQxs4LCqSXH34ffwyKv8DCE4QABoMNjM3NDIzMTgzODA1IgwTrnO5ghjo%2F6PvpJoq3ANjbM0EnZJcMbkuDQwcEGxBx5wTR9oRx9IQ%2FtVVJ5tIT9V7H3DcRqV48EgYHPJOVwZIwqGt85b2rTfBjU52%2FgoPPADR%2B%2B%2FeXzFmfc3ObJP%2B6evdOKsGa5kiKaonWm0zHr0VEYCb0ZkgEBKypECSUD3OfJJgXD01xZnaNrxgG9rghajPZHx7%2B0K6jXzZ3aRe10L6yLguZ8ESqyWmySah7DH%2BANpx6bp1526qBN9sxJOnGDNYx3huCvX4VJT3Ei858%2BJWghHT2i9DfhKhf7efkJDg87h40Rfoifl6HNM2b0HT0L9LDt1838Mnl68N3zK%2Fkzz77BMQ32JhOkIFShbuNvW%2FaK9zJRHmRk4hsRKAI1H%2FeDLXgAFWEVqsidW04%2F1sGUOF92jHCr%2B%2FwQSqYEXOKDkK%2FsNg2cEpZakdW3uBKz6SjjltNd%2BgCzxNmISBiSeL%2FFGJhUf9Np3uWufWjdBUY2Mtwouhj9Gt8Y0sU1TD2yu%2FQQz1PoiBqYPCDOeAm%2FVz2weGfEzeEnOwknBN%2BG7NqhWHqtCQweP%2FplFBPlOjdwWqSNakaOb2S1KsgPLjgJvQgHnB4ztim04Zi3D53Xw%2B54t0%2FgC7AkOystkp7UdrqMNcmYQZPjhcvlcY2G208TD30I%2FEBjqkAUvuMQcMBTxrUSDHslcIXnyC5mqGBIA%2BOoon6Nzgs5YlwHydxwnlfuQig0dmtF4D0%2F8SUG%2Fi%2F9dmfz3OgMyYrErVQgoUFQ1V5lVpWzLF633DTTELCcNGwFy2pwOTV36E4FwOoysI3Dg6MdoaXLQy2H6PkepwsbCieeEC9fZvdf3ItCgVjSLzhV2IfqEh65JnpdNrHD8pA4c2Vi1beIT%2FEGwDURHc&X-Amz-Signature=7b89c4655d3d339fb6661a5bc1bd596817a141953259d35f3684668e77561d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
