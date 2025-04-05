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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SNDUHK%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiFhbVQG5nzT0p%2FjDVfXmI0buA0cwJnRfMByKqmOCsuQIhANJcAx275q6kq1ABF0oKgqHXnSdSQzhKllrUo8ylw0AVKv8DCCoQABoMNjM3NDIzMTgzODA1IgzNfkuUQAeCP9bgpu4q3ANp%2Fel%2BvLOFFvT3rVJYPgeNfsmf9yEtAfrOuyv322d%2FUew6BthpHibFj5X%2BcfKYFXxCgdIi6glTW1K8S2wPlp7b0xn%2FWS97tcI8gMLGDd2qpThoTMQID2kBKhzRRYZpUpZWBb8CQI5FoELqjoOHwI8ok1oRnhRCPxUEGTGL4Uj29i3g6WyGNpZFPb5tPjvS51Ih3OYgH7%2BQATwdPd%2FMUH3hrpLihxAC%2Bhd2acNTbpoKYnMkYNhHtOoV5YnDC8SZONlLo%2BGyUT9SB1H7ubp7Mv4y8b2mRJk6u42cTPeSpRxcQG6XchjCKEAVWLHBLYtHrkKISZ%2BdZzKcuexVmNzNxTgOowgkJ4rkuSZ%2FNK3ZKwMQm%2BTGMSgvna0YNsaY8D3W%2BZHmWN9DwKSGebBnZmsXSOtpYZ7ByTpgSvNoL%2BLdOVDqZ3vte63EMNwSxufyUcpDqZleyA83WapwKvxKyaEkW3EcaE7lsgc1qbWkDtJymDjjzo6e8Tjluacp4b1tGbhdhdqMK1uopddvrB56HcyHDwhbNwb4PWKi%2FyxilIRL8O8%2BVF%2F4hFE0UFpVeZXAf6UIDpJIvAJm%2B6xJBc23bDnpT3dBoWYFRksPYCI6ot5gj37lwr9Y6eV9BQzQab5SbTDM5MO%2FBjqkAffFObL6RUn7MLZ%2BzwqNmnAD5NGHMAkZbqdGMiFK1FWIIk9x8OOUE%2B9eWM6QotV%2BpVsBTgseFfUN%2FceUBkEij2E3NErFjHgquFWUYBwWhWNmyp5pzxB5uSTxF1u4DtFlk7W65UTLkBALgHhooZ6uh2zAAkqK6wm%2FpVO2uvQDdNKBO68BQEGBKca51Ok8HVn1vIWrtqT4MifhHHPPZzcs1%2BVuCYnI&X-Amz-Signature=452a2808881d8b0b879141ea911433ede95f752d5b9135da584414a4dcde3b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
