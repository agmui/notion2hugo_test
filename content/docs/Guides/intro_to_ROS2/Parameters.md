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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJTO53M%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDdESsXmwf%2BW1ztHzlruT6aZnfD1WUAbqjQnvpItZ5AxQIhAM1gmh9GTivXVUzV2mZH6DAgC%2F4Y6mTZ9ed6FgbAeWLPKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9D2MsdKwL%2FE9FJMEq3ANkyz77c6HVwn7k%2F0iK0ZSo9Wu7Gkhq3qjezhnayVYBx2DxFWKaAmhQ6Z8wnqAAM%2BvPqXZ1wEp4ciHTU30UpsLSVZJfezqXh7SZ66PPnmpAJpZlBvJolXsdhC1FjkMKoQor6BJoi6qelfohGxCisfspqO2TYxodtw6sV2GywW30Xlh0lruVkNr8DB2xmlTHvTiEcFzXH7wrd5Ds6KYwV7NH%2FHHdSnrXOqtjpE5W7qKs7iYzlZEw6YnkfzJB2hZ9LjPa9OvLzFt4RxHblfvtWikTYJjo5nsy44DvkqvIgwEW2vpDHZ%2FSS%2BehY%2F2mg0TtIXPwTxjUcyGiTEwPsRqGMGdQ7LnpGlrjwLfL5IJMxzgI%2BLAO%2Frx%2F%2BEFhEl%2Fwyudp4KjDBbZBRrfVKc3IOKRDBrdlZn67Fn3K5EY9y7HZFATa6aUO6TY7YXEl7vK5uJCxPNSznvGeq8PNS8xLSb8rHYZ0hRjlG1RdhjIyGecxoqWw1%2FlfCHe7UWXAOr2gMXLq0%2BWxwMxp8SowgvimnGKCzPO0Wr2QaT%2B3JX6jqwxhjgDDzmz8QGfuIMQMzinAdkAGirDzeR4clY4O5C97sTFa9%2FhfjqPKOLMokagRa1wWLcPpV9qagGclwdgLxo8hTzDGip3ABjqkAfclw5rUUXUxSDtTT9t7OkT%2FCJIhutyCM1Sv96tVmV0iPb%2B2w8UgZZZp7z1pn4xaIT2%2Bg0NuDJevRGBOhOlM1Dt5%2FqbUsGIyMCWwOn38RYuHk0hFSd%2FecPY%2BgNOjIdRL7prraujx3BrNOtH7t2GQBri0S6zkaFl%2FE%2B%2BVscdndi0x89oi9GRLgByVxmV3vySHWyb%2FrJaHoIkTxBe%2Fg2rg9vJ6sTca&X-Amz-Signature=938cea4e6a34eadcee0435c48125f3f33cf480f5df1ae667d654cd33a04e230d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
