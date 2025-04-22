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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKL34XW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDgCn1e5nCMvhSm5rIcsCLMKsEyjY6%2BWQo3sw%2FNl6LqwAiAW6zYtLv5t5Ly6GqSqBi3lfbHZJeaPbkVQn0zdbuHMDyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHTUaJjegzK6rf%2B6KtwDftlYWGFdCxdR4kTK5df%2BI%2FtmmExcE%2FvF9OWi9xB4fvz2gouIqFpN3D%2FdNVVyJBpY%2FYREz3rysJrqE0gYUTBYHkyYaMm5f9ZH8vSc15g4blVH8OA5NSad4H8riFTFYITblHUnmga%2B7eTIKk%2FEi5k6F7FoVQBg2m3B4BY70ltSwgDob3a4H83064B1HDoDVjoF7zEuF%2FiZKOKKu7EYiXcdx%2BG3XVaeRTntL2xeRcU0HFrEf7BJ5s9vqhnojjTQB38HH7dJpLQvi0aa%2FQNUKgHkC3s82agB8W%2FBkZ0U6tr9pzLzpXbytp%2BoU6ifG%2F0yy0ydg5nwFV1dTYlLy%2FXhYTuDfzmVS%2BtLyKlq4csSNEtBeQikCQ08F9%2BtimrabGNF5nIZvHrvyJRGkyB9Jay%2FFTPExJYOKjquMkLCgIvWYmqS2j1zWmgWaZwbmwRp9W5JmmodKbHeZgJUnsZTkjyD8lfh5orFYqT7%2BzPz4APnUNpX63Zah1CbRPMzqyfy5ge3cxGieaqMpTxVVTZsHy%2FCIwjAnhmpmiZi1NvbSAp0142Pc3taPLK6xlPpV3aMhalO5GFpe0hmZLp%2B0BVdADnXvKbdaHiU7sf%2FjTddnlReY5Qtbnh1RHSwoxkukVod5BAw%2FNSfwAY6pgE1Cjx%2BUZyfv40q0gi%2F%2BM6wVCHSySfaMIi3Uxtt9J3YzHKXL6mAIuUDIIzXeZft3xPsZnYideuH5nHuZMG7SI3K%2Fh1a4sA13anSnKcAw5zFvMg%2BvSdVsDW1%2FXFDQr08p65eOG2WU%2FE7ywKZaGN%2Feo%2BApkoZsaIBBchghxyTQCEVwJgGjX9de9KprYqTWUl62kGHVq99NRWNZYU%2FQIIsVxZrswFsgndd&X-Amz-Signature=624d9dc4f5250f192f254f0612624c0d054f9c5c146109b305fa6aa1e93ffbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
