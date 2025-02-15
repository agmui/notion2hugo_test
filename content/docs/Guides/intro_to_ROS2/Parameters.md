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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWX3NOUO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC0IeSe94Di%2Bw%2Bv%2BS7XkiE2rQIRZCTF9dB9I2Ql4FIjAwIhAO3cmkryNROpMNCR%2BJO5L0SlsIO6uCIwsli2FrOk2rKBKv8DCE0QABoMNjM3NDIzMTgzODA1Igyq68V6D0rAyMq4uW4q3AMnRCwH7Sig2C8PLc3WJ18tuw%2BmrBsH26KJr%2FiZiTXNqxedoyXn8hSeyUoZcZz54QvekZm2smNNjotv4UvzjnBDw%2FkAYf2TOYlLca8I2TXmi5ehamEliBJAOvPOIlLiP7IUUlaEbMOpKmRt6CuNm%2FgWj7eYhvguCI4ELhoAF1rIht3v51z%2FxtxLw6aR%2FpldACX6ByovPEQhU7mFE126GfBMYd%2Bq177WRlCqVSYZoVdZCoC9QzS8GzWLvzTGtPPav6Tvb7WNkZ4nOPqLds80%2Bu92cFP6aUzPDU0orQ3Sems2zmg5XDmGA0RWxFLze0XiD%2BIrTGhmd%2BnbBNwx9fc0z1BRffl940djRMUG9DoFxztd6SjxFfcjv2NFaeZ%2Bmu2Q9K6YqkIRbpsIH6RG2gX1wiOSzyjywFE%2F%2BnBnna6ILwzWXqw%2Faf9fgttgcLa3uNhcMw6ekXR5R%2BXGoNsbBds7irJV8TvsrfeSmDEGPtDgFCTfpeIZEJiEF1vlrsoxRiaXeBmlBD%2BCNNdWRTxBjWkCuqO%2BSdLmBbehVnQ40HjnQZhyOSYEVXTVbbNmEVe8YUB7ZgEwBYFEtUzyOT1TF57RYZ0SJ7h08TM6425I636c%2FeU%2F1Ff3%2Fnq3FaL4KBW97DCB2cO9BjqkAffuRjFWgu2Ff4LboGIPaPJ7A513tyYPeJ66%2FUsfWq7lvGA54Cwf0aKsULcsvkzE%2FYm6tmW9TV0cESAM%2F%2FNez67tgXj%2BN%2BQxYU1kTOV93BrajeyiM%2BLtTgONZNLxyRrukx8o2GDQihjJTyIs9a%2FkLSKM3hNjfTTf2j1pqHO35wpQRBFS4kSVpj%2B3szuO2X4G2hFpKO0F%2FsLDftZolS3MNop0mh45&X-Amz-Signature=e4a0535db55f0d3902f2740ae5353b760d3486842cc8d952983e78e7e344d6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
