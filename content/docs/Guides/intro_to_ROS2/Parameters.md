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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BIAFVYE%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEnZpkBbKUjq87IBlPXQHtckxXzROLIQwbWEEDWuegGOAiEAgeHHBGGNgSCrKUvTusg%2BetHT2RrK2%2BGDBNg3Y9H7UbMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKNKo9VWqcELeQ7ahyrcA8upDUBilcQrdObq7bxVp4WiEULoiYBkqRYr1wQnE9TZ%2BbuThlV3tW2KEhmnjMwOD%2BFECrHo3mEUUREOifhlRZB414yPAV%2FDsvIIslSR4F2GEgfyYcIZvIWmSm4aTwJVpoRdFQQdcL90qTJkV42K0We%2FDr8lNUEapcfmLgVLZa%2FKSt%2FNc7rwM7L%2BRPHWg8WkNRiUxjLnMBjgCjTumN%2Bp3wUMcIiCXoHNOh4BPUH9ODxYVUfAEWBiQYVurUUSDi340fDrkO4ViptahbGWtzjd4prdJpqrg0DTsdY%2Bg1fvg%2Br9u3qN7Ee9GajqW3EfZ9GCa%2FZeKJ1cdR14PPhEXoeYgSluWcosBtpi7ZnhgOXodnXBKSPx8H%2FYYDux7nGDWASmjuXwjQxbz5jSX4%2FjWZkdYE85WFEvCpGI6e60Qc4CZ7OZNMqHEZmgifrfHz73sQwh%2BXIWHll3CPHbOwk47phnU2UlBP%2FY7c8smHTXEajnWmFSENk5kZRhU2JnMutVlv5Q0RJhE72b%2B4hInhDr4%2BMeWKZUJUKoth546GtbpXnBmJZoj7ia9pXDTLBAO8X6rm0WXcxkdxoJF4sXdQ0%2Bn5uJq1RQ2PldD89n9Y%2FOsD5j4mLmygS0lfPCFDxtYj2IMJz5g9QGOqUBNisJvWMfTz9gQJMzs5GkxVJlgC0k2bGS8vRAcs1xjyaVasb2hkZ%2BPxhcGOnmK3wHdaPAQmjvmpDh6TKZYSzUP8Cv0jxMvlgpRtU%2Bn4oQa5SVuoWSS2AheJwyUrlr3XElBij7pnFs5Lq7dleDmYh7BQkjgpAVw7zpN%2B3UNzrusjGeHAiaegXq09b6fZ0nBA4AsWLkvLdw4kJhYQTibgqvKVRduyfM&X-Amz-Signature=fce071baf55d4e0f17183d7bcedf11d2bb0f38ec8d05b3b708b3197b4f7372fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
