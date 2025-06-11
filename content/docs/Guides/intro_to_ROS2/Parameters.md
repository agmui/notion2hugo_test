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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6TP52Q%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtSxJ3L3a4R2pdOjUHSfiQ1N%2BGPYNnwG8vWr%2FyyqQs0QIhAPaka3hXhlw7WzmYnnslw5whrohKDhVRg1wYCQBiDPQOKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5LqtsKxEX6CirodYq3APQ8fIVJt2FH5z%2B57xqT6zvBOez3r3HdOGc4CB4semCn1WU96JwBcCVEe%2BHQVkDwqeDhky8AeL5I3d7NcKsy9PRTBAbffU1Y0v2SG00xHlGGQcNPMi26%2FVhFr413kfZJ3tdXf8ADXGUkIEnuZ6y8NyaAyFf83A1j9IoMKAd5SoBUnrL3E60vXnSj6iHyv7%2BgEUsPYFv469ovNZl63n%2B4hIvGkOiTa44k4zbl45s8ekibW6wMi76p%2BqmtLxwaFQqCNe%2FIIWAssa2OYGhW%2FNKZTyBBNCR6uM%2FaREBo55mCT66QY5FO9cmpJith1aW53vj4DeA4Ur28xf3GS24%2FjqUPIujWU7dldlr4pchnwRUEXpfjFBmQiQ0iLI7Z5r6MWhSzfcV8EUQPDfN39s7Lf0E5%2BXIw6eSGThihJanLpl7dBwfpjmElTkfBDt%2Fifco80zuNSriMW8YIdJhTe4Bwny436E78BxAtxVbyFoE0xNk8CUhiU3SWQ0Jyxmq%2B9VBwyYl31EPwgdOJJQnh%2B%2Fii2W0WJBWYqiwA14zKrRTnlGukkLMSPHFumLALVxhYIZv5AwUIKvev2i4HWCVDt3zx2EtQFfKqMxti0W6doms%2FaW501x1ram8Kce7%2B0Dpk2ak2jDHuqbCBjqkAQa89n5jhZHnWOth2yamQ3foAtelYiiElIryLrPApsXKwDuFcqBhYhhb8FtXlAs9gbh4AhnVuqHadzaCWkEFUrwGBh%2Fh3xAkNT6LJE9nJ5KO34CeJ%2FJlwS2sHR6eT%2B9pApSuoANJo4KzIA3uN9w332bCAf9SpOl28OdpCaZrVarx0gCf9%2FHp2kzd2XfYZT4nyVJAeHOEqwyJdU5yjTwsIDa2nO1r&X-Amz-Signature=79276eb0c0c2d5591027687970170c6fc143b227744d2beb911db466465677f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
