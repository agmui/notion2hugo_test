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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY7RODZB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFCU93C8NvTgeq4cBHA3ejM0AmciOahUlv2e4JM4%2FwUAiEA4pTCbm%2FZVOZjVU%2FWPuX6%2FZfXcO4YPnIKimzWaCjb3hkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDJeyFwO03htjj64zSrcAw61Ow6tbE9uGlcEyp%2Br7YnHjoFCypFM2%2F6q6FPBLzNf6ilhUsikb5t2%2BJm%2F4PPbjwP5%2FG0nOMYDX5a2T7YD3hd5e%2Fs5aTNvytFw5G8xMDZnnVmq6Qp5E2l4EnFQRw%2BsBR611U8aj37q8uO9r94AWKxrDVnEMHkMKDxKqzmod7iBN2wbhpynrqgsasQ35rXufKFGqxBnMDfN0XePB4GoEM4ZLijkx5kyJdDJzU2ciWv0n2yBk%2Bhpi8Hoy4iJXqqtj0swlG3Bimg8%2ByyQpb38BFYgEcs40cA8uYPS8OA8L7G9x7AwIMtoGxJvOkG8DfaPnNiA5pBcaNCNc21Z6sy5%2FbaTbOwhHrxdFCWfJut4DX%2FiJu0aAaiDmlzSDxbB%2B20HAmE8bNruuXrS%2FyWs4vUxFd4gBShpnn%2FsElRukTI%2FXSbbr%2BABFFf4FgV9vr5myDpO5x69RwUgcP0fDBkmQm43o6qIzbp%2F0xFx%2BCGmWHexEJMtCs8M5crqUV58NqmXkZLnBMs7YAfoTzPzdvo7ihqvJHHafiSjyTx1nK5qqvamBWY8EEtUWulw7CAO57%2FNCZ3wkizZxFMrZFTmTkrMzAC%2FC7Pf%2FVpF4vvjw%2FUVlbbz%2FQs8gdQaM62YAP8DJrVaMLal1L8GOqUBxUQetLXqYFuT9KxZ89X1239igp8iRbbWRFEijZrnCi8KZZXF6ReCbZ00LetMytVqTlLgfK6GrZXG%2FD1sMHPkTgeh9pAsJqmU3lG0%2BJ9w3PbLkM6bxJAMWkqb%2BNAAqyvg1Jfu%2BWuZUBHmC%2F6Amf6Yg167sKgBmWlwVe4U0ouGD20CIwo2BEhljwbiOy41lcI%2BQGKtIiUlnYJ1yohEWc2mLFo2Kx4R&X-Amz-Signature=4af24d14ff8afc9364366dd04f11a0b73f78ed01a457b6747e644a130f31ba50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
