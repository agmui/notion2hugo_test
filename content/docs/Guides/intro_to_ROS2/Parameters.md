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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMM54HS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCde1yeu0wU9IlK4gIVndBRJ5ifBCm0jjrLSBohtuVjHQIhANFaEqkJhFJcTShaRODXgNeGwxtTILfE9taiUoyMA0zLKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrCtuZu0oV8LHZwOYq3AOnlsk8RoPACannERKTX2ryqcdRgjySxCgzPs5DW83S95u9316hdaAnHWX%2BIPNQf6z86CJqOx9Pgn72%2B0wlVJyUlLZl%2BZPedOCK2mTWjkfOvcaZMrnWgNlF%2FvSJMvgURu19Z2lFxtPz0pULUnU0FKs6oGs65E7DKC%2FGBadTCWehBXqNI%2BgLdauAQrDsSH68M2hckv9GBB3RbZNQkSQJYCmhJZUyvRxEUkY8LRytAZPrBF06QB1DGeyjzoKjVet07DI%2FN9McxIqI9RmEwYupxin19VX1DOUqVguMqaMHWnhEZXvRY9GHPZkL96GIq%2BVYqZa1W4qVDCsh2u%2BjsS2kumZmds0aAiREmiQ32iD8ZRulJfG4qR6FX%2B0cAojsQxDgnCqgkAHReK%2FfNTNkGDUh5frxT47GkmM6fdMGTS9kbPhwkGbu92hTdFelJR%2B%2BDlUPofF1wz2gsve31fNdMpeToiA7QNrIGsGUMejAhNyMePWQmXsAzoFdgPBGahsvIYi4X41aSESbgdF0GQ9KqMlKlj8Ozox56wQ34dSSbu2dBVaSTWjKYk%2BSCpqXIrqBhbRGnSYp4Iu%2FE4hIPzL7lXpSoho3AnsMdRx62UuBAR2jK4rvgH%2BTPHcGBPjmkjYlAzD1%2B9a9BjqkAUaoqNUSL7rlWJDJ5vNuLFfqWExaoQ9Sb9P8wvFSshWgL1qba2qU56qadUZMRbtu02b%2Fn4BqtrXn6LlWRSzPuw10Gvkwv24Q0Fjp%2FODU6Ww16Efu3WsG4SPd5Gj2NcTAKxR9zPC0lC%2B7UorlTS45Yuxo4PwJXpwLSAHxKpYSIIY7bp9unlDzztFXRkYoCEQoj5%2FhzxkEqVB6qFUPwzvomGQDWj0q&X-Amz-Signature=56098526bc49d3c4d22a2562549b4300c1e31bbc3ce0e3af3cee804590e41055&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
