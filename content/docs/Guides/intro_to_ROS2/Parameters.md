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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQ42NO2%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEAVSbrt93nmNM2YoM57f7DA%2F95bDR13lD%2FDY2V0%2B6tmAiEAgQmGurrxwsTOjS68nrrUoFdGx9TSyBeXh7nj%2F5FfRqAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDN19pE0WJ3KrhqHMxCrcA1VqCXkUU74zwsUWyj%2FHPT40elGPAvvuCM9piBcR%2B6xH1LK%2BaMGfpTUniLWBXPLJ%2Fgo17n8CAWVWVyqk4R0O18xsKY31s8fe023zCSESKJ%2FdBTqHVr5aKsWLbDWrg6CqH1vC83cgGeJE%2BnAl%2Fq0IO%2BG1cbfow7k3vEJ79l%2BbHtbHcK7kQclmXFQXkU0%2FKZtmKHKv86YYBrXuRaYBdmakuVh5Q7aGjIdAqV8wAiBQen8TF3gRpxL%2BUpl%2FXU34FT4WDMv0uFCQtbho8rTa3WZBq3SZ3se1n8al0YDq4m%2F489QDwNIuk9pZ4sCLk3yX02KTPbupHm%2BsUgvu15NQjdWGpGFYmZ48Fd1ZHBRS2cax4BJozZahZonQGGlPVb5B2eUa5F2MO0FDXbOsAYjUtQCHlmIkWA6Sofe1RSQQvq6PcKMOnPhxjCDyqfBw6mzwVW3%2Bo%2FCCbeH2YnqsYwYu21BhYiJ1G0%2BvYFM%2FqKaU3Un4ReSqA2wYGhTInlsyBPpPA9BG3TpRKFpBJfeJtCKCXxKxqSeDkm6jrhASng40b7wAht%2Bc7md2GfKPTSq7QPpzY6SpzMkZiUYh9VYvso8R3WpS%2BfxFk0o3chYJEJeJy0E2NU3Jo5BNgB0UMYvG2Y9DMMzv5ccGOqUB8YQje7OpFbG3WgpZIfQx03V3ry6GUFBif8C9N3cWPe4GI16R60ct6cPx%2Bkwau%2FDwJ9ivvfkGoipQ%2FtmDhQRtzPBv%2FxNYZWj09SKqEjH56AOZeik15MO8xu%2B17jnPG0XUGbRHHa7vnOcDI7wyyvNKpwXLmlyu55TE1F2tw6zCM%2Bi%2BlD0FLIMFR16Id1QKYDYyuRSJFM780tCoj%2B8IPrnUop2idV2i&X-Amz-Signature=b3a080efbb4722eb2da895c204871cdcd944548d4ab28be7193fe2afdc74fda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
