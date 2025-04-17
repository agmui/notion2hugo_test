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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKVASEY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKO7jauCJAg5UKUjt4naSit6eDvbD7ZUb4%2BRmUbAiZLgIhAJTZi5Px3yZou7H5LthurCqS09WH9geq8lkPEvJwFXkwKv8DCFsQABoMNjM3NDIzMTgzODA1IgxmDf58%2FaIykgya7dsq3AMSrKcW6KynGleBFRGZkVvUZxc7ZTpu%2FSToHtxnFQYOhGQEeiso2QF3BLcgEWTHRQPKKVlDSsulQKcFsZZ9FpkBg54LGzkHPZ8618ctqwNKbPE2%2FRJ2WInYYVwQcveSYw3ujWvYWbrvV5LuRM83tqNeqfultwRZfgjYCYYxCndMSmAhW0GnVqbBe4NTZA47hSalS46ghmNBbitPgvRnL%2F5xtKLvtz6rtR1ARw7ujRa6KfVFlPBZg7hLUbY4XK1GpXtu8A%2B4LqJNnAZBhnRJuqRpHsFOprc3axOSM9rNR31GUM5Jj5Hf9079TJVRAQQui0QzgxZhh5KMlUCvpwDa5%2BFwg1MSeUIVYFrIzXS2DUfxt4ZuU7v8Oxz8bqQOyP47MZVSkht9qoUdFgBR3gzx9DOlDJO%2FdrPEllPMkDsHNR5aZPyCWDhkINpmBjjeg%2BAJAkMfL5Ljodt2KeltDfhEVtm%2B2kLyCsoj4FtiSrSQeF2ogFMqWa9psq6f9SNQzWMzmlppSRkWyyOTn3UAL13zwpDvLsTlPg3AQh8Us4CsIysap98uzwO9AdHFAA67CqccFwuHHZ%2FhdKmwnFwj31rNnhp3LKVlp0Vu%2FlNgeGi1R5%2BjGDf3EFE0zjuk90yszjCdlYPABjqkAfuIxFYnhoVzq8BYACdjvEXsb3iy5txiSE0XJs1gnHN29jNsWvWQkwRUH7B1XFGkctkztSYyFmdTM2hY2OMbaN45eEmsUQ5lKy9RoUQKwokXucmV5kDsGbLgqX6KgNzaqseEgQdDonA4Ibtr6qsFpoHALyQyCChldu%2FyN7ozEM1v2wsbRyt%2FI%2FORgIT5BGDAnRrduGVEGA8wPPJaLSTfuu5RZppC&X-Amz-Signature=cd7a49159b4bbd9de9f57010b05c74d0d809db8043996b43622873b3bfc48460&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
