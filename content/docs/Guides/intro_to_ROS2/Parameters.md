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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FAYKUQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGdlZBJD5THpBwMI4LNL%2FOUg7zmBAE%2FmMrr7%2Fe0%2FtIxAIhAI66OFICjf4NkGDnYcwKRwDiu1nLYgYuPXWg%2B4pi9pifKv8DCB4QABoMNjM3NDIzMTgzODA1Igz2wWF7EE6j7yN7K3oq3ANfaXlndrTtXRl7YnUJ5Y6xNSP3YqzmbUmd3EOmIxAVWMSj6cKQ2Y%2B6pluf3%2Bq%2ByeBeQ0BhLRtusgCKru5S1I%2FXxqNXDsqC7gJZ%2BodIUptqztbKRAqkok22R%2B96OES74AHmuKj8YZNEJsZMDl%2Be0LQWgJw7%2BquTAfyRp8R%2FH%2F7H1cEXmxa2bXNuzAm6jVjPJhd05Kqp4mHGlBR7ae7GclqEUQCZFyQlngvClz01Ns1Rbja%2FMMePCgiwwszmEDO3FLk5O2yCJVP1f%2FjpDxnYKGYOVmG6rb45m2vPjQ29EuK8Z8FC5gqDlBWBxbSd1lwc4lJX2%2BnuAHV9fqi9mHsB8PYBhFildNRwwAcR8qAIkH7KAWHntH8%2FSFQxVUm2iAYlBZQn5pl0K0uBW0QNXB8YzibQ6OOFYUtdATx0QCZngyUd9EP671sqn1Qa8AAi1983I690MbdAYOWy0KhCwguTeKbMkACyt6P2oGJFp4HukPzibyVOYe%2B6GekfANAtsM%2Fo7GzCkp0o33GqMOy3INGIOiVMaZ4qrP2%2Bm0R8u5gV3kCOaJ7Jvh3rJZPsR2kF8fdsPfWJ%2FECC2GaP%2BQ16hLueQvBEMe%2FlSK3y1tCW5b%2F%2BEZqwPGoEAiHUiw8vgVmb9DDGgaO%2BBjqkAZhWpInsFvhir0ZvTuRQwKnJeaYBomd1rONo8wJOrEJX%2FQqEdOUKtcSMRCw%2F0YVI2bEYhxqZ%2FderYk2labHD7nEjfjFJttSrXse4pqBTlK2r9TVNpU2O72iIib6nzXV7qSKU%2BrqzPQhzmui%2B3Ji%2B5PoydyPWiDojGlCXet3ulS6mzceZka60%2BVJ45a8EbJQNwG1G3ZqfR20r1qSQyb6fCJgIWZ%2FT&X-Amz-Signature=55d9ca360adb44558df18ce2669b52e2d2b2ae98be216ea6bee63af1bc7ce4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
