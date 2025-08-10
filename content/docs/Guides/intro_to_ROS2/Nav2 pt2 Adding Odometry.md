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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=717f67b772daa6f0a989023c8b02b785acb80afc034b20a3f767a8d9795e5476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=87867e17b020c8b03efc6066e8a1bcfef6e69272b348a2a4d4bb43721e6a0542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=3f572c83774c597bee61cbe848eeb91226df71fef75823af9c7a8b942df57beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=125ee7b5e5840922b2a49028c886841f42444f0a82271b8cf2792f59e2458e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=b4bb62528088521647bc71546a51b70c31f9b72482fe973d036118470fa7ae48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=4e6c68c980473b14a1574bb655a5d820580ac9e8ccecee97c37dbc9797e575ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=43058e7ab9dfe57612c08f8667bc97b193eeb937dcd9cb6bbcdf960d058a37d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=ec9ff9315f372ea0b21f7d2de06ae8412a402cafdb7cd025e9d6e5ac56a54717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=f25c695d265073910a253b58c662041f084d1af15c00e8599a8d93032f04c60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHTX6IR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZU6teSVUPyyRPc54%2BWJQhqD%2FkS3xEoz8%2BrukzFJp79AIgbChHmNNcDEOWkVAG6TSInIy135f5GFi5niyHZk%2F3v58qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5z9lmXI5o9kLYEvircAwqA09pR1hDfM%2BCqHhaRT%2B8A%2FSv8goO2wSONq3%2FzE3bs5l46u3%2BZbW56XJL5G6hlXC90gV7PCsHLNPUMzayQe6DRUzqJbtQJ0AnE2b9KLybd6NgqLC4HA0CTHcrFxgF6EAK4k6%2B4NJ%2FXFWZzQcZFditm00p5kRmxLF2JeWS2%2B0DcWMovg%2BnxHRweMtvhLnaTLifr65tVfwIkl7lpvkY%2BuzJPz10nB9MAOZAcIjVCUW5rsMjdYEBCEYVNhaZG83krymJGsx5CJPCSWno6OOPc6Pyb%2FCBLZoOxOlhO%2BVO7XV0uzPjjX0fehyqM3JLJReP0nh1lMivrUVCHT6BouXWGZJsX0jdy%2FQ6TeWeCimT%2BI2FjDquasUcvQwwyaObWiUJK98ENyvZyaCC3Q8bCbCtPkePqyAYrTFIWDhZIy%2FNvGdtj2ET49raVra13iPWbKdh4JTItZLI9C5NdS4i%2F9z4LxDXGQ8ShyyH01FidTwHfUy7wjr3RGW4RN7jzKvYax8uAQYSOgm3kSZ6ZF27K1q77afh%2F%2FRtkg7udmRAqBs2L34ABHJbrih622rrUbc%2Bx5U1jUNP2YNlsH3j6lmLcJnxfaMiPDIh21VO6oye5HSOICvGH8ybHp9z%2FKs6s66oyMNq648QGOqUB7HMqKHI6zkj4SNHCxp1TEKtreUQF%2FxniI%2BgspyiOXXpd5qF8fpbqNSWOBEnYKv8JNrWS0f8moLVAXXUfnM2qBAdDdFWDHbLkmkW97T0OaL%2FQ0t%2Fk1DVsVv59CkvepHVcbbyjLqoxQL2YU95H2GlQODwtJjMUb8T1AeHcw0gmgrvIluWQHAFDOd4YjvxYYgvJxiHPEx7xHg0JAx%2BPIVbwkVo2U2jy&X-Amz-Signature=edfe2dbe6ad64ce1fe924064e06f5639cfff4afeff5adfe8067e2b8f7f198508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5EDUTV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa%2Fkw8OUEIL8ikhdCbPIUVKtCQBASjMhMpmr6tzVmCSwIgYjrTANyD4Z0brJBG%2B7tur2Ix9wrnuI48fs6aZgZoC7IqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA3IsluUMmvRjhszCrcA5xtCukMelgsODQNohL02zuEYmHBptEAl500QbG2XeRgeR%2BqiCtAm17okSLeyI5PkM8eAgyn%2FP%2BaTEdDlPJlIWeJJkHO0uHBKV4GBj8ZhfOmANESKLH1hKAB9FnL3HcEFJXCHgDTYBCFl0j%2FhpmIdn%2B7kh2d1CcZf7ptAFRGpFrnlsOqoQ77KQSMCa8%2FaeGHzUF8taG1d9D33fxcxL97Nx%2FvhlVzKFtYnFqWT4IufHtPZjYNjV3KA1ztEai1t5HgJiYdwfVOSOTexE%2FxMlwBs1VG%2BehWLK2%2BlWrxm4RZw9IWrypi5AGUEcM%2BZW4TF5Ds2wqNES%2Fh4GAS%2B0CrsIYUoxMTprCL0geFTRk%2FgeyxfWDjMzXKqVc6k86JCTU6oWpzWNljPamRKh7Y8bb12MEhYb8%2BKL6u17ootJF7Ij4TNCy28B2RX1gV0dVbiVumsO19cMV6I1%2BAx%2B33mKYdCaVvv3UsBdiVUvnpSUalaR0pte98tBUJvM1N2TzPtvR0dianHnReQ61xBQRoLCBQw%2BOvN9g1aWbopGHAMG%2Bu%2BkVAgfFWlrab46s2C73Y54g5yg3OcuYxj2yyQjW%2B6wTmyAz1Bdz86z3TLX9DkSuAH%2FZbef7Nd8jI8AQ9YoeBNG4lMKu648QGOqUBj3vj1FSdIoIxDYFQgtnWTy2cfbm%2Fnc4lw3FcI%2Fw6Y4D7nMGDLB%2BQNx61IxuYLTgmKaqvj7m7wx8Aegv65OjMQH6%2BMToKrRzVSzYQKdrJ93D%2FeAgeIlr8ERXj7J97Q4kUYlwxApg4cA2Cn%2FTX%2BAZDPtfL7lD2Z0FI4e1aHn3yPQk%2FoZYjpJjAp2NwqUWAE895LGxq79THRgq2dSIXe1llwmAmuLxh&X-Amz-Signature=db1a647d32fcbb53bfe2b8ea500a060d65fb5b6f92be9f22ffc759ce365aaaad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=b18b6fe44eaf9d02624d2480ab86abc4058abade876797d7c15a9edf092d4b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=731ae00e2d41f855adc9ab0083baddf14cdd92f86965cddc017f2087085932be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=94169a42f8f67557d0d6c5010906c97dcad35f69d4e3f8ab4d746fe401c926d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=a00023a9803ee0993f2c6df57ef940f29279bf32b2409b32fd3b2c50bca7f5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=fe31c3391436052aaa293b6b0915a156379c88e9f80286df449a8653bf0868c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=af0c002de03c222e1ebd9dacebeeb19348f5e605590bd395683302c9c8eeffee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=2dc66eeecae1217080195869bb38914515b95625beb8b5c9868df8d518c715cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=70ffe97388ec23ecd7e23d5d7a30a1f71d53e1794305ae9d1d1b4aedf9a5506a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBZO5NT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClVYhZbNFUmLt7LUtvKWPpoK6OT0rvni2SRUtxKMvoBQIhAIZo6p6V6RSwTA4dFegM%2FtQCyAX3Fr47NRwJFidmJ7sVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3LBVkIchXLFk4nlEq3ANRAnKmbyfZ4FLv5tiQteox0BrJSaD3c4F3pnhZgek9F5qEUqWRCBnWeIIOL6JoQ98NoWZH%2F3OnkgpB%2FsbQrqUsWvkb22RiU14tIusM00DghocIRY%2BfpXhY8zJThnFuVcySBFhe9CD0HWrvwYIsRt9ixfr2bRjcKF5JKpP%2FwiorPRNtOViArgNG6Gu%2BDrY3Gxe%2BGUE6y7eo7qKcyfp%2BlH9CuYt%2BoV56lkHTsaV%2B8UKqP4f5uiQ04lhoVpEgCesd5WPWmR9l2uyx2OQK%2FrXzo%2Bt4KzxqHSq3oyxbky%2FBZttaN7H3XGbMEaPK%2BikxEpPrljWsBrEnSmUC8s6OA5eXFBg%2BLREUOqa1Nd%2FXhvMN%2B%2FpLhLcYKKEQozZfMu3knmff0PY%2B41qu8%2Fv%2BAHfT1HLuJPzwBVgK%2FgEtownu8gwPwqAMSwHpHqpvtgBNv4H08FGuSqHM8bBnNrIQPPGZMRQHQ6Cp1e%2BYTVxhYF31YaEvRtwDuWfnnN5eNRPHyorXnzOYoia8aRqPtTJ%2BsyIfBvJBM46id3LYO66NTIPC%2Fzfut1g2JfkSUDsLe%2BaKYxeL5CkcJ9uYolnAou45JF4xHz3aefz0ltqxlJ%2FeI7d0cyXsgVM9lBNJgIom%2BuCse5EmuTDTuuPEBjqkASN1YTIEN8im5utzqAo13BttFmLB9sDFuKyQx7j4cLdc%2BnIwnqLta8%2BKgOf8tFgDelZo%2FOf5IVNO%2BpRw68RXJ%2Fl%2Fs9zKH0wdydLIQTtyBP6PXxTqXtbdhBwTRI0DbuEreErPhsKQa1AaGxmoS%2B0zVdy049kVwsmeDIanngyuoKZMZVcXS9sDvbDRfp226888KEtGkiWWIM%2BZjdXQRBkpjiFFtOtM&X-Amz-Signature=d13d1636d8a1f3b6e5a717ef834e9b9ba8feff3fd536b8796f3b2ac3d43fb7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
