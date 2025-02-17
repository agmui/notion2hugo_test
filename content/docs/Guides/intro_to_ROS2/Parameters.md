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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWVUUKYE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCkJF3tYDSOdfaAKNSiw49FUlF4baSe25wOIy9g9JZsAQIgfRIF8%2FDtTmlKjoq6D2PMQzw5d3XWGnzrbPS5qnLvBY0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDD4N9DcWE8K6UhHjUircA%2F1YK78qIBNlksXRrym85IZ7caOc1sV9dffz%2F%2F4L%2Fz%2BiRvvWX6BKyol6ZBpnZNu44U1xWdkQJ0LL2VYiw6KhgxMScu1AyQnskfMgi2RRh98qVnWOKwJRZ%2BXEzi7pUuF3xhtUbTyIe1YAyJTGFMyndKZT4veVa6rPuXrQ3rYoaav8xKBeO1xsUYI3ZD6DWRyVSoW5yxqH%2FXfwEB5tNpk0ddg%2Fpl5PmdatQLKJ9aPSTvXrFybXuBpS7Su6IgproLIXLPSNRdFKbNV18dkMWlvPY4xgXLjoo1wOfW72Yahat46NHy%2BT4YMpcV2leL3p9xGX5vuQ5LUPNL9Zv7vkWN1XHcl96EHxh0poWAunRfuyYEnPKo8x4MoH2JLq3lrQtIpxIWpov8BozNhfMQE6ZrkiHSiaZlyHgLJatvuT5MNvdfiuGznWIvWIXqAhw0hFue32hFWLEpVrWZd%2BfBrfvC4bJvapYZ9aR%2BkmZHpO7n9bCPgxScyHg%2F85ZS1Y%2Fnx2HWRnheXRzc0fJC7uC9yiAUQe5MnjceTJ2idGEcHKDXjMVA5d67fg4umHBo7EP%2Fzl9n9dXy1n4%2FfsL85FJpNsH41IR5bhtyfr1pA2%2FrmlnT8cGE4zuVLRscwyc%2BJlw8y6MI6wy70GOqUBqe7eI%2FmvsKIDYUTooy6kK5X9zirSJUYCGYzxIUndE7IWb3tr0U3D4sdvBaQKWrz%2Fk0UIk9gGdiViqrdmHi9L9pqXR3%2BecjNpOv6ZE0tD824QuMnYW1PEDQ7XXV4ct8gFM3kmGWQnCLkO%2B7C4UbW9AU%2BkjLoiAXGR3%2FIY%2B18z6zaGevyQHTa6cEEo3gF9hnmZGybsJL6Dq76LbDN9xm5mUIjISCod&X-Amz-Signature=dd5374e93394b8eeabea10f96c92356882527fa624edba7f6dba82fbc8d0e0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
