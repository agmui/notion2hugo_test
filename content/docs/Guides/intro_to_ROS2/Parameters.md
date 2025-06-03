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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQZTOZP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEtoEfWAHS54Ou0sks1HQb095iiJGV7JlcIEGP%2BspesPAiAav4wtEz4pSJ5BEZJW6%2FrcEbJbmrMzidfQaSd3ZL1AJyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMH96Dxx2U%2BwcpF44DKtwDDrGahO0d9rfSJgU3eh3Lpq0ZlrMlrDRG%2BwuwKc2geXkzvEAhwShptnJPozEhTzlz9hevtAhsI0wS0StP9INMtBZEEE5xa4L13Evd0ClWBCyzPvF27R2Ag4MMHqLk5xbw87EO6QkIVZjEsEfAqhl6OVczfGz%2F7C4F8iIiyucABIvC%2BKHEkAWVGOnMubAyTJcqYAsL2fHhsqrp8Az7m1YbsV7AQzqwaNHTYAbTIGf532Fx%2BCnvxvmfJt6FSkfcXf2o%2Bt1zl7q3c97pbxmwNbnNKm3McNpawVMZsIm4jrRqlAreC2ZYs0EK0ZcP0z1WmGbJXV%2Fgvfp2KWFnOysB3B%2FaaKLUUuDg7229y1biPjMD8ncYFtYvqrrclFE8D6T%2F4KDdT2Fr9YRRfHx7Dv1Cgtr2U2plUEluka8xN7lXR6hlbfUX83cFJrgTlhTXNTErpvFsh0MiszST37m8R1mep2LwXJFSe8xMqFmeO8uueMOGDXqxppPa9xJiZvwhi2GFV6DYyMNNMfuvW5yFdIPRIqhCQavY73ZGeGGVNkSsqzVin3ejkRxR3TLF7dkCeBUExq1s%2B9GhllsNi58vqd1fQl66Bo4axoFmSqZ5xVncU0Mlmhv6SzoQ%2FnugFw7Yyicwpa37wQY6pgFkuzHdtOlD4KERUbPxZ%2BoDf7dfOTK3cUkJ9cuvtL%2B2w5Skb3ftdED0nY3Rlx%2BgKap40V8IYjj2SBKXn1eVwzt%2BiEtZc%2BNImGuliNUGCIqZYnt3KZ46uHMO13K4t19Pe3Chy8dsPyyr0BAzKUMDtZcxCw1xPt50gYInxQlcbVPBHiITan%2F%2Bd2uQzHwT%2FZ1EK%2FYdu0SQAI9a4ZJAWtf8JdzDXDDJE7bV&X-Amz-Signature=243abd61c5017abb83c689b327985555bb94c543b8dfb073c7eaaf1af149c741&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
