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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOYTUBZM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIARe2e3mXuTYM3S4ytQhh3FSkvrivV1sXcxHsADT%2FPwRAiEAm%2FzTko07VX3Ui65bokk0cgAtqO7%2Bw9BqgBGsPbvmuXsqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfwk2vwDi0BmU9V5CrcAyIlm5bRQvTqj9gzLkNU2QtKXKmFcjx0qO0mZgMOfnXZIbsTQVf4Xe%2FxpN5E1HQVzTiMi5N17gDNFMtyfB9g9Rr2IkPpmXjhErVi5ur65gYOBeYzCd4vN%2F3a2zO1BOlJVlS8nlKUewIcIY6tY3e4FM0aNxBcDu7RVl6W4jwk7ftCToi0cKmig6ZEYU10vfBAxOiXOWJLjt%2BMjhd3EAXr04%2Be2zaVWUkUH0LT2mLaBqAvD39%2F3lUbUQXhvhitwPd6ahQgg6cdHVLHrcdumyfgadJGkjNNpdbuML2nieBfdER8lHtntaQ6iA1zH72gZdaw2JpiqJXsLQqVA3sINIY0H87xUdCRY1dYpHCMoP7kE7%2BPJJMRWcx057J09tkU685wTTTQ5Mq7dhmBZOGy2OuhMKtV0csQiS9c%2FjPoBChiDUUVUj31PinmmJP6rErVTYBl4HJu46LX7SAGRCDuVK7qQbw0DXd0RjkasiaB0pLko8M7QW16XXeUmYaMg1EoJ%2B7RXa46WJERUftfptBLjLSyD%2BFS%2FGmaebfUCrcvwTVm86dE4alTi%2FEksHGksz9yTE4SfJxB8wi4DRiaq2E%2Bftp9U%2FAGS%2FvisPXJW7WsfK%2Fv%2FaH3D%2FhYDRnntdkDzzApMOrSmcAGOqUB%2Fll77mJs%2BYGTSRKI4rf3ufjum1v6rgjSQgtSiIrDSx1NkXKY3gLPCcsc%2FRjLqeqwFJuCgur5Fg2YDNc6b0lSZ46UwpTl9bzGopaRoCOvYq0IjRaGxCTZK6ZtTjIZ%2Bjr5119EBFEYTSSeChzXQh8TnuvEy6ll8tl2kF9tjv3V5Jl1D3QDdzbFWSncM1JjtH8IEnKBLOS5vUQzsd1Cjxok%2FhJNqab9&X-Amz-Signature=e66234fa66d2aca46c29fb8fdd69da3306815eed16b17db13ff2a1ff417110f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
