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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSSMJIHZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T024334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC5vBfoaQcebI%2B4RT8aafE1oFFWihqubjaOb65iBxPwoAIhALMyZNFekPtKw1yPUr%2BjY5%2Bpr07ZKKlGgIwkpLi6nGzNKv8DCCMQABoMNjM3NDIzMTgzODA1IgzaTYcGh2O3HXqrx%2BIq3AMdFZYrjmZkNWRvXK6x6cLR2jZk%2FYvgoCjzTecFqOkL0cR%2F3znd1fDDtZ%2B6D%2FF3njXyG9gW%2Fu0AiRZ%2BVmwoSakoYkbzVfIGcTNQdgiCbieas62D3npaHpCTYDkALn1UmHPQskcRBBd4qY8oa6uomc%2BSKgGHCS7yVMZNSPLaxBNvWf7oXUD%2FjsAJexQR%2FpRJLiwBJiqfOMcEpZldLBZuP7MW59%2BRMtXCvAUr5IRgThi3p9aLHBIJZIDPBxO9ea%2BuaAGgTYCvCb2iF7K7Ob04zTbatuM5LLZ6Vx8WfnuivMjAlqbqicMDJAWqLDHvRoOdp0fttI082x3r5ogaV2oC%2Ff90qW8IqkdkCZQdHLpVnXX5NZgJA4JS1DUvgZCL2OECWDhS%2BF0meRkk%2Fv2TnoNmprzE5SaSD8Hrmj63A1wTXZZu088rL7Rgdw3dcIH0ExLpE6IWDzUmrCjzSdnEgnhFrDmqftCqZ1d7SXbMGz6CadLSlWEY2nWIcPfNmfUcZHdSa9ZC4fkZoVFclifZLtiGCL8oYorPO1V%2B9f8hn010f0w%2BpZrmQBFud4DQ9vbrDJoV5W8uaNkrd%2FJFb0RYTZ%2Br1Dowmo2L7q%2FyCf8CECS0w68HV%2B3d2RN1kG6aVzacajCU7MnBBjqkAWQT2kEj8LkPnAeqlJ2D%2FvnRjGPZlzHeHIAJFqKWe1oo18XDoRv48Nkowm3pokKHErUzSkxcRQYm9an0fMb17YCALEl233xABf1Xy8q4rgWItrY81jn65QvMob1v5sfdkt93p%2Bmp6%2Bkh%2BX7WnYiaKgKgPhhiQEdR0cTCzqv9SxFRuWjBxTn1t1JXIMgoeiNcrZlrBwLfQYcgE8imo1013qoCbiZa&X-Amz-Signature=66b33fa51570b03529b87b4a767e084afd58b303c89ebaa06a15a59798e58aca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
