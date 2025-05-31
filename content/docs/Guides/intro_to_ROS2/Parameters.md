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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43KNL5C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCabw7KrkJUhVTrqHlJI0Fcj3cILRRdR6VwtE%2FPmAzywAIgfXh%2BuDVNguiSPKgygwKyrME6nkApSKx2woqb8l6vIesqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLieeojaV1vbDgB6HyrcA6%2Ftwm14kOtNu5qDUx76WAVY1wKxGeZzRtepuMcZSNPjyHSdTLGkWnjzR5k%2B5FkW4ZpF7%2FgNhwFKAdr4ytryKcK%2B0MgctbBjDeqFQw79S7N16lKqIx%2BZ3dvdReS5RBsZP8pZ9P2hQUiEwSdWnvyxi6EbcpkuipipQ8P0DpGL9i2gyhIalLkRcdaIFsmhk3hhgHljlRuLNHnzWWLwkumEurP77qgx86IYpbs3LHjucS9L%2FHOEVXUjvpq%2FD9VWmDiIuenf3iX1t%2BR%2FL%2BzyvKZBrd9hDqrvq1WwKfgiYIZT6jIntW4GoTDj2Qx9b30GAEeo1pOeHlLwIzWtbYl6oRqXGelTSpLqTzYiX4r0VitM6wszdXyaiaqygA%2Fo6yMnTarqbtihPWhwjPHuaojWTz69gIzT8zP8NLOuIaTHd3ecrCklbaPZly9gw0DTirMipbseE1BYwZRd2xdK%2BqIraaYAuQi3gRL3rnhmr3p5Kt5PzEATZTREr3EN3Db8yb49sEUoyBVQFx8SCC%2FCXbNGbrLWY0r62%2BHYlkjwotwiPXgDtAeV7E9HEBT0cY%2B34bcH8XQKLUMM7lBmf6AIL59eBPC4vyAEy8D4BNF1Jj5zUC2EAJEdSwMVQVf4n5wdk3UNMPDE7cEGOqUB9d5a9SUh%2F56nmYA0PAdNLX9nP31MJaKQlZHevDtJ9gJA34yju41LMSg%2FbJN77zHOWqG54wDLdijmL%2FtOFz3A2yvzIl2%2BFt6yOTPJ1W8EXfgRVlbvJf2Xp3auZebLKSS8AmHbPiZGex9BFxGoSezmGG0gcnQP5tTkFYOxM6PNx3ONx46lxWwM8kp5sa3QR9YfTyZaOy2aeRHE%2B%2FEfEqhyHzag2RSq&X-Amz-Signature=e4be37a72236e4b57730d0d15c27330b84750b2cde6dd17b79df3b870bb7c1c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
