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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAP5QPX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBJLX97TbKaRTN%2BWa2zuZY4f6H8YH1d4ENOOqn6Tex%2BFAiEAjuVojm8PXIVmv5YlTOdBHGrPM%2B7lH%2F4Sv9FiDYGDXuAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOco67cBmxRKSYeTsircA7s8uQpr3vOCt6Xc4u0Q7YwW2Livi%2B8iDQsbVG%2BpeHCie%2B771spVlVt8hQf3zfpsQnBJEyo0sxdPt5MFi86sXVlOOtCcSwnUYIrCaenZ%2BW9%2FhbWM12PxLht6LUWgc4oBoRPzJchXUiEHL5qLvAUC1Vke6MnsZvEq9PaykQf1cF8zdreiGcqePY1hE1CKVPoaa%2B7H5Xdykf2%2FxhclJ%2FaCkTaMAtFu7sFOUk5vyN6JNl0ZfgnHMFqrvcoZwhiR43r13N9lESDfNL9zFfOgyWl4MwRncd0HLjX7iPLaNVlazl8D%2FC6BxGM8PtPG0gVuXoZfFo6TFhEDL77fSdS93aDM%2FGN8amm84CRDhoMLkKfV28GBFQvs%2BvlybP78NZGHxp3ften%2BI2naKFY%2BpN%2BJsRVAnh30Bp2rARAxq2Ua9axOCyqPAk6Oz0IrArhRVtnSXEquSy7tBYVlQJj4zoLWj%2BZU%2BpaOXfCulhyKAdR3FyfpHYtFqF%2FRzkXSWoN8DCmYgtEX4cl5zihFAq4uzLZXFiShmeTr3kjgqKP%2F7I6%2FeSTMZQmigDybp8FU%2Bl%2F7YEL0xaYRxZvFYv0Wf1cGeLPtTig9TktsUhf3a8QrhsWjDulOrX3ixeakoelGZ61X%2Bug9MJKyvL0GOqUBmy%2FkaFFM6Lji5Hg26ugX73kSf83TcmRUDLVJEQQzVwPsiZeZ88BAX65UYdzSRscdX6a8esTIpeP8LsjY%2FR2gVaRf%2B7SJxqmBS0QUtq7LB3kEmU2SJ6upYnpSsmYnk0GChFOaRL2XeSN3jlRPDhQqqDPEgrBQXuzakDhaJhCP4OdVjPYa6c5nJ7cRUuBsVtV68c1w%2FaH37HbP2Izj%2Fwnbzl3FcfB0&X-Amz-Signature=a89b2b4f252efcbdda50de864a4d7543bd40f5854a94788db8ed3eb41c304244&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
