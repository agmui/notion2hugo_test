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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHAD3HN%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCID8Kd%2B5lqVJxrddYO5C%2FXHx1HMhjQ4DUb%2BsgAQVhAqH6AiApV5h1s%2B0TEIzeUw7Vyxo9nxmVT%2B5vx2kdet4LMTF4YCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSuKlFRFRsxPDVuSyKtwDvsWentuvUt0it8m1t78OxjlEA%2BS5ohb%2F%2F7by4qvH7Q0FOCJu6diIHspoPWcpExiJSa7vWpGgv7OF16qOEQcihBMyJKlRPIYygMYy20Wlez4sb%2BET8KgI5%2BqSjYmZ2OS5AgAI41ESmqJxkLv2yDIJDC5cBYF1roVoc9jlTHsk4PalQJQzN%2BmtwI17%2BvJRk%2BH2CfvKeHe0pZ7XBkoeQJ%2BNm19o457alUisKJ%2FluvPnntRcTQZpsi76jMwbShhnghO7SrerHYW73kM6e2tJQD25WU%2Bv68m8krrzvfQGKvI%2BjL43XQD7mJMHwnT8KG2hAXClVDOr6dyYyWA4%2BfRH6cA%2BnHSgldpqBWtdwZqnOEjO6DHxh7Ju%2FaqlzB4F3rFsBfOryxLglBJCejRfUuweIKGy2lGUDKbo5RCd3ce2cf0ybwjqwgiTLmsFet1E4RG%2FCvajHPc39yTt%2FYvGKs8kXkH1HkUvzbkkq73dIulGRzNDuNhDl5gQnYkVAT7OI48L0MrFdpcECiqlCeYs9XG0I3RZsrtR9RKSTFKQkuTJ%2F731AQj10lddcL6EKd4jViJJEgA55N%2BsoU7OyMYH4hvCikSyF9XLgpAEW217LrZbmQ4c21uVsfa8M8F8edx9K88wzJWMvgY6pgEJLUW9Nz%2BnJwS7AWmNWq2zpRFVYsJ5Qilk3fDR9RE%2F4Vvv83Vd%2BpcqWpfT1ozo1TcvHQDBJtxh%2F0gCEJbGEmnghvhyZbBm7IAXpCaOe6rq6dYxiVbHfaMlpoXpD5k%2BUYYHhUmeNSbFnOAqRiHFoxt8AxyTotdttdApyxAShmwjjxZpi20NoPdZaWikdDykhcS6UQJCKWFZjt%2F1SuP46nbOWcpB98Gl&X-Amz-Signature=884cd1ad67216c36ed96f30fe51526ccf31f6759222d27ac1ca40ddbd6091086&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
