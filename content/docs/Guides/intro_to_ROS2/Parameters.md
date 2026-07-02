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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUTQCRY%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCG201sGBqwS%2FoLie09JVlA7bH9H5mglJiCT55uJl3gxAIhAIEm8ualfY1l4KgFVCKWs8CEKD78ofb0d3wSSJiGNkQdKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymQYmTaYbLpfpWhnUq3AN%2BxAFmdkFmKlAnL78sp3c8tu9upESYjQogR2DcUkDPE9a3%2Bl%2BAj3t5ZDigZwZ%2By8znq1dmlfwGOGmbx%2BR2eMppt3%2BZCweeXLFmSxhHULl0bqhh1%2BmfBYICq%2B1nQxJLb6veuDWs%2Fz%2BFto8DSWb6%2FogBpIoAcfMWeFhIHjJDEHB119lucOwKno01Orvjl61V97vLLrnZoVO8Jf%2Fs60i4noYJlXE0EkCsHy6bOp%2F7aAG92W0p3%2FYWqPPGVzYkKHqvlavAUbVO8B967XEzbDJiJpjNK7hwZVSJ6vDxOiGZqtsaCUnxi5bQ%2Bd%2BdA1RGosM0ejNqOn30jgXktAnXBjjj%2Bz06AtSxcykWHdObTZstFgAJc1JMtdhPwYuanMddRhjwKhsKLC3Q1DCcm8TS0j%2B9ioIpTgqBLdcA8n%2FzZtSJ5cmmT%2FJuCKmZUuKdFUSawc41702N3hnV%2FyCyyhtwZG504jQIaWaZ9wJ08UsumdNmoL7c%2FFwrPvHf4flXyLGJfvw%2BN5BmB4nzNtOpfY7mSTHChlWKayq6fDdNfkECRf2GaHhADv54ywMRsI5cRcB0S768dmxeBaE3zXynbFYJ9XxQS2Bg8q0PT7orv6e1bfgdHnRCwPuS4OszEtc5j2wVIzDFmJfSBjqkASkFD6vcy8y119v6UrcDHfxpAIDSILzwkrLwx6ZCo1UAn1g3SldZOz%2BiQ2CArgcPxAnlYHx9LjKT6gT%2BSUuDXlqp0OgouqExNJYT7aWogR9bXl76jjZTTp8G0QK9%2FmfLGuriLfc9oHl2L9q7mDP%2BZbLJeh4qzzf4iYg2n08hCmhjPiOmw2zarWVLorsm2VfhGZzl%2BaXXXu0QgRIc2mkds8sA4Zq2&X-Amz-Signature=bf9032c780f2f4b75ce773669631078cd5a5aa7f3b8a2e4ceb9ca43ea8031f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
