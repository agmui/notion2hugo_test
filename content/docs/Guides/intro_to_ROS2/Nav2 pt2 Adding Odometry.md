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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=5b3b85e6cf98f5bc61275e1468856a46d7baa5e4ae197fecf67b19990f58374b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=55a213586a6d4462cc708d5b660babc64fec9a62332957ef1b6385e482e368dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=d3bb2355e2ef524cc324ef6cf2ac70a87520471ff701d88bb79804e107b34a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=7143c7e25f864bedd28cb7baf4ae22f7cd3c5df5354abad15b293ad462768e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=2133c0226a259317a5ed784f9ccf626589ab478ad6e810a980185e7faa10ccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=9242f0ce37bf7fbc8ae04fe27ec9850613861b365e68f23ceb20bd6b832023c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=5fb7eacc36e07e5af50ac2b39779ad366bc44db85815282baf56861b4f364846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=85cfc4c41c6e541b9183d447c9a27bc8e4fe7396db4d75b01149fb1d905ef633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=4d8b67014659dd95e781348e378dadb5c7cf612f8bcc0b7f46dc6d774a65d587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=afaeade850cfd37a9bfe0bd6e32fdc269d769607503790133f0a1d5e5c343e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD4FCMXN%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDNMxU5HAbwrJYzWNGDfx2T0x9qEU%2FUpJLCzjD0SLJ4zAiEA06h%2FzmJlMYsg0k0qTfICRMIujLqn7cSK2poEmR68hf0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8K9l31qlHiGQryUCrcA7IYghtv0ZR97P5bABGsQJlao4QhS0ytJlsytbQMQYaUm8tn5SGaTYs%2FLUnZ5U2BIn8wL8KKS6ye5GaPygPn1ftd7Ozr4qKB9ZYngd7xM3gZ8%2BGNC9v32Zho8QWTjhYjV%2FRsUuR%2BK%2FxIX%2FNNywoFojZzLyhOe51suq%2FcWsTFlEvKXwmPhQZz%2F8UNpGT%2Bg4onVOf%2BdLk2y3Y2dnaW6rWG3pQp%2BrO8gKQHpF4EyXKYbykPhDP3hH%2Fy9nodYqjutd%2Fk%2FR2y%2FuQ3bBNsYJxMp5%2BKYy6P53AQs6RPL339enRRs9Qv34Tjlld3OapnVdzW28MdlEWZVDi2XoWskSzl%2BGH%2BRp8e%2FxNTzwudGhR34%2F%2Bm%2FwGe5PX4OlLZ7Bs558rovGk3iQBO7rNOpxnnv3wCquPZzP8oXMCuoqc4NoCTc6FQEdht7ohnTZP0%2FQQXW7NMEh8ELIIISRGnGub%2B3YLpTDcUtvqA1xqy0zyekV5UREGGN70YSIxG0lysBsXiGN5fxluaCvicrHLS1jEGZ85%2FC7ZLS07rprFhnsoLQLaRoOAEUNDA7xitvFyOlQpPQF0FSJ4%2BI9wUCyYizIAe%2BMqCbwK5CCECwlkxoQMhR7BjyaYIGC3IKZnGgbRUOecuIoNaMNCt28cGOqUBkTeH74ezB%2B8aHDwFOMbQpujAA6zA4GlLyTTUKUpkxBRh4ifAM7rznCmNJ4YbgjWFMVAB7P3vzOYq0z0WqLPwTLq%2FT0lBubwoPXvLEptc9rYvFTXFL1dy3BmOjgDrOLo2HeY0U5gwy4%2B2HxuiF7aHYYZqne%2FO3c43f1SSAwAkkMnUtTPidbfyNh3rVenhecuvrGQK0ZC3pkugNtpAFOmPJnGO%2Flnz&X-Amz-Signature=603f8b262a2d9b80ebab8b8ed64873f83b6e40f9b1d3d6126d662533e30020e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=02bae8cc328a4cfc27610f9679db5710d0cbcbb57725082b006e5fe0ba410918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=d3f7e6872e01bc86556fc863cd043e3267cded064523547317cd9fc542c7c2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=2552b368761658f7c71b45c7cc059c528bafc4639cc06e764d6a3d8e9ec415b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=2be45b7c8ad2088d39433cc0c798863c11876505a689af6f1d0a4dfb08a5dca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=53a13a335b8470111c0cba8e6710b4053934e7809c2e5cc88ccdefef03727380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=f17a54009714db7a4b3ec8d774b4a6bc8a04dd5005bea66e59076b696192bfce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=5be211d0953ba038e235818cee01f5fbfa115e857b0b9e4bc29edd39114c3b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=51849ba379c0987be047c53567b5642346a306b220cbe937ed86cd830bb8b394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMXFD66%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIADC8eV0jiEy3Sw4vDJ7E4HrB7LyqZQtOx7cmPhj79LCAiEA4Jj039sxZX%2BVtz%2Bd51VtlW2TVU2sIJycSetqJpGvUx4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvA00LlYdVcsjTpQCrcA7Kn%2FZjEmqQkd5kpDvgmCb7UOhpp5CEeRtbH0HUOgLCIu64Q1LNC7Ybt8Bd7RFCFD1YRPuspvbGw%2FT3cuLt0LkS1zAU30UXoRqTspKga1pEjeaJvWzYuvWMXHQwfGaRT7yqUDBzrZh%2BE2SetCMj%2Fj2Am0YRE5nn1urX4b4G7OVhrlHKEpopG865HolcBNUPP92wIo89307Ttme4VNVFaiGIf5xVTf6Gedo8fxkREwGbNBCV62Ru9%2FycUdEPcdnYtcbDNo9OKZuR15IzDyee8nAB0w69unH42RoreHDz5iMv%2BQXAlBVNplLke%2Fh2b68dcEMVb4CmVZk9dL6F%2BduTWdXRMtMr%2BBEVA3glg5MEC%2B8yuGb2hLaQL2Y3MEgKyOS5FRp45vTGjZAB1IHn58OlcklRkdWOrj2%2FPkauX1cJxR%2F3sL0suR%2BDmH813IOVQ93UtPDFnscdgGiU3HKew4Nd5i6M%2F5PVwKJAS%2BqlDjuHim2G3GlH%2BJIhxhpceesT7eLOgLE1NwzQg670vZ5B6N2D%2F37qoOQEbQK2jyO9E1H11f%2BHOcMw3%2BZ%2BMd%2BwwV0HI9ctk2NlllOVDQG50YZ5cAbNJQQl6yyijZe17HlG9%2B8djOG3QlPX%2Fw0%2FpVbe7tIiQMKis28cGOqUBqFlvQKCY75P0GhMCnwHoAvRGUWk7vLxdWhNXcPAH2FcxW%2Fsxe5sxuCz3jB61j9C1MVQ6quhA1MQN1Shy5Usn1VwxTDriIrOo7PLfyK5v7nY4JqSfm%2BvOx%2FhowPMBr735KJsBGnCkHG98W4tbt2bBMK1M0jHqzQoCbobn9ZV2OrgWcZ8Y8bUI7N640z6pRRriXBwHvVabs4ILVJGsCnkrGO3X6Fz0&X-Amz-Signature=1f22fca9529185e05cdf65440b6d99431c7ae42eaad396cc731862d6002ca9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
