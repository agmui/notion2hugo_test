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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCJJZLJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGg1eckk5kXYMPwy6vmxl%2FVutRpxQjNSYePYTEnrd36QIhAN62%2FUhIEkdMZMXorlm6YX3sWgiriBQNsIcHBclJBBnfKv8DCB8QABoMNjM3NDIzMTgzODA1Igz0dFgHHDOn4stBkpcq3ANBNSdL8%2BV5Vs1d%2B2wIC4tqYJj%2FH7KueVrKMtXqM%2FV0ReFupBN%2BiwG7rtB6F2ByDM4rueL1EcVFV5W%2B%2Brka6PlxVE1LZrU2MSIjXYETOMHi0f%2Bn8iv4DeHfyH4SiD4lTuJpQpD8x0k1%2BLPaSIxY5%2FFj4H4yGjUrWZTWDsw1qWBkRJqhIZknBKb9QSNyqsHMAshmVSjuvEVbQqUEGgojA6MKJWPTGAqmiOV9iKZRyMKYr5StbpkC5%2FZ%2BUj0v%2Bjg4VXloLhTJ6c9vPN05TJ4izFcjPUTXAzo9cLk3F1nQmMptm%2BJ5v3hR4EPtv7JKLNHEcBjhnXvpcK8xXvDVG2kDk%2FHX1fJ2QNKZdnJ3hTtaE75GpfiXjWeUytAi1v6pn9PNwv3K5IaqnGnRqPBg%2FTnu%2Fh%2FvvlTLnhNkKy2K46sGg98K5vCeirLCz9K6TgXTPXN9wuUxntctPmy2YpNURXAbgDU9W64HkiJWf2VbtXXyrlmyvqzKaCx2NbnREgY7TEZLqpe52XWnHLA5EwwuivJhRQBfr2o6dgzMRhlqYv9Mh0dF6OOyanZCGctHj1CzlpkwpXby2dF8Quw6M1bmZpQ8EoVVdbh3mBKruvekpQNsdWmERMichYbPDO9tqOKNUDDRocG%2FBjqkARFF%2FXDT6cYnlQUNKW42%2FBJTnBssxWMKs86LsHXnCm7pJKeR9wLQywKyT27DVzGCuo9aZH06oy6PEASpii6kuSrBDlEIiONVPIEKDjwGMgb8AtQyKbxSBHPhSZedT4Q6DM8pVdKhzw4Rd87TlW6%2Fu%2BCl19rsmET3PS6mlcjWYJ2n4emIaRpME3cMRCxEHaRPjHVO4AF67H8P8yC%2F%2F5Oq1S9qUCe7&X-Amz-Signature=81cc6e3a5f0eb5ae8f6debd7555660e4a9376157cfe79f2dd256cb7a2423a1b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
