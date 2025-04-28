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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLHSXEQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfZKp2zRLzdah2ScIQME5oOqi%2FPZrG0n%2BPT6PqxPtyeAiAY%2BETCcGaettCHS0davKkxhHAzOfvJjO3Jwin%2BXv5R4ir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMJCD5q57F8z7OPjPfKtwDoR5e5Esf4IKdz8bxXrueBIngDxHghQXceMM2jg6V9b2AaE%2Fm%2Fkq72wResv3H9TxohWMa9qbbVzhRWqQQIbc5E8W%2F6X9y3vrSqfgutRiS4K%2F9Sm9asiCVXOS11LdTF8iU1v1r0aWxzgA4oUi8bWIO%2F%2FwMlBHTQbuThNKd34Kek5HyoRIBiJqaXpKzrZyJNqrJVxNS%2BbzxGJzoRBMiNJU%2FvQ6jWvtkelQo5uzXi6Gm4ACZQDT%2F%2FkWtJMy%2BNewWbjzAET8zo5yb74rmL7aLeuwGrn2VLluUtM0X2GhPTkpawAnyXNmV%2BqDU3LKmWcvb7OA7GzpNzG5dJPrB%2BoBu4%2FvXYdNSVoN64JHbf09LrHHt6r3yYGs3T1ucePbF0GV0%2BpMFMbrngZbnLdKxZZqnFDsKpcQccGlShnl9iXXRm8OFmZMUunUmSV1ltNicgaz4m8zNjB8XafWP%2By7Mey%2FhqF25TvlW2Y4dciLkiN4Ov7YxkaqfoAj3B9UG0phkobRrVttnzXxiBxbjMWhuexN%2BLvmTAayVpwZXBS6dGxhzoCnKGgTFspEOR8ZiKjXbEJDwYWCqxH6EhZqOGr9SlxgBevck%2BXdALL%2FEUvLHvAo288ivW5OYVumrnCYTY5u%2FiU0w2KK7wAY6pgFmKQtpI7RXjhZfZmXDKxAXOkiavDNFHIllBnCCzHzThk4%2FRXXLz2kvae1%2BixuTNL09%2FcD6mKYKZbjSeOvi8h6AjbKQR0WAcfQLR68ypAc%2BGnZB4IKf2apXe68q72FkYhtwg2OcJRMUw6dmW8qCYcnIpG0YYRJPphVHtg3AdX7Kv1fsKaRpUr8kLDnPIAQpVMGZ6wxMR5wVTdiUvG2aTqLLLybu890u&X-Amz-Signature=8a3e897f6afa5efb66f09e54a21ae40be7f0c6b85174e0920f98fe90ac70386e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
