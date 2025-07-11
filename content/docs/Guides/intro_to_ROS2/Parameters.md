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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ONEKDH2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2jlenOYN1C8OGxTr5TBRoIrwBejrmFgzQOE3g46y2lQIhAKz%2F18xwfjbeL23GxZyH%2BFRDNKjQ5cbE4eB61PvcZbi6KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8SnreAil5hLaFg4Yq3ANkFpfzhryej0kf6gLnGAMQ6g2T%2FIqXLYu%2BuXZhoH%2FKKq0yBD61B0EG3UvZN5fvgB9OdV6ACoS6KrntPq5Od3HJhiiBfmZhdBcfcW4i4QGXGCTJK8fsJ59svf2Lb8qkmhMyz2oFLjyQ7dH5MNh39o8ATturvpMDNWYi1XPpqc%2B90W7Q9fFqzwK%2Fp5HB1eIhK6DfADmvLFcjz1naN9lcEnhReCrGitis%2FJfVraiCvawKikAKBsspT778SQRsnFfhyXS5YiyUvhk8sjR6HqqUALPbASe0LcnEQZnmkz1%2FiVYpsp%2BJ4Y8RoGbOKfBXuTr0pWwFsmlrKpWCg%2Fzh7nLKJjlw4X0IosP%2BS3UpyY6%2BiddtqUqMUrAubBSyN8SIXvJx2RBMbJMKvfkBIBLfDMjr3WNI8waAOvq9c4bX8dbif3aDJWfOu9%2B%2BhspxoypzEGNCDb%2BUgwXCbIj6d98iCAoZFG4SntnrijraGWImFlAmsg%2F52eE17DA8n%2FZjEek8umvKw1RRAvEJsHgKpEJiZEAYDg7xBdDfSkApAxECwGCT3%2F41GzNsudLQdkjvRWSLZhFbyfgh3iMNpw24TwH5EwMVXKgunzW4IZmMfeY%2BOkNOuyB7rZ9a4w%2Bj9RG%2BjcILSDC108TDBjqkASkro4AMvBbgdGvGqUgP7QnUIMsTvUGlbzBGxXwpHgWM%2FHDc9%2BagJ32fyxLCa4Dl8%2BJP4u89Comw9K2EIjfqC3iB4Nk6XHY4hFPPP6DxRijkQc0PqS6O6Kfzw3DDW%2BfLzvZKVg8HJRyiTERFL4O6ZcAqfQwyz84qHQtFL2%2FsIFLmbF9cSF9CuM%2Bbqs7XXJmMlXoiKWaIyVp4boZiH%2BXDic8qFfWk&X-Amz-Signature=1559b6ee2638879b19e4d02a0a066755baba13e91c1ecdd5f10f3b2e747e6b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
