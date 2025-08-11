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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=11561acc440506e3f5610c444618296005952fd6e4786d9355218ba08cbb8162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=1f367d09972f49317142e4edb28eeb0f9c341d418a4e5aec6d4ab9d2091231c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=f647ac60908639734746b16d45c2ecdc0ce62f5b227fb59b03e18dc9d55dfd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=a78f507148b8d8986f934b7fc356ccf557f44e557d4d06987ea74919098b19ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=571dc3d0bdd9d1a0ae6dcee79ddaebe718f8e6f1fe7cb940b38b5a88bc368342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=bec925bb3d771dd8d5ccd1185561fc442d199b088d0e6e55e515934b0de83dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=71e84e73531764193a1bb6d494d1ad0a0877aa0e92f0725b11c79def01891a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=1ba78d611dd8df03d77fe712aaeb7bf8c6631d689924455bc04f930c52d004bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=76498b9ad1cab0521152f0ecdb485cac9aaaa357fb41c9cab73c866c88712042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QYGEBW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpGSWAACX7W0WCZHRdW9HH7HAjkHy9YhgV1c7Lfr%2FBcQIgKpG%2FHE%2FIiSSZz0BcFxwjRp0J1CD2u%2BxcNNFlLEKy%2BbsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GKU5Kft1oAtuBVyrcA6Jzx0GlOokKw%2BOYk2YC1oIAQ%2B5%2Fzb6na94Oxgw5eWlcvEAUpjtR4UzX8uvs711yVOQv%2FzRXHCtOPNEbzAIvJtxxSKuEXI9gFA7duntH7s9QEzPbWqE0pxrbZDTJgZhNa1SOxROmDOsaRH2YiHgp6wAoZgI9kzWQyW5PpnE1UE%2BGBD8%2F6sIvUxzCNfTebEdSupnFRJAwhjW8hw6VxJfVMfzJr5%2FW0D5Npj6TCAUwcry6PlLDAwULckIssxu8N83iygk2DeJvfVpJacxa9clHmoFyBurAZtddiEnjBCCvoKcv10nNrxWXeFrfbhOo6tTkGAYzLhnRv%2Fib%2FucDjVWO0n5Nq3AvDDEiJY5TVli33RJcmD5uYteHnJ6d1U1pcr3S0pDCmCIzlsG60hl8%2BxGL64MM7Q7deU7DZZPHQ97CGGIHvA0ueeaTqODdwQ4teEgJN2pstMe5vld%2BO3%2B%2BvkXGmk%2Bf6o3%2B70yTNRd%2BLV0vvp9ra6bEGuD2GlnQVBlzO8vpqOGNNFBYCDfGsVtue%2FIzgnDzEYDYYAVIMgAeLp3o%2FOe7yOxip8NIrX%2BcD34RnuK%2FnHcb2XPztPNQiQatA4heM5nDOoKOX97tHcuOiOydnAIrslI3HJm6DebD8pnvMKD35cQGOqUBmciygaChEWp2PQdAWOxaQLshn2JWtzoe38J4FxYmgGezBmT4vGV%2FczgLPTHyrVsJ8FEkkyLv20RJnjGkBPnBHMwZgysFfclNjA43g%2Bexf9J6PuNDHNzO9Ht8bPS8fplgNlD5r%2Fqe2NA1q4n6tt9CfCNzSbl4LNtBl6DBasf87bLvQyvXXpwuuqKRI9glt6k82okXIt%2BGxK6d37SLvEkorCJdGC4t&X-Amz-Signature=1eb86ec48c7f7f46f92e2ca0a89e757f374fcaed16973fbac11d7687830f7dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LMHNVJ4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaRlaC0j9BJxk9NeImQbmVEhnKEv%2B1OQUK3lFEOhsHTQIhAK9iY0F94bAhYcBJ09brkKUQfsAKS193TGRMoO7cWzd6KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0MkpcUU6eFFBTts8q3APpU444Qp%2FEmmh7P6itZwm3kiFlxamFsaRFpL0J3VJpnGJfqukpJIa%2B0JbuLk3DrZ%2FnPFbtfY64I1nMgfDH0RQ%2B92e7Zvyxe9BV0%2F1rm1gMDWViYqxxoyOLFqtOOIEUB%2BRPHT9bsOhJt6EvFAs6mxrG3gDk4Fd66HjfrrwwSlMzC11wEVdKkkSlJeGb4ADAcbMx2lfH%2Bv92qOSbQ9JMBx%2F%2BORTt6XdXSvy%2BjSz17E7T0TMqKu5%2FMC6qB680QVpWrsTZIs9FpuK7LhI92S9wLiALpK%2FQguEclJr32YNUj26DqQXpAXxNBfa60004lJgsHnwY2lWW6XjYYVe1kZzyuk%2BIpQp%2FLpjpLHxkyk3h9sDXgq0DR7qVWLz%2BMaCA1%2FtwRImy8HO7Uw8rpf3DNmGChT5XHT8Du1LnmVoNzC6oHQkUmUOqm2%2B%2BlVRyP%2Fqb2PbROOMoUEr%2FhFMIyS1dDBrw%2Br3xjCQ6im2fHnILeKNVs8Ul%2Fzl5U6jplyoYQikh85hgKCCGqjEXzz2YjsImehdQBRItgTZ7tZIWSPg5%2BVftOnSmAPcgyTbX%2F5ZUwtlPDT%2Fu1jgc6wjvt%2FcK%2BA24HWkJ08E7ky8rQ4omXCOPvf3y1AL0ujo4NQS7x%2B8Y5boi5TDK9%2BXEBjqkAfG7Ie%2BnimKbiWHkzdjQmVm1RR69Mtepuf%2BlWoyMLLQiio%2FH6ztmEdLxhv9FoQV1mxwtg6qay7N1%2Bc2X60HL%2BaiAMUAymGFoisMClTCo4x1%2Ffdwa5v0nA3fSDGwAhns2sGpbRwZWTh%2BWrNOyz2XOPHraKTv2Mh6lffPplWweMr8z5gYBo4sDTrj%2BoVnWNhukQnikXwT3x5DrWCDwsiE6kixkAeAI&X-Amz-Signature=a02df7837c0e10bc5a784d1977a1ef74ad40de643108c329d7c8f23aea9636b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=aba3698a2408e9eb47287185e3aeef30cb36c44ce963f0ddcab5bc94931787cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=564b971c9707ecf6a40b9566c6095357193a7ba18d1dd20c7a84f55de6d19f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=452a02901132396a107219920cc448c1f14cb952042b7161b0c4ce04affc9830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=ca3f81f9994421a824e58c606ae108a3b0d5ce887c64288b4bee4d81b850d08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=3c7436ef9c066f4df107f598225f05a6859159c346a8ac5a485a44eb408bf198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=f2c91fa90b704dff6ebb2ebdc90e16599572a33cbfdfdc3442fd81b7f9996630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=86afebf0f6f3b28b5e7c3066706c4749c14478ee00796c4dc1c449d5d5c0ab66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=73d6ec1da3b8f0ac610d45e9986e06746b38156c510643c6c879dba10940f056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCEN64TE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChwZkzPKo3cwdRmVsI%2FWMLG2ERUngvQXslzt3lwo8T6AiEA%2BMdGRVOoRfXkOng1QNRLrO8A6mQVhb6VKBg10y02Fl0qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KkwYe2CqkjpBhkCrcA88nvPQ%2BYMWborBdsy8dLIqtwmGMi7R8zE0WIZcEobHV3LzpRRsLB6bFRFuMMSdtsZtpBxg7mBdn1fgdy252%2BCmIyuhY72wWPVzbjaURYBT8ByAkhK8rag8LyEQ%2FZJY7z6dHnTI9CxtTyDonxhD%2FLDCMRKlP95wJg5mvFu2gVjgeHwa4E1O4dqjVJHR3S63pheFPRrZgz%2Bs6RDibs3bAvuupLWbp%2BXpKds17pW36%2BvYGoXzk5yZNnHkG3lH0CedMdkyStiVFuhDJCl4O%2FavoZIfweozdIef1S4Fd0hfqixmSjgU7VFQ9oknft%2BWcDVqIRpl3X7J4OvJ6AY1s9GKEo3oJIjkFAamCRq7NymGpzwWZWJ6nyZEAQQA08giD81ulLMPmYbbxG44DkjoSBccAQu5VmbuzRyqL5M4lACcqsKrQkch8i9Ft%2FKHMvBodWCuTpqO7JO7cro99wHSyKT%2FAwydx9aw6lIMzWz7%2F83DC0eElJ2xlpg7k2TeotzLNUZUKYXAeirI%2B%2BLd5atdXXKoNKh%2Bki3lIXCEy8vsKMLqueClx8vsnh2oeQptE5HPCv3f4%2B3vtHyhegBXV%2BGOxhs0u4km6aEPjvHogMJxZ3sup5L0dQNHhuC4RbHogpfdWMIX45cQGOqUBFK4u6n0qcSylDsIdb7S1QmTdKn3ZlqTuh3VKR7Q3WnCYpQZjOuEDo5rFCRf6w5m6Dj%2F87cggwMyRtwppk5SBu3UYEjT%2BkPVJrjnIp7c4aQO1k%2FPGtVoWdKa6lfbxV9RGj5Fg%2BMp59C1%2FwBab9a29x4o8uBuPJR0h0rEKmmVuaXs1nfN4ZK2x7m%2FMTYkpK2YJuU9OfSlh7owP53GazV2ZFPvttCaq&X-Amz-Signature=56aad4f4592c112b626ff2bae47f9f1e9d5fa279fe66d0df12e76f0323024728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
