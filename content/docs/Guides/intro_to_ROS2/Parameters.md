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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXLCNJDA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQEQCp4%2BqpE3jiD0dQgvZo47mDCHNEr%2Fbes1ab14sSXwIgV5fEHHAH0bVWVBr0qH3rrLxnRk4EUsvzqvZC%2B4RJCTsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINN%2BIONV%2F08DRhaTircA8SpFvB%2FW%2F6C1W7%2FNfG1cJWX17RR4b%2B8ON99QvZmSg9G16Oejge5r42STqSw%2BMRH0BfZbhZbRDGdNxR%2FQiCUdziKTY%2FblmnbMaP58mv3tT7DtQP14asr116NWRYfWPJyjXo9QCxbBnZfGh7TBdM7arNoLT%2BUKhrPsYAmoPmrqfs5InIg%2B5TcasuKMJC3cveHpFoiqY1bHGVOWifqg3tkkmkURjK7srl9ar%2BCZdFIvD%2FAddx54P0U96pcO2GKRfZSJI9LOuH8pviAglxOhbDzdWZaZhTKxOJsXpstQsPCbVH0d6YT0LwUEie7ieBmaZudqzolt8XM9AIywXL5V6PxO03xOlNMhebZPzoYs1Urru1r9lluytQ5GFZgDf7x5vPohBn644a%2B1zwlhq6zddlRKNaHb1iHl0Mrd1C1Fcf0aTUj0S8dqqgQSodFZjUlr7OTSIPVovXfS8XSBTZ5s5b5LBnOTexcNpNwdQboin3jEESLodps7zlPsb040grOgF2FW42HkPNTordhkfC5xIdiAKqmf0EA65M1aK2%2F5hLVbMdEBrhm9H2zl3N9D816EmdWoVWWfDSHABIaNI1VupYgYt1r9pT15RKgxELF8qegEsccXQQIbzIxBjVDECtcMM6Ho70GOqUBV6hRpmYJSTd%2BjOW1W2obxRE6cVQBiQiybAhL5bgcPLeYlqw9SNdKDWKhyMCK%2FWa9yT4wmXCOlTDvb7L7MgPf86L19AFbDeA%2B4%2BY0TnhTY44MYMbPfkJNNg8HEuS3x%2Bn4WeTZJZcrkjuPdEACj5zNI2SwxUgyqqr%2BxfvAH%2BTtu4u%2BIyBkhSqAS6XrPvFFlOQyX6S%2Bmye173odq5k35Klhzf%2Byb83X&X-Amz-Signature=577ac841a9bfdc79d88063453cd8680acf8a7f5d0c226907bd242331fd36eb79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
