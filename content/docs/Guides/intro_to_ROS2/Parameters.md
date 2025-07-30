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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYJ4BDW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETxTiS0NZZ39sdKbINAI49h5KhaMkK%2FaxMCTWjalWVqAiBvNTQwAmcORTkYxwGuxF6pSIKkUwXXdBGpoN8aVAwa0yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqCt7TajzBhEEl72KtwDx2MXdEkxWGQV2XRBo2ktd1CRBCuYUTszOPLSfhDkyn2Jn9eM2Fj%2BY1VHaWIJiJEbOM9S87X%2Bg5G8Dzq7Sr7Ho%2BSFya6J7gwglAKTfgCOx4mJIerwlEEaNOQUF6MEpC%2BhGPQ4qzE94FIqIJpi2QEPWgls0ogjsdQb7v6G39k%2FrbnZZTWHcn1kpxGfWmKta9Q5Xy544cfJovVIH1%2FY9WcaAh1iS5IXZpWkbRuLU%2Fgu7Ytf%2Bj4qvjBZSNp0VUa7fvZFMFpq%2FOLhWYdoK2fFfOUD1v0S7zrLXtkjQiS1jh1w384YIr%2BC%2BQECiV7M2LCJjoKEv2PYBA9r9nHgtSaO2QlJwrwXmt5E9g%2Ba0tznZcdU1Ax6dWPQdFdRIAbLVu9LrJy25pJOcHvawEzpzQg1432HuqqSLjQfMJJDbS1GUJ4wPt6Y%2BCE1FRo2x6z4aLEMPkiEVAUSvMfiLwW1%2FaRi0WMScgEoDIckn%2Fr%2BYuLKavDzh5LdnCVnzJvB6fO%2B%2Bqo30qjAilJ29IfezZ8K0Q2pQ7Tpuw8t4meyvF%2BTdoRF6UkAOandp%2FTnbK3dpXMnK6Z5ukzRmpLZpMA58YDRAvvxXoeoxZ%2FzjoJnumd44VKJCK4osjX18F%2BWCbcK%2FEvfeQkw97qpxAY6pgH3KerhAlLIVKUBSGR4C7%2BJxabAHjxabC0euuL4LVLSKk6P6%2B%2BqdPpvLV50epTgQzpwL9RQsGjvi7UGw14JWGnsFxEcrHfTNo%2FM%2FldYuJlBMpNmNTvpANY0Va%2F3rYdc7awJMMuJkNFCAMJiiHr0ObSvjmZChGtfXEY6lrdZ8WyJqwm9vtzgGbA2ingpY5h7z3YAJZ5Ic0LZ5s8CmToU%2FBX8tvAmyYyW&X-Amz-Signature=efae384e37b4309b2f857a7a86f4294edc1d630a9e5bfbebee1f1e9794bd73a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
