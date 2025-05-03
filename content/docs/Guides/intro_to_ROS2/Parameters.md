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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDNVIUG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDqHscIK61MWd9%2BMiGdN47OIDn62gE4lV%2Fyz%2BN6KDmqAAIhAPzyqxNwKv8%2BJsXVU4iV%2BZ4O156lPQVISsy53v9%2BIuqAKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYHwVxNoPx0pNP%2Bnsq3AOe8khWQOPxeJaXAsbLcF5ZtWov4smXIs0OIFkUYOOsVEuFC6wAC58SD6lDBViihtwwzMs7ES%2BTnu5dqNx9Fi3C8Xz4Wk1KF6Vy1V9tMfm8kAF6ljOfAxZZMzuierhg%2B1tjedTd2geOgurq%2BDj%2BWqeM6iQsfzkIP4cF%2FnjALSLyHFKPcEhX1Lzwvdm0GHohSl7VR6KwuacDE4Gz7JAUSwfVVnT93Xj0zvB5BXwoAsiXrtdBox0LVGRy8n1WMfJdCpe0ZTWY072OZ2dB%2BfC2NaB9IpIsDoWhYVqCoXumE6le0z4kKyztcFWik87EMElvcA0breULJgzJWjO5yHigQBU%2FhunJJ22q93nJPs2zbGuH4wI%2B%2BaPTAQ7SqDTV36K9t7VinPuKLx8IXzsjfWs7ubFKD8XMp7lOYd3MZYFm7DTA0eM3fN7BnLrNBYzj%2Fyiiw7rrU07SoQS2Xp5C3e3FOgEv%2Fk4IMHWRVjSLWx6s9WR7t173MyIX7TdWhpkwTFjhgp9JoMEqKV%2BVc4A5w6f1hr6bu2IZbyYG1XGbZ2%2BN8lxxmOIxhDRDspzwknZLMTRnSAnxSKBluL%2FO6aFoovXZTy7uZMJHMxUEw3aVlgWOlWYRlOkA%2FkRzCXm7IoKT%2FzD5htbABjqkATneBZCZTK7eXdcoBLKfBMatQDMucqfAe60cKZjFqnyLw%2F65adys2tBnfU8DhyMN0XDPTS%2FcL4JL5Bs6Z68RPXGbHRn8DXgDCC1h27KxrKxWQ0Tzn3YdeiXi1PcBXN8YXZAaMIOqfaZwPypioRZgdn%2B58Ibru3LUslz8S%2FUvrxqYWo7s8Yiz%2B8Xrizo96L4BGIrlzbRSyiRaWpesn3ESlWgEODHn&X-Amz-Signature=b43b074f068693f54c69986f8107a110a823c0cbea27f7ff24df3d80d2d5334b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
