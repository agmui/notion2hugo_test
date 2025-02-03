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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKIWMSQK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICUxcTCsjrbEu0dxLP8N%2BXbW%2FU7RtWfba2YSQsR5lt59AiBgQWbmB%2BXNy4%2BNXMjDzsUdkNYUZaCzVWbj4lpAkU%2BqQSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM6CAVO6%2Fk3TDAN5hPKtwD9aJeWkgesBqymPtIqyGIORMg1MlMaoV87zECBeg0N%2F7tWM5Dzbz14NtBv%2FaD0fBNS6qJqMH28R3UUGx4fNsqYcAPzlXGyl8j4XVV1zOKToInUiOlEEji%2Fs0hFmvSxsILSvOhwi5%2Bmigh09R0%2BEeaX4JfdZzdDFYoKZj%2FG2%2BxiChTBwg67kpNQvd9kNTvBrRIklH5WwpWvKSAY3n2pQcE77eBia1KPHBLXDGzQSJ7cZjv0U2E9EVh3MCmrGsZ8IxOsaDAqV0Sjc4Xoh9RruSkTnzIPNJEUgzmuBhgxNSsXoVXmvtXo2zMGQtQsVST%2FjAt9%2F138wJO2r0iy3wWnV2kUcNRZe7xbeb%2F5Fvcu10%2FpOobUykPuk8%2FDT1C8ejO%2BvD90C32ZEzfd8hEJLp5Ttp6RiSgw5%2F09F9px5t7mzBMd6yVhA6%2Bn9oJh6Xrda4oAkz9ipcGxrSak6CbMS5TfnFr8HikJmnjCewLbOZma8fxkpUelHJrNd%2B%2B1Rt078ZXfLnk7runa%2FslOdU1WVV%2B0XbJKN%2Fd1NRTTDYGXZxY20QZRMdWSjXZNrYRDJscslTw0tcxouKRdk2PMU6IlcjSB%2BNZHHEjsN0TgaEp4yrZWMrcX8rJSquMpjKQPTFFJFYwvcyDvQY6pgGVvfvb%2BijxDxup5vC1lxeitVvCL28eWq5rBznft0VyE3romREfaIRIV%2FkQHERijzf%2BGh1xlEXj%2FflbIbeeiCu8YZV1qXcHRSgPr6cLEYZUYEUstplIwYcjzsWsIQNp%2BD8GyAPuuSveI7Jid%2BfhhsMvlICpNULa3PREQiCLEVCQ%2BcooqLGoxDDxdfSmxVmXq3ubPrEW3Z0GWMHSAy1NEY5va1IXUBdo&X-Amz-Signature=820d4020a7439db8b4a1a8e5fca08a5e54ca951b5036a5357d5e38b3bfde9702&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
