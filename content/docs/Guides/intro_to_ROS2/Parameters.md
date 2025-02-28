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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP3KZMD6%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCVO%2F3KgWIH06Wu%2B%2BEifbnOaOSYyz48IBElqZnR%2Fp4spAIhAK6S%2Fj%2Bw4MzqSyvMZW0gV8Rn6oZ6sKhi0XXrWN02ULm6KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFTfIB20Y8penniTQq3AMWXl1ySIrgTcf%2FDROgw2LXtONCyB25VSt0e1MJgz5lehXcB7OmfGRX%2FeuWB4k%2FKE9BDFDX%2FZLngWgZw57sP3%2BBPdAXCulkPESBXiaDLXdKm3CCYbPPtJGSUSche3bQKwkotSRpzboQu%2BcYFij5gihqlSy2tCkM4cEIGEtPED9LWylVr11i3PsRWYzay8%2FZsqQ1iVyIJvUN%2FPIusQkLCmY78VRpNTbd%2BI7UWBtOQx1tKwTwWcX2alMjBgV1%2FW06%2Bek28KFqU%2Fm1%2FGBfeHFI5pwfNB%2BTokh4q5LYjoH3xfRUbMhQQC8pCIQIgnYzp7Br9LRnH1IqgVtnwAkSxhC%2BqiQsU1AnuWtMYxqzQVR6JdsqtcAuE7vHCsmk47XEaTiF2w8pT9Ey6Thj6EBjaK93f2rk9DOkZNlUpPmOeRbQH00u6%2FoUnEGkOKIhGrqWP%2BLWOGSpyZYlRYXvAWjjG1vI8MFJ2NtzN6kzVAMFLilLfDsGMndV39b17eRaErDBTsosL65VGOpatJ9RiWIN73DPnxnksgoWl3U9xIs12LLzqmKjjTiiVEFIEnY%2BlRBQRGdA678RBtTTWE6M91lneIIYsYN0og3Dr1Ll6sYeQihzo%2BRVuKi6fXyDRDAtmheJcjCbk4a%2BBjqkAZlDaGpykf%2F17WLFgZCuW5ZIYqm9bIMww8TIPIHuf%2BT6mJqenhunHJz2qyZo%2FFUkiejXs%2FvlEoH4IzXcaKvQZt8%2B1%2Fb7JRjsv1dGXc31twJNv%2FVNkerDReqsK2wI8TLVTK5Vgg17OP8bDg4WBGdVNZUCPoTXEuNEdk53koACjnAI%2B9rf5x%2BhTmA2o5WALD5Dc9ojL5YykCvjHY6rFIQQWXz%2B3ypw&X-Amz-Signature=d359daa6a86deaede4b29a19b24d6afdad62c5055dce8bf90d559f6645da0d08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
