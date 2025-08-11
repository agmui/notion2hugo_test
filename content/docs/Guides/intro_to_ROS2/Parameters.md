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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIXGD64I%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6Q0QxVJeqpw6InNckxHRNbPAiX0lomYaS7ukxohithAiATGQRLP2DeohN9cJ4PRzGnYrncG8ntXPcLdOihCfqPkSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgqSQBsbufC91i%2FYKtwDtaSqgkQyYYabyB%2B%2BGOPIeh6bqEOOL0786sgym60uO0RJjJEHcK644%2Blzly%2Fc8JzkcKX70spVY1DK5cwP8RzMougekRdMaHERNtbCuyx659m0k70Sk078AwrvjUjA6nz2%2B%2BWz7rp3kYOczAf8bYEr%2B9nj8GofYmM98i0OYahhG0PNCCvyvJg5dN6Y3cktKwFPFAVty8ry5kCOMU8sxTL4veZtSVWgJQi6LfXNeHsq5%2FXYiwpvKM8gF5tltf4Hp9jOP9wbumjbw4cXPDiq7sL2l47OlSTVraUT%2BHHsjz6%2Bw5LND8WCy1f80OLSdWON%2BRcR44shXLzfmqQnmm0Yt0nt61M6r9ZXWL9dUEFUBYw0BFkN2JQ2mUN07vcYocllxWwZyeahYIEsbcr6OPSONUvBvld9gy%2Bt%2F5bg6WEx0zgW3I9sRXhrZWKjuBWXbj4mmKLRpy4lqBIOpCsNBcURjnQ5iEnC21OdH%2FhT7uyIHxvZKX0OUV1RszSrZUXMyjRRCafUWJAkaBGX5SLZYoq5FiZYmCCbfeIqRj0cPgXHl8U2lLw99z%2Bcw2VoI%2FRGBUojw4%2FuIWpnZvNPEc%2FG1ZgW2u5GlxsEIdc1rX32R2gsw6BmZ7rj2aVHyXV2aoOhSJMwpvPnxAY6pgHWNAOIav61PXXiAxo7%2BNucMTgxFq3FJdGR0TfiZ4yK8dcYYS0CuIE9H1t3sxqMxDhdunMNQBuA2H%2BygiwN638ZziYsmY%2FlQttd9kY%2BH4ko13QQJF6uaEQdpAEybUWYRuty%2BtmD56Os%2Fl6au9oC8ldlTaYuA61tYxlCQ4o79Q%2Bat2drQ1G4OFJ5mCh1wMTXzbff5ZlGU2qqFM2%2BAEI%2BWncDF54RxORx&X-Amz-Signature=cc54a1afdbded8950a3a0cc9a1834707acdbbefe78f8d75fcca15c91c918b8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
