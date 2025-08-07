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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=0c1cc769069fe0485c2461423b65dd726f74ac6ac7f64478897b431ec398c3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=2eef1074476f1c367fb9f5f4d8491494b473c5763e6046699cd67b335e5d19a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=268bf1177a4436aa0894c690be6d9ff7171f3328028c7c1830727352aa6200bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=7ddc1229bf6c34ce7711743c2bcb7dd388434c442763db84bb836d08af04770b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=0d7ff8ac6cd5b493b40c56faf0ebc1f16f7d7f8cbf2fa3ccdf20e804ef40dc01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=9b9530278f34772a6e48ab28d5b664d1dd8426806716c6fa533eeaffc117185d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=f22949d4eeb468f48ecfc983fd77b396c5d042a6f6a88141103c83d2ac940a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=70f74d36379cce3558d62f3e714a19e8cc701c9d6727373841e84fff189adb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=7ee3fa7cead91a2722138bef79c3da503b9b8e592b59a801a3448acb77d0e2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNSXKG5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICMxe03IFn%2FCFyc2E%2FVWxzBmdGxrh%2B0lyZIyWHGDbxIeAiAyIP1RLm%2FvKg8zUulxtFsvAdy5hUd5%2B0gS8kvRLroJWyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWUvPcntat3odLdN%2FKtwDTur3%2FNBCEWF1h3WBrdKVmbhfR%2Bv%2F8yJ2%2BiQmavEr%2FLkHnrK4Cj3JktRix4%2BERZXeprFUIuhtT1T0rI0hwUTN7nMONKNJbGKDjbwUhHbhsBwmBFhY8Lxc2%2FKj%2Bo9mHSEexoTBz3RYts8bILB156fvV8cboGPX8%2BDUlISwhZBylSpRFZbtKM4cH0Llyn%2B2qouOxKei1KkeOxrIktEHMbahhtBRC5TL6mx1j%2Fup2UapSeA3QGB3py7RwbM9Pq6gK%2FqFum382Dz7yZqn7JbGajmEYAWxWvRP0qCWH6S91mxMCCrUCNh1aYGyKtG6LvOFLuSbuEe3l%2FDXyUmPsn3cmXa1075eppd%2BEOlHIIbvflUNXfW3RRdfK9M9VZnLnYKlsEVqVizDR5ia9Tr7ivxreg3%2Bcm2lddaITNYm7py%2FRnrLkjySZi9ltDrWfW1fMeW%2FFsr9Tno6XkyziOxrBCeSUgXcnGpBa7%2BdsvCFEAhRMniNgAACZM0hw03zA%2ByvwEXkma4%2Fm2%2FWOxavi4YzsCNmyov1xvVscGWUIhWBORo3%2FGG9dYXlqqIlzCYQHFgTwwHlVY6omAcwimd3F0n%2Fnqmjbtk7oRWW8mpV6yTaQCrfxGpS75nHrCa1p8Vrzj3jgsIwiu3QxAY6pgHIvPAHt4F9zb86gkg90jtIZ2kxAGUo8y71cV6Kj4gxOv4ZNMjuK7rwn6fO1FCKLmgU2tYsADJR0b59Xi1mKLCdZNZsfouX23xvULbpOZML6iaG7wNhAJSo27WJxsttdagwcDUX8NWAUykyM%2F6RoB%2FTHXvtsfM3QnqXyc%2B87VvG6Tjut5ZRgwTQqDr2BonAZa3RZYa0ZoHIYJQTPtwjxFD6hp9n%2FE9b&X-Amz-Signature=92921f51fb07325d5437a11613ae6311cead318cf11363f6bdc882872b8cf9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WZNY2V4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFX1JLq5AXAFLYRoJQSA4VZ1nyPIQQTvwRiN9U3d8WsiAiBDYLANWAJK8LVH9qa67Zv%2FClRuyLSLdkpPoSazxS1v%2FSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmj2BEE7QiWsQGpdkKtwDr%2FtiOytp%2FmID1AJC87kFODYPapGOQ4nL5kAkr%2BGAS3v0NyqMXfxOYNzGzsj2anAuX0Xa8e%2FgWFdMZylZft0R3SijDyycaVkHVsXHdSoJXWgJraTyckWxDmBCd4jhBxm1mxAEegbsqzNkTlpoLYpZUmfAQRTUI2Of2hNGukYw0tPZiltyvfig%2Fi%2BQptwFqPdDWwezXt8mLxWRpahUlkhtAT7NhNfWoBq17ws%2FpvthNCzKqfqD94FGDjcCC2HQtatwtZiGjVEmKuEm2Pm1Hn%2BTrjTid2QRFU9rPVmL6o%2FMoD62uBQ8%2F0D2nHJWMR%2BiaFc6behJxATBE9oliRsV93DilWVFM5KFjcawDzDVCL%2Fiz%2Fr%2FSJnNz3LaY6%2B5OCGTezRB2wp7I5qnUkTu4swRNMENgNYS9BxEolfxbdc7dLqCHm16pEpHOSTpaIGATr1McO1no7Uot2e0pHF3KwS6hGCyL7pqfXLsOU%2Bj8QFuhYAEQd9cu0KKpnoAfcSfZheAnLWR6Kn7p%2BLmrp1U73JqJPOCqcyMBpp0%2FSWm33heZ%2FLcaGTGHpy4GO2Qu%2FtY264IBUWsLGCQe3doq0t%2FT7aAL%2FPsJeul6Laqgk058%2BYRa0OXb4ZxjtcoUg1kcyu%2F8GMwmO3QxAY6pgFGv0ZkCvQw%2BAaI09Lk6FRdoAF1ctzFth6UiL6dcIGRe02D1w8lGZx8Ei3BbxMKE%2BL6lWOx1UUxIWuWGcPHweSmXGfEc0j8sGKrrKA%2FaBiIu%2Bdsx9ZTq92MzSUoKsLEM%2FJky%2B76aHlfyWtf09vtOxLl2fChh6wJFcD50uO%2BnqTh9kqFrxzd8h7n2UuDH3gebxNn0DHFc2FipkBBNI%2B32PZb03r6qRe9&X-Amz-Signature=eba94add0ce1783be8bcd69a734bc7debe2f69ede32d86b83a027732ae98bcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=8f240b2a9f2942d3aa34c47af9837315ced21ad4a42ad6010e6c454d02f8a228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=1a8be9ef3e0d5e52c060b0743f3573d09ac9428e7a05caa7f27dfd35f38edf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=7fd7ac9dee1cead6289eea8a2ee42adde67004f8468f38d5507ddbb7e6799062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=c71ebe026cba87c9360f207aaf836db4d3753b27f76d4826cb3db7d50e545ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=735d15b9dda0116695236b4e2961d5d07a24b672a5e5248723d18e7e156ff9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=5f82d5112856b6bfe2c7d1f47c3abe174d19cab327f4181f25e6918886002769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=ceac716e5d6d1958242be81027de3ef6657a0024eab60f9ef6ca4211ebe3c4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=a54ede99e77a990aab00874077a8ab1b4e00d313c982353365a1becf1f6ccc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H6XHIG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCJ1OeFuXICYqRBdayd67ZPYWHVJbifd9qGBbFS8tbBrQIhAJjef2AGF8TQDEym5QiKD%2BHUHToO2c%2Bxi6LeN3EhGKszKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRECXmpVdexq9mzM0q3APUjhrk6BO%2FhXgQume9oHmsF%2F%2FHRzIdCnj0qGJ6m4gUo%2BGsVLXiELjW1ovr4NvUzrGEQ5U5jxWyPWXGTxUY2DSaWl4lwXuVwTTRPImxbgw%2BC9Eu4DRJwhx1RRNt%2FJ78ziMX5d2Xy2fIlQPJwGwLGu5T8uQR5hdHI0yUohoEJzCbvLUvWuNU4HUFFJ7Tru7MEcOgz3n9U%2BapK%2Bzi7xe9xGjXAi5AJvFpxO7ie7AEnnvR%2FwoUKG1qaW7R4nH6XL%2BoxYdwR52ACOhlhy3KE%2FCfT3mtZZ24E92AZUXyl03rw%2FWvNiXrMWGe7GtHjqH98u1gedSOMPM4BibUJw8oxM2BDsDkkDfGE8v3B1l9GtWGBvGVgQymT1kXg2Ui32ul5%2Frfnw79Mm52JREPNKHlOO%2BCdiNKOCX9Vs8eDtw%2BEMS3Lc%2FCl9ybQOEUoJ06YgTC%2FVe2bgW5lGhFqY2XBAS5jADr9jeNsAzV4rxaD29xucPNt8FN5OkcSYZV1Cyadmmz1AVcsUMBZoREVBGExMl0XiWWecguRQYbR6bMNWXIMCSnEva27iZwRcxeeLf4kGI4q9FbszEQn8TzlBa9nDcNcYzu3gEDI5B%2BJ4OgipDTqB6vPwCNA2B3%2FlNo7WhGXV3rpTDk7NDEBjqkAYtVG%2BWzq8lJUWGh3F1YbA3TqjMT9HIe4pjKJRzRndK0kFRAtJrXyzVPxIbO76RjQKDsMtp1ee07s%2Fkd0B0Y2BklB0TIvL8dnL4hs9Hdk9SxQJTBofsTpTaooTpijgog%2BFt0VUXDqhNxSzJgVe8xbxcX92v26%2B1u43FoVfBYBc5w%2FrAZwW5P9lmtNZC9LzhOkjDx87%2FfIqgBp4R%2F%2BdQqStiOhRGO&X-Amz-Signature=2f8fa87d90f34f6ee9089fea33e77185f0eedd78b449eb880da5a7133e70872b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
