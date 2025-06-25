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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLHOHEH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDd3dsLsbcL%2FwF9mCK0qNgd5IUCRbX64i6j4EItyAwqZAiEAvBeAFJ4gplZYQgZTVwDPyRlY55RJbYs4%2FzExs%2Fs0Whoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAfjPfWB%2FZRJfgp%2BnCrcAx%2Beym1Zfg5Cui%2FASmT9yw4aa4EjU0MpSm2T%2BBWexkNZmFI4WgoSriGHuHKr3KGhJOmFrBhU6NRWqcOB3PY%2FEhoSxb5jW51dYHulVRsqZtWBkGzaTtHR5S3h2s1sv7a%2Frq4XwZ%2Fr7yZM7XAFy%2BHIruQ%2FcWACRGH4Bt2DcIONgpbQKHAWqNG4DbpqKiy1JqeWhuK8zXlmGes8s7umwQeYCFbf%2FflKO5yRKP4PFgmTqJmHG7McSQ6pfkm3rWSw%2FAp0xRbUMnl9Bk6qeQ%2FVOfcNhU6sorcw%2BfgMMa8zkh4JBEhBdJFwh3j%2BOCgE6DpcuDD5wsYZ1wfR1FcJ9APZyAaSXOEdKWpcZfF9oBDLhA%2BW247mu0oU24QOFOtj72T%2BCDgNpreqGuxvDyeaaaARNCnwi72SCLk4GZi30vHPBCNhQOQTCgxFvW9bP6yp4GMrjxmDqSCHty7yb1cegXjjE22IjjZPIBwhBvIzOZWTxD9SYXU8o1sDiud3d4zMk7KSSyBBqk3Ji8RRXRaPIRFCxuvTZ2Lk9n8izcD73YmCFm3KeFU2Ds8DsOIufATM9Kl%2FC81jZE5482VmLOXrgCTnc6hl50626feDMl4RTX4H1Bg8msiSz6lsZYKM2aK0oe48MIyQ78IGOqUB4OEjm2P%2F4nN4vWU%2F7cLkpw%2BFAVAmv0lo02tyuoAgbqJUgXNUsf55yevTXilA%2FndS7h9joUaA%2B8hHmkDWaeG0UJ7jOjyGcXMqRYW47bQQL%2B5odNx8pyowZ6Qm%2BiYL%2FhXLSBAynOujm%2B6YYJDgduZcIfPMKiffuxZJiujiDgWq2T%2Fo16yymHZPvsHG9VjDd4Y5QDFCjZqo9mMLaQS54OyFNMM33l5T&X-Amz-Signature=f8e2e65a940bc8befade9eea647db9eb7ba69125c3fc704e4bc93825b2a29172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
