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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4LKGZR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIG2d0jPI1DZRvMCC53uk14c7hodWVG%2FJz94Nl%2FdzcRWUAiEAmUZWY17BTXDXEwKLPe2VQ0VWgrgshUTEN9n%2ByhT8ht0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGdhh2Q%2FefmRyXcxoCrcA03aKS%2F5%2FcymquRLs65WZQ2H0a3x4lZVoyzRUuM%2BXsM2A1InRI3sh%2FdDvxDwpXDgo2hGVr06tNFcXg3l96pLX0vmw3fdxIaDUhCwiVlOx03gZCWNLFfucZCPNsLw2BZ84tco9vNtU9J37zblxjkPZLxJWaPw8LHknGk5MvAjyYbCQ97zDKSeUTxzRVeCc1QtOUj4RIcldE9BB9CxKmn9GE62lYR658r0LiJzFIrBnJi88DNguDKv3PW0h24gqJ6AtjM3Kyi46ck7QyWj%2FvFG8VkIWrEnnKfVGOQo6xM%2FjJbXnEGWBUs%2B8hq%2Fq%2FxRSAfBYKCzn09Gk1PW9Xlhzo3JQGaK8VKTeDD7FqX6ltS1gat3bGHZwgJW6hUOffBmys%2FiVSKxiPu1OLWXbPJTl8d13sDPwAm2AFcfZ8YlMhMRPb2Hl%2BU%2FvaUg3o5kx5bVPSj13KOKvf37CYZM9lm5Wk0s89AE6ngy2s5S9kUkiykJhnSLgq6iN47W5CZfT%2FDl3Z89RuTf715ZUDn7HoyhpuRoff4%2BhZNC%2Few2I5MDP2qLhv0iXylYcBR38OrdLJyjh3clA4AlzLcsk80pSioHojlS8QExCN37UAX1vbgdOVDshHyHWXS9ln6Ph7gE%2FPYzMM2KhcIGOqUBekv%2B7Vlu7QMF5K4lBEBxKoha%2BKavR%2FYXOaeQ%2FO3fT%2BueZSkCyqgBWfyQOg5s0jeB8MMvpSuy%2FplQ18nME9%2FuQSETzXu91dPLrBYn1Zt%2FqNhxNy7w9So%2FlsB62elN8Y3j2sV28JdiOpGkHfeC7%2FD5ySs3bm7TrdJXHuVoeQJDMIm3buUEpn12WsmOBnFqYY18E1B%2BvdylVRnKxTEMrjBR2SDZtydr&X-Amz-Signature=a70d134d476c46c7bae76615ccdf991900a3f8040b86dbd2531058bea73129b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
