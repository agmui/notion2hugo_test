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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675O37VCP%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtaaepHleb3no3Y6eSOjsgZUbufuIo3%2F0a%2B4bx2%2BYpagIhAM7%2FtRxDH9Xh3qBiVVdOQvXUVS0L7OSIXDFsngAkW0e%2FKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq4wp1IUaEe1J61LYq3ANdgf%2BM%2Bbc9eA7Onez5v54gH5o0GPEnVsRVx6oPFfAYk0IE8gGVtaFNnA%2BYHDTstF6lYi%2FXGmC5snyDJxbGM83%2B5mkPBC3BVvffFi8X4Vebpy5wWXmhw0Iqcb9J6MaKOY9YlEpztwzrAqrIXt8zmjYudoLO%2FUCf6gCPBxXsfpftnsyuOfCdmmkKP77j6K%2FKNKnAd1p%2FkKNqa%2FkPqRqKVT4TpNkr2ki3rKjsRquVoiQ9HVz%2FOqK12XxUtkQjsYuS3nmExFM2lxYRAdC8YH2jmVgPolOLdQ7UZBpSdsvaMYUXNTbf9QDIm2ZecIqb4UDk%2Fq2ALOh6VVattxfGBzCC2FJGCYjJe9WXA%2BK3s9Bq0OB5Icie4MUI1M2epn3UQP4yZUxlE0sMe2XXpn5T7qOIu%2FffykpCi3xSicYBLRyMJcF0ChNmxAMoFQnvzFQ0Slsf2X98RWN%2FkfkJvQZGJo0VaePycEQ7jz%2BEQl6FJvcukk%2BXyIvbCfgkPugYTSQWDsJb2nA35FQtKR6zvTtbjzioalWMQ9t7MD3AHe49APLsGKGKMBfgMVE5CaFPL%2Bdav9irIG%2FOaGF1ydWewh%2Fm1qfL8Ofc6EzjaFxX96thHmRto9DV%2Bn1ewIStcid9YCjmmDCr2cu%2BBjqkAY5NvoS%2FsXirsxzVd1OfKAdeD3%2BL436Cs5l4BE39MwNXgkS%2BVdxdkMoFNMI7SSr%2BAnuYFVCOucZl0dSJk27cUh%2FzUSemk7jNexm5uOdkh14bQZGjoUiEZrl9VCnCHzE%2B7Rf%2FH%2F0Y3LqYqoIIB3gTQErQDsUTx09xqB9MBO4vaOyRqsncN9TD6dDXDDvgi%2FsZ8mXehUsjz8vVb5CsCgFW4CZgW8HN&X-Amz-Signature=99b502205386c245d59c0d88dfed9fd43408a46941c0305f077fd0e092769967&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
