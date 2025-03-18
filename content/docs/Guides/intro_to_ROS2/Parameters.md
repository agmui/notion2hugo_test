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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISXN5RD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIGZS50cN8YDZ%2BOeiYHtN%2B17jcXsfoIJiBxTdKsAz9%2FmUAiB8Sqvm%2FXGkD3GhLxNiUOEVCXMc0caqstHfd6sWV8Gsjir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMhtdKRkotc2nkVnHsKtwDWXn7oBa1FPOglZEsMlDj8Mptn3M9OqcmK4dfdPemwZrko7DKMMLfCXa%2FdnlMXBmeyhewzURqFkt6bQeQpJF9qiQEdYH3ByiHm3906XwJmz4tPgi6UGB4CfQ4NzQt0s9JsWdX24aeekmn%2FtzssX%2Fj93jIOfvj8bnR%2FY3IdMOi7U4e4%2FZ9P0fT79o4DsbcQqN7El4AHly6rbEiH70yQVzUQlxMCinMJtTgZ%2FtEZfvKp3LrxJWgG2IKIQAhE4npQrvXoxQW6bAIxO24l%2B2%2BnPPHoeBSZN1yjwkBBPkfeXAMZwTHKhiVVgQfN3IzVDK9j4YkjSH2oluni6oP%2BU2gnp9rk%2B%2FWTLxReDKshQkv%2BD%2F%2B7phnGOqK5WXZAz0eLum5F0lFln0xdC18OBNMPtvSXJqUm3%2BUbGqgFGO3JiuMg8WLskVoWn3wgUczgt1Ro1W5Xgjlp%2B1Ptjj0TQeYDMbxvMxR13zmF%2Bc%2BBFB2LupH%2BIXqb8yGt%2FCg60fD8sLEFcKJ%2FD5kYdQIzYVGli4U9tY0hx%2BfIOHnf3ZyP8Apbp6ZtGqscZn10qze2rMxHyj0rW6lMO3yT2tu7CQHe%2Bxy7jhnBEM%2B%2F1pdVAXA6QdoYJ7TNKm%2BK8319RAduFl5tz5kAsQw55TmvgY6pgGAQ6V%2FGtsHj%2B6iOulyovAxokcqd33Z%2B0Im3ynbzxw077LC6yA4nCCsCBQ67wARRMA%2FqV4y0SHL9n9IKhKjQ43JPV265J45Fp54O%2BifTwISN0zhIBkDln4mdby7FjFNgPdYQ8g87cFoOJutLUTUeNeeb5ufDACWNEkCNF41OdMEKimTk1XgzTlaQVOsS1Oei%2BqnZ0qxeZTwh1qjpoihNDuLlmvz5uEf&X-Amz-Signature=4cd26fc30462e4dc4805f792e7280949fc1b3d70678234859ab544b144412c65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
