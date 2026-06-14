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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBED6DVY%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCCkAF%2BU46q5iIZfJT2F9cdu%2F7%2F9OMHpxVGmJ2fTmN5sQIhAImpEtFX4DxUCNbDGExsY7k5I5bspwB4ZgPvhPQPChtlKv8DCDsQABoMNjM3NDIzMTgzODA1IgyckeYYqc47jAgujNMq3ANTdNVQxrsRxYa40r%2F%2Faey2EKgZeWom2kSjf%2BUMQUY3OcBxo9gnHftkoG53CP%2FqrnMJS0AQ91nKYyggFasWVKyYJgVvf3cfOKKlxAO6wqxmMrntSrquPr%2BhE4iFfAX49WjoK7CAsgvJ9Q4l37LcDecioNqZcnVvlcqWQM0VKg2IaNHc%2BevxZ3SibrVjSIx65wb1PciqvB8C3wlWZ%2F4pbJH2SeXzRYUATUAcIWNzeHPZWpsudtuoUpyNFZ9bafE07vD6GhvHXVTXFzXl4DwkGTV686BJw71bh5UK7EyzYw%2F9jcPwOfnBVfqiTpySk9Uc5MFB26x4fPPQZIwyUkn%2BDaVFhgQN3alsDKG2vRgGLU2OYXAb0RC6CfDEWJQc2PHb%2FfMr8iacGfOXtjH0DSUhb2ZV1WsYEdf9YUOrcBZ5N7P1PwX8IzBgbYFpwr3lZf%2B3Eh9KW8574KmRMQk7WUaT7oTcuErO9HRmzBo3BNr01Xm1eiaS4S4oVsMDRSE4et20%2BSPxQveM8kLJJ76ZPhWfS7q8aGyEfPzTyZ9gy0Co%2BbzRLegAh1dW1GdSZNvCfTwOlVV93Vl2ZGbR3dYpj5roS8n1o7eK2qB7c1h%2FmSWGgzW2MEkUjdphRpR4ZMsANzCBnrjRBjqkAWHxvj8TjHSml539JdqYozTMttpgfdvQPXTH3ubJh4%2FxJU8Sg3qSyeRqWVhwB37u0zMQ9T%2Bn%2Fv5LeGoYCCln8E3Ddua15FhWBZi3H7fOS%2F%2FMEFX0Axa6hUjJN%2BSpHkbUu3KZTdHEO91OkryXkYBBsTtap9YOwmaKtWAcBsDmrNQ1HXtwMSpArTG0UptvlCg13to8eaU%2BWhHSCCXmX3QHchg4arZE&X-Amz-Signature=6097f18b72a0548bac255104a3d8e0d0df41bedb3a485cdf5a3e97d6a4ddd7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
