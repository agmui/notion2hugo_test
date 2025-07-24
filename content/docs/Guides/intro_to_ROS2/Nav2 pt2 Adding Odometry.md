---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:34:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=b6446b5715c8d4ca1632512580c9b6ffb79283817938e39595908e9693c34503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not </summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## creating custom node

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=ce29a7ce96ae957a21758ac59719531d6db74701981ca10d08d29eb6b46af948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=bbeba49ffdf0a8f3dbd13fc27fd7f527dfbc81ddca873108e5c8c11ccb96f4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=ae6d9ec5b4afbf1031a943dbba614ccc50dd35c8850abb267359d1e64e3c057a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=420086c3f8480bc488d07937bd4e9305ef790e8d1b73593486249969e716ce0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
        self.get_logger().info('Publishing position')       # print msg
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

## Testing our code

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=73975c9d549e766bf9ac15a48d12d56fdbc1de9b86ffee706cc18b49d999f9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=cd288d5ac43a7ac80d1f8cfe5d5bbb732543b94fa51f698f730ad9e11b8f2c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=06b4b5030abc606dabe7f241ec5c6c93f401ae75c6b13812c8450eb3a6619e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## updating launch file

Lets add our new node to the launch file

```python
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

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=e7b593ae19543dbf60b8a76019faaee30345678d9f6b3d733d7ac5105ef4451e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XOJ7G2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T111202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQzW7OsDY%2FuzcTVy4A2XDQuTpbIsND5Yfa4wMIfiCSmgIgHAQPQfmLnpk6pnRRW8NJwKYch9ATtlrEe7egEse2rvcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFeJAvyBHtbT0l%2B3ZCrcAzg%2BFD8fKDOCK%2B%2Feub3SrYKa8VUNIRLqey6HNtYjYpO8vJr%2B6qWvst4nvrnM2XUFWkVRpcz9zk5Qf1EGrmEQpPcSRpKGLGSc9AJn3aL1X6gdmqj3FFEr3Q%2F0e2Os%2Bi4TDXqk2PuTYRDtDXUy8e4hZKbUgUcQn37svTIQ%2B2udBCMSfDlsOC9S8UxKfhIJ2ez6a9Fv%2B0CNDKO1R4SPIR1c258MlFyYIyk82lzzZogzQEFxHbo9P7bA4QT1sqbrZp56grK%2F7sIDsJlTtQTuLfH2uVGSejh10%2BwVoSeyJc7RrDzrM8WUAO305dmLbGvtEtu5mbGYhSSEIPZd1oUmRmrelV1Rz23LQfWph8ikBCP1mfcAnJauBGMTnNpKs3BdWLXFnXOdh%2F4jrWpmf1l%2Fk1tOvQOTALhgjojWqGogDgZmeP2INtD8VaPDXfph%2BBof%2FAXyYv6xvInbZQdxIonpIclDdcvJayltu0Cm4D7%2BMl0tis0SdreyVZz9uAiKUYeSK%2FM3lxAohrMBP6gy9pJ5JuNu6%2FV0IOncufDLYa0ohmlUb4Li%2BtlxgXLppiX%2Fu%2FrimbV0nic8bW2iv3PoUVDHUVojlkTcfYvn%2FhSM3vSvZk%2BIoJ%2BTRwxoijF%2BrvOkVImAMMyPiMQGOqUBkCNy0zofT%2FYR%2BqP4wIMpZwvYcsCQZ3ZiCR4RjYIJRF10%2FRUbUq3yDRLkVoQ4v4BTmChL5kUzrXu9m2x1UN04sD0YYwsAHrYRsjAiiHZ%2BjZBv11OyX28cagE3D1XtmL9oa%2FiTVSQChhFTaoFv49Syx4zgXUZRmiy7BrGhP266ILfQuyzz3NvAMtuHU8i8oklnOIFoLYfozgb%2BcPR4HKZZEomfjUsa&X-Amz-Signature=1edc75d057da1e590825975750468ef00a494fea8c4615d1569a7c4bc5b0f734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=b8f2e9fc2752b094e262ccaafb3c04e716626b2c099f70821c8bb209b5d7552a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCI5OJN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCO2ZHobWnCghrpHZtRbBpHJImgjGNNZzgYmw3qtG%2BiywIgc64N6o%2FwfgKRrUSoaxmWtnz978HlD%2F5htJNqQwBLlnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDP0NFXaztLkjviHEuyrcA6cynAki17UoNDQx0s6cslOqlisZ988COwuHolFOK4zUSQAYS2koTKZfMgK0LayevpgGSUOANXYNROlBdteOSv6Mgy3bZa%2BVljObeUHvr14E1jB8XDRsveBPzLBJ%2BjKX%2BmlKGC3EiySoGbLtjHzLlRthB%2FsGIGnc20pqaqHu2GeTlxwLmlXIEuADtlqQio2H8SRDDMIl5IwQo%2BnZbHNMDjmoxWt6LijmjbAGqDIaxj2csrjfVRaMc8%2Fexjsjiq9kzbz9YB3haDzm%2FVwFhsgmzOfqu8A%2FrswBTuuRKG045SKk8%2BwqG7qWSX9fkAft7xGbkYVmIYBpwmAPTh2UurQ0h2VnwNp1AvzuUk%2BrzDj6t%2B4Xy2El9uCIhEatNI7eVot1Xc6zT%2Fp%2F1qCCKEkZMur1gbXlJUf4TZOVdPwBR4lxhjU4H1mZyJHRUYX9pRA8LQ3aOy5R3ZhanazN3w%2BG5MwIW1%2BwyogQZwA5XIgvvx4%2B9DwPogjrVuOj8EDPURAZAfslWxzxGloVL6lNKNw%2B7mz%2FJYDvQEvAnr178IewA%2F8SS6b3mjtevkJ7izGvdOzRfvO5y%2BdNHNfpulnEkf%2B%2FlhtrUh93WLOTDs2dX6tzhIgawuCIfqVKgCjipDqsf8NsMO%2BPiMQGOqUBzvz8FsPA7to%2BcJsq%2FedhP61gHB9cmfVtZWzmTVMpaHW36plOSFX1a4MK1b3F8uM%2BeW1D0KqfqCEpVtTDJ%2B8tymPxOS1gcqyVLga0l13J5sFQmJ7tV8znGcumbIMoKPVwVflLJIU%2BKJbhH5veGx3E61qWjM%2Fqxg3HpcdCLKrkXYseyi8ggeklmcnz0e0H0u7aYPsTVVoroDuPMe4AuTvzgoLbJP%2BC&X-Amz-Signature=d0766f484972d016e35164f47af318e598bbe5b56ce8d41510c3ad9eed12a31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ7O74V%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBJI1QdCy3XVBV1InjUnFzzxtaUTeICZD2BhZGwg%2BrGgAiEAnivpTTqez21EfUDtPqhdhJMOPZozyCDCGpHmpxqG%2FQUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMuFyaWwwFiaXvO8OyrcA7hZNSnNPgX4xElcS1VRF6hGDnRxljNEstkdsffza2JjOZb9Ix9e3Wdt%2F5A0lglvEKUMQRFMQSZVQUhwfsa5HdaybRrGY%2FU%2BoHgWD7gOnyS3dGFXUzmZwo7qgCbWdQNr43j%2FBxJqPZ2InDOLVHxdAOKN%2Fqw6X%2BUD50Ab1ywQ3pg2o7AzqNu3LEY2DfUCPl%2BZbc37UrwgtvuJePQa%2BZ7Z1ghA%2F3WbaGOJRtPT7CFRGJsmxvFoWlPokbRwx%2BvOgkuD8On9FW%2BRw6QkyJWhOr2WMzGULmpgePbBlERQfDug6maZohejgWecOgBcBy7CZec3%2BObatV1iNuhlnKi08zvrEGhdZii%2BP6IQATgtSvLRTSgvxAt9Q4uLeEIy22tKEdL7chXkcRG%2FRbv9wTUZrdwg7%2BYKwAP84%2BRizaYQVh1M0fihhYjTOja1UACVBwuFkNT6uxlIqdPOhNfYffzmgQBQfkOd5GbIDLsZxMdO0J6%2Bae7jxlOqXMMvutRwlNwIvzvUFf1xKaK3ReJ6%2BDecW4rJ16RFT64r0Yf%2FJpvXRdD1%2BV4d%2BIeOK6RYUq1D1SILodg9R3ft1fbOiXXYwkypiaGkKWVenWcfgIhhvr0gwSRDfZguH%2BXtItAYCrxL%2BcT9MNaPiMQGOqUB12DbI0sv5rgeERVsUYNmZYk3D84GhyamYVD13Cai2bRXlmfK1qbLeHtSGAgrXGWSBMTGch%2FsEqhIzSxRAS4iseoc4dBSTQAzL9c1K7RWhNwaJe0lFKSu8YflA7wL3WfR37AM3k1c%2BxQ0%2Fd8TRPkLQTr4cBva4NRH9MthIEuG3D6WUfpdlj2axHcOTzgR6Tq2CiuvACfdw5NRUYrcYVKIl40FL%2FbM&X-Amz-Signature=6d5f96d9a16bc805fab795c2436cabe2bd6d3e3dde34991775f19ab294c7918a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ7O74V%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBJI1QdCy3XVBV1InjUnFzzxtaUTeICZD2BhZGwg%2BrGgAiEAnivpTTqez21EfUDtPqhdhJMOPZozyCDCGpHmpxqG%2FQUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMuFyaWwwFiaXvO8OyrcA7hZNSnNPgX4xElcS1VRF6hGDnRxljNEstkdsffza2JjOZb9Ix9e3Wdt%2F5A0lglvEKUMQRFMQSZVQUhwfsa5HdaybRrGY%2FU%2BoHgWD7gOnyS3dGFXUzmZwo7qgCbWdQNr43j%2FBxJqPZ2InDOLVHxdAOKN%2Fqw6X%2BUD50Ab1ywQ3pg2o7AzqNu3LEY2DfUCPl%2BZbc37UrwgtvuJePQa%2BZ7Z1ghA%2F3WbaGOJRtPT7CFRGJsmxvFoWlPokbRwx%2BvOgkuD8On9FW%2BRw6QkyJWhOr2WMzGULmpgePbBlERQfDug6maZohejgWecOgBcBy7CZec3%2BObatV1iNuhlnKi08zvrEGhdZii%2BP6IQATgtSvLRTSgvxAt9Q4uLeEIy22tKEdL7chXkcRG%2FRbv9wTUZrdwg7%2BYKwAP84%2BRizaYQVh1M0fihhYjTOja1UACVBwuFkNT6uxlIqdPOhNfYffzmgQBQfkOd5GbIDLsZxMdO0J6%2Bae7jxlOqXMMvutRwlNwIvzvUFf1xKaK3ReJ6%2BDecW4rJ16RFT64r0Yf%2FJpvXRdD1%2BV4d%2BIeOK6RYUq1D1SILodg9R3ft1fbOiXXYwkypiaGkKWVenWcfgIhhvr0gwSRDfZguH%2BXtItAYCrxL%2BcT9MNaPiMQGOqUB12DbI0sv5rgeERVsUYNmZYk3D84GhyamYVD13Cai2bRXlmfK1qbLeHtSGAgrXGWSBMTGch%2FsEqhIzSxRAS4iseoc4dBSTQAzL9c1K7RWhNwaJe0lFKSu8YflA7wL3WfR37AM3k1c%2BxQ0%2Fd8TRPkLQTr4cBva4NRH9MthIEuG3D6WUfpdlj2axHcOTzgR6Tq2CiuvACfdw5NRUYrcYVKIl40FL%2FbM&X-Amz-Signature=2ca822d5fbd5a94f7d74ac12bc63831f47b68d4d13211f7a4a38270a26ed8795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ7O74V%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBJI1QdCy3XVBV1InjUnFzzxtaUTeICZD2BhZGwg%2BrGgAiEAnivpTTqez21EfUDtPqhdhJMOPZozyCDCGpHmpxqG%2FQUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMuFyaWwwFiaXvO8OyrcA7hZNSnNPgX4xElcS1VRF6hGDnRxljNEstkdsffza2JjOZb9Ix9e3Wdt%2F5A0lglvEKUMQRFMQSZVQUhwfsa5HdaybRrGY%2FU%2BoHgWD7gOnyS3dGFXUzmZwo7qgCbWdQNr43j%2FBxJqPZ2InDOLVHxdAOKN%2Fqw6X%2BUD50Ab1ywQ3pg2o7AzqNu3LEY2DfUCPl%2BZbc37UrwgtvuJePQa%2BZ7Z1ghA%2F3WbaGOJRtPT7CFRGJsmxvFoWlPokbRwx%2BvOgkuD8On9FW%2BRw6QkyJWhOr2WMzGULmpgePbBlERQfDug6maZohejgWecOgBcBy7CZec3%2BObatV1iNuhlnKi08zvrEGhdZii%2BP6IQATgtSvLRTSgvxAt9Q4uLeEIy22tKEdL7chXkcRG%2FRbv9wTUZrdwg7%2BYKwAP84%2BRizaYQVh1M0fihhYjTOja1UACVBwuFkNT6uxlIqdPOhNfYffzmgQBQfkOd5GbIDLsZxMdO0J6%2Bae7jxlOqXMMvutRwlNwIvzvUFf1xKaK3ReJ6%2BDecW4rJ16RFT64r0Yf%2FJpvXRdD1%2BV4d%2BIeOK6RYUq1D1SILodg9R3ft1fbOiXXYwkypiaGkKWVenWcfgIhhvr0gwSRDfZguH%2BXtItAYCrxL%2BcT9MNaPiMQGOqUB12DbI0sv5rgeERVsUYNmZYk3D84GhyamYVD13Cai2bRXlmfK1qbLeHtSGAgrXGWSBMTGch%2FsEqhIzSxRAS4iseoc4dBSTQAzL9c1K7RWhNwaJe0lFKSu8YflA7wL3WfR37AM3k1c%2BxQ0%2Fd8TRPkLQTr4cBva4NRH9MthIEuG3D6WUfpdlj2axHcOTzgR6Tq2CiuvACfdw5NRUYrcYVKIl40FL%2FbM&X-Amz-Signature=5442cc75b336c3de630f2f6b9e1da2b5e0aead9f9cac7be33f12d83829b8929a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ7O74V%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBJI1QdCy3XVBV1InjUnFzzxtaUTeICZD2BhZGwg%2BrGgAiEAnivpTTqez21EfUDtPqhdhJMOPZozyCDCGpHmpxqG%2FQUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMuFyaWwwFiaXvO8OyrcA7hZNSnNPgX4xElcS1VRF6hGDnRxljNEstkdsffza2JjOZb9Ix9e3Wdt%2F5A0lglvEKUMQRFMQSZVQUhwfsa5HdaybRrGY%2FU%2BoHgWD7gOnyS3dGFXUzmZwo7qgCbWdQNr43j%2FBxJqPZ2InDOLVHxdAOKN%2Fqw6X%2BUD50Ab1ywQ3pg2o7AzqNu3LEY2DfUCPl%2BZbc37UrwgtvuJePQa%2BZ7Z1ghA%2F3WbaGOJRtPT7CFRGJsmxvFoWlPokbRwx%2BvOgkuD8On9FW%2BRw6QkyJWhOr2WMzGULmpgePbBlERQfDug6maZohejgWecOgBcBy7CZec3%2BObatV1iNuhlnKi08zvrEGhdZii%2BP6IQATgtSvLRTSgvxAt9Q4uLeEIy22tKEdL7chXkcRG%2FRbv9wTUZrdwg7%2BYKwAP84%2BRizaYQVh1M0fihhYjTOja1UACVBwuFkNT6uxlIqdPOhNfYffzmgQBQfkOd5GbIDLsZxMdO0J6%2Bae7jxlOqXMMvutRwlNwIvzvUFf1xKaK3ReJ6%2BDecW4rJ16RFT64r0Yf%2FJpvXRdD1%2BV4d%2BIeOK6RYUq1D1SILodg9R3ft1fbOiXXYwkypiaGkKWVenWcfgIhhvr0gwSRDfZguH%2BXtItAYCrxL%2BcT9MNaPiMQGOqUB12DbI0sv5rgeERVsUYNmZYk3D84GhyamYVD13Cai2bRXlmfK1qbLeHtSGAgrXGWSBMTGch%2FsEqhIzSxRAS4iseoc4dBSTQAzL9c1K7RWhNwaJe0lFKSu8YflA7wL3WfR37AM3k1c%2BxQ0%2Fd8TRPkLQTr4cBva4NRH9MthIEuG3D6WUfpdlj2axHcOTzgR6Tq2CiuvACfdw5NRUYrcYVKIl40FL%2FbM&X-Amz-Signature=46bcecc02be128c4ee155eee37322c625dce04a71e8ecc87b904ad9a9a97b3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ7O74V%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBJI1QdCy3XVBV1InjUnFzzxtaUTeICZD2BhZGwg%2BrGgAiEAnivpTTqez21EfUDtPqhdhJMOPZozyCDCGpHmpxqG%2FQUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMuFyaWwwFiaXvO8OyrcA7hZNSnNPgX4xElcS1VRF6hGDnRxljNEstkdsffza2JjOZb9Ix9e3Wdt%2F5A0lglvEKUMQRFMQSZVQUhwfsa5HdaybRrGY%2FU%2BoHgWD7gOnyS3dGFXUzmZwo7qgCbWdQNr43j%2FBxJqPZ2InDOLVHxdAOKN%2Fqw6X%2BUD50Ab1ywQ3pg2o7AzqNu3LEY2DfUCPl%2BZbc37UrwgtvuJePQa%2BZ7Z1ghA%2F3WbaGOJRtPT7CFRGJsmxvFoWlPokbRwx%2BvOgkuD8On9FW%2BRw6QkyJWhOr2WMzGULmpgePbBlERQfDug6maZohejgWecOgBcBy7CZec3%2BObatV1iNuhlnKi08zvrEGhdZii%2BP6IQATgtSvLRTSgvxAt9Q4uLeEIy22tKEdL7chXkcRG%2FRbv9wTUZrdwg7%2BYKwAP84%2BRizaYQVh1M0fihhYjTOja1UACVBwuFkNT6uxlIqdPOhNfYffzmgQBQfkOd5GbIDLsZxMdO0J6%2Bae7jxlOqXMMvutRwlNwIvzvUFf1xKaK3ReJ6%2BDecW4rJ16RFT64r0Yf%2FJpvXRdD1%2BV4d%2BIeOK6RYUq1D1SILodg9R3ft1fbOiXXYwkypiaGkKWVenWcfgIhhvr0gwSRDfZguH%2BXtItAYCrxL%2BcT9MNaPiMQGOqUB12DbI0sv5rgeERVsUYNmZYk3D84GhyamYVD13Cai2bRXlmfK1qbLeHtSGAgrXGWSBMTGch%2FsEqhIzSxRAS4iseoc4dBSTQAzL9c1K7RWhNwaJe0lFKSu8YflA7wL3WfR37AM3k1c%2BxQ0%2Fd8TRPkLQTr4cBva4NRH9MthIEuG3D6WUfpdlj2axHcOTzgR6Tq2CiuvACfdw5NRUYrcYVKIl40FL%2FbM&X-Amz-Signature=b2a72acca69a2fcc4fed57909396feee0fd5732fdbdafb5679e90d049b5a1b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJ7O74V%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBJI1QdCy3XVBV1InjUnFzzxtaUTeICZD2BhZGwg%2BrGgAiEAnivpTTqez21EfUDtPqhdhJMOPZozyCDCGpHmpxqG%2FQUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMuFyaWwwFiaXvO8OyrcA7hZNSnNPgX4xElcS1VRF6hGDnRxljNEstkdsffza2JjOZb9Ix9e3Wdt%2F5A0lglvEKUMQRFMQSZVQUhwfsa5HdaybRrGY%2FU%2BoHgWD7gOnyS3dGFXUzmZwo7qgCbWdQNr43j%2FBxJqPZ2InDOLVHxdAOKN%2Fqw6X%2BUD50Ab1ywQ3pg2o7AzqNu3LEY2DfUCPl%2BZbc37UrwgtvuJePQa%2BZ7Z1ghA%2F3WbaGOJRtPT7CFRGJsmxvFoWlPokbRwx%2BvOgkuD8On9FW%2BRw6QkyJWhOr2WMzGULmpgePbBlERQfDug6maZohejgWecOgBcBy7CZec3%2BObatV1iNuhlnKi08zvrEGhdZii%2BP6IQATgtSvLRTSgvxAt9Q4uLeEIy22tKEdL7chXkcRG%2FRbv9wTUZrdwg7%2BYKwAP84%2BRizaYQVh1M0fihhYjTOja1UACVBwuFkNT6uxlIqdPOhNfYffzmgQBQfkOd5GbIDLsZxMdO0J6%2Bae7jxlOqXMMvutRwlNwIvzvUFf1xKaK3ReJ6%2BDecW4rJ16RFT64r0Yf%2FJpvXRdD1%2BV4d%2BIeOK6RYUq1D1SILodg9R3ft1fbOiXXYwkypiaGkKWVenWcfgIhhvr0gwSRDfZguH%2BXtItAYCrxL%2BcT9MNaPiMQGOqUB12DbI0sv5rgeERVsUYNmZYk3D84GhyamYVD13Cai2bRXlmfK1qbLeHtSGAgrXGWSBMTGch%2FsEqhIzSxRAS4iseoc4dBSTQAzL9c1K7RWhNwaJe0lFKSu8YflA7wL3WfR37AM3k1c%2BxQ0%2Fd8TRPkLQTr4cBva4NRH9MthIEuG3D6WUfpdlj2axHcOTzgR6Tq2CiuvACfdw5NRUYrcYVKIl40FL%2FbM&X-Amz-Signature=099ca3b3aa1e0c709781660339cd61b66e156fa51a0811a96b02be1944bb6e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
