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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7KIIH3C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDfoC4oArXwinQ%2F2VBjm05954VhSIOxt5kWD2%2FHoM%2FeyAiEAm9egg7%2BqamGOVIhVG88qAqy7uAVT1sdvGQ19QOji4BkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfz%2BibNg%2FiBt%2FkiZCrcA1Q6%2FuugCTNiS3kN9DLWYgsuGkuopXh4WGB9z83aaavuEwtCTcPx9f4Of4tc7VpzH6iH0FZTRDqlYTdxboyvQBPweRBpXLqe2IPnTfttIpBqRN2CPET7liqPgd2yo6rNhC6dGsMuPKxZUHhBHTrWbQrvUr25WRjkjT6kWq33fY5hQm%2BwcUta%2Bu35WhB3%2F7yIz7pfbWGJNYzw0l48xwvyLAelLYieU3sa%2B3Bfulvlt8pgmN4p%2BOLVKdvh1Y4mPo2LitUSzK6aKcc1WQfa5eIVvWFvQxhIJ2DjqkNSInaw8OxKBe2misQvf3XziC71xUt7xN2FTwHAFqkcZY3N%2B7lbfVsOpsjvP31avdWX1znCTtHZ0m130%2FFCAgzwzVQVSSrtLHfJnRNFmHVC5VHMmY%2BgRB5EmvEjl1XYnEP%2FKFmRPiURq7ZspbhZER94HcW0MO0QVXI7AI3P2v1pZREjPMEmipMYfxuNyOM69hpVK%2BmZ7ZVD7Omd%2BZT5h77Ht0mqlzvywIx3jQk5rFPayqxmN0DjPOWMWxz4y95UpUG24zsURJtgsTcEzno9NQUM%2Bz47X099FITKXSBQcm7UEhNfjziTLGhhDq9acRT3p8A5mJyK7NNmyMSZPRo2FXvEgszIMLepsb8GOqUBeGzvFyAJLZjbS1RXK%2BeLnendptHhqGk6kDyQkx4hDhs3eg%2Bfl1hD0J1jK6UqMfXi7e8PmxwS%2FXFwSX%2BlVh%2Fli2CClP5qi1EwP11d6oXH11kq9UogAIkkZvRStKD23aOAMfYL7w3H0QdDmh1VCggkPTOV3i2gLF%2F7tQEuIaJL4JbkRAIEcrSYoHE0fEHwayl%2BE8KTsu17WQA0zdtOe8hlqOjbEljC&X-Amz-Signature=bbba715a7ffde9f323fb69f65fec81fb8983407a55bb341eabe7d3fa973e9e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
