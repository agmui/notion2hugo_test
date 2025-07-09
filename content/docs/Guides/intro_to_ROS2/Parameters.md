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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IMMWLDD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg6ePZun9AzPQJn3y0EroOPuwfQ3cKAKiGkjKHTdIsaQIgCq8FP9F4lVnWkLNJU5cu7phg%2FNKJo7UtsL6ofTP9u74qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6lspohG7%2FS2unmFircAz3Vn0rP%2FopIPiMYkXrT21oThh0454ry00hWPreWGxSGMsR5Tj%2FY4UJLh8M8G7uOQVI7fC%2BQEWRX%2BhzKSKco7TQZyzxghi%2FrRc4QuBR8%2FGtPFDyNRSlXAHnCeJ%2FidyGyp%2BY5Vv1l5OPsWecxF2Ygvgwmzlmx6bGOQt4cKU4GyMfMmHe%2FFQFVduoS3wtgqYb%2FpTpX2shZss%2B8QdAysIAchRx0v%2FFkMXMXTKk%2BHkEFyFcq0pAykIjCYjsWzeMDBPmOolVmia6tbufefYiWimC8hvbq%2FhSsGpa6uR8FcGAUFEc4gDrjgmABUv928wCkD6TZxtEfPJ%2F9UxlfhNR47W%2FafVKS9TLLKntoJezZr7fXd%2BiqRYw2Y%2F2CJlc5GPlH5Qjsankxx43jmFLJFBondpETp46q4df0Okk13FwTKNmkJuT4mV6xVg8YI1I%2BVcXSEhga0gBVMb7vV%2BoV2789VMprKTeqbcJdNtrxqAoHUn9scHQWN4zUvzjB38NYSANSYPT9n2k4O9y3FBdGZzF9xn7wxQXMThFLnLCaf45zZ1ZOVWavsqiAFUBUioYP6Ylm6FXDY61BGpPXq%2FFIHO%2BWgDUIYNkRE9d1K4LMUzD%2Fn3S0BJkzUL%2FbdAbn7E3LrTG3MLHrucMGOqUBcSAcXSBkTqDoE7afrqzZugPC7sLX5JO%2B%2FEiY5ZImrtFUIZlosJPAZ03%2Bv%2BYlxdAeU%2Fktyw7ISgsS1z1xXNWvtR3dzaGtuXSpxRjzh4zj0KVovjjzFjhn%2Bt1Mxwkd6yi7qYeoi2AoyuEC1iHmMQVdbaE6ZFVQrLf45XRVGseHae9eylyERizgcma11%2BcECYi%2BpxVdqmMSn1XUjWpPL65vdcAc2z1J&X-Amz-Signature=100ff1e57a9767aa02eaf142b945325e0c9be9489a4f9b94cc24c721e8b21836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
