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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMD4MQIN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD92M4EjZlOzsSbVYSh7zCP4d7LdzjfzLDBtrYWFixPKQIhAKwZp0qqjNsKczXXAIqCNoPI2Gfm2o3AAy9Hp29FGNGBKv8DCEQQABoMNjM3NDIzMTgzODA1Igx2v4XoIuizEWQOwYYq3APMEbBTJgC%2FibKKLUkk4zNyISV%2B5OJpZRkXD58djdZsws2cSg9VJLeKZOjzCcBLd%2BL3q0vNy4SgPsMNwb66HRllF03t%2FUmolg%2F%2FTQEtB3wlGiUiLIi3nMkQKI5Sym7r78goTdivMzkR%2Bx7BvTjce%2BesITya2R0e9hRbHNb7SuaVqCjZixki%2Bu1s3KMYg7FgtJXBn0%2FRW0pKED%2FgtPwEJzak4TBy12QBj0tfggzxgPLTgzgYPEB8LN51qAy0Gs0%2BRw20QVOsFwih77pLSqW6IZ7d5lxqYVxdE69q4nPyzA80vuEYCSOnWKGUBliQKpJCoOvVsAuR596AMg%2Bq4nefyCwgI%2FVq4%2F9pt5YWdaOZZXNlNwjQWbQlGIisYBkvjnqFh5HWbUZFzVy7%2BWhZjxZlVXPWsu935o86YFdzb%2BbtXBMqtv4lojmbV5rxNHbodWGYP3kQ0xAqAlLL7i%2BpqbVIqKrtpo%2BRCfob%2BhXoURkRJTuTTNQlM5IG5Y7s4h3OT1sNl8IgjM7Bp4k99pPLYblSz%2Fw7P6XrC%2FzGTSRXsb3K2Ir5oVWBED%2FwP5wF9JFN%2B33f%2FPhyNRn3PFEuV7eY3vWwkzq3edoVNHBpD%2BdNlHBnhERiIvANZ5MroDfg6Hx%2FoDDI2pS%2FBjqkAcCxTAM2RylT87YgTqjckS3AFPrbZ3Rd7Mr2Tdothhdl6kADHkP9M%2FONTztSCmToX6VK1Xu3p1dsw%2FP0ZAsHm0SKkyaKgeyBqc6ovSi9dRuVUWG%2BgPV5%2FXAuMpjtTU34nEmW3P59KBZkJ8KyfB%2BoeAY4ZPbR7BsbjvaNWsJvUb9H5KhMkeW97E4fJBpARc%2BtYll9bY37W%2BQpi%2BNrAHmhLd%2BgPTNg&X-Amz-Signature=fc5d9a4b64b865c6551b0ce4dc9871c84e461bcbd99a0f33852d3f2f10a92b90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
