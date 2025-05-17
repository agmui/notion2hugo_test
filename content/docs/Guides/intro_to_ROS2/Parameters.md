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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUYJQ6J%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqmSCJRCzMX8rwWPs2%2FZTR8j5GwygwcEa43qW5871twAIgfg%2FIGaJDQDRL3lWGZevVPuVH6Od%2BwZCpUaJcn86%2B1qkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL182Nh2BcIBuIQ87yrcA88sqimo1JXpPZhPINP%2FTpf9pfXFsXtKnVwoctQTYvrhPPB8uIYkStnSPC9q2KiS5XB4746Fdf3jI%2FoPSuHR8uqevemgCDjCNXhgqvV6KpbKL%2FQN3rGnekFm5w3K30pZ1iUNhhxv1gm4DRhYmKb2bhp34xoLUYyNjwcRJ3UDLHgxPqLEBLgPYVVsb%2FOFgbx8yDWtDDDADwxXHzo813VLgWrawqS%2F%2BH%2BGnuY2GZxnqlm4%2B73x6cjRLQ8NxYsZZyF3Y4NJso%2FXLaeDolhluPOclJ2QuDq1X3uQyQs7eZdb7o7viuf%2FVPBhaLlO%2FoIiIbXZT8D2U07Rvzg1aR8N3VUzSH8HZDzeyi7HI86Zm1lnbQfQqdxjFk0YJ5ETYulL7sqxypPiG%2BGSflaGChVJIH%2BIJrxSZbPCOO8j5tUM91i1W1nwTj21so%2B66XXgLY5PcAtRQDgcyjrvLeqigdFFtuZII4d9H7v3kLl50Ino0Td9sfvauAZF2RtkSPUtN2IeL%2B6Zr51gFlAUrS6MC5Zg4fXAWCofuDlZ3S25qHLyClzdo016U5ZNdet1jqiAN24Vwd0a%2FpCBBtMJNI6PoboGU26ojkXTXfaXaSyO5pSli6NqrkIFUi2UxukW35e%2F8pNnMMLaosEGOqUByxLnncoAy%2FXd1xS847oiPBV6cbElx1Vj1NLGisjrEB%2B%2FblRBJNOt5JOS6AO8mGOqAPEX9125ncTBUU6USl6amHpMFDdEoWoC2ZkZp23msCmE8kZpRhSJ5Yi5OGRYToSpqlUahdRkqfX7y7f7Tpep2Y628h%2FLQ%2FHdrtPMLyRXfcU9Nxru5jfIWQNsOEngPh4AS%2FVuedqtFuSQk7oOd1vfjManlCIx&X-Amz-Signature=85d3042a0ae1d3bca6a4c271aa41f774064fcb7985871273451d9a7581c1d8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
