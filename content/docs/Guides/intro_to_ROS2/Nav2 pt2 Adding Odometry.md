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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=b3d721b4590f5a86b7f2804abb765d10d47e08361428efaca0bf20521e808f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=af450180b5826fe701c1fb5a633bf3139ff06e774dd0108dc586e81e9439200b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=e4fe02bd5cb916e39ac8e7cd71dd4154591f668ed9aa3ade307aa0636abfb3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=ad1e8f7472951c5f18ae7c1e52b81a9409aa073b1ea90c738072e89e96d4d413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=ffcaf87d034eefb15ec58c86c6f8dd7e5623992cf4ab2d6a4b2f2a9fd0fdbd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=81281fe20ea96603eab6b3204e2dc9f9a6ab27314dcbd73f750c597adeb6756f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=a969ece0eec29286ebc07b99e96b9176393dfe2f51bc1f2db35f11dbdae9c3ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=9212bf823418e1f2b1a7146d1b78f5a793281a96bf81d3fa620f23630d30b6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=13190ce4c347c08b3347fb281c2b3d7edb9f811e8d79373e2f48d81979d12e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53Q57SR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2BDWOG%2FNJ2oNJZqMAvdDaJCk3orDGgMSCErbyAh84pAiEA0GxCeTmKXBh5bcXS4CyDw%2BFzELjRzeGqSaAiyVDicWEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKPkLSnD1knm450KwyrcAzGThIzcPMyewj4NbtztQ2DyhB34SnOp%2F2hOkUrmfFSjWay3SZ%2B6v9Jpniwsd%2B0%2Fwi%2FI0JHsS79nf%2FhA7eLkW7KVFFkdUx9zdJEIHU3ULBonOXCiSr4k6wYyBCUfZ6FBXVhDiFvW151S32ZLjMFJuM6ATiaw9eUtIzF%2F5psXYF9bXHYMv4XXb7qQiyPNfu%2BnWDK0aV4Sd5fdyEzmO0flLbXSDPRkl21hjKCpmozysZ%2BbFBtOtgl%2Frx2D%2Bs7TyDiu0sp%2FkIk9%2BA%2FbbYSeIUcD8E5yEQ3xOUHxweCpbMJFtpwNSun3CrOtpQMBaOh%2BdbWOKyPIpWn8lpQDIn3N7Aqwx7kp80k24ZYfbkyaJlCTw4CIT1FWn2v1tDXS8302iQX8pO8bQFbs3vLjpVREQtHWe7GpoKnW%2FnwqMbYtXceVbi4O4RiFG9L6%2BwHdq9sfpgUb3ezaJv9GltJFux11FUiDT8vcNm%2FVRMR0l%2BFeblw7n1OckIRxEImhhJLma4ZldwgdCHwiCP6jH5NEdVARO5zbXsnAdqjvBtvQtOG%2FUxBnQaijfF1%2BGTVD7op7SKGJkJghzzRRuRbojz1otiCS%2Bt4FGNi%2Bjm6GbNlbBc%2B24REqoyKXBclMW8QKdg%2FadtwnMPr2388GOqUBKV6BQl1UEi68%2BXZKQ6h35blidzPqTepgKsb10SFFLAvcogZoLJs7mFo6qmIdjNzBFyhB11qgvRTaqKF%2FBX%2BGJ1wvvsKePGobnikHXCxZVWcch%2BsD6TZKBZhiUgyAbfGy7mNhqOqvpcoYSIxwZ7PkYFMQEN3RgcSYHX%2FcuGzh19mX37VMTnLx4GUSY4EOCpvdSxzIPsmR8ptmdYIsOz7aEsOFkW%2FP&X-Amz-Signature=6529338c43659cfa0c87bbaa8c54658b7ddcf74148ef53c4380aad0b3018707a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF76OOKR%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC6usCFiKPByzMa0LfhZZYmRzAuHnlVpybaltc6lr1sZAiEAj%2FocvBDmXQ0YTHLWI4XSn5A0k%2FL8LCMiAQ3roYUevNUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCaQ23OrHuQrzDxyPCrcA5vCb%2FOmIVFah7EAiNumzBZx3TJlnu%2Beb3gd4XOCuJLz4gaQd%2BBVKE%2BQelEh%2BGUkKYrHICTtd6Hm1oxDQTBNm2%2BM3tjqVuW7MRIlvf5ab5gwVVLBiMu7rEw9e6FWwZdYbSCdjhbBZf5bCNBPSKMArzkkxd6xqtNAFqo7kzZCX1NPFlxiyj8oXw%2FfBygN%2BV9c2I4GDIGGWDAQeDkyrbhxvyweLgStqDZUs%2B592zpP2SVvWm3ReM4EBsRBk%2FMvQelhG47KcMfawPud7Ar0CqJV%2Bmiem1Libp1QAT%2FI5IHdX%2FvIfD61xFcppXr4kigm4X8gZJOu%2FrIlW10fN0Z8BQQg8IIEOJO%2Bc1kn%2BHqyQlctFqK7DI3dws5U1hjJKUPrcoFpjF7%2BzPMYv06g2wsLjsEOOg%2Fa%2Fq279qYQrbXlgfPaPOcN9kqRKJySDoroB9VDNG0rRZtOyz6FJ30kwnM8gYDsQM64WXc6ahmgQ%2FebPO6Wf8uDZCFKJahj580hBElCN2K2pZTidlxJ9QmbolzfqGsaNJatzFKJvgyZN3i6YUPZ1fNRMUFMHpTngWtBoUSMbd4lArgTWv6NHN4ysFHbsWa8GOslzgVepw%2BfJa%2BmZR6m9TU9h4nXINPTTKk11GRZMK%2F2388GOqUBYRRIg1TyTw9GfCoHU3mXQhPmCn0%2F24CvMfqoMA8xkJksXnS%2BhH3yH08iJg3GZ5fYJPHuAzW1CIvSGq0st5ATDM3bpmS00hUSr1Mj7jhDn77J7kuEgoch5YAf8eRwquSO6wM%2FZ0wBhk%2B1n%2BjKyNTpZJH6eNbVa4L226PdjkrDiNLh1mvOEfYZaVqAKBxRZt0mgQgVkF2SmkUfDKOn%2FVQDIKjS%2BkBr&X-Amz-Signature=b6223ee79cc0c8bbd768d46deb85a885c871a58834a4b904a1ab46d3346885d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=95f124c458577c0e9acdabc54b8eb26bc8e5224bcf299ff66c332bcd3d7f812b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=3300b9543b0b0cd037fb50753632d1915a5ebf5eb0de43f9f6b8e25653811a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=8f0d3a6c2d8c455b8d8631621d6a94217da3e9835854b1dbbc6049610462f837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=acf3d337b641c07414ceb8732e2b480be6b71eab4e112ac8fa5603b34d7a2689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=b787565e189c0d893e006613b67a1173a1a4ace33cd2b5a73d3a5c6cf1609e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=7c8d6ac188fd8c75e766eca773ee63080211219034922a1b43f93d6ce4c1ed07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=8e524538fc779624ee10caa4bcb9bd9b2cec68dd5b1083f0091c8b7054ace76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=587d56a9b8ecb93d2a2237500c0fe6ac68d2b60eb520108597e31d29360cab0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=1c2e74f72153ca285801bb9f12f12bc2d2b2ac961bbae6e61585074832bce571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
