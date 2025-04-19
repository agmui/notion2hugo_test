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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQNDF3TA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznxdujrc5CMe6LaGT8Qt32aLrk4hU7mpMN1d6shpOQQIgHtI1jBe2nlu%2FvuNtyqo%2B%2BQqJigotUbDzn6%2FwtrzdLawqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7Y1QbTejtdgMHuXircAwucLi0ySjHJhFQXmraUFi6DS6%2BMrlJ%2FClHHJq35G4N7Pmg4ItzQK883UateXwTTZxpPQA9UOwSW7HyfNRHe988ElRLOWyDusyDyR2pMYy6jHU1bm527bgCMzqcPKX04PNnCEMs8dlD8q4E3o%2FeWfy19bk8BQm6qL5RWrrzywE7pjKyfClpaxKu3Trm5cjYuUFXEDjDBH0M%2B%2Fb2DR1TTKCFc2j1enxlHkxb%2B50uW53wy%2B5Y4ria7S%2B3M4iEZhpFSMcNgx0lnHFWPV3O4fKKzDHkpgDCj6Dhm%2FfxY3wVXEA68mxk%2F1Da%2BxGJfZUz7wVP5OeSHyOfbvhPQFoMbwoPVMlkmolprvPqqp1X8ez0kX26YYMl%2BxOHejkbxWdQt0zpoGuTKFa%2F9oFCiRxCPIV6X1ps1Lcv0iPAKXie8URD6zhD8wl21VPXUWPmIsyafXiHI8slGz7hEYQ3yHfCnRu8eN3vDSBN8zLQb9hJfpQwNFB3s4Nomp%2B2QVFl977G2V8v1ugBJhibllNE94n37QfqEiZ0majJg%2FzvN1aB1VXZWiK7cN%2FJGFkxKgjhR0IfWfomsLR59Nlyov0UZ%2Bixw1I4WfbLLFD9NVNGFYYfCbQo21imOGmAtRS05rpcuilzCMPPXjMAGOqUBLMNaXoU2F8lwniLpyNJkdHDAoEbFDzqayy6gQWPP5VP5nhbyB1jl9PUin7cRE42axGrLbosqMouwBP95VuD9HKrMnSn4InOBXCxDeijUMyLiQ3hxMy90JVr4nmLRE0wbXAUq47zjG4Kqr2PKZun63zKK5cjO47QNdwZfV%2BNpSpVIpTfT2M88PdJ1aBI8nn%2FUuTkiye9psseJDLWJUWmBX5BtXGkW&X-Amz-Signature=eafad8930071415ab6d1a0155d170659d5fa72c5b3acf6816fb07616624182e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
