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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=02395c4a85317f39635333b5792fb81317a45bce1647d9ff699fa80d1f9059d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=0ffd230f654c028b92e4cdeed41daba25b5e1cb1819db9062c5885ec44257f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=6a229ad89150a0a0516c7b1642aac904180d8b510360ef3b1c926b55697b8134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=fa4c485579b8a120ea6b40264d9aec884c526fa92acd1d977bfa4f58b340eb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=727b19060fa816d2e90c12496cc1705dfecec0bca306519fb93dfa4a49279093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=81f804bd50a891e9a56780f8a7eb0db1c487763363460bd7f4b3a228b0470c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=e7170306f63ce695e9d95b652cbdece78ba50d514b3db06444586ba0aae7461d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=f0a00997569c9aa968b84c84b9a4d42d38c48a60479a823c97da5cea8fe20630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=e7285ca51d2a1669411d9bd492fe9c942dd2495b4285adb61c4fc72d2c6e0922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXOUZHO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63cMB%2BwWLdl7xn1YsV2hxmnKaX%2B4vETdtL7PicrRvTgIgHAgevibWJcB2laPcAfB5zdgGGy%2F4cL7Y8lcynlP%2FTmgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFd8zAabGHedyGtVircA7zNv9CZft8hym%2B7hvmtKe19EySCk%2BpUPHup%2BymGeWovHdlsFBce4x3AYMpCwR%2F0lbeF1mgXw%2FWEeFjFq86HUeFrkACyofz5a2ZnXUpM50b%2BmgwIP%2BBINAJMUDUIpLTbZPoQrM4FwJB%2BcR85Jb0sxxKO4KhLBvsRiWQq2qUSbgJBN3qIguZqNjKH%2BQIOmLz%2BzcIJqlvUfLCjA5AEZEJckvpHMDWQ6lA39XZLB6Z2yv9%2BN5AoHqRlAiQzMxUOippJnu5MhEZxtydkcW2%2FLL%2BrfdaRpzgpwZwAaT9wzhhP7NFmoNNs7QU1UOb3mnit2rjBAYxZBZOPyugaoQ8SPFkdxiCwzwiTgoqX9X%2B87RjmYDEb0xfECQGf9ZNGNqBmGasGGejPYLfVFAWWUshHWKfLHziaHngh%2BU0s6LhyDqWutK1VBp3X9D343fD78JJ7E%2Fd43Pd50HN0Y0MdHW6psiLZo4FUNcRkebnOy9wx5aa6EF8utf8vP9ShuSAnG7myUQdFtrtNWz%2BNrMelJQJwsEYOZtfMq6RCTCbmYGPIeEy9bYJC79nkRJLE9ja1Q9K92tuyoU%2FwKlNyWDRx6MS%2B09GUggYslUAl8lCvLF%2B%2F4Ex91WlRojHoEeTWuLMuynk9MLevzdEGOqUBtY%2BAIUzl86R2sag4QrD8ho%2Bj4SnUvhFiORLu9whTiAG8HjErk9X5LnffrSQzUh%2FKYPr9XUSjSvmedaIR3ycEoQYb4jieNYhC0mc78cut5I1g8N9vNgoN0B1d1uml4YTrD8dk87gfnfDudFUco5A0MYZpHkldeljTvKqPeOU9OX30oOwxLQP%2Bej70K90o%2BmAK6Uwbm%2Bp61YJN5By4D4yJ0mC2k4Kj&X-Amz-Signature=1101f36452867f73679d4d4aa6aea4abc91919be30035038d44467fdc7d63f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQJW7Z5%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5rOUVv1N%2FVoQA8I%2Bpj9f7e7QToDwrPQPGVC3H5rPLQAIgN1SKdVUMm0uk4HZdCYPkpTfPqHo2%2FR8EROkW%2FPwu%2BXkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFRTVt1ptFgHbaP9CrcA3gwry1gfRoIi%2FPrjz9wUBmHvTD11ebtltHYdfYkvPY9TFjUkcSOr9HMtH6GFwPOfomRFBrXS6uQ%2FLrGCTk8jBwy4T0kTu4cN1Irlg5SxG3y5bLftjU34Ic2wB2gyCZZeVk5Y8Lfr6kh%2FFtOLnkkBrGO7sqKvImMuGHhhFoJOSDyr%2BFK6Vnfjh6m3o4I76RJ9uBbLgbQix4Nff%2BAU47YxdyaEDv0aZnqSwdBLuxhgmsey7qHPofEetxsJdFHSptFBFRIpF82XR80mVZ5s%2BviqA9Yak2GVxo7SywksI2htuRmG%2Fi%2F2%2Bm1ukxS%2BhJnkK0L3xV1yg0K1VMuLhdT4grE6P%2Bnqwk6Y5j%2B3ELeu9kfPHpA%2FMWgZ7iz4rAnnAcZFGNID0ttLc9wS3EsH6qyXm6yDnXQSnB0BRb34B%2BCyqQ2d9ArHUNoiTyNgFCTmfaNZPt5dbMGkms%2FTGTMXXRzd9pZJPB2VXkGMz8OizPfh5U0%2BOuwl4h%2B5yWrI60SKz86Hp9dsb%2FytpzN1ZmYe4WDwyXJ7DyFh5ZYkyq5jZ1xDW9drDxPo%2BtKx067CKfiUgNZNz4IWRnVrPTeE6TEGMqgHrOXuT%2FPO1qByX8hPajxCieHBYrsz6pkej70G1JmPlptMLOwzdEGOqUBDkkelm6IyxT%2Fg8WTZXYy1wTEa3zy%2BLYjgbAM7NZwPwUjrPOgWNbHiXjH3fUVODY4vmIYejb9Imd0GB%2FRbJi7qRE9JRLaDfr31FQCaxVnH0kLiOw2%2BhOVtNKGR0XRQSch9pZwzGcFW%2FI4FviEZWbD8mKMOCemE%2BNLtdabR2tJ2NxNRSyrdEgY9rvwnv8mQ5wwCzUEiqoqWm420uBN0Nq5i8tdmBLT&X-Amz-Signature=5fe0ef8ed3aa77a64959e5b97029eac4be6dc21e92f6f1952cf875d3f339b760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=ad917e97f170b328142a198538a60cdeba0c2e1ef87c034fec7a42a423df3989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=16bd88c66c9109df2bf77ee90d55081c6aacc31091119abcd79fc60d823643e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=e38b2e76dfc406b3ddd9a75182bf14648b0c972718a0c6d3ed6c506d2f368ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=ab1a1f563ae160dc867696dd67921c90fae461d3189e78d9988a393d8efccce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=530036caeb19497869f4c113e7ac4dafd02b48397404b0d905b62592aba8d147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=b8c5ec2ad5143817005609fd450d9f4de1d2135b830e60e7b2b99466c1957d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=ab1556ebd95c6c3b068ce182f8d3a29df7701d01a5af02104bfe1b9e374bf6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=e14ca97d99baaf22c3c3953b154535eb2a36f53c6ffd8a4c27ddf1add5279cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGVOOLI%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7qqks4qhNLOkWOTJwGQQ0Zz90SRZroejriiZDWqMlnAiA%2BendBOqS4m3heBNH0bY4yJINnlCT%2BNiOgR2CnzGGM1SqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLpNq2a6PmkqNl3ylKtwDvukzhLGs9DGQOKLpE7IITCUNIA1NLlIlpKoq77x5xRYUjY0k28nHLV0WoVWLoa5iqikfMzhZoH%2FJVeUIY9CVEXJv2q%2FgKp0TRwegKLux0U9cSDeCZRsl91HMhmprmh3EhnEqvUH0GCZ%2FleckNT8Y8fYCoBP%2BLIUrlv8GZviMIUMKzJ8TlHwyZMyfSdRmCGIzgtSjeOZd%2B9yWkPxHLtmCXozFK1S57K3humoiWMIqWS4xabxVXKxRep3doTaVFiIQ231DYOMyUM9WYWyqCa6siN6YNuXwPrmfX5MO767PJI1SNOit9xeQ%2FEreQlMd9YT6BZEB4SjdFHXnnBQOEWD8o1sru4OIqlghlaagSy56Swr%2B6iKyDumz%2FvRjsR8o%2FjgTyhewH2wBBG0SGKnIQZANioP3zzHFWJL7lrfgjOxtwkQg1CpS%2FAh633%2FifpSIplXAMTpWZyJzuisep6W1kUJkO5iN%2B6qH7tzg2R%2FldULArvGNasafvniCw2mSV7CPGPlzmJ55oDBXIf8r9REoSK26kTjXVYWMIybDVjo%2FkcFZl4ny37wLZBbGuqUl%2BQGaKEEknTzV0p3HO3xFG%2F2SNlZdR3fCb3Ibp7QPVvWncpHPlNXZJ5j%2FV345wzUfSNAw7K%2FN0QY6pgEuPSt2J724DqrswwTWwcFvhsWKTgxkXshvuw3UNVF44l1dmvOyK1Iq3H7NtLl23qmwYiTEDtoB2H%2FAKvF3S4gfI9QZp6NyILvgIGZKbHXw%2BBlalN648mMR6AL3qmOpA4T5iWUAkFqR1RD3yWs4VYSDzNCbKOmhCIQ9qhtV242TlWPaa%2FRIIq3jnG7dzPP3DxsO3%2BgsJfue0qTeXjEjiwdnoRFbUwmV&X-Amz-Signature=f69b4e852da5dbbe9a84e45a9100ec9eb68686d6f10ffe067f5259e8d7ae6b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
