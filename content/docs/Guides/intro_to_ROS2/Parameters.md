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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGT5RU3M%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi6vIPkFXxzUEetKPvO88fz%2BcP7TK9V0u9YFtzas0p3AIhANd6zg9FH%2FnRMASm5D9l0VB%2BbZXTEA3b2Bjumzk%2Fa9aKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDpJXkzbEqD9IBQsUq3APGA25ARPiqiDs0tRzxc4feHHoAl0MVCLJ0oueTJoniA93UGmEopntZ5%2BCsIMYotoXvvnv1kpvYRwWHRy5JQOdw2hzn9YYDSS9tSU%2FqL79arPIS5E48eFCvf3msJJh2LeWKYi22gRv4dra43W%2FpFYkRRMtpSSe9e9hAHkNKjJR%2FMnN6Zv0lxX9MX8NNBtL09MN0df3QOczA0vXkfzB1n23M4URLt67XfJM%2FF6isx4n0Bhrr7V8TNnsH29PhLs8YsUEOoq7DJZAl0FucLDG4%2B8NG0hBzfSsqVS3ZdFAsCVvlV1MT74obL9ixRoliiRqVFsZDpQhJ9ZkGdQh1wT4UBZO9aD5nfJmAmlUbbbNpGfO9K1PKEo5iHgxhIr9ZBoFBdN5zZvpOXnpz84p1oAkUYfciC%2FvKRhglylaXGrUStDFDAZqGxtBk93VuM6zAMuSl3FFgfcqIVYGec%2ByqyXARYjdqndZ8VPLEUL9hLJy337vFP7qab93UcG5LA1gwnkEjAWlz9hbx8tJuTf%2FLZlh7C9cDgtsSeg%2FUepc6G01lSMUho%2BJxbuV8IC%2BBgkr6%2BpLDMrtn9tYw7PQRSwjMSJy%2Fg8XwKhweW0KeCTB4ovS6ofIXzaoV8dVonI86%2B5fayDDM2qHCBjqkAXkQXP3Xupnsixq7FY5L0J%2F19QxO%2BTduYm3TiQluf36HpU03TV4fdybArt6r5jlA4l53C5Zb%2BHWfz4jzf3Dk8zl6o6y7%2FqenQaFJD%2FsUCSovgORtgRT3rHT5b0Txbwd8C84JgAxYfK5o1uj87HU6kl0jFwtPcqVCjVWtfnm2UfWb203YmFC52n7LUijA9B7mNLcq0BiO7SJ0niSInonpsQ8TUdmJ&X-Amz-Signature=4324c0480db0016f0a21f65d001ea4712ad32f441e9d10792ddf84a09f3688c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
