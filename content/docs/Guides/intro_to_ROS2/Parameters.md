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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNW6TJM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsUCVCm4xxmtgMSidEvCxhJ4EhcdYXRSrYah1M4keWOAIhAJDOcRosRH7KC7pCtXZTBkXTh6z340BeZD%2FeTnxNoj3KKv8DCF0QABoMNjM3NDIzMTgzODA1Igw883IseGVRZ08LWCcq3AN58qPE7ZHT%2F%2Bn1bdv7zxnicJ9z6fWHhNXRpsvhq2IgUbsLReqbUdYV4YWP6jQmfRdSvka156Pp3ppaYaCmlUrcglxTJdhhOva98aIGSxiBTYSn2XgyG%2B6VbCFa8VeIZlDbB%2FsKqZDBUIMhZw7RhEBikP%2F9Et3V5G0W%2F9lzHJOmKko1wZyDG1OTHsRiQhWqFKu4U6w4X8bb78hEQwvtEKod65LjeQpy%2F%2B9OSFtrJsoTi%2FbAu%2F1nKglmMyRFf3weGTZhzFVJd0mWrbrTWITYEfG%2BgCAZMJgGKJD5qtIKOT2cP%2B2m9v%2Bdn0lBsjeCDgKSg11pRhRMMwu%2BhLoCx8WyppQLTiCL9ocA0uwnNvBegjB37kCeaGenbCPztSy%2FHZokLlY9P6nHUFGPr%2BPeh5KzqWat%2BzYRidg4iFSVpSgjtoUOEb400jzcOm6r2sLqBSCZvzz2ALk2dSheauEm3Naq7ZzsCCS0Xv5Zi0nAiWLQaDA0dnxW7XJDtfwa8U3QqVLMc%2FuidYykHAWUh04A7DXPDedRft5TLm8zj3WcGvCuu3VFAHKC2cjDy%2FNibKroSPKp%2Bs%2BLXXEMIHywHl8LdRJwi%2FwIphYqBwYPY5TtRxrWRyoME4RZgdIPNTIuijH%2FgDCl1KnDBjqkASMcFyrqXrees2OMij0q5DdNmd518LB2TNdii0%2BTokXOphc5ZMFe1Ub4zu3SyZlK6%2BdGs%2FC4JpQy5%2FcdgD1gmH%2BobYecJQRw7hQoE%2B7HVBxpOlqmit6qMQxAmXEnpJmRugfMPlvwwuAkL3IZctB%2BnSF2iBnB5PKGsWPHtbJM%2FpefNUQkTOBwFgX%2B0Pe68hmxz%2FzlPl%2BvkkQTAvNjZ8OvIyRjF3Tr&X-Amz-Signature=c3b1f7a965b6dabd7242771b178e87cc983e91c143e5b75999a8d33d7bc9905e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
