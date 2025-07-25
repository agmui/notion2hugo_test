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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAC5BLCQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEp7IjX6uRHMlGfJYBcmkmoL0Pdh%2F40HtmqgELXtwkDBAiBvq%2BlxV46WYTcQ6U%2B4uhFRkYMh%2BAqnuMpEvSCr7AzAnir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMej8Jb6qWOcG8T9FCKtwDEfEEL8jnWJ6rej2ZjlGN1ZpXpHf%2F9KGXcWsvghQrkSpe2T1ICkI8kAiK%2F13xkYrh4R40WdeaX96rvmnTxYSxo7MpNsMx%2BiatyGwxuh71Wiga8LV8nlUFKWzzO1IYqUg4ZbdlQd%2BRn0nruwEb2LPRCRcR4lJvXhnCJdArA1WMXbI%2F3Q2vhQ8%2F4yCrDHEp4RqCTvi09N8SgCsJ4v%2BZI67GK3d3OTZlJYGJEkOvCNJ6oTGn8rOdUffF%2By%2Bfrh%2BdAPrnAOVWytjFl3C0oblWGWOCS2kGn60fnTGP1PrYEY88pXd9HVU7qIL9c3ZOFklqJJUsdw2Dg6%2F9N3vOcjAqESxYMNK8NrMMmCrHp0VJSocQi7vrkRFPbd6E%2FkDet604yzWfjBizZQm8L%2FPjNXFl%2FedjL%2FyWvuwD7Xa%2BUr1ZUYOufbyQNL2CdgdJR92p9e5cy9150G9XLoPcjuu%2FbPelYUVvXfdaOA1RP6BKlxf%2F4qBkT7lI4oMKMVtMf6pdevUXLn8fgMehSsc7N11M3jmspzlPqwRWY4uXL0w1yN7TH4zmqq1F5tW52CHxl1%2B2sqOTpayqEkIS3lEKct5g8DxhWddv8V31jS5iDxEsRRl2X2AEAzVH2x9EhYB5cf1ZJU8wg4eOxAY6pgHV0W2GO9RSBRg7bklBL20drxKJnJtDPq%2BGzO%2BQpqI0VjZ6YGRK53zXeg8UxdSZSI0YKTu2lweHd0d%2Bpc4m64tL3GxhFbCWMKb3JpScVVz174C9QVH2NTuMqDjaGiQOyeYQYudafduF3Ecz%2FWgSS%2B1HpqzFYsWFVgL%2FGKePlM%2B2FQqQXrO3jmvyrZkIr26sTP7U%2BCe94rFcf64Z7tmoVoRLqgbj5XrB&X-Amz-Signature=6feefbbdb3b1613b1a958a071350e94331a22ea038af4a45394793abb5ff6b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
