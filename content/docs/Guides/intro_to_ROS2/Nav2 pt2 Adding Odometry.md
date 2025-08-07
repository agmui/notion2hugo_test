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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=57f67a3881c19b27d6fa8e058936993ec0677da01b3c59c37d4b05baca244642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=91bcd4cafc5da2eeff22ea928a84a9eee9b90723a9d0d64ce2dd45935e28860b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=eebcff5e9991b3a5eeaa6cba0ad93a6100796d6f6473d44bacd77c20d2db89b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=be08273a300fca34f829a8c48f5780c65e5d50e12adf9175264342062779f153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=55d3bf64fe0a8da8ee1cdf79ce47caf297e8b90999fbe66ead0eaac57f3a738d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=44a23998f8e5ffc53ca5f04dd89bb276b37bb4ec271f84e7c67a20d0be548044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=b88c12afced63ce82c01a2c3c3ca27915632316eff8883ae1b55af9aeee8b12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=3a0371a67661799685ad1ead40063a7060f4f7195ea26e1f4dbeb8ee64b9629d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=70cab5d28bbd035113c49fc8cc73c4ac5b98ac70ad67d400fd9628b076a184af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNFW2GQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCXOYpblZ0tfgqiBVCYP%2FrSoBIu%2FYKXDowioArE8MX%2B2AIhAJzfsmjCNf6csWpXpt%2FJyF9v3fE%2BR34DZQwR2q3NX%2Bi4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwArVLZvi0PFv2SPXYq3APjjpMm%2BWV0R%2FYYev8s2jkRHWCh5TLRREwqpTW7rBF%2Fil4taeXCLUxMzLQifouwUgBM%2BMLrhbk7fRr9VWf084Gr559aDT8pISdIMXX2V5BS3z9js4vEK4oM08y7Eif6D2I1RYUAe1TeBZ%2FGHXnwDM9G7t%2FxEl5hCQjAFvYGD0VaxHSTW%2Fzgw5HUeZqGwSaiFDlJSPbrcZQs6of6epCpzN%2FPG86Q8UFpMl3bBHlIdabNW%2BcafTywrddRK3bePlgWgrLIzXgZoRgH4v3vLJK6OuviFTu90Fdfa7X8yAgInzUvsZZSM84fcExCJxzXnXXFEAf1XO4g%2Fjg94s0Mmz2DLpKoEfRaXvE84fRUg59Nr04E%2B4cxDO4gmSqZMYR%2FEVQpwRHCRhZ8gJd1WknmkFNSYLm7sysqIQ73xUFiNmdeyIG8tWGQalIsD1xLkhlxSStxSlCwOpLd9mXpQRdrWhYB8AjyV7iKkoloKuTtMADkOO6oRPHI87IxXhoZPQa8J7OjatvDgcBZXQNJdKedVKjPd7nrysIJ%2FBXmW5z9t%2FkAnBXiODtOzHI6Hwzev9stx%2BcJ9FqX0nmm8XxqOwkeKmOelcajB%2FEso5T38N55G1MxoyRrkT4lHBfgQIFNqZ241jCO%2BtLEBjqkAQDSpNq05P4YHWoMNUscv3X%2FcF4PUaVjX%2FCK%2BtDG3MANUj8mdbXn4Bk7lxi%2FK%2F25MiuCE6zLeg4IWcxJHx3uTg8oJZp7ezV7dekg%2FOg8fvficDCCjS4COzY%2BhI7uOwyQUELcqdx4MFeTDwmjOrS6npeavWYKg6ZqMMxf8gw6wI6vMmdEVwxIsz6HXSEkRQ5oiQqLER9ufgn4N%2FLD0NjQPO5mUrNW&X-Amz-Signature=8edd2618548fb02bb56da952c180aff7e868906a2f279cc3af0ffa280f52073e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBXSLZF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC5WSPwYbTCNPtJC03g4BqKY9Omlv97tJbe9ukTs%2FGPiQIgUUUP6MYkaHNuJCaPVVNvlbVJGrjobFg%2FMU0JElZMrm4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK20MrLpbbypPGzzbircA4d9ATwj0nlU7GCFYJlMGxbi3GiOrOgKl6DlKl%2B4Hi4knIgc3CbXf62F6I7GthetGW7Srsv5RQP%2BC6wLDadFg5FUXFt8F6p5JZUq%2FBqYxMzUiCtsbluzt6izEpAJv7dejtra8CDuGuzsuBX1H4YLh1qTaQiPQmyA7lIlBRnPV7ctdXUwTaZKh6NjWZrTRQ4lkTSl3i7lM5F7wu1L2XPi%2FSDy6JyF6Fq1scj7CmPqJm9dG756OKLe0C%2F5THhJsIO7TCWnU5y%2BwXQvdoiUgD6XtvlX4Z7BsUPkUZNFwZq8fMo2e0eZGJuCflAwVGCTGJKa2pRjXq9zxMrWewhUjSlPYLKyHyLvjK272PK6wRbwaKLrPAl5ELTSrP9Mtsp89dDgvy3JMrET8Hr7jdre0cN%2FE14FnLlHFKRCB2kCrHncQZuTiHXMkAOGs9yfV3ygCglhvZdA2mGYZUlT%2FlAp9B4oSJcG2FJhYz2kI2zrV4X%2FT%2BCCXFKkc0YOuaz8z03cR55uZHTDRyeN5hqsZ3zwZcXyTv0EYcZPRMWppw2scIOid6mS1Su2NDgH28Rxe345eIWv3jSZv2nJXYyKm9H9tjqjgSUr0nn7EAnxngI5L87ci6rGizxXspsWKBtHZ49hMI%2F60sQGOqUBih5rZqz4eyt7SyNaIt5OiNGKCRiEdO%2BomACb5309oiIXmRudjMiDLlIBtMniXUJ1J%2BiqJsZRs8ZRhT3cKvzTCiO6VDGhix3dS62oDrrjfph0KVfh3v3K7bxTn8BJSKc0BZnKQ6l1MWpoiZte%2FT4BdvWBa3unzTofuEIlO%2BS%2F3s1SPCvoJaUwmfFV9DbmtxiWczzm1ue2ayjllST8dNIp0VO%2FF81a&X-Amz-Signature=a2cf3eafa9ae3bf9d4527cd06586ae0306edb950d73b5b9088d4a95d9f0418cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=86b1ecf162bafe79a2b7b5a250fed932c9e5b97a63bea44846f373f14c7df1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=5cae49bf3d7ee152216b32ca377fd2c57c8a539544f817cda443a4f1118f65e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=d51c99c6862beeeee9dc6525d841e024ae7e77b9b44f19c3205fc4883142c376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=983aa9e4a78d9bc4105e2827ba85710a5258cc1d739e082e56a5994e7f3da031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=f338cb1c93f29aeb383d1a89343040d8f15e80887ec873d80042948a40d7d010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=5699a28b6d382d98b6733c30c7b841797c8f767c12b2ea2ef6f9e29e3d982c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=c47c6a8be91f3ef736f0005df9e06b58901a63d0b548c180901839a9fb99f6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=ae69c5d779350c607ce336ac1717ae00425b10e664fe695eb3acbf8aa7419acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKERJAHI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCaGYKSc%2Bw548FUbCwpfBpYIXEWsqy%2BUvc11bjhxy1BlAIhAOju3REAngYnGSS9rksSolZWGgv1blZraq0x%2B2wq%2BX4fKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYZphius8vSJBzGR4q3APR8W6AbrX8rBKVekHvin8kRxwK9z6aDmEd3C3tVuGpseSqi6VLxV4T15jo2l4IZ%2FtpKUW1qLZ5mXvUSYsc1h4%2B%2Fpkzu6moPGrupWxRSauXu4nyXzSI1GUwLjLu%2FGE9xVyE8xDvt1oZZUZ0TBJ9nEt4nM%2BCmbHjiDSdheqbdJ1QwZ0yZod8l9IBDwPJk4AKi9f7XyuhDdCwTQkr3XXxyXx2Y6CsI0aceHAkkzufqGOyjW6qaUYk0hyxUz1%2BvS%2BBeXTIc29Uw0wfMWDPVoWecN%2BiIy4U4VbGKncCbJuQugH7c4AVS%2FSjyJKkrIIZwOK3qbhzqrutf0kntI0uLpNKjEFkEdYWoc%2BZLfeSA81wbYqBZyUwLrrN1fWsEAedrtbYJdmzyUzg757Xfapf%2Bn3JkGC%2FvvCaxdZve3wo7h99GIn34OaBTvBOqJUkwGshew9%2B%2FHsqaWZNn9rnRE7edVx9naLI2bC43snHJefmn60MRSVkld%2F1ElAhWrtoV10yTHwt6IeHIukMSulEYVW9Qms7Zu78BFk2Rj%2FZ6lCTj1abwy3vLpDda2hjmnCp4xpKjR7AGrY%2BC1ovqE1SpYXCTs0z3KwoKmCag4lgZOhn2Er%2Bz38Pz71COgIW2VIx51DRGzCX%2BdLEBjqkAcPNLyswwf9DybYf68ceZfmp9LWIwx0jp9VidZaX4R3legeWyq11CksIt2ZP6%2FR8KEfdaTnvLv1exazfEXpDzZ2x7S1AxSOk9XsGNA3%2BHrNYHgDVr7h7UdEOGUzQGNel6m4AfaSvJXCmE5eNqkNz2%2BCdSNnnO8PFMoUJxFmW0d4Vs%2B7Iu37wthoWP14mI18nmaXss6eeeNnUA5oyX7273L1FQUMh&X-Amz-Signature=e9777443834b5841bae7c9b592d9b3bc12ae51ec06e4ae7e38d46eee45f83cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
