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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4U4ENY5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB7v4yjqxlJnDR0yTra6oK0%2FO7mlHVilVPX25J74bdb7AiAC3rTfcHpPbXrzD%2BoadoVTJuVY0RB8CE4mrELB0iRtwCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMumcAggBYcxhAbGwFKtwDzrX0HaL9BO5CLuIH%2Bc31Xi%2BsE%2ByqV3hV4QN%2Fxk7EwQmVb6Jl9BRRG4Biiw9rKb8EhnyofzduIdwTNLQBqSHa%2FCarEYmdAyVIWsMK%2FZnTr8%2BUDBdDCJ57rUnKt2M%2BpNiWhVBiEUP3tY3MSP4FwIGGiBkVJQdK43q2tqEZ%2FwJEDDBEQyxp6urL9hLpthsiXRlZbxuLT93N2GaGNtV%2FYSTiwh12cTUxeqgjoC1QIvEH0KzTE6iHd%2B%2FE5Fn9HsSXtmd97ien7Y%2BlbDngZyARaubz4QIaEEtq5WYeDa1JZndEu2kzoaxl4OwOezdYIOWDdJf0aJ0yquzSvNevvaOTG128SAP4zq0WhBXTE8ffwb7eZBvwtrH0X7ZfH4rjn5FK1PBQQBsqfTae4T9cKBklxbAD3LHqQHvAO4hYSIRJ8aBdEDF9vlWTQHcMcsfWDU0HnI1pO3lAswd0t2TfuxDh3i%2BOf9xiJ0qSu%2BFBaWRJHdI8alxJS3Hk1Fydt95h86%2ByNiRutQuC1v%2BbIOrcnKSXS5w4Je7xq4vZbsKrxQuMIwfQmZbBcTr9LA8Ec2Q4q%2BxVBx9oYUiIiUk3VqK9rJJfRqX5rn2Oo9Zc3zUw2k2xiBjwkLFDkMsQkQRbKt9lgNkw4pvDvQY6pgFezL%2Bhpl0s0vsERyCF2K4zmq9ZEmxb%2BeF%2BbQfVpWUNZTFe%2BCjM6PwbxxyFK%2BlRiTflfpoJYCdznk4JESEKmD4XuEakA2GsUvHzAxloGd1BNk395PkAsNiuclROorrSCZk8exJwO23r5R%2BvrdknVG85x7VpuH3%2BFYXclA0m05lx4YQStx0680ockqWD2VGEQfzE5kaRlF0lBuY90qzsH%2FIGSrax3H16&X-Amz-Signature=3bc1e97c2b714b5caa3b2bb5799f65b6a39787adc4dc8ea87e437b34040b0112&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
