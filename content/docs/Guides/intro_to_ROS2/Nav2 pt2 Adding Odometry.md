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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=266ef108169378f75b2ecdb9d20203db97611d15b7b4404a0ebfdb47d12c016f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=4176c70e1b195e5d154cdca00dfe562e9d97883a0d8cf2723e72e50402e33097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=e8b713d683a76e0ae38cb246bc3897f6a67a2abdd19d9790da1779c05b2c57b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=d8782e636554cfadc9381c7ff29efcd5db62c157754345c5093fccd8991b58af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=f1841e6a787cca68b73faf4d8ecd1d6e585e34b33a21858fe4fad45ba715720d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=e600af7c4cdb0d7c830cd995267938f1f7e7531bda337caa60d5d07598f22d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=a5dda05689766be567fa0fa2670753a1aa96bc6799796632dca383551aa6b1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=e18e4b1d97dc415936a0464d4643ffcebb3b89992b5e8d3641412fff589c643e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=253193a4d82aee9b7a2d583c7d6526a363655ae0a54fd6df8dfccf488edf2947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN66SQ5Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSn5gmHtfhk4OqYWV4ay4Kv6XTQM0OvTgSpMGEDA8ijAiBLS8nEDC%2FT7HBuNX6yFhHgUzY4Xhfx4J%2FvuCBTA%2Bc5TiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgM5eHpvxCQs2D3OiKtwDtcf%2B7JVjmtGRB9WkU5BOSBxptF5BkBsYK0Kclc9WIzh7uGUo4C60EAUP5cV%2F3TRXHn6BgD8G5tI6sMBO8SlBtfo0YHtdy7cuugqQHlpo861G3S%2BW00ob52rkTYW%2FNclVcLk7XdlPRjzi0Hcl3cKLsT7yB86L95TXJ%2BqHHdSOFlc3cnLWByMQYQ7Opr4pX4SSwYqiTNorlSpmCtmDw%2Ff6ZS96s0nS30hJaPbz0pOjyJ74jvKiM4g7wVK1LxNeV6X%2B%2Bd%2BH0kgk4q8Pi3hpZOoh0YEhwt2S1PoU6b2fjIsPUAsjPGEnM0Zjd5xooBiGnD3WTFov0radTI4HvNw2Ht4oGKIlZhnYXJwNa0gP3BiF51cFRL2wd8XcVDvEgd%2B88FujJd3vuac80dHrduHBGXtqP%2Fmpsp%2Fy80Ew6FyITmHjoEeKAAIn7MT892VAYbTJx3055%2F6GDwdNvV%2BIOx3peyPprRVI6C0PWIu0GhSnsJsewEyj2wEz6WD%2BHUxW%2B%2F5TZLrrlPWpTV8KiXNOYK6%2Bwqx5zApS%2FA35lz66bN%2BmsXTr9%2FDXCFbJf3DEbwtKD9zbK6xzUxoswAMQmG9zC7Eopobl93W69pn%2By%2F68sxv5eTMMZg5EsA2RNepqtGSQt8QwoLPfxAY6pgFtb4Od0ULL43wkTiUp35xo6B2137ZHWviR919tRE37g1Dymygb5hcfL3Ojs71wVu5qSORSyy2TbIR8XGd1IUFPxqne0tI9TaMFcSrIaI8va9YG%2FNqXJTIQ9bCi7Zr2cJMXazp4NQIrFvFv89K6%2F1VFvUwKr6VO3jQu9NRd%2F7fY0myabrYPjtyJxuOfAk1Qw%2FEiP9J6rOZiWi228MbSQrcfybhQY5ay&X-Amz-Signature=1179d50dbc7b482e2cb86344d88beda2e60f67c926f6b632d71093cd204211e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQDLVR72%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSGKg1fRLax15uPDiUEKxY3fHY61qJDBtVHQG9xhwfeQIgLJYGYMd4xffMdjgAgpkyN75m2YfDzEw4qNXGmWp0zsoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9Y6fTHPjqRCXMdVyrcAwwxyK2vd9UtXnr43x6LyW9ycZ6Z9OzqZXGVX5%2FHvrByroOpXpefqTxq6A7zqSA9B6%2FhcL9C60vzbv2U26bdj1wP4lZSfUU74n%2FTiPo33mAFSpPmHfNZg%2BPV%2BP5d2FsZMK8aLUyMoqRYdovnC%2BWovgTU2uaqZK9OfFShTuO2UTqnZ8XDzqZT9R8DJoSCWItJUSMvg6m8J%2BMyDq6XDItyypVlh2m0G%2FMK1%2BDnwbbP60An4MVJY%2FP1qp19nxue05dubRUtwUq371sgZSKyZqdN%2Bq5xzcEjTmD2mW2YY9FqIh4fe9RTmaUludpgwcOs8fEREqbcPYY47v9VCulQ4%2B%2FgM9D4Y%2BHoXVNdkOiQrcm8nkI%2FMk62C8xRfm7wZF34F8u3SSQqas4%2Fg1COzk%2Bl4ArrArJYiiEwcrVDDEC6iaRK%2FlViK0UpuH2UuO0YP%2FLeIsJkyZba6zqrRgw7kV8fVSOsGHFV9OGmRp2j6N4XSfni6syc5%2BB193AWTXrHOrAoX0JZ%2FkqVafS1N%2Fk8CEA8zxOwxjXRX8ZSjxpTmxlSUqnmUh3lqlYCqoHA1uiZ6JqZHp%2BJL9PUov5WPo4EuronmGAryfW9tYuKL3GG1L5GPcz5ZJ55kmVao667bT8LzCEJMNSy38QGOqUBV0XWORoXYOFhpD983kduKI8A1EepeLkuDMMSJ1WQWJXXQNNUHWWTIV5vjjaeWEyx%2B8Om6U%2Fe4Qo4t0uDuRwrZaYG1prQb%2BJkRb8LWlzqY8y3zZY%2FQptyGNzeUzdkokxxR94PE5kT%2FS0X0eGvIQoi%2Fdqz7w%2FDiewU7hZBzgoMxvHXM%2FY2F%2BNRNQs3j9OJf4i61qm69rRNPAC8Feop9UOGCWwlXh6P&X-Amz-Signature=9a0bb999619235b425c348fd9bb794e79e9533eb6847ff56698f8d124f2c9390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=817cb0bd344759ed1ce82163eb7b2449186c9c7f6d6f4aff50192705210586e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=3b5bdbd58470f5e97a53f49ac4ea70f5db19d5c27d09ef2ad7479a4a662f395a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=bf0ccdb2a0b5ddf1de2af507114750b01f93b643f76355c1bf050e096e6af9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=2d48e4c7108cdb7cda0beee0326c69a2f3f4c0e4e00b806162201774a0597bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=080966779f54baaa8306a38025b1253436d64c7ae8df2845607e56d156aa0d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=02c9e1823be91a678fe712dfd5ed3f8ec0ffe9958dc05ef20c5c4d5b99da1058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=58e2520981f5880cfd21bb5b4192b0d68ce824fb3016af14480483173f89f71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=a0ed8c04addf8a359bc0443719fddd43f070de21b97ee623030272d6b089f0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTOKE6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82pIPlkXj5vYvua%2BCD0p0GFBUnzY9d2rD%2BAgp2VdGjAiEA6dXw%2BOlWYMisPu7M8KarQt23MI4ShVXtWlY7fe%2FilRkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUafgicaMCVSAY3uircA7wTLE5A2hVsmX6h7DUXiAuQ5WCqXRORiEVMYZuW5YVyEqJqwwusWGZj1A%2B6YP1Jc69pu7H1xPzdTdxJIoq2n1bqmKohWJcq6Ggxutp42Jw5IAag4RlYJcLqS8UFeHWemrq65IWSlPKQbrnKiJbqNEFDQyvI41ECU25FWoYfuaxj%2BHjZHXbo4PHtyIa3gr%2FozUzunOGVQHX3xfl0521GCwIk71byToxhnzv1qSqaGObIS6DvLfDt1TXDiCMApMPpnGR8LoEkhx%2Bts%2FW2lOnhvFgdH6JQmPu%2F%2B3xkSlVO9ECcJ9i%2B4tVWhqnuhefVAOPi5R1jnY08ugsgGT%2BP0Bz%2Bh0V6rYuMGli%2FoRY1XCJw5O79cSbmrdgkL3b2hmuFgvke8NOkzplMaR%2Farnj6IFuTiVls2yv0iMWdILX6ZaC7ow9L9VRZxBCdvEoiTn6WrZa42Mck%2F2BWtkpzjOkF3bmBXt9Q7J7EaGT5%2FRZGhEHixJLHNYBpHsek2WFQwVHIm54fCUDYvpCO3HWXvXDfa9Jt8uTfavQPTbgNG6BJH9nMXYG76%2FLePmpYAsXQCodDCBLlG42GyEeaXlS7snyqvWU9MpnF%2FsyLzus%2BWmN2oPTnKtBxiamKVMvE%2BpgNuyIHMOGy38QGOqUBhb%2B5RSnM8U9%2BfklMl2ah4gChExSMr%2Fex1uL8PeV%2Bdkgyupilf5vmAnS1yAtbWseT8y%2Bn5JLjkuPCD%2BAN9MAgsh9T7od4LlNGFhYsIfFdQksO%2F8%2BUNpBK2IMJ6p4RR4sD83cwe%2BWUNlRK1WLIiMuHC1ZUXmOSQ7V5XltUnb5gUW0LOfeEFYKp6QHGCNBuFOKV6RWe3XH7d4%2BSEPj%2Fc4eJFhZPjRWd&X-Amz-Signature=047885ec47a2a26566ebcfb4761a4305e2836979472d9ebbd0645815561f32e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
