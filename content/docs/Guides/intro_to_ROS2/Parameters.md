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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEG3OCB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC6tBttl1sJG70OUvWOVyuuii8qokeFZH278RlAHd2bbQIhAMZ9k%2F87UpICnzBJIG8B2AXVwQedvB1jqHB0k0PUSjGiKv8DCFEQABoMNjM3NDIzMTgzODA1Igz3SWSNnLtbvF1GYxAq3ANPKYPBWPvvz5%2FnT16Uf%2BpihmByxPaW6oNHC5GzKwxbRJqK6D4u1NeAm%2FBgFtqLbI9DpYoFmjWfNS2OBFrC%2FY%2BC1QQkl%2BeBbt5bM2ns4FvAPutRU%2FglwU1DFUBFybmHQtLA%2FrGba2sMFtN9H98ygmWR1fHrjZdWDLapn251u%2FvJJGLoM8llpZicLfMUX6ajDK52P9MwF8cDZUu0zvDz4Xw0%2F98Rul0OqZT71El%2FPAWHJoknSIUqefG5IEvMNHpFNsStg2x5X5yXkr9qS4T4eVc6GB6R2UAN1Lz1gZKlRBLyZDI6JdmCYtFGgNZlYMBxe1whFrrknvZoRQA4pnyeKzWH8kIjbGdFAQYv7nBfE4YeRJYL0iHBRplw%2Fv%2FBx82rTbL0yN7CwY9ndbBD%2BWMwxkDjOy4QOCGZv9%2FfFjAPbGIXcXZ54WNaPXJ2ukbjA2Hif9J7vJoM6CUSVJ1VxfdMmuRlAO%2BmMv1jctG%2BKF2Wn4nSosI3sSjq8bauDTgbHnjWUGi2P%2B8RxrABPZwyap10HLgF1%2FNlJ%2FL7P5p%2BhiyPHgzY7Ow0KtjOT3G3EHv6lzuu%2BAB%2B6%2FZ2jndrants5CP3vs7eXCvVXLOlMvD1drHva5Vlq953k09fgWCjwuWZTjDMvPm9BjqkAcbNvFNgPzjZ0%2FPOsMpGs5UbTL2IAqpkyglSpHHcXRDT%2BthVv%2BZoDoSi2mtYDHae2AKbEdYwCsm%2FYLSNnip%2FWMyGAp75sX4z5ALR4Mgg8bQb7Df8uWbxQlSC1PjWTIlKslXTF8%2FaAZ4z%2BgmAEBPv%2F82boWN%2F9dqeXnhAX0u%2BTO7PqoFhcUPRluRB%2BC4uVqkdKx3OMb%2Bb4SPoL4FyBVgX3Uyx84jg&X-Amz-Signature=00e1f1cbffeb76bd7aca7e5e91273c47d0d14410367a80ccf80f8a75d657031e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
