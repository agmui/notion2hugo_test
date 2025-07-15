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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6QKETD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCGlJtEzXl054oEe12L%2F1bLQ4efsDhZ5DJABFkmbSXVbQIhAP25sOjnl8SAeaFKi6Oq0kTc5YDrAQKgMg0yNqoYjp9UKv8DCDwQABoMNjM3NDIzMTgzODA1IgwbaH7%2BkSI%2BqQQd38Mq3AOIlIFRnMPtzOgSYAuT8OFO6UkV1Q91oD9BCswRkw%2FAZn8v0J3v%2FbQ3IfeqtlE1AWI2OKxrKBMsMHMaiTDD4FGroZAhZ7blP2I5NEWP6Kw8SEB9lH3%2BOq83XK3amn3KG3HFduDTv%2BUp%2FSk6c8ilhNb6lOMzgzmar73SIdlCsr9XHknxsqrJAM10FqZspx1aUUiPUsdXtYueUqHgJ3KyZ1vdk6XAwkGct0GkHdn99gljPk9DeAxlkgFJEev9PYKxasVrRfVwl7YuYfKj4I%2F9GSAWqYdL5kmD3%2BhyQPGZxM%2FVmfp3BUVCROQ2zSf1a4VxY3wrwA0sLH4pbsh8bNiuRruoy2JC%2Fgq1M6uGyf9qhN4k%2Bo7MMJpqWB3%2BYU6pnUyAxD2%2BwvcHu%2Bj%2B4t%2FVtB37veGG8VjPzSsn9mtZyJ9aBFmeaJ30wru5muFdcab%2BrdZh8oTcZqewZjJjpz%2F6j5ry5e64vADUYYrI0CcnGqBeF7iRUgt7ja51qp1HbsrqdhOxzVDurGdakTRpp6xDDUPFIECEt4nbOQfQiHhc7GDBvxvhyP8AtZVL2TSSrPv5OSTtA6xILyVr8OA4yW9Cd4s%2FiZjFtYL%2F0FzKEmqu1xQTFtDQ%2FSsn0pgTT2ZJUlWMgDC5%2FdbDBjqkATBEgFLmr%2FDCuOBpOch9iwNnuS6uLcu3gnkKZHtEalzrGid96siVsjH%2FRNm6RcVuD8zkyhP8BehAj5Ny43DubvvK9wVAicClmxvns0huevc6U0M0TZlASPs8fRyE17YEpmi0l5R6%2BtEFV%2F%2FkP08liOd%2BYPcn57wkvoRAYFefoaY13Jn%2FelmJx9wHcH%2B5SSFGPNFyBt8m2EEiBddz%2FfqR%2Bo8%2BM8Xd&X-Amz-Signature=4ca914589cac942ad746b5f31b4cd6a3d8e760f557ccd14b04ad4004448de2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
