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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AXND52T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOuF77YLn3FEJQqMd6C1vWra5eA%2BA7B1YPLH4%2F3HwvCwIgPN9RWFVnS3s85zhQL0jU5kYsEoPsGDndExzBYbJq5AQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYLBlkCLCVrk%2Bz4VircAzjDvFMc8OhWWmDq3Fbf0rBpcasXAvQynVf%2Bj9WrbzxSXq%2FQwny5XQnViFgy2Tppk8Q7xitsxm1GntAOieXlquIq8lTw5WtsDYW99DWEmKKYodItD4cBV5eUKmjag%2BxpjgbEnbUrMlPDcdho%2FWbP1IQrgm5u2rhPZLN0CMtVqe0vw5kmrKbphI6B94DQ%2BLYEcNxCwEia0w2ui95gMZjtL3ZoY2iwfrrCaVOe7jKSFx4X9drJ8vMSWckZgF22443jt0THBOKpU33d4SwCbU7nFNv1uZJgh6xtcElc%2FhdbFYypN6AnF3r%2F0PsrhWZjR4nQZTveKMNser9Qnz6aSZfCgdoUaZSKiDdboJXeCrry1mTJfKSXbD38%2F%2FH1krq2LNpSDfNXugSrDGrxQCHERA884h%2FWRi09drQnOypjCGEk2N4nEwhxopZZKPNDymQvi4nwWRpadhNyrD8QztaQXutkuwWikA%2BCy3QvMRMNBW7OxIT3vy3FkE0S%2BSm8QpgMdqNxvNpzC70OTTuqr5K1vwAhGhCsfIfxFWX6YUR9VCk%2B%2FjbvzmylxVeFo8052ApW8Tjc%2FxoZaTs7ZzcnH9jAVL%2B%2BzugSgOO9VnWxt2GSrmzgqa22S2RaLYREgkl%2BUNVmMJadycAGOqUBNAORD3AHsfLmDnXudtHXRuGZwcynKnim9ij00Da%2FoDdMcejmg%2FQITAFLp35NvJeXhwMa5rb%2BUoYeuRYJmR49zj4BJ4NW%2BC%2BtOuMxVYsaFtYEJ6BxZ9PjhOYHy15O6%2Fa4e36pcrhI2e2GSMDv7JLffj8HtBVDSpZtw46Y7J8vCMfIUoWEBVcLDaoO1tqxBWjmLJzu1khhDas6id5P%2BIjx8ZaoKvam&X-Amz-Signature=c407581e1e56e45176a3f06406b64d1b0667fa9da8f5d83ab78ec5f71604cf2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
