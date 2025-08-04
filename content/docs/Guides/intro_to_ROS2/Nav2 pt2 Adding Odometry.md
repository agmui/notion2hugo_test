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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=51af3e322a067ac38f782430fefed9c7a46e4932149428031c111c8b22eff293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=477df8abec764e175186957e24367a782dce198b4efc451802e02e0411de24e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=e21290367bba2451e8224980093905ce05b7be2f6e196ccc74d1a3bba9c2b17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=038ac1cdf08869e25c85cb7175c3d4ccfc39bd3c6961032612e2558dd100b3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=51edd1e4f55faa14dc11110c67cfe2d8197cb9686e446f0b08f38e56f359e6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=29fd765b0411ac778fb538733d8486addff7dfa62aa0cf376836be4508ec4c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=3027abb97e489ffb73495b5471da413f0fe2715a474701bb0ecd1758b8c3f99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=af06a6e51c90d95dbdb4f91b5ea1322ece2d3b855719151ef72bbc2da08d4e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=f02221666d6731693842b06bead06928f8e0b12c88e9a5491f8f7eb162085fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4CO6JE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDgW3ogRLIRXPD%2Bcyo8ev%2Fp%2B8xud31ZE4%2BKZ9Q9jRuvKQIgdosUK8aTbaUtQLwnuxszV6AiLdSvoEByxcV1tFiPn%2Fkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOlFJYYf%2B%2FXVpzdh9ircAxpOK2dZugimYag%2B8hYiAtdRzC%2BpONmCxdwYTjbicYyO%2F1ULi0s5Un2ndZPM%2FDrIkBWbPuABtd9Nuvkug2JLeyB%2BqH%2FzDKGX6XZ%2FMFrNBaLCrNcIC%2FOY4zFjmUlyYle9ZYz%2BDDYbrNxMe4LVn5PYsmtzMRrcjjCOXRJ0DKgPUT00xAOZLOOW2nd4u0YDDJdXboVz7LdsPJUHvzdUffNqo0p5RWrC17elZj0KU%2BK0x5cbNQkHY6n7DdWzc5%2B9X%2FgeS4Mwykbd%2Ff10MRl6bxH1fRU%2Fc7H4B9gM6b7u%2FbdQWvVzJh7%2BzB8u7dCvfORYEhoP7uPFOgR41%2Br4agk3DdKLqxb82LS2LWDN%2BxWcBNYMxXhbaVzZnd5aOD45dAxYiQ0y19co9lf4hu44Lgx7nWzT9bQZmSaf8ENWz95Ad%2Fzy9kbl2XyWW%2FU0D482MlUgaOsWKT8BLev%2FlRbKV4Q73QtOPxOcbD%2Fw%2B4nu%2FKPvj3Z%2BF5wokgR4fBuOnrlR6Zx3%2B5Ttg6tAuHEFzbdbwChyxpdnLU3VrbKQNE%2B9x0RE9HZnOfpqourIH6woHxFH6HSRZNUvdXcl286YopPDbjuMV5oVDlpbf%2Fijer36ddx0OmaETgfCmkZ3rDV9Q5Ulc6POMILqwMQGOqUB0TtqHW8i3FYtS%2F5ELVOou7TVy7f2u%2F7f%2FnTsVkdn7jYsxfYw%2FsiR%2FIr8Ta4YJID6iV8grVtSKbjn9sef4P7jI5YpKU1U4Q%2B3riXmp0HMtUayANCP5gDX1Es3Oxb%2BKf4KxchuEUypKrwyRkNYa%2FBwEJKcuZg6aq1cQruo3cOwPwWjL9VRn%2BwuX4SdFNzMlQZQWc0CjjKFDMl3Dky0EqCtGBWgUm9w&X-Amz-Signature=ef2fd7e29fb432141bec5c6cf8455fbbd677480339791f7556706a2f374d9a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBAVYT2Q%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIE6PFyBy1gse0A%2FRcTsyTxKYpBKPN7h7HmogJJCwBmBwAiEA0cNZwyVEdU4WC6%2BVnze2PIOwZK4OaM3rPOWHIRd8WPwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEUGr%2BD0XBSZNfNJyircAzR20ASmCA8Z3vxLOdQTol%2FhtxlhFKTyj9g7mG6CoddBFLZd54iqv2%2FUFQIunr3m93b%2Fhx87gr8hEXFC5gtU1GCD14XWVQ4D%2BZUEwuXnizaJnCas3LNIFkY5U2IvXwj4ZvByM2DnSDPg2HUv%2Fuijj%2F024yDXZ6woNSYkfql2m%2BpxgrtoBwQ8KKHaV0Rrar0LW4iY6Mz1E2NdVVyCuriMEfvckwEMIRBvaBowO4BwNE4c11OBjaeiXVyIj%2BosjuXcCxrqt%2BkwnlLaEeWqZmnZCe7eZyXo%2Fc481kiOFcUmxTmq4bFKDjJH61zia0z07%2Fw65tOhvFNxolXqQSlFIhEeycFkXBhhu%2FILkeZLa%2Bn5fC3b%2FZ%2BHWMTylX%2BN8IhK2fRP1OfodHEpbkLb%2FXaIYKzUysqqkQXkw%2FAYUJmQVUSAAbP9IiHhZsc7HT9sSKctpW2poEx8RA0KfvUZnePppGEo6baYLlRE23FUzOAYMraFJ%2BExAtCJhS8VqSWMHq5Zsay4WOOKzJi6dI5cmFnJ3e3stsRQ48vXo9QbuE3gj29d%2BbfkL%2F6vj27JP7fdfiDcrRMjTZXjq6Ui5bsnztA26mbuawcQaRr3IfQLTCYtw%2FmKXd07x4sqxnEwhqeRfsZHMK7pwMQGOqUBgku37%2FMb1hnlCHSJNjvlM3wVRTIYe8LlsFNQIsgPk8tMmRC%2BaluIEuQN9%2BaTmWqCwvPhQ%2BtLfxf12hVG3N8A0tgCWCYA0vvlBh8CJeiJeL%2BVd65sFgclJO3%2BSWfySEDnEDROXo2qYfGUeQSdxmy3N%2F4gK41flBcHDIMwElPZ1Fd5v0NlHVTGZAd6m0b8htLj%2FJMhWjZOw5x%2F4v9o8jUxyvJS%2BR83&X-Amz-Signature=c6843c91fc690e14eb1d2c8c28bb74097e64f08d15fdcd357c889258777e1d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=7da76fd52014c490ca858c0ac8e2ca02826d26e1c4d17c0e2e1c56b013b372f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=a36db5c1dfa03ccbb7f602c3ab2cac8be6e8e8ccfa8b6e8c8bba497bb70bd394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=46bff3f983dbe6a5dbc343e1b8a7311783404de4aa8d4b9657e5c10039b8ef60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=23e23f9347b79b184a49b85c4de1ed2d58c88483f943002acc93dd74d204efde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=7e39f7bc9d13a81485dc52aaf499dddcb8ecabae245213c495fbb6e0f49ce2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=2c7557e52592d8428a106ab5db7276cae770c5fa787cf61a1521242decdd467e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=b653e687c06b55d88ed94843ef99d16084df1ba0a1b1c19e51cae052aeb26072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=49a25c8012f55d646a6115bed4ec01bee7eceec5670ac7e4748463c981058227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVDIBP4E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC6lWaUtDAuGxTrLHnDJqxZcqzbjDAJK3p8a%2Bw1JcLKiAIgZb25hngJ1xejAiDPYDJKHbwwQGAWDMsVV3nYJH%2BfH5wq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPHmOn15riQq0D595yrcA9tPK717QYMnQpkMK0L30s9DktxTptcOUvBUwXftcCalJfz8yWW7sAH7FvNbCPU9gen9GRwXrDPnZjoCiijCXh%2BNb3NgzBqC4g0tmDKX6Ife1k9mRY43xdLqMl0R9WPlvS6fDzWdZqpTzbUFBimyLMsffJw3gPG14GOYgrRDZyFGRsG2vlHAFG9IxhmEMwv7cIWbpNyT%2Fe2dkIqQetKjOm2eoPyPCVc3J20jNr2m5f%2F8yaSnSV2XRPSlWlIL2oK3YsN2SVjLLfa3x6UKx5%2FSys64waQQ2KC%2F47EiGAlGZhGqju3pgSMtJOaJGQSXNO0%2B2%2FpJEsUtfDd9hZdFsnp2AOPz8wiY6p7wccc6I%2BAX8iTa9vg8y6Q%2FJWKmYHAvED%2BWJYYh7loZEr4Y1KyvyZLHTPWblF3S980myKeUuWbxhHUvwT9Z1A6U5nsWLcGufnG30JpT7WkNhK8sre76JSpyt9r4JIG%2F8g6utdRoSkPfL7XhLE8ZWwJgAgT8LndcgC0pJtA%2BRIibt8vkTyN9JUIntWfXskdxgD3x5yInOlaKevD6iZVsxsgboTKdRC4xld6vDtZlgG2aT%2F5RuVia%2F1sg11bnXs3rt2ftTLCdx65k6t5Nj11FoVsVdo5qvCpJMILqwMQGOqUBgoFLEb1e%2FYrdI1nkkmB1KMBcaSb0DoRlDpmb9meNSoTzek3Z6%2BDXPHeCrFLj%2Fbx1arsoVqNLpFCK1ROPCUTTFC1MMXN3MQqBrt1reWqjpR8y8GGvu8DX3MCh4GW1gzD%2FIirAUWuAU0yJZLke3uKVKBwUNsQtWIEVjgs%2BMMFcyMAPQadedaM5sEygVpVBBY4xOm02fbIHpTFyv%2FlcWFQgeSqEGlcT&X-Amz-Signature=7c7eb6c6632cf7b9dfb754545d40d1cdb517dbb06dac8561ee463aadb95c25c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
