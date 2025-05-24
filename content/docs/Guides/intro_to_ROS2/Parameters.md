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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T55RU2%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFocE0L6wX%2BWRXwEiiGek5aueqOzSlLibekaQid0gLVtAiEAmzNVmzO2XA5BQHeYl%2BvmeCvo%2FDSIIl9w7A4RNPfuC5Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEas%2FbkkWpH8TXvzPSrcAzDQeEM4y%2BUFxaOMd%2Bt1MG3EFbw16fjQSNzTruIJWFtbs4yUqLzyzS7Yp0Ou%2FX7Z7DfvlP0QsmrQxTSTO1yZE%2BDyjeHqKRYNXuiki103kroCEeCT5%2F%2Bcdz82EXPG2VBA8hTVkrRqz8kvrPRYH%2BaS0OglTkeUMzulSSySvzPXF0WIyn8GI4x3uUTWSKOz6hMsPmOQjn852Tf4uYYcBjLyMQe3ZNV%2BHgL%2Ftl4QT9Ska5kCPKxjudGaGrR0xsiRB8jhyAASzfyeE5vk9r%2B%2FO3QQNPBCHU0VrU8fap7qzeOKTHPutbuseCbFvL4RFIvqMVJUd%2FWjqYrVMg0NCpaDly3FEvlEZ5naoskms%2F5cDYjsXa0mZ1NMPOxg4bhy6rXbwPr6VSmURe2alOwzTov92CRsijf0sy%2BTPSvcOBo9mWZO6WtRJxn6snLXCjNDdl69%2FSuG59XOLdlPad81U9%2BlQX7gF6LOXEbF73Swl5qoMHPqoasXdn1tHhCyqsSCRiYseaT8rokboB7ZITnJJ3QpKUGLt1SaD%2F6MRdneiu53T17qreesXaSqv0Z8qREAdIHlsO48Dwko95AoldHykvB5RDjdFBkgWUHhhoO9QpsybuSjuD5BWHYExHq619GOGS72MICWyMEGOqUBQpaK5UoVX%2FXsjJZwoTKibELH36yuR9Ks8clfBwK%2Bmvfaq6V5QWyTiHL4PA1KPAddIQhTBVGA%2FQQfC011fNR4BWR1cw8vkwSwi7duW8EsBXhKG6jHX6UvWWcqqzwQWUXrIiNBvBYEBA6gqsWFuKqXWfDX83kmDAW%2FdOW1B9bDUVMsxGXLL9TxsguVCdFBSjOzgMBJwmH5chNk929BbQHfo5FX8C%2B1&X-Amz-Signature=adda4963cd82f7825f37a28785b826f93738746d22369891b8b3c5db4a5ccba2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
