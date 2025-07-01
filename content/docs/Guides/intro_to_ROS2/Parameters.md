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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA34NBS4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsIWaXxzfAke6HZJzUTJeCYGMjH6NZY%2BNVqI7GV32QkAiBsufmGlUfH5smwpP1CFyXNix1W4QOiozoYuxvIssdk4SqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNlEPFNB%2FoxhLirWcKtwD7TMK7D%2BDSAdggOFKWZuWdzqoQpEPGkfNFDtktoq%2BIbR7OCKlRU0ziil3ypfU2VgEHBixMjMTYyTaw9IbnipAoIpDh8k2SsId4%2F5Kkigq9qfWGZiiy8fY%2B8unCRqobSgQAtb8uqh3V3zl2FBamDIlVIQxyN2pW8t%2BWLiZ4voj89O14gup6Jk3KoLL4Q%2B%2FUI7QHKrPqRj5Sa5cNGnPTGXEaO5dH6Fkgl%2BH5DnqUOzeXeUhxvkKq8FB7DChtiqBYCEpayukj63WHTa20H8tKnK4ZaXCzNGz%2FrHwli7mEQQ%2Byc72wl%2Fm9EUufHapD%2FDvAc9kljh6kvdCLqHvxZqSDiuy8RnYlZ2vURKBUmnpPOVIKmywj3YNtplT6p0tTMacC6QTz%2FO0P3p33C6dCDLcKFpU5G7yxVgS%2BN4fWIQ12uGzJ3IBYRhC3RG767BftPYWTMyKH%2FNFbVYNnUbY1IAA8PHkohxl4kVSaShaEsTtJZ4llU%2BKGBPNcnTEnoO%2BGGsj4HVhqydWJ4lI9SCP2MKbksxjgN%2FFkTEFXfPUFbvyvODP8BNk%2BuHTxTosV90R50SgK%2BtfdjpPz1fAEENwrrAF5QXVeoLTcxCpcOzBsGZokCFGY0jU0pNodyR%2BWKxTL6wwxoeQwwY6pgFxMFrSEcKgZjsj0J434wUkomJ7M82BZ5is8Xz7CsWWNsDGaH0a6hxuS%2BPQJdk62yR8eXiUPzvRcU%2F2FURurDTT%2FuqKtmbIjsl6SAjkRqCMBQtUJf1xUChTX2e9akfGaTbXR87OJXCkafPS5LYHLo8q0vJFkRga4d5tUDL4B4tbpwEJsduRnoZpwEg1MoOduBUJb8oVS4zet%2F5lRcSgkm7opLoqN%2F7F&X-Amz-Signature=e206f9a0f0dd7a3f3a8e18e4a2464685c59dd66d4e7cfc17d31cf3aa7648fdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
