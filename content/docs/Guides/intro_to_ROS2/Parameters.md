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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5YSVPI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDZLynZwXkq%2By3lJA4%2BZCHJ27Augo6MLHXYT78a7urRlgIhAJxjEi9m%2Fvahd0Ua3l%2Bfb6eDW4sTK7mVvIVEtVvIk6AVKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIQxrH%2FwaG%2FJe6nmcq3APDS%2F6LeZmwxzXPj0VAEMIUQ9Z2MG%2B8hENgHNsYP6TAG3spNWnSGr8EbMcl73JpzttNtTIeFPSFElV1DlzZzBEt2Ch6qN%2BkehVwimTTpR%2B0Uhc5T%2FabWsYJFZqkKNZuaNqNZ%2BZ27taFyCWTy%2BYDUCUCEFX2xDSoOsh5n7fDNKt1aU7G5TGCgt04Cyz0QXnfrLwp1xxYbtHLZebuYlaQr%2FTF9viVMVy1UaG1Rtl7wlbhvlg3fIrLDYyq6p%2BlstImrNz8CLB0r0EM8NFNqUzfTq3TrEe2YiNNb6lNBkn3XuDT%2BEI4xwEeT8aCerzj98tGefFKPDuHLz8waanLkOZM23F8x2JGUnDKkb05v20%2BhzdiM5KPC1I30W9hjryyIm%2FWQ%2Fy6kpYISaqMTZMzYAYxVb0fEhS%2B4h4AbYLQMJ%2FQN5IQ%2FT6M4iZL7jsFhvj5I3J88cmmMjxygoIQa3jwLaOKCXeTw2QsQ5Dn2rdjuH9A%2FR2yxLiQVficRxk1Sq4EgGVTpvPWNfFSxA2p7IFaFgXXjHtLLf5mYcKtbEtM7kAWOjDhwiuuYfqbN3fXCwMFs%2FRw7CMIQqLQM4P8RVYHU98iPo7HafU7i%2Bi7tH2%2BDeqmECgtgk%2F953lUxiy%2F%2FXNL3jCDp%2B6%2BBjqkAQVqnLVrRrzYxDURNeovWTKSY7SoDwUlE7h9N3zN359G2u6KzJgSeUd%2B%2BOmGMcJbawJxol4%2FsUZnSU6Tilnal%2B%2BCVKD%2FiUJM8OA09owXroJepSs63vh0egt%2BMeqE4t0qT0SFKhHHf3kjZCjFUIkAq2uqVa6illizDsfA9L3xRT91MEdu8daScJxsB4B%2ByW3VnTcMvVDeIVgSuh%2FJkKGDNKCGqwQX&X-Amz-Signature=da5ccf5d44c41d2a35db4bdaf63c6c47eb80bc1577716248f8154a3253bb7e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
