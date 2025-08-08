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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=e258fab7199cb8a2180c2f4cdf2b6f50e258fb315d05eecca2f36a201fe4f7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=42165c9526ac21e9977b3112603d2fc72d6192b5d697a90dc5ebe2da9b549f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=a0b543e487aa50ddc2e7d68516feff94ca6eac5dd16751af1a08e764fe08e0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=194687dfe9168da87c388bb2225773e6771647cb0fc0696001ea2e16807a4ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=ee544e8bcd5dc51eeec1555124c50a363d313318b89b36ecfcc9775a6aaf4bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=17b3adcf895c1ab38f3a8633c75475c315f8fed56e52cbeb566ef00f66aad4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=aef1e13d5e566eee8b9005aacb427e106bbe474fb11d09bbb6bc1f7a7f5fe491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=f83cf78b5e3724fd7e80aa7ee2d91fb0b1cc1476a2260d3ce5d49190be2ebea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=e663d15b5db6b42ad5beb40742f1e5f5b56b17fb9968b674b90dd57cfa71a29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UDMJ3K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGtRiYsNgKEw7RMPkNf46zXQd325j0pR0wf%2Bj07aYnZkAiEA589J5arCKHApnJVDMJ4tTk63jlpQNSL0VGl3xfEWHU4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnPvFHtfkl99W2yPSrcAyhL%2FCHpJa6RI20uILnb6Wm4llYjiMdJzEFIweWAIhzjP%2BO6uvmQOt9aBsn1JbGb6aUKCFXWq8xHk85DdZXs%2FWkWgGwN1zBvhiTX4%2FKnvQnR0q8HaUrfIfupJ0JfOTK46EdIyctTX28QOD8JM42HjFBktbc6UQh2SHe38nX%2FnztBjG3NDTXAyw1LCx7KlievDQCJE81hC%2B0TklKvqZnb9y1C1Tc879lSQ8rNpD21gSs9SDO4M97wDaSlY2aCv2dkrZg6CK2fLifCfdzWD0ScZt7edWaAnxDSYAuyEh5Lyj6stk350seLVP4gP0D2acdoNHezT3ftLb96MsQLZpqcATEuhlJujOXog2e7KP1%2BkL6KgLoU%2FugYjjramGNqHwSKc2ityTQONwt5nW11nnRJrvEvmFVpNXYEa%2BbhBeG67FqoWbluG5v7pihOmbCly6d5oRkaG4TT%2F6CqxmfmiikGOKTAzXvyYQKgh8g4YuPs0pXYmROsiNG7HgciCz%2BO%2BQhiMiTHElEyDs5caNRY%2BQszuTnP0XQcvoUBCPb5OnXsg0uS4ipqygYDs01ioKzmv7j0rO0x5ACfeP3EXIinA938yjf47TceHLezzrpxT4FVJQIS1Zarr0nXqFCL4v3PMJCn2MQGOqUBc%2Fkfo8EWDMyAyv0RRgvmWBYheVcD90I7DA3zQzl4wiYa82Gy0qtEKaTGvvWy6rtho%2BI6PMjdHiI1i3Vyt3WdFOl60Dc8ZE8ZO%2BSiFjVxjbxGAN7M5XojCBoP6IqrORuyiF5QrVwS6Lv4I8O7VMaV%2BMI5b8q4cgDzTSKb1uNJO5J55wflpNv9O8XmjhvwVbzpNaECNCpIe2ioNjkVBkl2EopI9v32&X-Amz-Signature=1c9df45e2c7e3fca3af3498d7a8d9794f80a8eb6ba09f3d85b48c0715ab54a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3BYTGO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBaueJ%2BHTF%2Fx2onDHeiJSIMpBkDT26%2BV4Ng%2BzvfulZPMAiAJwFObTEgAi8RZGmiba52inuKVg6Y6IsVD0Vi976HMsSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxHPgwPe%2BucLLyFsKtwDI6t1UEAxn3DtcFda5RgxKhER7WVLcdJW4MT8EYPClxlsDTl29HPERYOVxaRCOlqydIIAAQMKDet%2FuyCNm7kTIi%2FoK%2Fh6x32sFMZYQLjxVgBTQX3NgAXZm05qeAMSQXgq6dzF7WjnCw36JXPR1Gk0%2F7Kt0UX6KCEFtJ2UQAvUvO4%2FQpsjmSB2XbbVq5YP2ay9SjAM3WUjm159YMnL4Blk9DNpzvckQ4IlW1mWGcXkZCU7WbLF4rwy4w9IZbEO0O%2F4YKbfl1izhPrzuY6Bjx4Nlb0j66jPlSDLTz7CxanukIoNivkMCcnmwAAtxk0bLCdpU%2FavQFDi9eueErLSw%2BeflImUsyPNwXwugynxOSzUcGwOPBD%2FJNPVd%2B%2FMRFHrbZV1JAWTL6hee9c83IycTAyNm0%2Bjwr6l%2BkYY%2B4BGLawYuTKGJWT1NieJUezuelxvkf8s5bD6MSrEDD3nkaAoQS6St6TE2DqyCQTEf7CRATh5Fhjp7B1K%2BqMYVxlorDOAc9Qa9dKAvCEH9NRYFP2JQrD3LjgvkUApeivxSCCzKNxwU2m9GpDuRaRXm9EXk%2F0g9ghw%2FoGpoDXOBIr9oZgEQMZBjUID%2F%2FU7BDmyksMCLtmI0pK2knljjnicdrQeOQIwjafYxAY6pgGa8YoR1MbNgz8yO4Za%2B4pxI91%2FC8K8YoudN2nayLHrVSC%2FD8kSqeOKRizDAogMKjES2LTM%2FbGCpHKv1pUpyX%2FojlCtyPk5WfQShD96%2Fi9%2BDYbv92RaGf2cp4MYGlj8KzLbMqaPen6PAflHz2wbW1ZG6uTDy%2B%2B5E25l5uyMT2YUeCQRnk5xNc97TLsUllUDK5VSBEJHZANX%2F4cL9G0wXAeCgQySKt56&X-Amz-Signature=4d9bc2e8cf3a6ed8c878c16fd315596b4eb97083cf121907c46f9df6613e39ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=bdeab7402df07ffa2a04263af837297af01942b5b276be453adba67ca80dfa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=7ac5685008a52f73ed262ae90ff0c0d7922000bbaa57a81d2b472c8916263cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=9cc2ad1ca07b0163f67ac4fa03e6ec8c74ee1cf9e8cb3fbd97403ef4faf3e471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=5e1da7ef75c930bbd23b14016bdd22f85037911c1a3e9417db2f5f559f5a8d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=16aeb5f459c452ebf367a4128270337728bbbca4c1b74a8a6b6519210d841c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=9e690ac803b75c4c5e6424b443838818f5f58262464180a17e3277bd8438258d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=ad8130d5724a04892a36708ae8ca6c9aa0e1d1c96e6e7984b56d84089980a13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=32932022b7b9487378b4967c3c7de07a74877cb0cfb3cc7bd39421e905b15d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM66W5K4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCID8Wvp6hZX44V4yi30UuXGWnBlGP6huWU8X8PV%2FZDXoUAiB6WRkE5IRoZgMWDqWC0jyWpbZ0wYOt02T1i417E4ft5CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFY0On21SWXIwLTbKtwDZFcigeHSR%2BcAvyNJRZRIGKDOi75pm5bUN9hUfxJF5dl%2Frdjf83nWvbk9AhklATGgd44h%2Fo4ekcwyLkxpWASPufoCtnbW1xTS8ICg1%2F4G7JXThXZs0SaYsPitp080FWhVsVdztimMN9ES5wewf%2BrHozTi0B1D6J1Q%2F0Z5ZOEYUjKLsp33sxx3gXyn%2FqtRMi9C1WNeHrNYjst9V1PLT2%2FriOYl0kjdOE2YlMHnqJVUnmWHswSjUEh60CL1YVY2ou3wU%2FbelBqrXOSGD5JkwrVGemtV3do6V8PZ0wYhUFjKt%2BXnRrKuYOXo0FTIelAQ325df2hoUTdM1jen0K7r612zUWWFoa8B%2FI5kMawQssv5lvLRmIPVM4X1iOdpjYLTW25MLUpcfFXGAbsKzvVivO9uUFL5OijOVYt5tG2fGvSpFgikXdHZmNQhJaPnh2KiRZv4DSVkUVaBZAzjWGp0Drul5XaxSDxxHCcnVmJ4RvJY0wnc4%2Fa2QGnzQEdXJ%2FGdsnJuhNf3sjA3r4csnXBOjPOdLzbAA%2F4zN1ULVlPheLX0h4HzUSZYO%2BOY1y%2FuwZdUIwq%2BKsRXBi6LErrn4j4S51LMNbBGRlXicyk6jM5rxqURNt80tyWW4PK8E92%2BW5gwhafYxAY6pgFyjDl%2FtlVxg%2FDDXh6oAAakESBW%2FeYtItz7KIpn4Mnw1rMVDo%2BwEM8B9w2N2Csqjv3bSNRjmL8XI4liXLHw6omaL9LewgDkQHGzAfpVPWZrTxGGtLULLayhcWJNkApAoBzv7XuGfYLLL%2Bk92kq7GY%2F3ReNHbziQlyJCdjQBaTuXuHnSmBvdKynHsnvNGUeC0%2B%2FfxIPYNu1VMULaUu%2B%2BaVu%2Fmi5paS6K&X-Amz-Signature=b05edad696a5b2f128802b8f0cd0210939a240243a335f552d21ad04a705b861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
