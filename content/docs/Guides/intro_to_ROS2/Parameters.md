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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMIB4BHC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEebq7%2BM1bNPkyiymHK4tGrZ0HIi6l4mtKV%2F8u7WbkCCAiEAv1HGYb6%2BgJWmRgNUJ9xGF%2Fe5OrV1QF5c%2BJAiM5RNtfwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCR0DIra%2BndmOFk8yrcA9k5GfBtT0tihkSj92pT7yEktwKVwkYZNM6exPa8yYmPzrLGyQds7V9U6fiq6qT1uxrNFDlCmUc3gOqF9O5lDekwYEuWmqartDQE0zJMqYY%2FnT3hYvseB88pzpd0PhEJpFBrXB9M312luXKoS6SXbRlHL0Y09v1pbmjsVsrr8RmPVAk7zu9aNXfVdkQ80iiEDHRH%2B9Mil%2Fexi4Ts1keGxJm6QoltLeoXbM5CfkaycG0RD3wOKvwJTsJDLxXGVvmPyHu6JOVErCWtX53OrlfiBxbdlyr1WD1S1x173gkC6h4%2B%2BJibblKldC4oz61oxwW4tUGi8IdrIX1l1SHT%2F7b%2FWzASGMyf%2BKUwXfD4JU%2BdbB5oHw7mFW2C%2FcdnAXK%2F2BtkYZiOmOJ%2FPTRWDhk5RPEEoARD33JIyahPdRT4HNRHm7OilUEfgFzoCBC8358qO9Xsvvk%2FW3aYAnV5v9hRy4ad6liZTVDxCHUErO3Uq7gV1RuzbuIC0h7UJ3ZuQz47f%2BrhIWa59z32kp4wchD0RivWZPzMu52nVao2eWG4RPzK%2Bn0gViL3y%2FnjkPze2xPEhA%2FiYT0IICBu56ytc4nbaUBNZwXo15%2FwiO2AoswhefaGgiO4xtDT8CAmiAy9SJ9UMKKpvcMGOqUB6q6tWY8rdCclhmTC5hP8leP%2BAwA2%2FKX2aFI%2BjmafBGqMqkquw6URyFCfNSuuoUz1a2j8dDIg%2FuVyVDtmE9z2096bOWifR0Mgtq6Q0OcQQlm1UVLI8vM4B6C%2BIR1T1R%2BSUuABZUSuh2wB2nFCQ%2BcA52hI%2FbnS2OhAksG2wkw2XRPoAjQrAMHO%2B3h4GXKP3AF%2FTsSjTxvjClXtiM8%2BYd93aKe1NyVo&X-Amz-Signature=1cc24272dbcaa93ba20e9af498f919b07067c73d96f5611c9c632d7ab11e0a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
