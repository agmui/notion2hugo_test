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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JS52TMD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F9dbh4yzghwDSSYBELU3k2qZIzU5%2F8KxQmgmZ2zypVAiAriUfzItD%2FpJ%2BIziAjskKLE%2BaF%2FmaDbZcfn%2FpNEi4wECr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMq12SSrI4T8JQGbIZKtwDZDZRZF4F%2B796Z%2F3iVzycy9%2BARpOqwU1PqDOJxEFJUmLwLxQvFctcE9iHATKKwi70JURICDqITzDHB3y7St3p6XYSZVoLdiCYc6qX0r4D2PiOZgaKvv%2BhnbLq%2BrlQMd0SaYPtE1yX9seOYrqcH3qCrLHDDvpfUqTRBfHODKhHpo7F%2BRB5%2FT%2BXIS%2FTv5IVE86cW9v6HckEk5ImMDKGud5ucL9UD29Un7%2B%2BO8PNj4dfoIvs5MePvlOphm3BvRuQW3FYjkh1iT%2BB6TZ0HWgDFN0r01nj22DvxRz1jNpz2tnoJ1EWj36JBK%2FFloNRd9SG2RsQ5%2Fz7HguND0AIkcrkNj40b7V58fXjaGMhH9UYs77sZneUvaLBqt8Rn93c%2Fb5Q9I8ogm1zFD3I%2B18a9RftFsGoBAjPnM36mzMc03o00K4aQrigF5ZnkZd4Sppw8yi%2FEv0cjMI8m5%2BG1twXKvVpZKV3H9iXqcphe9QVanMlTZRLOoTa26X4iEDzX9TAHP05ztZ8YUZlZZooxsWvl094TEWvnZnOhK4LYvtppzIjRHshYrMbPipGUs6cNB5EL1O%2BCtuPOmev5fjUcf7xAL2uxuBr1K4%2BjvgswlNDcQDIS2Pkwv%2BP8oDyHB0XBlIh7RAw796JwAY6pgFmTC6ygl499xDhuw6zmXYIb0AeR7zfsp6UAwMWcuHnmNKepwnYnsVefs8jBZyhj%2FeTa%2FZOUC%2BdnQxvZFazcOKaAmQ9a%2BB8Frh64TfiwB5tpqP5BOU9IVbnqXSqZy3TD7LYYyJiOVVfjes%2Ftop3skeV5WZ%2FEsIccIkFqBh%2BryIK9tsqLJej6gjcQQ9oNBJmqZzjbEuNATV%2FRKrvwrQtDSvX0wGWQNqB&X-Amz-Signature=e3f8bde2fd778ecf66846172bad09b1522d053d722b5937d769d982443d8450a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
