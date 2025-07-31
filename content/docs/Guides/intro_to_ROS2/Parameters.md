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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SILQLNNZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUdlfbC7g9v3ITD1Bol8qiL1JSgcF8BFadBfkJcERCaAiA5Wv6PtPGSLYFxe5p2ZI8LMjVA3FvVdCTAN33Dn0vVxSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIebAowLBOLsi0VgnKtwDFmXjMWQjzF%2F5kdZNUP3AxSEfWzjWUEt8Qghrx8b95pBssFGiuoVPXlndI%2FA3T4mjQXnfUtikkVV1qpYhjLAXWc2G4dOwyIrFOkc4o8swLb0rNybWh0M95SGzVi%2FxIGXX791LPzFU5LsRCn4RYwya85AH0D9qaI3NuzFtKG%2B9L0T8sahkmVbQs5%2Bj5aQ7AvymKIKDwbrLjacoIlGFAKJOAPYy0THamhA5uNs7XlEGyHVgYLV1fukBMYGCZbk%2FGlHhSycw3jHfnaaMy3ETe5QPJrwACPXnog4bqJjUBTpCDtCh5%2FVsnShkjLRvjU0Vx0QCqeUJgjMyKs1mvLA3O1tu8VkoXYPuA9Sz1g%2Bwgu%2BR1iVxpq27cQuBxG0NBRBHcbabzIPGVGBkBNyz%2Fm4vHY%2FzwwEcIewErYX%2BPrseZWLx4uyHiUe98s2QKyMmznNvlS%2FgtcyaWfpi9BuegRjMSILj%2BafOVqC89I%2FQaKaKsjXvOCegO4AQp%2BPs1hxG4GTO0S2KiExB9kDQGGSYVNaQbZmErm1wzOH%2BGvRVRLaaEisUHeFYamb%2F5B%2F43VDo8nKu9xii18iRB2Qa5vaX3t5hz4O%2B2skX2ar%2BoxyS%2B%2Bn4zqxnsaLCxvoiPn4sGkVxRMowkpusxAY6pgFi6LYbXcz5wJ25Gk43SyZxsUNwRSL1x6XDk0ecVjI3hc%2BfasB0PRe84ZW4sTPZb%2Fh4RFQ6aSOS9VnEbE4oRVrlSTAF5ngmAUKddF6rK7EWxc9fnIVnJJ8LKIc8P88OmXI%2FoVOfCxMXsLWdsnkaZrK2oBfioO8PYe3jxwU0krqTF9C5KqR89fJHPpzze%2BrVIVn0vRH1uK6mDp9i%2Fiv82lCZz7Tls7gY&X-Amz-Signature=1c2caf91935f70bde823de6d81cf37d43cfae7d33ff445f0cc744c6507fc5540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
