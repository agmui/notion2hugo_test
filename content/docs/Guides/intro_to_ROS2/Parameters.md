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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TB5776%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsEgAwxxVYEtRBk4iHRG6ZjBxDosmllF01cYH1nxP9uAiBFIvMJWu1YNci5ufdvZ4MRSNkgQNLkaX9dVaoGYHxv1CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2Bq3SnQ01TLiSos1KtwD3IxOKJ8N8xRbC34UrPFEEL77ytX2ONSEujT907IEMLGTZE99D2ultIEKezZvxoLhQlgCl7UYbY1v8VOp6qEju6gwy4HySf%2F3NsGdkcgLBXXXxP5GtBk%2FJ7%2BixROSKIQjmpFL787Ah8UX2FerY1sosOpKQAFgc04VTBG%2BvlBmeMKwE854%2BTZ5SF4s%2B9vl4RSHhAVO1b69GEpFO87yV8RLuuWq2tab7oQDdhXo92P1g3cbRb0qOq4UBA4%2FPNx5K7F0eLqg08CH3Okbihj%2B1cQGa7O1ofO2qPkUME9zol9%2Bk5wXh7%2BZxHdGVAduOCyHfGY5bIuO1l%2BQE2CKXdzPhZ657oisqnBmRrnzGxIQsmcFg6teCdVPTH%2Bw9F4vf1BUZjfMcErMObVDFHkTL9L3RmX0R4CeKWzp2UDnfENvEYk7j6FZBsnTEjXV9JLjiacd2XsP907RVOANS9A%2F3pd4EdEwsE537J%2Ffv69oy0VvRWFonqnAZuZ46tvyQbFhyBSYEkJ%2B2uOQQ0nqxk83NKh0LtqmG9xDG2jLyRU5lnZoywYpFoocEhjDJJybQ8k%2FWZRsHOCH0CeINGF7z4gDg9S6TUQTB%2FiSONkVjmsL8oWEKhlRCRIWydDSOEQPH6DuSQEw%2BfGlxAY6pgHduKqcRzmYMDcRL7K8mCoXQtcfYr94AN%2FeKFjycv5W0chQ81Ub1xXctRV36kVqT0JBwSTPRbYt78Kat%2FChlSvL60Z76bHlFgDC3kBzD9gOqgww3CRbedeQYlWXgln%2F8%2BYiIKoic24gXK%2BWJaPowZkLzlnv2kh9BAJ4yXAf%2FVTpjjnO%2Fhpk4851pb7QlBuC7GiI6IdtxvF1cTQRdrEue3mgFaOQLvWC&X-Amz-Signature=d6b80209231ec0422e235ddbd2b35b5798cae443fac9265933612d889577af42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
