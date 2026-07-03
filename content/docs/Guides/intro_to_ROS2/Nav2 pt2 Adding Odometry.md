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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=efd1809c02e9541368248c2de38f91794f76c2b867c3e537a6e857834b50d344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=e2ee19ded8be9d41c6c14aecc08a5913fa1f0d3b2a03dfff2e764b656e50e75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=0d56d9d0038912974836b091fce8dcd5837bdeb1330ea5bdae384e422f89e37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=f8b5d6a799e4a1432279172723c63fbf9a61bc45469872185cb630d4fd1d0d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=cd967bdcf9aa8ac0a7b82ec6ee888a21c63e2aed3ff059c15733db6f13773cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=ed279fd3e9a2fa13410102638c3115966109f7c0692d4f4b439cdb7ac32cf9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=c115057400e0f91ccec431d694c247c98970f7ce84db3a981e7b073ca3ca0eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=c32237075bbb3a4ecc03cb74244d455d708f5d451d9be930ea2b4063a989c441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=a4592cd9fb2fb9f2281463ccdf439b532d4cb540af36ddb9273fc532b67445f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDPAKVC%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIBnKCyoKLE%2BepZ7lLbvO9THh%2Fv7m1sK88bA1C4cqe4%2BpAiBJqcP67K%2Ft%2FTkGpUKsNfkwyZNMnw0slSC75XcoLy1nDyr%2FAwgEEAAaDDYzNzQyMzE4MzgwNSIMSID6mgLX%2BZiMg7WDKtwDcAHuV%2BznjN3fJ8NTVI4zCK9Chf4vD%2FAzoITWxQjDzZP5Wa%2FEeGIuO7wDAaUwejqBVguzHlKqJftAR%2FZztkdD8mqnzOpSqZmZ48gL41pF6XtUL9hHgEef0SNiFGrPmLUuKSgUe343JTROaOI5nbRH9EO%2BoE3zffF2u3xOxZbNXZAjS3koQ%2Fk3EGyYGQ8xp7iwbYkzfUUmmBBWgn3AadcbUXRh6i3Eo8hFl68jv6D38ML63zOiFm%2Bvmj6tRSwMAn1H1GEBxU0JdpHjZKUhmK9LEOnYzoWUrV1fsPu7rAEGozvRO%2BQ2aGz50DiC9UYEknWaOKhwx%2F8fvIwAl5bAJ2RU%2BibJFhjPI4gQtYsn8We8LI0vikjBN6Z%2FYBPb4gYufWCVeScjWZhudxUe84%2FB0PaGTbuPGbR%2FjeFZc6RTu6yqxfT5VV7Nqv9SXkBf%2F294cN1v0aTe6aon1HMB7rEMtaka9OYO8tvHJ3rRuCOF9oNqKnnrfZpoSN4KoJ3DyL7rWQ7k%2Fcep%2BTW%2BXGHE5p%2BlNY98SALhJrJa0goPLvvfuWV%2FyqYQM1GX0x4xmXmcAQWuSLJ9DcJ9J8KxWui4auSp%2Bedg%2BHdtsbpnjeYItIdASQDSd%2BroFJo2Yit72w3le34wg7yc0gY6pgEQSGXt6TK5KixMdUHWzsU5q%2Fs6XsRzJM4PFgrxcbaYnbkcXs15F2LWGgoneUn1E6BhLW8VK0EWqG1PCs%2B4jOHmoWeMIfgrath%2FNsyqX39qR4fTmJ9UckInDAezlGfzRBuAihMogkcZnGl8RyY%2BfoQzyXPXNKRgYvNCX6uZ1Vz0wcxCsRgEczp256UtGtSCY9dCaShw66AwJTEw1EMHIOZD3Sx64PiQ&X-Amz-Signature=367325ae7f7c3030e65e6a13b2422c28ad568d6f47b9bbbc905e331857c12846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP34PIDS%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCUk0jEYtGFAVGAjvY5Ts5cIQWre7h0Uf1iXkUefuO8vQIgF6pFHxxcXxzRLK7m9HShmZKjqY3NSU8wwU2P4%2Fx%2FWaEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJ4UVryN7sXk1BVVQSrcA7lOaTuibfOhzOrAu9HQ7iZ6DSHWTdS6NXVVQMewt7X84fF4c1xP4pyt1N%2BJ4q0jv6qyMaBGlZXuD%2BZh37xpO%2BsuS%2FdZn87Jhc3Gwt%2B4OD5F8E27Zb1JzQJIYjrnKzAK35zF6%2BZWgjLFs9PUz%2FSl7koUnZ6c7IKZ0XpOfR%2FpgdIy6Zj6fw2wBzLWylC5R6kZtEbUy8pnK%2B4YO0DpNWwmBJklB2WXy04JcH1NwDr9N3%2F0zXQ2HoW7DN0tKeNpgniplJgW%2BdqhLLJhd8HCtoX6czhDu%2BO6yry7wRtFgrIJW%2FA4Lqt9yPcRFNe4GOmD9vmPM2%2Bz4ioBttbqgHn4nRgmirklOjf1RspvZAp3qcqxNSsKJAbQQI%2Bh0wwjq1HP4%2BUa8EtbfvBtYg6w7eIE4hDfSYXLfaGyUMwkQ5TXXj5v9Q8S97QlVXZ1dOxv6cVqZrQR6VPRFstLSVdu5fea9VxXxDYV4qGaZzJjLGEX4%2BFA%2F2qTe%2FD8KegbQri5CvEUw61A%2FodXCqbq07p0OOKtlvFq1Q5315AUool3VJQbHCTAx9Q6A2BD9kEVe%2BrIUK02cHTb%2F5yWxgOQyxVyCgBIXj519DcGYdfiYN4CcVveh14ImBjzMAjF%2BTxhr5rGxn2BMMi5nNIGOqUBJNjzcGnMFVhSl2Vdeu%2FR9j2hHN7z4mTJmzoXYReSeiIZ09K2aHVhxVYeBxf8i3BftfkxONjDIy9AcskVm0IMrVT8KsfVh7PAL9qzxGqTIDOaYydCetgMSx9TCTB%2F10v8QRfHwBGiQ5y%2FPtWhnUsFGGwlkhl84XBl0AzmmrAsWwP56VdpH67B0cgORyeJgsV%2Fc8W0pe0Ftq3pc%2BYejToMqA6HB2Lc&X-Amz-Signature=8fc964ad5342408e2bba579483258ed817ad57c9985c80b2fdc9af4413a88136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=20f17871fda55e0a017cdf873538eee0144fbc93b647c0e362eb17de5b693da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=26f8d548630fac39b9c93cac914206faf66e07d0710a37d6e0a5d99b7d9b1006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=3c33af2fbf8c0cf486de9e2dfc6d16791d4743a351e83f6a0674cb03e09d357a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=92053ac765e550c482a4cef327f6465b3f88870790dd396a6588a2a55e34dd9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=401bf7e5b1e25e404bbb9558bdb185054c32467ba8ca78f2a3c152f2d797dba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=70c2e0138c815ab5d5748070c55da2421877ee5fcdff797747beaf2550b3e081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=78a5404fc2fcebda8518cace52f09af150553786063dd21a8314b6b1998a4e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=6512af51106a25876d2d53c547e068c662a89f19b40bb0e37f7934df53fb6167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ6PQZ3E%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQD12lR5XA%2BW%2FFCrjxLcN9vcdzjnAm%2BFxttLKV0SScKncwIhAIJ%2B%2Bv7AKjf0Mik8k1SYIe9b2ZZOiJnNV787c%2FSzB%2BuzKv8DCAQQABoMNjM3NDIzMTgzODA1Igz8WxbUvdCjfAU4V3sq3ANHUG3xr2tUNQwApYxdtPecf3L0n5Qu6t1hFW6b2l5DuSGmV3zqvu0aBehiYuaFQnzkuAqawwetEUBTW4%2FlnOHjeZ5Q2bavUEqogDp6IXnk4lKGCWaHgZHKGnmJsFrQB%2BTxIEyCGAgJROwu%2BZa03ShP3pFNomrE8smZ5pb8EZ3%2BHo5ZFn8%2B%2FloJv%2FjmJ%2BKwI%2FwmOq%2BD%2BBDvx5HSfd9E11vtA4A4TmWZD%2BQYxpohO5xexw97DYCfSTbByPsQ5myufV1MHezfGgon9fdz3fcThxch8MDaNRhdwgwgWabtSb%2BjvddeVV3vDYGwyepeAHgWMi6JpfNCG6Ex7mclUXO4RHQBNxpS64N5d0AjVxzjdk24LjsrvHhUVXMozWLfIcdxN42xKaG%2BZI%2BCIKdubZfB39Fq0N8fCLD9Ym0wNubi8Tux4LaRyv7Gl%2FvGipMP4ufjTmnyWWfsx1or8pQ3SnSacZEYRBBZXAllmdH2VDxf1qNQaPouXoDaW3%2FJY2rKqh%2FfJjAnzRTDnQN5ua8Nar8iftiP%2BCyVhS18ehwe%2F9zQ6v3f9%2BEvpENUtijtdON%2BW8PuH3un76KK9rBVdkXQIq%2FC7oOdgu8yQaITA5BGUwoNzG3OpotdZKvXGLnBME27lzCcvJzSBjqkAXXej3iZO9Wg3mxURM%2FnjTkb4tq9OkEdMmkwJ6NNGcr6btS%2FteyjMsltAUqWVbvzLliXDLfxpwDF%2BLzQ2Ja65%2FxpZEVYMcYkHomDg860qGwkmvqM%2FFl8Ur2YsJk14OXup%2Fqp%2FEqwa0xIHXBycaOIMib22ghpxSUPWoAqL5GNo7vmh0l7B15wJu7fPwru1J1FWiHKugJSzdDS%2FelnG4Ktt%2F%2B1ucDC&X-Amz-Signature=ebdd23e21ba7742e72cf864222a6b318ebc13ad7ec91fb84805cc378658eb058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
