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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKM2F4JW%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJdttKorxH4IPyXs4diawH4R46m4Xqb6LTVZx%2FR5oF3AIgYxjLJvkXr8RImJ7uW4gMJJlf%2BwsVAmwmM2SvTRRa758q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBWw3qJhcrOkcfeldSrcA3ntiHyRxho3LGfzAKnVke0C7NOfbIfRS1ZBR62R%2BXNAcv988yetE2efH8C4kHUW79c3WsQp%2Fbc3QmFXUczzjzm2NnRAVJX%2FVmRcjzAr12wDbgiRcu%2BBUlNTciBFQJuZYfiaN21LSW8XFJK4epFoZOl0ayat7dCn2Q8bPoRVZiU0wgBDwsEtzyx%2BeFM%2B6fpxgDFxDD30QrcvqsK%2FYNtRmepMlpNn02Yhu9sscqxfUt0eyea8PoPKX4wOS%2BxLXDKL0PVD%2FB4Bywl6MQj9TLTLgrkoqHV4MKwWya7d2FW8oDYNvQzzHxCtOq0xJa144XBBYYyDsidkuH1ekbIZ5q6ZSN0ByVAGDEbr7FwPBfCreZGJH64%2Fs%2BCpwo94Rx9QnOALKVSL9QpDMdIFlPygqSF3xiD%2BTLL%2FvGKGAG0HGUmCPyaA2pl5vuA4KKmgOLNXnLSv1e5GQuXyxmbPctFw8oz2h7f%2FQEdV5qH1jcWHyBGaL9imYMX%2FfYls027uKLDXREkgLEe1U%2BSQJbi7%2FAAVUTEwPUb4FZEEsat6%2F6KnpAw%2FJtI9%2FrDMCr%2BcQtq1VYDps37TB7Dp7PgUN%2FoirLF6mDJMyhseEpu7tSG%2FIyf2%2BfINk8FVf3%2B1oD4fSIk1ce%2F4MIbLo8EGOqUBcGpMRWokZUKwiAZZsCG8dD3UpOZn9XlRoCFbaMOCGs2yGY5yKgvGhpzNoxdG1%2BYXjKESbqqMw%2BOElbfuNJwFGMl6ROOSfA5xNbJcyA7VBsy9ed9qM%2FQKNYGWnAxTK3XrzMkibkmgp0tAiBtxHhyaZmBbig0Oo%2F8cJtNfnb5rnGqxRaqv4hBv%2Be7MwBz7XrMzPJ2Huc7A69MKwaDR8uyXsJtBN1I4&X-Amz-Signature=fb0b63e386dc30379828777051299b9452ef7eb1d655e27230ea8d95128ffcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
