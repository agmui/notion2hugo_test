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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=e9f45694f0aa4d360be460370cee93979217108f77dbef9fba8da6bf91e2335a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=4a1189ea7193cf9fb8d46f5d70822fe7bf70ef78295d1a65f6b18717e7608063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=c99777e4fd488f5093017cff109657bca407c8566e5e36d1f9739c2ee2c37534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=4eddae2e4fe6e20e98055a3cd0eb0515e271e42bfacbe69b3889d69865c7dbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=42b8dc71ddb608725b59f421fee8f9bfee844b9cfcc73fbab0f5e918e897d963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=4c5ad7913fb1a75a986c54df866f7139c2c54fe70103d40a1827738e0b572645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=2882cc862c5d0eb4cc4eae408f8750c26da04e89ef6fc4327d9d7a57dacc8843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=0c5a17e1dc3f8c7eedda0fbc2cb0830ab00aa87c8c709428b0e1f4d06368428e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=d7714e96d8fa9e31dd6101b6c7482e91e79d310f37182f20afc936c072d07efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655DKHJ5H%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDPgf6tj00zIoHgmb1Xkco8%2Fl4Qe8Fg0bx901urWjRpMAiEAzTJVy6m5oDb0xJ4sFOt2xfJaohApoK%2FHakrsA6oH3aYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTA1F2h0pLxun153ircA3xjtVRCihEPLzz03RiaauZYFn9GVV6%2F53gbvqIv2gwDjP2zuVB4ikwhqllQAP7t6v%2BLtPlaKR78%2FTlWB9kteMGMLsezgUjNf4wLr9FdHhSglUZ9RiC0q7l74dH0oynmhjM%2Bq84F9oV21GhVAZkuNrwr6nXbeZCGc509dmgm8Q1uJubr51JhLpLwPvQcyz41VaMsed6C6DHFPMlPbLncbuSqBZaeJOoI8Yu5ejuc8aWJ3S6LnQvn6MCnYQ6Ce%2Bx%2B0ZEDB2%2FeVZXVx0j6z5tuJ1Jn6XKs9TbrfusiniEre9PkRh93b8TLkwJwFbgUXlZyzrMdVhZoTFCdId69hhxrmM3PoUIOJBWhRK8qfv7jH2DQVZX29V8oC9C9Jxf0%2BiXfCxSONClPLlFerXkjr7zHEAiT%2BPzXur%2FRmIgo3nWjXiTCHMHBOi9mjyK37KSrbBmgedf%2FVBbX0PsWJjygy%2FjArrQnywS51OG%2Bk51SQ1Pwu3yMcusj7WiIEjPmpOp9qKPyNUnHlr5yjIrJlOrGqM5engQogYSIB5nilJr6TTztfhF1XKcegxlpRvdh50s%2FvuJeoaLFTnENv2fE7MysRQSoI1Im6vRvrMAkPXoCZkSDlZbR3UA9DYyLU1YdVxYcMJ6Tm8QGOqUBA%2BiEZlCJAKwrVCtCq5EfnyNHNHmC%2Fuz9%2BmG7xaYcbSjK%2FJ9mXHget2zGQh00mNHhm02QinFsnbN9rs3bz2Lj6IsWKg308nhtjGMMgY%2FDWSxV5A4k2exqej3R4%2BxGQ1XvqymaCHFdOoBQYhIP8p8mczIV4mSjgh%2BPHdolcjYXmOjqd58LYn%2FvGOI8YeWYPo60vN4DFWuFsPmpIIlpu4fijhe%2FKTdS&X-Amz-Signature=d35625a19f027aa834eff5639a4306b4bccec687d3738d15e660ace71527ca5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U5HAK24%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCzkvnMK%2FfhlcM5xqcCGwZrAT8KloeVdk6yKQk17N7yDwIhAMuDCG1OiNpHBQ6Y2qvxNHXTe9%2Big5KZmK9I4TkA0x2OKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1gelcSMFvT%2F5t3Mq3AMuJb3Kplo5%2B5XyY5DKTI2jFy27cu7eG8%2Bll0YmtoFROEmWCKxvZiygZicLGRn%2F8%2BqZf5gy7BsY19K4Tv5Wp4zZdZMlfLqN6ko7YBSoE9xfAOJG%2Bi3QXoQSIXiS5TGw7o%2BrRTcQqZnI78YDQ8NDXIQ0tAkA1rzW0hAVTV18CAjQv4sGTWEVauiSPWKkqerwCGB4WLFwk7TntK%2FvmRaz7XoUcssVxYz%2F7rz1u8rSg87XapqtLYMhKBkembO1Vpuq8Ms%2FF7Tsc2oZDMCVK4v4jIYzDi5cf4PvaRkJr%2FeVLbuq291jCVyK5eaBlN%2BVVygoz6ufiB91%2B4V4o6MZ5%2F4%2FEdyl6kDIaBVolwwT4cGKmGIFHZmh6LxT1oOB54msQdXUfUc3elTmZTN34AaZ6YsPvEI%2FhuwdPXF9d8coHBVuUZluGU8vphCnN7wiH4X0DuN1E1XiVVc%2FS6UBYaCkzf%2FHOQpIBADifU%2Fxk8oF27jgqAc4wslF4d9l0w5cQnBi2KeW8n0rXW0pNWdyYaYLDMbW48kXT0E7Gd8A6fSL6%2BwIYrbaCC8yh0%2BdhLVLVJNgFSgPuGSQN6mQ9%2FUbiNSfnvf%2Fxt4TzBR7NBNRYwbcswgIjCVnCIJggvscN9%2FZ8gewKjCnk5vEBjqkAbssSlyBM%2FhpP635dm3%2BOTx%2FEjRuuJuMwW1QWcXLQG12ekVbd5UTLym9heomIqcHdOV7CJs3TW1lBP2JQmiFcyOSk1OXrKAO1JYGmS%2BEy0FqWGiWcVEMgmzgxOAiU1LjE6UPtEbUU9sbtVQSX%2BNpK8PVFoUEMEsang%2BuRWvE2ejxpaOeg%2FgyTGx%2F6PRrnb%2FOvuqmM0wd8JYHYHQOsjdZ1AGN566E&X-Amz-Signature=bb9cb2d54d28848f656b8ad7537f912d1bf4f05c1f74c64a4a35a0325716427e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=00a61b8d4cc63e1c141265165ad8acf86f43b5391a5188455e8d71adb3ce3dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=5a7c8e8f78e42046016b90fdd780f10ffac42f022452f71152a55a6192708e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=0a66d1b16c74f34411b8f67e9b223d9d268fe88193b12d8a8703d43cea9f5f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=fba97a28d25509dcfeb6cb464a52ce89a0c4db5a2cbcb112ddeb8d6c405ba32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=59b651fed09e2db523202f939224598cea50953618cec284e2dd4e68cab90c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=d7b6392f0ba09e9873c5bf7b3318e7ab9f19eb00fcaeb9f4b2f3be3a5f74dcb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQQFIOQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDMZLO1yeTACfFtLtKJ0wopX5thawwZ3gGGFMblHZGCEgIgCLpwLJlwV%2F0UDtUwQXFjDoxbQkvfa%2BLnfop6Aes9c18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXHH6q%2BWb0he6ZcbCrcA0bTQxaGrQdgkZbVy38PiWZ9bnhIp3tPNqABmc7zO4LJA447R9BwJnwxkIgB7O2lmP6IGwA1MgqdYMhzvrVecPxpUE8rwdpBO7AoAmR0fbq2%2FFaadXP9jhygSn2IhJd6zgLKiEN8swt9a82nxU7M388dnNLfQ3sqVG%2FxnonisigghSwy5E7qk7%2BnZUnCMPkcnxQapYVtOT%2FYMxhZynLs4HeN73If8uFt3zHmx6kwmWnYvEpO%2FYMe7Ovwp4ceYr9o51GJb2zOyoMh1i2axLNeg5iRpXaUskS8Fo01tZLmxI2SMnOHR4l9zedAQ3ME%2Bek0HlPgoxp30ZvxokqBMH8aqE%2BurJY5TdhBMZANLYBqk7pp7AoHPt7fTJi9nuMp%2FnZ23rBeImFGYxnJfZxZlyJoyhJgd4f36H3%2BjOCA%2F5zYwdfpsaYenFY38inEu4peGXnxyjf1%2BpZ4EcnmdjU5xfk2IJkO4a2dmgtJ4ZWY9q9heNHJ8aI%2FhdIP1Vb%2FP0FapJlJk1BXR5y0t%2B%2BWa%2Bz%2BJjuUKjDWrncx3bNjPd24NLjJ0vjZofM3FMMsKoIpWYFRa4BcsnJEfaTXSM54VVgV%2B7m3IT6Wb81d%2BL8VNTNM83tf0L0JUOGgHsobBHe0QO64MLyTm8QGOqUBXBfNH2hYkdlsT3ARsqHah70q4c8hYctqCj7tA8DZruaw%2BzPZcw7ph6So1BDS5COrhkIPDIEaFOmuw0AKGdcXPPS%2FLLKdI%2Brj4Nz3AfGHSRwqmOUnaMJgDwOkbKUbd86URdSp%2B%2BgTok5pccEzEyoBLYBXPS%2F8R4eSNBt9nI5m3x6dIWMXYzJ1M4KFg86s6IsHmiK%2FMhSTTTzdg6%2B6Z5syEB2p8WGd&X-Amz-Signature=37b6bf7b05813e641c5e7c0cd2c8a3e3d49a3aedf636870f7e80fe15ba27b69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
