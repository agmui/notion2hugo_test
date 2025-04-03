---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IJDCV6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuL7n1RKUEXm1sfTIkg6ThTIwcHSSHmtpGPO29YOgKkQIgWdjBDE1RmOEkuRC0i9PA0GKSUNlWRXsWoBq7%2FVBfHT8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzV7OOsKxmSF%2F5iYCrcA2XSSDBgwVPOZG5K77CfP2BVWQaIsW%2FMrVR4eAsmFgegRt1OGFvrmQZ35JYYtEAtlweGQy6XdXoOQw5T1nGJ9w8WjVglDejBzj0%2BgSQKpRhFsLL%2FK7yl%2BCbxL5fnMx27Ro9oWTG0YCJWVxDhXrjYNPRcqk1T9D7Avpgi5wcLY5OWXjX1Zz5aywVhQ%2FQkL%2BHWi9Wxbcu20W5Af86KQoYL6g3NyaDTAqW5CMhs%2Fycrqu3Yhh3PmSOxipAEfERURE1C6wbMQbd5mGt8Agfg2LmCLRz5cTQTitFdlk4KUDGOxysT45o2zIZJmYuuXXDChWFS4lTY4bu8KCWxilHIWVoomHms5s4bF6yh%2BuiEwPBVIET5wHoJRLVcRaoUHmZSrxFEB2ZeZHXU2DzGi6dtK3IgC8Gt%2FsCnsP6Z2APogyRxNGnodi1pg0zaQLnLyAoTzvcSSzzWKvR3cUpDpydOUrzFiTWY5XhydPeV4RKXwXHYfWr%2Fqf2mXNgFWxV%2BYf0sTKQsYk7hNMSV9OMQM%2FvCJruQP3UWfW3tH0dons0y257VX47KACGtxWwYnAMudqK60EInf0hhBYg4CuPanXF%2BIbDJ7fN4cFs%2FXMg9rYMGsFuqOglBlNBhwmnCRZmedYZ6MOb7uL8GOqUB%2FVDbIG5WlkJvXwiUAMVouqAoIb84St7j2B2t65ht%2F5EDl86TWgxid24cGUDyh2tdtPaTlnfrEE6BGJk7oNxTz2wQWAwxpO%2Bpd9EtcNfaulHUKMg%2BY1jAerQgiy9zz11aTs0jiEowzFE5fMEyww18Q4jCy%2BGuh8kFE3EFQsnUbEaI2a0OQnhft%2Buv9PlRyfZRlpyiONMm5szc9wRvXM%2B5DhNf4Ufd&X-Amz-Signature=21e441d854bab09942216d58f04eda2f689f0b42f96694cbcc2002141700dd46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
