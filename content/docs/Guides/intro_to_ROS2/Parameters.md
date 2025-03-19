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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644L6UK5M%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFMQAeiMu2TBd5BD%2FSvADaggleDdpK4WBxmefEI58JNEAiEAjwJlHEPQii4WLpSZqp%2BiCY7S7UIflIC%2FSj68gp9TceEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJquSH61MkOW0pEbcCrcA6chhX%2FVms2P3VnbQM61j%2FsgBxt6aqJLm3q8CrwVh7Oy18yIx73c1CEu9yHl9LUeylw%2BIMywJjLfaahuyEiQj6Mh4nIsD0SjwclviVTUJMg4en5j6fGdWXHq4%2FEeRJvE4Aoc3mYfMUO3MWvSHC9yG7O1y6A4%2BLT1O4JIcahu6LKxSAdzyXIG2HYADCmBVWKJG2cpUKST93BPHEkAS43MuC8XhHr0wLbOQ0UeOHFy36yObZpEBAV%2BJSUF%2FI2T4JeVZqRJISKshfiKRSG8XVwd30HZ0zmz5dvtgpf7HRyv7OWMZUCMxSLSDwk0sePFGN4PpVhd5cdNCmM1MQPzIMlTWXtqjOfhXAL7QpSmbUh5QN%2F%2FkVtgtuk%2FRXP9icjAMYI6TukvxKPO7XYoo%2BaiySyzYUgazvX%2BX9xIM%2FXSYexq4cLluwQAdlEo3DhyCx4I5Q5f%2BYt0CWzTAxvVaFsVAfzdiy3EYDkhNPDLWXeJbWItBwkD5cR7K2V79RshudeSR%2F2vATSp3J02FMM95srlghhCc6LZUrUYJSB2xsaP%2BFfhemqDflXwKgJjdXCy2m8fNq6O2nHOpgalHHtfEHKlhfYkRspjaonyW%2F%2FGJaxe1UVH0%2FapwJdSfNohm4%2BDx8z6MPvE6b4GOqUBFOOwWsaCvwcCRqzACb3fShKZYWTL48W4ozFNXufih5CBbZjmp6QNJaJ%2BWbireVyoH%2BWwb3WSLMNex2cq4jv0O7TI0%2B0i%2B41vkK03I9Eh9Ee5C48Qv%2B7ZOwBraNREBMXOso9jJtmNv3jf8AQJNK7p9j%2B0%2F27L0EiJ2QPZJpnytNdtaHVa7o2pUhX29tHYcdaIia6LCNRBf1pt3m1LSbfUF6fOvbeP&X-Amz-Signature=ec2012d02665ebc6879fa627ee8d1d15fc2f02908899d67602cc87b264e7bdb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
