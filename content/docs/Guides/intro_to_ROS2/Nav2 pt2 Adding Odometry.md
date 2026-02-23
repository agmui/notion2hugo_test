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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=12d4919eabca64f3725ecda3f55a76ad510a7cb4ebd37ebc63ebe182fd8e3a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=c1451b6f3fa3638129867ff30ef0f1f6356c63f12ee414694e3503d24ab97ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=2232baeb9046fe7c0fa1e754639963ae2b2dd9aec44d24f289bd290893916b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=0d018131cf7ff2f0b0486454767f5e134a2915a8a3672533546a6d3bcf74b37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=d3b456caef0844504e87af785c912aca99fc15e014234c5691016fad12651cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=b9ee9aa5252264b97e43c3c5db1249ecb56ca7e97c216ee94c65e57164122498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=cfc629722695f6997042c8b1b56da903968f555058332dd2c49da3f7023174db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=4c765eb724c83b76d3d13c7a6942a0e94c1a5bf9f4b8fe6972dce0fe97f2d3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=6b85f38010b9a983164f02d7171b9cd5b540d80edd2e9eef61c14a639dfd3033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SOCOTJ5%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIBvJvSivlQ3w9JnONNHfx2bjca58hBTPiBxtGK0shasZAiBzjyEcba6AjNAgm6nQovD1DMrNp83mTkO%2BuNAm0AvpPSqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSPBMvurUQ3nNZ2uGKtwDu8QAvNwbRUOYYHasKs%2BjWLPk%2BZp7oXgUFNS2k4ficreiCPDe7566g9YCk7aLVkgIe1vubgvYFljJqkJNs4dllZG6NhlLGbsj6Cj%2BKb6oqjAIU9vYVQJ4rlPo21MG3OSncM2ROOodPkEWTLr2v%2FOEyqSSYq4ojR3TJP6jbZwoQOpNkhOLVFaf5myeJYEEzRPqZ%2FXtW1MOLYBHr9pgPCQz%2BP9CoqWVnAt6q8q44i3eKclt6bA0foYB7LSvUfaakw8mc4n6NyfV%2Bi8g%2B1pv%2FA63FQQ4wloYDFkQ1LZTisIRvjAbuHlFpKSzVtU%2ByrdTBBGDOccuj7mGNDv2hBlYORm%2BSy4WMuh5KyJFCyMkRccsnE2OyzpCvWVEQi%2BiXZcD26OPde72S7oJivfYxrl7tXskym3eJYvf3tGpNyrNj3E6mTbWbR62Pysl6Oz1ksLrJ1BZLdqAGP6nVY0nBCu9ckoPPkIsljGHCO54eO99orZI6PKXabn1QH%2FlhRqIVVcQsjdzj7MW6oYUueLVr%2BLAkyXLnoBK9SVy6JUQYr08s3JTgmg1Q%2BHEe4KJ6RaAo7PK3tmS5k26P%2FWaGa4OrVL2xI6ykc3eT0%2BKWQ4iw3jm4u%2FL9ygZjFFsBibQW52po%2BUw3ezuzAY6pgFqFzi0MIQJ1wRR1dWmB7fy3%2B%2BgYnV4LIuom2LSrv4MrKt7ryuz9bXaXXf4rT2JhnLgQQgeoH8A1GvEfvPsBsGxgU8VfnceeqE%2FVaDGOh1spz1GjFY2vvoZq%2B%2BGEX2RTX25CAcla2EfMGpj%2BEs367%2FLo6bgU8jrfGcLWE5avV7PizcD6Tih%2BG74BvkfHqLuH4jkF%2FbHOhqAFw48umnf2B4iRpzjFwTS&X-Amz-Signature=337f66229f414a08d325ff6065c1381eeac4d2aadae563273a01ed3c072368bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUIOXPC%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAczpmswHE%2Fr%2BW4hgzJIvxBqboYJceygPv71Trz%2Bn6krAiEAvcBIGZbxKVdnGg26nFMvcAe3ibKOlgc0c4f0VwnpUF8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcsAl2VPSlI7dIOvircA%2BKVnmg3Af5xCUbIxkV3UC%2Fa%2BPg8ejFCwSiRuGI6ob1Jdpe%2FwA2PaanNSPbTMamjdtgoRZpTrhqtyjXMVtj1pvan%2BWm0Qo7istdbI7oRIugMdHgKojxxiHUHEz33VW3HXKh3Y39JUN2UFKi%2BYOXjYkKNjWJjc606eBwPfLOGaKcocN4Xx1mfNRX94hdNF2rT86CN46jn9%2B09AJPX%2FygN%2Birt5jEesxC9BCR1kSqgEaKuf72l0MfmAPP7cLmhlW9EKD6n%2FhUHTv2FfuNWV93JTlmTiu%2FOJer%2Brs2GZeL5M4zvwR6brEI1vuXZSeWv4Cm8yCsgKDYW%2F0b30OhYv2Ql%2F8Vn9QXud%2FWl17l%2FElKKmsTsXG4bBbMGUF7nUifXqeUwMKONxkRTwKZwyy6Jv%2B3ETaqtA%2FNqbRJkalughs580zt17hPDBo6rdWIIn%2FaE%2FXuLygGtmxUPWtBihSdpm6OxfoQZ2WyVuCiOWTljKsRuaUK1kGr8uqJF4mBBxXN1VpEsZXaAGhqSPfpaizLQS04I5tD8IIbCcCkSJYMaom%2Bl49STqE9pXWfka1OEb79FlUr6wA3PhbneQzeZKKc6x2YiB55IiWVwv4xmOTD%2Bw7ORVuoZvVfahUQ76jnaGNUGMLTs7swGOqUBy%2FIo8SMIDU3ttbCGv8m1N%2BZ40Jb0X5YOdGyEyFQk0uYxtHJ4Y7KyaT03AgEGNymjxmkEoHzv63u7gYtW0q3ES3MGp7Dzz87gLtyrtFfB%2BtuKBrg4aEy1wjVe1YiYDUqpY56GLnq483KGQsRwsuBvUXdsYG9b0aTvyia2y2czQ%2BkR8CU2vSi%2B4eQqsPLo1ucrPLr7hnEg38qxerxsQa1fPYKs5axA&X-Amz-Signature=225202004b98ebaecca86b5400bb7e378e3ec25c9d00c2bb6e2794f5dc5bd506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=ed1daff64525022449300c0429af9cd3751ce14eee631d426207176cc1058d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=96cb341c8399a1b5b04c61baa73fbbacaf89e33af59a709788da3a0be18de078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=14d60b6e9301a4089ae686a1e44e96b6cd6216561f97eccbb3fdd88bd7a46ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=bf333be7b1f85e8ab29ef55f97d8ce30cd44ef4e1854e531b4817813ef1b4ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=4a0b9874c7de268a60910a6a95163b848cda8fa4b8149de94a113e8a8184108e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=921b82571f83710f57c528cc359dfbdfe1b8a8c56469cab996cb971cb83180cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=2dee757f5be45c77d237a2033c8bb51aa19b499214b659a9ab87da2d4ec35871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=2011b58a2ade426bc5cd4a4207eaa70ac423c66a1d342aa416a2ce322e859ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUG4MQ%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDr2ybIlHS%2FJsOeq12y0EhA6mD4xh633ZOHjWkmaevY%2FwIhALBC3%2FcJqhZj%2BHGJHFVxYJDWYN7AayGIs9jv%2BJ8Q%2Fpw3KogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsa9mDyASX7%2BNdQGEq3AM22OFaj%2BDpeaNmB0Z0rLhMKmMoJUy0uCiDMsRoz0u5I3l4x12TXA2%2FImd8iU%2FSmVk%2BmDDcaLynjmVqoRmirAtcehu%2FnCRmAsDkIHZVIopzB%2F2pKQIFFlvdJVucKaJeZReyJBrf9BYmqg%2FxjwApm6LOnolmXO8SXFOuhaHKTB00DXlJEHqqJOT5X9XaziyeEogJF2nmL2IzSlBZQ0pqXpdMWIS%2FPAJF3utUcTiVa0PObdXSuhr6ojS91I9efSfw77uXae69EevyXGEICVuHEmJB%2BuZQo4B4TZflaozD3oDRb9jMzamb%2F10%2FlkBdOaSBw1n4DpeNaJyssl%2BMW0Iqm4iO845pVxt1D%2BhBHOPF%2FTtgFBNghIz3Cd2sOMXrbvHjkZRrOhFz79vyM6tlYsrGYY5Xqg9Q7Bn%2BzFwZ0fndwSP9uyleTXoMNjPIIaaf33ehD%2FdYciLda0Op9MQnS%2FjF6rEhU77iHvroQHzUfDp8CLokHyJT1JrIl1RrgR0EdXi6jlujqrtRRQ1csCdVnlXYK0HQy2bFdK8b66GobBTsKRGfbr4%2BLfLM41tvjkuJQdKCUUDd87t2xy0LMwUCN6%2FtgbkwDWaoxcQcpKpvSS2Ty8%2BCxuhBmVRSSSnnMh%2FXmTCt7O7MBjqkAckaF6EQwpcKM4VZQIJPu%2BvbzWTat721IHu5EuiEZ5PzSptCMdgnXsAyC5DzmTWztgBxeFuQDVPqaxiCn6Crxib%2FEe3qB7TtsLNT%2BkUG%2BCf7IHjT4Rho41iMyCLnqxu3uUfeF4Fb0INGj%2FV%2FsG%2FBO7cLmSeiLxdlovNKC2iRrkH1c7QoeGEiSgMiaKQ%2FRFTgxIdhxRrNI3ABGy9og1xE%2B88R6lU1&X-Amz-Signature=f32d64dadafcf01d5f2b856062cff05afd7ea3ba9b3fd9b77e6cef404d4862bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
