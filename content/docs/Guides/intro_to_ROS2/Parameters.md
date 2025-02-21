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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDQFQ3X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg%2BAs5I5Xk7wSADFA8JdSWjJ90oPlxhnu5YIt6XWzP4AIhANt2B7rjYbjPDcXgT%2FG2erl3xtnTYkQJLJpeSm%2FaRUhMKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQrTV8M43z3%2ButOzMq3AODMUMFyBVomK1VqhfwoKTZQxv%2Focf%2FmsoYTZQ46CLCkOLBBKsX%2FQGKCknS2iD8p5%2FErO0p1YcN7Ul8%2B%2B1mVOkYdrSCE%2BbyCZrZq7VX%2BbVglKE02ViwRwcA5cMydA6gK4hOGff%2BnrLNlx%2B6FPU7CH%2B0i3pVQH2zsJ8%2FFj7UGZj%2Fah6pYm32%2B%2BMfYvFi5C%2F3ENbazp3ZK8SKpSOV6kqvmsOy0XO5xKZ9VdSrMp8H8wjDDhu5waeLB0b5Z5tb7o49lwM4O9hYO4O6QtOfbRWwzYjaFbC4opoz14Nqj74KRqDf3B%2Fvp81zBsP2zPAk84kdzosqNQjzTIcZ%2Bu8mVJ14oouSjc9%2FgpLIII6q6L6yDa5onf5ke0lPVo0Xj2W7mUdaDeya%2FF79axOjCGHTChA0%2FKz4%2FISglXcs9TBDLD3XYYh2DXiBO2u1WFJBBxpt4AaMbnMZUKZibdHi%2FqIMGt5JgCgXCQKDUA9%2Bt83jtheWRXw479wrmLB7i3tBZS1VXQvDzAbOXzhtF669CdiChVDDadmJjP8wlkKoYcvghiapVFrPu2Hrw7ZHAfqYrt5DN%2BN66gEQlyGYmqlQwuBR02asohjoVODv7AvV6mCXiMT0RlaCgtsQC9sFx%2BItIOeYIzC8guK9BjqkARYWM0GXlCeTQ6jkaFoGZorgMCc4t71BrEABEt3ihZ68GXvjcwdXd9Je3iCn1x63qOwphYQb2ozizs8%2F3aJihyA7MFRhUmI6u1RM6xuvm9m3KzjbB6Se%2B7%2FVv45617qxH5KOQjE8QhsVf7fOsF%2FiH%2FveBIbYCWtbeYuSZKO41mqhPqm1XXjekXHg%2FlI6ChUE2jUjlf5gaRPgT2xiaF5gNps98PnF&X-Amz-Signature=fb6434f85f8801b64882599a0c584511b5874ac0b5c3e1688483b1be2c8c3ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
