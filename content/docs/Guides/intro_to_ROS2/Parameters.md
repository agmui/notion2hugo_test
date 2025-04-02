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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSHJANLV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC%2BKuMaZo%2FgnQl2eoLOk%2B4LApPG%2FCp9VFtjt5m6dJYGVQIhAOYQv8g3mi8Zs%2B%2BaycJ9X8emeyE%2BMxyHcJQLHpg%2BF2sUKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSLzSIawyRFO%2FoSGsq3AMrofspjMXVFstNUzEyG%2F3fU9kc8OXYB7c%2F165A%2BaaT3L2tlPTDa9tGuTmvaHuQMyuBp5TH2hkrGR93Jspph5rsZYPRGxVLIaGGETV46JhqjOnViD8IjqhXPnnYucfMjb0uCGTITAUIVcbKeTLHwEp7UjLW3PPURcSU%2F1YnMG5oY4XM84JH%2FkiAss7%2FXiKwV5RGu29KWIiikWVUI96%2BD0RflQ4fJyMkSpcpD6zt87VC7aWoQnllptT42cnM1SKF8JiRjOhkHPWHKkrQhcaQsPOCyhNKvFVEizhwreh5jzKyOceTXtVrRgAsJbYDVwxjQ5z0TgNjfGuEXQ7NgpmkVc1vWPh6UEf1KReVRW7escRlBDIzyczONKFsAOi3YbvVHSqsMaNzwCF7bdmy2NwUWtyLK663ZmEMeVCMj%2B8xkQvSrWJthCYrUd70yHaC%2BA5GOtSt1BNHFtBjkEHLc3CKPhYPNIZausNpwKCxA6GjdmYoo0cLfIUOQmhfR6jDdMIG%2BhQ6g9PpSsgRQG7J5V%2FQy673eqSd3MANczwMz8I7W8SQ%2F9MBAId5k3WAzMQ9VdG8kxjvI3SebtaNqFpHkQEQM4p%2BAglcg9kQT9HAdY1ny5arzEHqvWUy%2BSsABOszcDD3qLG%2FBjqkAap5dPQcJ3513crfJdWDe4aiANoklI400PnJydWQMpxZ8UnHT9Am6hBX6GxY%2FP2cdU4eTDdZELMwzRqulp8qKLmiv25TKzeZxM6ZvNcVWdmcOrEjvWcfNdLZEyKfaIIIDOg081bdV4gxIwKr%2FS696GUVU3CiMKhwDHR0VtLdzpRjq6Z%2F0nFG%2BQhatriT%2BNg%2F1RT96CaqZhgJ7ZAs5pQm%2B1kVj1WQ&X-Amz-Signature=5f03956c1255bbe26cdb6fec252b5b2fa6f3420ba2ba416d382034a81a6da01b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
