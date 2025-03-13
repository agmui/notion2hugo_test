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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFPT3V3P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYzJfDWDFbw95SOicNf92a2jRi4z0tZ%2FHHaXGFw1AetAiAVH%2Fyp83sAuAUZAfIasZsACKR970ldOVeB%2FtTQ5yP3KCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqgpE5IiI4d2%2FyGMUKtwDAdUAlUcj1aPccA7HWvhb8iAMkkrFyQoFLTPpd0wJseBKJ4P37b6V4sLjOl109qXy4Ajyd1UhpRqpcCMcLTsTcLjJnXLVMhD3rHMlL3tn1CLTTDmEM2C6aYQHeIl%2BP8Igob8KmSgvN6YIX6a5Qu2KUCg%2F%2BnEwoJCJbitIpKvk%2Bso6e4oXrg%2B3gci7rdWzCzetZQts1iUCPZyimcUcGYEo6wQVxiP92QZOu7op%2BD%2BgaNMP5tzc8gbCv0Ue%2FGfXpPhPOCjL7Pn3bNUtecZGyTdkYkH4HDOiDq5%2FJczRw1sR1MHEMChLm%2FqoiJsQpHFl02P5Bh0xCPFtwiPaR5obSAZ0ZtmIZ83sa4f%2BUOzaKMiDjMLu5hZPF5ASrTHH7EceMcQ7vQIplZ%2BKu5ebPhyjDOLqZEHUWAo7twGpyGnOvLOM2kWnJ2qKDZuDPMqmJ%2Folj4VPWERm%2Fwd2Oa%2FjODPET9gvZsRUIfy2fg2hQ5ShWTV10PaObHJou2GeV3wl0lCr%2BUfobQ2%2FKku%2FV%2F%2FaJBhDu6NVvFA8nmGTDZR4DZD%2Brrhj7NQUp0CEo5ZZOSISs06wZpfC3ORTGPYuT7fmoYVYc4kSGHhVpOT%2BjUAHn%2BshqM9SVPZVnxWEAIvEWN0BcSIw9sDKvgY6pgG5xbxV4pEji2aQKIj88%2F%2B3DdhtVdUGg0Hsf0xMRnujRvXz27Y76bhlET09XzZzRGb%2Bu2G8UOAMhd21Y7UpY8tQSqHSjOEPcCmuqD%2Fvdx8tfxf76OHKkNe4Fy2kIZgW44XjLozkjoH0oE%2FlTE9gD4nhYmaYhh9Sonz2GZ0Dhg00fHr76II%2FkS0FKeJX%2BcNuizQ0lMfnJI%2BDgN87sFVNt%2FDyCYLdH9Pi&X-Amz-Signature=d457775b811a875c1e1eed21a22d8f407de3a1cb918027ce3fa449961f1de324&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
