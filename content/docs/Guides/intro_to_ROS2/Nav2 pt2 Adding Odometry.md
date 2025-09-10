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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=ecf4262110cd723dae07010bd2afccfc87747f6e547d68ff157d0234a3f22b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=3579bab5f71ad213e578b2ebdaf5057d8538039ab27a20dce8b803e07c25a696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=13f5c873070d60e78d36eb4ca107d7deec932bb027edeab9b3c0825db15cb0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=57d443f91e299f9cc6881b69aeb33250f4d6aa06c12a19eac8727560b28ba0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=282630a51d75222027b36bb6a6c93ae56573cb53e14c45c175cace3624678642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=7420d064ba59197006836588f0377076551804cab86cf0478c6ae014d2555f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=ab2d0b0e8f86d530dfc6536c4f2607e786463d3ba26827e695adfbd1988fa9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=5c991e918ab9b48f68f92daa7fbc5f05fc010303f8866df0bd400838e0b8ddee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=8926dd3029461fda46271b21886cd2fe2c98f3ada68b89a7bee9383c532b627c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKFVSR7C%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIARKIvd3UmBqvvebZeE4R3oo%2BWyuN6J5dwT30Z9WD%2BakAiEAjrZKRg1TBksg%2FIsm3bSS3sJz3%2B%2BQeX6sVZ9k%2F6fxp0sqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJARrv%2FReim%2BrdeRBCrcA6nQCqTZ8%2Bo629m2N3wNKS7YsXXJRmA625YkyDZpYtLmXWBpUiAyU5R6RGh0WdbAPNOjDeC5dQ5VxGripJ4%2By0UUzBFZ9cYYZQhjL%2B1EiWanFRHbvVo5KA0HnCCYelIuV3GK4XS7dU4AaTI9%2BKpEmzwDcc2oijoN0japuH9CJS6rPUoiK8uIRISbRaeOWIBTNdKpKvteJC9WFMvgczSUSyExvVXu9obDQ5cP5z8dsz9Buh5A3jm69LFuXpFYQPBbiLXTx7X86UBPPum1ryOIaFL2jHjlNr0x8Eijp3zrj8Tz84o2oHjG%2BKG8XEP%2FAdubk%2Br6CvsMVE%2BiQBh1qUYny40Wfl5UyfqS34Cnj5An8syEwzutEL116pVU9N0IVMAKKRTi%2FjCR7G0Xes8XA7HAAuLBSy6WOxOwMR6gbR989HkC7s7wjWZzTslr63Qy8bzsi%2B4j3bAYp4dumn9ZVq%2BKxDpCSF7eCjpda3c%2FYLWLebgk%2B1G78wPZqteE57V4Z0A%2Fxclit%2BQep02alImvYfYCH0%2FYu81ag8C%2FltHnQRBtwag2zVfEvugBreA6pzvE5OqRAyRAxvv9vvunKO%2BagbLMX4vIs5dh%2F%2FJ2KbiJyTMLgmK2CafYHBurcFqlU1pzMLOLg8YGOqUBHBqYt9JE30Lzdrl4Y27BEUZsCnOZYgAJ7V2nvazeJMAqg5oDNPWtuWdFTLIpfpyOY%2FU5e1whz8Aer13wC8goHOtzjK1ClScJRC%2BdXURuKFvxOKDWFaLuXe2sd85mmmW5dwEJCfEs5GiGaNvaQ3qV8DtY0lfzxzPrOrOeKl6irmbFkMY1rut7OsbKErZfgyYFwNBg0rn5nlh2UlpDPJrS%2BwX6rVjZ&X-Amz-Signature=41b0879fcfeba4034ceaefff3023727ea1c6fbf26eb63836ba60a0476b070782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYM2JJFQ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHWreKUlSn6DHy68xhKg45%2FyRL35HNQRinWI6VbF%2BP9gAiEAxjldG9NP%2BL8vymBHDEXC31pn%2B4pDhc66CORdKMzJg1wqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClPIVtubVfZ7dga%2ByrcAzE75vk5id6QDLlK7VoAEEy1kpUZhJY9xJ2PeCrfBLziJgTGTQPrE9zpVjvlxLntm7sOoP8mJcZjnid5x0xvJzgLuCEkPrU%2BCZisjUhyjx%2Fe%2F0xpS5S8z65xIYaPF1hfjK6%2FoTWltuilx6fw8tAVCC6SSRioKrIIjp3AUSLOADoodLKbmfm99esYIBCpEJEHYtQoIDCk%2FeZCfOyOLvEDVkdhKM1gIvvJvQY20V7QCJIPRncFDc2CJUuaTUnAultgd%2Bwh19sobV2uJrys1h1ayoOiZU3rkvoteHCrfsgrx8Q0FYLt44YRA16yiCxmPq%2Fr3qMsdegUaNIB6SAEFDBha95gR1%2B%2FiGzdPKd%2BdiAdtYO4rV21k9Xfhh3lvV7MQE8ElL%2FBQSENNZcl0dTQ5FdM0Rvqt%2BmvntMAss%2Bpho9jukvonV%2FM3FI9Dx%2FXg4MhkSuPAU4R1Ken96N6kyagVW8oykrfpjqPLDSyOVJVkWH9TSLFpUBEVa59FsojveqUgWN5HHNOzhq7oa9Uhp9KPGZeJ6gVYG2oXTwSLpLnWY4%2FquVvW8MZzdYCQa0pnOlF2MrrLHVIrx10uaQUgw7xyTMTL95%2BbOOjdLkLDQa4tdC0NMja93MFPPVCvfvVg%2BwjMJmMg8YGOqUBvxVVG6FRgxayUqSsmHd9fd%2B02QmJZ4WkYnxWkE34VReXZuw0oxVU28MPBw9ENOJ8xGVPb%2FMxS8pzSjMdpHKu7WvORWnT8GS%2BmHMLV6uUpWiB07wgaj2xiJJuiNb8giHDjR4eFOrEs6IwbuuG1tn8afVtZeVceF0eNUq3lT0%2BdEfa4GWWI3QPB9pYljSAjyMuqwR1qGrVnIJKk8ASTvIi5kNosBOk&X-Amz-Signature=3968b21b583f87b78f5eb7d350ffab3a53a83f57fddf55be7d7a3dd8212633d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=d34c5cef482d88407ddbd78688793e326bcf08f47d610defd8812cf5510218b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=e37bc138683d00cd2458dd4076d346004b565bc1dcd81e99351ac3dc7cabacbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=042752ba7b6e37ec67ad66968cdaed587d68c0b686d088b6dc0248f155d561d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=3e570962dbe170e05efd4dd67ef2296a5feeae9f2cb73643f08e15ceccc0bcf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=fd226d106f4687f1047fcf027c89ac46c8cdcf83ead197e0c648ace75d8e0db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=8d25ca4e1171383ac149bc625782a12006fb14a122396e2c5744761802adad02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=1a793120e0a7cc25b83d6cf0818b6984a2c866744a62d4a55f83cb43485aab0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=ff969847b745f113a00a30214ecfc2fb4d71172088d90c1b2e8b3bbd30285305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDW3BH4Z%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBELQv1YRw%2FLPjLAXQD18NTgtx9hD8ovXTd6WXbCPoq4AiByzJmVEVpVwHsf8mOYWXnHrCk5GrDfTOZRyKXLAKRN0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwnbqzwnNXsgogJ70KtwD9ekNeFHUUAZapMmIl0W94Jif2WTjiq%2Bu7gDPsOKC8CA%2Bq3GodG6%2B83oSXjS24Pq0gUUk4KSNZ84FsSEDHJw4sYdQp8njRqrLhkpofmR4UBg%2BSYmj0hRwtRQZeQ0AMohXrjeTO37aTlz347u6xYTfDGosWGVUrbcd3z8LTzeiZISRGRlr3jpADzn0NcQnoqqQDhKG9gMgKo4Pec6zrA0Jb5IoUWY97PBHqJPOV1SP8p2psTNQt3EbQpX%2BONblCmp2hy5d%2FxXd1M0Vkk3KVD91Wj1xFRf%2BcDi4B%2BAs%2Byhqam%2FVMn%2BHS0dzSjyN5p0j4Bns3nqX6Xq5lk%2BROKRWxLFnLKhpEA5Qgy%2B0i11PW5EAUfqksLbYG0GGLXZ2eCN7hCFdl3MC01ehxa2ldFvb1%2FeGmzqeRCuyWosdltJodDl%2BRgPt19k%2F%2BV1PFvjtO29%2FV9sLlI7CsURf2LzO9ej%2FALeeAIv26Jn3aYVYCTq3G29khKyj2eh5zSSeMZC4WDYAs13tvi35pkvBotXXtzPz7Ifx%2BKrbe%2FKHaBy2AV9JWk%2FUdzl3yUYNaZW6spgZzgT7nb8OpXHMrhsbsI1x29i2VOGFWflBic%2B77guA869Yk%2BYeNTC9g3mL3qSVQmXtpsswyYuDxgY6pgHrPfELpUlSl4DfRr3fxAj84C67XT72tfEKCUKk5gMRXnFEhlkugoJb18ODUmj1mVSgKaWrNUVkQ1NLcSud%2F8ssVxdUkfRnpAIAV653To1yDO0%2F66vHa94RE8DL4pn4av7xG%2BMHacZHDcjj351GJLoP6d33zeRqXVUATzs2nTI7NhhdclRY5ZEYXoQktU7Ik4UBitUoOhQ76%2BSX92KeL2NdpXB4ZJUH&X-Amz-Signature=367d1026c05fc6b17af0444c8e83d2c37a10549868949ffd205844b566c970d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
