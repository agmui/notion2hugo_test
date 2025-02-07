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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PNUGN4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC790CqSysvtOZm84iP%2FDV9QII8i%2FJzCt%2BcXrUETxcAgQIhAL%2BzSddwbNhi%2B3IwDt1O6pGaNTGDHE2GK01oUZ4wxS1uKv8DCHEQABoMNjM3NDIzMTgzODA1IgypaIxzTc8tkJ9K8Bwq3ANiGKDsh9l5%2Bl3ObEaO2%2B1%2Fi7Bm2mkPdtS6BanpmetCbvOyZ7dpT7c9ecCIUBfshZ%2BY78PIfiRTblJ0y5aPaFop03fZkbkM0QZWFtJTDZTTOCv6I61LB%2ByCFR6BqjC4krTBFLy%2FYmuS%2Bwf%2FzoH0dPQptgXDg7AP4OupGU5K%2FMReNGNKX3ou3aO%2B5eumJ3zH2Q3%2FHP1%2FoRn4N8K4qWHNv3Fzr04l4yz8eLKPHThKJ7TgAqMtS%2Fv%2FOd9IAaPrRlo7LdVDMXRCl%2F749YhHNoc6q8KDhn4jc6bNcJKxZ1QXnz9%2BaNYUadKk8MX79s%2B3gfBV6RGnAkznwo9QcxIGAPCbQWsB5KZHyXS7RcKoRGgZXaXMxpLZgyXZGHQlkg5DDzaoaeTsotXVC5dfmoTINmbiLJsc3ftBgRqVznIzoQp8%2Bjl5ffRKTOSVIo8rOZL4Yzz%2FbmRVb7jrpOuJ%2Bb2c6m4gXAJgLt7YxtTGOdDnZEawxsunr8pZLYO%2BslGhyIONTJT5rL8UwL7xlgRNRiaY9oUtov%2Fzl2UL5dn8cbgrTBzAJHz%2B80iusrhE2ZoI31HYaW6c%2F57HodaH%2Fc2Tng3%2FtIrDXB6BLbOpjPgQCDf0QdaBg8XV%2F6Ofrlsgf1smvdwphDDu%2Bpa9BjqkAXEKETA5QJhSMEUc7SsRqFBl%2Bk98Ue7w0viOzEvy8oLZiJC7wt0GA8QDWq7tziA5XipzEVg8Gly8GKFOwD6k2Rsqq9%2FStlCYXlSpFVsVGxuturZzfPR56l4YN%2B417Cg2h2u%2FE81tR4IhmkEXVHK0C8LdJW5gTXJMdPO4enzElxCGTHe5pKD9pu5pk6vlAopFSpmpwrQhRbuqk0JxSyE1Atzmo%2FrI&X-Amz-Signature=f6864098e74aed55a91997d3974892b705e2c89e45fad2193a20a519eaa49239&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
