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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=4ad8b5642bc921d34c8957ee81ed4c471ee34b6cb7f4cbdc5e4a197a348a2b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=cb436b565f405d9bf74473a96cfee84fb22bf42e4a9b2059234003167503eaa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=503494f5ca1eb648b913d11fe6b9963bfb785caad7746186bd32d870c03d538a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=40d536bbc8b3f4801e226719cc9b7a1357bd0eb186972763c59907eda41e2881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=8e057de16ed1f6838da5171cd5c267b6202944b519cc223c46838f8cfd69463a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=bc1461bd9fde695ab1bb2df098421e94e4e3a4fcdf9249d6bfc9865a118632e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=5f782b9053e08e5e81200b1e0ca621960393a01f9d757ab7376cde8a4d85f828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=478041e47baea66f2753d7faff5f01624847e1cc347c5f58b1ce7da5a4b11acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=5c0df49361eeca58c86e3979318ed9bfe1b9ad460865be386d4c27f1c8bc4525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HVZQ54F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnuHMPYEoFxs5I4fZVfGEcFrFCIk9ho8nYIM7sOIfPQIhAJwydt%2BmxpmS1erjoYWCTF1Zi5JXmE4ow%2BwwXbP2%2FU6LKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEV%2BfcpSv2A8hsUAgq3AMNsNWIjHyu1Kn1cyU6Em53XROFd23umm1XRV4geigV6613rybcrfRMWI1ZudpFMzGfqpw6fFeS6sjVxsacvOkw09ylJVpBVlZmij9NXC3mAKBBhn8IE76ADF7aRiH%2FVMq%2BJhq%2FPRkPW97IcBWTel5Ss2J1dHl4Up%2BdiadS4nraI5N6%2FjGqj4UVG5hW23YBzmquT0molNAR3UYe7FAPe1qRiCAmtRIDZRzz8aHGwmInF2lv%2FW0J7DltEFQVJWdQKLGC51jIOOiQg5Cr35Xq7oj70JBJLNh6coNFVy3aD8nqYIiwWMtmG0fG2GUBHTIo5wo90RqiOpaCUAcv40yzagT7zIb5gsVH6cfkSzi18oZjtqhscr4OxmmatKOhWWoI1cEjcT4brzptauGnwTEnGD9%2FmpSEVkM5ru%2B1py%2FEXhQW29%2FjMFMIIO5Q1dhVi5ohdiK7VS2Sx3MMXYhW73SvK7Nk544QUa2I1vCTAo2d5wItObnFUMj4073ja%2B4p6TKiLILV7MaJDd7VMZNh1pwBZ%2FjpCN1k9iNIEbEYFPp45yRTE3wDbvgGkGdgAlZ1RenawU%2FPXwxQAyGTEh1uFXGIHXUPitK4S9nHGDsiQkVABr7NRK7pv5y1bak7r1VxRjCox7TEBjqkAQ9OulBYrB%2FxtN5a0VEI%2Fr6uJBZigeHDq4NFL9Hgoy0hn%2BH6SrkpeQ3xBQJqDgP5w0v%2BeGino2PJQL6XFdN4yWJxEcnoAY2gMyzlqzcjAfpDbdR2TmD2PV0MN9O4FvGabk9CX%2F5IXSHdSCmJo%2Bv2gC2BrO8GNfI2fI5pSu6ALR7O94Ze7X%2Bra5IPjxFSgYg%2F%2Bs7DLk68YzKDaH4kCcM5ah1d90Nb&X-Amz-Signature=865d98cf121e425d133418777418ef83e7ae92dd5e092667e37344f18d881a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLR7KW4D%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9L%2F79%2Brb5Bd1hhwZbaT5kraoERJRwve3AHxLcaqO85AiABkSpIka44ZBb8qIXZm6ErvmGHbhmq2VVjw3706Dta2SqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPW5r0Daqr2b4%2BryKtwDWKMTCAXHv6b8sXUq8QDmEsoMt2XJ2G0%2F1K3YAEkEAD6dFdn%2BzvmbRwNUgONmtsLMjMiYGM65WunWBpih1QFmGDmaWOexES%2B0FCQWept02PoURZvG3mVXVAMosqOlzcGr7kR%2F88jwFuYRvMyNk2gpBA%2B03W5IHFn2%2BrNIrW%2Bdr%2B7mijzdmZU%2FjVW22FzGOzadfYWup1LOx6eazhB4lV8PISMWwqoWVSUxq5h44oGdkYZGBPn1CmNqkK4Xzp6ZKTopyxtgQvg8uvTrU9PSg250b5x1h2ZOdliyojl%2Bcs2okULD52x10eVllksESBI4GAz%2FBi8GW0MgSm1AFNSAB8JcKoq2e%2B5ITdEBglXrwzxr2Ih04xNjNplJr7Xfi%2Fnt3KXp6Ye8Mdj1jUoOdZkMvjX0TvwJnKauFaXMSYofF%2BclJO%2BpJqUk4BO%2BFA7bVZ8yvdkdbeyvauDHqMRZ%2FJ2Wq5cCLPx9Cp314uRYnHKmKKhBdqJOUUvfEpM5SzvZeINmhciACOox%2BN7N3d0i7yclAsfe0wrRuJzTQqqHG1nfJGSfZIXL%2BPppBHM8pIfFZDI3szS2xijysAwUVEiu7L9PmXqVwi86%2Fk39myJ8Z7aWXSVdrjVgMJF0me4b5LJnooEw88a0xAY6pgG9AGTakuI7LbBQOuV7q7elAoan%2BLXfEA9cgiZg%2B0ITXSCrlBJBXX1Su04ehWnyO8JckmGB8o1xbMuJpVvROuIZHynNROPLgdq5d8sfQX2kgvKCLHWTBAixqeqZO2KhSXRy67yPXLjCkIiAwTrklH6v4FUZX8DrpsAP9ylCxtVLN2ALhXBad19pv9Ib%2Fy0NDQh%2BuFdfJCWXz97jXblDFKCh1LvR2ei1&X-Amz-Signature=515c209a29a41c77180b3d438e7c4e90f00b7e06079a1f2fdf08bba41ebd0612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=27fbc16be1fe85d09adef7f14f0b1f760f59e608f5f57dd11adefe1e3513de18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=18a8fb12a0318cafdb1cb394020abe2db54c7301871be95ccf0462f4cb6c9abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=c549544c5ba64a245516d9d53e7096985a7e3b831d42bd853a865dc043028053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=77703afbc269ac74d6442d0ba778c53822332ba12d75431beaf4c3fe03fee0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=e4989a6c7345b54e0aeadbf9f238686d2dc70d6929a5b81c9ce9cc25d6f90623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=12a709a5f41653d1021e512960de613504066871f71ddd52802a8be93f3fb25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=1dd44b9455bfa958ebf46d3f1b854192f095b6add0c436af9f3bdaf9ba1bb7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDQYAFI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpvJV2HWXr3qIt4cORFkl%2Bvbui6g7IgkguhFM1N4U1QIhAJYq9Nd18PQLYkmfDYKqxEmM0%2BgpV2N2AOxfwcqfUP%2FmKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeRytx1sVN%2BXwSet4q3AOxVr%2BxOcMduXUlRfiveTsGZOZ4iyBtYeVYPjQ%2BEfSOK%2BVdFIa5Sc7z2qLlNIPw2wSI8l0esQmxQzDO2o%2B%2FOgORBhqwlmMoQpohtkAmjnRPHRuzUguvr9J%2FaQI9wrbrHQkRUMNbAuhtz8toU59K7E0OUQ7K35SFI2szaSH0tfeINlIf7kqbBPxnaXUGDTlF2dDBuJtZXD48RtBL4aw3RBl0pc54uQ%2Fd%2FEkNXZ1j8dSyY5UmZw5dCATfZHzTKq8eRMC4BBYrLax5I274SCJKkn5qqUB2x%2B8qC%2B%2BUr2E%2B3fe%2FEl4FCPliCqOwrXMpL4KZrJnj1LGElBOt0JL2T7%2FirPexBbhuquJMCREpvoT2StkFo49y4TqqMIswIIaaGEnbfTUh5ER7LDkISYTHPcTAx9AKzZKF76%2BQIiEhHVxm%2BTaaspWuvUepftQ575A8zxyxDq6d%2FSyZHEnes9Cx%2FseplW3rteb9PDUDpLJDAdDYG7MSxpV171%2BQbldkrWVbL14lHjQp44e7vFyM2t3LlurIzOn77kNKonhlBwB5MLZuhb99tvk9XFJf70YxfHrHhGrj0%2FVwlJLl8%2FBq3%2FPf4wRnAxZ%2FzrEgn9e%2FY4TVQP%2FZP4Q1d8dmtUA%2FFuwGfgTV8zClxrTEBjqkAa%2FgJJum4x9YTDwBw78eePkfXwb2qxUsE2nRUbiO9nUzNf5lTycYy%2FBOpjFePRnFzy5DXvCw6VmUTsx3VifYbrif8TxE5tOCpql0aSsY2gEy7S2R1MwSPSnJfH2%2Fk7AfEiAAL88wlbHVY8NRGZ2aRfYItSrSRh9gJPpgg450H3PgwXgJC8N7oKq%2BpT93zp9rWWVN6POm%2B90lhSVi6vtw4c72l%2BiQ&X-Amz-Signature=e6dfcd3129eb88d3163f295b1988ae848df93ba0f00f8d82bf02291995f5c79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
