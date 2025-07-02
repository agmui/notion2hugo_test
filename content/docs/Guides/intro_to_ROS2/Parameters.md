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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFQJIB2O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvryzt3Fjje5cPJsEgBsfhEPt4vZlznpKoe6SyXRcnmAIhANO7wB5toPpyQlVyHTjQKLu1q4d8JFGZU7ohWqpgRrhTKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDYp1dIISUPu3BIEq3AN9J1LISYNpdxL02AmsD1LnxCepk%2BvPkK8Fn8KOBgYN4pBeRZ0Oe11veaReyFp%2BMVVbjW8633as8bGtAaoQ6TwpkfJ%2BDXmFRGQo7wyLgs9FHKlqCaouCwhR5lIUGSOA30TB8DFacxaeqoNSXIP5NxH%2FfvqA3pjokKKiq9ESEptpH4mLHGFm%2FNTyNn42tPIvfyRbmpXfVfTz5E9SQkedTbRIRp7epWenqFBJYFNfeGPy8lTyCgnUt7vVxN3BSrKOxWDkvCvwj%2BIDBt5SRHCrSl%2FnjANXen%2Fp7wBCbLzntf38CuqX1jY7euFgWTRquC22kcHAaX3X1S%2BfGiGJm1PxRUWN75QEwJ0tXvvp%2F7QUOpQg257TByyO3bVvzyAzrNlu9M0Wo%2FEj9DKMsrwjvrt9Bi4t%2FKOUHka%2FsPZwdRO803vQjME7sx%2F3gBe8LWPig647UP64kM9ToGZkQcGisFbPeLOOWKgxxJCIeFS78gnMsIj%2FVN%2FAXyEFfgNpM6VkzblpabyaQWfTD47FzeKx2dCVnkJpMR02Jv1f4Lo%2BTnOHnivVroLWlf8aNUTe5vUNc%2Bn9gs2jQaxEbxagOst15z83cvgXy7%2FkBGHeuHiAU04v6YAE2vvgmEeP9MGU%2FB%2BNCjD%2B6ZXDBjqkASgAXMW9NH8zH08usLtQTwuAnu%2FYevCxK9dFXNuVd9fJdxw0Eofm5%2B0chlbrKKoItsPnci%2BhCaKixrCGt5NnGXPsB1O56qECwc7KAZK07InoSiE7VqtvtITJRsKXbbNjoPcpdlzEK%2BnnnK6Ki27GPWWEWdO7Go1ij43hBwPywA9A9QiIHlhDCmuteS2Pf9y4gLYE84faNRs452TIxHiO163JQ4qY&X-Amz-Signature=bae6ba3638c56b26f3ad9c5d7749ecb01cf5db8ef0876bb1968c3e84ca0dd4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
