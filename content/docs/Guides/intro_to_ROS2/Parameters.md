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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUK7MHK5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF7dzSOOhrTMB4v0SNNvghavlbiK%2BM1t5YU9FE2FdtJAIhAORdpLz5tbZO7v8TSOm6Ww2enZYh77wJ1uw4KfYKQ2GJKv8DCGYQABoMNjM3NDIzMTgzODA1IgyPhyYhUVP7Ku4Igm0q3AMwfQ1fgvqEsRHXbWcgDlOZvsAKemGDnWv0zPCZbeBHK3FNuux2aAh25nTk1pOafOHOAPYhum0iVpxCFADeGogAvB9iArU%2FmgyrBzBhIdvPdRz55A2Wp7SQatgikA5XLrO2JMnmNEqaRS43paTg21J7qC3qHXBr%2BnJCbpbEXC5lP08wwbNzHj0OHgKkzAshro12SmEVeqT2AVLy1ItaabVvqqTm%2Fwdwk1gXsUonU%2F1lnsAXqSnF3z5DJ7kEB7xN7MnREkDj8DXW0PNnxBDcyg2oDmjqkbSCXSBQd%2B8QTMv%2BUXjzGxkEExlW%2BFT1%2FeySEy%2FLYoYA8KbIZTPRMBFHd3sJXlHC28FbVOtfJxNKCoJbO9hEKJbRHGUi1IBDKlVzYEFPI4OE8AkESeXAPy%2FRoAJ7PaCvQkzLgP4ORlweeitvx6P05d1HjjyWQvEVg9Jx5%2F%2B3WlhylqABeG1FqG3YnHcxCyBu3K6efp3k70DvVPcwTOPh5NNNiOy3N7RZFxo7CU1feORqwSespWRggNVnNoTtXbrITOF4sjVLuYxXZo38ul0y3nOkffeq62UhkUi2VtJ9WsBz5wGsha2iAUc2jP2feKxyLAlwnbgyHhd6%2BwK%2BZO7zP8dUD9S%2Ft3RNDTDH0IXABjqkAQaQgVHanPKBT6Ez6jYOXrmd0DPSrdLGovJUGE%2F9HyBkiXKPV%2FC4XysU2kUS49PjdpSwQ7rQa8jO%2Flfgsi%2BdeHNsix6vTxJTAizXLj7cLTkFEUX68rg%2Bnml8bPlI%2Fm561u5RGYmrmYr7djx8J8t9PUAwuGbh5ExTMwpOdPIScFvI%2BrzPi3mN7jyYEr0Z5z0sQOciHl%2FUqdW349sQ%2BruIQ%2BU9HOo9&X-Amz-Signature=6abfd466395a636265b4b1326b8efc4239b3d2beafe085272c73e72f7391f819&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
