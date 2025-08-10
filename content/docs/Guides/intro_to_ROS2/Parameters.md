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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6YWLHW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrJ11ryi5p%2BsHhhhfSS55YXSJe1u8WleskPXm6kEz5%2FgIhALy2ElTSUmlY21s5mgbs1Pbj1cOrGevPh%2FXfi8Np6wGUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzeOHTDZCEGthc3W0q3AOYeWHqSr6DvuKhCB%2Bn%2BlxXiMINBjel51P8Lx7bsYXgmvk%2BDxQwKdAjAeytwCLK4hrJSLnbcd%2BVCyS2GjgFR5EqWNuG5%2FrYmzAZoTtAbS3cDn6ZUrEs%2FuDxiS4zNxTZniZX7YWcRGYqCQfeiadottLQoRaaqJw9fTpKGKO2UTYQWvSrAbGxxaJchDg2Os73elx%2FV4nJqAds5SMO3PxKXCfN%2FijjXokYipVczj0nYvITCQNJiD9TaQ%2B7sT0%2Fzo25jMQl7C%2FNL6Kufb7Mfx492LRQ%2Bc4GeS0bD56Mfg5bruf8tqYT4AbM6Cebi%2F4uyEOvUsm6thcuKotn3XbvM1f0Kk8WX6byLmRxBP1PGBwNRypjzoGMA9A2SwYj1iAZyYjvH%2F1CBiHO5jjbrFPQfbGYAMRbWCAj7xwj4MIqQ2qmzWriZaYCXFWSDGtwKGBZwfNj5ZmvZNk7Dmsft53mnLK%2F1agSXYgdgNMGZZdoM1dtFuCsQiWXw4pFJz%2BU9yuPoaGrl2z8cjGEiJ6v966lFQDhWIPPDKcH56YSJ%2FN8TF%2FqKsXnJdcgqT6j79pHVgyRuCmEaoDHFSDKzFnLn3eUGTCS2V05zcIdqjHIjCxYIct0cEOXx%2FFNcNjCmVsHrQ7RLDCduuPEBjqkAVqzXDLLj%2FYyk1w7pROryXjt71VXG%2F9q%2FSoDu5iOm754Msf2IVaV3uB4E45sSeG7WRgN1AAymaxIJSnBOeYDLf1T9%2BJTa699neyC7bfzwk2TjsHsJXdxy85knnjB8MolE%2B5Y8Q65%2FaG1pmA4jA6V1%2FaLTahMDxMWU61cvG21AD56duyvEehex4QVy5O0hVmXV6sljjVp9%2Bf86zhjPabjjTo%2Fe4Q3&X-Amz-Signature=8f32f45a4f58e0db9ca63e52cf9e1efe14764e52fa151a9b5d1e98f332350381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
