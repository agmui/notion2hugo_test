---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGWPRTB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDdVI8hOUINx2aHzBlrD2lPbANC%2BZ6%2BDk0r12Tq7YYGUgIhAOsgDZiwA%2FG2gYpZUtaX%2FxVGVYjZN585%2BnbpTm74AXNpKv8DCD4QABoMNjM3NDIzMTgzODA1IgzSZczBYEYjxv%2BSoU0q3AOm3NXIOrI4FMiZJEy6jrUK6P8%2B6m0kcI5lKUXN5RkQBElNvtXjgpjNHXf0GnAwwaEUBybYtWO0wAXv0nhnoLaR4J9T2uj3UiUcGOSb%2FlKY%2F3G47ENw4CL7177gMOfXQzksE10Xmh8cvacMZ%2B3IMykNY3WK%2FTTs36VFdOiUsTjvrEcLmgcOIMkoqaGhDTy273KsIhBVtfesPv0i6c7eUOWEebRU%2FxaYt%2Fr%2BX5b380N9ik4LH33%2F31sV%2BOCIskMUFwH5XSKyvxyt3lZKk6IM1gOworSDu6atE3QzcTrOXTlJZNs8l2Cf8pTv8%2FT7tTugs3edKAQmPx%2F4AQLNwKARS%2Fse8GR6AyS8DJAkL1HCcVT3eR9ON4xmw1Pnb0GFce35w1RHS40yG%2F9fXt%2BBCc%2BXJb5Nl1xwFoMy%2FSMg2D6763kjAfXw266kgcH60VlbtPybVHfb5Wk1xY2gYSbi0bJuRvW2DNH0iQzbR3gfraoHR%2B7Gh0SFanzKIMSjMbeqWhiVnxQkHGSK7VlQcYq9LsI5R5S0cBZx3Fvm3qEbhT3Qydb50cQ8WOQXIrPxz%2BHMvSR6RjzivOJgjWz%2Bbuwli9Znb4trc26NWzAsMFLrtVoSTVXzF9fTG8qJ4m9gk3kZ8DDk34u9BjqkAe%2BTDHW0xz%2BgfHWg6APH6X9ZukfMDxA2hV9OqV%2BOKu%2B3by4aTI5%2Fi6HY969ynj%2BCjCQ%2B%2B3iy1%2BrIjU5hCVQer0pmfccv5XWTFL1eLqhcHVlz4zxoqnOfyh7u9En%2FDlzyHtubUd9OHXnnWjfHUvVprO9%2FSvs%2FgqZJqk45UELvJTCa6jhwbELya8iWiH5DyPWfWOrAT5vAgfwwAZ2NNL3kBId2S8Ju&X-Amz-Signature=6d194a9eaef7e31bbdb254461aa7bc6397835566fd8f8cfcc177e3b3849134b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
