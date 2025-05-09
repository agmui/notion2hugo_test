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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZHLE6J6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzMqJwRf5UnOYnleSnj2uKlM3YFDL%2F451GI45NFElK7AiBUfHYM1%2F%2B6GBxTVGuXlwl5ZzBHfWLSELtFD2KXz8Z6yyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsPvN%2BejMNUN3bYzdKtwD4jB%2F8Qz4I9IvXYB1miqW1aO1h9q5GooezYVDoNUo8S63AvBKImTX%2BYFJnWEoYwcsRqzbkVgVe4%2FVXjj%2Ft4bSjqEWDHqa8lzESqevYagpU%2BAUAyAEuqMR989lXdbcdDijfK0xWQcPra%2FiHFeSMZ4echdT2Arg0%2BWB8bi%2Fe7N9DEyZA4W0av1b11SqDfb73ojqO6p23xurYuT77gZSm5W9K23qpFZ41u6chyBfHCHg70ZDROUdeGi3WvVLRabnDcwwvvkPtIiR%2BKETONNDASYcgjD7CW2mV%2FdVNITiXi6TCOa4yIx7S85Bcvygqgj%2F7qe%2F0ybFFAfCWzZcKzUOljNqybb5IU7XdMZfj%2Ba95yuABsI1Cz3OwF%2FCM8qNcqVmv6Z4PYE72FEIAtJBb2rzysTz6KctQqPfmFuYh5vlEyHl5jwetgpBruDbzZcuJcPHEUjh6HOHFhDD3Gb3TdBFKjfTGWNLO8F%2B5J7e8uVxeOd121B8i4C%2BU8vMsx%2FPX%2B1gGSq6IX%2Ftdn3NJfW3BM3cbiejK0DrF%2FMkl%2FwxySIqZ5VeflOlp37OcgBbD%2FTcG%2F7%2B6CCHb7mxR8EudAGCVBQbnAe7wcaaCHw1TpLLm%2BkY6FlmMVpE7bKpZozpEkye5MEwyYf4wAY6pgFs0wB%2F6J0dFbrFZBGqwTj4xvE3Cp8bwoH4UZT%2FFI%2Bl5aW9bnoawWiedQUm4M3Ki53o9XmnNXQCtwfoaCmlAiwh0lS4bZSv9wzVhhq4p1qZN9cqMoQbNdqoEGH0V2adXdnbbS1eI0aR3qHidLQurrcNQRR%2BuC9WyBuaYRX7J8JRGPbbwUeMnJ%2BC0rd5OeKw2Lb0q9HuyMfLtqNFsMBruiWyjf3T7%2FBe&X-Amz-Signature=41fe02cb3c6f9cc52b03053b66dabbbdacff7d3751c5fcd16261f5ebe68d4446&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
