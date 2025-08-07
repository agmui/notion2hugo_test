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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=1eb1aa7069a044bef54935d0d5748e6a9ab3226c0561f77b10b128011bd0d3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=efe8615a9a024d19fb506a425007c291f5e7b8fd716b691cd068f7499aa08eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=193a6c3c39aeedf16ee15645429ca97fb093a36a5d683482d3326037e14010cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=17096a9635225dfcb48afc4c085471c531795019ae783a158f35f5318978a85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=abbb5ab53611f36e2d3ada3b271f4a42ec34425fc593cbc3560c26c876105565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=6875e3b8d357fbf9c1d46b35ad0369f335b28f72c1a3a4089036fb83db712e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=3f01e687130d74db2f92a1b4f24ca47adc882d64c2f4582a9b9bb9de631e4363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=8474411e3edc78d83ef66a44d8bca6621949bc38c70ec99c932404cf3c1dcbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=ba5aa227f6e77fe28d138f158e21f57f751112cb498ca140b4c7c0a394d7e874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVDKZOJ4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDHtEHBNBg5ODCVqAUwyDy7%2BaKL2eoaWgGx0lCIQeSOtAiEArmOpkT8GirJoWVHA8jk577l37g119SG%2FVNJ4hyIogeAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6eBKJjWj9JTPzFWircA7HW%2BD06tVnHYDxAP8PW%2BApkBbhvpi9JrzOKaLXu%2BYRKlpS9TyqTeBXv3i%2F4tJVDoyntRI3J4d3xv%2Fn6GmVGniPWW%2FJELfo09WYT8VvVqjxmt12Q7ZMd3r2cWG4sYAA6%2Bg7nor7cexnj4MJmNJIjx7wisxl0BtlsquGjVUg6fO%2FWc%2Flbbfw1pc4B5dmfHIb7uYaix1ERMu5OQgSF95WvbZaXi2qHkfOviaThywKuOCzn7tDxLtTCF7YRkAxDV9yl6jpIojPgNwrTuXLD%2FAIFuFb2%2BZ5NPz1GZ8bEYcplJkIAJitNxh4EwibGQNgUp7IrYi5uDHAawzsrFCKS%2Fq9j%2BOA0AavZe0Mtk4yivfwRZf%2FojDcYsfeHFkQtKxff%2F0BtbN4Mm9RCaO4ttXPYIawiPB%2F%2FtnT1GHV5FpofcGsqL7OXtQCX2VHPuCG8uJy9i8D%2BDbUJgi7viJnWu7J1SVlKmeISuZBAiTmYBpNB1QRAiw8m5WTx39s42Y1OCrhAZ8NE6ktoZwYUlKZuN0VApFu194WchtiR19OiKXwuGVnIv4K1IjJBbk67kZeQXxoGdddzloWklsbDBfvyn%2FLyPEIzSHBJWQD4jr8cjpMiQIZJnSx9XEhgq13upqRJc%2BqkMJPU0sQGOqUBUIbdW42hJRIbRGcZRb%2FoOtJeZel1vkDAFKS70S%2BVovSJRkTy7%2BrUBWjGqlr7u0tolW3m3I7AO6xW4iT1aOe9FZkr5dyfh0Cj863u%2FaU%2BFOfXfeWPQjYBlQewumD49jnJQsABa8X8U25m75%2ForQ%2FYVsRoc7SqzE0voN%2BIww4lg5pgdQryusZb0%2FjQN4p84XVqbiIIxaGrk3a8hfcgb%2FdLkA94zYrP&X-Amz-Signature=18f173d90e9672bd4ded4d1b883323e4567dc2d5b4b655ef0c70769d32422eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWOBTZG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDOIllG1IjPMRL4tPYpeVXjSI0ahFgJnVkCoVdY6WGMigIgZoRWC4YIVjhvTyp2%2Fz1jqWXUwtjl50j4Vsuct9VnRTIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs5sXAj2FNaI8WAkircAwG%2B9lPPxXVPBDXI%2FK%2BHi6zqSeumpt2w87R%2FzxZEoP9HusXr9RYYP0XOUf7Y49gIkhICvfyocGX4vfAqkX5eqRhr0YEp5BjZ0OTiqdxvHGcJ30eGUN5lE2C5L2JhgzHgVjakJu6X9KOcgoFI9ms2PydTzbEIWGeENQ4vmPOMMK8EmRPNJh%2FRmJVQPmVRl2pRp3iG4hbbEau9XXpGICUHNv4HdYiyok459FELKg0h%2FUhW7%2FYCsbsZpduMdxR%2FXwOJjt43A5uSq367XwYYoKjpOIo1AriHUnxsMuisE3UZVUuUQ7DOMWbVpWrCkFHaKeFlO6sDyDOyC5%2FN4VHxi%2BJ%2FBe%2BuA0Z%2FWN3es0nXuvSRh4HV0UY9BE8nXl0iMjvNYw73tNCtxwqxkDmihMA3CGrs3pLj0iLAi9hEP%2FUWtU0cqb08erv%2FJZhJXTPnRzci2%2BkAJkKwh06P1A0mVfX3Q6%2FB0HWl5IWuLlmmrZZXXkWEkE%2Fk9J52rYuJIrHHBeY8szE6Ehz2MwV4Sp1zDcPsTByZ2s72B%2BNkNmp6pDiRPXCWiq9jgoyVohrGBNZaze10UZlshgT7GCCTjqfvsGplZ0C3K0Kw6i2SpEwHWskbm0niHN0mV3u7VQfE3pMSkpxiMKbU0sQGOqUBRcXeGNDqMgBshPHWPAv3eD2wzRyc4ERgOxjVhTrAPSTtztNryYhP%2BVQQW%2BFRc51Jyd8niM%2FXxMTRbg0ecClsUAYJnqL%2Fd%2FG8HoXF4Xr%2FuqK6FKU1g%2FuxH7q8Wg7qAGsI4mj8BddrYksaFBB7z76QpHnvJ65lbEr7uVOYcgwEduIBR81G3nRKkQBkl%2BEnEuuGXakhiQakG3TKKzu0qH96JoPjHaGQ&X-Amz-Signature=38e54b2f27c989bb908b19c2ba9dc4c61a2e993d3998b391a4c914c89ba58357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=0ff0cf03f152ad7bc3f718807be401bd5113dead01bb9c38bded0154b61f4346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=6ad1c89189069b372f7d791b08330fd706ec8aa71946e8071a87745bdbeb64cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=17d8cd34e580815d0618b0efb5074b793f90374f507a23eb420d47ca07f8f88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=46a9560c50aca7114d1a195155282f95fb88b31aa66dd02700086f9b637b7683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=7977083dcf4703fbd00c9ae348ca14ffb63427d998827ce10bb9d203a15f3cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=73baf13faab4c075b525ef3258481b0dda805afd2323ca76a922de64a318d4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=fdee7d210b6e3749aee83bf8179f0b9dda37893cc107899ce9aacfadbf9e3782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=ee92c1ac1cf261ba8f5fb3c82b10da987211aaad25d2a4e2c0a3d254bb48c97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQGHMSH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIHzfrX3fH3XLEKVk5ybUpoZ6vvOKWbE9TUowfKI%2BxZf8AiEA7MdeLk6CbHci23Wcxwxvpiha%2BfUUmMa%2Bv7HMIr0RjfEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfC6FssQ2CTsecGPircA7l65joMvRJmS58sD3mv5P2qWdBqoKPLrXQYIjloEZcpT57NrFPMvmoj6PEK5Vjvtd1%2FJKagk23f%2BRdZskjN320rn8aEW40HV956UEnBAVQ9cCPIorsNGFOHIFWylLmSFtSQY9YOzmmBT3cGxB842nVNv5d6HjmNiM2qWCr52cb8j%2BQsQPFAGE5guQ8pFNROTgyu9UFZ%2BXLaCepbVXnFYavgUJZ8TQCiLHdy7pB9F9racrv7AG9yRFK3gpghGSgQbm9z9o0E%2BEDhOpLFhBN1RcW%2BGMh0Wmm%2FMnG6exs%2FYX2Zi6e5p0Idvi1Hnl7e%2B%2BnGb7Lsuex022PIiz0lCUqbxmwoE5fBhntf0cSVvWBp5JTvS4XcMVxFMn9zwVaz2ZaDjJsDedYuWxHaFrVHiKq0QqBMu5aPls1H%2B50%2FDxPjyNwdvk3ZDoDUeMEBxLJYZS7lnXpl2uKg8tLzjAJ7hG1pPU8z%2BiYfDFZXNEDC4MQ19SOytDowrvSvhtDRaxRBX2Vu52T64SKjAxrnNOGa9oe6%2BOK9rewNEjOWb%2FV%2FJTDCmzv8xsQ%2ByahJmn3xvU7BTsQm%2BfNeCQzIkTnq9SnowKAn3QFNzxqdhVm2Xp2EAMtkdJrC4wLnCIIzlmkRLUPFMKvV0sQGOqUBw%2Bzz7vZ9Bxku%2BbQoVj5EVpNybdILLfsTvMj20O0D1cscssLnDQDt%2Bd2B8NBwLigrey5OskMqEHrt4obceD%2BamlKuIiJf1poU5%2ByCVEL3s6hvup798szuzAI56LShcSd06TBbRmqf3Bl7FKyJ9MCWqfqMJ4m%2F4un2VcXD4QJMjtt2ozHDwx83dz%2FeTnI99JycfwtOWUs%2FBMwxJdrh%2FbvgidQ31JqC&X-Amz-Signature=6fe47d3b31a8b813039a5844c5d0b9c3274f63daa067a68f0a88171c7c60ed2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
