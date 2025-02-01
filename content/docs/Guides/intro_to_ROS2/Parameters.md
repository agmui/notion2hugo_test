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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CXGTFUL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIfaHARnaDpKfGsK7GhJd8Z19iJI1aHjLP4oO1cxDL2AIhAL32mIPHvdpEFDWLPS5h6LKKOUh%2BVGX3scu5wK5L05JSKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCe4PRRv%2FMvWREJ%2BEq3ANJpLYzPEnbAoL01oW9R3DrxHeipYWl2lxlIw5%2FvOsdYhB7cRuEDnj56nA1fcNPqep0G9fX6o17Fjt1NCOgyyV7o49O1nkLrSoWBXJ%2F3xKC8319ilfKIi2DjndFbkGuDdk8A6I%2BedS%2F9%2FG3CATR47%2FMxyqOCxXBrnnlh0pEBRcPnIYntDB73lNkH4GlCGl2Hn%2BX3H1D455ImWS9nB5GgEei7viTDkEc7FaIUQ4lDDJe8825lwgsyV63rSOk3fQ0Ku1b9hRGZkA4%2BXg8yBowrjsd1z6P7vxpsw8c7JvWBhABAw9AfWF9DUGDBOOvnVtTmXv%2B6Jh8y8UHYas6qeSZm0Uy%2BPdvVQe1U5igMN%2BPsbU7OvQOBJpZR7mFNdd0btXm1u5l%2F8HxpjeB3sRa%2Fq9960GdzYYd7blhmj3VQJWc9ppKaktEwOtxPYgAkAPCgMGH1rhZmf4Zicf9Zma%2BmLJShhWaDgVXGybcmQjZ6%2FeaCtr7jl2OpBrE2EHsSeFOEAzCY9BJcjXQq4hiPnSykLAleQLFzFAQZFmGK4nFq0t%2BB6Lg%2FWyNK5i%2FY8HrzZ%2BzmQPZGTT9Fip4MnWrdytaXrQuu331nij0ELVhqe81i97vDMcC%2Bbx5tRaQZsisesU%2BOjDowva8BjqkAU4swifJKbPrQO3CzGMbjqRhNe4H3BWKn%2Fu0UgUWwiJI8f4gjJXRw%2BXcydD6rGd51wWvZRBHK%2BD5wMJCSVe5UJE7%2FG8noUMH6LnyzCvfkNJFAHVQnKbSsqwHpYChnaOHisYajSGttusnn2IzwtprPNJsgY4TEAwrdRf6pxhMCae9BNvKHrI1FY0X7sIry3hmMsI%2Bf66x0yEryRm5IvkR1iRAVxri&X-Amz-Signature=a1933cd0333cb472c38a81a5dedabe26daede2bd0f849520a6f4c2e60ac9a1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
