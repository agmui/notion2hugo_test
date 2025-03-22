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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7WRCB7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDqzPWYFtt6ASsE53zwmb9Ll2Y6CSNh5QpAoYpR%2FBRKrgIhAIG9r5GhsUoClVbNg8TOVw86el4Up0e%2BFzriNYwIhqs%2FKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8ok1q36GhmkljQ%2Fcq3AOwR0J019xc0ua8JnHFe4emWh7nmSBBMBijGAk8RpGIdKqNqTJPyGKw2j%2BG6PokS3Rk06otyCCtuY6SIkWzU65kloSGtdyBIPZ%2Bii6MH78JejXCZyM5FLt%2BuP9f11MfMQaymjR0S37IsqtT%2FzIMN1nkI6oNdJXYzbXDVxeIdxvnEp6BXM7loLI9O5c2NJSJg4BTcqhjAk7bL46oaJSQ9usNFoRiCGzeiwo1VqN1gxd8nYB88Rzb2jMDfVs38ZBWXRO%2FGTIPZdODNAERviP5flW53rbbyA%2FYn2tE%2BfC9v0%2FlqKHt7ejZsJMblDEvNpVg42uZi%2FhH31VYW7VBZnc1pEKC5tnroeYG5HQ4SujbFeP%2BTq289K9yxueeqdtOQps5knu%2Bum7w48S5S1Wdmaj52hHSOkrXlaEiclGmVwPuG4m53bltB5DnIkPSzWPJtcn3Wtny%2FwCwPKE6GdHKNOkPWCp6KIRqDi8IhCjurEWX8MKVk%2FDVf5Rb2wevexl%2F92SmchRSedDmhSe47nnmeFjxN0RIE6BaNsTYrDB699uPVf9bmTCvXE3dOMtqbK931A3LasTg%2FH9mPDHKjWtREjcWb9l%2F8qVInZgsnSsP5ohXeby%2BBihZFKFvEtKocuZpnjCF7fm%2BBjqkAdh9twFgW3hJG77vfgmn6h5Em2F2aXFxUHNaw%2BmCvesfezeDMcrwh6ti2c1TWa7iI9x8TWf19jsZC%2FTnAqLUb2ADMGseKu6wg%2BIFWVGRHh5ZYFkOj%2BrwSVTFDok3%2F1M%2B1bCO2kmd1ILM3sOeCddR%2FRRG0wfqhLQGVaSo7CuDLCP2TSeKNASF4KMkAbEPaZp4g4X3ci5vPlxARkBcicrrBrrmHD1f&X-Amz-Signature=3d256e384ec4f8a55c5330880d2adeaecff7b9530f096e6c650e02e8f8818dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
