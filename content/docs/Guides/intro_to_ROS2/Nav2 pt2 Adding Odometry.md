---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=fe1aa4602f3dc0efdc4f2dec4975fea3fb255c349ced8f45f560340ae241743c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=e4af229ce7c9dc271fdb3b6f1a8a0d72623ae07e085a1f0310961289f45fd62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=6b9fef019f54a044610bf3cadc53f595c7149363ef2332fd8d62a39055bbb7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=7ef35df480d22fc8adb89d37e0ab510407c65a9398b9ec7712410077bc8eba09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=add80a2efa1dbf842fdc171814d4aa8d647fae6aa466d232260b7ebf053371aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=642aeaee2c39ef29911228459379b596150d62e1bd0bed7e3f1ebf25b5f6ff21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=3ce22ef7de6898b9de8d9162f3372c84f4c6c0178d1bb85d3d5f761a902dbd73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=5736ad4b9f885bbd0a4b603e54c9e42333065317c4baff1f7d9c616d890119d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=a1f6f5d5da9be7bcae5279cc4ef9b22ad37d2c99021f021f9ea1f600f6828991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKZZUAV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgE488o3gQ%2BV1%2FbAx6RFJbaSO37vgfi0Dye47%2FCSXvbAIgIa7%2FFCTsHaacrSM%2Bdy%2BdvLw16s660kqMvtaQDUJFUbAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpEKn0g%2Fj2IC0gO%2FCrcA6N90QGWieRzWNVjF7uR7Ev5Qfiae7yjPjvymykRgrovPotA8p1VOYNSdRGjlt2G%2Fzo8GI8d6pKhfuFvXtZvi3mD%2F4mZPBcDb4UoSVBufVx4U2whLu5Ur%2Bx37PJshBvH0uUme7V3ZD%2FkyW2MhJvA6t2On%2BXkwUYJ1uM9syRhkVzDNNqNHWmPUX%2FweFXMd1LN2sOkVsS7Y3%2B4f0KHxMa4rdjpEN1opx%2Bgb4WwNLyOjz1Db1d0ixjaeb9ITUXVDJtUDXzscCYxyeoTddOLsZPSGcnoll%2B2BZXuWGeeO34t4imUxKsceei5J3tTFAW4h2MlYV555sBgzaE80KnZYoxfiZdeIu9LrbvBRSew%2Bmv3m6dh%2BQW1vtsM4TzuTmRfnp26fv6R5HxslTLoW8l%2Fwblx%2FPt81R2igleFQlEFbKPus2cVRGfCU0I6t6nOccnbAWsdd1OBLaeCIDyIyAJNyNuVP21rPF8UQoHMBFeR4Bk8bbPwOzgv7blxNqR6om32OLwd7NTs0yoBcQtNs2tCgS5VKuB20M0wdTBSD0ngrQVtUPY8qodcU9aEL7IEtFsQqiMSGQmEwUvGTDgXZA6It7S7J8HdQwr50CkULQiNf%2B4ClQ1ANEj0fdOUWpJ3R7MXMJiarMQGOqUBhxKC7eEr5w3NgCavegjNSHlTF9oyhyg5B6t67vSCVd4ss6lf5cI%2F9lI17lREM2K6pqiRijnLnrDHMqmFcadvL%2BZUoEUkvx%2Ff%2FYr6Xi32WF%2BCyLy6QMP1O2VWV5PnIDaWbjyIadoGYjxayBA9QHayYc7jVldta2W8Ce9kBNjM8VxRCq%2FLSW5JwHMTjX0uNKVc46YjKPQI6nQQb5%2BejrTCsWOuZxAh&X-Amz-Signature=0c4c67aa1f52cb271b2b3374ed73d1585553f1fd945afb400a3efeff7a2152f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOZ5MNY%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExAUNcf6dR7yakk%2Bag4QwBOkESu7lVF%2FKUksyedn7ZiAiEA1EQOx0XCXU22tAxCs3tcV6EHw12IVCXWVT0hsEau5joqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrYkEZtpbkY58YG3CrcA%2Bo3D09UohcBk4qrAbFqktZv9Glnbg8ctZAsHQfUrYmuEOyGQSO83HO0dhvFx%2BrJcDF9IZ23vg8SB5f3xOzipAJoD7g7WlJzGJY1jXex7IoxMScARxcg6mycfmuqQOowiPe2CM%2FeqzNA7x9OOVGyVoh%2BZE7uxqbZ3T1bG7V2n8mLRUE62UjcIa7ts%2FUKvIxEQM%2FA2p5a1ct87B68PYicnR2ReIY5RmVJtkkVHgfCmRUDg4li0cPD8iitvCNW9UfgfJzmcjccbGdKIazp4Uooql4Rkz6ik2My%2BYIp6lwX190XTkbbUpJbDjLP5qTF7Ds180b1UGWxMqC1IkFYKUaq3Z4XWn0bqtKT7ZkW2e%2BgVlVs4BmoWR8kColAN22dO01qZZOKWoGjuIvuAqpLtjComsZ6RU3Hy%2BmMOlkfSUaPhkdRTKatkkev2QZ1DPRrI0V5rCs0Im4SdTG9BW%2FSmEC7V72t5431ANW3xLL4dpbihOffV7a25wqHMfMIeicIUkW45oTasUDfTqD3jN6yy2RSiWGEXJxFOdvzrIbS4CFpjcRFFEkXR6WxCco1MvAqX42T4ubszzIm641U2s%2FXNhM3%2BkoQiPOQ2Uka9mm5qztO2j4v%2B6vkJzryKlk2ZVebMOucrcQGOqUBb%2BJK%2F%2BpQ5fpGyaXO%2BafwLuBFVWmD6wlbi53G2%2Bu1UDddiFV9sgHn9koj7dYtkIXO%2B5WYX0scgK%2BMau%2FjYrl%2FWVMZ1BUsSM5zUh4H630tFZLBiFZoUfvxwWBV8hnMpz0VPQWD0c3JZxq1%2BwVbu%2FVyvZce%2FxwmfT21olRBPvCy3WKe5V%2BQHmXZTzpCFCrsE0xTLW5JCDCW4fftUr5%2FCdbDGElYNwKA&X-Amz-Signature=f4fccde5454c4049279c071dda05dfefd4c4a61b5674fe1ff76fee6c4087351a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=ca486e775ad80953d53832c128db05ae80dd7f2205e51b89b9d3962d483deef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=dd141f9a2a2e452a6a9525cef5e3af87bbbb5da7e74c5b6dc353322fc91d5504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=f409fa30521dc292d0053c5dd00b64a36f08eb9a22558233c11f0798965c7531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=3b7edf108c914558bc47d4db4c127b0874c6477a22c259fca18402f0ca386793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=841216c1de4c9a5922ede843bb38905e902106a1ab4ac29543c249cf77cd327e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=ff3188957855a6850b3fef872d8c1bb9548053bce52bd41b4e9353e578736d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=ce8fb60c0f44ca918a8ae66f89b6a429951a681d0a677b70b0e610b243e0ba13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVPRGDGA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGFISgOgx6uj%2Frdou8onix1J%2FxH8x8HVsL4cMrzyU%2F7AiEA75VKg5UsB1vO9AlyS3N6%2B3HEddlyr6PeRB6g%2Bud8DukqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx2MP3TgO6UvOvfWyrcA6pj73MHc0CuW0kHHQAUVoKFnleV2MEfma3gWsm5nMpUH8QcXZvxHuGOPGrrxbtdtrdlrLgCgmQALUzrvVEyxrHp6Ar7KqMT0XbzJstR4PbjEOJ9QhKti%2BkQfrcuMEHE2rLN3o1lPR6%2B8r0d6faCkmJWiLZan4sTH46G0sMzv3niBnUXubrs6cEzRMBxw8J69VJxcwsHf9vdVvD6vB6WV9niKvq%2BolFtB25U6927V0Gzx3sE0F3%2Fax8wailcQPVqEwnO2YIBYz%2BIcjD%2BR8ZrJwQZeb756Vr4cn5d88qZN9s7FbnWlZ1Bcb6T6sJ3UTuQPN7bCcJFYPKEjbn8DHoE7SyY0aKgd8kK2yQY4HQ4yzh2d3L6VA%2FUM9reSv7plNC%2FcDsb7w0FxQMVrjCeIv3hDm14%2BqABY9Wy%2FJHElXLWZjTfpooRra6nJUa9YaeD4duoM6oOB8ngxmsB%2FHG24n4qObeOyyFLnQG%2Fl4xtfGseSL%2BJrrWr%2Bo084CGBFSVMrh7UTRyNPfzLP%2BF4qM3wVEWvhJh%2FoIJhjoFISjF3SOjmOL2piyDgVBUuP5IsxNmRYecK5jU8SHrrTs%2BtzyBl7qtULwjaW5B5GPP5inSSQnJ%2FkmngxcLeVJQAl5x1L4kDMN2arMQGOqUB%2F83wLP3QHZozLTji1riJc4byyeM7Xuz40h%2Br0QFj5k4VTcEZnmv4oQ8vxBtegnk8lvyytZutJppkI5aBiOyhyNw5QslbH6CMO1EZytZui8S8WTMrkn%2BA9%2B7Ph10H6Xes6TM022iik7FsddcqUxL8imnFh1ncBeprNp5xr4ekgbNIBxc%2FhQI%2FMp8%2BMczd3mR5%2FC5N65NCwFxh4sd54lotMx4pBpSY&X-Amz-Signature=fc102c0a09a40b24643a29f039a5d3d8e3e38f8e5a79ea0b44371d4f2351f1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
