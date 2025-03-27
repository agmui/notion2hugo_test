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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJXCGB5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9lN2KBprGCG4oY89ph%2BZ5gsvHmpOMXFUEMwh4RldjPAiAjDZ6WQ8QmZefGOQl8fFh5usLJ1HdA0hlWk%2FxGGyUTzCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMuozUdR6AKgsno4erKtwDtyICi8DD7vHuyZdQ0xiESai6O90mDaR%2FlXQZPP%2B41exvZKNJgqg3Vo3s3%2FuHZt4K0rHNHwPL%2FnXnKLzTZzTcWfCK45tztKOTbMzuRp%2FhGcyb37VbCdKlpKF34At2dxXAbRGffyITOaECpWWb840wc95vmJIrgWn%2BpDKvqQqQY5VFkqc7GFfhPjfRlNRiYQi%2Fb%2B88FgVMiEWGdba9xlty3E3iZhnEsnjw%2BgmEXvEnZSEHjI8oSYHxO9gwxWfw%2BPPpnChYFp9I4IoMs52AA9mriL23ZO%2BUCGAj7bbCpo7Oq1BFDCxAC8UBHAAT8Jeqay%2FDe0djzOuEEI5SaTJ674OoIx70bndbAgim%2BwjebsukNOj23ZZdQYJaBfw%2FLfwesnUaxVEWSlMyza2xlFQani9cuIQdlAcFV7YfsGEFsrYffQss5qYv85hliTYazNyrpONND8v79fANmJngOzOYyivAb6wsePpe1%2B6kqTNTzGDqKpB8ol4dxSgCzD%2Bo8zZaBo%2Bfc4741RVZ8OauFf0QkXr0ocii3UaRYeD9DPXePf8YiYEhQYKl1jhwQl5Iau8PgqjSIt2IO5TwrHNO4PFfYzroeN2E48BdaK8GEuvPRaRLfNw5sbK%2BkhG7mfm8Rd4w%2F7CVvwY6pgHRzpZgvaorOCqfuQutbfGFyxnH25OBPcdqFFKyrk4I9RUd9dHMaCVgenKbe%2BfKN4xhbgXhrVHKjhUgq8%2Bc5ufTTOs0D9pwaEKGzNPwSJn6v8OFEBkU%2BkDN8cvf3DXHIWXQ9CuKAFvw%2BaVbVUrNNtt0%2FC0Cbk02GvsPpdjMcceDSD9m%2BfZ%2FGKyNnpcWyvW4n9rh2dbagCYvI%2FkX1ulNpYVwSDGAHQ3D&X-Amz-Signature=b4d926464ec1d33143b477f250d5862ea20acdeff81a68d8b70a50585aa30c64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
