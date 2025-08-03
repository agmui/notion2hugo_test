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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=0275ceefdc67f2959dab1e5b63e1fa9cc8498c2ed9b0f340833d3c0dd379781a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=e847f3e96c4c8d8c99dee547667121c7816167b5f3cd1dee335782eddbd2ec76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=a44ef23a351a02dd626ded5f94980c68db3380aa367176b113efef6231e63118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=b8019df3a4f19d61bc88c05a0c346ad62efdadfe4fac0596df8a94b070a9e27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=4f3d19ada12d6831f8fbb828fc3fa6dfe35552d051e75cafc979e335de2c0c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=23eb6df10164ee6f7faa5c351bf1404f00916d2efa1c0bd8becc991a8ef5b8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=8d2044a0dba2efe5c700a98170a1baab731862a16d5aa33748073af64c0ddb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=1abf42937bc2d4840724d566576af55d5167c9471115b7d6111aecae35301a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=08c5b5969e721891ccb7c63076e9a2ca06b9ba5308cca0f0cb8a1653c7450ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=99614c1249d75f9ff5520b62f2b11461bb0ca2ec15eda5706ba87ef51cb058da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYH2EOEN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgiH8qkzo2GrfT74wEm49lYPX3085EOmbSaMobYxLc0AiBnntxCVdh7DxczooVdMRW%2Bc%2Fcv1k9gNzMRUOrypoWP1yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM%2BZ%2FWhZcugNb6FBWZKtwDosU7%2FDF5ppZYB6FX5w4LAMaI0BGmnLulbzE%2B%2BJA1EryaSjLA%2BnfhQdTGiRG%2FuVAKfXKWSPJ4AaHxj5INKNzfdEOuLt2Py%2BGYl1klZmYT82%2BUyi32XIVv8ZfW%2FalI44J%2FDiI%2Bzi0I8araB9FatkeIKVzPD3fDrI2kmrrrM4XvlayJ5v31o8JWg0wnovHRzVB3aDL0STBgUO0iI0LtWHC9IFjrLqC%2F%2FtbhYa0KMMYKQh1TnrWRI3e6%2Fx8LdrnOAkqtPxzVIcRrIDjP6A9l8aFwELjwQMfsvVTtvBMRjP84QHssLTecgEMRa9RkOTNGrwjmjBCYL0eObNQf8W7tg0l8G2d4YEJf3oMFG7bxj6XGRxt7r%2B8kMQjudRaniRGiMxNHticD35IaMTMUerzI23E%2BqQEdBVRUcUac7SoligfyTgFuvO2t1V3aq%2BOXYB7MGQSt5tL4SlHHhiEQbyiKGSTXcsgnLdPfKtxIdBEaSEPowDTGtdEp%2FvXCCf%2Bp4sw3OEopwreqr4rSPy31nujq7NZZtpYLf6Z7dj7HkNpIeTOXWZIaoMtQBs9p7280sZ8s1aCHHh%2BtYv9mrbzLmcZYOqh4%2FgojYAfXDZCXC6mxYoXO897iWF9VO%2Bh59UJrmV0wmNK9xAY6pgGnB21Iv3SeTG8%2BpuKppDxvRUw1QALuIxF4X6q4dWcDw4ehDsHenqCVZYjtOna4RaiakgvphYv00MULOBfLgIxGqRcQII4rj0IlrvgzmoxmOsY2VcqfdzrOBzPoTj8aziIn86YA%2B2h2eu3tVpYRm3jO%2BMh1g%2FFDDOVVBRQcd3DJikbPySbWZvs7fGnmFd3mf62Vkp7YWCG5yXoQ94Kfk1HOl2OYUvIB&X-Amz-Signature=c53216db28fd038a8b495644b33410162a8017cccfc1c374452e57076e4b0785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STVNB3TD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH63rX3dgBdbjiHVwgSsIzmoW6PoB%2FMO2Wfo4CrlTGxAIgUUDK5h6RyQyhkeIeH9chdiYHwHQ9LCGC8llv2Nf5ls4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDO%2BzBeN1tAYMdDXPqCrcA%2BVzSg%2BaHKHitpGAm8NXmyiw75Ib8nF8INrbt4I6PoJ7D4nhzcY59VshblCCsvXqZFV0XCzA3AeE4iNEnlyisOdaq0brjhyn%2Fb3JrCLIjkPpwNd5uImJgOVJd8xpBo0162i2eZghoP0hfUSlU2MEZePvO46Y6tQbz56cu8D4p%2BR7xsxyD4OSvWAxG5B%2BbJ1TD0Hl2fp%2BJD%2BXD1oPJpRHx3b1lo9h4Tc3SQJ2Vf74I%2BcDzafMxX0IwkXSu%2Fj1gXi4Nv%2B9zpJcOlIp6CzMmH9RL%2FxT21alP27bD2SHPSubaDs%2FcjhIfQ77BBm1I4uDUK8bpcDbZt1bnGtGBMxizLx3D5D7KvqGxuj0QzWltG9zoPRxgq5%2BlDv6ZyAxkmrO61g8tI7a%2FLbO1T%2FIsQvmdiNl3vO4wNy91OCu7W7X1EClS2kmylfJvMCM%2Fj6ApxgV7JWnyi5Y9hpTqHlbNAwGHU97qLW29OS2IulX4NRD56Syqr4tyTqZNK4Kdp9tqMg%2FFk6RSgVFm3L2YKMHm7wNVxzWqLrQX3zhFiJIYTDwUU%2Fj0QzRQM7VaBbK%2FqFxu3pR%2B%2FPEO2j6X%2BAhbq3axRLWHkMCqvr%2FZqPjT01tn694NCl%2FmdExJShqjadWCgaeGKEKMPPRvcQGOqUB4q5KL2Kjr4d678y0QG40%2FJL05K3JUD%2BVY45oqgbRXTQEfpUSOhTUIwEP8ZrgFxOsDDy%2FAwwrlAgcS3ehjjiv%2BnyKQAZN6WxJuLprWZqUOTkN9H5l5OzUhfRDFZaGDlXwVUKy1ax%2BQvXYk34Gj3SGT5wGiqHYJ4ywPbl2IhbWPx%2FOvIQt4CaJURkaVF7%2B2EYNlPSAW2Xb14uH9Bc6sDa3iznc1qkj&X-Amz-Signature=8571752a095158f4ed79c190c0f1fc32bce4e14afa365d7432f2e8b649bdd560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=5d220dd8f6ba0ee727720c1d20b446ef69cef98518a0459317d8b8e114948636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=6b34221d0f49c36eafd5f46176116acbef739407af852ce5e1fa03cab9d25683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=d23980e93e7b89ed4546d115bf07c5ed641d717032f76fd5ba75987047e5d10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=44ab91076fc8c7125c5aba1fa249aab41a9592d16c802aaab61ad823345dced5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=92786eaf5d6901772cd0939b038dfdeecbb8a7b920f13bc2e6c38cd07143dfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=2ac1fbbe38bb16d15bf12680372199f2dedee2c37fb6be9c2c0ac76ef5c5b4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=374086088787bce84649cf5ab73b179e10a3c2f1cf362e72fdfa38dae6ff3617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQXB4QNZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3L855z%2BVQI5JK5niEH2WcWDSWp%2BjITlg6TaKj7xNh7AIhAObSx%2B%2BOeDf%2BcyNY9nSCQ5rusFnsmjh0tARVeCZN9EBwKv8DCC8QABoMNjM3NDIzMTgzODA1IgxfjvTGlXlawLCdmR8q3AMp0Eeb4zgKCTmQPZ66fDHt7ZJPhKP6OmCJqPK6YXMsM9of32WVZ%2BTBudbF9X%2Fify8YoqTkWSQoip%2BShAWETgNMwXBR5gdyg3lJOu43QsUHmX8iY7ZBrNPQ%2Fmyuq6LDr54C1to1VOXPZpE39pkNBeJc%2FFEe9pzdGPpynpkwbLgrr6eKmch89WtxKfkkmRv9FIwinen5G03mVSDQ3SBriWr%2Fr1WaXj0d%2BBogzttwXHBMkqEOwaEH7V0lo4poPtkBHhnZiKHocWCZCycJxf0s0bBBueagIpGN1VRstnZ7%2Be4cDivOdcQA6nl%2FuFVNRCA9SQVfJEIaVM5%2FvtA60NXhOB0a8TWxq1CiiaCIVwijtQuTtXLclf5UXB4WOUJUSheM5MRj2SYyn0RZNNBkIyNz5rX%2FIJ2G1EMpW1Ekyhaa937N8T%2Fo0%2BvWBzq4eCbjvHkChZEZMGXw2FSgIEXMEWMp9nLE%2FL%2Fh34zetW%2BtLUdxaeh7%2BG7Q78%2F9FruK10w%2FkMvMPkEilqR%2Bn9UkBYa9Bt25mxIT847aZdwlESAz49lJO40CMsR%2FXVNHAnYewjJ6CyApvAp1LsIMki0OBxonPhY97r6JsWtfirQZDQ3gX%2FebSSOgYRKxy2uJbnriyh6QnTDr0b3EBjqkAbxORiCvoWRyv%2BpK6TiVjTX%2FUl0HmWUbIkfKbLUr0GMNbh3z%2BHwokJYswlGRA9UmEmqNnZTkhuBlR4ozD2PPULtoBlik19YNXQiopNTnlH%2FdkQFuRmZb7aycyRpRID0MIIjgJNar4TBHUWRNKH6OYC3nWEdzMx61k24YuyFkLRf%2B0zZ6LNajt3wYMCaKa3g3vUXEgj4KXe3CqGtxbg49EtanePct&X-Amz-Signature=9663f29d9e6a11610715bb0e53446c761887bf8ae0396ce0ac07319718f1096c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
