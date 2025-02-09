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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRJUKJ5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyNQxPTlSn8q1t9jVDO%2BSf4I5494Gjecv%2F2j78KKyg8QIhAIVFNHM3ycHqqNUNpc3PUytBvFfgKQVukeeh%2B%2BzY1GRTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy2aTCYngUyt2h6RYq3AO7doWsfmTgmjBzvjQREk88S2alVaWxGtiV98WqATalU71BUR4ihqN%2FPRmcSXkiLMJTK7Pg4zJeSYCK3w6K%2FyWVZoYPoRtjoOP73ygypQtZFz5wxsOY9wg%2BKbZlRUouJKNWm9XF%2B%2BemGqGQ9yVkG7xftsKujKLmO0rQtn%2FwcSi9s%2Fazb3XVndrMwLUXxvLCN8eTDuQTK8wAKIyKsrf3%2F6z5xEqFGQoRozrX3PWe7k0hEiGoUBv%2Br3WLKqR1vzWYgbRZ253D2Xq%2FOA6QjEivKIYi1I4aVxHO0mmX8fOpIpDpwJwc6rRtYuDa9MvL741nFJwJ940d6ObM0pQBnaHOIvxwVk5oHwZbSlkAQPv%2BVmxkWFYIjk3umqYdJKFarOigO7z%2BsubBYPBESy5W5twKrOF3wp8fFiK96ykRrHEjq3SCeVdfzMGXm1VRQMHcJ1mePQZQMVYxyjlo3avETTDZUwYZPl2I7uEszYzDDha3rMhrmUzwG3c2i8bL0EAHxcYlmicIwhzmHUVvam3eZYNSlTTx7SNBFS7bzSIUUadJC5ehBHVuUoPdjzNHjBidT83LBurLJPVt3Mfl30WFRJsmFXPqv0PDizjk8KDbQraCk%2FjvcDdCihWCuwQiXglU7jCA5KG9BjqkAfcbkmuQ%2BFXnUdK2xNkoxW20tRToyBJAOK6UglgWZ17Sw0JFzST%2Fhnw%2BlpT%2FGnY1M8anSm07ZhDKox5UqeEObGRFZD5k7kQISYUhbK8CvX5mTvIxtAk0km6YhCjxPmhNy322AgdBmeQ3gNbmQGK%2BL5N3ImLUdcBlkh5ZRNLMrscabdoP48bNzohjPa8pk0AHeXJ7K4F3slJru%2F%2BIbcW5Jesi4NEI&X-Amz-Signature=467b229c026a32d6eaa116a7ab67dec77597a920ecd10f0c1cbc73131a6af0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
