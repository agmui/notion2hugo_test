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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XML3UBGK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRqfuv2nJAQBjhRH4A7QVXnB2P8kiMUn%2B3X2oTx%2BBgUAiEAjNeKQYCzkohJN618toOxhDsP%2F5iSqNnRSJtb47U9YLkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDF%2Fr2%2By74NP%2BXW0PqCrcA6FDQBak%2BlYOiWNg659po3m1WdUaRcg6DwzdH10r6TmFhpn1ruALIeub8OD3ei%2BTu9jUw3zJAqq%2FzNwSFgwQQ2XXTBha4oqs%2B8OTlI3Sg5qyd4H6Meiw8r8xxC%2FBHpyMpN7Iy91krYP3YJr0BWc%2BGE5ozVkQezTvfJ48iMhjPDgIjtvplRcOnyODNSqFVRgvtf5b3mPXf1kIk8CHqT0IwsZ3l3JXE0lLuD6upcesZiKZ7O%2F2cB5wR50eu4wlSQ%2FGTo6mXoBsg2kVHfTeCEDnEXqHg1%2FSIxGsAIeFkt02eVywszcQVkPr3CVWx%2BdBRI0%2BNAy20I4FvHzdkuy2qZyiZRMC7dBFDTvrXxnbFW%2FdsO3bgutQAunorP46pwtqBboyRNtpsz7CP6T6IRg4SrOyJqCszaRnsG8GBiuuae9iotTgTC9p6xO%2BLMqgU%2B7%2FXrODO2XJ%2BVSipea5aO8pF8YhtFtoAg3zUGEs%2Bb0097PTNruQ11mN57y5itcAIo%2B1EKvv0UbNaIpsrtQ3tNqyWBF56xQOQizbLext2f5kK%2BF1qEvO2JFRyARRxG%2FCBslUeoYgXPzj3shMj4450kCGVtRTUYSOdQ8QHYekWWXzF50NGkePiDZ8DBX0Wndd2iyIMP3h1L4GOqUB5kU6%2BtD2in6Nop3xF52CkpHot7TnVcWLFNCs2zkAMrgdya1Rp3nPGAX8ZsWrgjqQLeO8zyS9fp80D7FtOXJbcRMzsvHs79HQjqX6rhHtGTyjsyncu6oQqrp%2BJQtmN5y%2FkU%2BX8nO9%2FKM%2BcGYjJ0y%2BylEQTu4jW1xkJW4nCG3I8XaSHuXBRYBD2xIP09FgLFBmC9687EeRHhpzQDGO3eTn2kWN4cDv&X-Amz-Signature=396fcf6edc230dbbc4b07852cee6a36813c09c9b263ac5d1c4b6a9e271ba87fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
