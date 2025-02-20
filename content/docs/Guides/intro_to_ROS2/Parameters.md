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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCK7SWM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRPYVtGoHaeF7MM7KQorVz4QydNYDl4tv9d8Nu%2BdPuiAiEAw3LvUG7St9CYSrTL6b0P%2FjiTSS8Exn5ed5Sdvok0jJYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuCo0Y23BcnERKtdCrcA52ZzQtBG9%2FOsBM58u2L%2FvYj4Hkre6MI6ZxnoC3PxxJCUMpI52G5dIa3kk5mkIMxN%2FKZRqHQnVqZ9pmH5tbNjtxX5I2na%2BlZSSQ1qYvpYxNpiuVaKJxECSmvXTx79b6%2FyhJkVepjPT4soPopkEfKhk%2FpFqGiWFGcE1j9xZTZTNrQGcQHwQIoFlm23qnEWsnWA3aPfC1CXjyVezkRUTYnwBJLk6R%2BHc2uIBzEKC4xkgKEj2EZrZoGEmmiTgBtpMGQrMsQKOqcjCLCroMPXMSuUWT6VmC5naiXhgMkmsuWSmrJwDhg9ss9hI1WYJQS9s%2BqJwEhJ8AeXeTVWqT8R6PbubHY%2BXB9F4xJEUx2xZG1Ps%2FSQzdS7Ymp%2FFgPp5dulpD8mfF%2FH0PIzv5OHyqbfZI%2BXmLCdA%2FroXje5IIyUH68SVlQ8VbgXXXgA%2BvhMYIcoXM0a4bWhe8cRB4nAh0CsdfC4v7nbiKcj3CHbtE%2FR8b0NMYMkQXE4aF%2BuBtLDLWrWI%2FkHsW%2F%2Bea%2BKpzNR6yKkoA7ypaepBrETi6JBKMFnm3Ic1RFQAXWl%2F4r9u0gPi3WTdnYhFd0ZHgOgntvYmFX2xASUxf1lbUVoFEZntLBDF2lMPyXtKs0L4wz6F0dpwBOMIqO3r0GOqUBoYGhnSyxVhKMGSHeEDyPrSx85Uz4KSJwbGYxZnzCu6i0JonRqYhyg7OGd7vSLn5NpwgWFfccWzWF7ECuw9uf2M7KJ2fMnjT1rcUY1hcwDXYBJq2OIRN%2BUZcPLIhy4OUuguCIiIdUJR2%2FOlopFSABTF1srX2BBfk1qHerUG6JJMrX%2FcNqGvcwP6WK3pjsKWv0QbVgAPyY1%2BkobUVtSP8lytRNF6Jw&X-Amz-Signature=876346828b417176abf659eca5d6d9b2e30105f187f6d1fe150417e540ba09ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
