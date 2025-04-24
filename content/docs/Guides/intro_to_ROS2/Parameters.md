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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPDAHPE%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSS57ZyEaI0qZAux03eT1FkhvHtzRqIhXctWXR4NcXugIga0oT3fnssim9h9mCyZzCI6nFsqnKQ%2F%2FncMXsdwtl2eIq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFd2j1%2F2w%2FklsHUeYircAz9rsJf14dpboP%2F3lAE26EoO9iogH6zibPqHhheIYjyjbwwR1ZM65386J7yfqDFTLpBewQJy7H5NJrKNt9yBrQpiJnmA9ZkFyjifMcWSygVfFm2cFe0vO18PrAnytKsuWuZNczWhM4ei6IYuj%2FFVgweXIqAC3Z3jFBlaeOWboAHwt0OZkjP2aCUZ4GVYxagHSaYl5LeEaiCDDOza3bEl8MQAzcYVPIXm1CHJ6H0k29lOtLxF1Vrn0ESqV55eovoHEuy2wokC2ZhdKprI57i4mj1fHmLufYzJguhrbdGMaq2j189Xr0kYfguQhcT7CxGXXSj86XZXXR%2Bc3DbZFJGF6yASXidqelMyprLnCQTVAFZ4rjbN13aMah8nTrbsbWa%2BlADRqYAiv6S%2BZnwsDGFJngPnvclWCdHn0GhfqAByioOhVSm666GmRXBz3dzl9A7daS1dVqI3nXiC3Vx6ePqV7qTuFFsHHu4NprdyF0i%2B63iZ3kfY1W12tDGgKl0rSljH0K3n%2BfimB%2BVtjRde0iJBRUHVEexFAVYnv468a2jbYtO9LuFkDYq9x0FbdM4IofXCg0OuJh4Z2b3NTCfAgB6VcTzRnRj24tk17MuJB6j3zVVfCU19d3xBqwIXhHYUMKLbqsAGOqUBCKe%2BzqLeSA1VJeYZQwTKJdNGSst96CoKTxU0b6PB8VlVy8bDQPUkfclTQINVuyT2mpQ0tIP4n9J9DRpjh6IKvNXBB2SToDPDAN84nAHaGspG6oYBVFe%2FyVdO7XA4LIVJf3%2B9EthTfcntPQY4msV7ZeFBE0UCNtsHuQTJxTbAk22WVURcXsLv4dgLs0p0X%2FCdQpfGGUpJ3EExQPCPdUGMnSMLhrq%2F&X-Amz-Signature=453d36ab3beee8a5d236c6436318311389221b9ae74e0400fc8be9f8866875dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
