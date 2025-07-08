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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG55X77S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsHkexxz61cUa5g3mhB4HaJ3A9GKE9ukjb4l3KrkiFQAiAQezHHAtLXVRkHIvGnO9GCI%2B6QoAM%2BSxr1POMg4zxV5SqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FAJR04JBHBWnwRJUKtwDOZnXAday6ii3oVKbRrc8mFw3uJiHh7ZPHuI%2BavQQkJj7NgYsFrni%2Fu1wvMHXzMc1td7Uz5sLy3x5lRCU3m41thyixGn2w2j86oX9j%2B7kfHJ%2Bj303VO8mnWWWeEPsOYiLyzWi17k3HFDUhcy60cRxtJgArxNB1U8SHSx9x2gmiNZ9A9OM4sovP5nqzM0v%2Bd36qq5X8PP0YQ%2FXJ6ghx%2B00Tk%2BSvsZ%2BLgTiDop7drJDf45ihqT1AFRwxKGPg0EK2kX0ezPppVemjfsKUFNMQdfKHUc9Enaz2FC8a72813Zn9oJGvISKPoU6bv3OCY6anxXxAtKit7hPcsVs6mnpyXtjpj7%2BnECBI%2BBwW73AZ6vvryFLyOj6WZA7Yqc7b3e9GM6yZ7tTYrwmiuLNY0ccVpyZFb0dlL8SfQ%2BaxyR%2Bd4XzJYjBV4iWeYrTcUHV8w5FOt2hVmPtQ7y3%2FqyBjPkaI48v1ErNdDt5iHr9DjU2ZsndgoRd1OL5bWYhwaYz4LCDm70PKwPluJWMWyw4I7iUZQKck5F7lK9HxsLuyN4mrvLc2LGHpmfLtUDV4mCgChneX%2FMW5qlocXt2QCNcGBqQJfc9xplaYyPfXVhO6PUWXCEX%2B92unZAZA2v37HEy9Qkw8ZSzwwY6pgEM62kHVRV%2FihCZfChDFF59TXrh1Eo2aE2C2VOygstmmOkcPsvGEJovCKfNjgHyAZfouivo97JRbh72XVgfl2jkuCfbKTqq5UdUcPBQNhsChUPzeW3i9xZfhXC%2BNVVf%2BUD3PBUtPyjoykQwq7o8BY06ZTxTFiqabArQWEXZniIGQgJxU%2FwHaIR%2FXVXIHWxNhlsR2vmdRpEI5h3haNb4FN%2FCtFQxaeht&X-Amz-Signature=464e2af569bebf9fd7b791c428a13dbcc958e81a0e1ada7cdbac0b3f74ac4d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
