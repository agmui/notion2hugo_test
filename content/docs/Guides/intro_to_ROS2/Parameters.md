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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXAKK7IP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIihLlvfW2A9NFsyWQdyT4R1r0L8OYwtNKlqiOhdk9wAiBkQq9pVzL1PdtDErMiaNbbnlO9mbHb5uT4oVbqoyhuhCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMkc8mBlsgxupSePGjKtwDsbfLDxct2%2Fkm3AnYUwpZpnkrGT5zqB0ZbTUo8jBmQK1H3lelyAui5JWPOpDoSjNTXuQp00mn6pjgjGPFp5o74iUbtMQrOodgGKKp8m3BpPEzK39HaiwCuYvrDK4rMqCGVV71fPrInuF2K1CszI%2BsraWLsCmdHnEDMqMCy2yOHBKaii%2Fvt6IxH7X1rYOKUXzI%2Btzyw%2F5nrNsPjmwxBIiScSdAlnS%2BgPxJSbrb%2FEn3jCmstc5duLuBy3uKOleKuBTlP0xH085rVB4MUT8Y7ECr6p7gTjQyPWdTwmQ4c6rMJhJoEXeebLTYrOcbqSVkx4bB17lU21HfMZIWffh6P6iooeKZtscJ6L505Ydcn1PiOnq6rjIJ0q2aQ2SUD1yJnbaKftiwl9Gy9M105bdy4RNRT4O87nzCGETnr8%2FLOgelUCHUEY0qK6FLGFFqHFC769Hi5%2FATs9TNH6hLtv%2FFOAuV0uD0EBrt9tjBrZuDsqVTCcu2HARZCV3w0nnOF2abqrvl%2BWsaHIAbvsjk61aY9U5J8KUq7Wm3Hjk%2B5eWczCQThF6pwNAo4MwtCWD1vS0I8TYdY9VW9gJr98mxNot5sY0I3tlabWJB0IH1sY%2Fw5BXtR7dRDIL4uNceVgo8gxAw7YWLwgY6pgGi6BakmmeHvCqywEJFFWdgBe%2FtpaoXeD90Yy5NxOXECzaNPnmJrWU4CsNDqEJUCRCPuEDenHDHi5pCTJkft6LlFOWXjyMoAfAo81niFGqUoslsQQ%2BFffkIpa1XstzEBhuOP4PclxQSl8Gsv6RoTHXG%2FQlHVndDFIewchrpJrQGlH8v29HCDvRKxHt66d2GyBWP2bDuDcxaHt32dRdiW8BfFP85%2BVqj&X-Amz-Signature=c53fbf8e812843038207e86ea13d81606d08caa27e8db0b5df0fbeeca5f16d57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
