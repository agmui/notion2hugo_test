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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSGLSF4Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfntgl0IB6%2BXnDL8R5xDmgiJHTXOF3qYf%2FCS%2BpMQmVPAiEA7cbtBk9lyipKaLGUVHFYnWD2vqpR8drnP24MQX16sgcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDonIot7AlgXlygLQyrcA8UmHXUuyULtMBR56le98n3JRRssoy1a6LTBhuBOte6xs25jVGyevkGOSEkTYbb11QisrOCmSi%2BcuxCpObnjFSUJmXnWo9Mxj9PlLy5cZtPTrm3aHMx3pcGwSa5yaDD%2BOps2rNbLXcw0bra2DU%2B6ZlVMAcoeowjPmIJC%2Bof7Odk2B5SMAs%2B1AUMQEq%2FvuRG6Hvb7nv7OF0jVl302V5aElY%2BU9d4pSu33Dm6BcEwPWoTwGAPqqU0pMOaGr%2BmjH%2BrnNng1m1rYjwQNTecPJnZCAww0roj%2BDGewepLXiWZe8Y3%2FbhcrSPYjSagM2js6KwUfmlDgNGjfPhEE4dnmFz56H5QgbZGUZkyOcAu7%2B0Hx9EXRWoO4SFP5xBFJ4S3Wapyq%2B1vvrzENB8wBMdPL7wnVaEgSrOr2G5jqPNfcy8SUIlG1FcJNto0aW5%2FP8b2dUvq%2BIWKZT36Cwh9vHiA4ieIY1X8iSDGflaElqU1t2Bpj2NTHCXAvaL9Q8cpEIG8uNC70OxkRxk9wnYFVYGSGPKEVay%2FSjqI1gmaYxxP76M%2Feloex%2BTUU05OAXmU4TpIHm6xH%2FN6%2Faaa6SNnut3E1UbKphoBwLbwTRv8X2IrLkU61AgyrIY5yK6ussDHWglp%2FMILTpb4GOqUB6BO8uTdMBX3cFX4T21I6eco%2FvO8ric8Ke7tkNzC1%2F6Y%2FoMgeSjsw64ZJZ5v5n22f%2BrLNawY3N%2BqomEXtfg%2BawKmphr6WHMU1ec0G4UejEq9Nm6RRR5Bz8h4Dvs8jvRg9RW3p8WL15Jfu1oZqvk6F33jYDWlaCXdHsbB%2FSTvzSujAdhoBsm7sEIo0nFPHhWvKAtSPJRuJQsZqb7ks32cL1bCzw9TC&X-Amz-Signature=52e0ae1a36dbe4d9bdf89eb26f59b04f676952f7f7b25fb9930db51f12cd8065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
