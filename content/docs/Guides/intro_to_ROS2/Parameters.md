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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVGWHQE%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgMtxx9E7vdW2w%2FeN%2BOb82lwuh9w8sA2IyMEHCHn%2FnFQIhAKYZXMcwtljnmZloJAuyS8QfibJ6brVgEMFw7YVA0zNOKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFe%2FwiC%2BUNY%2Bg3w7Uq3ANmNLb8FLbBEjhIEz7pVegYMy7JR8yP9ki5KSvAn9DRwf7Qgc8xQtvokNw1qI5E%2F16tGIsAq0J1h2ZbtqgGjnwq6aUr9ICfrhZtrOjgoxxY5nh1VN%2Fkw1ckDoLOmT1MGU5LReF0AT7ixg%2Ff0cfbhEpzKUQ%2BcxFtLlKpdG4O8VEoo8XIrJnfZiVM3jWPrXvJrIizAwz5tSw7jlN6BJ8jgcmzhZFcmm6qS8mlkYpKG4WSa%2FbvqVqIzj57N24zIepnIznwN%2FYFNJv2ywdOGOB46jHJ0Zgzsvd2TIzsAbGSr3aM2aadUM8c3o0FhMl3L1nfOP5KMEtQkOWdui11OtJyYp1J2mRjRoEAq5vIum3qfptaKSG63vVj8rSVMtQqZnTZfL0Y1NMSjKO0q66AZElUH0p52qwptSvqidrR%2FMbMDGzIoJWfBoOQCCdOFa4wbg4RF0bRxCYrGVxN7PHyWfBz5zRVzyHXPcY3JUR3%2FGke21Q49CRqhKIUCtuHDgU4dInrnrIGV3yW23x9qto9b86fKkdfkCdIxuZBvYCu5p37Bj4jf2OdjtsoieKeaqkFaFdaGFlJS1rYisgkvwhlMrvdFZ0JZA55Qd0wnPAtV%2FvgP%2BlpmXHfCH5JPnNLta4lyDDu9e%2FDBjqkAc0HbnlTikeIHAb%2FLx0BBEpYvDb2zAcN2cmiS94EBj4BuJ8Ky1iWaGMuzcN4fAa9gLBFRrpDYIne5b3cnDh2xOX9AYXtScOUeWS7tMZMv1M%2BNejqCHgSHJf6yRenVqipbwZUYiil3Y9eToG%2FZVMJFmztd6BDWJHY7fpWISVNJTUt87tdtSs4FUHcwu%2F0rbVG73n2QkZYygnHtGmo0tRgDIECv06I&X-Amz-Signature=a07219b2ad539e9a082a2d99644b00947150969e50c8c9d1f920d6243b4bdbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
