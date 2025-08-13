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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=75fb1a4f313f838cdb7d86e03458551b47c661fbc924b7e60c5aeee18f918545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=df7ca333a5346ebc89f7ec485a9ae3126acc9f14a980edc382c01b4ec9e66730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=bb178e75cb9a4c880c5f9fea19c9f57ff5636176c2e7401b2394fa9f4a8a0d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=38091b70af7640750ff69cda1f7f3153dd505e45f3cbc6944e2f605e120800d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=b6c69893c6a0bc19a19e5707e8fb809c44b75b26d5f5b0c094cb5345a506e8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=9400e47e38efa8248f188052dbd1bc8ab91a3a9e29a1624cd41eb7abc9404adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=9c546919cfd6417748fc566274783050efcca0012dce16dbea714b774bb8a9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=4979f8b83d4f5e28838d0d72bd36a4f785e4ec7d267f02964f1b58ce7b8f7a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=89f8230254167eaa8a5e697ea2e5138926ca98c2978502f41c1741869844cba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7L4FYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP6AFjsXuinsxQKh8joaXEsbBXcCTICYHQIP3z8L6iNAiEA3raNTI78w%2F%2BLd19TYo2Ykeyq04yeVRkdjYxH7cFPgg4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLD19HziCvS4besQJircA7FuZ5jrubL2Cwffh8Sg835eXzh57DZmVEDmkAGu6TbdX3ZTibKgmCek4WQRSV42qbwMFR%2BBzbFqyZWs8t51S2VGSuJOyTGe9HbftiwDedwzNtyt5NCPy7yudg0jOSrQ1F0XcU5ueQ%2Bo1LzP%2FRkNE9xhGlhVrQQaaS0n7a6ulgzY6LOvW6W6CW5gK3gN4xElUG11IPrLu8WUAi80BGn0zbIUIGt4jR3qq5XygpnwpLnsDYxN%2BFBG%2BXXc4YY43f1fr5XcCxXk9XlGrJqg7O2ZHpgtiY%2BQDl1zTYvU2i3y%2BvCpECytGSW%2B2M2Mvbyo22BPvZ0dKZlTSceZOxLoivMUArio3hoHUuaOaQbr7KJMYDaYh0W9z94XifS7F5tOO%2FT4Zox2aStwu%2BDD46CoRDu1AkiKUT1stXkn7rPwHgYcdFQWpRVMEavTQ3vruqwODMioyJMrw0epooa7s0PCckNqh8EBOPw43QgcYOfMgM4A7WcqdekdSINahb1D0htDPEpCzdvPEK4U0oMJ0dWSw9yzZWWjUFtERKXIs%2FyTqU9UOvLaVijfwADPkrDYUf0Q1wZwz9T8s4C8QCt%2Fpj1t%2FRaQ%2FcmSADg3CiSvFW0PZtb2w8T9jE0HjCLvsC6nu5GKMJT88sQGOqUBnaftIkQKeUAqny5URxZoBP%2F5Odxs94B67QwcvIlH%2BqSx%2B66sej4RKeX1B9rA7%2BdEkrYPHQqD3aJRhXqwPG67XklkJ8%2BvRR3aJPBepCJ2NxvT7i4KEgVIeJf7HJYAcorcRALqCeF5rGa0MU9IIPmSYbLEb%2BGHZKVETOmhoUByf2BNQECesmWYqq91M17Hn3qRZ2w3fNf629KVXnbveVm1QjNX08ZM&X-Amz-Signature=0a8f401063a22500b0fd0c6960c9c2a70cc76c1427b0ca76d03e00c20a71bdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQUWNYR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXtbLhjrQrYfuBxxIidDiShxBczau1wwO6ms%2F38uvUzAiEA0BX4t1XmP2h%2BcLOUT2iw%2BAs3hsGh3P3vNMTZc7IDBM0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFQR5P7QrOtuTHxwQCrcAzraV35xIUVv4p0rAiqu9tGPb1ca9McLn%2BAgiHBZuLloTovM74BA62xUdvKrDnfaYYfXwT0%2Byl6Z2cr7fifvLa0NeaiyC%2B%2FqxWnhdLaxYxelsmL6MyjlBVT2hzIxE6gvutemzQw%2FBANDb6GZQtoeJQ8equZ2MF1LoslTZvhAGmmpbn%2Ft%2FeoA56SWVDIQ0PO9WshfQJBXIhZHd2fL1%2FkrDZXsN3KT2jWbx8Uhe8dEAAnMMG08HNMii0HYsRyEh2Koe%2FIoSi2jGMPHZIe3zLs%2F3win1EMwtFDkwBsh4Jd6di66TY4beVD9UiYKSrovaGsl%2FJB%2B4Y7Fv2D5JV9nnff6jj4IZwKXOqNg4fPurcxRbPWWuG4%2Fx8F5PaM853urPWhXOLSw6Vack8aC64Aa4j1tglA9w%2BLIzeK8A5cdg4JGihko4mlFeq8AV5gg2JGoNkD%2B5m69VzrwiX2yE7SwTaM5ESYCBqEiWxTot2dibZrcJtaPuuJxkYcpN5Z5o1RxsnrZ61IR0VJgeN2%2FN6eb1%2F930SS884T5VLWaSpSGTKCbALynWq29e7fKg5Su00%2FmhuuoTVy%2BXzfe%2FN7q3DLIh%2FNeiQN2pgQ5udjyb%2F6VX1RSd2ebVL%2BWKhxRsZgSGsj8MKj78sQGOqUBG0bsIr1rbN%2FMr%2FBbPg1kEvBW%2B7619KpV15OLhYYW4WDhI4oHV8vRCHAeS%2FVtUI2TEkm%2B2zylJ5DQaB6wW95Va2bS8KCQB13zJ1micmvAEJc0Fx%2Fo%2BSEGXmyEIv2z9T8x7LFOd1BE7AlKVZIEhtI08zZuk6uF%2FJROxmgU7UKGrK1lj18vHrQMlzurXAbC%2FyfI1nB%2BGp1O2%2FudL4aVWjJpCWuWtpe2&X-Amz-Signature=0542495dfd511230933f030ee2fbd8cc308da9fb3d05defa8debc8e4015feb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=0f0ed75898b414c0590d942d3d00f0547d116dacf082856d4fcd78363a23fd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=d676a6135a3415fec2523e71714841fef2aa99dd242c77cb3b0f83943f81bc57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=064596e52e0c48e32497f10fec4e9f56561a43a0eb6db1aa88e1d101f21d53e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=20a3f6f900101acfcb27a171ac728be63c6b419417176fc6fd000afd846d830d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=134c850882e0d9145ccb47c76f351df96fccb16935b9261531b449e3bf1c60be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=d78a41ba9193c8df4b5313be629f6e257f0d3c8684bc9c493a0124c75fcbb4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=6105b33f4c55f1f85b84eab620d44f091ff3ad7ebe1feb64c4ddb529c3294e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=d10519bf0bbb5cef35afab73a9b52b5c946f4a639be4c6d9a2abd24c68b242eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHU5HTJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN9xWA0kVc0WrUTvcfU6%2FtkjN458BmWtRCQaGjeNHIgIhANPd9O0ctLrrprH1cN9lxx%2F0p4vXOoLnCIT624GNshF5Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyqgElZO2ng2oxPvTgq3AMhbLSkPcVfbFffPzAyvmOoe2IbJ%2FPa9Y1FLPGgqFw1SGOmpYsaiZJAWl5%2FsNU%2Fx2rsQrnI2nWBHhZ4lpRcol3%2FrG1OR9k46eIJoHE9A7v9LTnO3GKXifEoiK%2Byb5vfF81moqHomVkH1%2B5uWGABSSmku5JwyAk%2Fh0IJGgjVSBMYBZaW1Rlx6PDZiRd4mYPcV0CJTtHW6xiGBBs4Y2jAAR%2BGtNv1mMHzXiV7STwqovDfdblu7He2t7ptUmiZ9OqikrfnxsiYdhID6bjhbOudCkSwuIGN%2BjKBkLxZEUzBn6R64VUW8NPlHrcUgIyTj6kaSE2EmK2WmZ5RV8QTyn8%2FfZCHSPF1vaEroSDBfpr%2BhhE%2BW1TRhxHe1HVzvTKw%2F8afNUymMP1N66utqfho2Czdk9bSf0c7uytUANDEKCjnRd0g%2B2qu%2BZuwL3lB7cGIOKhPMDG7h0aWkj6XN3tYlrfKIaNtSGGhiFhZ4lVFtb958PWZkJBPDe2J8b%2F5UlZVwvgv2%2FsqBpATEqO5PeSZHIanvNWI6inmWKvphqoCRits%2FSyruge1i8iyue%2BS0gN1qGB2BuedTOZi%2FR2%2BzbTD%2FwT%2B8gbL73RdmJozR%2BPfXYjaBAKtY5GBwTYzXn%2FGXwhP9DCc%2B%2FLEBjqkAcVO9Hne%2F7ccGAYt%2BKp%2BnO%2FMlEBQYC3hqLCuYtOyGmMCYRJa43EajrmJYSm28R6a80TtHGvd1QCh2zVkNG9kboTz4ny7MwiWn7fZn%2BHZI9WI6K5%2BFI8WpmjDp4PhHiHTOVHlGE4SXO7u4nRIBmpBvyDvmVMi5OO5Ht%2FRn87fBXj5315sfPSKQWHcOu2ZAwDIhF9pAX8d7ADtqcT4wF0HjXiVir5p&X-Amz-Signature=bf593a4c29962dacfdc0cf0355117c1db1e9a49ea7a3fd6a80ad64ff89d3feaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
