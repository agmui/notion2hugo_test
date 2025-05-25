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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TXEI6TI%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCUqkv28PSBccx4bswiqqRDfoS2ZYtxYSPTgp6g8SFiCAIhALWJfNSRrBtRpzjmg0PhDtGsRIRpMjMwjAMD3or%2BDz4wKv8DCCIQABoMNjM3NDIzMTgzODA1IgwvwpOFR7x%2B%2B61IqCwq3ANmmRN8F1svtRxdAjfzilV%2BjHSQRidfJX57aTHRNT8NOrgRuvfbsjJUEcgc3YRYLPXyQWSx1QiADjUIVQvbv2ml4VCRfWjakERIUTeWxQXa2uIBuIq1GnIE%2F08TkYO%2BcAl9TUNLUl2HuK7LJR8lbhWGKJE04OEOThD6W2hYQOY9nUe8QgjQtH%2FSVG5VcmYzQ%2FCkRR3LdfWe3a49RBk1jMZ8iN7yuT%2BQyi6KNTmVcKaf5u5RRVR%2BG00tXkm6JJ2u29M5Fc%2FvCmce7ZZBXtg1YDaCj%2BP%2Bfdr6daLyTIc08Ms%2BgR1QbOsM%2Fx4LGHrxqPAC%2Bj5MH9v%2FPsoKaD1Bh0DkX5NHEBS24FDlIDBuIiu3ON62KgQ%2BpQPBEiNa886bDU%2FCIlTRhcIAGKo1Iuz34HOHKTH%2B4TjtNyKCpmGXPQ%2FyqmDX4gI0oWFoQYnKhLu3W5BrDBezVadtPK23lKyaZlwjm4%2Fv9ZYdeg5MiViUTGLYJReb%2Fz3qpvIaA9E1vQ4cEdPrsydrOpJeAA5tst5FfHHly64p3I%2FkDLdkQZ%2B6ENNbYbLnCdpdkNtxftywOz2FXHcZsFh0ktiJHd2%2F4mHXyEoFvd2DZj32NXlZxYyItSIyG%2BsxGOhLAtZR%2B2ADrZil6zCVzMnBBjqkAS1ekrzPazsH37ZaX4w3H7FbcsJYqkn7mjgufrj2iiAE9dkwK87uvgbi2bJfSpACGfPDjXa8%2F6yuAlHjxI6%2Bm2k%2FwCUT6wQLwWS9VQdfnDARR7yKnHX9hBc8l7dvb0wWwOkwcU95aK1dC8t%2F%2FU0tAj6mfjXc6qX2yjTAbcIIFyHuGGUI%2FE9WDXpHPPkO6eX1%2FhduanR5fLtS%2FmkY6sFqEwLPT8aw&X-Amz-Signature=0b47057c0382f50f0d4dfb0d0cd8d99845dad17777548d199bb5abf375663d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
