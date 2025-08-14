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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=6e8cafecee2644ccbf683d2fa0f8510d095287b81738d2f3948bd51ee5eb9d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=a0d9b4083166bd37d6385fcffdb4e325625302ea04743cd49e545f99fdaaf18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=e592e3c69ada68a786d5e6e02c63048652c631cbdd17693f3b78fbd392466b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=71c0e16ed2f3acb64475abd47fd413247e260a44a2a789c015f13555aad3247c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=7f2b1fe46ca0b3e9bbf4f48bcc2be7a177a102ac905466de35ce0725e83c5a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=e5ac2d8994f5464f7d02e5b6ac0b2241a82d026e76c559ed9138712ec487c74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=7916141375f8739ea6ee54b58dd8a4e01694a7b4237198d553db77d65602bec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=ff91ff1ce855cc3504d16dc00f6c3f173e7b80d16001e9d13c55a80ae462275a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=a0ea4ac894c58ed07d4f808f43597679b210813acf05878d1a428a8582252685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TZRJM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDMDIDyamoZClyv9Q%2F44Ufp5nOmcfxXhJ2Ecq6UMtAOdQIgKV1UMfxM0H7eG8GaW71N1FjsUIfUooFPIIGbhkwkm3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBvOG2QOp4VV397NOircAzErb%2FqC62NCHz7PRvNJq5R3yDliXCj8pFsKYnJ5V2nBUA3lyIs%2FTfLoqwaIY8o%2BnosgPzul5%2FzE%2BfcZ7mKQw41H48E5LveDiwNo9FwT5euB%2FQ7JdsKkmXtTjQ22u%2BzPWAl%2BPcV%2FeAyguXhlV87vobhdoGB%2B%2FFHnuCSw9lHtXR4Qg5qNSW7fkRgsOTFPvw2Th4feZK0%2F7cXHBlFSRsLn0%2Fc2duvacFI4ZNGbXQvWGRgkzZuAz1ib1ujjeOqe9xyNm6C7p4ZyAaAeQaWP8sO6lcKiGMEVv8OU9LJhFHmC%2Fi6ro%2F15egexRZd6XdFj9r6Y3g%2B2jbTp5QVObzqjIvplbommH1e8aOLFgpFAIsKM4j1tdqj%2F048P2uRXZdcCJdudgh8hGXwh3uIYKJNTllBgEYB3mgwfOJ0%2BYebPOdI70ElM7MvorJUTr0BSdmeC%2FtnbbfjU%2BP4iCHql7JVRTF62KfxowvQggSZsgbLMrt1J8eqW5AlJRyIquiVKXs38nSBrivgN6k%2F%2FDiW0d3V6CjHiCTUSD35O9%2FDkm3BFzrf0Xp19JnbZYHk%2FwVSMz4jMXuG%2FhlQ%2Fx1l24bgGnEow%2BnmQXi0ntK5ZSg78nfAiwF%2FnVJPDlLLwfCsmr0%2BL%2B1%2FWMKTp%2BMQGOqUBVYcVBLJaxopS7RPUelgIZ%2FRyhpUtXKH2cQk9248Kw%2FYFdN5nuOaN2%2BV1%2BPt39O5obbvC78PrMgL%2FuVzkpe2%2FFeMdY3nI1uQEdNz9JCAbKEQnaD7EFhHhtCpqGA8vrT6MZANUtxMAkW5cek72Z8by42laTGicX9AT8FQ%2Fb2n6PyZ98twxaZtVTdxbS3pRwv8FJWzW2vZIR%2BqrsZofQ98jMYwproh6&X-Amz-Signature=76305ac82ce8cc00bb17b46c2db40ab3fa38e2a91bf897be58b4a616469a4515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CN5UD7V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIF4%2FB7ySEXmxYV5jeZWuGwUFpj5iqpSfOHnfdOs%2BjlasAiEAq1WXeGMZoSuQ%2BztiMfNYl0LVb1pgzFkQ%2FxgvcFzLoocq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK2NRgycZD9YBS1o1ircA7Mk4RQIFVlktzqoQLcOb9wPuJO4E%2BJCTsOZFqKFpNqZhxU%2Fv83tSlJZO7Wi7FgPdvmxxg2sGz3TBiZ3N6TNh%2F8TFHV2PJr4y%2F4wpdw5T%2BMjH3V%2FAoJqA1VmlPI4hCK52I1cVvgNXucfI2nBENyam0sHdAeVe8tJZHB16qvaMrDEELiUsZTDvy8eCyOG6re40vgpaufoETMQSsEI9NYwZ68jcAwpDfSy8vjd%2FtN7T0dcqirxQBFa5howzhzLbLCj0hJOAYaRhx9%2B0Sm4Z%2BaPmCRUnlBxaKn24cgMPI574MJB3U2djTJsaXBceAgeZwkcencpBCumrUqaEVBWwRf%2F5BLgzkjfxnWIP9p5sQZPTjv6qo3m3DrHcxy0sejw%2FEI%2F2GrLgEnft6EAkSEGENUWw3tQwg3MPWvq%2BV%2BcMs4vO79e%2BW%2BPaQtgm%2FZfqsu0B7jGphwvyR%2BOyPIczo5RtzfcoH0MaGzHIQfHa5u6AY4UXLjUB5pdCc%2FfQdfuxmQ%2BngjweuZEt0yttoRTLZm%2FzgQPL%2FJi11j0pEhDdRSzmhtwiPoBShFp4RwXW6kJRAyXRVbkNhHuArhy6IftANVw5J1WCraYa4c%2BZabvTmjcB%2Ff3LPyZesDuTqY8ckaI8hxtMNfo%2BMQGOqUB%2FCPhOOgXT9MMr4YIZ7OlSiCYPgQjUDuPLxC40UNy1tYJZGLw6RvREcczHfvIBKWj1%2B1A4UKFkyuK54w%2FlUsk8%2B84%2FVOR9Hu0Vj6m1TuUsB7%2FJc%2BmneYhHW9FVjIzDbYPgwEnWREIzST1t8cdWtHiU1M3HHfrAhuklzGpFD6LhboGMuo3MVtHfsrcSbJGA%2BxkTEOvJrOjPrjot7TzDl6eFFlYAVOh&X-Amz-Signature=e5ac7c73111da990ce2026b8d9804349b29638ba10559d517d78aaa30e0cf988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=74c4d573e44148928c1a782104cea0f1a98b84455c08c10e4831d5cea2d571d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=186aeeb8f682589f6c22e4e729d0d6b56419cfffd864bd1dfbc3f73f6a99d884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=3863474b3a903dab091ed40d820d8257af6295e01b86421a6c5583a7f97b19b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=e3b9ac6f7f37b86d6a8007074de94da09a9c725065189f65c3be0fe0b3d9cb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=291a568d03499ec27623b0305f2fff1d33b8fef9a7088008f6dc2a1c2f017b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=f63349062bb97c1b376ca0522a8131168f304be7dc7392802f70af59adef7cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=1beb0f8cf999ebc7f250fbdf024169bdacc4c2d9b20df3a31368d3b7bfa996fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=706fdc619dfeba26a12b7e22dac0326b076039bb3adc1fbb520eb398a81d46ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWDQ3QV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDmRuUsEID9grou5SoMdcR7DZRTSm95pCwj6TZeDpVqWwIhAP9FbZXFPxiJAe%2BT%2BuHfWvunwSTibVZcTH6CyhuWDlaRKv8DCEwQABoMNjM3NDIzMTgzODA1IgyoTzleaYoK6JXvyO4q3AMkM1dHB%2BRUq5RvUn05MBcakBCDOay5I4dUbaiYY7PuKMsMro%2FabjMerOCcq10s%2Fbzn%2FA50PCJbZYE13EaanZjnP5wkFtDq8sZUH3bztONS2tyqddinG29MbBeSQO%2BRdbQRL54lx3Ub2B8qDXXn3dumTPtr0AoMO9FhzWWtI5WCU0Vs02n33RjQQCX83Yk6Jl9EN9fFGFad0htbpEUr9VygBzyUeW74dN718dHPsClzOPVT9d7AvavS%2FcjC4ojS%2FD19IneMyIj1qPEQnNKRQ5Wi814kFWv%2FCw0MmEG3I4RM70UeMnVdeW4mQYzVEelbNSpdXs9G5orOrRvmKdFFEIn1JfvWW6605OgpR6pcHCQXV2p68%2FOMi2mT5nkDINN%2FaTyDoa%2BKu4zy8yVnkNyt%2FwqN8A2ez3O79Ioplz400HhUkB%2FbYT5Jn%2FDGPrWA8HZRwg2hEje%2FqRdnniG2CuU3Ybxok8pP6woUEnXY1WLQ0NrkWAvob8K90ThRTzsYjK7P2dZD4z113cH8Ph0znnMTHJncgBS5Znz801ygnEAgGuHmGf%2FiuzLTwe5vzwbMV7xuf%2FNXI8sY2oikE%2FExvDNaynKT1T3uEOXSBs2M4sIr2cMro9vJhlZEsAVw%2FLIU7TDr6PjEBjqkASx1wBLJw9k8CmWU%2ByoD9XAweOoR1qPr21VamGqRLOVSMkRIQYE33keN%2BS7e75EFvhCsv5EnWdWNjhj196IlfHFoZ18wlYAl%2Bp6Lmmc0ja98bsikznEHrAHGxDPFMynzJO6w6gWByTgCAihl3T%2BwP0URzFFPy4djOCmX0fKDoUWnXtNKte9SLKklz2fEMC30yAIRcuiJ0Tbw3ShIbnuX8zAfwcXl&X-Amz-Signature=15bf15805f9c0285b6eeaa545df3b81b743011dfaa86d7c2a951799be234d111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
