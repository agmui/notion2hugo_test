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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFONGTQY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd0Xs7UlTQ7FV4JZBG3%2FdmSqZUot8cD7%2Fc6S8gYpumIgIhAKnDkbBi%2BPsma9HIPsXY9aF1n3hws%2FinDh0fcvw1GB0DKv8DCCoQABoMNjM3NDIzMTgzODA1IgyoAhOi79Yt5jZo9gkq3ANS6z54XXRUZwIXVdgmlSX1gO%2BTKBaZsWYjbvixAy6ypLc2VvOVU1mQ3%2BzkQ%2BcYupLJvFF3gCSNm8RVuyKwy%2FZS1vCYc0wLkf7GS4MgwPh5v3%2FnU94kDX4da8oi2w9oOJ42md4Lq%2F8KAF2rfmTVbrKCtpY3slCAwr%2BbhVCe9CnZbrbq0WcUpyycCMdVWNIfqXQ%2BKRMQKrnzBujr1Xn4ebvmHwaSEEH0f1zG34%2BUWgzYKKcXZHOApyVnIKMy5I7pXUHFFAf3k1Zf3HM9x6ITTIfswuBtFEJp2o%2Fl57tp2qhUicvnI18J%2B9GCN%2B7U1GH%2BqOcBme09hQ3eqZXowt4%2Fw6oz9%2BsI7sa1A08xh72bBJa5x3lzrrV1EkoQOnaOJN2I4yqViJkKJ6hoaG7BFn3oOak%2FWxALR22oyyCAcf%2Fr6pqCIfnkVYUmX%2FProy%2BLTP%2BqyhZ5KFPNNwFj6GxQHdPBaCCEOofl2TZfWOL0rZpuKe383CBgMLMVbzYD3rOInqmjYlLZZcSslIT1AOcJxkl0lJRFz17kZ%2Fc6OpN1oT%2BKuv5CiuwDrGD6iJ3zBvymO65vS9p%2F%2F99uUc9fAzkNmEq3xDdhlZZXqvOaPBnk0ON6xWxOQxSj31RUuwfHrNBVQjD%2FtPi%2FBjqkAe%2FluwDrs6s%2F%2F33ZtqfyVjozRYQl%2BD8snvo1fqAOkQQO1rBEX%2B0ZdiAEbPFTs0Cq6Z8J5qcC8MV0Laqh3z6sZi5XZGoDbRfHH0Bvu9w5MeiBQwwM%2FE7YnbUTYiMCZ2Io%2BeSjFRD%2B7rzNUw3E4poiaKnIy7%2FDVB0tKOCrmqok%2Fg7BVO4C8vA8lYeBM6AOTi3m9Hpb8rb2ZQQCXeKrP35wCbBob10p&X-Amz-Signature=2a752386bcd7977c67efed3f7718ba8ae1533549cff901867700457b2f07afc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
