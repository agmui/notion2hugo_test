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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VMEXGZP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7q9gYvgueXuzM3GlMy5zxaegwDtaqhMN1T568VJ%2FtAAiEA3qXhp6Ea1CrPlW52MUMWj7%2BVM8J3ETpqAYL41zYF7Dgq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDLrnZSkoFO%2BxF1MIqCrcA%2BtrxEKAAPwRbAQF0G3K63RfRljQADOB3XUMI40LAwCS6WmIi55wI5s6CtN9qeFblOjoUf1ztH84Awxwvv9BpqAY5x61tPcxFYsQk6Lv67yH1kxK1SxlYAlJ%2F5Og58Mo02fr16%2FVhP0y5eSbxiQYPBciLfTGhX%2BavIQt%2BuPQzWrp8YL4WjKkhSoVzZmOu1sqE5AyE%2FPXMdj0B7anozuG%2Flwg%2F6%2B8UrniJW6yORSYrtuAY5XzcRWRflj631u4%2FlFfocYMyNMwLTA0TaweIRRQV63KJxNEl4Y5zAge%2F1wnBIOs8f7sSvnpfwCN8W9IHdm6to4eV5aEfH7ou9VI386jYgQLsT1PDsXzcopEMPluzTfGImvM6uOQ04fMvyne37MR7P5maNR5whYgXEFp55uIu8vX2l7NpxcFBQDoQud4LLMA8s%2FuVJi2CJRylIuy9ccvH25jJ%2Fz8NB%2BX1RSuyig%2FP8HloqGqR1D%2FKxA2xE5DQQNBuhA%2BMaOYBeUAjJpopGq63SgQjfolvr40N3P8F0JaMneqyMGzKO7gE1iYMKYzJuOgt7pY%2BRuEKqpWWYpamz7H3P5FMmx9RpVxIqziRFRjG0Y1BNHbWcLPW0fgxNppcki7yWD8sI%2BjJGFTvC8YMKfszb8GOqUBz0t6lhOUhjfgB9a9OQiHQ60NJmiCZYVtbE5gntM7mU5m2HxTXAUyxCOG2TdeIIeJzStp6jf8b35Bwc6E3uNfYLAI%2FIX2%2BsTcMG5tddHp07cC4Q6xdfVKWv%2Fs61h7PnLElMci%2FnbnJwGYn1gkcVImqzsSm4plWYXgjgTRwhmdQ0nXQqbYimWiUpcWkwggnGadnY2ugY8YZDJneVLzmANBYyUXLEVy&X-Amz-Signature=cd3e83f91e52eaff76e12d2723581a4df1e3f314d1b0e68df996815f254b56ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
