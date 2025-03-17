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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHYRK73%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbM6t3lgxE8tlcswpb8%2F%2B3rI%2FnJjcZ1Se3HSQFg22g6AiALAt6tWvuE5UqPayvodO3P8d1p%2Bmjj2QdCb2TuH61Ktyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM4U%2BZmMuBzst4tF4iKtwDeTRoFMuRE0%2BpXB9%2FTs80r0zHLa4DVKk3nrKrPfcRukO9RgCLUcQYvuFDNMiYg9NwNyRIweA54MsBaRHAvWtyJaxyEjX%2F4EnGOeZrwkiBBZnXAUa231pKfUQhD11Pit9mpHo8KMJxCg55PeI1kLeePiAZxYQchCCWagAab%2FRpUQ2S58i73vVyknLA0FKtuZG2ZOd2bWsSK1O0yMUR7w9uednBKk4WVo7Fhuze%2Brwq7%2BhwfE9152K0HafB%2BfoFEGKX%2FYG%2B88brIuo%2Bd26pfb8RDfC7hdWoUjrV2Eq6aoUff8IGpwN8J3Sqpb%2FmkWRp0L80MdGBIinCkusTt45OZ83JXG%2FqtZJ%2FjZ%2FtZvIi2I9LLPEcQbRA16AQsqyP%2FQsk4scv%2FCMt6h39DOtlSP0You4iA6TgAzD9XmPoJ7dU%2BIjSMnwOm8HPiwU%2BJGjV4syJpi4yjejF7xyb6DI%2FIIxfkM5YlNhTcRHilSdLg09fDKXtJheHom0RwozGGlzTg4W4mrfrvkkBt4Ll4qjhDRPU9IMR3jEBzu94o%2BE6Mqcwj9FW8p3CiFn9Tshoao7%2FGKXsnr9ZIH4a1Y8fDhOrSMl11dpo9V9JHfr2dZVHT03Fi0jqjNVG6Ra7hoQutYDKP9EwmcXhvgY6pgGErH45MP3BDg%2BWOk7EgVpdqAzJ3GvEUPnQSZLJAAGWt0si5MqfXz4tAkqrtoh3pOk1fv0EAMvnfAte8Rtx%2Bl%2Fn%2Bkn0crvjdzrlgQqUH%2FtF3Dbnda4lYnxAhhr8S4fFVgMhMkrZBhqyAGXxANtlAFpqjSDtFG9Vbp%2BEJyrO5oI4LWH%2FlpTTFcrBdnPT3p0ozcPuagJvPKQrruGSWOZnC5JB%2BvSgvC2C&X-Amz-Signature=4e0d6fdbd7ccb3d3ce91672513f0cf39d437bb22c242206ebd9a22ef2b2d9c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
