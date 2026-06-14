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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=9fdb809d7366c257424f87cfff8103c383a37ae5e85f1e3cb575cd7a335d1f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=4ed648c4f107cb75bcee6bc5c90d7f1943c09a94cd5040d2dfb2a3e6649ee5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=549a229eea80334783971e52b4d5ffc7b80c7c23c871cc138ed3d07969bfd641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=70cefae952f00ecb5ee1900f45cb183b589d7f63ba360beea7510129215bc72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=7f68d97421b2d64637fa770b4a3302b69177acdf1a5717261e712a724eaf7577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=a7b71de570d14e9283ae86db020f1ad8a9f68302acb87fd6d1632e893e316bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=217a3f3c866fae828bb6c90db9315ca57f60455f5a65e13d34da92055e30be06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=8855ceac90cef28c6cea16db63d9fe95acc2eafeaec29c2c5efc41823db54ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=399609553e81ac723b750f53b88b3aaa4ababd5ba77b5ddbbbdc6b859a16c537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632VW77BO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDEZo0gBzEDpHPitzSQF3FJdFQdIiX8%2B6pMRkKu1p6S1AiEA4cV4UdjOLlttaeYJsw5tKEQbDoCZz8xFBmDyro3Byuoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH%2B8cbGbwjQ%2B12wLxircA6IVdbeBzLjQAYQzVkGSXIRGCkkTBu10ebvNZsd0EmJxKryEu8PlITDdbfAvO1dPPnLnPSejblbJ5izHIQgIWHSDGv%2FU7m4IjN1Ggh8DYjbgEP%2FSpxNjBj6JDJDRfeCmN7U4INI7EcK0RpS9CBbO77jsnE28Uw58MJaw3wg0LtqI30%2Fg4pw3prXnyEasg%2FBwVMz8B91oFvj2NcAEo6RTqR0jd4R1hEZNr%2BqreoJeou0EPA7L4AdByFqVA2BvTIhHDye355TCOIz68WiCbv3tp7sI88Vy8OTl0H4siEd0vL6ZMtjn91NdQQr2NI6FBsIvOaReBpRsrUcU%2FXR3Pcl0WoQYXHQdrE4xmpnchhuga1GFfs3NNNhdGkb8rtJAl%2F%2FehXGl5YHdU0rdaMnfHDipiuroayUt8MFuub8wm8oxoHbt8ORIcikKszPE7lQTKoVFnojHarbphCPmt237zVUODObR2wECINLZoTEjO2o6qf2zY1ZAaFfMcbnTE5VSxA%2B3p0IxN35LpFME5Njrgyohk0k0fZYkweEHFgqk%2B8i7cuXX9eoOxGbay0suIOhBfitxcXyCuxQWSNwhKX8d0vk0aqb5OY6gtIBtPXhD%2FJA3QwS7QkoONlxrXpbbaAhPMJWduNEGOqUBnyqlEH0r7txOG6szYY92rlABy%2FZxb4qHB82kv0ENbZDfsRjcL38Di4PxKTd3CkldMAcMZXfWbcTLcDc9nRnVaIkEHJO8TKx%2FrkKu6cMLzgQ2HnXNW429ohGn%2BzM9UbaQuWOLAbACLq%2B42lZhuqj%2F1nEZyPEQzeIhEYUB5rPZyWnaoMDaIYX9CiE6U%2F2IPvixj1h1pQHzouwaaa4wMV3SFVGaQFl%2F&X-Amz-Signature=1ee6e198d1abb33fe07fc46b8807e338f5fe2655887f8b23c9217c53a6338627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XANDK4N%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDGi3onYnwjZmgziKinigp24NZqUFs6ZCK0ycxrsAvplQIgJdea85NK3wJ4XAH5tEB9VF5jgNTTeTwJ0X%2BmcTPUqUcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLXhEWljzVtdPgqHjyrcAyQDNSZbqNQlZgLHan%2BmaxostxubNjfrGX7kRuJaQ8O7xzbHZPuMIE%2Fd%2BYJMpLRwQGri0AV9SPxqvFJRQi6rIBNpfGDWTEyhUMhJtaDkcsL4%2BJQPTUpOsRPrjgjlGCqz0nY2yObDz0pPKDjCwXG0tlRDp%2BOK6u05eHv4pVRqfQI%2BhkCmnHhojJOVeReiNI6IO%2BoFM64U4pk8%2FmJNOQ5Tioc1tJ%2B6iBBQ0qBNx0nViqlbA%2BXR92aUXMKRGf0tfLyaNkvM1Q%2B1VJdH2HB254Z1MOPizamSDfEegMKqxIZ3bfKau8hdE%2FI%2BnLanFbbxAVWg8wIZ6%2BZh%2FR%2FEFqdkN6KLZcK44MV5%2F2xDe%2BTQY3YOCrtLX8Fg%2FMFxL3xFx8%2FxWfXri8eb73kLZ9dd1QTGqJAor44PfGr3XN9zUuzu0mTv1L3A5SPvSpt4T6%2BZjurspYA9wmckbOXI8VOCCCQOjGb0tiapb2YhQ%2BTXcYzjMwcU%2FdhMBbHGooc7zTK6KHswsgWAiskzlCawJuKV1edOu9OECzh3gCLObpDcSqvevf7mm8dJzfGfvomZb90%2BMT3u7vjvLnh9J2aCakxSE7DTFHZs%2FITvMEstuzzbbFRaUAAxWAse%2Bje93fkgzU%2Fb9H9QMOmcuNEGOqUBOEaR3GAp54cFahLBH3GPZux%2F8AXo6X95bRlhkWa6chLu31ZFMWBGjSiYN1UcyNGT%2BzS9hyZixjU2Z%2Bgt9F2MpN%2BLB2h55LiMFK%2FISz7KMZlTVMVOyi65pden%2BECaR7wxfQyYW2ozLztNpakSySZxRlDR3aYCRIzmZHnkPfanADoUFO0v35KdzE6UW%2BZ85DZyLzXP6kKAlutgekWXDsBlGU45duVu&X-Amz-Signature=2917329c6fe181dc52cbd8a8ec9a83fcaf2a78a8560f0cd9707c23688e8c3861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=8139006370007f10ad03fb050be73e273e061b0fdde643ae19038ccaa237f0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=90e9e2b210c78f8de84d475114e5d1006a12c88f586fc45409c60fe6d45ce76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=0861a24be074f79f31a71f832144cacc76ec083a4cdbb236551df7ad927527ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=25e6cd0fc599611b1075a048c12a977697e8ea289b152ce16b1da33bac96ee1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=cccc029627099e1a17f579027f6702a376f52b2025b0ab786bff1689771e9376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=101ea1cc7af1e2966f8abc9e7a85e315580b8ae7bd091cc54a05812fbfe951d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=73880346522814db61baaf73069f143356755f978c041561421542e7d2795fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=fe52d99d74fbcb2199329956c59a669cf38abea21606da89ffbc7edf3c61d610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OLZMIQ%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCfauMbINf9lybVYdyadtT1wZJ8AZi7i%2Fk3oqfcg2Ps1wIgWFv%2BfR3I3Ww1lPg5j7nFv1PT0lrE94piX%2FBS2Rd%2FKhUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsbQyOp6Eh866a1SSrcA10KcJ428TDedaPCdKStmAEi4i%2FwMMj2iwsMmvZzUkXihPZVjl2pz5%2F2WUsRBaFneTqQnWUGtIjSEUMFtEyK8qD6rEzDBkj7DAijwlvR8CmtfH3y8nOkVHKtzVNzr1WcfmqSq%2Ftp0q0rp4ysYkHH%2B5l7hovMzpzqOptfPKFUVuvd0Zjt7fEItMbFduqDbO9mUo8lep%2FBrrcuxxA8rfPr6AkUNuk6jyiracstEyFdohIrIr8J1uN6lI2KIUaf0EotNj9XnoD0IeWBraGW1srYfuVi5loCbFT5BpCyrUdODWYRFQHjRvARjLZRoWMqP4xRuNz4PmtovtHa%2BNeymkqNO%2F6ZOzxJaojlWPdKRikWbc%2FzunhkH2LR91YoSl7lS5bWEGeH%2F1xBBtU5BgjOkc3YNXDX23tu9m5cUB%2BLp2d3K0Xgm4nCcK5MFgx%2F2GlVgdeye3LgzqhhXrB%2Fcd6RWwqVbhPlJ7Z1W02aummQujNuykrc860Ag3UuVLJbgrziwPvJ2FhyP9uXHzgx4wSpGagyFG5dJUAQIsskYs6kO0nY%2F1bdoZnrQVxv61CkVxXXjAt1QlOJ48aI7b3r3MPU2RFeeW8zekZ2tsTbni3kUn%2Bs%2FhNQRLpCFwR9vq7oZs90MOyduNEGOqUBeHYMo%2FALkB0KAvAdwhh435wR2UOqI1h00eHF5QQGDnAVkpr6wK1UHTK1kPeP%2BMULU8H7LD3NHIp%2FSqmEnrc8eH305yDdsjjAnaZQq%2BY9xo5ebuzHc0cy84llPFXhzuIz6nJUMmvGavAjJ82hWAUgWU%2B1ayOnZAOnvptCr0uhSPjPm9ITtjL%2BqwBxAB16zozas%2FazbPD7dCPhM9oFjRF%2BPC49WbLK&X-Amz-Signature=8db9672885174867cda16bbf4849cb0ed8d65f4e45ba690c8f6f219df0c61203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
