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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=66ea6927b7ee82bd6dc81122586d414d20e5e7e3b82d3bab06918d939c98799d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=e73352f9e11a7088bbf37fed0f1f1ee62be2706eec5d20e4596bcd9e9bef97c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=4ba078f6c332fd55367ebcb10cfdad8d292457257a64cbb08a49f4fd57f3e9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=22ae4e8e1ff147487bdf5e3b19175f76a180667e877b6b76a685cca4c7a25983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=769b73d11a2db4873f899bddf1816f6975c94b6705fbcef15782d91fa48c7a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=4addda6484ebcfe201f4457f787a77c6c45e06a8a58337f070b0059be7326518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=e6522dc41a22ead2dd48ee013111de80292eb41cdb60faf773dcfb195d03e2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=db13cde90cecbb32a091bcb9689bb7f255bb64164ef93289fee2ace11f3e3dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=008d4f8310cd8c2d25679567e04c37b851e71b5cf72c2fa94b3a194fb88d7848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZJGMBPP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEPHsLxZ2YSHYRrh7RzRLgrDD8Jj71ws%2FckQiDV%2F8s7MAiEAvttLaYIquQno2C6Vxo8QDhyo5NnYfSS%2FICqapu8puFsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDPPK4220970hr3zmQCrcAytTZsPFdyv%2F30RkEwKB5BOi55vItQy6OsUXu5IItbm6GFXVNlgmfA%2B5escRzkokJBDx%2B2lW0D390O6%2FXsf5F%2Flj6pIfCSYLb7SvabB6eSXaVjEHutSd21Kt4%2FCbD%2FFa1pVdsWTXLbFGzhPZE5RpSw%2FRmhz4vCgI1QQcp%2BYNxhAYFjymIfFualKCpYmQbKwDw7eIYgZ6JeT1uXZp1W24z48OaJtFMEQse9YdS%2FXFTmi6ntGCqwYJFNDPF8erjlYt7B35fQe9G4CcyrkYl5qkVHGHws6ELds1VgV8UBYkVPZ8jNPjPrPIjSuP%2FsQa49ZmyWhUe3ltEjVimSuLIMFD0Z7MPFVckP8iEdeEhzACckgzPGrn0WlhM2o5tZws0MFICtZ6%2FXnJIuwvZSxKnkFr3mu2Go8PQ0CtoZ9u%2BsoWMnKSW85%2BVWCDKdCo4kw4XP4stMBkGKR3o5Co8rPOuVmULiNQC9OOIFnFfYFlC86qQGp8tZlejPxMT8Isc0VMTddiCKSEQ4Ij8KCc%2BkUPGiSNGa%2Fgsu1gpY4jp00%2BZMBJb9E3V2swJmq4fXQa0Q%2Bztia6VbwBXUQuAs9PrUdQ8igvL3EHNwr8mc4eE6P79%2BAXhn%2BVyhnj%2BqRBfeo6zefQMIHb%2FcQGOqUBb960YmQKBGkyGrB%2BVmOf6uZCrXDWsGKZLvMexfuPUedoyvtPpPiUuV7J%2FwC3V3pDP2K5O056%2FY7AXzXA9AzMKlKrIOMRlC1%2FvxDRz8i8Eow%2F150acyPsvuFucunTk7T%2BeoxfKtK%2FYqf9D665lhkE65SiVA2KEtOwqDV1x6UBPejLYgipu%2FG2uzlwvA341%2FBHR90G8YlRVyqXr1uSrt0lwH9LORMc&X-Amz-Signature=10447610f5bdfdf8203c5efc39f3693beb224900e46fdfb080145b8ddb58a4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNZFX2X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGL3BPZ7sJ6Q1kJZ6smdETV8G5AJp282LsfmLDfhc%2BrfAiA9z2KCHPWbzYqrHJngjYvFo93WNyoELsngIs%2F%2FUjov%2Bir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMWAmXg3KcSsfP7JmOKtwDCjeJKh9Wi%2FdmD%2FvYiP4m7gzx5aSgCarevGPnAL4D%2FENsWnL4V0TrHv0VL%2B%2FCN43YP4a2sB2o4dsh8vM8jDiM56PmM6Uvn8pGsc8%2BnKI%2FG9ilVad%2FiIb4SVwqLeoQpx17SqYUcOj8WdLTPhlRIgrXxUwItWWmV10Wq2D6ZbTCJ59XvCH9e3pTiVx9MCKo%2FCDS6f0jGWAL4gcRlPt%2BVbmKtkNvfF9h1rsdpjlDnQwVNm4qHTzEp6vQVw5L7bocZzJEhcqKCmpMn4LBpjGndRIPfsE4pCstvCI6N1lq%2FSP82jLSYWNtmNUTpg%2FqT50unKYk9MS9hynEYEV7Xadtrz0dLcvMGWKdN6rYeD7rhCcJcpgh7wK3CFA1ABTjGlWK0z1BlVL4VdmuzSNTeiSvN3qp0e9tyVerPAtjfYJdDYXTNZqEP%2BQuVWzrYYgzZaaTfrxeYZ0W7SAGnGWV7nXDCGajX4EaLHgrXAMS3m4KCA54d%2BUs5e4WlNE2vMJ7iXF2j%2B7S4m2GGh6AkFtRWtzZDE98t%2F66RKy7sFkr1c%2FOZdtKZll6lIzKztzwXymgcx9YrRMEiv2qw1CGTGdrNrBbXSdvqHlwD6gtM9%2B0JnlC8z%2F4I2RqKKSIWlyfxN5cW8cwudv9xAY6pgFDY9e7pDYahXhTKgSvmHt%2BDrWC%2BxKxsxtYbkZi8fzBx4d5WMHY3KXVjZB6egh9QQNXEgREXK1rU%2BT3GS4RwqGI7NkdfE5U%2F4%2B5xkn%2Bk0BBF%2Fh8qeLuPyRVGrYkhFZTFJoF1z1Nh5KacnkIG%2FRzhRB3Ate8UTL%2F20Tzfy3p69cI1FE%2B%2BcXKjQJTLmA4ycdGp76%2F7VQWnopKQp4TscUrGJ3DxTS5THeI&X-Amz-Signature=0eec1fbb89824a98741831f276cd2771f59fb9314f19b5cc337242bbcc5d9db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=26adb7a163e899bc73c99f593dcf0fec8f78b0357bcd410aa8a928ea9be9169e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=2b252d185a4d5c631d634b26f3674280f575abc1ea17301046897697c9fc494a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=cba911e4e8cae4b188053541e663b4cdcd8aabee581d9905342f99fa95407a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=8641a7b5d6523f8baa01b8644db37387c162d26dac2784cd1ecad056df1c2185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=785b3db22c77c607ee1f18c2739df24222c6f26249ae348cf4c13e28be1145c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=039aa12b062bb5fffc0659a115d16692efe7b23711c289d678afd8a1ae6786c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=a8dd76e15a3291aaeedede532f18fb37d873f6c48b3d6772e91664398b0680c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=46a9dfbbb6d757276e260cc86b975c0c59b02856dab1156151434c82e4c1359d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCQVN3O5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCNvq4yfNzFzC1QBEaKs1tP3AR271yXVLFcNsiv8FkizgIgUiyHHTNWuegUVRDyFSboxL1xHZoq5kbmIDP3wqG1ZEEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO0qfRt%2BVPbq85ydPCrcA%2BQ0onBi%2F1qz7mADcjHNaVTBuUDFw7z5KendbZGPBO6bc4fAkYrIFhtDsU5MuBhY1j%2FqEqH5bBQdbeX%2FzifR3PVWrJ6bodz4iygqJftomGBwbXeZjXzCrWe2%2BUP9Er9Mna2m%2Fe3Hr2qDxtnCgYLsHeGteoUQMs3u3UxAxNIVTxyRRUoLCYC1ywom0ncjV%2F39IbI8GiMeoV2njJhArG51Lrn0%2Bi1D0pbPxoP6PcxsY%2Bqy5AJskmFlteTzawQp159nEcI4ql0vpf5CfcRmPgKjoTwectsbNZGQ6ZvBtCFeGPsF%2BGalkytjEV80qY1CGNelOTmXcc8kpUlw66SFPx2NG6bW8IIIEuYm2gT9PyynTPTbHqp8UIWh%2FbMaMct2e3uiUGsjf17M%2BTo%2BIPkQgJi84RpyyElRsOBRzpXPaLrS2isC%2FzLhYv12GDASnRkF%2Fmo6Vpw%2F%2Ba3tFjlHJeldr5QV%2B9M1NzOyGv5Hep5jPeYCGsEeH0PT0T4n08yLk05XzJoDhtqfRtkUO0eZhe4ehUoLyEUpDxdYleTnK%2FJLFDS2K1s3lq72ZArWe05FiXsRFd5Nq5kelEyNICt98M8v8E%2BCD4QqYu%2FbYq1rAAjwJuPooU4gZzYajbt13XkFQ9NdMLXa%2FcQGOqUBAbEquYy4Mw4RplRFHcBCZBRl1UPcfU4O0OUofKYGjvs7jV85RmFTA9EymdOJfijZyJfeP2ivanPwAVyvPlsNn91cN42lO0bbxjECxKebqW1mDsWeieKQ81ekWHt511MqeFMmp2KGZzGFOgo7auzGZ8%2Fwq68y7n8R%2BoSuKNUn9Rp6JI8u%2B33Mn%2FzjCSoIbnwhv%2F5mpY0gl%2FnuLlnQe4L0QVxtb%2FCw&X-Amz-Signature=f4c2f5ba1f1fff0d08264a46ee3c6193d1fa34de72d7bc9f05c0698bfb61c47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
