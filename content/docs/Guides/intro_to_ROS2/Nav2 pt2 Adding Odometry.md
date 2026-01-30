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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=f1bd377ec733cca2aef51cbd2e6fdf5fe3fd48db517721a02f2d530da15c62df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=fe199dbe3ea97d3360e21df88a9a7d2bc2e5dea6e84f0d1a0280fd930246b778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=c468822f569e318e176521d739273e5c7434afc50eda454b4296c7525dbd6d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=24e4f4f732dd17688af6b9e3010ad44e386b35bff77425a6af83d76434124374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=3541f91cd4b6857400d5b32487d39c8433e593dec0553fb903192781f8beacd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=bd7a746c211e98ea8748330f9028cbaea6b03bf061e795eba64bc2cfc4e8bd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=93e9833c148d44869f58793f00219bc4fcfd54ba777c51968970a5cacba46003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=bd76c9ca119703a1478101dfc269323992a3e03fdeab6c237ac0a0e1a5f52085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=e258820a98c751e6435e2548df28da5e992ed9f36ce7e876d161806709c45bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJKBUAW%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuKVhJrYOd0SD9NQHhjxVXQ0GVwwXGqKFlX9q0NdvJrAiEA9YOubS7D7HDz%2FwtPMY1g4EnSN7X6wNi7v3%2Bsn53%2BR%2BcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ZSEe189Yms%2FK94ircA%2BwPXsQTyfFEPJK3JLoMrVSW7cSie9b4KBEhpZcrGUbHpiCZjuoDHgwEOR1aRzXD29B65IED1eUoIH%2FNfQAE00U6ul%2BGIY8GiGZMXgIDNMFdHwufcIHGxXUoVeb5F9ir32cwJqaJMnJfm8BCdqq2x9mrlAVJfRUIGXRzNhM7tGosxnlsD68uR2biVsoekw1DUq91o5Ud9rIm8emuEcQHQ7n9JLPMMyOm2chCIe4sqOF2B4ztDbMT73GOUNTTsjREqvK49UJINSA4x4VCQr9JMzOLL%2Fw0iIOEpZ7Zs5fnZowYZdf7AG1Kpv0cQeYC5WBjN5JdQiRDHaxY96fyNQkayY9iNSWpPIOGQAAaPyCVFT16bJ%2FCWU5SNFVh247w328z605pX2SvBUEwgTD3zxqAk5ebdPuFTBliPjw0aV0X1Hz7KXqaOpUFkJg%2BKyrwC1AkplHKn2l2Ko34MSMIwh3D7%2FfCb2qIDJjh7o6KqXsRjgOMPTZh3ii%2FJhDpuAqbJPwowXnbssxBg8u8FvolLo%2BzPWnL0AqLlGCqb56ZbKd4AB6UY1T7qdZXUGnqBYE%2FA7Mz6bh%2BnsIbq%2BdVDYdgy7qb2BtRhdGkROvYO68iv0JHRg3Ydc3f%2FLVXUN3gRq52MO%2BB8MsGOqUBTsKo5xxO35YtJpaopLRY3rPuU4E%2B9cWYQpsgog1EEDL8ckDrkUczojlyu56O2CQXG2%2FGrbY7PsBNs5W9bXXAbXMfSDoJOHF1kmy1jZaCT2N7RA1PBoF7OGRKImnn8NGocRrOlJk8wWrlX2g5odR%2B%2FNfiQeCV1XeCSpleefLyOzfg9vRIvPCFA%2FhBXhVJYP8prm%2FGDfVl2gnqR0hEzk8gxKwu5GHR&X-Amz-Signature=8c2671e74b5f728c43ea9dd3a655f00d78ed186ce3f1061937eef099a8470f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S33O3DUR%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIoQb6qvRR2DDMPgxz0glY3iVIh9%2FAKIxa20qUG85hKAiAcfLJaDnFsos3uMbIAzzCiNkvJiZ9S1%2BejI86L34sKnyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdx%2FxiosW%2FAYcH6kUKtwDj0rbh7S0a8hGRSw1eIN6aVU4KgFttoBkSrQv%2FVmFu5XASbUFATdBvvyCfgk3QbxmxHPVrNilTL2B0u0avyUqtnjK7DQZ66z4fLIJAJSnDvz7jWTqGsMYHID3d80rL08b0LNTJ%2F7kaFoQDKCjsfW5BzZbqOVsTrCVX2UW0lLYAvbLVnzCk3VZBoHpGd2TDEA%2BiPqBx%2FVe2AANcee3t28ZdZqJdLN5YccsOln%2BdOyKdwyr1CnPjj33N3yqJacghL2Y3aRSUHGPAMCiafGMO%2Fsljc2Ma%2BT%2FJCgFRD%2FgAzHBWZVQTTrNoj8%2FULFZKCiUPMtSyMsaXd%2FYcvQNIsc8jQqdH33cQonJ19MuN3HbDVrwRzq6yDjtWsXE8l2P0ziSHTsYaScz96Bgt9rRO8vUVCtZCMBxuBxBWPSEWJlFHKS2JChVUtem0ERwHoFdFUBwyaCYQBViHQYRFJs7h%2F0n%2BJOavhOBWg19P5rX3pHN8mw0gE8PeCPnr6%2FXLZnVNCMNWmD9jpgfEuYb%2BKDpaz8YG8Ii%2BRdi1g%2BHC16O1l02C3dsuq70l6e3cXMaqreGzwAXyOXdn7w7%2Fxep8tPSJxCvb%2BxqR%2BHgPdU0ybRPpdeyB4%2FOS8GejKUZbRDmr%2BkLbl0w%2BYHwywY6pgG0tUa1m2ntENATemHHqh6k%2F9e4rs4qYtAy4l9Jw4qE5aIpW8a%2BKjjunDyqn%2FOwb9PgWU2db17VF5265Ay9Uwy2mjxsSKViVufM8S8j7QgYKD8uvcEGji5e9sT6OGDqf8J4ia2uzirsD7Y0ilPuRp3OWMsQAN65pkzYb5Aj%2BbWg4zXtEY0ymVcp6kzJ6Hv68c4f6lZtEnvvgifwtcicsiRsFSNSGkGQ&X-Amz-Signature=e31e21162cdbb4aaa0cc2ea9bcf4af6c9dd15886570c13cee6fb0065d8278c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=b90465bf995d7b4515e8ff24c24f249758105f7df7f765a0dcc2f4b8a6e1cc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=244a4120458cc1efdd7e333c92485d4b74340f3b40055e50bf693e26fa2e587a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=8f5e7db10a64d59c9a74e3abe258d60ccbc4caf334c8cf77d92e28b119ad06cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=2a8467145a7ee58ae6949f3a7cba924d5ede23eb13475b8b645144e3462f0098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=f721dbd5929ae570d8b1b81ea5f26c0f197de364de947e0fb263b90fdc680cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=6578fb3b6a261479e6a176e8fa22e7e32a800b2c087ccaee0b42ad620fc2fbd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=692335babcc77bec044ad8b6c6c4fe53f1ee68f3e1c7aa4b4377ceaffed8e8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=737a83554f9c3cd8127ab654c9bf893cfc8ff3780e490f68c0f2b8f852715918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QB5Y4UL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16631T4IHtyX4RjaleGI2XLc9cH6wOI0hDzTsj%2FZbowIhALNe2PPu1tUm65ChfbfovdJn5j9A9Kx6vHPE9DWnt%2FWnKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVd%2FbfDmzt5dj11UAq3APALrPQo8He%2BoXBH0BeIjydp%2Bql%2BoxLXt2Dc%2Fzl00Xgnjc5J63oST4mtca8M8gx2nYx4LiWdUV2YmasvZR89muNq7EzgqwExKNVAKctePe6pTaG%2B2qZrmxph%2FsRbi91IH%2FtOnSIDNdTbrMZvYPosYYlMo%2BBeYAfid67xbOW%2B2JHQf86ActBQNPUIARXgaPac8OS81X6bpPeBjKQU0buqTAhrnOjl9Q7ygZevJxW%2B3AqTRfVwzhO5vwGYZHhFq%2FntuwHDHt5wDUDEWN3OKOn60Pr%2F904y%2FdMyaNUgU6ULpPXmW3%2Fu8tQlyXXAexOAHr%2FNDG2nhOCL4zjLoGgoM54wjv7caFKsoeJLboeWvpgakVROFFlg2%2B7UdDXxemJvThHt9%2BSTM0MVj1X%2B4fy4sScJ8wmXlWbzo9oHPQS30jYBVxD75nDijlOdZ4y%2Fn8QHZOvm35kq5%2BDfBbL5fEu%2Ftw96dJY0JNwhMcgcc0uwqigpPq%2BGnaNB7jIgP%2FcMnQiTupeYENOMS4hqjPSx6ZCcxQv5FyWsDO3lpTaS45ZN93Rva9URtz%2BWBC6cY9Ow7op0OSjjqVgiGDopdlasR00jLwvGva4foKWu1O9tvoW8qLJooVFFFPCjpNwbeiUDfyMkjCVgvDLBjqkARtdoy%2Booog2kARXeoqKLikgn6xjALqHDmRnXE2nbSK68pfXZsPqJm7Fou5ICmiI8RUDrY5cYkwtpzgPQByO5x0K29mp5wEAWSpNJprccvSG3T8wG8Rv59FkYxv%2Fp%2Bjudc1xT8KA1NV8cZZB36rVjEUEVlZywvx7rJyAN55QfzKEBxukwtpIU8L%2B3xHBZ%2BLBIjl20CxZMcfYo4Ycj5VY3XNfRS2z&X-Amz-Signature=8a0023797dbcb3b3245a1d7519015cc2c244a4701d66b6ccf0058f5174bb1fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
