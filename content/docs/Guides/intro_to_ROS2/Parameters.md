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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQPBIPI%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOKevn4zfVrGD9GLAAx%2FBy0VDCNG0q0%2FRSFeiuyEvCtgIhAL022l74CbhHLkzvd7q0aSkfYUeUYpS5cXbgVMM0j8N8KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzonQoZUBKBCmoRuKgq3APKzX3J0i75AMBzx46ErE8At54HHIWE68kDG5yt3suTpYQqwx%2FLwj1nOo1TL545umMnnAG94qClHKCHYuf%2BWYX1aIgZU70URmcBCfvJXQgdm%2F2xcFeoDhpvFWEWN11DYX5EqwbM5rmvYYUiZBATj3bu%2FEwzoVb5nJ29y4hFAbL8o%2B54AH4NvozPoWEp9xCVHtm9K3g0seFFhry6O9pT%2FzxIqplenZAsvw%2FuKJDqLyaHWgrrJCjUs0X6MK%2BQAUE2UyaPslj4EWDJT6iHM9WkOV7WyHC%2FYtqUw96B0j1NdxWdT3YW9RL%2FSv6UOdo1I%2BS4H5l4VQOcEbsv4dN0PboBgQC%2F9lvvGDEtY2XBxQFC2djDRRm1wlTf2wGTzUSE2afvszEzBknnpDNvLgzw1SexJkEn5S0loxd0YhcD2CNIkI5t1WCHqDY5%2Fb4ql5vSiqzBYSNNAeS9STQMtZqEtokMaZWzWyGejrv%2FpGQG2Z7P3xdSN%2F6NttT4yXaVLRNegHe9lLpmX%2Fe1DRI%2F%2BfRx%2BdqM1IcCwOYSDLYotrV5Q96leArSXmJClrpY1HLU69PELe8K%2Bo3Rg%2FqZQmi0AI5VY%2BTKnIGPOcEKDfHp%2F%2B8Up1XIbySx8%2BHyfS0WucH50eDbXTDW64rDBjqkAXfq8ls72WAUkWcrkIa9F66AfS%2FA3tilFvIk8Dqe0vA8WMlZbmmFcI%2F9EqnP5sWagGYxAhOgC80CXO6BSEEshfD5tIU95%2FOPqqAbnCfabTai1kqRgcCGQ8z6JM2tZmYD8Lgtm1gGPv0xBLQauC9Yn11dJUb%2BTHDbrC3brTe0G8F08%2FVxCg%2BBuj8XsrjOWmZU4sbDmbqSaOpbGHHVE65kc%2F9dBHs5&X-Amz-Signature=def63e0a44ceb1abc377213b5c13ef6e1c34903107885f8e5caac6e8f60e2112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
