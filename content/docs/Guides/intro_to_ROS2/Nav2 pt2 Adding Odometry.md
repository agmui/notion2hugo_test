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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=afbce54d4a5721030b74b717594f97e3c63c0a6862268613ac53cf6766ab193e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=70847e642d7ff42af278cc178311768a2889b8505b3f9abbe641af0423fc4c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=a391bd721b477ccd8fd31f98856401d4591f4cc703ff87471574d36b8149661a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=aba29b2f8f40fda4ca8192f188f5fb81caf675e776928c9b5326843089f046ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=dc0f1f5d0117478aa04e1046ef92b19ad236cfd10046ca0e0c354cd9b845ced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=f54ff9bbde880a1c349122f411b568d85910c7c342a6c55a007c2fc87123b6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=f3447f82030155002ea462bd0028bd02c10e2e17c1de69ba05eb9b8feb3c2b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=3586ce46f32419af4e18d98c064c3fb1bdd51076c665b9b64dec0fec65a5f3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=1d3f33a5140fff51ba81afa7159a3aa3172d4cb18d915086fe165e866d008dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPESB6Y%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi2HF%2FFZw6EFdxm3ofS9lSNG3Y7g2V7aW43luIU4nKUAiAqEymPbhLsZ6eLZ6gKsz6uLpDPBWhvf7udz%2FTduRaRpCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMyapLjPsLY5XE%2Bmz3KtwDdzRkzbax8hwpmXF2jWVthBf8k1Eoms9%2FIx733XitATM9JC9Js8gHV3QIA3jxLj7tibbLO%2FzupE4bbEEQ3mzPPhKcsshohG5k1BquQ6mjGSzxsuL73YGYqckdPT3xQyX8YyvzfIW6eal8a%2FmDPdWuQIF5naCBuGLNghP6sZ9Q8xQV2zgkuq7wSPynGjBE72le09Ruk1%2Bs%2BMWF8kWDLM%2BF5%2BNzB3DSBt%2FhqLMHLjog4R2qCZyJUeexEwY6PB9eXd%2BBYVXGDIecz%2BbBDbks4kiZp7IfU1xntr3%2FDBxwGncbg3pq5mo8H68zu%2FslZOs9QwkWUjTskrMiE166Flllgtdc0JIG%2BIkqPmVKR31MzFRffp7eQtefKOsQJhaq1FXCVFKPshoUwG2CU2HdVOzeHAatAbF9UsvZoBrbQlbufqgwo9yNpGjfLTb%2FvKzO60YcXyWxly2JL2I7jXYOVj0RvO31uVR4eTu7fvGN452vjoaKH43O0TBQb2ae0KAd2Caujky1l5BBREwxxdmPGny0q4iO56MPGC3AJ6gx5AaMaFOXVJJQwm6tKZqDGmBI8qbxBvSKTVGq4o%2B2ijS038mrYSfwxiEobxoMGhvb2JxuCrAsdp7qn%2B2yDogGjqvWI40w6YT3xAY6pgEWs6uTasrfrdmrcYZOYjDmlqltKDnKwDIO4ISctKe3bPyhJp%2BOEjy58Ie1KiPBNFtBF0s8k48gxKZqoRaz%2FaaLUCFlCTUFMZ54mjAEAbiLc37t95LVNZAaN5YmXGyaCh%2FOFm%2BoYImCnlnoTVA4%2FujDexX0Jplvuo3YO5iGJQgVW5X%2Fa4LENMyxnDJxbxScw8ozRLkrkEPMbtaGp00fAG8iRPEmg70I&X-Amz-Signature=077682deb149e7b34b3187bf8a8774487be7c5bdfbaac21b1801a9ba39797a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWEUO4I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FnO4aR8Q1erfgFB1Kd38m4x0xo%2FKhZUeZlysTNG3NAAIgRdfi3q%2FLpWq2O4%2Bl1kvX6rXz2IFurJAw%2Frn%2F9CZ%2B0vkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLBimHDGcPbt99up4SrcAzBCPfMVwdCkN%2BRYtgYZlLoj%2Bno851O75s5N0vHjILN%2BpycecLDvQZY%2F1iKq1Beg%2FHQmMIuZfoPGJNc4XpmHL%2FZqWsmhHpPVNtBB2ICEdR4jMaJsFfkJzuZSDdjFuf3WF9CflJ2tAx0vRGxrIxCknagunYml7C%2BdwqRiTEa0vhnxiPKsA0X97QEW%2FSxzHcxXtSie3jp0qcQ4mmEykkz1Ku6cCl63wo6Ai8k%2BWyMpRkvtuV28WU3vTd9u7EJ675V0QC6sQopD53qky9MzaVqTXTVqLGe8%2F1IYx2loFIEF6Wn%2F1jtIQaeQBSqnqzrPkHa9MgrFAOBvmA0qbBFmc14JzIuDtstSqHdUPkupc%2BObQpeEoNkPt8WFTsFGgsQZb4VKJS5uWHA61ApWrrcOJjM3pzfjUE2TXff8E4cSSWX9bZe5jWyEqhTEBE0wmyzLxqNLhbutoukZ8OwpWt3eLmExrsV9Qw1xyxvt690HrtZ57s6YlGdMnp1WV1zNblQh%2FEhhxti21bG8oF%2BVvKtk071AO8xfKXjPN14Lo5XXkQ66C5wJAWAwJSHjhLBlB72c4cTgY82%2B4KSJQBZoMF0BbdATzR2itw1x4QNTWJV6mcoTggWEtjUGAVmmm5ewPMMqMOKE98QGOqUB6UXLG7YESdsPVdQcIfPQ9pIhKSwDDbR1i6mefGgBk4ka1yTMM3Y96aPliEs3ckt%2FlGcLWn0yKKAmUWKzQC5jBCgHtQ9Y1oIGBEpugk3AWxPXJ4r2wbSBpQSWCAp40zDSt3RzDJN1Or5r8qGdZSeNHucWxtHRFXEw1pAdbmIuf6aLx8JiYPhdcwXV8fNhG3c8g2rDKPyXx1ojS6fSKBTBDbiUp%2BgK&X-Amz-Signature=c134dffede951c23362ce33163f938b77acc238ffc3542e661c84968b009a7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=735810853ce1b9a7fd45e885679de3239f32d7019602f9f028746f371fa0d322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=2182509958f60e5959eef6636ece25079e2a905313210744b00ca411b4f52b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=faf70adfdc530ff693f0ae9e81cf0e10f087d45d097934dc239c90fbdc440da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=c028ae00c7323c696a5b5feee61f2d1b23dd86be3c5f92da434fe05263fd8096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=64f9ca5c207a094e39f38c94f9a69c40690702aaba58c21ec7aae0a72dc6d25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=5388f772f7dd32a06a85cecf4733738025114833c3af5173970dd8ca02eb83fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=406a5f5c9f385c3d753693c0430a2fbfd0846ee16d63263b6320313933b59ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=3630dd052ee03dc6a9511dc357ce849c582448f2e8a093f7bb59ce6e2d9da995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IEN7OJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeYOekERjB8%2BV8t7LLIHENBeBtEo9aLZJmk5Wg3tqEPAiEA7vHIOgfu%2BkkKol2y11GWzGb9J5qbF%2FdxESp749wuZ5sq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEDE2%2FPbakRdZNhcYyrcAwFGI6VDF1XlBINtGOLEAhcrna05QX8yBk6xPX7raV%2BTAymV4NzpFJDqne1PtCaR5M8fclX10ST%2BCngA0ps%2ByJt84qk%2FEFSkcCBndiDNvPbSTHjLjPJbxOteRu6zMSer8xcbDgEM3xghQZBQa3jWXunGg2vhVvcrGbVT%2Bmo6%2B6H06R%2F%2FCDklLGh2kCM85Dw3wFEUP3gWIAOqkGVN7bRbZ7gdRhtiVZ4FxBHvw59%2FFOQUZUNUQ1vb4q7G7rGyRHkAUUM3fDPJp3sreOWoMiJIqrj90KrMvNHzrSmFXAhaadP8osCMyzmPDsackJxU%2F1Q1IkV7rzNPsneyqLBehraUEbIEe8vVfVcblMyDLPW90QY8J9mHjpn4yu2kuNQ90pDKrjBrW%2FXbtBMhuJDnvPm%2BFLG1i8pM5HwBeJYN1t6DhMKvF55VxMp%2FLpNYukA9JvXh3O4ft%2FYvhK6sJFn2aZf14TYysFiQrakdWilN8xr1L%2BIINr%2BLhRceWuK4A4PbWYesfAm0fn%2Bv%2Buc5JHf3RbGdZS0%2F3zbnnT3zWjPVT95Dx5znDTj2ZTnRyruW6HUUGjRpDXrEcM7YcPk1QufU2tmUV9dxbj4e5w1G3cmZkMusYDjF%2FSBK6dxg%2FsMkgAjfMI6F98QGOqUBGyCXKns76Q%2B0ynFxI3F2wN02Rtah5ykmU2LfRR3ydMHFTff3VMTJZPp1ePSysSFvrrB%2FtuJf%2BLoZMcdgVxuKKpwKZIZtbW0dePULA3potwPFc0YiM9bGupgpRxcUeiYl3ji1yIbne4BZ7HGqWF3GKEmiA8eryKdJOUaMZUPNEZPpLM4GDPlQZ5U9fQq53pjhr9OZWblKwYveXJo3eWt0B3L9EjcC&X-Amz-Signature=06c3e68d5ca58a80aee3c95f20f6e0387b7996c69f8fb02f3a23bc1180235dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
