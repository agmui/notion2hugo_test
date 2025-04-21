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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJI3T6R%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCICSpw34bHwuCDXLF43JFXK02dfUWmmRfhLlgMtMg9DUgAiAVm1hNRU0N2jrQLfJB3rJQiImu1ouJgkZ%2FptCYQnBJWiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo5eqKWQrGKfKftoLKtwDltfEGlhMCDnAR4tB369JIqHdA52tb4TmCMZh3oTvUqQ6jJoh2n4pY%2FpZlhjOp4FuIHR9DP0FnLSMNIClZQTF0hXF%2FjCxVBZRN%2BD0BJ2%2BTCUXIlIGzp%2BSmX4upYMku14t4JLsA7vtO0u6qxg74dRFiUUAP4wbaxSMYDqPiGoI2R52VjX%2F%2BEyrYQZfnLd3iurwd3wMgIJsMOyH8w6CUFa26%2FaHWKO3QW3rLKmPEeVsSCp20vkqoCymARV6pm%2BQLouadby7RNDlv6HsTKJSZKAXYtF9wWui3cphKEkDEQzQ9PqYxcb0JVfIkmFdVEQkrS2b%2FzW%2Fa30vXjf%2FKpHDFDcO2MG8TxyagvFsg9CvQkFN02onDjLKJOHrIv5ZxHKC0Dh9Mz37t09Nu2%2BFJYvuCrii9p9mlBj36pWB%2BWEQlWdUpjYfEeBPYBQI8fHNqIp7xRKVLXNSLjiuDidY3Uma2DdHgMX5Tp3pavgC%2BFc09DRuxSt0bKf9yZZJMy88cTwVvFOWlxrdKBADR9vyezou0FXl%2Fb4eu2%2F%2B8nucL20%2FH0Fj8OMcJ4PK%2FGPKpRoWlahQWSvESNxOAKTWV8WsKLPnLIxSdV%2Bs2Ju8mZAZVSf53RBBNGpFkNov78mDH3bMNRMwk9OawAY6pgGPgkfE7JiOo9J1VbpQ9L8tmWDhxa1llGc1njWH%2BdU7qwL%2FLABXi%2Fv0PdR1ze9RKBvMHjqLnlBv8qaluWTGWaNG3lk%2BiOZVmSmy%2BjBgl1AkgNOxTa5cDKIKixnOCg2JPTEHLbH1%2BMPUiWOci2XYaT1%2BzhYjlavKY0zKy2SA%2BXEpwSm4e24pmdIfnNcteHcjsaH0y%2BJUcSEHhlG0x9g6VyvNC6uqE8uG&X-Amz-Signature=25968e8e270e716bf5c749915a5e33ff340d1ff820cfaa8533c4d4794cfb2943&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
