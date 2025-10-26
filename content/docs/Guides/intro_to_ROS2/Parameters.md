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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQXTGMDI%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXIYyWOF8g4bVymq9lSICLES0Q4%2BKHZXb4nysODZp7MAiEA8Ai%2BJAioTjuvZ%2FKYajskgWj3%2BT88VZ8sCwCVKONW%2F8wq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBs5xQHjAlFnbjmtdCrcA5tAnsCe%2BbSrbSnj3NkRKHkdI1OpdfatxccmmPqgUmNmShjWIQRMJwkfhj8aWoMmCl3BFgyq4mF5p4112ux2MHYiArE0sQshrGtQlROXr%2BrZQrhRHfcaVhNrN4DCy0YuBZ%2BmsaIzRfCAudOXDcniXXkht%2BkWM%2Bl%2FKXD12EfaY9Kju0a9%2BuRKYYL8byaUpVOi3%2FWBJpn6xYj1dMPbsw%2Fs69lLcKLn3x93hsqYQG0cWWIoKoeiQ7Ue3D%2F65Os%2Fn5qJBiwyh2GWSyPYmjfwgCASq7P7qhVNdjaWFkgbWcUckmwopg0EaxvNkVQ1msAq5i5jbpAVtGCR%2BGaL24sOHGh%2FCfQFZCJ3vFG4SgSiiXrn5EtHgBHB2mda2u9P9g5ZS%2BX6A7liPJMwTrcWaHHa1Z0TFZePB%2Bg1x%2Bdu4qIzp0bkkJ%2FgEduk2Jkk98SOjodSljt%2B%2FHqqIG2%2FolX9cJPauqbVV8MKe0skmrnYctZ%2BpxS82gh4scdRA3RlZIBARh42ERdFO5GEVQjcZv5atGazXoS9IKtBplXDpTC%2BRZRfFYtIG6YlqiJoYQsB0kDkyWWcYpgM%2Fqhc8njsH59OvGzhuNoy7WvfmAzpPGkpnTUvA9Y%2Bfp6%2FJg93%2B97tBDGPLYgkMOPR9McGOqUBCx%2FLozkS5fdZsEqT2vOM1MigeZ5EWaFitit5Xa%2F6e8mhCP1SoOlTCNlGxfHs6Kn669WLaadBWzlpkfks%2F%2BIHAr2fSVa4QNNeBiuN8JqOK7kDp0VFKhrlQ81riHG9nQxV4NshpnZL4kvE9D28OHU6F4SiNtljmZuxZsN1LgAxx37zi%2Fm8ev7zfnjURZmG57s0K46%2BCcVw85%2BlVkZDq2e2lL6KXupC&X-Amz-Signature=ff902bd24bb9f9ec6f1e736dd3c43739a753c7f7c4b6500521d7e41acdf0c975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
