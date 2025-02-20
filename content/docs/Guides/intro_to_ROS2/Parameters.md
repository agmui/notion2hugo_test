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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHCOHEV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgLulG6JGvCz2TRqZsEbcVE0UeYOda2%2F6mMBiciAvzmAiBnNkVGMes5Fhv1ijiiWruUHAYKl7gNCOJTBWpKYShW%2FiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdFFkMc5ONoM0uC1IKtwDpQN21yzlzNgUb2RVlLp8tz6bmSyaU6FTP3GmlbhhTKf%2BmcuaBQbJklLF0CdBdE4wyph1Up8pa0osg3uCLq4ZXEb7d0i20PjcvfpVHZK2Ey5Indy7rSExeaBGGrUDxfFoyDZUQeeq7nSRpWWqXNCeIlgqinNNL2S0raQ4ihugjEau0BnMPWVIfpeqvz76SRqigWx4ZTAaC%2BYSDB89TVDLuYURpF0RU3BO5%2BKsP41qgGbjmUYogZYrcAQKCj1Kb3%2BDo2OWHQDPHg6ZfE6FTu6FTd5Q1i1exiILaUgo9Pof8cBTMkG%2BRSEfI32rd5RDFdakKx2VLJcG63O1aljV7UN7LRDLanNoQm5noG2fKRAjVQ38j0iItMAwzeLTQ1OkstuQKc%2FffCUxdHcmnxm3xRTH8j52U57LIpaCt9rzmIrWTdrhdEMcfhFd9vVeLHoundpg0KDJhXJJDjODyAWUGvllyqR0I9ktdAWkfuLDOc%2BRsTbkgcKSJDXkKUhpLOeH9qK3S0Db%2BOW%2Bxq7Bc%2FWrl2DOk1USkP%2F1H7nUfypF6qZYVABfJlpNgv%2FPHjh%2B8hQWmy6PWoKd%2Bt%2FrJ3MSXEVv22ICobrfyNQdoX3smqEy5q9EYjOZ%2FhfejOH%2BtFlpj14wwLHdvQY6pgHqGB6oitWRL8raOreS%2B93Kg1eB8x83%2FwJWDuf%2BHzroz%2BKAs8A8Twdoj%2FAls65lQW2tXs%2BTcGNA2Kan5JEnK2c%2F84MDzbpCpGi%2F3Xvlfxvx4QqhZUnRZo7XS8YWzdb2gByoPl5RmOStHusxvDV6Dxkl9J0Rl%2BVa8OR18Q7WN%2FViQI6v9412XeAys1ZWRkZe7cS2criOFvVRVpREdR74a9aAWaCbn0nl&X-Amz-Signature=7d7f3f5cd9346a45ec4f8929c0e4a25f224a055f01f3e3f4a0ecc2bc9aec2dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
