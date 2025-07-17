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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORDF43D%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICAdbh%2BEul9M3805CfcWXOO8wQXX4jcRUxAxHDzzhBEBAiEAw%2BoIXbcdw5iACMA4SEWF7ugQ1Kxj09ltZIzwuz93ibgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCV6LTwIVhScb9cl4CrcA5cib5hcQOE%2FxLwWTG04LvZanZ4k6bNO%2BdrkgpKXbh06pYm%2B37LODozdPyPCdxX1Zyx1DiaqzZWWwFkYkSMKAJ0DV%2BgEbViZM1IrAU9Lw3TPm%2BOgIP2vgZWDJjEJVGC1o0d5VW31JgynoLRKcW8JrlhY1psW2aG2nISjtD9t5oHEYYCxkE%2Fhn%2BKiELq%2FZWecUeEXebdckRiN0sP2o4JP6rgeTkdyUsAxHLWc2g2xQOj0CyrLQvPnxbTj86Lr2y8yI7DMF3bRGDItPVz9jlxgsOzVkl5MINc6YdGQdrrjI6aw%2BW91iWgTImyqxpG2KJ00Hnaldh%2FkDVbg9n1Vat3xQ%2Fd%2F1yoHPQ3og8GD36kzd28arLMku9L71f5sIBRMVr2oQG1sYNuw8iKxgOmSboVIWA2bpcCV2HnYEJyoFVEtwlrgOqMdCUQQTusblJjFRE%2BSD8hIJ9hJXpkBcR%2BSDlCSrGYEA1Nt9dE3pF9yI7lKCgJh6kVUDkZs%2FLTmSbjAZ43D8ZHtQ4%2BogVsblXMYiHQV4rPJUB6YmXIuP4ptfZZzGrjttQllhCSD%2FGCcO60SkLCtileb1RzW%2BI9X2Ukb14wPxA2%2BfR4E0RsbfESka8zRqcXO9gt04SBEatGIAFyOMNXI4cMGOqUB6sAav63CgDWRPwkGfcrOgTtEE%2BexAFg9D9X02lo5OOTUJaJm6AZ6RhaCMnwpzh%2F%2BEaGNehQ2A0BEDw5AF98VBZGEfAI8u1Ro53l5qnUvJS3xP3Q74MpDZM8HQR9mHlExm53Of%2FKjL2173WaZeiKI7ZsQj%2BYPOfKy0rveXHa%2Fbo8zqpPtKTtfG%2B3xqI0teetBwVXnJOhgFnQzjafqmIf8fzfGp1m2&X-Amz-Signature=ead5af2f0fcc9b7e6e0ebd01f6a2373ba970b032cb98406e653ed6e24f5b6108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
