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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRB3IZF3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7h1%2Bv7c4XOpSESpv5vXxBwgTYXe49%2FwgNkTQR1bO%2BdAiEAgZ3s5CYU3x14SjU%2BvYTmjJ947M011p%2FGs%2Bz1BR%2F3e8MqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK8lMotmfqnzwr3hircA4feZoaxwQL7iEN1BVwIFRWKktJec%2BLK6oP%2FEC%2BCKAas44p0oNOZ1eKfthgqJpuVk9gG8hu09drT6XuxlXEy5%2B2rfyTVAfS2ktVkPyLPZd62l%2FfGwaqLS10KtH8aEO57kX8y0E5Moo7dwIH2abg9me5gMpF6oeBVAxtkwaq0OLmeAYFNN5%2FzywdKbJOKqBSvkWhkSKMBmVVtEQt1iN%2BXesw6wjO4rAVTFWjQjIPLzgJsjO0N%2BvEDiFRSG9GAkNlKxlw8IA4wDf6fxwlbo1%2BUUR9ujTPw%2FHaovO7mlxrAdsIWJexJevU6od8IMxgqzIuU7YMq59TvoSEWm2ODvSiEkxR1t5IgOmOsEkvfPrr6kBZmV7ZukXb%2FuzHRxpvUoEmi7iRkchrYMz8NNPYKmPRe0KMEttPElj9b2ZPSbf7Nd%2F3fOwFC0SlfU5qlwjZQW9ZI6WRKwwlqfecFwW58Cob1f8yn1ZxNbMXR8ESo1CO%2BK0quTtc3d5PTuzBVPofeEafkTW8REuaLr7UVe72z9BAjPhXpDGs0j5TMDt6pCsK7Ix4HT8S33PYXwBQqNatYbFWowMiwNoCOE2SrUjUHGMvY3obH3ucfxSKyI5HDd4tDBkExc%2B2y1zuwLcCGOZoJMOLjssEGOqUBMw7Nv6Bqk%2BP6mQnVdxWFPWTdeo4hDsDXQneiMtq%2FcBINwy3W4tTtDBn%2B57PWn8k1RcJwnkpMO9iuLvpn6uDCdBQvHjZPDtR33iv2sXbeEizivDUwhtgvp7HaLUzCnFWmF5WdR5IaSWonORoyQgz2g2v85VReGXNJ7QN25613fHsnrtPBBNWNPXECYAARF6TjdQx%2F%2B46xTMBs%2FJuj%2BRfGqC6cFER0&X-Amz-Signature=6d5e173e5aec91fae43112778e79ff792281f628245d507b2679a553330c7df8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
