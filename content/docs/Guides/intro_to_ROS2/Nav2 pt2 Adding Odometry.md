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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=4123b630a05e11c246e436d6d903ec2e73e454ba0a90618cfaf62c145aef5ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=760fbaf3b78ff29b37683a82a7e0c08546804c3b3c2cd2b6da4ba999e9553f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=fd80efb13e633ba8131c974335b41c85b89cd4d39fa1a00cedee6b0a56c1ffcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=216d8aebedc2ee076ab0828b45afc54484f05503ec2aa262e71c6b7fb1cecdab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=652fd891ab019d1b72518232a0eb87ae600952640c0980621e9cf47b95577e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=d12dfcacffb2ffcdf0409c149357d720583b9d8e70fa1009bdbbd1a9153fe3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=d78236f3de6ee0ddb10588eda9498a28127e9b9d09b9b3a42196c25da5f66544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=e63bd22d483a68b2ba81e07cfbbc5128c32df6bf36357dc62f5193725f901b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=d028d37bf1376a8fa0fa24889e920d530ad6e1fba7fac4b75c9361ba9edce849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677SDRHTW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSthkfUf6mWV1wYpW4tDphPAGGf3uPrdHMgSD3zbZxVQIhAPrBB%2FpDIfGgffFi6asrJfTMSdtlhLmlgvCZLUaoIpL3Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzH4777FqQryel7O78q3ANfyU6UDEpMxIvj%2FBwCiqYTZOWt%2FhqUuyH%2BpmrtXYzPHYO6UOL%2BfxygXF43tnuMSaugaPCBvdnhiLeyNQKYJMS925BugQbl1kmHVzQvgLknEk9pZfYTkerNvRoKDVjSqDFv0VW5es6Ub5dOs2GHeShAGdmaP8RgECmLEXigo7Z0C6TVwmtRX9s64XRYFem3IwN%2Fo8mn8e6a%2FFq9m5dGJzNIb6tILQ1iKjO7G%2BStgUs6ksN6Jt8KM%2BQ1voadfHOiwTVO2Hx4pN3EvRnOvBhM649RlJyS%2FOXf2%2B6thEwDCKGItIaMRfxstatvW5DMQZYDLYkZ3146VHzR%2BooQsidgX6ZF8dv0iUyVR9FPhB97sdhRRFizFFnWVt8T2%2BZZWlgniFdKNUmzbA1vei%2BdtCZeW4LupHVaBqgSknB6PVb9mese2%2F8ciOuwI2J7ploZlcPqBJxFNbX1G%2FVxHI6jUTaSVzrfq85xaE1FqAuW266T1sHo%2B7spLnTljCYsixGFxLF%2FoS141Nznikpf3Q71clYtADUG975jZIO0YGjkSdgO6E2SPCcYMIPEs%2BNMtmxYd3k1GdXt9Hr4qcfLSnFQP%2BofVuaIgqKv%2B%2B4V5ZlOM4FRSOHTtjmGdPSfJOwKLsPzITDyifbEBjqkAT%2FADePm99S0wf2YL5vlR0cB14tv1VBBeWHgjd6%2FI%2B1nIdu6Ry%2FsgFJfoL018RHAwi%2B0W0vYa1iKVDEevnTWFJSpio%2F9nGNPVWue5zE4PdAMFarBXtmc%2BywXytKWEVUKNeAwDrfnrRuFvpFUWzW%2Bg1%2F31g6jPMZqvnYon8DR3Mi18NXFQl8c81TSADpMcTy6I6GBSMLI18F%2FGFP31MexQgsUr0b6&X-Amz-Signature=edd68fc4e7c29ab73e689e9965e072405e99b3440750aa52f9e2302ecd37f475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFKPMMS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3o66oFwX%2FOhNy7sFabT0GfmJj0gGmRpd8dlAU5dQ91AiEA74Tr1NuRuf%2FobCZd3H%2FjDOyH0C1OQubUB8cYDn9t2s0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDAd9Qa6JiMZ0RG94CrcAx2SqSNS8ren6ZBsCrJSuFZCEDu%2BWa9CdBIZ5KIXI07fpGu8XZigHv%2BZrz7L42rzWZnR%2Fc0h2GPp3uSRGiFuKLvuUJkvvN4nEaGRUIiiUvDNlVW9nbk90lg211XiBR8906EDny0H8oja0%2FBHPurkHBVRLYCkvafkbW%2Fb2VWFsN%2B6ouCk4cL6tL7beVfU7pi%2F%2BUtFsX0PU4JmZ%2B7ExeQRsxfosFGhjXmqPW%2FD0Sh%2BkLDdvP0NIS5IviGdBR7ChfmdRlUW5bbM07k8GmOXGKqyC2%2FcBeG7QD0Fy98PJ9E5zIbp8pUU63J3LkxBxJ2vwLRBxhat%2Fn53lVIJlf5MLp0a72mrh8AVaStvIL8dzLDmFfYRt4eWzwdaVYksz%2FwukKNJjxVws%2B%2B3vpuy%2FdB6R9d9CQ%2B107NP02kS6y7Sj04p4sM8gqX1V3J%2F8pOQ3nBWf3Z4KxawVvSWOTCS9ZPt11mduUKhNZX3I99yMThT0wrkSstFrNzg%2FNtayGqsr9d2Kxc7kqeogrPZEC%2F%2FSAe4FYbuM%2BaEEacoewFpMYx8bn2KSQ54%2Byw6U6k6bFUc7cfTCQQgpUDpOQ%2Fh%2FSBHro2FRv8NHf13DB%2FJw6BJzNb1PKFfYhceR0d7yhxhNVMjY%2FDEMP%2BJ9sQGOqUBdYyyCbGAUcQOCg8EdmLIpPWPgB5PSKfUlTvRx3d0qJ5cDg98keG3a7tGlovz5YCBg67BodPDpeI71CrlMZBlL97bHWmdpx2vsZu2SeKq1jXpaZchUbiVhtNGvd0odG6TJ8xoI%2B7s7vhNufq%2FWc3nKul3R6hh3zUs38oJ7MD9sarJHrfUxKDyf%2F0o2uD4OOQWm0XB5rMOwOdbL5FC%2Filw%2F7KsaXNw&X-Amz-Signature=496bc15ee5fb0f3655710525c29065746b29fa3face5f72b6f940e18e4190075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=300b23b77330a82a599385ffb5bb161973e70b4023b819dd4d80830c53c41904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=770b16cc07b550b048282cbecd70d058e1d697fb91803e8ff92624a9231cb89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=1755ded73d7932871e8a3536db9bb8f4f01b944a8f247b16f9f6a0afcb6cd17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=f99bb5c0f10d34b68df59e7fadca6d655a0ff0474a1eb96bba36a0e205a3723e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=ee020681cca3ec0cd71c6d47a3d1b9d60d8d0db512cdc5116a3a67c7b69e815c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=0802d4105fd6495d1bc249d24021fc83c8bc1f79b367864211300ad3048f5c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=d256d15839fce4220bd4182afec173f21e135287a64c599d59490d7279f0d67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=9520d7a4503bdeb896b6874a4d8efc3f5728dee29f0c01fd86810bdb63a3f742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEK57ZWO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUF9hTaMQKf1Q5w%2B4AxarW8dUfHBIQvSNhrisNtaS0fQIhANLznuDBCfq00jpzzuFkYWifLOCN7rCVbnqGuQtgnOB7Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxSCeXD7VgMdRdpIXIq3AOAh55A3lIWl7lF045Olw3KrRUmR1eT3usFJcAq2TDhYfic6zr0v6kIXGjiefYv%2Fu2HWNa%2B3XBtGEHRmimqHxUJRC%2Fofhs%2Fg3D7SGF2JfgDo3biOfvcS3PGwhUtVdzIVHggYte1NDlfdrHIBy3n0SD%2F6GE2nZ44Ew2CXsmUJJ%2FhzN167PM%2FoOAC45mx72j1ZVzd0qL7zbj5jwrdm%2FpM8FtDgvI7reT2LoXts3uIePfYK53W3EI8Ob2q6SzFrv%2FGa2lLzUQWfcwlKyAJszK13ckZ%2B0gRqofuHUVBpuuV1mfj15vusjTvOJvu6q6BPnnwjaP2lqa%2Fu1Z6cGmMmPYwbb3Cfw2xLe%2BdxEqtI%2BOPnz4IJkO9IM3xKyxsLOaISrYoYBMeXEvHLWOdVE7kXPT7VKEIWrWtKRTGOmtswo9s%2F3oQuL5H45KUpNNi3kjHGeXvSQfBlVgEdoRE6S5vwTUKu51u7c4adtwjlKqzxyR4dxA5WoRGACVwjno6hPvOjKpewKX1eFegdOBJwk3rGI5UMUIHooF%2FiEW5zmR2OTl%2BomiyZEqtSrqPSMlCTV9BdsS9Oi5%2BbZ3TMkk%2BT8abW9IKN%2B7FAmss%2B%2By3UBS22rmXmpZ8PncfXzHKiXFKiUEWmTD2ifbEBjqkASymHbxRurBgy2Q7wJgXM92yWRsPwBB4ss9%2BrIdirK80LQ7CF9RqwQO7LxT4hvJIqsgiqRajf%2BUqs45Je07ZnSAO%2BW2NNRoyKvsgT6%2FpRH9VNGX8%2BqeifYv2stpXingTnomnTVHNIuYRUETrFE2O7v%2B48JMpJbrYXpvuM6Z0SzXEnRBj2B1776yykGiV%2F6keP4jcK9tkTubQ%2BQy33dCtTaRmt04A&X-Amz-Signature=a86262434c07612209ee6c21fc1817b3113acd01b0802039a104202f618a80fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
