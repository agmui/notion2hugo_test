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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=68d580973f1014c6a6e0ca5e03dac9f23aba59b05eb0c2918840e473870b4a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=b36cc0c36616fccfe8d5bf6034b9c71e25cde3f8792b6b2125ce16276e360c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=791813efd2ad79df397272743bcff9855f7ecb21e117a5413e587727e779b6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=74e5363e4321c8db742d7539d57edd99252fda9010341534073bdd9c7283c7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=dfcb2cd02f8610eb9e7b41721b5cd1586f2131c73aa4642a67d83e85e8e659df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=9c6b04cb765378ff5ad40ed32f85f190d9dc469f95db98124551598597b0c8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=09796c5e373d0201317a29a471fbdc49f5613f4c0ee5df15b61b3fde3c109f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=15ae47ad61c3c673b3665fe7cd9b5565899f7cbd5bf557f251752532f48b2c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=121482dcf6088a8ab4c9b3161be6b3213ed5aedab778b966f07599ebaf58c6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6WYHKWH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFPjOO33NCEvuHFq2toa3RYv2FzAb0UIDVMI8DTQiAsSAiEAmkXFVHvJburHNFqk6yljqnGGwz6xxtFOG3T6UTeX1y0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJtm772sf1pWVc2YYSrcA96kCsZsQeLRwrvo4fahoL1LjErWh3DgRbxveePK8EE1HXPRw1NtXtuKH0ZVLXinwYjfP5eORq1UBsi4eeZtesXpxDWcoLIMg%2FAPj%2FNzJ8fvkh%2FUrMJWvVRHA5uv2GS3BGVZ93%2BNrNOiCT9GinItRdTSrhgXvyumD2NQuPDlJ62WL7nfdLjAMBFDnVZvvg%2Becizj7nQNb1Uw4GuMhakeGa5PM%2FZUJIjP2VyXI4esyEFtr1XlbGyMuzG8NOxF1e1UPTsaPKgh3wCCO5EzERyB6DLVkVpJR32tBeEZxSfakE9PJwZaiv3AmGSjGSz3FBcTrE3Qq4Fa%2Fqjw6H8x2K7tTuEABILsTOzqlec2dAajDUT%2BDul1nwDPf6eIDVc7We0xX%2Bzq9LPqg4rEAuYocA%2FuZXxI19d2aIv8oMHiFopcOlUU4bbs29HMoYqEYMEzNUWKhtDsXwMB9Mdm1p8%2FHGq4M3xdZsZiDVdFHBzBa365fH6rzCnqK5ccEbqOb2bmiFCBF3NuyhoAGYKnHLl5qwXwIT3gFwZSlYQDsyR8%2BOpBmiVnAeGVBwcC2X2xgel90HOBe3ccUje6DvplVyek1JC4Bt%2BrkZP6sF5jbsQK%2B%2FAM40mkHDbjJnfsfYlcp%2BPHMNDClcQGOqUBIYSH810PIVUM8S0fGQ89tKBi%2BjlhHmpOR6EV2JRkFKGq9IV1J2FbpDIRLLGbxjZm6%2Bi5aTB%2BEhTTZVlPqC7t99tf%2BT4nt%2FdkysMSWO%2FqTIaOZu3Te9f5u7nkm%2B5pqZqH4wQlkw1VmTRxECPj9m2u3lATJOinhpSoTHwaQcsqbRw0LTtGqY6oPipvy0jRDfCwNi8DuA1fObrOpm4HYAcZY87rC6jX&X-Amz-Signature=a2863631cd5e97d4b5f4fdb16133dfed25e4fecfd6d4ec36057c447fe4a5e1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RT2MTLS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDYQ9bEb4njHalU9KTjAEx081MAXMD1ARvQhqtG965%2BiwIhAI5rJPchh3w2j23C2EtIoRONJ5P0aLHZQL3N0vys0oHuKv8DCGgQABoMNjM3NDIzMTgzODA1Igz58AC4%2FzgBi8yY%2BIMq3AMaFxDYLZ8yc9pV%2FgHVGZHgdZwx9AWPP3A2wKG5i4TUoeMd5PXK%2BhdVWNzqdmogmKGdxWL4RGieLu3upOHZg6X%2F76NgMIFAXDiKtlfSpoJ%2BSov3p7v8UsxO9Y71Q22KdLbV4fn6R0jNDHxemwD%2FOEi5EonUNyNWr65hqeUpy7i4p6Chl0M0asCx%2F8thHJUMqWUpmk1dHgZy4tTSU7fPFDRwXJuN03A01ST3hS9KSpg6ADz0xZ3S3Suz1v8%2B%2FmQvJpSf1hNYYjobpXAawrORjSEAkYeWGrfg3VM4dpWW0MJy5DPO0n8fngP8K3vgFx4Rlv2XfJYSNnHM6GeNg%2FaH2mX9i9AdiYY5735GsXg0Oy3ccIKz8trT%2F%2FAMyHIokG1il0O6iq4K5uNkfQR3qLPExqK5lCWJZUKX9PXODiYL15qgPSPV6or2NQwTrG7Aweu4tBtANPcgzmco6qKIyWyIKEZm7r3GOhMN2doS0v9dkMtksFn%2F8AMIV26rDLYva2GSY5qkV2VWNZRHK69k%2Bz7mjz9stQYAFs8%2FcEdzbQmHpvKQhrPHS7PcM2FwydojdSt9kf4QJXGTuhLCjE78a1jsTFgHIc6nSb0AuXe%2B%2FvbsHNDbB5vlpkZxttmDgujWYjCPwpXEBjqkAd4W5iIMR56EApNWPWWLVfchLjWvvVYeG1LY6CHNnkmR82ph6rijILAGmkt4cSrm%2FgUWvJXfolj5LVv55AiM8AYYLDUjucx4E9g3Tu31fE9fcK5mz17Z9uskDM38Aktii5bK3CE5Kf4Jafd056RIb9n%2BJC%2BHpXGPgwXFVVyGSK%2Bqcbo2VSicXDUeT6ftqP4XRaGABLvr9OsxCgj2IL968iuiF5eq&X-Amz-Signature=cc20b6ca15cd9c9d5bd7bae4faa81c320027fbc1d134586e99bf0e750d72f72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=ad39d22109a4a7159e21014ee419dff3ec2304cd05f6514f518e75cc1c3a40f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=4ea82112e370357245e6c6f944a45decc96af1d5ad40960dbd5ff42b9e6147aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=98b8ae41961c7d395291b0696eaca231189022e813e48cb8797fe3dcb4da55e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=c94e13de2cff6063fd915f726a1e7ce9d2a7db4bb591653bc787963ffa515542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=46103103c93cc5e71d4639db8471469239b3d7e0ee82690f386d5e6d84e695de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=1725483c4a15c65104cb1f22e64e9207642d79dbc969db275b9d2215a0db344e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HIWFOS7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjyBJ2ykjp1hN5%2BxLxYbdL4zvDk%2Fd69GGW9WzXAZxFiAiEAwEPI9700qPzj13X8Is3jEE0g0j6BQ%2FNfyFjzQk4cfFsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDz2ITLlm3XLpXSKBCrcA96ARSOeguE10St2UEnQaxxc4tCygczNHpeiKrY%2FHGeVUK3OX2LDK8Xtq2hTSJrACARwAFswo%2B4fomivILxN8MvvVp2q2T%2BchBU5n90HZnCnfO2L5Pi1TIna9C2HOm%2Fy0YN09Mvcw25kktpWwuEQDqyY9yKINy1Fk4U3feABhJOUlBWQ0mQwNLOpFoAUZ%2BZX%2BNKRbRy7AfyG7c%2BeIN7CZmhHi62jeUPPxi0eOzSCpvxc55QI%2Fe939GhiNy%2F6hvZpnRD6VrkMY%2FjHhtoDg0fyGkAzvqEvia2xk3ptuXSv52Y5taOzZK5rv2GWaZo9C3OOcui3KsLfcN1AJ2%2FGa6E3Ml3FZ7L7Qff6ZmR%2B1LtWFlwjqgfXIt9YsrW9HaJSNkeYQb461itUjCCrD7rVgDs2zkOQyRAyQ40z5BGm6QzD6BT36xggqa5Xl6w0CcLqBS50Tk6rC%2BaMnAKoLgYVvSrkOQ1X%2Bbaqv8659OSavnXHH7c0%2F01RbLRbH%2FvDCNo8Y1kcQWlnDk9qh8x7y%2BSPIVwVn8LJubQ149btRPg7Huzm3t%2BPxGruUCozSj3VJEsAM7YoCzz3YqsSKcy3scVtrcTBk65bOLCaf3HjSRshIZkSHx%2Frl1QB63Slfi%2BcBkTqMNLClcQGOqUB%2F0QPKfnqTjj6Y61s3w7q58wUgakZM%2FMg52Mb5hKg%2FNjovdsFznbHzvfNXS0c3tuNcu2Sd54z19RZYgrm19Eb4Gx9W7QlxtVLiWyqj6MpCXYlD0i2mi7i02FSmzGF%2Fttgz4en%2BhKe4%2F6u8iGBSUZrh%2BQMizesrt%2Bwrih0Gky3%2F%2B%2BdDaNL0klVDB9Qa167dmp%2FL3HEpbKQIXqzeIK2dqQkzwkC7caJ&X-Amz-Signature=68e33877307126a44dcc719cc6617fc556d1609ad6ff001325357b9cc35886c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
