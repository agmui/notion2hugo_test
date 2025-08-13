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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=cc857081e29c97058dedfaeefc68a03b8ee874125eb781576a059ff3bb7bd31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=f567b715826fab203198cf1694b51ed136991b215fad70d70120623a0f7bb39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=789246440983feabe892d438fb122f004b6f64d1b16cbe0b78b53dd494690685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=c83ef7601f35d34bf0ae6c2eefa5961a515e3a06535028fe4025cbd820af93df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=9254310296b3e34a6fd68cdfebb0f89b136d7791e90af90eedacacf71d46094c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=c634b07a45088e7633a1ccddd0601a0abb5c3e2b2e3e7fb3fbbf0dd1adb6abab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=e42fd1ec542320782ac2949b60a77b1c3591b4f0d55569856461663b6cbd7511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=fe3698740e55a6e0da3376d61a8a7e401dd376c102453b9959ae674d6eb39b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=3705bb3897e7a99a31c8747e62a4dc6d455dfa3617aa3eab4631a799dc3a6b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIFEJYK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXfOoI%2BZrUKtQQxyJFT9BCz6z2yYuPpqYqEOXP0rH8bAIgZOUlJ2D%2FkUk7PW6ccoXQETk8z0Ib98c252%2BIbW2N%2Fu8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLDPutaESbA3D4gj%2FSrcA%2FqqBRvFd9fJeDVdkOyJB4evcqUwDEKwtkNVR5qjDFNvX3aIZYS3oaXqsS2b9M%2B6eQwbRJAzAooAoChEaQvYfaoRA3A7nD2va99lkp3YtLqgz2rezKjWd4OaevnDD5%2F8sMqJsfPG3LybVOoSGlIJu5ac05AFeW5hDbG0xh48rg1AdkyGnU5wfKcXsxXFhDweBmSaXENqrGP7%2B1UzoFUdAD1rsRr%2FLsSOqvAa%2FdNLgRvI0sUZfh%2BmVrRSUoxYWNVBxYxw%2BoIIDSnbYZtHY88ft24kbpvlHgt4SasyAzfZ%2F3q%2BleToHz%2BzLaXm3k2Ydqx6u1tcTS2mLPQv0akWCSL0yNECGB72bNBdAHwr%2F0q7SNOpai94kgIRiuGM5%2Bj1D33%2FXz%2FzpNQ9o3KoC0rnAxJuhR3XUTaKXsfc45SBaUxpGfvQtal71YOiluIP9SU1E24ujqI%2FxdRve2nkUYvLtLayhvP3z2u9veZzcJXRUX1sXvOqoxBzuTnlaFrBFFkyoJ%2BDV4rO5MU1i5Ysr85fdv4WzuIqN72E1CWnMF6wvy6%2B%2B5IPJSoV%2B8mMDiEw39UAgLHvECRQTdHwYN9Az7skjaal%2FItGuLs%2F3xsNJqTa3Ypyy26bojB4qOAc6Zu%2FmjkCMJeP9MQGOqUBWjI5JYOIIlJRPqj4TNlwpJ17%2BLfwVqtDLnd4pMfRTwBolPXNNb7kA%2F2q7K7TGbSWvGD48%2BAlvp6OJCkn0CGu7NdTHMNWnASbVu1YIjW7%2FuainRjUYAy4wztxRUEfUEq0AJTWWckmrCo22p5V9MNR74GK%2B1xuVgNwp7Df4EvKwXSjAuhOCmh1BL3voD24%2FfIuth%2FPinznRqDxzjW5AXa67QVAXnyK&X-Amz-Signature=440285d92e979af357633c1974a2379179f4167d8b3e96099c1d64250c4b53ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSNHOAS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDxTZqOM%2BqLyVRjdSjLyeEl4MSweX4r17oQ7bi%2By7L5AiEAyK4ut4xDR7Np8FKOdo1urQscobcMCEtIqHNgxUHcrOgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFgIFRwDEQD%2F%2BRv0LCrcA4qydpms%2BVsFh85jbzaL1dsq1CLzMCchcWbpdGPUQYUr2HZycwoycHBjIq19dt%2ByQbjvrctzTbNOI3KOph00XNnmU7ks4qziNuRdEKleo3O1KmSb8G1Z5L0QevDkiZylh6aOLn8b7A0iqWAAOjlVNgOCoNE6bd1R1e%2BMSNasf1VJBfzxrUzVL2QsLY7MeXxB8N6LPXyBBSdyTAhBImozPEu6v5wMLE%2FFD7bAyAU3ZPMhz5k%2BXrbGp9cmHdBfYUSKsfIt%2FdZCXd69cZHZ7mu4J8cz4zYXY%2FUjTJ3TkMNgvAPqAhJHhUmThITIcxngzbF%2FdhO5sbxctcM%2FGG4rrLSAdnkcgYKXN75GNGQc2CUJy%2FaqOZ3%2F00E0YtU2Dx103PJW1EndwK%2FtV9giktwf%2Bx5GufWy5EvzanPE5mnyO6mN9PihYsdwh8VOijyXWHmry81X%2FHMu5jKqAuKBJhJZe2yRRsxX2X9Dh7nDrXX0iunVBqcr65deCgnUYyUjiJJNvk4X%2FmMMrfnDqWnYwRnLhNx36m4qCCzcZDfUiHSOSy3TcsF3gMu6PMVdR6tkFw3JKLhf7sKAo6bxxMk616JqPBG%2BzLlhaMPro3%2FOfSYM4fqW6p1ypLdCy9ZQzkYdq9GOMNSP9MQGOqUByOL%2F3HzU8jFSJJuGhg3GPCq7yQ86nOeK28ZaYjs0vfs2%2Fe7KrBnZWGNrKAe9PQfDd6bmDlOZnU%2BnkZvOr%2FGJsg8fpE%2Fb9hZzkbIzXLrV%2FJV5iFMX0lw8sVL5MZFiBtoJw2ZWP%2FMSHPN9SkvloACOjrQTznrXF%2FrPAIZGnTrn%2BrNUPVaTo%2BIeFEp57FvWHFvutPuyTSfN0B1%2FJGvuyJwzalNLlF1W&X-Amz-Signature=ab5ddbd9ef30e55791e7b927a392c0bfc89c55d975f87583a283f8b33cffa0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=821aafb78073dfbfdf29b5e0a0e5976a375127d0ca4da00a557d772d88c3be10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=92dbd540da3920221a8482932b36c5caf5fbd5a22444369b32332dc82235741e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=ff40ddc6be52233c83c5589e07af19e8c0bb80fec510623507b2d886dfdda747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=859fcb6ac4305252c13ded6a9281980ec236c92f5b01f0c214f1d007e13cc758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=55c9a61a935cf14acbf575d8c5358c164e7e1722464df49dbc94588d3d037b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=dc721e87cdf81f88fe016afb4e002bfbccb5f9cc6a63d5bce6e2278dab85c912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=48ec54e530f9dda5c9fb6f8c43b53947cfd64f31216ea678aa89e0b6af01fa20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=229a7d6198948707b1d6806b5134955e05860d428c47a6988a884497f38a0a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXXIWTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxh7Ll2PvIP7VRuuQeP8xlWUTCvPlkekq1yAfTZW%2Fw1AiEAmdXRcnZ%2BTVTNsEZaJgTkTlXORSuyLZPX6V3VPAmek1gq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFX5ffxAclkXM3f0fyrcA%2F41qizMtRWZNqfP2w%2BsdRS7l0d3C1biEnLzw4Pj4Q2tcb5WvDIA9qOpEMh%2FYRHz3U7jZDRSE5xC5lhLhBdR%2FdxAaLrFk4lBlwAkYWcGoHf4IGseNeila0Mac6Lp8kc5jbCR4CnFe3sNi5OrY6%2BHUUdC%2FlxjCKN6cJ9sl5NsR5iiOwBqm59oOdAeeEuOSS9vfP85CqhMR%2BjVsLt237k1ntIqCIT7L9kb3XriXTk%2FQ6UNj2J480U2EXzAsGdU4gUEyXJ5WeXoB%2Bal7ymruPTCPgO7AszHn8ZcDcmKnLgruSvJk07fUvpWGPONhsKpFow%2BhaLZj56vOdEQRzVEMkOM%2FljvRfpYHwXI7%2Bewfym9aKu8HMwRIbUyg4fE7l1ynJ7HBehJ1qsMOd7dHMFXmt3Uf5cIwnc3%2BrsOnthEgnMkB5jXFlUZgeAjqIGq4DMq8ZTsjMtTscU8Uy23HEEM7fSS6WDl08zyu%2FwyV00G9yWBXtW6W9b7UvccXW26C3Q8TgpDp33bQP0CE7BrZMazNoqrTOL9KbsnooBajDooiy8pCytM4Oiy1ABq7h%2BjMBxyceK1mR7vwfMdXvCk61Bx%2F0TmqlKmtBoY7qrVIp0O7sTrv5U0Fb4FzaPK1APOklINMK%2BP9MQGOqUByax7UAlEAWSTymJ50CJrr1vqPGxvgIQXtwOpMPZxoUUdPdBes45QcFaKk0RQ03HjwyQM5odBWzUOLbGlPx3ZQKkWT3W0IwqbxGj9CkMgPWHug1yrsZwH%2BzoRvXyuyXvI4aHN23G5Hbua2tZ0Qi4yjvblUJ3A1cT6cCAVCCpVgN04C3bxd7VyBPm0O1ZJjOS1XEMx4n%2BKjsFLDjnp02zgtsXaCvtQ&X-Amz-Signature=452f951a0b110060cb5caa6db0c5540da5305275cd5b38bcf462af7a770b6720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
