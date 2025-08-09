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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=6ba6b82e9460cda05c011962bea529358455e786be74788f343b2d33ab03e1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=df7ea3a03bb4dc6a5d5f658effff71c9e028e3ebacae315a35b3a21c4343bd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=042d41a9394085b56bc17b38a5426c2c8adb4db004cd62c443a94b96e18e74ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=b6471b12cc4c657b5f58071c16d7d40de592ac29f771e27aee3bafb6ad0e4084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=33efcace43b56c5e4c2469e8f10ba86286195a0e11ae3bfe7cc2dd8315bb229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=009fb1e6ec495a1c8bcaac84c8cf82180eeab630c412c37ce39ca6a638899135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=6ca978ac7222349c09894f782307c2403529de75bf647d1a89f9c2f55839102a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=342267f56313efaec453a98836b02ff4097a162c7d8db37e773897f3288f085f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=1c12155c8a328a8a3e9f428d13ed14f33bd5b3a407a04c2d147603e34d64636d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SRABVA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN88kTjJnUwJt%2F2XviZGA%2FhzzeqgmlL2Wxql%2BPGhL2%2FQIgDNg0VGrdxAftj7vsfl7xZZjmNSUUVLDa62Kcf60iQVcqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoi1tND8oWD3KbSwyrcA%2Bnl1Jh%2BBkSINsqv3HSa96duSXsXpWA3jKQVAgLUNRY6Cnqo4kEd%2FfUpee%2FwQFQ5OdBtkkHeLYFSHrZ0vFDwpN2S1voT7SF6LpEwlb58tLXIZQlpXQ9eYW%2Fu6K7EfXb0n5Ew1YQTjZOIxEKM4nG6je1tcTPvjGQfEpD6sax4UMfTFGGT7UnWlbXRypnGnoEMu58eg0sbpvyoq6AVE0%2Bm9gof%2BvTWbNfk%2BDECDwvC9c0DboUH%2F3Ys0yHd2MUZwKMZbi12ph5EG9lBKMCfO4Swip7vwNZuv0AelraRN%2Bu%2B8ZsNJLuM%2F%2F97PfIQ1fVY%2BsffchVFojntafXgEnBlt4K%2BiRlgC%2B64zLDFvI8ij4ChMIIO893lwjkQaaLDvq%2BmEwawgsraETzL0CVB4rSPsJKZzLkpPyaNx3e1Pnn7LDTdaKqb6cvs3mVgqiWiLYYA%2F%2B73%2BpSouOI%2F0N5z9wOKWnD5GdOd5adX8WdFDseTcc8o%2FfG44alqvWQR2ZBHxDllopRYzty18ZyYF5Kuag%2FYRUcED%2FPE53IWoLU%2BBo1ntXMgV9NI7BN0XR8QhsAyYG2wSQ5QewPpZNL57cyzaxHYagCqR5nbgnqkCXyT%2FvAeSA5L04LC1ggIgf4412dhBIjQMKqL38QGOqUBBwFe4OUCQngqgm48HYUtkMHdqAe6U2VR9fE01gtey2I85BsVkVWTdOnjL6wvuv8x3QV8F20HbDs9HRstkGfRqqo7tu8bkRdcWdF5SnhajXaCZjFFcwaLqVL4uDjed0ftmfLEJ%2BkVexWps9R0prGTnX%2FBHlNs86asvXeL0u4MBY4gDLlQxy3Ea1dDXjpZorQnUeLsxlTmy1TJvKBelXYwRAXTrDxL&X-Amz-Signature=797f04a081ff1a8197b6420a3782deec57eb95adb769708318dcafbd63dc88a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZPWNM3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJd0WV%2B%2FVu3rm1jqa8hj46kxeHFscWglv78HrEgQx3TAiEA0u4YKbPDlFwf95NDMkz%2F5LbCsHor9lq%2BFjN%2FvsbBvpQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByNgh8LriBjACm7oyrcA8Afi3KpFVyHh2QlNBOUtEr%2Be4ccitGKOnUed7VHdOnj%2FJTS8aggbQDvWYrBGk0%2FM%2F0j3s0yzejyj1J4oQ21WqoI96oui4ei%2Fh55Urz5DRecP5Dc2QexyzBLBpyz5k%2Bnvdh1tu8bqx4xSzliCRZvuUT0ZJytWFUNozMMippYR4lkqr0%2Bl52OpeRqglQXu2riaZSqw1qxpboYeACyROCRZjIWFXi8buzYLZXvond0Qc%2B9ERToLtIQ3kuiIPL6qjyNoECza7y8EmBo%2B4WoFVUm0E8%2FTqRd5nzTcpngHfbcWFd%2BDwLop88rhIvRujKzn7Wn9q3FjaIqdHyxYdFlM40kb6mvYdfGzokn8l8w9Vj2b%2FxJDJzfxSxESWFCVceGN%2FCbTpvKqw48wO9ncg4YlvMVb0DukkPhZvklGzi584JokHmfPKM2j85LokE5nCaqqk%2FUR9G7000QeDg50F7jH3fchy9CBZtxj4YID9zUmKRNsgQDAlSSae1ZD3FtfIUP7YOI8vg4D0Y5y85HJnVLrwkqLeHc6KgvkwdIFNeOmgKnH4gHaw5e2u3DRqXGLWqZ8ifZA8fVJlqr5qCxaeQqRB1JCg%2FyVpdtws9s3u98q9crcDe1hweoBLxIAFFeS%2BPwML2L38QGOqUB41wDIotzjnnfhOefTKXoq5Z6arFF1MREWoR%2FbuzyYyoylhqsCQJLnm%2FRShybnXJxPjI7u%2FWKlIGp7W%2Fwj2UhIPqVw57QVCv3X%2FBtoZkZa%2FCMtY3gFARqvMdx4J2sy9QP6PmT0SLfdV4oheeaQSpCpw9fvcyZ%2BAh2Z%2B9gnzbXn6GZ4LlIt7dLQPg%2F6fQQ8S1LYPknflvfW3pBgpLY2f6qllP79Xqc&X-Amz-Signature=c8e9e6d00b80caaabdb19da66d79ac301168f1e1a56125c5d4d2caeb06694d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=aa47524f5040cffea893acd85f6dbe056d1f9e884a4c2aed51360c75b21636d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=4da9e8ba69263852ff814f282d5efae00b9b8a4a290cd3d214debe91d3a001f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=c644e29264aac100b750701d0467600c9a32247f5cde67bc7cbcffd11180c387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=0d5cb01cd3450e80e773fa5accb7fc38c4eb9edbba27e1fd279a3a45cc7c71f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=43d2b8d12e523bab585a7fe3ea78e32ed10d17c5c43db404797c2c6eeacfb171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=796909dc6fd6855e46140da9e807cba52354c7c4b038245e4a05a7dc404c1dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=4d4a9edb9b002654eaba1325769c52835012353e82d874ec8860bf0448ae2ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=c59c83450b3c4a1f37a47197fc6027e2c7df081e9b84a8fbf7c411f8bbd025ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWTSY3V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVTiM8%2BmTUbFQkSKTs4bxTYLqxfrhjcO5rO7P1tbL9xAiAgeWNar3vMomG49VqK3sUfs5KrM89TITWUS6ot7%2FEevyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2Fw0UtUNDCmCaSyYKtwD9UNv7i6h5P%2FxZdKOWaEUk%2FvC%2FA8zMgM9JxsXT0BUjTWwhOQ6OT866iWsHDsM6gJ7oUbxLgaIPdxa%2F2lEoVT1GVTDYqIGpoEpnNAHS6OeMD2FPPsN3ztZpzXfDsI1%2BWGETMnJi4Cwi4M0sM1uMCS89sgoworftD6CVDblQY348FK2yi%2FzJiEulhmLPaAfklgByNlxnbISgonPaSX4hIqC2Ka6NT9EbFzhLdIsQZDb8UKqcEX6hAdg%2Bdi%2FeoO2JAQgjqHIKxXCymrY1DuA6pJ7BGYXZG%2BFvo9OWIHa7SMsvMijH0WCE%2BPObfN5RKpkJq80gcEexTeCE0ak5fGz1XSBHq3g%2BnPu8pvntaC%2FeuHeBp3v2upXfI1OMsKkTNZM8fLw7wBXMkJPC3PNy1ezhIaBmOaC1OQbeXkfosCiZsrbdzM69X0Z9QEnmOUImMRZP3AhrGF7%2FWXHpqlrZ%2BsqBAehNnQeDCS2xDKV20Z%2ByloDUB5rxuAjStZS9LLYThCPAnjAnZ3ZnUnzJfNy1pNzXxJFTVmk9pTDnVCEjxfZOTMKF5BJvsvDx8Awfzct%2FElMDGkNAxcMFkIr7ZfFyMWvNRL9TLI6fmKcC8U7pBB4dKcudSt3FPYWPQPqCrBhM60w14vfxAY6pgEHEBGL83wnp8fta0JoSdZLFgCjZYrxT6a%2FAkXyEPITl%2FAHc%2FugFElFw882c%2Bn1dRr5DChDs2Abepiex6hClq%2F%2FSJ528ulAAiOBnRS0oGVsigVGCSCUuBIHw20324gf2xyFdiXPZZiIHoEgXd3dV%2FRPu3mjkcTS9JFIZyczJ0W%2B49eSvnOfCxA%2Bng9jGlmMZh2oGOr3hFlZg6ejAbhaDIt%2BKnMPiwPC&X-Amz-Signature=c72aac56b42d87077f81747394a87c0d8d0801d23f7f846889096fe0c8b0a273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
