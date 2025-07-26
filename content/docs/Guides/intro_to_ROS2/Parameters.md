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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW6OPXA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC5jKKEb3%2FiLEKfbuM07kJ4toJimqnNjPqMVfqW8Hpt1gIgL0ZKK2rfDx934fVJrHSMIZEeXotkaSmtw1zov0ExYGkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2B83%2FBUcayKZtWuASrcA9cPbRk3rs8iJsV6ym9micQu02RwQFBwWYZMN3imNLy3dN6kuQz%2FKqnAENW2qVg%2FqLy5PDa9Fe8SKx2KT2vYY4%2FWW4LUyI7sNzQbf19QptrLCCApGjRM%2F7600JKVJyNWADCP8l%2FH68kDjsY7JWvCHwMhAlx7hiiVhOUt%2BVo26WSkBvp5MW8MFQDzB3cdn6PYh7VRDAvWZj7xbuUT73y8SQIa53G2GEwPtvyc3KevAU8CQvom7kmPsEXGEDhCTsbNZg4lJvZ4%2BogcAWiFkKSPvKp4b3fxCrwxJxq1r7Z3VXiBccZXjmljyCkQqCim83HDYF9brkDWxiWyfuC1iK18VNynUa%2FWo1VI%2FdEtL5Nysx6OIQdmKw2GE8HZJJhnGhE6rswC9NMO2DAvZAPi9or0ypCcU9uucdea0XOAEnaMWvhxNX2pFoaNhj59%2BkrHda%2FFSE%2Bcv0XGtsVj6TVSjdFqT3kbcPDMc789OhEkWWVugx4h59JsTxuO09edz%2FcYtW5DxyyU%2BIROexWDq77iQ8Xk64vSxKj70kopYB3spi2xfs0lfBuo66fgw0zNSBGsDHSGRcEqQYLYHa7692SrtHQWER3e3d2rFyTmEw3Yf2l%2FpUqOAKptoSDfZEHPC0kWML2rksQGOqUBpgkMZD1wiH7eCmdHJhZrC9lC3W8rOMxzX5Mga6QRurxTNcq8PUlDhUXSuygW0DauCIuh9Z2FpQZB9Fv9bSDbAuMiJQDTY6A8hcox14cEbkuVV2F3ewzrgevmCFxf5DUuf0ZtLms1aM219jd9I36e7cPNTn2pQkRU%2FidZsg7QNwoYBQsCc%2FEASGn5Q6Pe6qUv5kXBDBCdxKMcMcN5uTUhMTdb%2BS34&X-Amz-Signature=b36ec0febfa920e631dc868d3d408fc94493f801a6404c1828883fe42fa9cd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
