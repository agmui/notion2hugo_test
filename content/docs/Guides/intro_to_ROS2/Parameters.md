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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV47OLQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJxLJpcRcjzajSGZDYPADi%2BTz3meuZc7PHh1eauHSTOAiB%2Bb0USgj6Z3haBsnMYPpHvZXM0IXWyue%2F%2BggsEGKitACqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhZJTkIHmMq2YLpgOKtwDMIOgFh8iyX0Qa2%2BawnDj%2BXRyILXbIDq4TqSj4yE5HU9bpHMclybwcy2x1sFQlN43DKfcjQvQXY%2BlxM%2F9FC4ryY00p2dmXA18uRez5W2PUfpN2F26zYTxnE2NxFJYuCqdf7BJ0wtyUGUGalCAGbhhKFCmxHC1GNGVdZUhg%2BQpqmZ7E6KcKpnkyY1eqJlcgq6x%2FxPjXuzE3kPmT4lHuvVURsrAB6y36uRDnZ18OhD43xjfw9BsNRwqXwarSqbih8k9zNimOv9buZVmJpIlbTZdFGLgW7ghCQWkHv0IGpvaD9cT91GvZTh2eTcJF2QTHMc%2Fwb7ScsfjeuY%2Ft0PcVgFsBdgn0ct0LS48Fj6G8dF2ceaY%2BGitjqtwFbsFJXSsdh4CXwxVBGMX5SE%2F0eu7NfUeRE1Mt%2FHlcqPCesrA03UJssqA2jAUfV%2BdJLwEhPcdtPqMQHIHn07d%2FnTNfXQw45i79OT9D4hzTTbBCwhXUYsox9TLwhRE28vXKz5a6eGM07K8B%2BR09jaGXPtfRy2bPJsOtNTyDead46lK7sl1WcCprG7Tv1Q5XZa81kdOMztq8efxP7%2Fc8fbtd%2FaNbV%2BfZY4llxagWmmqJ7kAn82p70YQ6ZkF4SV6pmVg3QXjNBEwz9DHwwY6pgHsseWZ1X%2BrYQlwECb%2BkSNlbPBnkjvB9%2BU40iOzp8pvUg4GxZjFHBhOkpT5hGQcWxM%2FX%2BZaQ56kq79cMa%2B3ayf11dKr4c5p1VzJmgljplLvzT1wNfxEXLO17DziyNaMU8Uecp3HcJiWfvx94eekd2Hd1Rb%2F411zWewNKfgBVkJiLmnTbjvDRBr32XWfJDYEfutJfhJ%2BhWR4Nm6Q31lDPXyoq4bCTak%2B&X-Amz-Signature=8ddf00bf9abb2dce2ac227f131385252d98371c5c4a0d91cc44f5d99ef623a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
