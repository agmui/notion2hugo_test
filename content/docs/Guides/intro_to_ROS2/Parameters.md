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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIV63FZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHll0L%2FVtQ6uizpwCY8Muxu2OpyHuzekUifotnC4g6uAiBfKINFjaaudCgdht0SYhUyHBfR8MnbqZ3LvaU3%2BJ5urCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfGcAlYXlt2I6UQjlKtwD2zkN5Cc04hf71Sk7p3Am3qVYcWjp6rDIYaDT%2BBMtvBlhX%2Be1iwjaFQ0UwGYqGgklJfADSGHSE2xI3CJx6lrw11J1dwWYexr3I29r2EcEHFqruy5GvIJvQnHv06TZT4KKWdOEKF45oFwuxR3XswNehACXMiTUeIlMhXU4Gkqq8LsVvY5mNcH%2Bob8pWLyaMTC28FvHYytsBCdG0FSbAr7THo7mmOHh%2FbQxZHMgPdqPr6Llu2%2BbMQSSwTxXcWMruBwTQeO5dj5wLppT5mIxHowqVqN%2F53cNDU4ODTbcuVOBaPPcyRsNg57hmSjWvHgGAEo1dtfs7DV6d8bNrEWWpVf0Rno5PWdvdL%2Fkf%2FdJ2DCh60SQFLUkhsC93zcBvf3TUaXhUu7FXmm24rcuszcv3e5Q1XQXzG170Y18ralc2cgT0mzAsIxrktvx1bEipb9yE3R9AOAS56sII%2F3QspR%2BKgJJgd1w5qUIMRf%2F%2BA%2FFs3or0NG7xl1Dv3lDCLYeCE%2BLQCY0z1HWhvy8etRJhu00BrGeEYugUC7MMLbxVTBnNSDkpi1d2u7lB6KjQiBNelo%2BAuN5OHTe3RTU5B5xsgxIo6H0P6QAl5TXQ7MKOrYmjuu32YzCQGLrtIHSUA9HQlMw2YvfxAY6pgEdAO9qsp4zLTODg4z3IPUfpzPDOR6B3nLOwJiaVaWxWfx1aSPHM2qZkYMgMpjj9d6lRRx9Uu187roIGlik6GExiJXJ0Si2phcjRf1qhuzK1t6Ed%2B7fKm2MysG6gfb2BVwNBCShMmJsd8WGfn9LTUGBZaMo37UdgY55gdm1AQHBEZEGCymUEvLn74q6AdeIN99Uj13yGzpAskpWxQMy4IfYkF5QU4Iz&X-Amz-Signature=3c48db7417042a15011be41b1066c082c5ea0f7a52663f39e5dc38669f19f8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
