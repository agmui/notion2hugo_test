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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX42Z6G%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICyAPcMz15HBAE%2FWM5ZZidbPX64D6AUcCo0DD7Teb8A1AiEAkFjKKFZNNAMbGo8%2Fq4RE%2FI5Q5lcbGvWQW8G9epIOxNYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEs9nOcii7MAUBrjTCrcA3aULDYI3uqjk6Ib1kB%2BmPHz2y2J47VVcpfPyoZeLH%2BnFK%2FW2qM88CfSmw90xt9j0wPH8i5kyJnTYoIDtNOg0omtm5ZQK%2Fmz9vyOL4peix%2BV5%2B3T3smGCBbM2YaBfX7Jzr351kcWnZ6tuuRvA1nyYGjtFeiQp5OsEvKnk6dmpECJGQbd4zgHRvJXLpfrNdmMtLm3KY8aA85UWYjBrJ4QxutIYRoQp7AXVC2GRJbj4j%2Bb%2Fus4OpaFX4ghk0h22aR8B%2BV2%2BmMWPzG%2Bwca4oLCQaciO0HWIuO9NSWnreInbY5z804i4htYQoTpDUI2wCTbVYdTGz70LKSPCcjeX6QEjlMHSQIf%2BT2ulSUhpYu02pL4J%2Bo6vX0gPTo%2FXcwlkwNf4UU%2Bn71a%2FoEUNMNVDj4BW9YW1PG%2FQHJywrOSxixClmxEzlNIL071WSQkjXKtKUNUzr41HKRXIcF7suajGHpeiADgCeVGqFFD4%2BaBmJXlx9aBz9h0u49iAXbH%2FIz9gfqKooHV7N%2BCUYCNspuK9e5ZOLFvVdkOD%2BEbTnEEba%2FuoytVuiLOzO7lQRYtVIfyyWK%2B2fxtxs9yLLtrL%2BLAQPj0C6EyoZMdSWgGGHHTm5YheOo0Yw51kFrwaZNDd5FZiMMegrb4GOqUBvd43Xc8SKR0zMptA0GIQ5%2FqECdfqY1Hj1c4omx1yK%2FbRB7%2BY6r0GRkwIE6bJamtfk%2FjdiOdeR4J325wXh0fUkxM%2BUN%2Fw8bgiNLH3wS3I%2F5sdoEgwS6GuUUC9QOOtRdfJ9SLZ%2Bbm6Qznp5zgiqS2CIK1vXpA2aipUZDOycfyZWIa1nQQhwpmEAXHC5vc%2Fykr9nvfAiT%2BQZkCe0wA3DqcXDWIyy8YJ&X-Amz-Signature=7895310a323121109730eccfaf278391159bdefc0b15de966df43aa4f306ef3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
