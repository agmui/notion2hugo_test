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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUS7CKX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDEWDxdWKKqB%2B%2BPHPV%2FKRittyLgsxcf%2BoGsvQ1mCmR9oQIgIpkmwVaeBd0drlt7TXtXm%2BfZCuCopT8pf4KpMmf2hNAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnYYK%2BePm0pSTPvWCrcA7OPcLAcXYpT1Mvz2Ejy4EOCq95CGAD6LcbOoFEV%2FCkyqQcqpUe5ZnalGGoEMYCAn1flizuiXYCP3QLaXtx1XAQD3zdXqQyEd%2FXl4G9%2FM69iotvJPtCCPhpnWxbGQqLE2JP6KCXflLIyH%2B%2BYKThRUXSVc6yzSf6EfrN%2FlKIW5H5POesLfFX5VEQ3qEnlBu4XNltE1KVR8cVj6IFDmRD45ItR5Fbpq533OavYVoV2I%2Bs9jDJF7XeC5OUSlb9bHNgx3W8%2FiRWgXlCBa0yGs396AEyj6lgZMrDMkTgnpnNH9m5nr1OufZoQLmWhxNwwiGur2XrD91ZqxWM6B0zddTnoB3Lrv0hrHKqOpp%2FtQGgc4r5U4lucatrTzi28jFhSYCGiDuk1QmLpgRJjg%2F2W9JYtxB9diAtnb6KjfsoqIpFhFkyd4WcEzzTRcwLf8YsVUAdmerNnTtq6iWzm5AbAiYcHT2wKmk2oYVWzOkab%2Bl2c0mJHmKdRpaJO8jYA%2BzeMbqa6CXDwo8WAMHXfpdOxFQA67mPnACZrA6NdjnyZ7fq%2B4aVQZYCTT1DuzA2kYEEWmOO7a0qjJE4iKIFkLu3RIyJjhWelB6KhO%2FcjOxM7s%2BCLs6c3mkTEUCN80D%2BXdqLsMJDyib4GOqUB%2BuorvuI9ckgD%2FsEkyyKKqPtlsZN74lGrEr3gYvl%2FxqbDN62phnWrLeTrGeTDNWblSiRbMda0SquHEtSZsFUb4OeVIEeNKhsExnN9PjAjG%2F%2FqDbPDVKMz1HbPLH9ooBi88G%2FsFtuJP%2F23JUYufhySybLXJQFxYi7qzcs4OHKi6sI7guHB0QMrmRuUS4Ec3kuIR0Kx18Z1y85qEXpZ5EKsgSFnYOqD&X-Amz-Signature=738fba191ff11c990b6b2de5d31026c27359dea1c661774ab7e90382992ed149&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
