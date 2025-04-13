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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3L267QQ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBi4lup%2FUgHcmJEGccBCgnItyKYQVf4m4j%2F%2B6xGOHoCJAiEAytX6PNMyug4eD6f2gQHJNnWiroZaS4AkRU5Vpmmn2hgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsabuigixa3cYYewSrcA1FOfq4bVZsZRCz8BgQy5tXjc53pa2Aq8BKuP4mC3z2Ge9PXnYnU4gnaOgSf0znKGTOAJPNQYV4YFQI%2BsVUkz8EToW%2FV3F5DN2YQEaMt928HJ3zueXyUp3o1mxcKVvBLymzN77xfHFXabrk9QOL8aVtSglpJ4iZ0vg%2Bv3p7a%2ByiHdQWLsJ5WrUIqKeoxNBO8XuwRawtN%2FJD46cDrrYa10P2VHj%2FRNvddtX4R1bPSHwo3jznYxSuejOhmejdS9pbbx3sj9TO2OOOBCqwGDRvTYWil5MkOrMJdOckTizJ1cCNUfE8ZRv1civHD3juJGVnhIBXAh6KR7sReWJjBseY2WPSz9RgIST4GFAhg4SVeD2sMZJ3TbieJjN6hHUhbW6Lanq%2BOJesdQrggZ8W2SgM4i01AYXondUsmtQ3MCIqFcevDiRIm1Wv4nqVovN3NJ4AAERGD%2FP0PISXJMJ9uD%2Bc0waLrhR9sK1dbxxVXWMoWQ4zDRZYch%2BJwL0LU%2BQcF1Ph1a6XTz0xWNPBe4Wi25cBzufF0PSdwdYe3gGXcJXZ0r5DlconFlTed0ObTemHwECod5eONn3PIYK02GOMVRJT8Zd779Z3yX3NsKtY70M%2FwzdqL6qg%2FHxXwpB8V3cWVMPiv8L8GOqUBoDVVqGaB6yltIrdIJpYRu2eL1%2BNYF08DC06fatGY54gLj7TSsWM%2BabrjSB5U4Z5E4wLja%2FYRylkcssf7Jps6U98PQ3eht4UgySxIb1%2F10E38kL3MbN7ZeY2uvT1fvWH%2B6ZIGvQ1swPLOwW7nyi%2Bl7IrwRvXrSMfkka3y8V5XQe8piqQGHc0jlrPMI9gVGw3ze8cNvhQnuZnt32pxj%2F8PzEW%2FSQ7%2F&X-Amz-Signature=6e10c493b00fef1f5d1f8828e6b5adc133dfb4397a3481fddd0c5d1b85d56917&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
