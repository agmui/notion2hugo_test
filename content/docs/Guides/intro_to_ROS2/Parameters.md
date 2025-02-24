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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWVPXJK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO7LUBBv7mv9JRAYJ9V4CnzFDyDuHdn2u5lgm0gmQ6rgIgHAOIe0ADT7JEl1RquchCpvUHGakRVwpPiyAyypRN0h0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFZlGmMlMnEwzxEw%2BCrcA11PWP9VVd7KkZV5bHWRMXfQFGLubR2QQsKIyyQvWthxxDLzXj4N4PBrR46VI5kjj0vzIAZ5F9%2FtxZlYFzJkRcIPiT9JKIZdQbTF32kGnGB7nDtbLzPEcDOGkdL2vM5l7EzPJ9eALcEs5d4gHwTxbG%2Ft%2BGPNR3D%2FMCte32oN48yGmrnrVm4KcLGtAUmgx5rY47G4OKavrDZJXMCNkN97svMC8WPa1gHmw5VVTl3S0rCGY21h%2Fa%2F4Uaa%2FgR6ScomDMdpoKHtBrRla28p3ycZvkEYIyXP1pQ3HsXjDqFKjw3L4R%2FkvY97lNy9HvRXVxzd4bazwRX%2FWJs9BjDuPCOGdrtNR8RXBNYZiPF1F%2FkofKyj3%2BklLcQTAZzVGT6xDIBkXBWLpMJhtGI5k1xc1wNolu0PasVBl8%2F3e6ek6xRdpETP8NTysG%2FsLhcvAGSXH5FK35XliG80Z6nQIif8xmvdnY4tuIhXC2x5HBdzGhgo8ar9hyso%2F4jGnNWSkAYXMj4rv7RZ4kswlIXk6yR7I6rB0ZJlMMIqwD%2BwzdoQVpKCX9k5xTGfmXafMYBub1IuEuEGv2JIa3e9o6Lppc4sQWVTJj%2FnMdQD9%2Fo1ieYqtavGx4uzlY6ZBD21TrFkKnkrrMJvd8r0GOqUBrfo8yiN6xDXjRVyIEZBVYPbhbGJRn3GJZAaWm1bX%2FYDqgYUmnK%2BxMHh7LO%2FOc8pAzoErOv6fU%2Bx%2FERWPyPzl%2BsPRFH1SBPkaBTdjUSmoK4UPe6CfEw3jjZH7epw3Xm%2Bh%2Fo3MwpLu2Lbh6i7WMkU1LKO9WL5yw1xwIeA%2B7auSicU2G5861bk5hd9OlCTQ2PCOT9NnAb1qovKq%2B%2B409iJSIP9GoH95&X-Amz-Signature=78d577a309437f4c9f7090ca913edd7c7d76f8695dfcdd14a85cfc64b60da587&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
