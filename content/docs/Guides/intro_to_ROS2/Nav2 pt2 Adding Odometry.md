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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=03d3db2f2a13b0b3cc2e7aa0ce6e828677d3ed9dec67e7f25e18f00de9e57da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=765d826922593b51a2e0c21b68937ab574a91803987ad7342eaaf038a4be45b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=9a1b3c2506a864e575848ae679227ce0c37b3a514fc8091825dfe3b728f567be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=8066f3de91fcd5f97d28e57ba9aeb4dd94e06e7dfe64fceba18cf795bcac556b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=3c275e0f832e45e1c7ae3a7e4846fdc38e64cc612ddfb070510a0728a7e63ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=6767d9f59e98cb35cc9d83d1aeb8e67ef5c591345b7b4a12de3208179997e8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=2459a0665f41fa96259f3bdae91d460705aecaf1c51b8f19aeb6fccb79e23396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=f0dcf0263d586e24894b5167ceb931012b3d54db58b79467f177a01955e8d9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=2e1450cdaf1994af2014d4f0dc26bde932075ef79e39a45cdbe54edbf1b974cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKMJANK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHhkE47MVGoPg0C5vn%2B9lj6MIjU8kugLIBkJ1exvUyGxAiEAvA86K%2Bl2L0Ir7wN3mYb7x7fq10KWwGSMJvO2suggdgsq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDEXWwlElauyy9RXyvSrcAzdMRGD6TS%2FQ54Iw4SzBDazT3MKjg5iglQFt5xrV%2FcVK3XLDoCrkMzn9KdFw4tjHUgv3%2FyTDcu2a07RKkpMlfdRIkogQonb%2BmGX9Ox9JQPql2YVZK9ISTW6dfbBZyZYwcZpD57%2BBf6L%2FMq86Oyj4hUoL%2Fb4Jye0fgWIOC2RGW42g3xr13jH2HFSAMKR0dNen%2FWswpm4MoH46z9tXfPOTh4cb1f922m7Nz5sgkj5GyhA4KHmO7nKzy%2BIS1fW2ePoeOpUYtlR4xxKa5vWc5YcgKIll7i03Gr5zTcWRMIAMuJtueIFtDUQAqHaHZ6rlCZDGHkBZrw7VYkB04yPArA6%2B9yj%2BfVS23fOY69dNgpwtZuuVTR1fBOtJprtuBvUBBgI8u%2F%2BJMoahK5POZjlTk4tgpqqQKunmLqN%2FnKRa7%2BWf8kW%2BtgHKxQVfemydGOk1MLtIt0vGPiBGCcs8hzceeRUF7aYU0hqg4r5YMdIXFvRreW3FZzOni9S4hDicrRFgyBhgvYKRfNLhpI3%2FGMk%2BkX4PHcUHp%2BRHu2GNkWxw%2FRITs5fsnKMtWd1r7%2BsvSXOABlE2DtdiOWL5q2vG3vEBbeF99kscc0%2BmY4dSaNayrWhAO830AZu9kcwvtu%2Bxkj4uMK3euMkGOqUBPg56iJAhdHD%2FkAUtE5S%2B4mHkXjMzPhGNAGh2zE6RBxPcJR4V4t5%2ByHaYcDO%2BNDYnb0oOXThp%2BtVXjtgr3RLvDfJ%2FUsOcEqYUbvVEIWhlWyYpQH3LOrJ8fZbTWTjQRZ5hsWrHSk4U66YxQDUkY4zimGfVZ1lZmc0ART3MK6L73S%2B1rzzqbj8RnH8hFMj9idzi0sOguXaKvVxwyKWMESV0Xw4zK59H&X-Amz-Signature=19e4671b58d23806fb099277a41bc34f592ef6fc39bf3c3aa26d2c1f9b61d757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHRP3WI%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDEr4NJgm9WhBcQBMuXFqNVPBF4vajW0rGONKlxticqkgIgZgYKvVrQ7khVKw%2B6z4pLJOyW7FvGAHkb4fgH7p0sGVcq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDFwOhMg7YNwa3E6YYircA2CXDAnMK3PZhYMp19KE5MVjlFoRi%2BFxIIQYZZR3QLoHs27PWd%2Fbrp9aBSeTsoWwE3F8crZijzlyrs%2FWtlLbYen20GMCQv8d0swPCOa1aHi6xH7kcVv1rLdJ8M07zPot2oLhWU5UlNjYs6j9nY83HI3lHU9Ea1bOSWj2tFfRvncbX6XVQWoNvNALK6Rwcg8XZ7VR3oKpaghRwJGWfrhXnVnwpP5MQ9t5GD7jAy6x3swkjuOjyZ%2B%2Bs4Mm5G1sbGgM%2B64VdhWjfJ5IIESRgtvHd9gtLhZGpRlXAGgUAsaFBqM%2BixTMaoNJpEGmvEuLRbUqrVBgz0KRUu5FvQ2UPCyQ7koeUqMwbbCLulo6enVqQN4VNTYAbOd8xVZzUu9jvZHLJN5Fqv18rXlJLk%2FxxPwdC7dsmvlsA%2BbQLIgcGDRdBlaN9FR8MJ81zZW2Ni3398Og0WyYpJL2k18pacUKC7P5qZADB4MFGKvrbSgWSomVCEItE6jKr1huXsep1G0v3olETmNzQ%2FWEc1yp1odD6kkWzZj9msMNpXiuapD%2FuWxdM5CdaISD9ISplZ%2BIvTnIJ1TpEYdA8VygrxW8657ACLLqWSYeN3PSJKGGHdagLgJzOv2j4ZAKAsytMOJgkYhXMKLeuMkGOqUBGKP8lS4%2FmCFY8fHCMcGnHbABXu%2F5m85HTO0Y7nlPSR6d3ZRogHdR3%2FAC5Hd%2BSwKFEuPyzuTCH41q5FFP%2BCr5n8Xdso0WwelEM%2FR0dXwXLVFbh4x1IDfTMEE7ZGQiHj1gXkWLUSCR%2BolP9q1a0T6%2B2NSQZj%2F8lxjbf4T4No8p16I0cGTcXDenOpIhR1sMMGnfKsbSQSsqb9rd2ZVF3Gcjb4LB9juw&X-Amz-Signature=382a4690618d38d521711f6a87878e654a1c05c0c4e38486ebc103ee26731319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=5e01e46c55b44a6b54c24c2bd532423eab4d1538182d22be8e24d32a2fd332df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=efc53883e9b0d65f5ffabf81f386d43cd162e8e888d0bd00e444e5a8afe44a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=d0dbecee53229c50eb8091f4818da2a23b2e8fdbd149b5f7e3ac05e0619e4926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=4b16923af21c2029bd0f5a43d93dcbd80af07b4d79de4e6c74cdc3b638884e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=9376e5b10b010869467627172c0fb7bd7086ce981f22628c59be6bb34e1403cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=ed5787453c2ad6d0a2a34678a58fe968310362bfc69bb5ee5f1d5234278030d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=9b69b81542070c4da76606c2e6cd59706866860209b8bd3920fb203b82a3cc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=38b3d2bd0f3be87717c2e52cf26b9b90263d9d8bf644004f5d95250f6362f3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSURNZS%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCPlQOI1PHMQhQhq24%2BaBjsFbMSHDU%2BXQd5mLjzAJO4wwIgU3234g3GFFEUgG%2FTc%2FCDun88jbemhGSS8USb0mGTw0gq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDLj%2BhERt6F9P1LcRlSrcA4C5D9tbwcxONFL9DrlygW5%2BZDW9dKwRLT0a3FpvJ1PkesGg2DXsBTbDu%2FgP5SQCNfJPNYshW7xHao2VrBLFthFvR63c%2Fu%2FUqgipaxMV3cS62E6TiM9deMrFSmYpMjtV7aa58AMPZhDQNCFDDy0ZaIpdcbERABNqOJ6%2FFVZwYMysMm2ATInSxIgtqOzoc%2BDI13%2BoUqrtqOtQbc2OYDQXhdFk%2FBU%2Bi%2FrORs%2Bk0HDSAcvM9pG4rejO3VMTDduHASLbivFXZm%2B75jvgoJa4meXUzF%2BWhNyNRor9B8SQ5%2F62FpkYrdVmVl9rHzyf3JfEZJ6PIZyZtKBDGXe8tcEDDesfD%2FMAKxZNSjk0rh0wZxG5YupF%2BhWjGiOhz6JRcDP%2FFQETbwLwb4AlSVqklqU%2Fhi0zPYWUBSo8rQXvDSMZk07gKYY2gmo1soEy0lvhiL8KfGxJw%2FPieJuZqZkbJwdtURr4050WejbIGeOkx96lzMMwjSX1DVHhBayxwvx5vQsk0FRRf4XAeShEgk5rr7TXUw75XRTKELAXUi2d8COX1mz6SMQjkPAIq1%2FyRmsgbFsRpBvn3FU6nIcY%2FnkkksNznHUveYntlTa6gr6XQnDiV%2Bk1trha5sRQyZoNmv%2FZLX2nMLDeuMkGOqUB4ckRzV6nFy%2FWhvrLpW6LPoKZK3K9zpecdjJKvEpD%2FJeTMQkKYJWmEZLZTcsDUPhQo%2FET2qqz92fqyLwyLUrlOeUbx%2FymehXKepC90RPCxcaB7DYiwrvMoyRYbU%2FzJHSiObpSjW3WMYlA4dzYOpXUZA8stHmtxo0TEKJk1XR9DNHggpcwPxYiX2zf%2BQ6TvbaEuV8zVEQyrOVPvEzzDyQE20nmJpqS&X-Amz-Signature=af2b8f8f80dc9e3de40e12f7a4cd22dbf57e2f4a5f69ef39df3aecf60c55fb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
