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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RH5K4MG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIHbwpnLp5Urb2FrEAvIIoZuzA3rhliZbGgY0Nhfk2zK8AiEAsv1RnbsCO1HBFJe%2FPbvC0LTdJs%2BhfCQjd4PAjgZ9BIQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNyMsb5sXm4t2YQPCCrcA1jPiBsF04EU3OcfbdBATLpxf3NE9atAQED5Oxvmw5D7aXgIwpJOsxF0Dq%2Bs1af9ldFGCX6RedwTzCny3VkGYvy%2BcYqpm0FcCNbKOwnmjgwW1TAg4P3U9N6aUMi89BjwIjs3WLwWuh2eRWvEVrW99IUkwJm3vCxlovzIMoZqGjbploU30fere6Hd5gN%2BNGH%2BC%2BQE6Wy3Qo9u8taz6RvQUQ99lRsH%2F7zqktueKxtdEyYDFGE2aXGZ121yiZa4rNu6OagM3QYfiBh3btE0ifR6jX0nkA603Tbz1%2B%2BKg5RCxZFHMUYFd6V78MJhFdQBNaXOy2zQXv8eQ%2BaVXn4Wa%2BojIzObKyapUyTOeRW%2FfqRrKnbQS1HjOhXsBXV1cVVr1r1CjjmWKxNGSUtWQ5TPkfARhIuiKxYmiAwkighwiS5coYKcT1Lsq3%2FbViy2crGCS8f20%2FTsncjN47ZyFCwTyXv50NiKT8jB106OR1Ks5Q9RJ3qVxgDk48tUDG4J5KZmBAeOcdk%2BVxSSDm%2BMelyTR6mItJBh46YsipD9e5yGlPMfY2kJ9e2QEJKvtmgbEs2wYTom5PSbuOgumiKuTMhu75XyJ5daKdcP06C3sDN1T7v95uIYZXDZYq0zvOZboFyvMIDfnL8GOqUBkVMb6QoK1ToUhB372LKDtHIiYE1FjXGMP1hLf9ozHmWpN6jx52ydtKCYj5DVJv8uQFH%2Bu%2B5fII8VyURvj2cH%2B9PRQz3%2FHO6Rxl1WJRVE70WPyC7b44Rc%2B675rY%2BORRBhNWaPOzlYZgxiwpBMbZ%2FiFy1uC0BiTHaaQbtwNzwh%2FYbypz%2FzecO7nYbxl%2FI%2FgAOgfcX%2B2%2Fhv8FNYdS8PGkrRMzDY0gJZ&X-Amz-Signature=39f3d9b9de5427e0f5c7ed937954eb06a7c59f44a81066cc7ec395f20cf4451e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
