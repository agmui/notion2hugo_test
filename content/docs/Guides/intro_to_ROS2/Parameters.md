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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5IRWJF%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJA2QPzl9Lvk6d6IB0Xv0%2BIKLMQgXzi3FYCmbPo60ygAiEAvx6nc8nkGXaawz0G0EvUWTd4LYpDrintsY582Jr0t64qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfa7dgx1bW60OyADCrcA2u68I%2BNxvWOOyz0txusAmIZKL9%2FN2mxIZMCi8UgZc9MKKM4UivUnktKxysKEpxDbTCHh2jX488YW%2FE3SMJHjQdbi49OV5U7zD4o91E8gTSduLy7BVK%2Bcpz3O4nwYOTmG%2BlR1%2F71X9fhCiWSSVlzWlrsGQ2ThrmQr9DKG03h5oshEp7zZ1mJX8lrdX%2FAE3fknGc0mJgrQMDuaaONuJ3zTuyV3dDB8rkbXyPqRzhE6o7H9gf88cJUZ5NEDg23aA5%2Bp85BELwuqHYiONmeOMLsN6htYWxlfmxOdbkCvx1xbm3vb912XSzjqy4GRlf0IrXkwRqAdHL49EsjsiqNPvCxO8FcISrVmGeQ7ODbBZNvVV3kMhK72pR0uQBAfMAxKZnEMHe3W6ewd6TnasEbRY0V3VAVjCC6Dwtx6PUUzZ5tFqqhjErY9AXaCfjCJ5jrAN1C2bHVRQ8Em3gCh%2BU6sU96Yo%2F7JhcG%2BeBhtQ4u6FW%2BUn%2FusXGwOslaDeqvJAFDgM8u7hrEr70KxJXCJkgZHN1xNg0EigMX0Z6x7x7x8az0KhpEF1E0YKDSVFghXdFGBJPfTU3hxg9wGhVChLDvmPGYejEyIGjLdvGZO7rG1nj33fsJZZ2cIj457I2et3XGMPL4nMIGOqUB9CG3Ah3f83e3XcyNSn8KNL94FSH2UEDZ5183%2FkxhZAcx7wbh8eD8F8nc%2Bbe%2Fq1k4TvzKd5MAH71sttX2Zgf38aa5hQi%2Buz7m1NqDxVWTCaqqsZ54Kj0xKr3npahpDtccBswPw1Ndtte7CLUIgF4lzcKLxq%2FAUFsgfHlnrN7Y3r2EGb%2Bts5JftyMtukrhmATYRbqf4dl6Avhg8eNqCAb5g6Bk49fN&X-Amz-Signature=5ee86933c300d21b239ba1b03421e851306b0f371a62b2d4b2639709692e7239&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
