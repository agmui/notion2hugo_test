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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNF5RW3X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGwt1n2wV9KLMb4sWG4U%2FPTlROn%2Fd1hlO8bxDXdkY20KAiEAkX1koRpBzo9o4ItCAP5AMsJ90QZKf7bAdHSlgFY9dPQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOvt62nWzTunhPG5%2FircAzahd%2FQpkCB2z7bAhVkvTHwQmXzAmJLHY1mPovAGs6i34%2B8z3Oy27fM28PVhgwgItC76pM240YtwCQltSW3AZPgR%2FAzY8S6IVo9cG%2BQGrM2gi%2BjjHhhCGyei8jevN9zAoLjWxZ%2BjYzIo6FSCeQN00Zfw2HDvIqmd13EG2NII3gHuXi91t3acGvwR9eUIP4u57SfY63aBySgH7WSDizUCnPj2Q1lG4o57KwrqY6ZrxVZEnVJb83G60Ed5jkCbkXl50kgs6v5LipBh4mCjfyRvrGKz%2FxADgSmyo6wAG1sFQt1iPeYZa3ziDBK0LXwfKnCaIvHCuJbfmfFHdBqbY9b5dA5B59cX%2FWLtGU%2BQEbeSNW62bJa5hWitQ6JKF7skTkHpRfrZBOOeLIuXx%2FUzYROBv33MB4oF9JqTWmwdRSV7jTSXofzQS%2Bkd2AzFoh05tWjCUim20fpxEbax0JaD0NW8i8UV7juKvpKkuaJWkapwiVmy9yhlELdDBXTERXLF2h9STvTJObvHVVLq2YWQ8Zg%2F1z1JMAgrSpAHwmMVHYsk8XNjSjYosjvbbtfy4pGG2KQ0z4qQf3nnHG6Nwx2O2CilgzcxmwfHBSx8rXjs3uTj4jQ%2B2Y5UOBQXPJV9lYGJMJXIwMIGOqUB8qfqHzBR%2BSV51Loq7TVvqEs84HfpIJduS47gV3vVLG5mHDd%2BCLcjmwfZJZbZ44pA6OUBmcE0N3mIObBqQawCAXeXFjS%2F7ePBvjTqzy60POn6DLGPBBLXGj2tNlBrDf45hUgQNMxEB1RXmSH%2FCGH7R33k9eKkcZvbKKZfvhsPZ%2F44SBh7UNa%2B0NnyEA%2FPHHFiuBOQbYckif3Fn9kVpGaFu54JH3O2&X-Amz-Signature=ebe52bb800e4b07887e63f0a129436c86e3e187ed323365585238e9fad076cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
