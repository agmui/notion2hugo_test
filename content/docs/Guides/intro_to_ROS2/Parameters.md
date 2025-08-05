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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NLPVOUN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCkePWpdDo5UMvN0D56b1hNc%2B5xmcepOk6OEtM49oXF3AIhAMAPJHVLQkx95zg%2F1Dv%2FZzP%2B8r4CSIOERi12BoToOlZ2Kv8DCFUQABoMNjM3NDIzMTgzODA1IgyX8PueJ1H1lBVtnU4q3AN24xsiCgAoMI5HkOoA6gGRjLOTq3%2FOJOUuBdfLKts0%2Bx04b7W5wzyP4inSZqSlAGQoTtPBTDltBbtdCWaM6BnxIihey6zjQszBBtBHXhZokV%2FINDMyraHxP9jWfgvUdTl9W5x8Kdny7NOptXZu3%2Bhl30SpaNixX38Jj%2FuJf9JTgNGY1T17rEI2WUXMLnOEC2C6tBh%2FPEu2sJ6Fbi6b26%2FA%2BQsXNNfbT7yGrePi0l%2BQFIjFmFo3YUY7I8suUWfGvyWuOTXtj1gFvljW%2FJBq3QkYo5p3XF0uP5bJVG53SlNLziFYVFbXro%2FdNUvENX%2Bol2jIp2ygjJzohSaHfKf0xZ%2BlEHTh3qmGW%2BqnNn6PPVfyU9FhG40X0%2FpeJMOwhyoEpbZV5djEqwuXP%2F8dH5567eTLOX%2FDMoaD2FmG0LrVqQSwHOnOavjRihqa84Ia29SjGYH6RCqF1Fdj%2FoTmtW1yOSc6MTneG0sh5ySaxv5ZmJPORc5Gfi5VPPTDmdfd6ibimdZ8mvZV4kO10z%2Bv%2BgD6we1SVExyX2xKGCH9R9%2BKF2CYR6bJ5dvR%2BCGIPaoyDs6hIp1%2Bu6iMgAsfTCV7nDSIW1EmWOlbBGgnGRLWXRPBVLuKAmk68XvCa%2BXqQ24loDCLjcbEBjqkAVXI%2BMEAOHcQiGF8Wh4e85D66VTDwL9xFLLyCR3AH00fO2pFVccx2oZPTLuNzMf1e2OBP2YXOxgK%2FAFj8SE4KLxydcTur973eNLdB0SztKjqzdQ2QEKn3qsMS1SXmRVn8Di3gNCTxx4mwbhMPmN7i1we1o%2Bmjbb%2FjXuKlc1VySFCsX7Eu3oANWN7dUEm1Sdi2DDs9jZaS4Ty%2FanOw21DYoOMFpS7&X-Amz-Signature=39dc562f4f7cf75636b3d7d5d3bc309564fe3f2b8baeed64d1e0a5d90f661a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
