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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWIHBFW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDooR6%2FtL2RV7vVbBMTzMd8NKE%2BeHXAaWU%2BMpXSf%2Fd7XAiAEwMMKA%2Fu22LRL1i1NXePTEP1wnGtQkPOXcuVMSsBYuCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCRlf3I0qaZrDRkWJKtwDZ5GJ2bXfnGfi5XsKlKQYW0otx%2BCCp9u270Hzg5hwbOY8gOVAfEtDZAZaSkV6TPCILv3Saj9e6%2BeW5k%2B%2B%2F%2BuCZtgFvR4Mob8zszYKjjBOdfJVskFdzOHQk2OQvek0Ii0uylyBJXHeIdhHy60dUM9Atyk6AWKv5W1DSwwTWoiBRjn6wTW1sdPPeS9iZmYd7I9sZiG5h3URlgEiW06Vp%2BjZndGMpxkvCS%2Fe28L8PHo%2F3jLz4c1lScp%2B9uA4DkL2mNYpnh25Bzk1QPxzJF4qTZZQLRsl2ZO5%2Fxdu5VHrii%2FgN6SNrPZWmO0vojMEPoMNESEuD%2F%2F21H9zNWUeJ%2BJDieO0baZ0kdhyKGQkpFHC1omosK%2FtLuQJbKwvmc4wz2nUmTzf7YZMKqMVlePUMAZADB1I6bNo2VGHcQcVz%2BNpr4J0oZ%2B%2B5llN2PublehpBaCtZuLP1Iw3BZW8RvY%2B5zGBRHYqPnR8xlq7DngVzMtls%2BO7mXWCjfh%2BsNDUc2GNFa5cK192kKWJFwNbGk6oMVzt5wREZffI%2BAVTz15GNCO3ZiecNenSQCwr3qA%2FNyOBisZmyGPJ5TjDkB4w8jm1EYm95pw1WwWtH8ICKv9CjpkCdSQ4yrXnTwbtOl3OkRIuDlwwrdmYvgY6pgF8%2FPazGrQi%2BLQWBnZ3FjLL9SJ2bkbkcVNdI0XcPtTINIW23yAcXeJij5YilHqRL2QfghBtrKgnuDp%2BB2EkJBwxEjxcZMJ5YEiWugMieDqMaMyM77yPo8%2BSVz7QzGYKPeBxvRlicR%2FFsT3Fl7FvgsBtyIKF8HDnlvo2ga7saDx%2FtrouQbl18QkbCiJ8mPtp5KnBlwLP9PLId9RVT69iriRVapsPYEac&X-Amz-Signature=4c461bb6d8ef93544e50a2d0b8fc3afec3466b80d48fc89529e465b454c1b78e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
