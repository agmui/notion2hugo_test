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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYIK3EU%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFu8lP%2F2r%2F4yVQmuwQq8ifvQyAsI1GzJhCTd%2B%2BqPxDF9AiBqEuyeOm2OB2kYzjdh0ArzBGkC4t7tzp7ut2UeKJOmQyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoT4vs%2BL0Wu7HjL4oKtwD23wGhuWcBx7E7Zaa%2B5ZtbQiQqP9tlZTeBMRBXlrKZWL8x%2BitkN9AHZrHE5Jo9RgLnMgI4QUvFf8%2BSDT2n2ibwB1n03kupd6wtnEt94NdJUiTqeYg1xcEwU%2F9CCN8bN5r%2BJvUEsYhF4yDGQJiFz5Xj1UTgkTdpRA6FfO9EvoBvmuydNK7MAGVDHK2ldiWwmdcCRHABqvx%2Fo3mgfIl88GE17oQhI23l0k0UGALTTrBA9CWZ%2B6oxtImgOhwXjVWlGfRAcs5q9%2BTyGbsdplnLZqHBB5MTr2Saz9fqYHE0aIhtuq8UH8j8ZhbY5beTENnqYLg8eANP3FAdZIF6HwWy%2BMK6Ps%2FmjDsd3A9fw6YAhfb440cP0HLWkm4DE9ZFiHCAKTwFnUEspBulVAMZc7nKECfKmi5gmGJUAxKoQl%2Fslpws7rq4u%2BWz0tcctqNYRTsoTU3fqeyrXK0q2tDXO77loFnuEmZzGp47EXZXOU65kpAUE%2B6VIIXr70v8vexKOsib1FzTgF81Q2Seatu3njQM7NG%2FN24%2BXCvYek%2F3aqUk6C0cncSt209uAmY6rEI2eOtINaMX2gt%2FyQOSDCWK9fYtyozdqL70Y0ly2Bzjdbw%2FCK6qIob1AD2rkXmUrQe2V4wmsfPwAY6pgG8yWE2jNtm0LluLzHcs%2Bo%2BI%2F5sOAujkd9V7h%2BTSnf4aYGvNKuJI06vRXCN7qNzOwZ%2BX3eW%2Ff0U1rQJmFpq9HGOQ2soxnBBgJcfOQpoJMntqJBbWIzvU9LHLYYi3ln4eT3dXSirAv5qW8KtGcTuErE8A3cbF3GV3ihUTz%2BqqzrhtIgcHmWiKfMlqWfNhgoFli37GRJjM%2B8EG7k74AjWEI2i%2B7EIur93&X-Amz-Signature=2eca5417ee0bd742f60c540c8b2561bdfc60e153707c888bc5124d3e655d3bca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
