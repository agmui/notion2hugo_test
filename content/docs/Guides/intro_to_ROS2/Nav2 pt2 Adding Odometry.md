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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=dcb028648ccbadfa31b5f17195f1025f63739690b73347020eb2ebc3584033d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=a5b1b424c1a486e93fdbc8b0ab8fbcfcf550d5dfb19078310ae6f68a5b0a02e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=bee926c5a7435eb998759027e8a30eb571b1939b2798cb64348a66c7a44d0375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=b64e06e063114c63ffdcbae1fb5f5c097d930cbd5e61ba34c420847575d0d1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=e85db83e500803f5a6cc820a5b952f0a45fbe1b983eca88e75b90ad685de6302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=4d7305b3f279a30b95d38740ecdace34dbfc69f8b5aaf182f010c9afdb81227c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=8e8a6bc2c16204db5ec960aa88f3dd8c9e5245f712276d653d4ef7a465217861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=272a9a4eab0b8b914c34fcae447ecb3257202cef825e39c3550877e6d7fd0a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=860f0619519ae513c6643e10b3402925f7eadf04ee9fc0ac2f577475f0b4462e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXARNYZ7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BPcg6dLzbw5j6cvbeWDlrLEKEmsmUmw1nzMLZlv2%2BYAiAp%2B8XtlqcBsTH0a%2FiY7uCBbhW2dGmE1iUfAgOnocvu8ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMT6VYMB8aIttL%2FbbKKtwDlNVlkbZgdzOV1lW7BIzwZ8DLqlmb%2BOmQltOre5pf5AlddMmQYlJ6iQxFY5ABsHKH%2FjuNmwWNcgYecdvP78STCynMO3uR9iNSQSjYJTPdGPTB19fxaZCUnJupLuyOdZ1fOAdCc88OrVSK4vqq9AN9OT6ks4QW4JF%2BObAw%2BrfjF%2BDr6xagCG1fdhkrhm%2FhxFSyyhFtCGYPZIY%2Bm7dUVRttC9LbCgE2uJ37dT4u9x8ZW8NyfzlnQt6NSSMpGBN9Holbuq2cLaiOnFn1k1s7mCn2jNsqW2AFRJwrGyQ2jErA%2F3AxGA%2BRHPE%2BtKcPTs%2BSVFq1QaJaZ7t9DnbIULVF2CrjXYxA%2B5awbA2fpLQgRcv%2BjaaHHw%2BFPBGw%2BEGs1VMBkZ%2FO5%2FiiWb6ExNyMGtHbIKNaB2yyxXvlOmdZ%2Bhg2NzLhjluJWWF5l7bjz8aJ8LD5Hguy8ZjVOC9HbjHoOkhgMgmbWthKvL9FkWkMX6LQWr%2FhgOZWpXurSQBf%2F1rpsKA2cJueYcg4NIyCTaZ9Iac0nS54UTBfTCljSdxbEZ6yq19tf%2FMKMIDqhBZBaCd5xnNCq9exs9dc7aX0GVEW3BtDBuWJRU3bZi6VHAo66Hsk1bXy6miXfFSkgvA7b8jy5tgw1LLyxAY6pgFDrA2%2FByEHpMWLDnWX%2BdifDsJjBAavKN4s9fR8g%2FpFIBQTguZrgZFeGXzoKuDKemzq3rhNPZTGhPulNZcH3qm8JDrrq6d73dDqJR5%2F9QC2ObQaVS%2B3dGKhcZ%2FhuwP7nJslvyWeXCN%2FNTjrmseQfta%2F4O7%2Bnotc4gVwJhOyCMenqbG65McBZ8rtmO3bMaVLPgVnxmR4vZkw58ONnKocdfIL4OvnyFq8&X-Amz-Signature=25d9b2e5df962989e588e297695fd7adbf28ff6a12a78b0029e25072fd1670e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FBAQHSM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAzjVbrot409dGSU5ANw%2FWZ%2BJAIEHCACYVR6qq4frESAIhALAV2qJPZevTzfacZOJypgvtavCukzYNQMsLGjSOhB19Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzuF6aMjuvjV%2BPI3swq3ANkWc%2Fts9VxAnD3T8c9wKkJKjdNGDp6EmzJOVV0wOcygtsUMelnM8MwFWOSmiBVcHRLOMqO7kvc7XZnS2KFniCuAud0bbmbte3mKHaKx7eUnWDOG5azE7bd84NwlKM8Jl2a%2FnlxuU7SnNEb1Z8SiZ46U%2FosNpg0l%2BHZfShv39DT7QmyMzD4IFPxiV%2FUfrZG6N7ZpXE3Sw%2B2o9DqT2wD9ERZxD3D0lmQZQdNS%2BlL66wBRGc3zLB%2Bdoglmze1E5pSHLpoya07f%2FiNlzLZK%2BmZfmygVoWFoPTMq1L9W2Bmk%2B22hlLnBQvTrGqpg3dPOMdZNCm2nm7GvD8zuUCZINpLDgKsfR2LtDP%2F5v7EoNaK1mfTGNSpoevzayiO4PKJ9iXuxHIRyNGkzfQ%2BBdxPzuhsxt9wntqn8z91AgV1V00vHJ53xPhYKKHseoaKslr%2F4ZbW4v%2Bo%2BFG%2Bs6faVZLhY88B6CotxJLrQNjAKnhMP0lb3d8UNaiUFe1fgUW6tOneT1OKQRJGary0iUOyrB0P618Dqifv5kOGf9ntwYYLFDF12BJ3XZMWSkwXL0y3WDb6gEij17Jgq0CwvwvUKIwI0gfvbPjfIrZ0TbbgzHtlh83ZxpZgt5%2BGqkW0agJkCZzHfDDgsfLEBjqkAcF6NEosMNWC5WA8tVskyjsTTtSaqJViyPuTi060BLtMOPlo0qnmYq7sFsAva6ALRkngWM0Wobv3MUFbthCthgdTRIneBou7074l7VNAf6j1PTz3CKNaQL8zXHxVMQ6cTckNN%2F60XSFyFfDW5TQtx8R0w4nxh1S0nGpcwc2S1xfcloxwsdVPwUWtTmQ2l2tkx5MN%2FEkQkW5a62Dsu5HJYPy9Pggy&X-Amz-Signature=b06c66e8d85a81b1d54b39b712327f202b6d542994e62961f9065790c4c4a858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=26337fe8c44eb8f2791d85abbb6b54e1aa197c0cc493fb0228759403a59df524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=e4ea51561ea0b1051b7a3b488bef25440804e9a58795c856dbd7f2eb8ebf6047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=ae36224c7dc1038d3a35e82d13a72f30626e7ec26330c067f3ef308ab5e70982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=cbccd4c3cde810593a60acc49c8f4d746dcc702b8ce7fa5909e66b5481dce5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=0de8ed692919d9a4a70031e088150550731091f0cc6d67458a6dd1d1b39c951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=d86962fdbcffc87f1a851ae67f2b38789aeafe37e964efa91ed029b95e560734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=50c8f30658b0a51c506bedb533543466600e9ed6501f73b216fabe0007263bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=552fda398d33fc7b815eb60ed38cc4e0884757b0748aa0c71fe5cfd4e68db42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWFP5NH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoV%2BrBAi%2F8bwE6OztJ%2FXSpdgOFuT%2FZgW5KwCHVinib5gIhAL9fjFURjz4M04%2Bj8OqL8kO7LHBxR9N2Lwi5yRuAyysAKv8DCC8QABoMNjM3NDIzMTgzODA1Igz97rUDPqK0ncpw5N4q3AN%2FMiM%2BpUZ3DpHhKBNG69FiR1zIom%2Fb6QX%2BFUevFKu79Cl6wTocM8FeLx1m%2FFeJzQojLXL%2BpUVjr93hMC%2B7oIXy5gxF7jvHNr56K7AK%2F9kQdKv2%2FpsaQADZqhbPIHIhuD1N9iqKtbr1UjINmjr%2F0Vr7ovMzkFzbn0EIFwMk5x5CDq6gJbDLUhaEFEZte5q1SkUD4vkK6Rf9tyfHWCmJa3J5atRTZ9oBxWHAtS2iQ20vx5WNBEpyoTyyQxmjDclXhCo6n3t9R6UMQq4XM56N084yFTht1rAN97ZTNafrgO5SvFLjacHvW1VUIahrSngp%2FToMmcR1%2BO3X21cmVtaI61YSCmQfuMZI57fzY1Y4f9pRSIWR1sqSJNLQC%2BLWnjUfFYxuWPrO7hbeUWXjb3EutoEnGb3jv8qKahtgMzLQ5gqU4IKwg9xYi3x2VNxKIYNKYcF81dfst96EmnFyGVE5JjAqV1Z4dCwM7vPBcMr%2BaZpvZ9Mn6%2BMbj7YHAhsaQCfAVKZzurbO3Dzhx7d5XHbdAfJ%2FnWZ%2FrNm3PDiSOyJHouBmlAoFwwG5CdCOPS529a0TAbUIYciv%2F9ypa9GfSWLHRG8j0pKSB79jQ0LtogUAzJEfb%2FXvk1A7q6FLwdvv6TCls%2FLEBjqkAVNtMaBgsr5xQtqoQ3YEEUcPGKJdGmt1G9MzsQkEPDfSHm%2Fkgs6EPMBPYVkXcCpd0ZeNQXjwzC8iPnd3UCISDbCWNXS54Z5H%2FdNm713%2BgNHPjxhQuMzgPA%2Fl5yCIuuuyWMVZHYwpAKpbz4i3dq6dI%2FwdwRmD45m%2B8LPCBpfXB3mwF0i8bQ3FIqprfTCb%2BCCy%2Bqg1YaRU%2FBkchFbA4QXlwWToj2Ev&X-Amz-Signature=b7edb53c9861f042afd701fac4ad6b41b2ae1cf339ef06742d8afac17dec91cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
