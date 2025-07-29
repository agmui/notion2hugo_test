---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=62b961443eb7854f5eb1137aae05d44c39b369a422063b2742ad4fd509e845d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=b267442ba4aa77469a7d9a370e4775b7fc58758a344713f5491631649e701d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=f447629c2ff1c01f6c33f856adf7a09b7412abed39b4b397efc554b6d2000a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=e92d3f935e66391edd821c46d76176582c6715549296ad50354c145b7cc6a37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=ad03bd49bcfc78344b68c11f6acdd53e34fe9464d227f7b7aa323832ea1b6eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=753d06e16a01e300cf856ebafff237ad204a3cde96fc2a8d7e6e90255bfc249e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=cf9e417ea0f40784c2ff3f5e11718b8c2a4d7ec85da918a3302787ba8aeec4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=ebb658d0dc4c538ef16fe66d3bf8f36ef2dfb9c5f7fd8f275f510fbb93cfe0ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=cfd98c5c181395d44892d3be2f115f2428269c03859ee69ffb527336a97dbc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCU5QUTD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDCBhwWXtX4UnrHv0LuMR5alsB3UKbWLkU6e7U35wepbQIhAOkdHK8rlN%2BSTu6N%2BHxkOvDr7lXNTiA8fkeTtL1FkCyOKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyaqk%2BEeGYTm3X9z1gq3AOOruYA05UW505EeC75Et20a1ZefVHtAQ%2F3piY73cYThpbiTkODyTjlKx9ySJkHrIHIF131YHsOpI%2BIx2XWtoBuqbXG5qnIXWEbEK5oy6pDfgK67GxlHZV57Fb%2F6ju5EiUKzD3tQg8BTb6%2BGL0xLHumLFWi9AsoWOiSnPetfqZneuFoO%2BzFojIuJXXay1t0uIH4%2F02knJYogUKNYV1%2FK7xQjjlAt6L9lBD%2FDx9A%2B8muXt2ys7oMoNBjDFday5FYZ7LnlReZO6bWlNG0alo6QArmAhv%2Fm79s6GrRTPZhYA6vmwu%2FNpPcqnq367u8CUcWVjFDD%2Fv2u3p%2BKTOJf9S6%2Fx1EiVOypIVyWAFMkMp%2BhzZDql%2FOseaTninE%2FmNgwbWH0dStsIuFuEAD65cKvQooe9D98xH41ow%2FLhpNJLZlWdwKCdn%2FbEp2mXszjRvP1rQ4xlYRBwc2r40A9165Bk3GOXg6Tk7ecWHU1cYAKOClC%2FvZtuZZ7a5pqlcGwWalkBe7w58olUUo8S9XqlOKOe54rCIHzEYlNDkYvoSAUWdc1VHOeNbXFuchHUbsq9iPxg1UBfjii%2BD80gd0NFNK5J7fa201niP1uLfLFgT12C7J48pdGasN%2BbuyocKbaqjyvzDjy6PEBjqkARQbh0H%2F1LZTG%2B03fvBBh%2FnwkcOwdo85bEyjIXsTjo1cJdnaYL0Ac1DkwoA5irNYhAXPQSt7svROwlu20czFrWyg05cIzm6hnmYudSLXOc36nUVxq4LX2SJJK4QX6iR7gDa7E9yYhVrSE8kQjJqL7uXJcl%2FM%2FOI4uPjCM5aM2xCY5ohQN9hZpWqSI3pVsnExrvEY2%2BCs1YManALOjhF5INSnWE77&X-Amz-Signature=0529de4113577aa3702732aa47d68e7db1533d5d0c942b8b4a76bcf4d8c524bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIT4CFOK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD2a8fgFhLe6NuaXhELBPVNQX6fAk5jAv2P2vl5hlvj6wIhAIAe7YDBgXwGFOQqHHNyEdBzZs%2BEiVY9qVbAw8QztDEiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYp60qtOiGDAEToiAq3APJ0%2BQ7R5CPYem6Ec%2BrsFf%2FDQoBjuePG%2BsP0ZvjozyQ0uJTatqD4opAbHeTIFXMC25ZkPzztgWxrWXpZgKHpFNtTi9sD3GbdVp79P6T1vS5Jgfu0197N1pYYbcZlauyQT8sUOLkamV1RTxCsY4J%2B31SXpEjIdYGts7zLQm%2BQKJHQwfgAX3b8bJhh8BNhF%2F1o7Y6bKzPL1QWM%2FRKozQU6gcBHHcsAR6a0oyj7cfjf2PKIIDdQYBMMexHocUl0u7g1axsDhgxJ6%2BS6fqYp3DJPLbV%2BMYFaRJJwWk4Nu6S18prjhMZ%2FtPAR6%2FTAgpEmRrX4vO96Crk7vvaXSS3TItrsW%2FLmmQo66SLvVx%2BPpk2RhWiA4jwwrSpUUce5vvx8Y%2BDTOh1BR9jr%2FgIZxxSA3diQzXBUVaPxG4Zw323cIyP0P6wcZN30ejLrkZRMrQsjeCEmotr5OhSNXvRyRLrR%2BLO2iYUEExaRpc34Fzt0DD%2B7ypoVPJXGltSYerMmC%2FG5zomn1pvMxVJX1IEDCYwl%2BNGkk6LA6W6ms4W6LI9Ekl97IVEUIo9DkLZx4NKNB8cMtJ2nZh7Yo8em3G9vTaVm9XG2jmdkwuei8ZyrCXZWNEzm1sfQyz1prZr0Yl9jld8jDDoyqPEBjqkATXCQeG%2FYL24YGiVSK5klqRGHN%2FUROKGVgZN36iTUeERE5r42%2BjDpXXxeynAYUWTmxoqCxmolA8kCQ23KlQ5FdxNupK%2FcD%2FPtBMuZC60uHsbUPUHDBFotpyCi17X95fipWaL9eBoYgaFOhHGJV0PbfAFaBSSX4Mhgwfc4dEnBR%2FzEHpOmMMW%2BrJn72wiYiyj%2Bsbe%2BXWfyEeIyPN8SpouKHkGiO%2B6&X-Amz-Signature=cebfa3df1cde18b20259e45d3bed7a556e8a047516f80abb78ea1ff8fceaee80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=d65da9f49036ebf42184cead3b8076c456bb67dd68b1442620a23d0a610524d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=45a79d9c9e07d5fb12bbe6f1631db70342fd95d2229497dbdf0b47cf229b737c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=b77aa626d15e2eed8dd01e6e1dd18c03e9b10553eb5822cefd2c602f494584a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=09cee4d1107ab8b107e04a1299f1ff208a0d5e46ac73ca1e5a74f2b9bfb86d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=8555bcbf19bc25eaff86a2b2022e198735b49ab4cf931b887fa8c214136682b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=6b143b3d08a4e0230bd2a1923184067d44340eb4e4ed4c49b56a4d94e8fed027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=8d97c881628c962e5ee4c86a0d566f825e61cdf217bf2125613e6c134c9cc4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KA437YT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHidps3m7pT2SFTH6xFgF5Y%2FUiyeT2ZaJhQAt7lEG5pYAiAscRudyEl23N2VKMS3Us6AU7Oq3EN6c05%2B%2FVhfdmv2dyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrkvMDWrX4XQCjjWNKtwDXjEh5iDqsDFy%2BooV6Z%2FcBvl6aDsZGJ1vprhrAKsDSPw2FlWHSXImShnQoxCEcajNZvJFNOLwi%2BxhTDzHOEuSXa4Ee4witmmM2QLs%2Bkz7OljxJpcjINdCcGjqQvkataqvbIejYwHiPkALAFroTVQMHkBheEGtz1B6n4VsD%2BwyzgbeqJm%2B47XYzNa4m6m4PvNqeqW5cpI6KnX8byv7iWf3aSK7aW5YXJu8a01eblV3DAgZ%2B9P%2BXRUmbECcgBS3HQPa2yk2Q%2BteF3oX4JRb7rxmSiJ9W9ebReDa1sZUIpueP%2Bce%2Bvo%2FKdsNcvV0yQKjWN9UdvX0%2F4DZeWAOz%2Be483RdNUsCqZfY0tCqRdgCJCVM9eKxdRubpwTjpV0iNQMb%2FTfJpUKi4n37l9VyAAlHFxhVlurecw3gH%2FOs90mf81Xse7ngh%2BFlcD3xnMFWX%2BZ1E3JSoTHEvcStZ0vDpihR20fag9nA3XB4IRBLKDCqXXZ%2BXULi2qRgZNVwNu%2BL5n6GPcfSMuBAYv9a4cpInLvPbe%2FRck2v1Mdvt5AVuzzQ3kaTbpQTUDLe9L3hLud%2FxSSL3zziK3Y%2F1VcxmHcsu5grVnFYSwCYHWisXWsKT2MMdufyxeJAa4wLA13LTvgKDVMwzcqjxAY6pgHiMAIilUmCAKKsUkR%2BOCv4KN8%2Bj4cZ04xBy1CpD4%2F3vsgzYaXVgIv%2B3gl56VvE9KtGzqQ9rngoC8fDY3iwI6vD%2Fkzb4O0jVbvhckWwbGrGAvUA51ibsvGIpOZvWiKRYRvKqGQLD7qJC0MdPpwmIrIfTPUuwEmE6fCkh8zkkRVo2VWgYdomKkn%2B6f2eV%2BpgSMbcjnFiAhEUoNfB%2FkyNBQLLX85QKI2y&X-Amz-Signature=c1148f07039aa1de866d340b6eb879b602069bb4dc7182629c14ad8f4088fd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
