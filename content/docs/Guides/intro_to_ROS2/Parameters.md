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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCOMMTM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBct%2BQZ6lfmO%2BjFN%2BJlWasKQvd0T0Q127jO7%2BupeXxdLAiAkB0hRYm7d5DwbeENrgUlKgGJKZ%2FcvAkusHzTC2U70ZCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjhvBv%2BX1Aa%2FSlxIuKtwDlbBfMkp1o3wtHMKI147eXU3WzcAwGKvoqqIuJEQoVaNVFzGZmQnskzB31uzi5eAsgYBeFY%2BNQCWLe41LhuGERUSXKI0oAQk0I0Qoa2gjS%2B7Qo7RjF5fbP1UmvLCCPaP3dpguV95NVIbtLeIvXaqADNLtj%2Fs%2BDLLOgbotGKr22vjKYTrd1ngs6IZITeimegBeh0KsS%2B5%2Fq74V9h2VR7tVe3i%2FI%2Fpd3HvjgskUjFSjdtECmUSmN4RDbak3JNTNXbcwHh2OWqKsUk5triLbEwst6I%2B0jqhsGfYtLdp4Y%2FxUI7yBeka%2BB3IUfjp9Ky3ieEyl4FzRxc%2B2dhJQ4CBj3gGN04LJsuXkTxFwp79QBiVUz3P44ICQrLdMaN2vW4pSQKd8rR%2FDdR78REY4zPjS61Q0hLPKNV0aZF1Qf4CD2sC6bQe7zH1fMzvNMrqQFeYC8KowKaIIaJyZrOd6mznTevf0UgMCbcnX%2Fx40efIFcvEDM6zs%2F4T1TRQcqF88mEplimIxhpqDIR5uqG4gWvszKjWbxTGsDT%2BlHo6vjiuS%2FFovOqSHzZknI%2BTYKk0TfNZeCD55IA2hXXHBXeDynG4vK%2F%2FMuzn4JVVDS1AJgcPXOJ0Z6edylVz2FF%2FQHmu695cw%2B%2FWOvgY6pgEDYJZBPabCCJHfyifJNokrjnRfSJl2XXMcEwN4F4TrZSSqHONqPs7DLUSoaeNr9KxK7uDwu4mVSyKM5vLaaBFUd1f7lsSeVfau%2FTyslniz6l2bu4L4QpbGQxevj2Ggwh0JMwh6%2FUA0gWxhYtz4m8sY3DqqjP8mYBlYBGIV0zFJoCklTFAp73aqwjS56qKwUcLIt4BSNfA5o0RmbVkH60s5wMcKsWPu&X-Amz-Signature=1bdc54aed1d12b365d335af28ef1290e66ec6ec32739cca2dbeb76ef107c67d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
