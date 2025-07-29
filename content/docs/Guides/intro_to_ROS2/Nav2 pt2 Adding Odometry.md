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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=f0388a7233bbecdc5c3feba63024f8d8494706f7bcc18982fc6bca0331a3df50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=0f5a677d98a3d35c91613ce3dff381fae430139a43b2db0f2fe2508da27776db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=20af2edef1d0d65d7edf6aebc5d507de1c4d563a7042c5b1583739d7b09da310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=cfe701dcec4bf6c3f497f271eff26405d26c0c8b5972d0d4c136da0c43eb2cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=ac651a4d95027dd0523210489ac2e6c0010630d40b7aaf119da5f05709815bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=2a33e915f3f52b6a2dc99178477844151f5261408bf57d111a73ce2248898edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=d52eef78cdfe21e77893cc4fb1c7e36a37772c90ae8f2d4b9b98f4676b948a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=26b9d785bda41581a86b8993e41cf3250f40a722a0b027c7a37e934f7fd8a288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=567e16f817cd87730f1649201c5bacb2a08ee18b6b9ecc0a9a6a3a285c86f7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZ5T5FA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDNoCbGyvmEJgPt6I7fUkhjWiuCw8tB69XBCgfGVc8XegIgZyuGQIzZtSqp2ii3SVBanPodmW47yPbVp%2FI3zPwl96gqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLM4DDVMd9vuWw%2FaGCrcA4uL%2FfxB1n1njipVDdHZww%2FuqvevUH7Za6Kgis5mhEll4IpE6PazyWDNVAvLfjTd57jV7NjdButqjVvXOSusPt%2FqI3H%2B2HPJ%2FsOUvmuvPKju96ekfnpbwrcuMkUcqEzNyPfknM3ePPa2JTxkOLD2qmLgrDtygm21OeIt92VRmf8BsyvlXvpoT1MJNdCdPahB0rJv5WD8YoQyerYO0UQrzmEP%2Fezqw9Uqhd4uqYa0b1e5ipfdAzi5ZGNlrBv7dwT0hRxMgeMI2o2ovrdkMJ%2FA%2BCtolJspdc8Gv%2BqVzMwqXvlq4jPYjV0fQYAMCsMWHpD6N%2FLeCFs%2FxNeHfbA3pkeWcqI3DsvNLf8TSWKl9r%2B90HrhK3%2BxlN5blTd0lR18JsSvRBxDQ3GyAf9MSyIIEea3Fp4nwV9erzC3OQZ9lG8JZ1zTMUHLYhW8Co8o7uL7woD4ro7g3DU1u9UdB4LW7snulwWd4%2BsRrHUQHStrkhxui3RIM0zfJmZjrWZXhfgPSPuFRmREiFeNrzwrCBljomQ4q9jXX7iP0Enh0jdHBS7Ck1x7p6dLyrLwcOSNmHgoh8koTf54dEpY4xDuhN8t%2F%2F76%2FzzmyVj%2Fx90sWogmlfTsL6zSgo%2BtQKV4eWff2cQQMLS0ocQGOqUBXj0%2BOpy%2BPRB7T3X2JhBnrhZB8Cb4%2BjnJ9INw2JkPwlEqJjK7fH6aUZWZlS2GyzswtwPDyRj6mqyehHnM9jTgLY3qGrPqdU9VhU0TIhKDUs9hrwc2C9aAA4FWiXTZxvRwwga%2BTKxHQ2oB%2FR8KwTnoU4xBrC2aDLVHa5FIiie72OnOxi%2F4A2w0POo6C1zMTtU0W97BRW0DbNTAB3ELRCZn29Pu4jfi&X-Amz-Signature=12d8815057e6ca491f3c7f5bd41385a35b2ebb52342ad5de8acc72b6d197276e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U33VWSR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDyOu%2F94NWxyAje4gMfvUKCoRNrOd08deRaWnUDwmmqCAiB5UtJrK0bWjBfIGZ9tEmJnnITQYx%2BcpgkCl63k0L3F4iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLIiXnY5axE6rPuTfKtwDIwphzcMXQUIeXJN2MofQqN7hR%2FHRssuKOiYsK4tXORvWTH8SzJP0TBgwFlrvgfrTAb5Uy%2Bl%2BTh%2BtVQpZsyW7qWXNY3aVWZYeuNv7h3ZAeMokGbdfRqQC1PlzBnybO4BsB8xusSq%2FTdloMGZNk4cy3O6nwU71E1gjNlnbj2jo0aoR4JNeYJ5nzB8%2FMxpMnNhPhhA0RXNRrwuJlffNsII%2BJUphugFF0SPy7DPiDaKBNaHdwijX4Znp8uYziJatMSkthgfiddwnLN8jgiScPcZlHQDz7qMCe1pPJLVsHf9zNskcJ4AGXIsshCu%2FdX8LQLIIH%2Ff9DbXkrYIi%2FGcU0qV1OZUOFOYAZwQ88L0tTSUgsYALi0s2G%2FPUspVUJyB5YvvcBNctqBQHDGf9NZYdpdCZd1v3lFcoHVQIwvdI%2F%2FWH1%2FxYxp8hXVyxcTfyTTfsBaa9qBOqPBn5EtURPCIuS4JQbjwVO50i%2BaBNz0fE5ZY77aypXnw%2FXnfl6swtgm%2Bj79VOuQCxHvPY7bv%2BfUEPZ3CX%2BOR1zImnyTKrr8DAfuNQuvITATsIusPBTQ3n%2BWOVNbKSZ3HiQt6EoC%2Ff2%2B0r0me0nX5VL33SUrRrdkVPsmwbXrdsjQeOwSbp%2BHQ3bSAws7ShxAY6pgGtQRApGT3BKOSE6hHCRnwWN5WIr%2BTLVk4PM09dQ%2FaEysHHaEFck5aCjAaEGPVw55%2BOkouuS8boL3HLj%2FKzFHU9RwZ3W%2Fzyj2GBvz7e%2F69TVlx1NSx3xNLp0Hw3WKh0J0C2Kzp%2FgcjR0gz1KkSy%2FUIoFVBHp4qOjTLYzrq%2BrmWVSLJ66WswlBF%2BJ5otEWvCqrosTmFODQuKQHMmIChD5DtNjnYBwc3%2F&X-Amz-Signature=20c8a2e5f77ce32ff0980751cec9c4a9cbef48a7c1d1b75f41fbdfd9ec6a6bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=8d6e80a655fac156fe45e187ee1f91524ff5677ae5a4a983ba51aff287537060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=24a7181efe040f0a03991bdd4fd6d60e4705f925cbdf2f1d581b5379edad434c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=3342cb73ba8f3b56cbb69d9ca996ec79f2fe7f42e9ce2dac386a102dc50812a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=e57d7de167f5c4bfda8ae190712a5aa98c9a8bd439f1918aacab54ce837b2a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=2bad5bf948f925f745d1bc2637db55aa31e1fd81427772edec874e46ab67dd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=66b7855c61894cbd1c7151c30c2158308f0203bdd64ff7f8335683bc53fb6235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=82eb5a5047fb241d92beabdcc58e36e236de7fdc391cfffa3218abc5a8745383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GIJRFSZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCECT1dYYgRIdy%2Flm6LXm5uWN9e1eMo0%2BPPuRafMdn6%2FgIgXSYT1kD9uDdeh4hb6Vv7rSu61y2eeUhEgWVRGmlLHYAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRaopyL4P2u%2BlpsuSrcA1gIM9KI2esk2XsLPzam%2FxeLL%2FtjI5UmJheDJ1Ccu6n0%2FfToksK13s2AFUOpQuun1lYPzU7gNgcZaY8X0JZegxRrJE%2Bq194lFzk4Ezgt8rhaWpVExpXkazrygqzJFv0DkQ8r%2BQNe0SykahUXrvInPltk3k62fdgwndAcSOzy5F6NechGXlDX4JWPKJOhm8TEl8%2B2hP2baEKqlY5TTJz7jVAgRdWYRjY4R%2B4X8Q6wAEUB71xszDzo%2Bdj9TTkyL0iL5%2F6AF96V0dEKDlYzv9NJ%2BuFvFUdkUusoSgmbAjahlzFklKx%2B1MePVWrCWsJRVtaG%2FM%2FWLipXpL9MKuBlMwVN2QvmnD62svlvDjm8GuxTchVP6nvWkAoeQBTlGhcGMv%2F%2BdtCp1AF1YccYO1SLh4P0V%2Bl1DTUPdktZX5GoTqX1hReBvoWnsk7PO1afYhhc8G9x2sGg6hZ%2BKvMcG9l%2BRbCNoBm%2F9SdU4U8eNSmUT9X5fhc83Cci3IekHQGohTKBfM3VlF9%2BUpirQhqxTcy88Y0QrJ5YczP8DOYMyt5EOTGwFZm5UTdGAHltQBb7wRGcCKIVnrES3AQQFzHS5FU%2B0KovSFhRr0oTAHrqwkJmLhMj4xbVn3orr3zS0wvzVMqLMM21ocQGOqUBjdfoib2VW6yfRfjniaHTo6anjeuMYdpbfyaa2AaKcmSBUWo8dvwUVmsKgGnhvi8oszVkOgdeqkiXXmrISlbPrcx%2BVJVQxXK1ZCeJKgSIuBQlOyBYHGLFbX%2BDhHlrqDDiY0Sou1CrAwRELBr%2FS1zCiukL5futXC%2FylX5zdS5x9jsLIsk4PvXbPEqWwdiTgqkGupVWL2yufqMc0KjB4FnC8jlWbZEd&X-Amz-Signature=147a162c9563f815ba4e0781ca9075c84504ae9b1b5ab6afad6ac67c13171349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
