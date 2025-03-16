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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V35HFAKF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhY703oQXFCpnB0h%2BYbFycT70jUvha8OTvFPV4Me6GeAiBkISc6kOOZHTN4cmNQsPdBXMoO6nyXUMcKdpVBjfS19yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMYwkH1An52GBslBnFKtwDX9B8912gnvBgNdFUZzOVSasPaQbxVRWt6rPISJMdBSA7YIEj05W5LOLfibBWjqVmAqtjV499kvx2%2FgIz1mY3If2Fxn6XSYZ9uFYgLBF6yAjB9%2BG1OkmtCdOOgoiw5kNlmeYCzvh42%2BMcUhCdEfH4Z%2FxGjRTOtfzCI2EJmi3ENoTVt0AJMuQkdLgQDqZOnSCs4ELR4oFylrxBSX607ZS6Fy2dr%2B1xV3Uj5PAPv32Rult3sSe%2FUkgOytByoxhy7LaVFR0oUCLVi%2FYMuaAoNIlul1AGJsbTS4CkOCt7yiZ9DscSbFCZllrr4lkM%2Bj8ihsB6sZkkaefrinnFVBo6lwKZErgfguPUrNsYfalBhZWqJt6haXOQ4iqKnBEcEErZc1qGRkkkRsf2ANI7WKLkmNuR%2FjomRVQEhvwjX2OByY8hTNIoIC3YGP44z7Muz%2Bv8keZdWOSPfZAz%2BYpSMKN4BSjdaO7%2B1fOMzZxKxSrLs1WsEO0terqdayFEh2oaGkr2z9mjrAd1f4nS7d7dRDiwAmA3QNlQh1AiXZeM5bx1saT2yrCrClbM8BSDEwiAXv2UMLgf7KXTQIbTLx5QYytBgD4C3bCl2e%2F8OVVb2XQkbX81lYuhw5mN4C7ZCgPrvpsw2OrZvgY6pgEZDnEKO%2Bj4Ks8%2BFK08%2F0R7etIAg8ESIR3eTar0UBXyR5sYbXl%2BfS3uOhy41ZdTjRj5wlQgMYQ2IDxcVA%2BL88xm3k118DHHeK8KZZPWLpGyL81J5B24OG5wnvCF%2FZZ8JMCQTlW5H4rJ2zMnU7ewYecLGKDBlLRSzTiCgnYQa77CErvbp3%2BTdY6dZZ5TqbAeEjl5sta7XYJEMbj3PYdcG%2FLcdsNHeUSV&X-Amz-Signature=af438122fe40360205b5f363d9d1253d5790bc1239f4020257c05608bb591f17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
