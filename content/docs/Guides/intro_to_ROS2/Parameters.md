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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYNPHKW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC1mEpWWQO0i5Cn59%2BeF936qRJbBTyunYhwO82w9ve1EgIhAOELcok1gXuuUziDEvT%2BN%2Foz5u8%2BjgGHqfTEvlgPr2U5KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpZ3%2B2AzDL1Vhz6mMq3APpNHTc9L5hQ8%2FAWVLwgP0sLJvsG7LDX5onSW1We8zMzK9Hu4ZyNKZbz%2BBIEbOnhs694Q5V6UcX7Bv0e2KpIjkPnTyDJeQpaAKmtSVlp2hkztuIFZPmCQerY%2FGK9Xj0MgldeSoNoUUKxF7j866wM7h7TWI7vfzw36SrRISOdmYKeoVe2fsYR3Hn4fClPq17qX7oSMoOdg1IiBpOIh%2BD51wrr4trq%2FENrerXrtwM4GMkEi%2BjnHIa6vn8KRairhJRUxwj%2FkGe5fdeHxjyQr8JgWNlBh8I2fIqSURdjkkO9cTD%2FHDBdr%2FN8zWBNNGqYCW5x9VKMXv5thDYfiqEa3kJdmAwfHsGMy5C7BECKdzL%2FUTr4AzuJNDfi8BZUtaEuu65M11ZIzXWWnm6cEjyEDV3OyJaiQgYnJG5r1MYpydjII86DiUFhOizxTay3p6Fxp%2BRGL%2BuSNbZWg6YI9jpK1qtj1vL6ML3y6iKEpan96XxNnCkycC%2FiQ3eZisn3yup19oWjpC7OTevOHtyXKUPr07vLLeLeM%2BipVpYQXrd7JiavFrTY4Ki0rfgEIWGzF2RmG8hns3fuobOk8yCUmq%2BrhR3xkpjDNU8OPGNvBEylWQaGZ0nQQu8bA0JWBonp7nMzzCUsIW%2BBjqkAVjCqTF3%2B6XAy1AKpq2uckqSIlk2%2BrF2eyIAiHjv6n32AjNj7DwTdvbTCGdh7PhWOENrmx9T4O5ny2iIjZ4IhZVghrn6m3SE03hx6dtiP%2BI2qI66pAOsDeY1dkfM1CPusf0CRl4uvB107oDirX1YdbSZVkxR6fiLkwloWwfAAQy45ucexKGtfR1y389GWSL5GuMZWTIe8RKEAaKG5XwrRbxSTSj6&X-Amz-Signature=7a2a2ba1962b835386c3586780f5ee27834ff2365990e23543e6f69531671907&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
