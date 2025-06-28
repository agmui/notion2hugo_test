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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DE77E%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEboWMscfcLinL0WgktNdiFO4ITNnXnKjVqnh0Tod%2FXJAiBpn%2BzSBQQQiUrrkt%2F2a1dJCMVLhT5l7eiw3SckJ6l9xiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbKZ5XbsnYRBbxiEgKtwDOYKz63bRt3T785EaRMzN3WtJUe40gNlBKR9tq72%2F9DLWzAwzRU4d3V1XiERyHzYDuTMv4wUwWYA3cq1dSCv3EZ1HHJyAVaZVVgzHdTo3aRok7zETr%2BIYA3GnIXDBKQB%2BTqfb%2FKcqktQxGmOk3mf1RynRYqKs9ibWuYwN03eKuBk%2FIOrY5c0shRAKdcRSeh6m8ungYCiGKLn9Z5KT3IAaaW04bhYGpuUDvCH2jemNke%2B80cI1xxMRmn37mEus2WbDOPvDZcX4F1jGBR0xKgdyuJVCZBi0qS6PQ3rCh8e9driCc%2BR31cYdqcyFwG%2B3ZSbiH48lxfAjAc6LICsOJEx1Amwh3WgEBuuEibNBmpn4INJlOvR5Uf4JI9PFTMn4ovT3YSutRUGbD8I5nAV5J8Sr9Qo1L83EOqpA0QD7E0izjjVOVZWxTAdKO78fqf0X6tp0S0FY87B3xD8vJOgVYawabDw3Y5nzX6FL1H%2F2RG2C1v5QnHTaS6QZUtSbJpSzBjdWiZ2km8vbTo6oCtBiGSdW4n37s29FebHHg2enBh6dweUJbLIlPfIppO0r1jhcb%2FuNHuRGG4eAtDA0JxS1NqYao%2BabA3ZzwHXDfsnyKZE6SdT0o%2FCOhtTwRQ3wVhsw89H9wgY6pgGfoTe8LWK6gb8Tm1qUCpo%2FcbWGcNKyaB7xxRndC1gdV6MIOBUzqIXaFC%2BjmTZuhYiWnK91M%2BmEV%2Fm1WrfFfpbkphiqs3SXxB8S3F2UgjgyO6u%2FooQygRZEuaitfcXOUBt2G1WPiUF0mM9xikEmKjXNsDxTDe7Hnph6YCEnKb%2BB80iG1QmqtNur7hYbKVAln2uhP26U4M6ilY9%2FcIpRxo%2BQZYNFpaG%2B&X-Amz-Signature=57c134c14a4dd7e3722ee4116c3d6e0bfaa1140b200178fd1bb3dc03ce2e7cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
