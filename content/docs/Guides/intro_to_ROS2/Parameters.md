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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KQF5PJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl2UFe5Pd8iZ5Q2NgNlHIFVzjUcpPeFl13iWLNRhxntQIhAPHmf1aCARV3SW4YCRGi4%2FJKuvhcMmBKxkNG4491ypTGKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEymYDoFFlak%2B%2BIeEq3AMXyKRxGcw9acQJ2B5wMWcghDV9CLXifGSN96imXpk%2FIBXYeboHt7rKLEHwl0SJanp5qkQEH75mWPIe6ZEXuxlWr4Bq2qip0uC8ktQpK6IUGNmq8H1uAHm6DhNnQuZH81WKiTQKOJN6RJN1Z1ajhOohxu9Df1K%2FX0ilKT9hQQE%2FJEIcIOawA%2FqX0xn2j7AiwjJNRjMQ4BZk0xka9EOKgwBEdLHt342F8MBlPlY9hqWEzAw%2B6yJvL5p5Zbg0WuF3vqPZWqNcaiXZAmrk8atcFpiOlJglT9R0jzBJE761sEoc6bnPSbMIAe%2FtGELWWzlT63Cbe8i8YkUugQgHasF0eU8quQuIwitQqTPertd4NP4ZfbjnTrF47F9yglmqPbePiUkXn6GY5RETKsllrm3Sn%2FMZInBFttAem7rdYasgEvuAvBlYizs9SvVhQ%2BOf12ioFTgtd9qDhxgsjSN%2FAHDfVhhaTuUQHDXrgnYa%2Bm8X6WcosN9ogDH9KJL4Yk77uUX92uGpBoAtqhToFEwLG3%2BEP5%2BhJqFH8cKk43mFm5TbXBOSn6KnxoZtXqcUEzcCQnFn6JYOl2%2Fe8kslir1giwsHbc1dgVz2EU6REA3W3P9J%2B1wT%2FGLY0ocyb%2FkE%2FotynDCOofvABjqkAUhVi6NubplRkEjqTa5cWd%2BHWBw31cXmQTfMuFhS2rJw%2BjPK4OiAI%2ByYifTDVXrGcya%2F1K8yytVDn%2FS7hU1iFxTTo2hJ5ApueilAjZtD6PuBtBNTGyl1oyrnHohamSMWhXYXkncD1iC7rjmNpaIl02RMAlWHX3zOSgKMfNREBC6i8S4cs9bNNn2ZHFFV4IaknydKhB%2BhsMUuMfrLDph0IMJ1uMRL&X-Amz-Signature=1ccd91fded3e357af73bf3622787262aa3b84e48b1ed3de51780d289c05e58d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
