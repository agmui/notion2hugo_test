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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=307b597a8e663fac74a11676f28d0ffb41da0e547eb0c9786727d92712ff984f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=dc313b0fa000f92f032b2d0acba61e124a3a0e7e49453f1cef38f5fec1b2988a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=a3de81df8a025f2ada08a1f10dd18e11c6858f1102a82ba3ed2acb14cdca2d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=0390de6e733cba87f095c21b5d1615172c48f5bad4ec4c439a34dd46a1980bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=012ee71b19bea66f74f2f79bc8fe392d3973fec0ff180cb4d786d86c30d0dc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=41b986d6f27c38b21cef16add889806318be233b88c2613a17f8fb50e8bddfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=771e20d7a69534adf5e3953c00095e22c52989645f96611257cd8ca3599310c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=0f0597f2f9485c03556019a185273851c0acc88f9d303abe8e146f65624c7cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=52b3944293a176ced84c459d73d6c8b8c61f2fbbf39764f089f06e876e1e7b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6P6CTD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FLgc1xoC3AR9umv1MesqFvMpP404%2FqpPLaM7vB0ACAiEAjfBZykz%2FE69xnI%2BARGNJNy11xWJ95HFcfj52DJiELsoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3WBeRp0MxQyTAfFSrcA8MLgAXmuuNMexK%2By6qWr0PKtH%2B%2FXG0ALUOEBPqzes67eoNrQudz68cERraW4Ci%2B2ELcq0tqB%2BtfAOD7z0Oo8bzVp26bTOoO3xaHANhS9scEyCq9dGcodxS9k0GIvrKs4npJ9uxZ9VI7dy5VBf8Bj0fxV1nhCWcN3uLvTf%2FIUivw12NK8OElW47xFUNY1pK30fmsk2KrTQhjRfb9tPxalcLxx0yQCcTP8bsrcIGEecmv6aLY0y2jhy2faxPmf6g8e3XtCcENbvr0IcHssLIWa3Mzr8%2F5gG7wFJZAilQxTROSIhS7ac2y4uIA78DXHc8W0wa3FrjeqQMXAMj9wP30A4Vqrl0wKTWWOKveyT9HohRyhf6oS9496cY7LiG0GLajvUoE7BFOSx0XPQfMAXTY%2FG5cpDgVSybO9xWPjuuxqkhFYsW3WDfKz%2FLtw5IdNWxyT%2FSjgBgQriT77P9l%2BgrvdDd%2F50dnYOP2preyUTwAY5hX2e3smM91yrBOt3zZoi47ZuURkGemyfjJ93N9tgQgbHAJ2gdA2%2FleBzu8vVP8jyFBH9aaAEvzY%2F2H6KBhNBme%2F%2FLbOUJF6%2F%2BbHVPQpA3nlI9IGgJrM7t5TewKC8x56wvT8GJ2RV8SL0FQP25LMOb35sQGOqUB6X5Tpl62ULvs33hNACAe2%2FaBfnW66KV3Bm75fSoOoFRL7BeNPoIS7nYRKudEZd8Wz36RJuWt5AO8cPBHOVIScbOvS5iKcpDNSKMmr1RO%2FwpNA0z8V%2BJwoeBMBMiZ8147e6Mm00kjG1eq1djrTSalPfyMTQi0WeWXFFACrH%2BOtOanvETl2VCITh7Q1xC1LKhHV60gFLH9LXPzKRsFUzpXmpRxC%2B%2Fb&X-Amz-Signature=5d2972eabc9cbe8aa91acfd4592f2489246f40da62cf52d4f87cedc6361b686b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FSFY7V%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt89IZAcnAx7jeYH1KGN%2BlNWl4u8mCGyEpmQmBBnScsgIgc%2FvWxZGFvDQ1UZhvZBb%2F2k%2FQ4AFGxUaQJ6%2BHMzPc4vgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRcxddKiyzqYZ6qfircA3lfSB0mWcfiBxDHesZZltKLqjgY6VJu23nCYLpRXOyMo0mzr1wSfHJ3mI1IbOoa3rVOiNKs1ZFKDbnpHowAIYtLpdnnd%2BtKjHBUHwiQNcdaHJdJIXbymmubSQX%2Fd0BXIUhCILtg2TzrSBk66UP8FEXSvYXCMKKzu48PCT8thRT%2FsyLFnouqANuaqJcX89vz9uUZfF8ll1u43OfXM%2FNVxEskPtpo0TY3ZCBWc3dv4JFWa2Uo1SlmKhmqW%2FnZaxM6lgBrn1lhGlhHXiWj3cI65lZxDBEst7S99SbkT4nmf%2FfJ1%2F9xQt%2BOnx8jD%2BDnUYheAuCo8rfsInOy%2BhA1Eh5WO4bjO2TqlOfjTFXIoPURHf2cpufxrgEFiIdeSniDeu5Ptdcc5oUE5DKBHHbOuW3XFxwfLMA42lsf%2Fm0bb6p08P9XpmixZ7zpHWD0hKaHGL91DoZuINLmhXeWC%2BjP7%2BtxbmaBjYbu1UTS5OSeBwYcaDNFginB%2BMGqRb%2FK9ewmluVIF4dsEuFqxfrABhasLqSFafRL9jGnFRrp8BDmKH5%2B3I3h2mmEK9KrNNOMN7aYvgsl85S5iPy5wLgGxNqALZlR1M%2BFiYBOCWsU0QecvSD3SsZcJ8VQULSRVrnDBwEHMIf55sQGOqUB%2FWF3UDoc%2B5tp3%2Bcn%2BFXTHyYYXqbKDiygMnWhAubc1wVSUhIO%2BwwSYn4T%2FVklMQmLtkUkwGZOHPlk8umwN5JfZRyZ1D2cM4CyWAHnAIgNNZCf2%2F%2BvpbEMgh2gM9qyP858PvZtxF8blSMp1nTUkO60bq2e4n%2BjcFUdftKwbMv4zBe02EbV8xb49u40E2%2BTdaioKNKoD%2F%2B7VD%2BfiWY0HF7JsclLZKRs&X-Amz-Signature=d4a06e3e4c4eef6184cb7114bd981dbc81add76028433dd567ee0ecbc2c163a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=194a3ba819c589bf86233605f48e8f9a9a60db93418a9fa13ef1a93b722d2011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=3eae16e03ada4180eac17b315a2a4b86bb05e61cf0dee1436a1fddc0b8b0b68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=fd8ba6259ce9313e9a7c6585e9af4c5a9fb24fa178b8b80c9f32ec996270e7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=6873d1c48a282382e2848a4e4e40adf82ea3482ee2ae360028a98ac15dcd9ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=716f28dee8de67eafea7deb6e3a7a8890ef42e26449d3d902c1d40dffbd7aa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=9660b4c2d9157f6ac2a5fd3e47552117199247448fda486a8b1d364327c80a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=279858e555136d0065648484e62b8ff010baa7a79de3aef68a67fb60c180cc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=31a9373fda213ac3a897d591072af7a946929372d490ba986bd762f579843c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB7QENXS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn47H5aO1uoRtzXgXujdbDJW%2FE2vUDMJPR8SLGYK8BZAIgRNsOvzCUsVqJkS6CzEdyQoOANeowVAFEnzMM6Xl9T8wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQm9iQukPpoVeOCJircA3qY1%2F5bF26EiBPsssb3KjK%2FldtsNYa8Hd3DjSmqhmhO4o3HflYOtYTKjvIr2rauDf3Bl5rLKXVQINu1PDZH3%2B5Ub6UuLh6LSUVdFgqlLYor%2B369v9dI4TjrSjccVkmYfhTyWAlXUclveH%2FVVUiK%2Bm1mWYu5F0ocb2soCWb8EgMsV0FbYHL%2FhEGJZBel7Kg%2F0LHjFDdryLsrZPDz2pBcZ3af%2BP56P7XLAo7fmwB2JI6K9Jsi4nAYy0gWu1LPL2o3RbLrYoQimvgYEKmEhH3AvRNkHhyAlfJ0XquZlbv%2Bdzn0IXyaOfLBz8Qo%2BFZdFwdCqjUetHLIttJvHfG0%2F4oadz%2FQZUcX5CJvF71mtTc8I%2FRNRX%2FoVpPxnSXrjQL0yY4I1XtCuvPUM9R5PElkilxPlcNKfyFj1vn89c9EB4PsA5cJeP5e5qltAJ45kF9II3riF8GWwQI8dV3GEmehCVoJJCDY9alISAVGDEbweA8z50KpBgnbXKVAJpddD2ZQy3ZqstNLDi91K8Qu2f6MfHG4IReiMZHvZ5NhFOPHy9Tdv1bqPbYCHPFEBDSKZhlitY3aXIFUB%2FFkf4s9G5Cr4I3AjjRLq7ZsDjhdx%2FDYyi707laCkKCkVdwLugmkPsN8MPf45sQGOqUB8Sek7R%2B3cOojKZnKU0TmqcMNXIYw3MCvwlvvHKFudpqnzBVLMd3oZcLcf6i6r80REfbXxM9Ga%2FXfRMzlTd280dkWOlpeWn4RW3MQZEF%2Fn%2FA7lh4a%2FxknYQswtZ7O6vGvplJwfPwI7G%2FhKe%2Bfri%2FpXrzh7peEi3pesVOzx9sznnPrhEIcL5RarHynSMNZlFSuFOSKrMtaZEElvZFdH2ceYM9nFy0n&X-Amz-Signature=cacf766177d0293b8f26e77fccd1c6957153e4d67b8e3a3f00a9ccb55afd541b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
