---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=3885d5a36630436a614dba1fe78997a5d035f92c2b428b75958c78d14c126098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=532a1136586cb63489e179ca8aa0400444d85531b67357508320fd7bf67f32d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=ad2bedb9879d0a14b9ed6a5fdb8f6702d18c4974867fda4f116d60b38c64a31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=db790d429955c6bf2bcba90853a4beefc3801c7bb8e0af4500900e670197d3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=131aa36c25b21f3ff440731f5ed153342246d5235f621b0935bef4bc032e0601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=1e518edf09d03e893036e3e11b90acf437df338fe2d0154d875f90c943b87004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=7126c396b507669748f8f32bb5ed0b68980400802d1210534e8239da18e25b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=042386306b8097d742da2f0e4b3d3781045e565859960874ea93b707c48bed24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=92842d6b48515ed6863f06ac9337878572d601626d25b52b47384c8cd4f095b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T37JDHFY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIG99n2DjBbWEf1Y%2BkrIhKaV1Kyc0fiBahntdtsT7CXjTAiEA0IDIl7iXXfETw1noppyHpEKVuhE0p%2BDcmUM1wtidvx0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHjTPQnlefyqT9x%2FtircA%2BQPxEefs8s6HCMImVe7UJvgyYKHZMsuyWMr2dyCHdxQEjWTWYDX%2BEQLVdcMDKS74FSkL8jCDjsDjDYlwr%2FOZ2UU59IHE%2BfrQvDMT2W2Kgc5oQ05QmZLB072KRDpJE2pdl%2FDAKK6EAOblHhmSarOqAwhAtsa1hULUs98vd4X9lIQyHXX62xtas9QgrqC%2BUWaVIRokLBCJwht7ieQeklcnNLiPbQkT9sR10yTOcPE1Pan5jUDPr%2FiU%2BvKZeB3CnQRe108E5hXCwQFscVxDtL86u%2FOLgbLnRI9I8WvOm0CnkCpgog2XTDzL6t%2FVddiFIVFc5F6SXVqYMuAhhHyEXaK%2BPy1jVKM65yA1t4iXJK4y7Q3xyBg1X0vE7Rk0VKMx0EDLrkELVXMl0Sr5wsCZnG3D2hXXnkQvNMKYSRS4jwRoiVDDnrZEJnJ09ox%2FaTwpZrG2Rv4%2FULkYFs%2BkhBfSzjsYn7jj4KKrVg7G65VkHgiVf%2B2isbBOzzbRV2vlMewdtTV0VjuQGq94R3LzAfKczD%2BxRWE3zUkw%2F9o3Qr%2FOMrX19VHXFPDGdmVtSCKBFkggk%2BmVzmQECDri%2B7lRtroHXT%2FxixAxeQ8FAbPefpINmUx9YzzUusHUQ6NQ36HonQhMKacjMQGOqUBOvg0KLvueV219idO%2Fis%2FDCLim%2FPcUwYZfWHQONlSN1nbGqHqJcXH%2BzrqnTmlJSQ2vOq9Z7uYVjvoXcWl7G6yf7yddlAfAyPAsGYIE8QdHG0p4SQ9vh%2FiKmnDVEQnXSzLhO791QRqA%2BiUQq%2Bpns6u7GtrPOepEhHhEmb%2Bw5x4QBwVN8GoyPvGUJhoenQSDdHdo%2Fy%2BhtzbPO8DejDgCdsWMZuTehyr&X-Amz-Signature=1a7d7500eab3ef4fd9f6fa544256c6b7b052681e518c4665187212230ff00530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQHR5AW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIA%2FekYXizEFQIPmT9%2FeTvlBJzBTw9MxI8whIXYXuMsg0AiA39MO6ZPakSFEdOf336Mw37bJy4bzx4MQFDYJMGamcZyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMn6Z6sgJ2%2BJQM9NBjKtwD%2FLyH%2BOTlasQzLLe2EDLV3TjZp2lfV%2FCYLtq6yVOjk93JsHHhmg%2F9GME5zCXFQnBEkfpN8FpfHD4N2opLx6FLdASjG61tIlhoZqXMRrG15ZV1JG5hDgpnfeg9IOZpWMxtH%2FN%2FOC%2F1sUnfzc8YE9XlLTorXZEjIVCxdA%2F1ixbkFQPNHL%2F%2BTB%2BkyROIefhRHSv3V%2BMy%2F14oaUXp6ma7LLANVTtjUIVgvPHX3slOUBpXeyQNPx%2Bdy9yzbXD0O%2BjfScb3NQlSR3NU8usBLvX6VgwSwpfawrB8%2BwgcjPzD%2BemjDs2BqV57eBYanXw7KzYvfQio6FCdqtRLGlM8PXTYnHGwMmdcawfcos%2Bq%2FEhpZn0jlji5O4XiwuLZSiVQnzFG8qAGdsHheWCmK5EWOORylFBvcp43j9hCDtAqL8kXj1jqXZ4m8LHb%2BNmxpV70ppSuIOUMuk2QP8ITzn%2BHfGEkhvwiN8rj%2BbmEkMWcy%2FeGj%2FTPD4v2fIDUNJQ7isxW9Nu9NRU9k9hsA7naHygMP6Op5YKsdz01T28qmBUz2%2FqxBLLL%2FDVRz92fo5HpByDy5VnIjJdDE8BWWxElB71YNdorpJrKjsKuLrH8npizKMor7hq3Bi5GqYl3ttpbHcOa8vQww5yMxAY6pgFWOUAnf4Tmwdk45OKJNc1ll%2BIprfaHg3AVsGEsDozUV6x8uVyqdlya%2FtGyVOW8kgVqwQGbYi%2Fv40W0uhtOy89zXAvgfJlU%2F9x8N3oDwpFJH1%2F3OmAc29WRklPobz5FWz46R5SaFdsLHbGPnXgBt%2BNbdf4uBj4wbof08fwbYimFBw8h%2FAZC6NLrSEGbNGmFUZvjeILnIe4XdKhPicQV3A65R%2FH8NteV&X-Amz-Signature=ed0418eb23538fb5a0c1f1ec7f1b58d85f5017e2d4787af9624a3801507c879b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=486c280825f1f90f7395315931b9f579e7d2f99d15b46e4337de297e97b624d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=174c78a150d162cff32cb312b80ef70561e264f9878a05c5b79371ece229d33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=9c1ba8b495f962a7fb96349a3c9f9639adb9c262a6e3e24b01f782966f41258f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=62a89a14e013d5a185d5ce2bc745c168a69209d89c83848d5b038334bfe694ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=a2a35bdbd79ea6d17b33aa20555139749bce6892a40ad4736bbda706c70c8b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=6cb54fbc689d026eb708ad0e1e8ed85d16dd1eff426491557e71c9b3377903d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUQP6FX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T051814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDTE%2FR65XZ%2BwWcIhu7KMFqGLC7ImXo3RzGgbL%2F%2BM%2BwLkAiEA3eLJyWyk9%2BvpBnEv%2BgKyYJpF6lMOadh3GS%2B9fkYtWKcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJanzAZ44VRXFiuHzCrcA32UAGVc52o7WjKn3VAbleUREZz41BeD%2Bnw2buYpfkS2lwKKt0J3P%2B5RKn1g8QF9OBf%2BSbl4MG9PB53IdnSAPxXxbF%2BUiQ%2F2Ov2n%2BJ5bl5h1Kgr7KkjXyo8MR5HkzblABKqzfGf1Eo6UHXE4%2BOgDY6WwB%2B0CfswheWoO0G3vu5OoodJKGdQp0bNRkKJGpnIH4YH%2FnlrYkRb2vJmNvuedS3oAiMkL4zuXC0sy8os8OtDbNIpAQ8L1hTMSbgWMWGygOPz58VJuL4ul3mhvE8oIblCczO75d9fw4nCBRc%2B5fVSLZ4JsuLfzpGCm2nGHx8QgcQexsQMnhfoMseoGXl13Io61ti8VPRtezFXj2%2BG0HkRHb921u1YMI0U0ZA5d9L8B35LMNIFwm90HHf77aTz9DvBbFM1lPx1yIV0UeDgYTZc8Fh0NWNfTZ5D3z%2Bzk7DliwyHYey%2F%2F%2BCX%2FwwBbPHv%2BRuxosQ1g%2BxZGAAwITwI9L%2FZ5AEYQnG3ZETBwnoxkKpuBzJMQEzgI2%2FSvQnPld1z%2F8zRPdEqPBh%2BuajnBHUWShQdwujfHFNc6kXU0Jq%2FbQWlcMjv02z0uMwoZf3YAIMWUETm%2BiCXn%2B8n9yeSABZ4blt3NIf269112fsw4sLgUMLucjMQGOqUBa0tbOhbbZyXXIUxk52egpD%2Fxcdty9j7XlGvfA8hlMCoREJS6z6%2FciAIxJOLSXGFfgnddpXkTHKoeD8zv3MwOZ%2BgJ7MvtVflebzvPYbEeBuxq30JF6nKWPfNhmKxPIW8vDQqRlFvrzM2al4EnywbJz8ggVDgiMIARqJ%2FH7EI0YtsDh0ynz04KT8gbkQyAlFuesGJmgZ1ezao%2FCDtBCsKs5b1wK4d9&X-Amz-Signature=f2fc158ffe3127fb34ad031ee539dafd67790c5f70be4c04145cc5e69d729fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
