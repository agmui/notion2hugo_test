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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=72c743d617d7cc674be1fa64be4ce85affa40b9c276507d55d050dc7681f115c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=01a588c19ab8200bc672d356235c4b7937513fe9b911346c86645e8a7974dd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=295b0a91fd331271ac10740bc86e63c93535cd497aa4342f146a07b3cc7b3397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=406c1715410a3e9978376ca64d986d52932b32cf041a70f467a8d30d2f39f544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=a72167a30e18dee968db9e9bb268d3610524b021b8846c2d205b5aab432c1878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=e76ac42f74ba2d61be7446884cfa2ce0400981104a9ce97c40d7fcd0a48ff52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=9ca7a716b307509912b25c497dc0dc935f68d18e1b608c8c3d1eb1e0b45d2af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=bbddd655dc62a4b2f794ac3d376c6530a14bdc9f1d3a0fb60921a55ba37a8bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=ba3b6a6a9c3dbf83b21e0957f7fc445f6c45cf2daf4aa86f6c8f93a405c1b7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3NENCLR%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdl6g4jeDL3EmpSKnjhE7Uoh5uy1TXoXDvcgGgloB%2FwIgJe3b%2FVDid0AqDSQp3CkSv%2FjFw6BOX%2BWp8kFpH%2BpqVTMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKE7sA4j7jNnUY7zeircA9n6fxU%2F4rAmxTJ1%2FhbiCyKNDMRK7ms17UXasOoh7CaV6Kyuf5qrBLsbfEF5T1NRonGHuj4%2FwCGX0YwB0lI7o%2BeYn1FM%2BQsdkyLEv3Ud3h7FsYMJs7smRZz6BzgbPLBk3bqFAqtGO9AWE1oohp7pFJr%2BURzmjMLSk%2BRZPAf91zqpbwqTGsAI2g8LKYtRdH7KpEfQgLVESSygsBzJOM%2B5AYL3%2FwH%2B6uGiQqUDj8V2deb0mYurpvNmPVROPr2%2F5Aau8nHNaEyC%2F4JpPjCfERup2ri7eCvxM7AazU1Ws0AKHEDN%2BW%2FU25EnQqzMk7Lhv3PIM3sOzsEMKZO8dXHIHFqMYobrHke8Jm3fDqHchwy5fKN%2FFkxx0QuMhWQF1fc2ZTygZPm2L0YtIP1iNYp32fjHzrEa%2FoEBm0t74B4kqGjw8WCnA8sr3I4NC9UNURZ3qN1sm3r0rFq0WTzC%2FBVNa1KdY6QQ24brS1wekckz9VyX1nzjSgptDzJF1nyGay7gQoXLDlLij2C0FjT5foLB6T4fwaPhQwcCNaxeT1VFFZiexwIdPjA0UDnotkMIiWyeKl0GIozO5%2FCR65SQ6JmdpDZRhbtpbD%2BDMK3MRwiO5eoETxQWbnbhJhO9qLJpZXxNMOay4MsGOqUBBQK6OOyS7BLwmD70xSY3ADSebz0OAYOJY4%2B3EGe3aFdRwFa5MDexOz1qv3lqOrLqISq3jApzNVPVZRk6MHfLYX7yAbYnV8CdCU1eGIqcknpAyrGl3lT%2B1ikz%2B%2FINVH%2FsUOOq%2Fq9CEwc7nrbovx09JbU5C86mfoX6slHUxJjhTGrW0hlSxWNNR1z4TvXS66reihzrHqi6AMp6m6jOJxEUKaHzwCs7&X-Amz-Signature=9cb352e4e46a065dc30b1dbc83ce71756f188df24677334c580a394c1961e0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXVZ5ZED%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ31KLoj5yza1QNATbO6k0gsloK9a%2FU3%2BweyPqCMRCqAiEAkWoxNH1U%2B%2FZoI4LCFeEL%2FXJDo6hUq%2F1nH9g%2FrSyljCoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGljytZKPXCc0MCTdSrcA1KBHyre6MqtDM4u0%2B1iNkDUO8XRJwwrrAoNjc%2BhJEJ8RAPkKhAFP%2FAomDlVNtNJDHnPl3zPV2DITqo6kzJdz4oiQ3xb%2Bcc8EWKGFAoHG8F23Jka%2F14CDy0r5o0v9KxfO8UtAlibtm8zzHvEIFuNVXeJLiemiaufpnbj5CNGCphGuHcgh0whASQjHTjB8YQhfSst1QfRTGOWWHayEnXiyN%2FfFB69AVsiykdkGy3gZCZCQkpmGm51vUs8oC8H3qwm2y4Veq62F%2BB46RFE2%2FXBV6fT%2F1lUgENrYac1DPYcgXQ5GmB%2BXUdCRRog1A4I%2FJPNmnptzKBj7r0BKXfVTtSnMi5pPiKsWNJkTkq2PdoLHvwS%2By2H%2Bn8V1uZSxAs8GE3PR34rntIB0Fy6Cq7iJZYyTxn2ASCL%2Fx2d35dPAXI7%2F6%2Fl%2BMlfFMbFYzFWxW1K27EFHMagOnIcA9rkHDBALFsrTQjeqctAO0pVKtprhvwtmMiLfCntK06nKpYZdlF7QLhcHheM1UTKeIb%2FG2JlNWFSfQkXpi5EBuYUOmucqSQcBn5X87qgI%2FhHgKFHevdXfRTnfOfPwKZysvoZBdKnkvnmwOx42EUhygqn7wTVu05mkdBWPjaj2lhIKGKYncpQMLuy4MsGOqUB%2B1hlGDv3THuT0xo920r23fUsDp9zBgWmxk%2FP8Rjys%2FaEpduTCsvGNCFxf1rSyy8Dfxl5f53%2FB3KiL7gorK%2FhwqK%2BABQkTlGBglFpMpxaKdpx2Dd3jJzhqs82NRARPo3%2BEph3Ff9dh%2FSmXeaREoRdpOaKGRKT8%2FdP1iX0bPB6vTHmORU%2BNkBO3X332P3lJ9t82PRoqJhQdKtdWKUsLCmRL0umwDvT&X-Amz-Signature=0901cfa52abeab3b3740bc6c0254ac960d895efa479930ac2b35168b971a4c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=c1b74bdac524e43b0eac01afdfa25a44b36f4f1f261d4472d9c0ef7974590b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=94c98f75eb1562f439114a58b7b7f562c02659f5ee17a9b73cfdb07b09d92c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=76506de840035c31aca4e43335b3588d2c2d6579d482fa05bcf0ebfea5dc3271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=5f4c80e09d48a336afa422a2c964af1d810d053edc2905062a9469644b500b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=da183ce24591ba3ac48e02745f95157e3c2c0f0cc0197327ba001606a4c18fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=bb1b44e9f5fc47d81aad750436f7a6c3d9870a2e71b4a9a744b01bd576b13004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=49c00cac0cd26f967c9a4e114e296a5d4d71e4ab11519e3ae23a1ec8c0cac549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=d8414deba33306dfe139ff07bedbf7610410b4438ce3b07a4ef3bd24b07225fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6CFGXA%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXZ8r3WQnV0B%2FOKsbyyZC%2FvCjsomfdS67yw7fgiicYoAiEAqvhrx7fC0%2BzrJ%2BFna3yoxPt8tq0cxD9j5Z93OkE7LeUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOhuWFCpe%2FUotUVg6CrcA3slLuC2G77bNUlYhWNp%2FkqUKHnVZuS7YlF6oPgRv9c0CmLZxG2fe7CIv4Ft%2FTXVY2HGaXNYAYYytfWoiiCoA6FnrAOntAuUdl7aQyq9DE%2Fe%2FY%2FH98OWyiGZk92i%2Fnef5IvE66zH7OY3VvAxAk6O%2FMOtdcuewdyyj%2F7cwSZtngCp9yi%2BDVHo0nq3JU6O9bYhSZUGQuNVzemX3tOewCOTvM%2BlA%2FrcEC8lX3z5uwhX7euubl%2BkXeq2Gw1q4kfefpaffOgcvLt41BxL3Xpr9If6GPfZva%2Fbk7xXgta7%2FUUjS5RjR8UpKU6zFt2tqucWEfvMZ0t5hMywPugOtnXuTT5p42RIEF6lEjlMBl5E9zzAuJPjAGkv72Mc6%2B419BDSuBOLqJTg0dXAxwPyW1PHT%2F0jO67P2vvaJtq35p8hmqgCnhA3gNczin0dJSMAk%2FGhsXzdBSn2I1nh%2BTB3zL37m%2F7cGgP8sAvdms1CKQjA2iSRfe0xF%2BLlD89W%2FatCdU0hIft989DEW4ytvp%2FgYJOwSCS9T%2F3%2B3ynK4IHvi5ANJf6RBhA%2FAxbuPTFcfGqNFr8rQIYGOLuMMeLuF1qPqKjxRLG6R2fff5abgjgQegH2a2LvPVEylnAyKfW3hUv7fefIMO6y4MsGOqUBRn7lpVQN7iURfJDRdPFlvPlLLKwjbQ2BsnEXKLtEtxZiDIB%2Bvde%2BoGt5AITYu2smQcp0cjfsHSkgVRVSLQb5Qf%2FDWw7BwvSxxJAtRUcgg9s1DV3ybds7pFEYNXgUnhpVv7bMRlsRLAtgF3WNwNkUlg8VQgRrg1cnIttoXoU4XITotb3CcyT%2F2AnmyCrx8wXYZ6Q9UPiopW%2FV%2F4dx9p0uIwErPcTp&X-Amz-Signature=777b4e7c838d24d2444b512a9c029d271bb36f73e74a02639767e4ef81a542be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
