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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XY6C7C%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEs3gePG7d3ooKAdTV2CZQMxdTwfotw%2FPHrp5iGr8QBgAiEAkUF6GvdbJBJBrugbqc4GGyO4zXVjn19akHQgZ0RB6%2FAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYY3nF2gtvHVJGC7yrcA%2B33ooHi2QoRdQMWIdlVKFvIBErfvdvEXsCkPLws4kVTWH5z0w%2B20%2FvjQodZuDAjyYcnVz%2FH1Orzu4Ar83fM9gRnLREBnecK4uGPU2FV9zmv%2F%2Fq5DGzIpL8bCUYgP%2B8PgALhlTkpOCXZrXfk0lIcWAtCQUxKjLtpjvePPWFvZADAiA7pVecqVdUXGk789trECYPSOazqew5Fo1fO9t3auYF9Sq4NTUdkhnv2FWynk200n2OQAyqO5dPUwtYju%2Bak3IHarRuWchxPTE0adnoqNjGao4qLoj9vz%2F%2FpOIselzMjc5hi%2BBgKvpF0BzdioXO7sX5N6uGKvVttwaegG1w4cvDCqwur9pQt6jJWwG5j%2FK6di9KglngZcPB3txZclhdS7z1Xk3gyBucH9BL6ujaF0w%2But1RtWs05vpOiAQYZdnjKNBZCu%2FIyg9OXUImDzpvQEeqWFt6vzAp2tJ1%2BglY4eDvMUU5pBYelPiKVFt4tbaI0rhotda17W1sEgtEt0ykR6RrRA0cRDfRqKnSwUL5DS2VgsMGHJfpw1MnEVKi2344Qp%2Fh0GqqCw4AiRwUMcfUWUGLSJfq14NsN5S2ObAXMaFMMd7nbB7sBiaUAUTr26PoIDV8Cg6qRK9IiKTf%2FMKXalr4GOqUBOGGnWlep%2BxJUQnvRFOEKAOmloY%2BFjuB7my9FOIaBuWfPyJkuItWuKr8uew3CeB6d7fbGOJvk03lP68FgS6BWtG85lX0Z0BOmp7IrLUBC%2FBNaPPSOafba96nEvoFZ2n3ruE1aGSqThHp%2B6zbfm0Tb%2FpaC5ze8TlpJeMr%2BNEWXuXQZ6H702MGFLmpHSojNCIhDj%2F89SLWdfs55b84VfW%2FcMcxdPEj%2B&X-Amz-Signature=0ccc9655118b15d6c04e4f2bf201f47961667fef87315dbf2b727a26a52e9324&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
