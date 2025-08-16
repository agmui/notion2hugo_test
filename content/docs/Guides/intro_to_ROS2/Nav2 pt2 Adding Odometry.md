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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=30ee5c670425f11596c0306c39e826c5ebcb15531da9ca7019112e9ed9284921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=694471409fbdf3c29000e7d17655a9377c51d3e4b24b4a9596f35399d82be216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=6189314a91512572665aca63a5c3e7b9242a9f62e4dd5322eb4113a9867f5bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=40715fe2882c2d24642384c4a7a2af45e3d382f8bf64e6fed0703b42ad713fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=e0ec98291952d1df5d64a1513ee7720240560c79455d874da4ecdb518dcd8dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=d649a3105f83b0c9a81f061368cfb519c16ac5f1d201b259bb2e2350839b9053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=a7c41fbf337e6b6e791e4da4b20b49ebc60653fc0fa1021e6b3898f2f13fed84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=bb4c720d6cb025275a370e2eee64e9792441479da26289a69dee8c7c185ba709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=a5e86968d9bed1ccb3b29560ccee7619b420d1f733a7e241b929a1c670a4a235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOZDN3X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE6QIAnsCX62%2B96CkG9sFCd%2F6tizyy9AqEyOP0RDPkC%2FAiEAsVn0xxdnn6nzub%2BCOlMmw45P2twCdnG8lz3%2F%2BsUOSboq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHQRSrMV0IP5n7SvuSrcA2nPpVJBGmlG5vQlDIqcGZPyuAZ6p%2FQ40ZuRzfWJGg%2BS8kYEuWUWSNsK91yein5UDG%2Fua0P3AQIn%2B1PdkJ8M2cnxQJV1T5wftF15n5RCVTxNk0F1DkgmzU6%2BD5L3VAE3lKgu7dqF%2BaXXx8WSFr%2BKnORnTxmAG8z6rICYcXE2tKTiuak7PNkNSrcYMLIaVsleLiNPe33j7tc9M7DMcVyCRh%2FqHpkpFcFlt9DxDjC5edI57F90pfG3wLWt0Y5eLewQFi9uenWLh2FzdhPRBZYVpG9p3HXXst1bLlAEVsM%2FpRP7vbETLEjYVRB4%2BixedpZL80p7k0aPyStS5%2BjucYvVpkDNOYrk7sRUe1Y9LviN2qlktauCvZDuc1xgl%2BGIlmtCZW7%2BFZQ0n0d%2BXEBRlBAfQnSCdZz1CYhs%2Bzqdiis%2FdmXoB7o0y%2BiYQpZDpm%2FuCstoEMbF4PyDtrHSNlZS4Aneubk9zU2kpNCBIHV5%2BREHB%2Bo7F3u%2FkS2Fxr1aWmS0nNtCwoJNx6HELbQl71lPN9pOuhn4KKOJDSTGwBcSRBAKtyg%2BLTqLaJp3jmcqcNThOBeCJTEtVCcAWjUQXvCLAeObqOLRluvLYMz8%2BXHKpNj%2F0dg6XZ56N8ZEhqiuJxHUMOyagsUGOqUBZsV7%2BnypUN8R2thamIG4oznKYI1jGSdHQxqSBgNEwZnl2nuUmueBQ1JuqAtRSTwFrBbSx2XBWTrENastJOIQ9JSyn0QUyGZmyfd%2FZtbHRIu8yGdRhzWqkQX06zzJNn8XfA2jZ%2F1x0nfq0EPfy7OEhIQahaIhJqfcZl8yypsxpYsmGN6TwvNWK6qAOx4o069pb4FwpDcDyJnT%2FocqKuLxv4zPlkI%2F&X-Amz-Signature=9cbd8b43be21749657a92cebe5c0357e412076c2326282f08aac68e448f783c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPB7KXA%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC76xblnGeZaW3unYnfW3vXH%2B9Yy5BG4g9ClQhXYMaIHQIhAMm6o6Hvt14oi9P3zOhhAoCUSp8i6xGgHVeVsdhy%2BdorKv8DCHcQABoMNjM3NDIzMTgzODA1Igz7JJobzdQVqVWa50cq3ANuAtRj2VZCEv4%2Bn4XRqB1g8nzzzr2Fi8rICsa5kkazMBKiiXyG3T%2F2ITy6lE9adkvNSDyLmG0H5Ttx1eHTQBLEtJjbT983rY5CbCp8lUBHvNIIEGYaEYmtdQSB0CFmEHBoDfom3h8WEzGnVJV%2BXqa2bp0LpHfOs023wbfHACW%2BqmhShseepkEK0DtVOa3q5EiZYUjf8VzHK9XV%2BACSs%2FBgp5p2j5ZQMXIAurtham14D974wpUdc2pGqOBbYvm2ARnlNST9pEQLxrU5vpm%2Bv%2F2IMhXtNrmvwyrIZG14RH51f3p%2BrM2GmyMmTlQXdVZREWNYI3lP%2BnMoKXuEZjff48%2BwH977kWwDXaZg0bmJZjgKqk5uvgNdOmtgBCz8aTYaFcJNhiW6ETLv60hk6GejojThJAbuTaxG4MBc5W7LLSOaHngdrEofy33AUBJYoBkmKnZi0rSKfbdvCixpLqOaSFAqCadFiyjx3KVfYn483R3Vg7faUriERV6u1TlfdRFvyrb%2Bk5aBYFzSWMqfo2nKJoFY0RG4wzihH7pGfVSjIkx8jG%2BIRyUQDIiH%2BwLud8N6e6o3v1ruVI6fyKNjaMqZfQLrG21aVS30HXnqQRtnBlfy0%2FNfPBnuZTYuY5iGFDCzmILFBjqkATwFltATkUoQ9mfi5YJB4%2Bvie0E5%2FtaABU2m0Wgx21Qi%2FrSEM8WMXm0zR5GA61uLKok2dzBD651UYWlY9ef8wxshHMLzQq0C0I6ZT7w%2FQNn7Yx9StX0c%2BFdcfhotDmT1j28GSleLKpaLHoRXWgxrQAZkITYn00qIB1C8JIUgN7Z5jjnKGtWIVxYOrZWLP9YkNDT7YjzEKAOb0lK0Aui2fHe4IDxp&X-Amz-Signature=052aeb2b33d97355363f6824f096f53ed8df57b440b28f4d92533d2107ad4835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=772f6a815eb1987792cbaac8425a88366569b6ed8d744e6b3303d1c0bd878c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=c12cf85bdd6ea40fafecb4b51f8eda92aeaede329646f0975d7887a4569da82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=1c5de2ba5a3211d026ea0af3dbac26ead68e30f8010ac776a0ce44c50c338b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=b8bfb46113791fa1a10f425c5fee24e55167d58459c23ec7f4c3e8c04f06c536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=3cc60bf253c0923b58c56250d83a2f156128d1106e9790cebb250e60870bcfc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=72064c06c458abae35c71dd0bf1ef6c147b0a6b75fa5f0410cbf0a84008b7e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=3b15d30d24a1479bb993a33414e423e15b22ad1fbee427408ff03a14623f13f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=180f55209160071ac304139c61a2b25d5da1ad65e918889cb8732a41346b69d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UASOFQK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEM81EOVSSZZDoFhI%2FlrdSj6hM%2B%2FYwKvRc42ec%2BfxqN%2FAiEAxMIpvF6QeITa5VpftdI5YC3uEaHhaKnQv7fXSOWPVRYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIRHrrFfkqNlhd3RYCrcA0DPemGATeo1TUgIXKlJOePadrV%2BRxVr1TCt5VK%2B4zO1y%2BxZ2nrQG%2BpFf0KwxmEyv5AA08%2Bam9EsCS1XOh6oHyan%2F3enaDnwto4%2FPGQ0c3FJAVEp6apftYCCyVQzG7BAkTwXRJdpbJxusIbxHSwr09UpcDlq%2B%2B6n7nTC%2B8wj594eOGMUzPJqXYT5dUyzEmcEeovU7IZZbNC8%2Bg1aeueS9sPGkjLIcoXkN1BznroBSt8kqV96%2BbZcx%2BQdNaaXWj8q2hqawYOY8Js9tcMHoC%2FUqGsOFyhjF62bk7qbymh3f127FsjoxrbdH2VONmIZpwE5SAY9EiT1UOM6LZEzWCerg2qFa1%2FI2sqS34yMiJ6HtxLJr4h407L0iWMZlyimU7T4Gf97Tgggtvu0TjKNS3UnkJ4XcoGsRBOknjJFLFx3YRnI2rDPmVk64G3YyUQIGj0gMYTzD2cVwRJdJTuiRcmy65OhW7VaKMZwGcCc%2FUD4M%2Bg4T4TTQEILnjLHb%2Fz57DK36Tf2xh%2FDQhx7pBimiFMNBMdWlN70PMLcoyoxxZYXper7VeOAXmKUX2wbK9yabYUpsn6ttUOs5NY6zvAafPmDnmzd8vKJBAa4M5AJIUq3mKz%2BKI2M9YX15Jwhd%2BX5MJeagsUGOqUBrWxsxalZhX7vez05RK1aCwHmFe520vrtsguzqzrj1rmNR9JQX4LE61A9IL4h3EitcsIVfAt2n3BDwx%2BovUDpU8eZpUvXwzkpJQHxfdz54EUxmjJ2KqBfHNHNRW1h4398FblBZrjf5ptQt7WoSx0wEyXuKAnk%2FAf4xY8Ao4ihljN503J0ZORep45GUIu3UzTlGRYKFfiW8uf0yjEQmyqgs4RWCRkZ&X-Amz-Signature=7abcf507f6aad5d755636f6e82332a00e8726e9384bf5cd0a1e8a0302cd75cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
