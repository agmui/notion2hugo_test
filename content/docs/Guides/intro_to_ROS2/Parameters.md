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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWVVCR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1HT2uCDTx%2FodEx1w%2FqgTssSTGCoeGgMmKLePGzXZPUgIhAIToUj7aOyDuvZ7BXQ%2Bv%2FPrFXSrAwp7ks%2FSO%2BYOUxvovKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb%2BEy41PClsFaN0fAq3AONq15VE3E4B5Z1VXWn0NzZ7g8nhikIaMKR73TGUNy%2BNB8c9F%2BeCpJ7ofamDy14DmSF77oe8H%2FcFZpOVwaeZ9MgVG2m79oXI%2BY1kJ2ooSEEISHRuna%2Fv7ZV%2Fh5GPb95D1wJlh6HVdblTVm0RE3PLBUG8ILyggfYenJTenKgShEQSQnXNPSESnx2RwZ9tUmaDmvCMy3XC3qh65DJnh0DFm4p5jk3my6gEKGQXrfGg3VQe%2BkzBl1ZNg9Z6nqoYBtY%2BUyCGYJ1GOZuShGFJkF727x0d8RtXc5RYBjnS05vQoPzbZm19s94clbAN00naFFOw0qc1v4XB5VQgKiL56CSQ8xGTlQuHqlgpl4SlzT7caJRittPL9cvaXTiyb3f2ZAzYocc8mj%2Fca4DlRX7mjwDnfuiDRBkRzvwX0YtSrLRR8etvzCytZ3hYa9bmoUc%2FmyQ8uLgk6KVSkxhaBQw%2FcQrLkt332%2B0A3vUqMtbtVv21meoy82aBwaZ8b1Bg7Z%2Bdmb3MCuijWaX9CpLoWzaUbMwYUZNn3ufTZJM5uHJfXa68dFT0NKtkTpS%2F3LZekOi3fxFNBvEZNgUV7FwFpujLq9oaa6ZNjVaG1KdbDTERG9o0V52f3a84JEcWXo6fO8aqjDL%2FZC%2BBjqkAa%2FabuER98gq9P5%2BI5U%2FDv6nMrCTW5fNS0aHSuMR9fm5GnEkihL6ktJJpx3id%2BndZ3xJ%2FTuMFejtuB24ylzNPtM5a0JV6iNZl5H7%2FM0VBMfShlWcgq7mzPGWdACGfydQE%2BEpkNSo%2F2PJ1RXd%2BPWyKm2yHnsdyiX3BL4enps%2FB4pP9Vx53%2FPlBEv6po9hZGz5y10wvMOYZcwUJwJd3eHHD4hBi2No&X-Amz-Signature=7f511ea2cb0cf7543b21841abfadea3f2ad3ef004f72faef0a8755230c386ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
