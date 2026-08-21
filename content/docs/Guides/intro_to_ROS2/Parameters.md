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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHCQGQV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrt%2BrQIx2r5mmzjzsZg5raZlpd4VSwTQGjYwNnd%2Bo4KAiBBxwnP32rfhskFcHw6Iw1iNfxzbO6nbZKoRNJ5plQyxiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYolgzLzj7xqXkZpZKtwD1fzsiLRweMnyex3%2Fx8iK6%2F6dMjn7ZVER1vH%2F3uzHhy1%2BIL%2F%2Bx6%2B5WqixDNLHO5mBRYYTWkFP5zzhe%2F%2B2w%2FuTVleOSVQjruj7nXcx6p7%2Bo1sTdOphVILOxz6uavr86KelUqE22l2p4f%2FVVXbwPKkt9CNB6PXuRObszuoKZHR6PHEIm1tNOEqRQCm9QjZUw3ZFbaZwRA2%2F0it22pHSiVwnjYrlUg%2FmsB30S5P1tIRt4GYYrdL0huiQCuNRpUmW9thU5AdXNgyIIjcLX1vMIPsFURxvgJ%2FSW25RaMqKP85SjLPH8Ldto5um3OxrO8NTjcncilKsWMU29JigGuiPr9YrsmlUZOyz%2F0kiINtri8raB%2F%2FrMeySbcXSHYq9SPDEQUlvnmvRjJFsm0ja2EwtUh4IASwdOyQ6VIOqvzEhL06xIFImdygHsENB5WP5XiXdeC4xUmG6SP93sXnwn5Ok5zawmhG5zpIWfaOAdRqJJXDYcnhADA2VwjeMGPte%2BcsrVlRA5MaJITrU0ycJXuVxtRLtdR0VTt5lUDIb4A2Lgpv6rnJoiwU71XlpaoDBN0Ph7551%2B2r0puIS3zV0CKKWG0QutiU7rwMXELZbjj4FtI9%2FYpLVMUtk40BZ3PGaRIgw0qye1AY6pgGLXvXENmzChD0TZV1PgwHcs6M2yf4Lpw9QXCiVZjL4CENMyL3lJJf8nQ0MWc21s3bOU9JxC79gjj0ZneDbkx8yESt5EyXIyiadPYt1bDR87RJK8fvQ6BqEFJGwyBUsgpS%2Ftemt4wIi%2Bja50ykWcL%2B28dJ%2BDK1NzYGhKuMMh7QLGYloDXN7eBK7mnvbDL5R%2B5engS90paOKlZ0E7aXcaA7b1Ej711Hz&X-Amz-Signature=9583bef4f5bcb6679fde76ad85ee5af791021e6223d29fce5c0e802e9512b84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
