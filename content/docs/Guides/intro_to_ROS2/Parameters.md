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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMA4VNW2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2B6atLiqvBsF1l2DX00ptAG9t2f7UeKqTE8gvbdNnCnAiEAi0BvuooSmCeGps33jkIcFzTP5Bm6woaIcSmiNYxq8%2FkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSm4faHO%2FKTroufMSrcAzqyDmx7zHg4AhjgSHsv%2BSm9zNIipYfDzQXk9DqKdQeuAAntblwg7WVN5BbNNRSii4CS8AlS4i%2BDHLDxeobU644gtFurCoHfczPrBrNIh2va1M3NYL6ZeHaVUNsGG4nVusRFUuJZ%2B71hK%2FCAaVqFGLXxw1Ga5H%2F9z%2BAivI%2Fi9f9dgyGLAAqIQQ0J1g86IPPlK75QzctoFt3D96qt56tSZ3vrxxm%2Bsn7Yo42aGq8IV3uCnMiPOjeFG3sXyvpdBz%2F9vlEy8eNbKPyCoJJ%2B%2FdDRAeKG9GwdFnPsqIxO53PxVQoSOFivItWqGBtNpYcJzTPXgEQ%2BC3FNkDDIA7bPAAr1KMqUkhTbwlMCjxk2tOE2Xj%2Fxo1dtbQ6dg47v%2B1bgmAKf8t%2BfjZm9wCpfKdVDS7MJM%2Fgtpsp2yHFLI3oHKgsd6ck6XkorIzHQiT0lYp1A845gt0DILTeBi%2FgwMxnWasBQWPFSZDsJdu2men4W%2Fs1mMQqOZdWbhzbP2ngP3z6IOUsLi2zhJSX4OdKxUFOKnGQAd5WeJjCugUhC3gRRooAtoiLmFPA5%2Fujc5k4hgkvmsx3LYCm8IuBQm8LZDZeRcVEalTmm0zeERLqLjnhxbK9sG2uBLGkLb4g5Zb%2BDQppqMN6Q%2F8IGOqUBc3MGDrlw74VW1Cg4FfmHZU2XNm%2F5sNgr0NmkiJGJTDNsGXs7PoF0Y%2FBkbsPNNztIGaXT7VQMxiue86ZMto%2FJaULp9tglTHlJrc%2B4dhYh%2BsRL%2B14VQ0gfXy0aLXAKnGx8KoR6pwOZv%2BA9OCblAlyCNpCjtrhFRaJBmLNOsXSa%2BMQrt8l5mDf9FMKiFtfNsFNV1if0ECL3Q7e3OiGhjr4qt1GuqPNG&X-Amz-Signature=ab81d7f3a5494035559988b4c2249629252dbe3387c6ffc59047a26e399714fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
