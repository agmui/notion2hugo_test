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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHG66CS4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICYL1jQnDl5hWdBkUW89P0Ck0%2B7KnDnu2pDazF1%2F0aZ0AiA2Z3OaKZXQv4VoooIIjAUli7vf8QV%2F5l3mOIYu8wAtdyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqYX5wwfPa%2B1mzKZOKtwDJgatUiZai99t4Hrj2YAA2i9kwueLjh63qYxfeKrXlHlOlV7lhCGsnkpWYrOAlgqYZ3brRIOAsXpw8%2F%2FqAWttheub66pH4iImxpxJGIk2nz4RXYau6cXjbPxlf0O4Nky6oYF05VwK0ZIzWQZ%2FITB6rc2qUwRRozPRFTPPwj5MZvB6K9MR3cW7WEHyOX1XgqsDzD59x1z4f9oc8p3wBFxwM%2Fj6zkNweFF%2ByDAdlDybgl6gqRK3uNq8rKbHSj%2Fa%2BzH8fdSo%2BDV1jy8bELzzRFevYMBNMZFsFvFzPOgGSh%2FoiIsY5%2FIzZtL9Hmhv0GilibqE6vkcIh%2BWc%2F3nQL5gLSadTs8UPNHHV4gal2vun%2BLjQOeMAMpTXLuls4ALIUYLy3jBUWvtWg84jblHjVjGj1oBNN8ALELAalvbRBo261lLk4%2BU4Ks0g7oP7ZYjULQiD9eKyjGhUDyjwt0P9un24GDoBVj%2B4rB6ATIuRv%2FMcdyE5dDm%2B67GHO3oayAJeD%2Fpzx2xKfUuv%2BRJvsyjUHJfvDcCxbTt2XCjmuLexCBH7ua8NO2Y8gPU%2B7izvaRcc5L7cJQsQ%2Bc%2B11cSsx9xXno2AfNINOeD4tIFDSLCxMZTOyshMpVTRfSpbAza0sEIWSQwqtCBwQY6pgGYMmSfhYRDOtdTxc7cqAtZerwDYQsl8txRvCsI7hhHooVX5%2BjS%2BwPXQFxc2o19JPNsjRCNGIphiVCNGS%2FpZIgU%2F2yk87OYXkHkMHVsP1kM8%2FKmJSnOhHjxgxCgk5QnlButt744IaA4GxnXDloilgi81gjDG6%2FQPAnTj6oYrBUBkEqfZpGrXOITb8Nijsg5HKJGrrwfwKCTiw9qa5sBtMce4uuilPBW&X-Amz-Signature=de6f6df58b0f7d0e89bfdf74db5f0773e7821c7039c2c9eda6220a62f2c7118a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
