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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=102f5b21625e158632bbba72c0167812b2a96a1e5734cbbfc9238f75ca649af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=478efae93f5bbbe68cdc8e85c04a9d69555864a83af5753804039c04af638f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=560c09825eccd174d4d199470cd5f6e970b475435e9a1fbd5c19c98defc1d40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=83aed2eadfbbcbf35739ecc0e41ecdbe5d78f9f07d6df0705866cf0917014657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=577373ebbbfd7e89927ac39af9ce4b439d4dbb22947c62c07f05b5be947db901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=8bf0d192fb8ea58a7edf544ac8e5294e9f517a6ad8ba8916de7b1f6b2c139221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=fabd647315ffb4cd87fadde8fb0552ab64d89579160eda835683396ebb2382b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=0c4ffa0dac76fb463336399a56a1b91d2402c8396c20adf4b76f347a5db7e3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=96b9f44ff06bdb07b228a6867404065c9ad273389399c9900cd89393ed2d7e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7S3SS5F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCFYeiVCneiioIMRF%2FfWTWb%2Bzwg33Pb%2FjvNvRYNICXGugIgW2M0G49%2BPGn5QSUgdDkuRjbFseARfjfIGf793YK6kpAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLh8F7Dd9iMb6693kyrcA%2BJ4%2BcAv%2FrBXrorPyDQcNZYiif1aJ1gnVvJmm6wNz81gXRTO4DKWHxo%2BNCPcOAg%2Bf%2Fg29hnQBp0t40xFf%2BO2ZvazcS%2FkHDmHFqRHYKFs%2FhxbaGp8sMxi%2Byetwel%2FV284M1TXVo1IFILXB4CTPv4ot%2BBspMsSkKk%2FT7gw9yCNVbspyZn2ZZ6OzaTUJ1zhxhhmt5jDIPc5PCVZEDfP7As1EllEIjL2CivoJLkcBDgZzTX7tdIWiq%2BeENVxqm70ojzGTLfz9UXr4hieOtw4o9sciO4MFvKq7QIpdOhDwyulcYm5HNC7TVWqxgozt2UHhFcSl4YHUXyKjGX5bhmm0Hf5nFuW%2ByD4GMH%2B%2BMwKtNUiDKHaFyyOlJHvX1OQjVIeeQWZTJ1OWopXqiwT1kVJQiU7Ujs69fcvlaYA6QPw6HvHWo8ZxrLOCXTZGQQdV28ry4ng4Ft6Y2f7MHptNVzKd72QMgeqwZfAgv9av5MCr7OtHoPCuvLw3w0b%2BJRUhCu79fUHWwWirrf%2Bf01wrkzmhIFrDJuxw6URB1Rpz9k83Zh6dONInK41zpzJ1H4VxW4Q%2FNu5C1xaOcdh5eckcKko21CUywGfMSDwzqz8okz%2BCW6ZWP4sMQZc8k89MyG%2BQz0IMKHE28QGOqUBOTdBOzQK5BpeQBIJziWMhdUP4T2ZYZjtdfMDauz51GCFi3GUEeO4YcOjNs%2BeF12SgBtOEWKijyHTJ7GYY%2BEyWHncnB6O19YEIDwKNAUSjc1n3PzoX7HueUUOOqSCevExr7cV6kn%2Bm59B4FoiUosrjw717qHSY56idbhkXKegRBJvAl1rWccu2MpPV%2BZ3lZbhFEqZLRvDP1W99fQ35z5ZD0G9P8Fk&X-Amz-Signature=e8edbb008811d088e484dbfca703736dc8aac9d81de9093942aed6ebc0cc6978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EINQZL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICA3WFqglzBr8AZvlnyEKW0R8X5HB7mQ0toJUaffFQQFAiBwZXhFZgvjYOH2NLvB0RBgTLNZyFZtfSczFfYqW%2Fc0YSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNxizrdARLJQ00fiRKtwDEDLyiUvwRMofOXeqztEpWmVhQTrYdm9K4dXwL2BIZ54mjweyZBlMyqwJGnsZUW7uJzGmVAvJhuP2nf7gFvsz28t9FIgwPMwW7vZfxKIBgtyykhQhdnsNoo6fkroTtbjU3Kh5lE4tSASQ7ZWs1gJA6epkP8qQryQdh3Pm37Z0aa1wSqmhHeqWHdNm26kO9AWJv5FN9Uwq%2FenORgy8E2nBfQnTTE%2BKVtio0qUfZqd7iz61iQHlyGytAgbppSQ%2Bpxdx3s6XasujwfQInOt6hWnEWpT5xSmY0H8WdRTM66wBtTvmn8ioBYqd%2BfO1WBle5eqDSG5VaR6IZMi7OBLW%2BEX4LHKiKaTA%2BF0q2dVLtN3QUGqS4XQ99n%2F%2FOE7T0vGGHluUkDFohdTXXetTSHXmeQKhONnycgDI%2BiHyCNvXEAeHKw11bUqIHBmje0EBcxZn8Fz%2B2hmBOjikGbSI5KPZpp%2Beveypnzc9Zf07qnEPiRCSdzmqMPeCq6US1MFHlx8%2F9wWpMZWE8URIOXPBPi6PFDYGGT0C3%2Bas%2F8h1ZaENQ%2FgopGi77ON0hcL%2FgJLqYycXu4O7dxVhrjpzbs6QIxDt4AR5np2e68RLmg%2Fr%2FiFdAYSNFUY1FRsuhOSN95P3sYcwz8TbxAY6pgEwLRJ5VTLdMwhJG5ymE0HKYelya3qXiQjEVTEl7S6qMMWtgCcufPkPzU9n1utEuokxNKv5A9wn3IDfnwsORkweI9OfyBD18Qh8sErLiVEj7MzqTjQDmEBm5K4paKO5%2BJ0kL%2BurNbD51vR1BlRA0EIbyVyqbqqvYFcc6x2JQdi%2Byh7R3oTf55hK1BVGbsfT768VuUVZqeFUzUgHWdQ0OUoVmUUzPxY2&X-Amz-Signature=fec79da16bc65eafd6add04d422f97976d0a33507a0128806fd0a4bdc8065387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=bf94f0ff178449d781bafedde57df3d182a8c21fed92a71ac989d58168f2fc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=d0774e537892121fd03371c6be86c54ec67b904cab065c24ceb2828bcd5368a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=e524182789a05fc3e6500b6cbffa032ea1ab3f45835ea2f486eee302a585e661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=815361a5897692ee762ff1098f7d4326b00633b28482cf9b77e41ce045ec2381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=99e253c8ebb1b5d51f77d89e6d9d2a735273201b08cf9a3980d7fb258d30e5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=ba374d931cf51146331822eb2865d5fdcf099c864d6bdc6527b46e7c1389354a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=0633ecd4a6af349bc2da66f0b69491be418e7f4c1eb9d0f5c794a4a26c9af8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=20d1f1d2068ed6410bc423322bf0baed3ec5b1be013c5947e6bf1a3a0de68251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO56TKD2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD0RA8tKDFYkME3uCWuFdN%2FU%2BOWugg5YjTqylhgit2v2wIge8Y0%2BChWClWBc1YRaeIpIxZ23oJotTFmjVvFIxLvLKsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEXTeB5bPnKaoAkXSrcAzXPH%2B38oJIBNwY4olwkSUIfhpJCr3LffBuyXvFnZIsUrsSPxOCxesLxPrH0VXxI3GNrCo8rLXwQ0UpYtH%2FLjc%2Bt9vXG1mdcW721WLTlh%2BC7E30f1TeE3yZmKxT73cJRgal8B%2B1FO%2B3aQmOffCZeJRHaLRGI4qM%2BWTQZFvue11%2FwXPmGyc1OIzEG7ca61fG8PGfvP4nk4X5TJfCt40xPgRtkui1oJhvX6SeZIhlDXXLvivQReR3UhA8%2FdltsZRwIT%2FTbP6frxA0CP8ddw2VGH0vp%2Br%2Bd%2BO%2BR65iSoEpvwf8OUNyZVJsfAfT15G3C0n41%2BCkYaTFS1BJtdbz14pEoj3OH91C2WrRFZE5X8FxYBK4i6OJQUXWDZE05mar1ugSiALbMPw0sHFFla%2FaRbLHIqMXmllQBbcX1yTCP0rUqYZ%2BJX7i0cRVqnVg25L%2BXQsfBTW4wD52nykHpFgfrxB%2FG5vgAqa3X%2B1q8P7CTT1Ml9Zm%2BcqZVixe4wTUIRnOCn1cu%2BKqLZO4vwFM1DKNrktv63gjJZfRglkOJ8qSvTlkiVYRmSEtO3INtDsrj63hZpPT1P7t1MjBE3HAty8KNKCRps3uWl99Q2mm%2BDudpkJGNvcNujv0OM5vYDWfB3RcEMMjE28QGOqUB5RqXdwz6XaOKl%2BCM%2BOYq1oZE0m%2BUnWrbZ8Ybm%2Fv8Q4BT5oImeFgMoXi6jIGhnkcIWGa0qHOq57LerBWuun1jQqJgL%2BFPIqXRez%2F6KaEcAj%2BMvbGdiguyLpcFNOjfmFdIh0XXsrQZyQeWjdpp55CBnYbZjTM%2B8UcYlfXCDPXTQ9aQjmXb69UoP3S6QDLYvCacmPOR7yOZ2GlJVcD4vc3NR1b7QlZ1&X-Amz-Signature=8a064c851155fa306f73ad6822680f3a1a2f78bc99c4802cd7961c72f01f57f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
