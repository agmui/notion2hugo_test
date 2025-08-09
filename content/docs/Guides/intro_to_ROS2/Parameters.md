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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SBBIH6V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGnMEAkmIeovx5JL%2BMA5UQQhr%2F%2FY%2ByZsLwgGxoP816dGAiAec3gb2el5iNQ9J5M6JeKF3wHhjfmsxpBDzu4dIC8LqyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnxx7icsdKMnFJBVPKtwD%2FTEiwiVJgZs%2BEgzM3bqKQ3ADj6WJuLSRE%2BWK%2B%2FSImwkxfQ%2B6Rr7BdyFY0IwkJPnq5NeKTYuoxlzOwWbMUMUjseAtPGw7GaLUdbGxBejJ7ESx3jaU0cpYwqrFEKWm%2Beg5N5gxEKUhnE5t%2FSUXi2c%2Bjz9UOHCPK%2FoWEnkargFEuCqh5XO47ACS32%2F0ogYXvLHyPlTC2f9kZT8ncie29s3NoSkNbud%2Fjw0TDbiDGpcFkYXGsBwTHJVeijtmYzKKCmDchRuz2Ba5RFaCrnLAof4S4Tq6Kcv9rwVp%2FXoMBT5D3GrXnw4Sb2jXy6NEO263wGmA6g9hgv0DG2fFTsRV8WEGqdRMbcgyhwCkqpSUqavZQRI6GWm6Wqe4N3mLZrX3VZ7ROMxP20nMvSHSC4qdEMcF9ZKYGrLv1ksb%2BOFtsyJrKMLDgz1kc0OlbVCheXxPwgyEo3f1xPFwXVgTHVizcXO5PbX2JDgglNLP619iXdwYn6zqydKDaynksBAr%2BMte%2Bkdm0Vf94T8DfkFPbzSSvLSnJml9G5pLceKGr0PoscV1UPeh0Mu324hgO2ilSFPUJOEx99JO7GjDLLMRhDYTUMIAZEuDAvK9NVVXTHmedklV8JsGoh3XahlO3oZc708w78TbxAY6pgFBxMxTq0musPoKYgioXqoqDmOnIeBtmMwygO3dcEnUAKwuN7PTkOKBvSlCxcAcgRgKWpZm4LeEnkdN2ifyxWA7ogl9Z%2BJDvH22AZ7wlKA3%2FxhOTAoe5lt7k1t31zKf4TCiAkYa7gOCXMLjX6AUZ0UNSHonhLX%2BWPyE86RqTzbEjby52dL7UanP7opUFg6igO%2Ft7R6J53tHoPmzDrc%2FUfCuBgXjwQU7&X-Amz-Signature=20434226e582a050e42948daadfc5a5895e2097786c2c9d9be34c9dd34cd6bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
