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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JZHRG7B%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCHq0aZZ9MUYXFdQ%2F8jh8bSC1JY82cnGGR3N9U22jVy6AIhAIqm7jvn%2FZeXaoX5MRjypKMDXeMoshFiIC5o5aatF0JJKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6KdDm3%2FVNXouXHkUq3AOA9yduJSksyH%2FhSEi1tcTWM6RrzXlsrkmrOMWzOQXMwQ0HNIKgscNiii6QWd95SH5txjHp4DX3XvVIeKvfBzfIwbsUGR4iXNuoNtDCuNBdYN5tfUwUj%2BoI5yGGh1pa9ZprqeJqEv3goAks2bdN9%2BzZ2a89BdfuN5JxE9k9R%2FjwAs9YZz8YcQOPbfHGgXWAy3A78dMvvaQHYtE63I3mSGf5e8phyTgpKbeg5x%2FIH7HLelwYLc29rJHTmY4%2FrzjCqIVC0p9XxL8S%2BBrI8pKamtp2KAubDao0Gjd4teF5sHwFU9TM9KSvanDTXgAILSzJ%2Bq4cZgx0d37gAEC4PC%2FEALuZxsfDFFv8fGKS8e5fqjpG%2Fw34cfrH95Gx0NDlN%2BYKzqcamsVEfQQLU603P6m6MCfMMaiIGy7EjGb5IJI5c85TUofKqqw7bCuwNwInITjN%2Bx661qRTbwNb4EcjDAwenLHSd%2FFiN5YwPb8h9nVh5f%2BJr8aZkTwKFQsPi8uIgBzjG%2FBAn6BZmlgD4I4WMt%2Fkz1vU55yIAaogIK7O08tp2r6b86jUR3asa90iUhz0gWpCAbU9W0B%2BDalBXo4I8Au4QXrdFVQ1nlV44uD5mE%2Bb7xzs5svT4par8fh%2BlhlikjCriKnUBjqkAUXe8yPUFAzAVKuWSYEpHd1NocZzzmDIWuou%2Fn3sVrEX6S%2BvHOsPPoFiL7ysyWUw88KG36WaU3ME9xO2wEVHLRhOUqTsSFfbuGvJvV1lmkCxG%2FK2v4JYMuLpIwD4ZI%2BbE08GjknO4UkSfgHpmYQBz2ThQAWdZRcWnZaVwtjiU29XnA6pGXxB%2Fd23jmAxQVRbLxE8jGbBO4GJXbiRS3%2F75dxc3avg&X-Amz-Signature=b0da1cf734341bd2e7dd56adde8fe727bf3ae04c511a4dbd237176db06aaa250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
