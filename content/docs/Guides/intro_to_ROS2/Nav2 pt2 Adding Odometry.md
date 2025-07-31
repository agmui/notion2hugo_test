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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=fd3d13ebb7ede26284c757dc8d1a2b885085032b11e145317126baef1d1f4821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=4bf362ac3b4ae3b5c251c8dbbfeaea9addad6fe0f541952c09cf1742c8578e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=4eec9f97cc780a20971c7c577f9298f29282ced654d714ca564c2414ee4ec75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=0aa20cf8a6827f253ef83af17be2a114d8553954b1c6cbd8d27175f13b86c902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=07eb14ccc66d45174f479b8e2a05cd27af3524ac51be988e81dc084499e7a126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=8acab02415f17fcb705a17b829cbffcb16524b081a9758ccb0661b1683766d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=35b4b064d476ee36d180dc5d2fbc0d239bca0680aedbfb5043b0e30af0d9cef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=162dea1ebdb867c5d7181da5365001b4b3e8015f87a807febe0e028dc82b7caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=e2e62d83bc7c29f978efb7ffb3270e1fe979b08bae06b78fe1fda1fd9dab446f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE4YASBA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVub1ItvkeeDnUPaAcQlWwWKSr5Nym4o%2BLLK4zM43nAiAS%2B%2BHOqLPcIx3s9zDsLDOJIbW%2B7PPmm8RpcFeMb%2FX6TCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq%2F0GSIT9RvwjKp71KtwDWtjpjc%2Fw4%2BRX2RjX87eKJBzbHYPr2v6n5%2BzLQUIly3Fe9hODTKP%2FTNYe3FwNXiNAjM7jIw%2FghhtVmtJ1Yi7sWaOns0av15UPv4CqVxOQnLbC13E5WqESehw1cvj0lSV%2FH0nJPxnFAE8SHVfFQAUZx6Ek5pQS8yODw%2BdoCDZnQT4Osx%2FdijUL8YJ69TcZgOvk%2Bk%2F0Knw4gB6%2BC7IPK65UAA%2F9ako%2BzxmChJOvpfp7vSR%2FGXoh4ZzfAgVeiw%2Fp637tsDsKBZAjA%2FQmBiS2bMvfWFjYEXr6lzjdHtGpk%2BAmhgBdnT8t4SdekrSIuI24%2F5%2BXJ2Pcu6IocIC9DrymtyDoudi4Q6kRZmAlB2WenaJfLKnnN9o%2B2lYPFrdnSlkJKGTkVlXfeFayn7FsQB60PTaerL3vq6iQBhW3Ai9Oxkfqtb07vmdvlD7PoWzAMQ9ZIqRAD9%2BSAgzFI%2Fy69jwPE71EkEjcCDko8hqwEMy3%2B0J%2Fc1NDMSwvULLLtzemvsS7wJj5L418zerXk9qk7mnEh1zhlhJp5zZDhIjcVPv27noKnIsBbHNI9C6lTszz3%2F5veuB0Cdp%2B6sMfwYG7x08hws9olZqUW8ZZAo2Mcqv9uzbn1AEvl1n8cAEwrFea680wv8urxAY6pgFmxSikePuSBnSqkKcyPiF4JRLr8dqQRaUVQ%2BIpcb8BT%2F9p3htin0ExKRpsIKp0txM4Ex%2BoDhiQp62oaf%2Fugx5Hw8Y1KQPbK1SBSro62XOFQfXTutN3%2FZ6jcrGyR6pmPC6h0WUWl4i2w5biXhQE78jnETPNC8dKl%2B4jtJxkrNqTVGxqHTYggNpkhiwVj62%2BAIPKqQz1306d3Ei%2BqLlqfEYE0y8q3gqV&X-Amz-Signature=8a6c116dddc93852d2b308a6cc11cbd94b5e58d47a4183c01a830d9a934a09bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZIPI2EW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy2Wrep79Ov%2BYlezuE8CZQWfCfdslULKSFuvNyHKV3twIgKKWVIzCc%2FuudC9Gq7oUfGQjoCm3c%2Bq90Dz9EhZ3XKrIqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf0XeKnkhUoi7bi2yrcAwtVSZ8W8TYjQwEiVnr6CeIuIG%2FPKqlvzmB4YuwsuNT41XmKPD2kDfN0CQ0XL4oQs15XeVQ6AvnJYPJfxoacTM1%2FtWD1bMZThTQSHIo8M8txsnkMBQwKusVu5XTjj8nw4JpDQJBVxBo0YV749M%2Fu10L4IWiOv0%2B22zcDdXMGjKUXcMctwuItKnY2wD0xS2fJZJseSP35XFK0hiv1IVvrl5KEEVCmpHMSDFgEr1qEUFmBJShZdqKM3cBJKFR7c44GUPbZ7um4DnYgQW9IpMhMsKCIQetVau2TJ3Fw2Oq8egHmE9%2FurqOqRQD6IS1Adi%2BvYTgq0imjZqUUfYFVOm%2F68GtO6dKIFPHn84blq8KdBjw4B23c%2Buxe0VrABRV6lte6fSYep4OLwj3cewEBnJ1xXDaqihj%2Byqw0K6stwcWF11B9QgGx8qZAZSzBrP7fCWiU3QGDN2fudOIUXqBS7rFdcywOQUlbVaYNVV22uhTQmv1iqOeZ95ZPMqLz6f1qrZr4glmRmI255cLAEkDDQL26KYMsClmtQ%2FcP5h03GDFoEXjx9JYjsGTlZxCVaTzdHe6MCBqGP7J9KUL1XRs4mNwsfkcGKqitUOQOOLKvtO%2BNcofZ6DC54vd7VZL%2Bo77JML7Lq8QGOqUBLB5cuAex6WcOeUQSuXLGoNiRCjD%2FLqxKv43Cxp1qi6yRKuJ9FSRgd3VGqywAprgNLot9ypNnqitZ0pjWJC3E4w%2FVUSFRjo3kX3991Lk6T6Yf5%2B87RyIHt7Xb1JueP6Hlx09Ts06ygiHUFRQhur3qwps675nGs6Upj6gdrosD2RHkV%2FCpQuYz7kc7dDdhVOtefcvdA%2FA51PV82ryURVyMd3I7idUC&X-Amz-Signature=43664f57314fa66832216bee2594be7592a3ddab5b4b034e1e1c79b22fadb2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=1a98faf95345a929661ce8dfe44d53225bae45e1b6812255027061fc66c17efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=dafac9a0e5c7a5fcbc46bef72c6cfe1bc83962fc2298034ba699742ae4ba1acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=03ac712aa7f2a86b956d286d730396f607018ebef136c1e18aa265d73ad322d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=c2ab175570b5c69ea1b5652f12817e3087a7828ccf135baac0945328a096df5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=1d0ae363c01049b6914f849b0341410a3fff1e6d686ca54805ac930c86e5401b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=01d3b8da875c50576933cff2030ec58eec5c2c4c2392d532a5560f45039c7cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=1852fa67bad1afba84602d43bfabf923ab2204f090d3025a09a5ec02fc71872f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTZOUYB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQblCNEHnwyzbLdMpxShBebEdwJduArdD2L3Pax1oYowIgS2tvhcfVPhyeP7%2F1HfbUtikkrlzJ48a9V%2B6YNAZ1iPcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0Fy8YkmrDZrXFWUCrcAwUllU25Cc7MRUX9eeA8FPpxDlBy44at6Cau5w%2FTrVjg09iEmRqWR7OeQcOiZl%2FrA%2FqYL32LBQb4N9x4bMz5G%2BIame%2FKtJkK%2BeFogsf6B4dgvH6ZPIy484vwVISyH77OLPCI58OCSUVfw8gb0BDiSPYr6uPkc09y%2BGfS4RGm8AnHylljc%2BsRdqu%2B1NIDQdWeHl18E4pFuboqCQKED2QYjLYK7gVdk51zk69GQAxa3OHUU3wALrQflLU3HLZZO7oODdktDeB4lguaXrZC9PcxqzWd%2FCEbb6fulPmHzXxOf4%2BQfGwjQY2qFcF%2FoHgiTsoUFV%2FsCzuNHvsIRrCpsngsWZ10L5MQwy9jPV48CU%2FZxHPIs4CBgtIgf8f3FaFnW65dc8d7q2oyjOXjOUTUItnyTPLL2pCTJdiINN6HrG0F3oTJahy%2FWVcnJkuLiSf%2BMX7ozJlmZzaT5HX7nhbZI5diYz7tILL7zhbGIRt35kZmHoZ0gUkY2rByizGNH6D8FlVAh0jQ%2FLg4fBwJsstecCIem4M9tWYjvUeXV1DckTSLNmTHa0z9iudyzAa5e4NDqLZdJMF4zBjj%2BnWGd9xwEG%2F2QmUE3xkSqAiEbBZWJTcKt1%2BK980Ky6A%2BI43H2vCoML7Jq8QGOqUBgZThcNlHwoDC%2BS%2Bf%2FC%2BjfJWiFNVbfZY3mudLm52KixvFH%2FI4IZQyFqibrZqw5H32lWikCPQdJXH2kmdAWAWfGtLhfSOes1386zTY2uOWTTYAO%2BflrSFySUZBF2HnhPaDMZ5LB9CNyeFwhw%2F9Qb%2Bc15cgvS2nLr9zfaBXLhcLxMkvUPmDjq3GcT3GqB6lTi7gica9c3GTRgQP4nyZ3Y89BQor3fUn&X-Amz-Signature=7dcc4ba9220ac438216038396c54b116779eebc4cc68f4cc1910c0d6a38c3700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
