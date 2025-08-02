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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=866b46e731028ecb42028e24a827f35a9b63c5ac7c0f49b8d891901fc6477712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=8c9166e48433f614c42cd3775e167076fc1f42c592285eaaf38d73d6d19a6f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=8bd4fabc9fadf6da3a1be7fed6558e6e36f0868d927d3dd4931ba46b34bcdd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=162a7b67b5d1dc0f432f87954f3669e086bc8cf4765373402c41c66d157348a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=3bead878ede2fd9d246dd17312d16fd6bebebc3900e9308a89fb0edfef420abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=5a1238e2c8b2a0b174431d5ab6b3566f9976ba42076b4ca5970030897f7627f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=311df8d35baa608d67e2f59251cf6d6399ed7c9fd320a53712bb98566bd8d4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=388dbc9d7ecd28853b2229331b8fc9c8f65b6a10ccdc2cb76cfdf4888cace3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=472885ef8e144dea0a61624788660d5df741a8eecaf4d2a3915d79d22e1b93d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LA2U3SP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQBkDLGH6JhwgYC6yXAFBUZdaWl8GtEZZDqKXsxavDWAiEA0WMTpKDNe7JItHJ5yiSEUckOKAEvwuaJtfhWxfwpoY8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXrcovyE5sqxkEzCyrcA9%2BrnqQ%2FDokaK9sSAsUBOJwHtbsiMwudOnOfv6lXfoJw9J7kd9mMqdA0t3JoA2fS5X2PeD1dXuoz046WpH9hjesPAET0fw62Aw8xajpiGerR9IzUex4i2LItWfm1MjTL3uxGIHRk5UMegu9D5qymc6cvRAZioPUcHRBQ%2F81RJp16sjiaws7lzhJzUG96Hq6Lg%2Bbvch2ke4RhmHKcXoqn9HE2%2FScKAF4NVGbBTNc%2B8%2BR%2BkmZBr2Lju%2FjhtCf2sugB5wbHmkundds7uf%2B8WVq9kd4DvVPJud6ZN4uxaBu2Y2S%2BnkaDM%2BQFmffSET3gD4tzFHZcQiRdnqApreqNvWFw8jp1zCiHlgDrrGxGhpRm8HhvNgck%2BnXVGvj2XMAkqzOWclo00kFDnrIu6n3XKloYVGRr6Ohq2Y4O5IGY9HDWNEp0ApwZFwNi43iVPar42um%2BbeQhU4IS98EeZGHFLLe873JmhJFXBqs0SmJYmf6K2x743HUB%2BrXyK0ZE8jylJM1bOUVCkAVKewkg3n9gtmbCJuMinwSl%2BnIocdBeTMxKL3tGEAwRYMDc0iuDrIrvtzKmvzjwo0y%2B4iudqpET8%2FN0Ra7ULMWChX2dkhICdSSN7o828QZc4NJ%2F32ldVe3DMJvLtsQGOqUBNN5%2FlDgJlJgtQ19PIjDxKBMqhMdCNra%2F2CQVfHjPhn%2FZ8Woxv93jl%2BjSRhAzVaMYjYuJvLEWGgwxNr78KBC%2FfmMIiAYI5UW1hwvroyiNZWLR8EnRQno6SFXUvjJJUJ1eQckxLDJJtMNOBti7J7PkhMuUUUqStXmuYUZPbUjsuZEYGveg311Rw9OZjyHN3DXwgpnqE%2BqHRRapyG2ygJ8WZZCIHGdz&X-Amz-Signature=67cb5799214b47f28f06ac0bffdcec4b813afe635cd95609cd1104133a32af7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ2ORDP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjZg9b6Zi%2BqbRVV8oPiRCPuuTKyLJo0N7IuF3QrxaBFgIhAIvAQXaLzKfr57CcoNbLKeTdxGbbYu08SMPi1J555r4BKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8JbBvnjzMKdxzGHEq3AO%2BJwdbJhZMaboVz86AzHRYp%2BvII%2BeEOmc6poLuKRbPWS4MvC0vMVu%2F6aT%2BUVIV%2FJJxQfSqPMRYVNJ%2F%2Bq7r3H1o2wjuaIyDAtxDGe7d69rw1qT8Y1snw%2FKpRnGJ2sZvADu6sNajRwF%2FzsQ%2BIbwAKnd9qUuCK7GSLrfm7ntMySoNvD66kO02HpmbpA9eThG%2FaulQdDPYjusLuHJJVyiVfIwApPpSWTgwS%2B%2BjCNgnpCxvAPffEl9C8tEp16TGOrW5o2eCvPmKdLxFwqmj3n7hJ3u3RkhjXIvHmfECrANc4zpJYBLsiOkLrweDXMryt7PiYFhlt8gDUCxri2S5p4oh%2BJKb0OR01F6olUr8qUoSg0cRTTnNQaJArbCLkIMbmfr8UcAsQViPSucFFpdSCkJ62un%2FeNiV4CPqQT4lG1RxNugekw90DFIZrkCyNXa3o75wIdzhZkdP%2BtAZRwcp00URxiEqM%2FGw4nq1jD3iO2yMXW39AmIjko1lKWyjyDfZkkcflEvqevxqAwVHh3UP4QscNHHQDmXDHHYDjTM2I7yafRhwLMCyVo5fZMh6Is%2BsDj%2BKEO4%2FbHmuCpxGmtO7%2FJoGHKN%2Fbf9Br14TahfPH4HnhScvzaKnnrA%2FkTwVgs6kqTD0yrbEBjqkAZ%2F0pOrUPNfI9Mecf4916KcSABpCWmiLW35QOZ7Z%2BxbPsxUqFS5%2FfSeU0aafCxCsSQpvYVQGT%2BFbb73%2B1rKlfenBP0dOb3a0RfFLph2z4XsDWv5ODAGmgO4x10jOlkElb1vgGE3LiMb9ggndw9dWlbSHVGhottk5pU4kkb%2BDS%2BbpLhgyXu%2FUoLqzyzudpQhkZtDSjwjXLjIzd3OWyGhu5LnVTGLW&X-Amz-Signature=95fc48ccc38f0787ae5f5e71be1ec634ba62962ca9592ee50bc2ce4e295d0074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=6cb30c9ccf779923c38126f048f22a554be57b0c042d7354a65a0fef9c343a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=451a66cc527324cdaa41dc96dd473efb1bf15e59c4b08995dd70e893eb05c8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=69990c9aeb1ccc89776a44fbc4a7e856680cb1261964e2605d54c721be236a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=b6bf0a5f781d2105339b2ed5f511a6b3663ecef5c56e27aa3ad7befb198bfbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=847162672879b6942b6f3023db632c2a7c727a2c012a0d2d0d1aa20a124c3211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=c7b6ce54e0942772a91e8ba8bf23cf6286d4fa5b36fe2bbfcd5189d81cb0c0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=1888fc041168052b8152cd6090515564c8b95efc96306651fb858ff6bf91e3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636G3U3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5t%2F%2Bz30nboVaS6A5%2FsfoiKMvHYJxWYbAAT%2FFsPZoMWAiBFLkt%2BoJyLw0aZ9mbHXi%2FR%2B%2FEY3796V0%2FlosJrs9YxBiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsi7JAVBUBuzL4b1UKtwDsHJk5c%2FWi5KXNgeiRXc6GQ%2BT4%2BN%2BVUdhAZdhKUZBcrctdN1cULUF4aJWtFzxBgz9RRV61zU6%2FuoJlWY29GQg8QJX%2Fc3fGXuBKB64ScygDM717PdHyvtp1yKMUZJThD1fm%2FS0rba%2FaT%2FF%2Fqb2nbF3C3EeK9Y1TdI7f9WEk%2Fwa6GihXt7Iqe%2B4U4QK0qoB2dugLO0ypHExOmXxqDuotumhxG5EkPyulb4yDEIYXWTMinXzf17DKxg5r6%2F1cDM5CwtEKvwCFA57gWnZ9GjhfmVhVazc6OIjQEaxa%2FDUn2quCeJ%2F029u5h2W5vxMxrARDzKUCBkl8xYS7uXVOMGa5EbiXJtnmer%2FVyvoKbqhmLVA%2FxytZhQ8mOl8C1o2cyzd1CaoZ12b6y8RmInod%2F9QpmWNg1U4DQT6ADC5NZ3iyhxRRJ%2FiBXISXf2lg2dVZr%2Fp1YWeFaVjdC9FUQ0bEPn1Cx37pc5tAPDYfKGD1Hgg9ttrMx2VmRP2iWuLOrYduoZHKKOZ58LaWZ2rc63VE9cWo23CVhjY6SaLRuF6heQPqZTkMmBJ6MFYomU6005Jkb2A9I8lN0V74%2F8%2F91EsurXW5UNjR31aAcwp6RdDX8oBk84KvBcp%2FgH%2BYksefyhBEa0wncu2xAY6pgFgHmXIi0c18JTuNfv9QFpg9XKO57clkxtX6kCRyiuAENtz4Pbezaaa9Bp2g1RRgqgO49HL4ejltaYHP5D0G7Z12djRXyIfAGnMPb9%2BN1z6IdacROvS7r8YaPK5hWXGHvY17kVE8JnSaXPurtQaFTDKaF0yYjWjiPWo1xwMRmYcOiY%2FahsbwyHxqxRAVOggxpHZO25bs1ZRKUqOuGL0TQx8nLsWTPrG&X-Amz-Signature=e631fb72e0e0070d57cb01909a27ab39299f850a58f603f709e387d4cfe1d06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
