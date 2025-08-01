---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=9f9ab1c9b5baff158ebff439e136aabe14fd6854f07fe5bbe79994d73f84094a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=6996ffbf8eb6d4206a33b95141a3bc87f12de2d8b1c2afed554da9c9a0c528cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=dfd6f20e69251cbf66e1445b83502250c6d8b0b3f7b419552b1a8a8976ce5ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=dbee71e17771c1364276b5e1a3cc00439dc22c23eb618b04e8d281ea763f15ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=07f0f21c8fd6e27e8d6f6498fe6b65deddcbcaa26a7fe3da0f556a8e9db9accc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=4a24f949d856999567e6a75ca883a153882184eb33313e9967718b47a8e6b902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=7ee04fd2b33413367d161e4fd9d0daf431346d110ccc445ae82cfd584edf7455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=72ca735f49032a1e3bf313b485a9841e96c5381318ab202a23744ecb66cb2fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=76dc3e43d6e5232750384bf92afec7ac8022dbd7b45ad4895e3d9f97bea9fcd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2BNPV3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1pgkTH9zcE3nKavWYgnoNCc8GlclgMHhvdCAkV95JaQIhAN9S7tkUpRGxGGP9BALl4HdZn3mVvwMlo7x8qqUwTWOBKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0nIhGfIH8qNtLgOUq3APvnrWG0dP03yBTmiLu4mRSMEaNRWxNC%2BDXOf2XA1GRkgtvQj1AoNrgkWiR6ZTJ1fJLGPMe3BiRHYwRQFtGiPxJY%2Fouuo6sMDdvxwz0gjCl%2BiJ%2Bbtu9YluSHQlabD3WRsDaaD0ABI7HeheXEqVLsRR0AhJ5x7t9XYCglWxKsUNcTGoFkBukfvkkTx1w5Fk8wFZub1Am9hCYgjpxwCG%2BF%2Ffyn0GJhCowO9dpZv88TN222sXaFmrAPYxzpfBVcVkwGKWS0zVVsx6keoZQXVd1blw5lAqDjurixjxlv4WtLX058yAu%2FC7GH8ZHJ4AUdu1prE26AwJGFxtJEQIUA8PI%2BoXrdFTxh1Q%2FEQaM%2BTuQHzQnbx2wvIYzUNB8EI0mI%2BZhgC%2FtFpg26iZb%2FghgvUeUscnQ6WJUhBicnPeY6MrTT4mYomUMmOXe8Ahn6qyaXc1%2FzSjsKSi75ZQXa794ZAtebjsGdBoUpCiHoBlabOhxhIEMfToS3n67L40KhC0kgtcENvPeC5K9JwQxEB2Db35uJktPFB8GUAL%2F9BFAXKccVncmY6W5yM0u8ZHw%2F6RFJ%2FuzClejySlfvwb86VPyvZdmIcDwfw7e3HPtyaJTEfDTfJOYY6MMYSqLKFxq9Bx6KTDF47LEBjqkAWZgkGn7l9cyAyU5lLXQCGhTEJlrMMVqt6yXwYqMqnHaAQctIkQG%2B9fmKZVq8z43UNDCvUcZnw35PCExA5w%2BaELYWGlC3r%2F6wn3D8ZuFEq0RDU45i7T6iLI5W0w4bHSxu9EnWyBFFb1In4lsDn9GACyKtEDyyrPmdSa3FD8TnjhDTQ2wRASKnBCIIp8vGL6ezq2ESRkOrHOavq0xEZMbPPTqwv94&X-Amz-Signature=cf4727d0f309929ca531120b2e5cbc8e6944092aaeb5fa62234cfb68c2586ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA7LWER%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmN0wLAJCkJfJ499ibXhnF6QB7IL8gbSEJ4c9J2mhM6AiEAkRizvgBZcKMxlSQtJbd6zTZ2fxmt5OhdAvrwSgbZiJQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbBOWicX2m96we1HCrcA1u8Mrdkg6XjwVDO2KcqOwS06bc96oGEBOz0Ftl5RmCOSGMiUg4F6kXcFO%2FoTCG7Hv3h7K%2FMG4biPPm930bTEe2b4e4mRGCLnNKNI3%2FWpLQZGxcF%2BanJ2CQq8wL60BiKhhVMGmQJG32abiYhYMegm3qYGa7pJbTJDZgaFARY6LemprubOaHEcNr%2FOJZXjmULOnkQDs5gcTwmIaqV3qiVtUHi8S8w%2FIHegc8erKb%2BWQr1JGUlBoS0t%2BjBwsUjYbirWahiQZyKKbckqqtNtak4da2qfmiqsNkhXU9lY1xIZvd1xP7FNIft6AiMuqJDkEZ6CGlVSyGZ%2FPGsZX96s6%2FTBm5Zvug1uRz2UrtV%2Bbo2HBddfQPnyWwH8HqyeRpGpt1Zuui4imDllBURWnFcTOubK3fxyTihLkCiGC8ozTb5VvJRR6bpT%2B8%2FHq00vGp%2BtfyuX0JAPEnyWsJBBMO9BKM97Qx4hm3bfoDv%2BltBXXTCN%2BGRpbOnqRNQaVFDa3RQi815ti3q8MFQcXM%2Bq4od5%2BTD%2FRu33ySdjxFzQVbqXA4lPBAHxusEU%2Bi7SJIN2PnzYd081Z0HR3rh0VsSHVH1Hcp63vDJ9rTD9oIXF%2Br5Q3fLXpCRn1ZwxJq1WAMfjuOFMK7kssQGOqUBGV%2FshaBFeRihwpvBIXi43Uy7briZT1s2OkZXI1sKaXfHjmjxLtOOWmNuK%2FBamB5CFe3S2ZZ3u87ZMwAIs9nd3hX4MkE4PbxocSKQAc3FW9jV6bqQeD6Lpkw8mz70dkVhA0kr6uhInfSbM9pPBQRiA3kFpmnDmpT1ykt23hL59JsRf3zz585vk8DZlZL1vbxP9NETEP9fYB%2Blo4goSpevl3JYo3YY&X-Amz-Signature=7d07b4fd2ed06ab37900ef9ddd355e9c438ab4095578f9a8a4d8ea495a1e4d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=395c6634eaf08a020edb87cc5968374cb0eab3d84851fa001c9a0db493624535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=2b625a81970110f39afc25e71c8ca42880816c52030dd4452573fca8dfce4fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=a6d7cb40df94f27dd55067be96d9a30b9cdf892b0a005cdbd35c4bec8352cbb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=21bc7b0cdb391c72f51a8a91ecb73aa0bd5d166ffabdac295ec908372ef6024d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=b606a78fb1d20ae44babbdb4c179b4c8188fed018f6fb423f725172f6ea60ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=b4f9bfd46ea4ee94bfbd1c76f9ac8429b7c94741ac83fe81c97f6d73f50222a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=d2f48f83c34381a91f2c08219ee814539788f892d43c3b9540dbf05d55f96b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWEIQC2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2dW8JbN6tbJRP1dSSOODXK%2B2AxUO%2BlBhK3Tdljj7wfAiB5oNBu0mxvWkP62U0o4pWd%2FSxdE4olp7iV47bl2rq9WCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Nvp0o0w2Y%2Fz6wZXKtwDaYoMDouq69WDxI7%2Fn%2Fz2QzoHPTfzdZw7R9Jbg0w5%2FEgN%2B9YnrP1Ituqm3YFimsivVS%2FAkTlPfOE9N14R%2BzNqCF4QnQgK%2BhscUwik30uS7n6TiYOnxwJn9OG7tbydfzx0DpdsulpF7ngnxHdxs0UQeY8jx4ZPeJvTNIS01jJub7z%2FYd031rq4mLVLbEL3%2B8Iv01nQbBCTfGuw7SysbQKbYEsBfkRFM6LuDtQ0iDRBwy9e1y2IzdoeDKGtey9R0pvuVG%2Byb7UXsgCBhbq%2Bymr8ySTLEFNjFrffBnhiMm0p5%2BS5iGG3OaJWNWhovwaArLi5Pg1eTuawdM6nMx4nD9nxaHEn0Y8H9AkW7oS97DPZpQHv3POb5cd9LWHjGowAZMW6yZTSrz%2B6ZWeWimpqUHrWHLHN8nS%2BKwfXsUam1NM%2BdLCtbuWyC49jn6YdosxBHz0x80hPJvHWeFMVGFhAgxrIlj9FywiB825GB1ZJ86ZP%2Fx%2F0yEZsUcYN58wg%2FzHLRO36aVQ4IyIVzBLFjDjy74UJ1LF%2FValsqc21lndT6eoXUveYD2gdmbssNT%2FqOifsKgCYUwmHnZpLfFrcG9TjwCfkt2C9%2B1DiIJ%2B36MINC80x%2Fv4%2BZZPyb0ss0nfBCYAw5uOyxAY6pgHbjQ0udMGZlGr8V3ejzx1PBuqkY6SwvMLKDqxZx8qlz6ocRVQ%2FidVjocZvsk9K0xTigF6MLoUSAlNJl6m53Ri4F2ze%2BtJH%2FfmC98Eo5Nqwv1POOkPsTPGB6golu8qZkrDm90N9XdNo7IKKdcNing4zjBddxIkVECD08rODFnjLDd4HiF2r6Syw%2FX1WHIOqzyxaniDndv8V0Q%2BNaOADioq5RzODfcsb&X-Amz-Signature=c97d9ebcc80fcd64dedd8a67ba1b95932690e7266cc3c4d3077d60142560eced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
