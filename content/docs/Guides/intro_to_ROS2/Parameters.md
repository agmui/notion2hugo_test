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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZB2WSCJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOQdygbmiAoU3%2F1lx5gRu94B1OokjgegIS9cb9DAMW8QIhAOWs%2F%2BEAa9SlscGUhXsGpvSi%2BmOoEeKUKsItRZ4olLQQKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvc7moftJTpHG1C4Uq3AOpkS6ikfnHjzkXrocIWvUcDjoaZtiouPRER6Gvxjp%2B9f0rHaSKcn9r5T1AkRmm6P7KiAKsUsbT5ghvdPFG7OR5q6tUUV7o2UOjyLFs7DxASmmZFCvS0pKXaZPVHpKK2LuA5Glp2aaUM64S4mz2Mb%2F%2Bxt1RITOq9TEwDwRMGgLdsFU2mVZdYeQBnJ5BKs%2BBUkM9ynIxFyJ4nftzWZcI3uv57rCBNvVQn%2BaRBW759X1dLEOlThCHImmHIXOaOvMcKhtf2GmSns36%2FdMxUsK7uPxkAAvoV8ZBT2hjsTQEFnCGCr9dp3CWrxoO9FxYQqEgAgFY4PFig%2B1AHM0E6NLlO1hH4trFiIxXgQWOhpnfRv4HegMcaVUczcJJc9hdacDstMnCdh5tMMLhclhuxCiDnyR7NHrdAzuBLTnpbLihRUTzn0DLb7Dv5Vt0gdwSuSr9BRD55oTspmjSs3RnI4SUF1t2lgpejpMtImutFv6joBbejIDqRifK83MxkQq0ZeVXOJQvnU3HVhs9x5Psny547XijrJc0gcHL1v%2BWbntwkfmEK3ZBQaWHayr8%2FhIBMYDgGzm2esIqBUlu0Z%2Bm0%2F0Egu%2FSg1dl%2BY51NJ24KvaNTYO6ZOjyN%2BoCOY%2F6bkn%2BlDD25v%2B8BjqkASiEkv4q9bszW%2BYAS51HOF4XJngQVvTjIrDgmm%2BEErDR7e4FzeDYUihCPhor2tuGaRWkfXwo%2FyL90CHYOm1MlLhVQhRqIY83sFTN795fVY9UgQZ7ZK5is7Dsx%2FxM4Pscss50a4LvVxOOaSAgxXafASbvz8NuWkeozYF7FhT2nxDHnuERRxymjOc06ssTexFefdJitEJuWjZXTEobGAGa9NQEI6yA&X-Amz-Signature=6145fbce87ac31d96ce790c10a0b21271511ebcab02e485a791908ce8f815ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
