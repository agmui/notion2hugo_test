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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7WWLWF%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIBygoUxoRFeQIIiIRYZgOkF2V4ja8%2By7qdiKJ9rHpKR%2FAiAT4jpoCI0a5%2F8vDnniXzwcr%2FR%2B7bd2d%2Fuh%2Br7kBHJXLCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnzH2lf%2FM0dA8HNGaKtwDsAfqdDIfDayIt9maPk5N0vTssxNq5gX3aRNW59D9fVOQ7Xqn%2FI%2Beezc9wQdOWf0u4mha4N%2Fir7q4K7npgmh5rpDrWML4YQu6f1YpKci7gJKAVyVECumtLUzUaNmwce8MSQz4o0pAj6ULhb%2FkqFiS540V%2FOFXE69w3vXty86Wza%2Bp1y9M8vUTkDK8MdnGOa%2FKMjYRGngU5k6RLrnIKYrjEq1TvQgZkoH%2B%2BvqrJzKOsoakYJpEFKVdooEhMbf6UP6KE9t2PA2udHaB1Rr4HWb8UKex2yRZS2059m%2FII9jGJEa8g8WYDizbL4IfEBIv0v2w1lmn1kuCkPgQGuQ1t3nylH9ySEj7uoqL%2B6%2BbPm1KemvPy5iN93xQtNTIVNzUY1RhI7WEgUTz0G5KEMRjGkYAGJr%2BV2rD4aCLUVNXASxGaAe4zfHZHsB0WGYRR7PVz5rRUATRhMS1nspU3rIvj9TMRye7TgF%2Fd1nQM%2B2eelz4gtRAvJ2Kxa9wm2aLa1ihqk87H1FO0BufNpuT5i0yzUW1fuSSgscq4RKcc8eE8ZIHNU1JgVI8WLYjer4VE7JW7PNMUDKx9Msfnc8ZoQNKokqtS8L6heHw64DpqJE6dQ5%2F%2F8PM65uD%2Fh3ZaPiavGUw5OmivwY6pgHfgr87dSSnOgrqllc%2FS2cg0yWietjPG7nqXgC6%2FrBUBhIy41jraDLmhfsC7lvV1ICYMuiuDrYEWUhphMIO%2Fras1jVNkhV4fP%2Fg%2FnMo5r45HQnqrAdshn%2BAg9ZAqRDD2fBWzLJwcmon39BI0hjlIZnhVG%2FLXkp3Y%2FhY68FMLISFQJDZdQQK1DaKGsrYvxTpLqG14%2F1TrkYN9LSLh7aSIPH8GQSx1kxD&X-Amz-Signature=adb8cece77596c29073fea9b32d6a24f1a0641687cf91acaf617825e6bc4b880&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
