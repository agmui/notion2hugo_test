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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MERDVO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIELSIJKQT8vlQT5EyhnNEx2pyzZGeTSfha%2F76aQGhjxkAiEA07ciFPe2UMRXgI9MnI5XPYsXA8HaRZCP1pYnEcnjRuUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtvIo02cbeivr8E6SrcA2Zh%2BcJUVkj5p%2BIAhtFTiIKzz4WTlEE%2Fv4%2BbcJV8dc%2BGOlYtzP6q2rnoa0nPl4RFXFElOuzQML%2Bk2ICNTP0EJRLABN1TOhvU6RHlpo%2F4%2BW%2F2fCJzHxBp8x8iGdgXVapSWLN%2FmDDiRGsF0WwuO2BnNLUGvFhkZ6V3mwBXTt9TPBbo0PCb8HFShOaGAq%2F4WTWxp%2B6xNiXe1qNEJ0ibfWOEpQ%2FuLDAZT3tZnivv2ce0lsXwNpxYLewU80bAl4KsAPdsVdXVNob46T8giHQYREvOnpwbVmGH1e%2BREW4x1u6FywvrNT%2Fp4hAN%2B%2BVllc%2FKGGtZyy%2BSi4wzvnzkAye4feyjeLd5f3iN2qxhmk5tPgYXy2nslgn0fPCzQGsIxn0HjnlUEjzlX%2BrNC%2F7VAnCqifNuZd25cFt%2BBjgL7CfWuC2iW1pg6TjOMLT623CJH5JKehD%2B7%2BM31c1G6w%2F8f%2B7TkKaveX9MmzfyPddYREZQqsNr2ZX1LVzWP2vAZ8Rxnq4YL%2FF0Aua3ZR9%2FUQlpZ%2FwFkYQkwN0tuGhq9i1c6Rr27MR5Zw2GpcnodQ%2FQ1X%2B%2FnCyb2d3wghBPIM5ccDr%2Bp0YJek7bInnvaD%2Fv1bUerRQg8Q5xh1IA3Zfm2qxYTzLiaSq%2FMNqNj8EGOqUBI64lirBy5NP0QklQGx%2BGcZP%2BH5PP37x58%2BXia3eWEU2XeXOH2hbby8AwML%2BPIt2AfmbFoB4vP45yLzmsdYd44T5uI9M9NEgtnqJD96Ph7nUKBn5J%2FunCNi1T4iIe6qzaRNQXWT5Vj8FRUGao6d3Y10nZe7Y8VN8awtrVEPpx8gm0REUxWYsg8FSYaDJDQD2%2F2NszQGwQEoBE9xDTnAGECXYUcLB1&X-Amz-Signature=56bcceb944cf9f401712e4e8fc802429722476d73c4d174b6b47bffc51bbae76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
