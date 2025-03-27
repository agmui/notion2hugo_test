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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQUP3LL7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOsxdAr99XxX%2FzuuCf8pBA3o%2FMH564xzWCJ%2Bhqw%2FZqsAIgDNWv23Cb4suaRRUQNcV%2F420LaoM1OyLyU%2FPp5y5LTiYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLsVTN1nL%2FeBB2l%2BJyrcA0Ltk7sbUT7uMUDoFj9BBPayFZZMXTJYMduhSwaETP9%2BXBTTJx%2BnJuBdawynaG9zbXGHrCdNTV41FT3ys22DBf%2B6EWToCyyJ1aGKYASATA0X4XfUkGSbGqv25LNbZcYJr5DVuYMmBsjtLYVyMcbwdRQ%2FTe22TGGIvK0URCmOLeaCp8RE0L81VQeDq1AZnED7awQy4qcJP2w928Rkg2R91JK3gtd1CLCYxJUHKIXFA%2BtoUUNE2F%2FYU3hdYrEfRbU2Ua6HDLK6K%2BOWguPFdudIpH7CSmZx64kqrpKB6PrV1yIf5hoVf1b5kYRn3iBLBUa6ft56Rhq8DE0i8O3B3Gt0k3Vji9r5HRYxhHwKRGZ6dZ2vVEFlJjct%2BxOHKs0J7AW21cVyaRYaM%2F3b6blPkD4FTZO846qiEKEgCdvd85rbn6S6PSTl%2BNMZ9VvQNl5oNhPCdMFx4EDl716Z9SbpJ6%2BM%2FPwkW2sB1kEkoOTNo8m%2FKuahTXdvdn%2FSIOjA%2FTJnOCTuJ6Bop4DH%2F2GwsnZG9StNco8BysDQ4dIcpiRFmtvnnVJQdzOO0%2Bn1GG9mB7hY13fo3RqGCcmMo1prTcsW%2BWDi0%2FWZ8Gw6YHLe4Z0wv20vXIUCshpyDUyLVFnrJqO8MMqilr8GOqUBpyzJhgrZbg2izY4%2FmIRWVEqkIC72SOWrtXz3GgL3aU%2BwUlbKTotDfqVzR5QwfhSeB%2Far252DIoNtarG2IAzGmFGI14%2FuAD%2BCY6WHA80gX%2FPKzGZs%2Fn1wIRRCgpQBOZYy%2FwykzLzDHUbxtu%2B01cLFDFtEiMf4FnISIptP9c56yzDh6fseb%2FPHtTCjbfUj55DglVRQiNrpnH9075JgJc6Gkymu66ZH&X-Amz-Signature=838c2ea2e155dbb46319be4373ca1d0687fbfb10e38509ce7270df645d3f2146&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
