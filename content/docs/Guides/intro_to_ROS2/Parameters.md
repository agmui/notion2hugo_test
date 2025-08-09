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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRSQILDU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhigKIHfvCMeOMbxbymwF8nwX%2FkT524rXejGo22XO5SAIhANW2rguBc039D6hDJ9B1akVH37KzSXk0TNM1Zz9uizVYKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTqnzh6VDp2hr24Mwq3AMd8BMpVImuY9Xpz%2BteGTO3f08%2B7lh0ynqI76bq8gMQnQ4jEfTq7KM1%2B6raqZIl%2FHYyEJZyijd98XcdJEDYA0QtKx5BK3fdAElcJe93DORqWHdZymaIYkt3BE9%2B3U3e6Yu5qRUSZL924JlscW3I1tL51r4Kcih51j%2FYHdSEbcKPsk40%2Bj%2FhlPthT9Y%2BDOsKCaprgvfM1rvX2L63osZWXCj5wErh8nBpdn3PkoorcIvJ0Sd%2FacyttFhRnJoShrARblKRG7DK17QbY64f98YwesqjV2GRBBXWQGDPzH725UyxTIe8TnufuI1cpt1w8cXf7WMLbTHB63pd6v%2BhSouqkuWyZvEU0tuDTktA1mdTXaM0w3P9936LUwAPAgOMKL%2Fr%2BXKAs%2F2hqyhqu4kNxLfYF0n6uuyBGe5ivALAEeY%2Fvarl1dBnE3qe9qqK%2Fpyyy6sHOdYGSI96%2BJ53evGzZ5vNRz81DwgEWHRebskKTVseEOTl1kThSzImiqxU1Gdu6P3xELZ3vdPPJWr9A3%2BdjQGNqybQBWjpJhngOQgpNR1iTZY5r0lOZV2Ms0rJTDVgl0fmkfGjRDZAzE6yGZDPTGH9dr4TDvzcUAdEFKEVKQCB28Fl4gwLgkclpZIkx7ryKzDxiN7EBjqkAcRf5V0DcZu6UV%2BNXZVH3EhbRjGGVRjm7vpU%2BLJyBlCNi4WyTvnxoLw1nhjyXiILimwz%2F1xIZHHAbdiBYK6CfsW7NY4lE8Z4kU7BTy4jYyvKPhTkvr3HnU75KP3MehinlvCXc4hhQZS8qHhQx3RArVLTfmrBzpCZaLmVU8%2BbzZ%2BZNlB5pw25sXKY1QQxA1C1aGdtf0gWzVVIdBYkTl57hAzaomeO&X-Amz-Signature=3d29b0fc90c4c117684d15ab4ecfcfa4e89b05630a8ad3735299a7f525ee5472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
