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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRZVRRU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB6Yyu0E0xIlwX6b66Ky%2BeFuk9hk22gnEIc%2F9ZIJ2m5RAiBXQ8u6VQovNNjEMq9g8g7D1%2FgkgFMK1uGusVMdjzK1Ryr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM%2FmJYdiC%2F4xg%2FGSB5KtwDkI8aFN4Tk38Hq5GDiTmiX4XAuylMha6EtKPlrcE2UWWq8jSCJUHSGD7CbTvJyS8eZ3sAAEYsBb4he%2BP9wNvfY5EluszCzEvpcABGaI440AwQXSVwU4WNzMdwuIr8eocKwUShBRdwf4YYzHx5Fk2saFqM9Ak%2FEKksZeeF6Kg9ahXo3a%2FVt3IppY25f57zSrTb1%2FGD4eCj60BQLTYAq8ddU8okK1Or82dzsBzPRaB7VIr%2BSlAuJC35VVTYYQcfOqUYZgydODaA0v0ArpaIhzGbwqKyIXn5lQwqsjYXlIb6FOTajxCqNKOR3y9b27EQnIO%2FXScFUKPZQrdCh4F9C%2Bo%2Fo2B%2BZ%2BnYx2MjNczyc6s8I9hnSe63ywcIPr0XHeqc9K51HX5UM%2FHVhmfwPOJbOx%2FU9rFWYQx87X2GRy%2FdUFYD91KHQAvwica9jfYK291tRtVw%2BoBNEl8S7ZDxF%2FwMAbZDw51kRsckFjIr49m0DKLS9Z1QdopjN%2B%2F3RlwymAwAG4IC71HhOAN3JFfoQdImqJkDi2339vqTNcDS0QFI7NiiDSLyy38kL%2FhNzNOfrf7wST5jdsvR35PjyAn5wjfxxd7go3oHR2FNs8nakBYkBlj43kb9bPjsLg7xF2ls5MQwp4SpwAY6pgE%2BdyvUsW1emaH3XULvUlnUly5P5asiXF2Cbu73zr9n0JRFEq%2FS%2FPoVXPyieTpKxOBa6RAs5JYOtjJFDJO4MLoKj%2FVBKB3wRnkVZJgEJ2xRMLb%2Ffgk1f1YUr4SG4iPpjl9mDt1EKZCeqXkdklvhGNc2O7XupCnHbSyOBv1W4s64RQCYnHDyd5cTLqgX46%2BzUgjdYqO04bpTxHyBjsIoiqTUNLf3nFyL&X-Amz-Signature=78574620708d48a040764eb301ab2c82bf4dabb2a55b77c6bdaa1456edbdaaf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
