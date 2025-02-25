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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W42IN4GN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIAW2IU6mboYVJbUmG2fxd6y8IhXpMAXpUW0jPpw0sp%2FtAiEAo2YkJfFdXdP7MjPWGNF0aV5u9xJvgmMYVylk3PxqhHgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDuLnkcz%2B%2FY40u8lzSrcA6SJw2uxgfbqRHaEE0q8yNjT0geeSCwye5CNQTyRCHOEZYI7Eai%2BZcohux7HGRNeo2DyaZNsWr4Wy1%2FFQqAz%2F9OJtyWNPKI510ti5Z2UOEORS4S6K1tCc4O8cYeAWSjLK6FQcLUvq52Bc7aWaSiV1LmjjcuZJ2zy1kMLUzJKyt%2BNQWc1X%2BrPV5wIOxD8w49KA3KoPdNf5YLUKIRSJ8HCAOhD0BE%2FNI%2ByuVynM4YGzLWxlfot8DZ4Ctvv10nATC3mH8Jovw%2FmWNv4NHE4Zgo0rt%2Ft2Nq9bTEGZImj6XiTzSD465tPk0M3%2FGXDHw5bGjrhYn%2BfHL9dMSPhFfvN0HtIkedBGY0%2BOoTYOF7ZumhHQKwU%2FT3Dzkb8ullivgpHksrRGpFVmTszME2frdTT1PLSlRC%2FG%2BRPDmfNFbICfPIsJdp1O%2B6JFsEIOaAde6y5kCovB50WZMqSEwFA6J%2F%2FbINQz1SOKsXN%2FvC0Lvm8XzzJI22y94P%2F9jW3JFZ%2BQd7085uBgPVK%2B4RqVQraGOcdlKP2t%2BiFC87zJBE%2BNuBw2qZlo2aXicqcC59rV6mu9kXsfyDo2bkbAqwEzlrENDIiuJiPVnt54UhUIq2HsEO7cnjSjvhgn2zh0MOrfqw14rwXMKmW970GOqUBylErW0pd7gRQ%2BqVTOL%2FdWy7%2F0zNjnE8UmuiliZ6egfk%2FAqn35652SMihQbZczVH7ZLipT58liHJ7VqYzbx8nldJRc3qCnAQaAvvpydLPLQdMflPZ1b28aEpBDKY1iMZjHBf478V%2FRorD28XHJhdkNyVixBKP0O4OcZTD76Ffn2ti3NTNJA36FZZop6rCuzFdEeY%2Fcjt3CatrQKavpbRmfMg3Bg2I&X-Amz-Signature=2e81f32d77ab47bdd130eb433e6f1d567b2e8630d5c99c285ceeb3258d82db3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
