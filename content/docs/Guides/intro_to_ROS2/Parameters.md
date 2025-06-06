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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYJ2WYB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCID0DBbPQU8%2B61kWSQTlPTt0hf0owZ0hKyk1i8WkwfGeIAiEA6M9wvbvJ577xy1rO8gHUBoeIv6MpDWnI8rHhzzuuzG4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIempRqKafttFxKx8SrcA%2FINDigqBzc3qSLbZ3SrUfEbBQVMZrv4OdijEQjt0NSV3vpwI%2BwRUffNEytQXil8QXkmKk5jDaf00X4xXqQEIFJXZ9Jpe0%2FUm1kGXLWOLXCp%2BF%2BEdGv1lo9%2BQtnc5Fxa8w9kvOaiyEQGq%2FFj%2FJxsoq6kLdIRQI2%2Fwe6WJpxyUXaQGhy4vPy4dvBtOSMNBrj55hXRnezLKkaRIkXdQt741F4%2BGTNH6hUKdvb95%2Fp1vU8vfnWYr4j5fElmMBXDN8tfNTEhTbJKPN22CobuH8cSgmVnHa%2FXK8Ng1aJkMnmhfmRQRal%2FP%2F6YVOju1DLRFnPgKsqREsdPQnrFlJyu6p1SuF3SdBzVxunJYjia8ohnqacABpVFk32OzMTUCKv1G1v7stIWTagKdcCLpF1n0vquEvIcp4Jv745lMaCuywmgRQT94XZQc5nFRkWLJ%2FZ374yguEiCtJ0p3Tzj2R8vyV1UmHypXWkLFGb0x204KpEQqHqxyWE9OoohwObr610i7jXXQ%2F6E%2FT3CENvcLCjX5%2FNIuUQvPFnEOUlgkIGzEV0hFHhEtePADSbCSZPd8TwRaKVuaEtT5AuCKWZSviQowKnJBunPi3S6GxHc%2BUoMVPbuYGtwxT6ElDhRH9GIIWO%2BMJTziMIGOqUBpjK5TUbAhBaaBhPeRcu2CKPRP7dMbjMRdGAAfIjMO4%2Fvr0nezuwhuqEJsrkbGZ40RvI5JaesPgUa3NxQH1EvF8d7LHB333jAtgGdgdNOI%2F%2FtPURLAizFcO3HlEboJ1JJGRCb4bl6u9YzL5t3Xd4sXsaYQpfb%2BXICOVUNqHex2KaI5vlgyQSBX1pjCt77s9YJHNFCP%2BPGTeWj8QobbaNBUQ2hkzii&X-Amz-Signature=f3a93e366bc1bf6abe76df29619af6e9b1ab43d529a51e820a9eb4da2db79c58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
