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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2U7ROB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIAxs9uaGAYZAaOZvoLUC2FAbaNBZt31JKtEHZdXboNzIAiBoWPSOa0%2BLmmBhcha3wYOWfxEdKcy8NvJO%2BciUvFSt%2BCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM0728sz%2BpMEh%2F26ejKtwDRwjtdHa13OJ8cAOsTc9kAXhMQbRkrjoYjA2INWpij3MMhPjDEM5DhgwLWwxB%2BlMHc9TYaXpUQA4c%2FdBfDTXbTVUYFjp9ua4V5K4Pfhax40cZ7Oh%2BzuT22v6%2Fd23dcchWc%2Fpfa6IAO8yZIpG0v0xufzTEuEHHRLSkmYYDBZGCPZDHwTcq2VnjJdVOmAZndQQ9VqCEUHfT9gxMaOFvReUNc5soPuMTaF%2BpNcf6MQP20ckpcOgCu3RZ%2BS5yE4OTu%2FJXYFQRWQTfYyPwVhJyA%2FpQteRxhwFEp8f%2BH4CDbCke9aAfOgQst2%2BwPzOyZcBRcw%2FYqrCNj%2FRR77dz4BioSkfEgGdHIDTmWLZN%2FRFqXakhihrsOS5SmVSsi%2FJC3cbWyIKulHuAyKZi5ruLhwx2blPbTFiCtz6I6wRoSr3Wy9CSDEyL12SG5D2qhDUgWbvApeVodwDrWd2gzIT2WJ6jRoOLdE0XIeVRegiKo7gbc20wj3H4%2BXCkthIMyARu4efY3%2FVcYbBIIri%2FRkZVtCJ91j0X2UDJ55PPSsHUXc8sdCWRCxVr0AWQApixLi1Csh%2BxHH4qhO2YMLbqsc25ho0bds%2B1cHBNb7Bw3X4Lv%2FP2reQnd0DlGn5vsuCJXnkuUKkwms3AvQY6pgGqx6PjdsL3i5YhtkcneZiZ4B4MpaImqQiJWXatRcZswnteaXmGNXOl%2F4rZXlKilaoekYTSVF4QAB04pcRs5NdTwetXkopkODg2GGdtW%2FfLyTOOdlpyaKHNXE4R4Dd%2FJ0VkYLXNU%2FWM%2BN%2Binc0AUWuNHOPQqQQtCE0ZMoRrJLnrS9RVeRpLiUGKKHRg2r6s26NL8z60gEtcIB%2BKhFVxKGESqjyAT0Ti&X-Amz-Signature=3fdd01c515ee21d8ef244b3f035714c12774a8affb0c6f548832590db39c9e97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
