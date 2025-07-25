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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=38c36cf4284a8111f7029694f763633f3f77261e518166821d2a20d092b8b23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=fc121126aea2cf7e7ac4e6cb86732c586ff12e4f6cb015a23a5f9a3cdab2de16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=696f25b3af06d4aac36388c87a19cdba7a28df029a9c7d3deaabdd32eca0b76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=fc54ded5ce2d3707c91daaf31c6f611e5e5ceedf5213ac79d0334f15731a46ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=c866b1e9a892a27df0c730a829e84754f19a014c5db50bf6a8656cddbee96424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=860d0e2a7ee34dedcc8bddc248dafc92ebee10d493986251de312f6d12b02dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=73684f9156ab9d452e3a9607e5ff3f73ae2b0306a2e46d60d1b16c7eb2265c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=246ed8832e61271a7c3ce0cd5851a0273ce15a555f395bb9a0f5b1bf50637231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=e6e48347c709570c9f9705d07f32372825641e8a801e620f95c47a295f8f63df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6D5JUAM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICa1nHpJvwibwu%2BiGzvbRnX3htgU40880BfcAHPkYidTAiEAz7YwEaXukQnMRBkCpyIdjnhT1woDmripTWf1ESZ1iAkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAaekutioOA4Jetk8SrcAwGHrrJY4l%2FUOlpFG0Lfyx7x4UsByLIIvQmgjkQycCblEloptecu5Pg9K3YfiDUuTwhwpHhRhCSyx%2BRU1jwcxNyyONiB%2FBjAt%2F%2FyiPFvApVnCKdB6jNAM5uCi0FiviPT0jFy0pgMuc26LAp5MJEHnP%2BTScTxZkpInRnDAYylh76yzHiEVDCxBQTTlLHhCK4DFpY8igWtj4yoMdwHf6DBe28CNuooAJXUIxeBSl1gdrVU175UOThyegY5CAJ52xyOxo2gvp8mP4sK2bVDdMiXjg5S8%2FcnMOyP%2BpOxnzzl0yuuMohcGJL7RAXbPpHXCk0PnAo5xSW4p3KtYoU0cGtf%2FQIoFugarzX%2BSOnLw8cY97AiL%2FwVkAZcsv7qA%2F7If7LRWWgmWdYhWI2YdA%2BrQa0%2B0qh3QJg7OliwnCKk2nBZFflw2fojzcWXMZCyx3GOUaLHJVcCR36UUwFpxYcQq7Kakpz6klwEW33h1cmWwn1gt8Qbfgdb0ptpEsbSSkCAENauVefAJiiUzKfsJ1uBTRFXBt6DZ2MajrF8PKC%2Fdw3y5FNPSeFNXhDfbeqy%2BqRthR%2FFh6geAkz21TEW6MmrHmy9GyXeL2gYIqyFN9m%2FgLZk4wJjah6tLhkRUOfExBbbMIWrj8QGOqUBt1O1X5RFNyKKA3qVhFryZ8M4AlcvC9BUO%2FfKmwXujOLE%2FmrWkA10Lu%2B2tePkezv%2B2drGl8UULnWL0meXySuqt0gTpxiQXBGpk54XbPEeIAC0kQA4MtnOJX0ZN9RKayGbp8HExzrUuzrYE5Sf8vzRKZ5rB%2FQgPcLQU%2FwuAI8db58A7QJ1ZA0YeXfdao%2BpLUvGAl5aCNbJKv87uz4i2Lv%2BkPJTUqlA&X-Amz-Signature=4e3aff88fd0294fdd5449da1e2545c739c179a93812e1533517c8a586961c840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGXWF5S%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BEwhdMWElA48g9%2FL9DLv4dwJrN1OcukfB6%2FYAycqJtgIhAIxZfm8Y3PG%2FECM6h519jMTd2RNuWKyYpNur7DnjOVLTKv8DCEwQABoMNjM3NDIzMTgzODA1Igze6Z8VJim4cHSzA1wq3APRca5N88GLzXjnkTK63u6z3S213p%2BjJT7j3xxI%2BB5%2Blvv5HPYMJyqI8d%2FbkeAfEXRWWiEkVKcn9LP61Q9in8Rr6N6JLfxoOyhddxRTXQ7j49PY45vFEliJAPpno0MYZsIFx0YFwR5xJCeWj7cv%2FVTJGBDv4bN0zdgcXUqdLcOcphDZzRIYTu1S78izY4ZpjDv0%2F4ymsR%2FtNKbMcg0VFy9av9md8Pdt4DhJ147zQDQi%2BON5Y0dw0C3g8SMNCllIgYJ4n6c8k%2BYZ7v4t0TW%2F917C15iPWyugw8gP0BmEJBhtqCYd2NM3%2FSpFdqUPupg4jzo8wpFiZMX6uhAFtFUqpn5iKDLRNslrdhaHO1pr0anA3aWfciGMPzFiyJEEjoFr8N2mbe%2Ful5I2RRjCD99l1JU8opC2%2FDkRTCr5TWpVgsJ9ChtkLwHBjBn4hb5U7eBRpQ7xTaK2cAF21iKr5vlMoUf%2BOh4SltbsFAqSGwVKd%2BGmnqdR92nvd27WdiOYwaeOgidn1XifLhkIAGs%2BOaSKeSBGISDkOHGHwAkZd7Dn7LvFv%2FWgYxIJRRmggzWXHPSqL%2BAqhmNWiKLrLQvLN5ZGs2hqv%2FUH49tlpRn772YP3EZA1uOpZRDPoMbdQrrzwjCZqo%2FEBjqkAccvRDNYOmTkHT00HXi5mFRE62ELeaMFYfKAHMX5hHuGqziEKUxc3RztvZBptHrUydz06MvcSKLhONoAPjt0A3qeQbvkhcfkmysrNR0kZRTDqGa5mZdHsY1P67s%2BCXVaOhMGB5KQdkw%2FroPgBYh1Tn%2BgfctAsDPFSX5R3tgy5jX8QTvCjO2jK288avK5gv1PhTYdDTuLovG%2FjdiV1ZqezkdXHD5h&X-Amz-Signature=81ee0336779b18b42103c68c7074c1d303aec66143de3a9339b750bbb8b5d5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=e193295fd3950af4a2c174eba7679b999209ec4f1e0653ed141e358e7115ae61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=61ef9782c47edb3d59d10147cecf2c31c7b8ad393c5887918584b64589f6a715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=69bd3729f636621ad709e1e98e431e78f091207f6500d2f800a6b2a74d4b7974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=5307163f5d5d932f0d9371003bb413b1a14aeb099e4fc59f3720b2a32a06b9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=267ad7760d7d898eceed020d257dbf3a1f63eabd87b1b02b4e17da159175bba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=c34b82727e7e33683c74dcc5919cd365690626f84f581765652e9db3e1783ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ2OYM7N%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEjtCD58eyJxXtx3dhtu4h2WsxO3AY5BpzpssfMM%2Bw3VAiBKGxN358vT%2B%2BnnP9G7YO7KSEEiOIfqWr9eQhcv2Pszjir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMuYwdRg9jtw6cUKnpKtwDSkcNj8%2FQwJnl%2BFD5AQkf9R%2FybBWnpcZzIa6GrMGlITgUpdAYchvmDlzZxdI%2B4a4VqYMyjiwufJdtSJ%2FqkX5qhcF52NzYqKPXIBJe%2BCz6p0Svj6oGA7VM%2FNVpqaTvMYmsRdslS0tq4ieRvnzXF4L1KGiE0zWjRm%2Bm7b87nHYbn21%2BeB7qo%2B6s4I6GNSj%2F%2FPEGG5YxgQ%2FrpygBZhRzMdTy6Wx3XA5InO6zh3Rru%2Br8AGJOmYS5h330B06f%2F4L7GXiaCnAqaTAiWeMS4t1ZP%2Fp5GAAjXy%2FuLpE5jikc8VnOvLEiNQbjrb3roOlRYk60rdGkCjrbZ%2FHOx4JCPiuQjHN9%2F9%2Fy0fQtmvN1zSk59vc8jgV8WUgj2qBE6VJBIahalEwpOUVS4dL9wstfR1CZYIgKN6GKnUinLmhw2WORr1UF1UX05aWRxnIcNSW3rUu01Iajm18X9BjaOvzu%2FTBE8MflyAH1Bq5zYcwujYce5poKhPbpbkCv463aF26SEPzwvSMTRjVVS6ugfrnBYXAAG%2FPkWHLYBoEiGHCcrzJw%2By5yT51A2XNIi%2BEui2xDoFUtRB7SVk5we49UUvmywQ16htXpyh6LLp0y%2BOkbVKCtCnzWsrhllS5NVsUwHlFX5f4ww6qPxAY6pgGlFg5hWzfPIo0PX5fSJTvspIj4YQEvLS0KF%2FthQVgj6KNyIZ1t2XwYvfPFX0VmAZ7%2BbvOsfHFTkmLFRyCFnw%2F0tqCoHHx1jcsYvrIJxUxicEFUO2Msiw7FKeM5OHKBesk%2BfEPI0Y5c9Nf9ya3AJjLbrgJ5oCimyUy9gS25dphD7orGu0IILx022bJatW0oevhlqLKvULNsIPu6FLA0CtjmQi29WvPK&X-Amz-Signature=60ffca0b491cc41724fa2cb4bc07a9de285392148df1dcfe0adc2fa2a1859d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
