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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRRTSFGQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEksGIbVWNjU2Y05nHlaHO%2BAjyroIZg7nKTaB5dRjiAbAiEA8%2FFhWV1xxlzbDnNngdoLdFlxHVFKgH5QUnFGi%2FnUALsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZvunJWB6Mbke2i3yrcA8xC4b5OtolOzSSlJPV5WlabO%2FFfW5mRBxx%2BXU%2Fem7oh9LX1UcBUH6ih0FpVOutJMUH86aC241T1ItG9DpbnHmptlsoI958pC2lBpls2eK0DReXT%2B%2FsNPjRR1zexZzgjUmlKO9oC6EpBpWLKJ0aBpPuEHFuRMbAJglRKxJtxahoKFneCl%2F8xtwCjq3MRnue%2Byc0n4ra72G5Q2JCuo9KM6wQ5uomw4nICBAgPdT%2B%2FRen9CHdSyi%2FMsoZsgoEXrWKyl3yr70MGccFmgS1UMNi%2F3lKHbtdJ%2BlvcbQbhHV%2BjRQnYV5QZ50SvXB489hO3jRJID5ctPF%2FYuYvuu2AacKbthW4nz76MCgKELfIoNFiDm9oD5fQdDT8uDdqY1MaRLNOF6KMHYVuoBGBNLGlY8MIWvMT%2B13%2B5OzQtqyuSQbGHCfrDdGBHIZaNPCJ1P%2Fx3fjzjd4AsYPdTM48G4HmXMKyZByqLUUGKnwpQ1ZmI0Ydo4BEpBKuDjxlS%2Bkorjp7kRPS9x4HqoJ%2FQFZRgkca%2F9Tqy%2BjhVQnUcmMla9eXZlt1qfw%2BuhU0qVgBlcV1tbpf15JSkyKCwqbpUt%2BCEQl0fS3ED1Dna7wd3lDtOgzpqscnGSIddAwjvoNRHBwfYSeZwMKGGnb0GOqUB%2F7h5pGmvF1QqSJkDKYVYu6b9sEMbP8kF4m4SWYA0yF4%2FSzSvhNM9WNi%2F%2Ba5ocgQMLbPvuKXqkLlQR7rgRnmD7ZTphO2LsmWPcw4iMQLR%2BtliOZFnF7pImy6J3mHFEuv9Zc5YIPaX0w85gsBaenc6fDnPOmgMsSv1b811CGEbQbF6OMsJ%2FuWYffDqgejW3kTgLt7DPyfm2nPRIQvQ%2F2U8AoMszc8h&X-Amz-Signature=6c0fb6db0ec071639daccd012563cc518762f25cef9a7a9f4a6e715937f00caf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
