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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=74c45e3fed47e9917fb287481105a00c0df357380e206d8a81b48b725b975078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=18ebd976b0a44eac096f21441e427db13a8835ceca3dc89036f859546bc65fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=95bd2a20025ebc3b40f13b0bad0713e015ef4b8932494bdc13714eba73de76de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=0dd7ba1ab56be268aebdb898e603ff2ce37ca74d9af46ad5b492ad51228fdc60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=695bef3ed3881dcb22241834281210bd8295170087e04d9b3baa2a2096e00203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=743031e4db40df2a3fc8ad086f6a8a329dc88b3f1bf9b41db3ca4681a455d045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=bbc84e12caf13b0e3fee16591483e4a3d663da06bcf9187897a5ee8fc28ddc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=9539e1b3c6f4bbad0a798543d2c97aa1d930f81c051eb0ad235694c92f3da0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=de047098bbc781312ff8b39cf31d782ebbf06a8de3111b1f80ef746a49315d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7XER36%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHijVjfhgRp26NNfepftbLR0wk1l%2FZVw8IlHM5SgloP8AiEAh2OwL0UwBpaDBK8uJ4MA3Ctc4t%2B5CWqYgz8pRBWS0pkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgRxS9ZinDwiy9ImCrcA1fLeOPuohJPPGE3LC5n8Hbq7iZfxvNtMsGH0LMMv5C%2BCH3iPtKeF%2FwfOnnIrsJUfJuRtTbTbhg7PacwRvpnY22wc79EKW3Dp1tY6YVaeGv%2FXgaLLHu3%2BKkeY6CIeuE67lW8V1skrLGGaNem%2B8%2BVto5PP1yCyNtElFLWdhh1JVFzfrNuM03x3LR1qKa8Cf0ZOhjH231TMfD3krce5TX2px9QwvDWYG0NiDPOdllYpL5QwDQoj%2Fsi%2BtdUqVY%2FN5pfaIzQHNWfL1EsX6vaaKigfPIOi3Yj%2F37kGbJOgg924nYljRq7M8NoP7HsIiJXjnVnRxQP7DIrfjuntK%2BQ68%2FOe0bGGFU1wS%2BIoy9hln7xsT7JzDr3XVs10%2FcepO4n2QcNt2M3Ei6I6PfvAQbMTMRNEZyi1YeHtRah2rQMXM%2FEVR45ZOv8nNCqm4YILfeCMCXSaP10DS%2F9iRe%2BcsV7HHvzLFujS%2FR5NlrYYX2UBYfwMDN23smFoa49dEIxG427KcjhRHlPkmNeOW8BfuGNtVjnfjm6IpsxZqhwSTRhmA7R79M0VUYVlSHEMuoOuwXAlnPk71ug7YenqZd3CqbX1qSm4n3gWrvvTu%2FmNVpXJGsqmDa6H0rxomn6gipobDT0MOqooccGOqUB3ZRIdHKjR1zT7FQRhjux9gs%2Bvm7XRFwiX1YToTvM%2Bp0%2BWFpOt3gHECtbgSpftMLeOJ2odcWAsWcUV3o7lpLBmJgPX3EgxpEhHbHp5pJYL47xu1EhJ6wkF7aAMIRSPR3yCxcBErrjyBB3NfdkOLD%2FLp0ncrb6iFWPdm3O%2FrpMW%2FgkCKzvOtQQmlC46zXfKyUComATmZX7mL%2Br7OOksijEu7BMJ5da&X-Amz-Signature=f2f08bfa3072e4b1c040f6bd234df4894a424d595365515cc8f92ad6f1b864b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUM5XFD%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDJsBdj%2FOrQr6tdrBjLkMS06ak%2FMfYFKHRK3yBVJOjOgQIgEdn%2FnA8FZcjmbOPF62iff8OY6fmq6zgmVotn8IQGqgYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKI7%2FV%2FO5yOypijpyCrcAzGYhaGLpiVwHabshNMrnTykLynjAJKKrivS3E8j9P9weYDGRjFND7YmfU%2FYk4wL5XMnGIL0kZV4dWn%2Fy12uYBCNTsicdt0Pmd7L7A3msGa%2F2%2B2KtjdlZMsi3t6VMPrT%2BI54WC%2FnzszAPaqg%2BVqUyRrgvooPFkdHHoud6l2nkC1Gzy7riGTntIBAT6MX8%2Fh5EX1upRtJJUa8j15jjtvxbPljTMVh2P2JTe3nZ9snssJstfXLQL%2BvpmiNB%2BJVF3JT6JFIIbsB69Vg5%2BGziQxFXVKZ2M3548G7XdFCwRIicTlES1XnB6r916UO%2BIyQb0W42Vcsxg7QBrD5DUxfx58q%2FvP0fuSCAYI8M%2BN1JKYcGOGtxk2UQL3JxXfQQqhJ5LnKksDcgsqmp14prmqbr0TntyPRvWimYa2TxBYSocERPB%2BIzFfydy374qLcPi0vPSo%2B3uqElJPm%2FRw8GOGoW4AI2vz5Ouem1uZfqiLxcOU%2FZlfx5llzUpSoxFCbKyzxNLoyXLWZa0M3Bo8670Js7dbN%2Fb1uIEwumesu4ZpuW76fGOfjwvVbKde90HPhBbDjrUKQDHguyS1ry7jdHAPsY11hK7tamoPwKqpX3DkuWjRmX%2Fq5BHOVBSVqSi%2BMKs6oMJ2poccGOqUBbzJ07NVCMiCbaILLZTsY2pZPoipLbOT6vDLiEOOLue0z0PnT2r5YnlvMVFfgjK0k018NHeoPBV%2BU8lsOQ6MrYh3PC2EZdNsBoUDJGQ%2FR4XWRU7Wws5QoGai6bc0MDfoiqrSdch%2FYgUhkFmbLSDNu3a6tBMkgAxa6vGKfjy0OgMTugS5d0ZhfD%2Ff8VfB5CM0pqJuN5JcBo0ZFzFIn3KYYmd5rv%2F%2FW&X-Amz-Signature=7f990d5e97583b1493f498118808d1c7a1718b0daf19adbf76b52071fb68d368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=27abc018441e58b016b0a0d2b5345901d30c0b40b0175946de5fe36b7f2f5f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=11e98e59d4ccb0e3e4a96eef538bcc73bd45bb5f047188938f8819efbd5860d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=6928f76fe62c6209c0d2cfb0b78f31e83665e0ceba18732269612c80d7358fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=d3c24c6424b713f0ae797fadb4964349bdd5f22e680ea886fdf3922a21ac4f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=7895a373f6bd18b95fbf7858d810911c088d901daf91a15395be4ca91db22dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=b6110ae5530add8c674af3cf11a71a58bc1c74b1d24838a5abccef253d8d7f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=6f94895c5ab89bbe53f4797367c4dd69f25be034d2e6839be89ee3a59e9a4a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=0ad3d1094e5808db4b018d310b6b9662afe75e338e63a3d0a10e7d57e74cea4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZI3BCHU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGq4Qrj7mvDtw5ztPptLWpDlWxVqn3icBozsOktiDdjQAiARFVqz50SqswobNEN3R%2FTWV1xU%2FAGdutzCvKzaXwlUfyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRpMCpgT8PMLAd9NeKtwDMDKR2dd0qyCSW2ZfIuobwegRFt7gqAaI72uJlk6rYjvF2m8aMhrsnWp%2FxPrrl66RQPw6D7Y%2BMrY3CkcLXzi%2BaGEkYG4YmEeKakiSM6WZnwU%2FSGHDXxNqL%2B7%2FCLueG5R%2Bh4yydj3WjoF2OCgpFpFuYTEZlrnlT0w%2F3%2FI%2BJZSvVKCBPXdCi2IS7ipqyiSpHPqC7mxlC9fWNhULnox3lxahdSeEREbIwnS0BuTsBneEebNbQo7AcTTnEB8gCdTDUXO5uojZjpx8kV89Bb%2B5bk5zccGZA7WcgxBBArqEuz7X0lFAnUtki7ETwD9nWjo0oe1tVozx%2BPc4P0OWk%2Bl0II7LAyV5SxU4Qiu9sAn33r0dL8ZCGRX3j781VPEL618DypNRkpWGS5UT%2BFkt44U%2BT4sqcT0Qxx%2FD5AzhoY7T0cky7oMPfjv3y2DhZXKRlbZFNeZt9XDf3Cj2C4yk%2BPlIKWDoNC01%2BhUSvTj1CZMrYrGgBLM4LTNFMfDo6MVG0qhqGJGNPE0u%2FQYUPlWHCpp6KSq7fjc0k5QTq5d04d2dSTMuVi5TswPXyqD18Swv6sxIIsHhEx0ak7Pl9BMfoYBSUR5RTT7JxvNKDPUtjfzzmGe2UMBxEXKHZTsZaRSMrg8w1aihxwY6pgEeMQsLO06A8FcOY3Dl3UDd1fxG8gE5DMujKEuL9VCEHqYCh%2BogH4Xcn7V5ApT%2BV8QlVTXRoNJQKbD9LDny%2BSTO3lSslSXvfrqgj5x1z1Tnfjuv%2BPEtx9GOONXlhzfNX%2Fr84H93oNru3Qpfpouh935396Y%2FPLk1ZR6QbDRNkMl%2FgZC%2B1EFoJvFmVD%2BnSVpoUECjHjRgKzvpuVXZ1TJQMGBPD3VskiXP&X-Amz-Signature=2f9b47e560f18bba31c1de39a3b321dcfdbc4da5a55dd346bc27b67be89c570a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
