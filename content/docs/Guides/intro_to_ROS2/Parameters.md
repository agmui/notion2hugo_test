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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NOYQYOJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr3ZQxmL44ySrVf7I88ChzDfcOhp3ID10t%2FsGPJac6mwIhANinWPNvLbAvpEa%2BWaqlOgsCNaFEsyGOZvSKnd71ybSwKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKjRFvfKMPMMA68KUq3AOVpgQTYUl90upe8d6LkcMGW2vTLkxmBXOB89Vepi7Gg7WBO4U%2BOaurNoDYte53Fk4ThsU8JXstacMKAXvo%2BbSPkJkujZst6iN0MlHwVM22ncVDyqzNWqOZmAwOi3E8ZHq3ttA%2F1Sb%2BSIrwkHJayTGilflkcnlt79jURYBK3Df0BAfDlA2hxLeOku7xj4e7IdJol1ZVXipRZV0kBODHfRkTot24RixAWM5YG%2B5Gn8qpbaezuzsYzZ6YMJkfnho9q5F0DQK8lasPgspWMIPgbVxah%2BbhoUYeJjXQBlCmVEegimLAPMbhSzUKoxxEonaeoZnIe%2FfAHL6Rm71acVRjplb2DVjX4rw73axnZQvGNaJn3XJ5Ic%2BaGxt6Sr8Ls%2FzJ1TP84B1zuC8kTPuYsSGv7E4wsRBTLJvK8s%2B0E6kZqrZCkB%2Fhl5UDmT1z9nVY4Z4yStSo4uB%2BQ5x2tJtzXvt80J4oQMDWwtDfmH0Q3hJ9ZlgqhclT7b85fVvaT05RIQBIJkj2V%2FLozzsROktJK%2FJ5rYo78PTZyAP7IPXuYIQvFGdTRmXeQ%2FVZVCT9WMFhbJTExeFH4NklWWfqDKtoOT93DqfjpEie9He%2FrxqX7L%2F4F5w81bFCn2bzStoRyGqIADCio%2FjABjqkAZcoWsDQwbv04U2nBCuYdlLffOSfCfr8%2FfUedJaoK6RVLFLYdFwl8f9AwovRFfijuIivB%2BSqHmrOGixyas6quH1TDnjlex0akRbbyRhbXjgthO%2BhjXINoBq1JYmlBFTuX37%2BBtEzXsKgsq%2B2GXaPm4oT2mq8ttwmQQN4XaZ2ZWZBuKfiZ8mT6DeeEwL%2FcFtokgjHrlMQ1dB0lYoBYD4gsDBrF51G&X-Amz-Signature=28d06aa1dc46af3dd9cc161174f20269b48a8f72829f79df0b46245e027d42fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
