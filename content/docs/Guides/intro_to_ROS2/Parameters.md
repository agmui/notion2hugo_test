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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SINNVEJ3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNdVWUmnC7d4X4R64eT034pk6mmbK%2FpdnfL0bdCJoMqAiA%2FiOmiAOZlFKfgWUWqVG7b3NTbbpE9OmwvRJ8AamWA2Sr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIML2KE9%2BeNPVCKnGdWKtwDn%2FjgV1%2BqdAhPTyhhmtmWzWidl65wuHEfkPnId0yjfjLr3p1x7a3ZEGH%2BqqR1ll%2BmlnRcXzBg8OuS%2BNMxXI%2FbBv3qFOrh9mIgvJCYWnAnOjpYK%2Boo%2B4ecxy5Cr12EM8saetLB93DbVoNohALMDZvmX031ALT6WsdWOWJD0mFFiOiwW8%2FVMc0lv8v4xxU%2BTnWyAC3Kh%2FUbKHQU%2BBvfIhRhTs1tEdWhFKYtWS7prpXhkB5y0VFXLRrX8JRryPpfcbDjI4RkOQ0Mbxj0TiEUwfGFHRRy19vDcQ3KPPWcK4q5dlEXeqnO6gjIUocLV35QaJ1AMg07kRNej0hAoAcTfFxmmxGXvXtzIjHMt80MY7s9eK4CF%2FPhZ5LDPjXnqC7haKy7ycE03XKekPUGLIRqYszQ%2FjjKOiJ4nPreS2yE1E1A1ZdE%2FqOcZtwOIycFIybLAMI0alStcF9UgXybQJt5XyCj7fC59BLEjfcQZKU9XhakFBdm3G5ZjVrGiatSlUwjB9XMCQw3nG7wkuBGFi2l6m5Qv%2BVC%2Bq8ECKXbVxAV9fE9A1O4LAmyDMOkNpn5%2B1fZYvTsNjrMG%2FoQfAOkuMyum3lND2YGhb%2FuEFIZYYbKsLJkqv5cR03tFYlol%2F2ndXgw7pT1vwY6pgE88Qx%2BzEjntTfquNx4iMerYRNb%2Fhb44VbNsO34R0Xu9WB18d9VEcrvyI07iTzxAbOKw8we8npUPiLV2xgYBJ65OlzLtf7uZz9EuDs2ksf6aCPpyk2BuegleLFxwujcVivm6R5UDyngPQ4gtwc6mB5e4fywBPus6zsP4HWclGdnEECE0GT0fQbxUfm36385xgjVC4%2BOR7e%2Fjh1B%2Fqnb%2FicLE2FkgBbH&X-Amz-Signature=754f011743f7bad0daafe41c1878ea430620e2acbb595b9a585b9ed1dfba6699&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
