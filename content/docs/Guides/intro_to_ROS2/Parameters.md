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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBWXW7N%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvOqrmctn3m8cIt4DUw7KADc0jrlvQSGdDTla8jU1f4AiBsZcluzsecfUhHQV1e6F73%2BU%2B3N7teC4YentfBJk1XPyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPx8ZVHp65HkXu5PnKtwDfD%2B%2BNkCGM9HQ5%2Fh5zD5eEzqUWuK06c2g2C0SF2onDpVKruA4lbnTwqRQfkifyjLB7f5ZaZ2ZmBn%2FtEXrF9u%2FQiiQOsywE2xiDJOOpDe0UCXBaxdIT4f82w6xcPX%2BOFHr9Gr1XtMNtD5SPElXlRcTKnA6%2FCv9tIyC%2BSZZpvJDgubrKb%2BD1XtUgMFhpyHTBXowA26BuKx8O%2BZifoOFD2ykfL2Sm30yv5y8wmHlln1Q4ktFwBg%2FI%2FBnHUc0V3nxv2WcZTYl0uA8c1Me0N9JUyo7Zsj%2FrGg4iI8hZzXi7liIGZAmdPF4MLkzSvYlDF9gmfcXzwHwWuyZ0OmWVMVjRBPnqnzxYYFM2USTjyul9UqoJeKLFHrwBVLD89Gi%2F7XAmZ5mK6f9AY5%2FLFniecKprUDzsZ7eaxJa2lQXI22Cw8MYmV2I%2FAevwtQWR3d4IOWPqZ%2Br9KAOCAnBre7ang0ml%2BUo7CuW1%2Bapcr7flfTBLjikZc1dhNGZldhHeFPAQeuj93LHf4PN5AMjUOOO0AX8%2Bc1tSxNU5dsnaE9DCgYMTAEHnVviR%2FQmrNeQuD2Zh%2BfCBr5CXWptxx7OxbtAqbLxGFeKb5UEDlEHiIJ621YKSOAUJd6axpHUp5MD45vXMnkwyOCuwQY6pgGjfPd28h2lq2QgTPR8JpGhc59OlRMZMMRJT5e8qdfVPtWHh%2B3sPG8xJPoJ%2F%2F7ZmUs0Pzf%2F9qaprJwtaDksvxET%2Bwh3AonepDeGirOm36kZyyxsfY1NJl%2F9QbH7uGo9uDJ9SY3Yi3%2F5fhEdWgdI7PGFyh9xhom1RFnCwBDW4x9EhMt6p7m%2BZGqWy2XcyDZGeML56Xom9yE%2FbhjpBVMx9nq1RuR5Yc%2BB&X-Amz-Signature=07905bbf623233610af06e8c11e0becd9f31139fdb06f5e5fc52a70805fd0c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
