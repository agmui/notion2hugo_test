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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLFS57H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFSAntwE%2FcHAYlObVGROHYxaifbVOex9pggIw3GtR%2FaQIhAPTQdoDzwEyUQolQzuZUmIYlVfCgrY%2FKAiA27sELh1gIKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfTOAeXO2aS2XTgTYq3AMXq2vJ7L1WJfosLn%2Bri4xn1yw6HZdh60req%2FNrNBzVFqIgwe9iaj8yh9xqMZtdduoZ0p7BGGSRk29z%2BOSoofaCLk7ZiF5jhQWISDX55OSGDZW8PiYwI25%2FBBtD8%2B8T8j%2BO0JwYbVVgWwQkaO4ihZpXlU2w97ew7K6G4oSQrM7DWJosfbSqtrkgGPAAQlqxF6i56cKwNhhmhEyNNt5Cd6EoDtx%2FtD6OefHK8m1PCCAS94l7RHHmrFGWcyS9AXq4lii5jyfc761xbhAUC9SUU%2BsDTOrfucTNvUysgW1j04TPuNTO4hfbgbNaavAI2y%2BWkB%2B5c1hKS5aOTUjK44Le2i%2B1rP5fvEt2l54s%2Felg58sGtwv7aAzQPPK3BiECFQLIUMPphjLy3AQ%2F%2BuiKw%2FlNhwyrlbGMgoTK4n9pkep4l8rALp1bcOffP6fDVvon1yHdit7F1iNfNiAFh7GqQf91aQRGmg1rX5w1eVEDfyjH9OXZ18EC1VmUXRfR2SquJ7Bty032ifYp8A0KPYu0jmXtGkjcmnTxgeLD7Dt1zrrzXVynBCQvtcVUsGUrpWyS11NSGVQQwQ68JZprg2ULPit3Dy5sm4bpuBzTZLXq0r7h4nB8NfPXMqilsteNdER1CjDJ9%2BzBBjqkAaGG0M2PATf2nYPlAzDpdLqvZbf364Z2PGbK58AuW%2FvwsCZC08FvR1vUF5nlZnWs6tMJLO2sZQsjKq%2F1QYe8FxQ9q6llEgm6GB69RZhoPG%2B6BknHIJCJwDYg9QqSGxMEpphWuEsuoNLUziPf4Og%2B%2B%2BhrBWSQqKAS8FwR8KA21Oc%2Bl%2FCJTksTNziQFJbQy6Q17sWQWjvlpFqWe8G%2BWyjL2bEnkzkx&X-Amz-Signature=6d3a4467a9f1230b4bdcdf52dd7d9be127fafb6f59288463e9d19818dd7f2130&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
