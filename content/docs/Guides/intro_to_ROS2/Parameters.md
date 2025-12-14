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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYB3M4WQ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDQtrcWBG5iMUMSMwOCSVsZ0eHM07%2BPT5mXd6CuIvniMAiEAirltrmC2L1NPXgkkVYQ%2FHh7uPp6YHswTdkmMNyZinwAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDB4E6bVQsi4%2F%2F4WZPCrcA5xVNg5tfhujGEgoa6%2FgNHw4UvGHiVcW5q%2BvveHPS9jHWM6vBK2pMnRbmLl8psbsndiV1Z9QGW%2BQbjmi8ypn91NxVS607qdwICyA9bb3RMGuf7scXFMxJmeL%2FlAoFWfUmrtbMyAUxLxXgt3FyFCMvIy1dZOAAVFSO4J77VcDr1qaeA9Q4PdCLCBeUktUWuaFR8fAxP3pe%2FQ0kvl%2FR%2B%2FZjvTJbslxCY0%2BSbcLb1UiQSrOR3gF6REr7646aTXzgH9ac%2BjEniNxmRS94A3V2fWdoVUgWPn1GvL8%2B5y%2FYbWb3DFoWhn%2BBRjf%2FRN9Ry%2BhFCz4SpidghqTKrEezuBDWTZtTxakv6XUBKOUR4GyDqITrzRpchq75AaXpjaKi%2F%2BcCYofc%2FnhpcqyINXDlr%2FI63pp1918qIst4VwsYBhl%2FyJrRHqCa%2F25jm33Vui7S1N5mQAF%2BLjhCU5Pzi8kaV1Eb40HHKaV2Vk7H4eGrLnwg6w6%2BLMNn9VSa8BJb0uVZr5uIg6RYnJWaHyKdyfpRwcBGK34mQp9kcSgUjeBS0z7aifEjNH9meB8gjpN2%2F116HZa7znItOnQlgf182QMKT%2B75avXXfdLpXAb68KBx0hFwtiwirBWhVngDUGPXz24t0jVMOKW%2BMkGOqUBX%2BADmcXd%2Ftp%2B1TdIehdTp8zxDbupZZuYzfsCjgRrHQzJQaKMzOFRcmFW4wSGl5thdOb1aVaoNhJL361IUzjgk6N%2BL7U5TNmCY4PqZwVs1all%2FU0MklCtQPIQLgpmaUpF6XHV%2BbFletmibljD4NvdL0JNpjGtSpYrra0fismk7NzNqw3Xm4vfOjTt%2BGnbNyWWDO1nbEe3vlTZ0azoldzrFQcFDGJX&X-Amz-Signature=b925a41876964df6af8d088a8f898be96f5b3c557457e8c31f65ef7364bcd0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
