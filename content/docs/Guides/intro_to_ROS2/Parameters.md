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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFOSBIJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIAryh7b1IfiqCxqVPt8dJ4IS2auLryVHu3xWhBWLYK4pAiAs21bV7n44irMu%2BFdjSbHjXsTGU0KPTvIftZjeWhFw8ir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMaLBwpnyRKhYS66ZWKtwDF9acuSmC4VBfqQ98AUPbDR6L3saqYzQx3kibGVqRdev61lryVLbjdsjTT%2B8sYO9qHW0muoUfPJmOsknS7ajJ82YMOA9pqze%2BqVvmYiZApk3DqfQeCqGUl%2FIorKa8EGZXUKQ6US3bR7G5bLh9RzVOU6pAfYNGktF3MvFsdALgObmMl8SRqtfGq0Ao3RZGlr6%2FQPjm0FYRzOpBY8BjajU8tISDhzyrX5CfuonLneaul2GSiM05%2B4Elkn6V78NjUiXTjcb0RbXy2ajSFerRXGw%2BsvZ1v7CiP2Oittl%2BJCMUBLkdbl5HLjcJnUPPD7NYf2cu%2FPKEdx%2F8dre3%2FGE6KngR8bNOnPWnK1T%2BMkx8tANL42vjtzt19vYXi0cuOAnND0Jr34MF%2F4yu8%2FXvthK4gSIeSK6ch9aOeVC8UnoCKT4iZFzejoah0cu1%2FAh97QUO%2FOGoGuFo%2BEq8PUkqEIcmUaTHTBC1RlHelBX2SpI7qWI3JPDsODmRmVquEFYYsSMlFzbXY%2FA8RIuLgha8a899Sx3Z73bjHGP1PXhqGcRMnwjC0kJ4VvO2Ttc7iwmQrwu8z8mbA7VrVzeIqzObIFCV9%2Fx2%2BhdP3C6Uap7YHst4etNCH8Am%2B2SjWvyyqGY0rYcwq6rRwQY6pgE2if4fchdfk9zN%2BrVheFmbEHvx9JhPyppOw5Ax5TtXiwAhLS47UyFxVTL78PPwnzGQE%2FECU6r%2Fqnk39Skps59ciFBYYx6atUexm%2BdE9EVRXautN3cpIVoqS%2FccWG2wMo0M2VZD0nGs1EQSm0lfZ90rSTU%2FaGP5CKECKZqZwQhohH6Jh%2Bv4rxt3cYTX%2FlCfn352DV94h5SgB%2Br6gFK5%2F%2BAkMzLGJR3E&X-Amz-Signature=c448c77248ea2dc51aaa9c5389e1659a5f13e0c1df8391761682642584714106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
