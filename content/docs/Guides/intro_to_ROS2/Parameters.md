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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBKCEHN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHe0ovafBpC0q%2B%2FdkRzxuU3c509YUXutm27FfTFaFs1cAiEAqZYrf1BY8Vx5O5yp7v7GhPu2M0T%2BEBoIkpyszgEaW%2BEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExop%2B25Cx41r2YlAircAxu5FWal86%2BDf2DuoZQiR2olspqkUti5wFPPDKWLhRYg1MpaMu9yMyJVx9RW%2F6jze3pJ46%2F8Tg%2Bq7YAD9P4hmmaHL8IDU%2FdiR%2B43lMrgb0yLPtDnMgXpVYyTxblVWBeZ1cCDnL%2FgNw8ezEarUp7HEnFxu0pDScjkh6Ny%2FXu%2FnBKiv4mOLnq0LN5QnuDMqunftRchxn%2B7S%2Fa5EzmhCnJ0m1JS0PHu%2BdPnkdKKBbu1mE0hbpendq6w9G%2F4OyFaGZlb%2B3Jqrc9vuv9VfuuYfKc%2BE3pCMI6CFI3iKoCNycOQ9seudto9H3Cc32kHqznNcIm7yQ%2BFwJ9C1tGRVn0kN9puFJCGB079JAhiH1ZNANf3i%2BhveLKd7mFkr0LtBk7mGlt4ycW41wkOrU4h4KQlrAVatGF3T%2FXGMnYvfN5foxpcwJTdBfYpJwK%2FDeA1vWdTHOX6j0U3%2FRLi76RyIOt3Rq%2FeBoKIa2zkBPffRe%2BIlnSww4%2Fzw12Xa%2BTAafDEwqF3KNxeLm3DDt2dtRXe2mbquraIy3huIYgHJCH%2FUqNeUXn7n7nYCpYeXZAtGbhjxQkXNHDGLT6ofu10f9wk2NL38ESPCbQx5rk%2Fz7q9Ya8CdU1FPGtSZLZQTNDI%2F9uHc%2FYhMJHJ2r8GOqUB1wSre2EuDx4IZtI%2FBo35U1qab%2FYLePy3RUMMPVGLUZH2q24YT%2B5HvcnqNoxDwdZfi%2FywNyGnD%2BD8FiJCR%2BZBE96Bs6%2FPcORLhEjddr0pci0QFQbX7vJhQY8IkvujMqi8Tv2%2FGMGDDnIUSljnn9mqWKWeBrZCKhOIBqfgw8UzW3dqDkF9AjoY3drKUnxu7WRL55we8EEnFXyQeNPlspveC87AL45W&X-Amz-Signature=9f296ad89074050fe88b389455735ef05e9896a6f6478f7efa9532e45c6b703b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
