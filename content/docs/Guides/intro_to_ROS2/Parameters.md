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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZQV3XS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDlI%2FSZ8g%2Fgdv6nodPiGU80HdzECcyt1NSqVNDHzvVS5wIgKN%2FIRIPOcbI3DP4afXPeYsA1cLZatw5h3vQipbPyR%2Fwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDBN799rwUFEcpWeQzCrcA9PdACi%2FjWClzQAjLcS9V6gPO9gmkjVdoNqzsAJZ%2F5vK2JvSVztVJLuLtEK%2FcX2iL0Az57gHoiDMnyHicRmt5jTuBaLbfG5bav249BSdenc%2BdkiTEP8ei2GxP2H%2B6IU2LY2FAT1ERCv71mNriAyAfQmWsVoY7L%2BMusrlHCOb155ZKDsFIfVfBGruNJvOehPDismopyKY7FMVq2jI7V%2FQYVLIjrKoePg7Jhr0NQGpn1MPak9lriObk%2F0REdvzWV7mKdQZ4B7gflkIItwQDHzBDyPG4jHRsaOmp3XMMbuhIcwH49Ad6JSJCoAV5xRHDLkyBMdc3%2FiVzFroCwrKJId05%2BDyRKfHxNcH19xPIFZh1farJnC9L8p%2FFiCjqfcVewTAcHXuod49TjCFcusfTCQteIiChgEKqzb4kcgu%2B6w%2BMhjY%2BwHAFYUNgyEzPO5FLEdKcboepISlvQswzH8Hb02jnUcHz%2FphTlgHtNj9VUmojDYW8osG%2BeLbs0GbPg6KYgX94%2BAyQlrzgggTqfBrBHMTHKFn1Y8QphHmd7HLBllhEnp0P7Lil0qe9THBxNqNI%2B5SlRwVzXmWEGr1lcr5THXF6kE2MeaG%2BRMVL8cwXAKmsQCMcJocp1DgdMh6xm8QMJfKmsQGOqUBMFlpbsfA%2By%2FZT9s85Zm1vpmZ4uEgj9UfQWPzeH%2FawEB8GknFjpZ8dgDE5q%2BSuTlRfq4lkxkr7PEwbPdV2xiJ%2F3Vy0nEPceRIB%2FreS14ozMLQbb7%2BYQR2x34yZFjt2qHjOtWYjPhcI68RWxaLLZpY8hPw%2Bzky3fD42KieY5%2BP91KqPCMWG%2FOmpAV3ZQZPawyo3NyeU6A23TKa%2BWnZ%2Bzb4zkmlD1bK&X-Amz-Signature=0b256607e553190030feed4cbf56d62eec678bfd23f7ea671c90309ad3037cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
