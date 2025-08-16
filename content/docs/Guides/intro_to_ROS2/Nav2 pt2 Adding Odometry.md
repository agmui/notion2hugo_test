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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=6bbbd50290d616c823e270fdcf63f4f60443d0c7de13dccd2229cd11855e257d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=085cba7a422d89798c8a96d69d6152bfc728f6af8099561155346acea4b91d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=cb53b566451d93b47c3977bbe87f6bd7cbd47ae51b013313ac0aa022c87bb794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=97e6837141b38026fe5d3beda8f9682ce3201f059bc021d3f09977276a8fb656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=1c56e194da657ed3521d8334e979aeddf2b069fd58055758ee714a46e49b9d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=9f03d7664bd4d5fb9c6e96b03e5e8abecc2b4b232ac2402ac4e0a9bdc2b46cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=6135ddb4fe3af03a37f6c2cb9bf09036e61a93a90c83aa56e785c3cf21bb6102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=ac9e5418b30d28ded54da32b73dd3dc9e7fc2cb0d575570543a728fb6bca3918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=c973089a71d0e4f42f355fb2c0b0a70db3be2efb1d0247d9dad96df992a5a889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX4D3B4W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEq0o1o%2FpI%2BdPFAwRu11dsePysKMsRwVGpMb8lkuT6oNAiBe%2FqKo2x12OxJmjEC67UopYBQf8NA4%2FnNE8SeKZbpeHyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMIiKlAQfY7Z2KbnsHKtwDexOLmfQ%2F%2F6EAKfSqYAUTENMWOxmCXW9dCE%2FPRQcjO83qAogZRPLOBKrgd1g%2BzrObWnDrpLoDAh4M4mM1b85wv2WWPf9RrPD7bd4kK1SloW5lOht%2FD9%2B5NLJy5VAGqCUEPl7GqOsXY9YcYSx06mnFppJRC4lYURgGPCubMYbaX46Zs9FTiF8r6nkv6AZWw%2FelH2p0eYI2YeBhkq4B5YsOkPrAZ2QWm1p1GwoctOVnih6YxOGlu2enm1cxzv1%2FqNfNQmOyltvvUKpAzkntvrqwsTaiJJLEzauTsGT23SIT6FJbXPMwGwC6uBmpM%2BCKIlBlAmhIGAQ5I98iH0OyabJGt%2FHFKUGEL6%2FK2em0WZ5jcApNiMP%2BY6gHdO3fHzm7Ctb1YYPBEJzcaveG5ftuQXI3bnF9VUC1ttTFQoaof2qTfVlTZp%2FDDYsxRaUkQIuXl27Lu13Y4BQRzoZMy2XHdODRF69pHUy98UWpD0c%2BrZ%2BhrTVEWM9yh0wR5wzxAOqegzSG19sGpzx8lneF4jaUcx9EvxVNxWu5C23zq9sK4qKPl2VlbiTf7QPqHY7NYduHBkHg1tG%2BIK3Xg3cXcIKwfl9AcwY0hacjp50IbjdfEOow1Xx2mqL7bHuhmvo1lrgw6uP%2FxAY6pgHRcNvyftMS3jOh69%2Fi3Qn9eXM9aGbp9qHxB7w6soVZLmYI6n9F4hWFXuoPItB7S26qPsdn4GcQFPyxsVHGGxd3C%2FYMyc1pvGVvqVZ33g2cqtnEmIqksG9G6RqgQdH0Vyqu0agDB9nRMrgwxHezzUbz1bUT4Ga9K9NrsA%2BM4LVaha8Uj33%2FcLs9TECxG589%2FpHBVOKSnBpJh%2FyLG1Sg9BINT6Dfds6n&X-Amz-Signature=d738cf04fe724cc9dd155fea4dbff25db777840aad8ecf82502d8d1fc07011e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL4F4BD2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCZL4BXIV9KjB1EnRfr%2FqjTSysT4XT0bUjpUBV8TZJDtQIhAPvVqqmHdvp8Gd98hy9B1la50w03Mcc1CNxHhg1RxhjUKv8DCG0QABoMNjM3NDIzMTgzODA1IgxCh3JAmPnLAD%2F71IQq3AMidV2RRMxeJ2nuTHjyKz3B8RTUJOdU9WB9B4Ovsseemee%2BwQ1ch%2BeiMwIEuQ%2BkvNXYKGMPG3zhwu2vR5lNI5r%2FC6xDfBPUjXLcd4CQRZ6BVQai5RFtgURf93PbT0MeFYm%2BZTWbMJ%2Fafy%2FsDgnccf77si05v3VKkpODep2mgr7BCPtGWoqv7jJzHSSybvsZKj2M282j5Lm%2F1hUXHcEAEg39qGqfBQBviqgIPZAIgmF%2BAXystRtsIYgzZItW13pXA1MVUFQqr%2BQw7y7UfsngJTnkJtMptxeKbxna0PyVJJ6RBSWxqZvsbTtMfvhPSi2%2FFC6sx6myEuXua3bGBNhL5YqpzYjiHueByoPuB3N2NqeJ6lGco6KUjFMgEd9o2f6nlC8KcLcBpR2eJ15FXUeU0UMte1WQSEGXiuJH3rt%2Ba05qD%2BfhJi6Un%2Ft5mJUxad4q7JmkzLgI7LZMxuY1I4eysd3ezn%2FuCjlko8dMZDgfjBhMTpp%2FhOlfuVYftnSc5ovZRqKhXL3cCPQHfC1N8gl%2BBeCQhWBkDQv9%2FBdmj%2BBTzcK1bv5PT%2FFnXtVfmQQZHGpdME%2BDKan2r1REL4MdrkbhheVYNMpbJkVFXtB%2BWn1bF6j17F6qA2owldPLQshkeTCGi4DFBjqkAWFI2eWLNTGeAnv6YqM27MgT6FyJGNfwlXpV7PtAa3BQjUmL%2FjVaWdtaHaA8NahxTBxSSHJQSDbHBvxXbWCvJQzgJ2vd1ex3WhjAC4mN0rtl9K4R28mVezu95gP02%2FbXX36w1qhfe6lnfTbXX0u1Y8d95SNiWQwYQUqobnuQypFjSZ3NG5p9xatYGssz%2FpY%2FoAYcq5pZMGysBRB8LM32fqfrMX0%2B&X-Amz-Signature=705c6c62b9a01e6ddc8fb1ef29abec97e9af0296469c1f875b9db6c906a30d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=6e0396fdfb3c4eb1af52aa64e60a8f24cde30b2f4deab6a4f07e0c0d0027879e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=53db7d2026f1e4d362ff133dec71d85401d537bdd73f34bea57ed956b74f05de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=c64d509a7fc5a28b1ff98bc6dffee6303ad69b6ad4fa90394ffac8ffac4355b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=ee42e29f92dd3a3d9b4b3d850fd46f108239c2675af6da4735e74cb60a6288f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=a4b5103abca8c3a4e75bba2f3bddbb142ada9c21c1d71797e5788cff000099ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=828841c6bf53baa1690b31373a25990facb84a31174ddf0a07301198f94ce760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=dedb4a740b5a843f800e7885f6786f27b22bf50c825fa02520e03c4249df0286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=882dfee5b37739205f41145aafb7af1de4e44615e8a3438720ea25e3fabaf1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7NZ44%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDXLGaQGtBFEtM2ZdTbKGuNk3ry0LrtNS5ZnnXHN0uSQAIhAJ%2FRBuyLjk5e5Qm2uaRZQv3BHxqBtL0mKkTRORCG7xGJKv8DCG0QABoMNjM3NDIzMTgzODA1IgzpjLXMW%2BXfCdkXigMq3ANTsKFxCRplGi%2FJ0A4nSArfB7s5Y5wICl74X1e%2F7pkgkoGeug3pc4U85U7J%2Bmi0qcwRVlpd5%2BAq4KsMVRhHygCRq5gu%2BKErgfu8gEjNx3EsuIRnzH2C7pUcFwXJpy7YSYxelgoGsl3X9eQ6%2B2Rpggl7vBt2kgPgpgL0V7B%2BFocLLg6Bfy8zgrLGThhwzTIZ44kqTwsAgH2Cf%2B0H3Am8wZ0kaZ7dgf3BYEaEm3YVSv1db9WIqZuK5%2BWUfd6j8yukfsC9NAcW31LnBUUkLt3Is6FvcGlLvM6yrcRC7WgIpcLcCwue2cmUXrMXuM7%2FliHOTzjz%2FpTKYhlRyEUb384%2FdsONwdb6DhkIWS7oejR%2BpGmCoq8%2BTsgzuKvOK150hFkJmtpjzmPJ926fTuRG7VJjdW3EiUW7n2boSXMr9%2FDYV14lr5tnkpoOaZ5oWKYuAW2%2BNjv4qOY6xAldmIctR0em7ougLfxb2ra4ZsQaDxJq%2Bp3UMnES7e0KTYK4FQzAMiK8qhKiC9E0N1PN1o5nv%2BU7evujnWxfkCiJqjzqzVCfxmJkVGcTDlKMA3Y537GDNtZmAhuokFBesqHbPj2Rgb9LPliIRVp1gStp817xerIOkxdxuqBYAMFVSIe3MqaCQzDrioDFBjqkAfzlcpkIHMQa3UBoLCyiY9bYcsUnfGDNyiAsPjF8LEFjLfHwlFUyR2jksBaivse5tPxdRQWRQhvuNrW2Sc1RKcAyVra%2FRRT0r7c98ZMdD5Gp%2FrMREQBBp1%2FbikNEcklanw3VArwlqdcdpoY%2BtMMDzKcfy40BxBXKH%2BteyUOSr3gg9lPsQka1iynSDOF0KRdZJGxpd3hjcUQUXbfQBqSrROKs19NP&X-Amz-Signature=f376f8d534473c7885b61bb6eeff727cd9b0a9cd58bbb1c6a3b1a7b059f40c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
