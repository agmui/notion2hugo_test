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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGQVKMN5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDtkALaPpjvErrPnW3nC%2BQVCu03cwAVdt0XTtMbG3UPBwIhAMGmfTup%2FVDqSshdzdyTqGDNKgb08r4PgjeW4B6Gnq%2BUKv8DCE0QABoMNjM3NDIzMTgzODA1IgwDe%2F%2B1rbZOz0n3AQQq3APRssTt7nOsD6XVVzzzGJLizpVlOBR9UXUenDLLv7%2F9lDwsM%2BT8A5rUlfPZA4WtesPVuIqeURm1TB20tHUj%2B9I9R8NphP6kiIuQHUzK5C0ItVOzKlsqP5SyuJ1Kvkf00uHO8fQQHlvAP98FEpuIboXHAMIX2u51wmNqaf9hzOhnrqvg3qE0jwIQWVpCb7J%2Bx6bk7fhixU8Vzqa8XDBawXQXSXYpxI%2FShdS7P0Vou3%2BpXrGlcw0tNBXWaRzS5UCqQOSJikqvpRxDFpSoLeuBAnmfPcJ7kFxKmV4Q2XWEU2%2Fsinp0iWz6R7X4drAf6qRetVB1pYQRvWTVJEvV3OBrG%2FbVxytg5zYkGgMkOATyJs6YBVKNGVeJNH9Qs2tZAcoiaAaNfqV%2Bf9BUh%2B0L2Mz%2BAOdH8B%2BKYFcb945D0YIwFKdfhRg8uSrdzKlhyKx7H6fG4Do8StDK6HqgSP44wGGNqfGF3qZw8G5b4N%2Fkpoyk5kpHpCt%2BL6r6Un0%2FmS5xv3y4lFQOhAOZAfvieuTL%2BWIfOhAPXEF7ZM2BFXuB2HNFA4p5nHgolHwMPi939vfpvjNrJpOQ771g0jOEZ%2BpbIlCVCagEudIIpFwomCf6tq2Tggm5Jz0nMQYIQHli9NNH2DC9zrzCBjqkAXWLr9EfIGSo%2FrD2qnbIxRjzBq9wb5kZwuHpzLsPB%2Fi%2FGgHLNLZO9b6HywwIdLSxM%2BOe0F9SCDqFtpdZ7NrmJgt6bxiW3V56ZUcZ8W5j3wnBEIQlJxB%2FzYRVQ%2FIwiXN4STqSc%2BcsS563Rt73o9DYY7uAGp%2FfE9PCQIGCDc%2FEWhw01WdENqF8SCB3SC0%2Fkc6iD3Yrqzd%2FMTczsErPYZpudUInzbKe&X-Amz-Signature=a656913004829a3cbbc93a71343f5b66d4a9b1f211c07922fc369a4848bc5e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
