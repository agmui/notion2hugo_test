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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=1457c43bf3ceae1e79d90ef629ef7471d3f8f321223a5f2d270c1cfb52fc7332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=e42ed8406c0d86a99f415a2d038283231ea435b1bf9185c6b7a32aa45fa01ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=a365e0c236c805ad7b488cf58b66e96b0a14d2490ec7085cbfd2aafd467339c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=642d5c080e6cb7b7485401584ce51048b68c476ac13aae7047db697b091ed0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=0853fda44fc142524063e97d52a214b16ec1f50bbf5e6ee2de780da6110590ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=56dac52361fdc64a1610b19d714854e4f4d5e5d7f413d4640269ea2fece1ce59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=f1bac15e9a902b33d89d822f883900ae035ff51d5a83751fcb00fdf5d1765581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=331f3b7b8ded20f54fdfcf6b4c8ad6b0b7d5b892b2f6b19b195f5791ad291d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=fba85c7f6350f8fb7c6947041a0293a55f41c384ce309231f2da97b8ae28dece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDQWUCG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjISSea4vgU9bfsEeNrWa4f%2Bw6gWtHb1%2BgC54D%2FSXJgIhAP6VIuwmjnYzm8ZfC1IriBrMyps5D%2B6WzshEMYxsYq6RKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F6ntSjn9Ctq%2BK148q3AMk6IbqIBqUE38iDgtw7BRXubx1MsT7MaNmxBUeqozb8AOvG2Kgx8kYKFyMxDhuiduqAEdY0xfn%2FmHCaUu5Lkih2CFj97Wtvxujn0hF%2B6EwL%2F9kuftBLWvSqKS1l41fqibRHKYKBRo6b7qAvxxKcI7P1%2BG41eV0aHQji68SRDxgSbpv0w1bsEFQ53UrJX52tEo01%2BLj2fY5v1brbhl%2FVbT68%2BxmtKq1r8esYQeoVtwhPCXZE5vwqJK0RSAMjdPKWtYY3EL359MXwSJBgUlGjs8o8w6zxg60tpWU7zTgfWABAy9gTa6H6HAw0RCtaOIha4FzMGT%2FTUWw6E2DQKY1wMjfBy6edIdCkhUzjhbFBHcyo2k5LCxxXRf2t%2FEwwEBMOZr1K%2BCUN7InM%2BdJWnRQjkEViMucggKkPxvql%2FG4d0EACXpKao378%2BG5x3IunXIpEJcyoKhZfCUmOUtNMN0Fpw8%2BVE9ENhehTmB1A3fMTdHe%2FkfgYJxXqnt3V84YUHxCe1yuyaeUbImAV5Qhz1xc%2FF2qzm48splRsFg9W0hjNvpf4U91d6NuVbkENy10fIRES%2BXL62IkY77X5NV5y2rxRn5TsSiZx4FjrzmF6OemEeT5eTm0jDZE2GO0qKprTDD08efEBjqkAeSsXGPW6cYc7N3Wu2ormW3xX2GD004b6ZDDJoft%2BGCldQkeGsjK%2BgxxhmFqCRcx2dTTLdylrtpHzKWhmq%2FfEymAbxF8SZnZtAZGfanzYjslGNfjs5mOvBHSbPDksQ3Af5xG4S77O2MwSOlhCpte1LdchnDKco2MNzYFvD13a1zo6WolTH9PA2NCw7HTf1ZvFmsw5o3UfLE6KsFIfszDzuglg5gI&X-Amz-Signature=d0b7d6bf61c843623944ef0229778106adccaa9ee1ca1ef1708ba0405cd35af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSFTFXG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7BuUrcDbVAxWSUuzHzHHSRc2oqL%2Bm8YZtD%2FHxZ4JKjAiEAs7McM1siyexSTmqv16jtSOl15cNwkjiXmxdyNqfIjf0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBia1LKvKVphRCUDyrcA9gkfItzFtwGLd%2F8fzHv9hnyb2MLoD3yWiKipWVAwiikWJY4kh3KhjU32f8X8YICNBUOjfYKxFmW%2B21Hrm0TcevFBfDgX037YJq8sNkS3umnkYzrgOm9Hml59K5Roa5wCsIl5NXcaGbh3DJsuAQVly7dUzRCruRbIzrHQW0Xj7qxZjyUV561I156kJ%2Bj%2BKCGg5NTDb0ku872K2NylTTIXXrNM8CopNAtlTS8EfG9zHe5XqGRL30tALmdKHeWF0v9SEoP6hiEdgabZT%2B%2BQ4G%2BGyeFkyECawQtTLHfUpTntFFYpgtfFns43mahljzyKoszWoNxAqF2Xp0k9HIiAxXB81IrOwExPzbocIU1nz5qcNtwM5fynFQr1uzxCu5YKUXqYuzRtFFbvMN1oskxC%2FRGNCF3l9aKAVvONEv2Ysp0BXN5loVKi5%2B7Qr4ovY9ieP9FsoBD5cNX0nKrYleByqlLyTiYydg%2F7N%2FZv1kVSUn2NUck2Fs6uFsfQzeLk46jMlteKUMJ8mH8QDD8sDUeTJubA4Alpg%2BzWmQwgUIUHZWhwhmlVGNQGPhPMaGxfX%2BtyIGOUI1vI2qkjVNCgzoA3s89gFsWhGxoeSkRJ%2B%2B6WdxRZ2UsAV5JRDmgGS4nMQqbMPHy58QGOqUB4Y4JZuwA5Um6Ci60wmRcIDhXrD8M2gVlEWUbGIGK8RCsRcK9N7wrdvylwv5qLjPYGuMj4rWJLE4eSqNIwBA60WvAPawWChxRQ%2FuGtkIQHzxyPYA5t13CTvZm9i8EXDRHH5Q0VEJY3K2HnzHIkXFllGP3AxJJe2Wl2UCNv%2FJzXY29tV99QHvb7Sp6dAj%2BuClIbCeeFkG2vghp5HP8J89PoVZcB%2Ffo&X-Amz-Signature=24b1814f83339280ffa402ffbbd8ddc57227cd90b15a630e2877597afbb59e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=6c394ade4ab94c3eb1285d8c425b45057bba8054e6ea7bdfdb3fe6fcd25da6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=40b910d2a440823c9ca20785e22af2550945777a43f7833bebbe5313792a3d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=060d5c1ba0a43f450f04e2fba7f065aea1348c55d19c03b70af7a328980d8dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=ee92c96bf72c976241426275064ccce0988bff9a83e076a4f5b4fe77e5201cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=e3521b71756606b0f73fca62a1c18898ceab0b33a36bb0251a069162da51a838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=7e70a1816c6275d1e17a4d8ca4d162cba695e5b2da33946a5b30f5d08dfbafaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=4ded5d51966995efe2b53c85872f659e37534b3ad360678eb402800024e80e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=681011279c7cb852b7c4a4e30f3794a76ff1182793b3e562ae70a84a0284ff8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMDFBMZJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWUmJl0fiG2H3%2FqyV1yUi938lX2zNZvEGy5spJjvDf0AiB0bdQTYDy8NZNmYTm%2B68CyoDwaRp%2BXrAm7MQo529i8hSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeYDKjTS9ivHNnrKKtwD4f5Hti%2BV6%2Fc3o4lrVu5FiF%2BmJzyfUPsuWHNtLVcRlmMTNfxmb1pHWyY%2FE%2FkeW6fG2IUKNXcXGWSrZpjyA8mC3u8wbtG4Zz6L6hyh5WvRCUUSqkQ9Db%2BSHtiTTdUnezB8Q%2F6GKDee8TkFxkJaU%2FGzRbg3o4oZuYz0LUsiec7c5pblvjMnU2utSNMrX21iABhALXe49RaN1ut4uYvxrZp1NutnHgXHlp%2BGt%2BWn%2BqLKvDxAgPSJn1tWJDQ5HtX2R6g68RAgF6rewINBtg54gzURJzp8kKkRQwYZD%2FMbDL8VTxuLyPT4P02DmkoiC6wNgDiFXoswiMWGSZJSiKQ9cVYU8%2BhXsz%2B3TS9d2URMgeBjrP0iJkk3cawAuQcXu7ZfXTeNkYfQigEoKOnWJaR4EZwzJhf5GdoR%2FzfjNkvt10amkv%2FBia1ySyXpVW6Zn%2BbuO8sDbPqv89ZfdJYnq33jfv85427GW1V%2F2P%2BPFX2G0s5a3qGmRnuG3TFGj%2FHHfJt2UqnW8wZInFGis6rZiNuFZo0eZ3ZOfePMjExBumY9qakEztbMPF1U5ByyihhwJU5XZeu56dza19ThWCwf9xX5HrZo%2BycGjye%2Blj%2BpeqcCg%2BIsksX4Svls8wkta%2BuIVrkwhvLnxAY6pgES0VlhCCrABVgk1Js9m%2BLZPszqjoTH%2BtoUtYp1j570R03flPYAhsRyPEGhcVpoyLr9b6GoWxiGToC6eGMkI9X9dJ7jPiiGzvNZL4Fl9vF%2Fe4KQl8o3UsgJ7OGzilCAJhudPQYp9TOYKclWNB44uHbT0pmkNU2mAwotE3bm6OuNDg3GfCDRA7dshlFT7TZWxk6onePmvpDJB1RXelbeyuKE57zKrHXz&X-Amz-Signature=1ca08135fe3ac72d917ee056d4147728b66ed9a12235cecbe06b04cf1ad55aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
