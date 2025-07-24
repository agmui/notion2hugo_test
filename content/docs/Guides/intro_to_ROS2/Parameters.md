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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXUMDOL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGsii5TDzwZjKQ7r50O5TH8TJsqLg5uthYhii%2BdTHtgKAiAEh4iYAopc84NgJVySu%2BSBQb0rWry3xIv34jzE3dKrDyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMgwgsC39F%2BdHaUm5fKtwDUuWRw%2F0ELew8aKeJk%2BUYf5mX8%2FvpSvQyiS34HS7n6r15We1oKeN0G6v9Ft9c06NIDyLYlokHnYB7bhQfn2r%2FhorN3XAlXsgh0hb7VVCV3ThOgpherayTbO6QmDqtxbOz9lazvE3PKCsPEXU%2FNf0CcGSoo2kD8okjuvjoyzdwlUA%2FXWbH71hE5qEDB1pOb10f5k29bKAZMyknWxg8rDSClXMnvSGYWDdBs6fJ5%2BG7%2FvJEONV9ihOu0jO7ajJ4pPR%2B2pNUazwT2CAXdmU5OXgMfi%2BuOU2Sgsxf9kvdAkRZs17bKtIFTT2qfKoaUcg%2FoAF4kEdvdUuD18Kc4ihbrxfPkdnkGKboMYFdCzmgiCZmiG7VpL6SHzsq0eOz4kHMolVERJwIBYB08m5xtT%2BFUkRwJyVez3oht%2Fzo1vtyAkV9xZmJMozQAHEsORW7jDqlL6hY5qiWLLPVLNfcUVYJNIORv4TNCLeUWJ%2BOvSKNg9BvM3mV%2Ba13MLTJVVJzYC%2Bd5O9cXTIOllWzouwBblfvWOfUAEfsLNAQmcS9g4CxJcF0Yz%2Bv2x5NUf%2B%2FLvP5aO6T2ls7ymmemjJd7ui0V5WZNyKimRlnq25GJFMy3SC6%2FnIbcDo799H%2Ftlg5MsxqPx0w1NmIxAY6pgE3oIoPE4cXp%2BclB5x29rV2Yiu7aogdkFQAeuX9N44WvPdPl1BV%2FTYQxmFH6hrQpTbpRfVwpOmWSv%2FC6FUXFt3gltnk6O9BdReaMIikWapZ319MIz08KwrTzAaAb1u%2F2wpm4DEZqDRPKttPeaHhgoIrvHt7AGk3MuEI64EUZ66hDU7CJh6FjH1TykQau76cuWXy1iQFsyrxNhmH5GBDzaR2ip4Bn%2BAg&X-Amz-Signature=128628e77e2efa6e29145f134494820a8921bf67b5d9a03feb42547cd7619de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
