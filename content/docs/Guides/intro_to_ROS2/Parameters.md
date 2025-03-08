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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANHB6SA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDc95IchoVet2XntaI%2FH8hJexakgRmvlPcPFfO1sbS86AIhAOiwd4GvgiluAYdpdS5LAsTr0cTaTIHR57JFApbWsvAdKv8DCFsQABoMNjM3NDIzMTgzODA1IgyjketWWWLMD7Z4lqUq3AOBNjYqyA0jDuNoa4usQZS8Rk%2FQHKDcUovm9eLTxUHA%2FzKdirDpC1B%2FktDXVOUxgiBJ8a6aNbgLjalbAyB68FlL%2BD7H8e0JtnlAjkM4oIqfQCSMLYDsetMAs6td9v5nzep2%2FPtkFtZoSjete%2BRSHmPzogAgwEZQxFqFmxxQgAfYSfJc%2FVvvb7F1xa%2FNFVsxlQxiIKP%2FfGJPPWdxo9unbmgwwYO%2FX50r8ZIO%2B2JDU7Gvfdfl94UvmLPoBOEBIFzUQiroJ1Kn9t5mZGLdVFy%2FhLQ46%2Bg%2BR%2Bbm5W4Z%2FmbxwOGEanG%2FeC2FBgWhAl6oNV3CBcElpeXxzqgf4qGN3Y7BBtf%2FKtU2wPIL7mEwkGe2JlWs8d2WyyP80kIUHdthl9c7HWu0Y%2F415jG%2BoR%2F0TY%2BREcBWJprCmQszZbOsaXFsvp9Xu3xP%2BjVrW%2Fy1bytVTk%2Bl4VInn%2BARG45R5Nl5qkgrQiJwHRbmLXGF8nGiu0gE%2FnQX97HZHycp1op919LtJaLvPoyKApyltUYJQbZA07C3K55pFO%2BRUU7QTmRiNMO74i5oUH%2FHkUcoogcm9nRVaj3Bv%2BH1lqFUumtt2gMHcmHSzDGrpKlKFYXIUM%2F5Mdu%2FZhNhcjyj49iz0l%2F2aTpw6DD%2FsLC%2BBjqkATZX4BIp%2Fm%2B26c3p%2BeQSbnGh8f2kVabXj%2BO6jHK2aCskrgZOhQU4xhTZd%2F3jyB1yJvBSJkBpOW%2Brzu3W44miFrjpumhEl9vMa87QoAcWn4JcYAUCh7eImK3lNqH1wZgK7hBZP4Eepuz16%2BoOE1y9s6s9ZEvjJAlATpN6qJIEz8oILgyjUnrggHFkgDrFrpK2Yu4wGykt1R5tt5WgRHJHCIVZp18y&X-Amz-Signature=c7a7aab144e27ed7800354c7b00bde104d7cce137cf9ae74480021c0ae32bf80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
