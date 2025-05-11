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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N7TLR7V%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAoftO%2BrVEHzCjkZVCLrUJyTtyB6Hr8qh1WNYi6%2Fjm6hAiBVVYhkpPOySKRA54w0vesTLqpxftkPn7%2FEH5APYBsPDSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0AaWj6X3h4h%2FjEGlKtwDP34fK2gTxo0jOQZW1UDx%2BNVli%2F3ngK0J%2FGtZspeSz9BPWKyjXsFu3fYy5%2BijkuqFT8cYBXcIxp9mKhozKNf19z7kt%2Fgu0OjU8jmnFaUx%2Fgy7CNdDWsX2NYax8ESuuRN2Zs6mqW6jOlUGKcy0mWi7FzLH0tw71%2BkiOhip1pYJygxtuKqr26h2EuYyvhxgNZUBCBcWaFrrkkCyZPSn3dCfbwY4LiHRXbp%2FUNle1XuN%2Fnbv0i%2F2KHtf8AiTILoNtMGtlEEGhJLnTjS4SmqD5YdFd9Y086AyLoq1dKfHrZ7PsK4J%2FdE4TtCnIUVpKfvFYZXPrsvjl%2BSN5ZNk8PRndVRSw0sE76qv7Z%2F97spUuCdaendWnrjZw1VXMxmbzyh6NYKWdKQiAtT3%2BPhG69H0AqbGFzv2mMvSoEPen5colQ4gErFARYmg8t2kATrCQwB%2FITX4pKbYxNfzWmU8mWVRzY36EO0LFqEgxwxS8deE3qMHh7kgo8U4hCX0en1DyCOTRmtHyiJEXPUStg7XWINMGeLsgMYoSQQfDr4L4F0baFSuyDhbeYW8uFPwfAxNpRmvH203nUoplKJ06qSyD7T%2BM%2FYQyeolO3OUyo%2Fb3DnOwgb2tMtWM7NJvXeNMWb4rHwwg7mBwQY6pgHO3BXlKaxKKk5OaE7bfOk49o0IJKXd%2BThKlpUg2IDjg874%2Bba0Z2PQiQ1Yiw%2F3TabpLaA9ilccJATEDjlJ8J4%2BlUbX%2FT1jVUsLKY%2BtAVCWoIM7IP0leaI2ZLWxieg7uEBeuSyj8o9ze4W3lsB73bCWGGQ10w2872g%2FbiSKm2wYOrwaDyjF26tXorjScid1DqzpRkJgJbsu9gh3EIIdb7fxROFHkYAY&X-Amz-Signature=9d866a39bb443fb41a46f15c3f020a1bc4d9a661f3af4a8717ef2296280f2290&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
