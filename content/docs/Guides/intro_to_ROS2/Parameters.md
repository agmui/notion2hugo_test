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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSYKKWC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDjnTMUHIpgQtCD9lQrcpjoLNuagaS6dcYoRq3BOQmFtAIhAIPziihiCJ5N9ac%2FUvEDl7bihfJHwyjcVjpqWdViJGekKv8DCDMQABoMNjM3NDIzMTgzODA1IgyZ%2BE22A8dkNgv1Xegq3AOAL8WBmhLSoynacl5TBEDoVuRBkDJSB7FxxJzYS5DENyNtevkRhPg9yyVrbGu1DzzHc2x8XWCvYU3xtLZEQjRXbvKkUiY0d2CyUvQuZsaVmnT30bYaaF9gJWfo6Szy%2FCAlnLaYJl2kf0lG4FHCxdPea%2FXX%2FdJRS%2Bzun54d4LJUaskp1uW5JcyQJn8JVpF6AlXoYHJxtt2cGg95X1lbL7wYg4YMZ7YCkGeN91QOiIQVpli%2B9IEX5MRisfKJidk7D%2BJ9UDnA1LXTcnSyhgZIjwpxFRzAqrkfylh0FGyL3IJfouFQ12Fq5Y3rgBjEHXOzCyvleXHSJs1a49OU6irdN3c7xhd%2BxKYpHyKuK7DJvjt5LlBx266iGornO1%2FOulhY24qa2Y9SNFY0GqXsBdy0C8AqEqzcUv7btFVp4rbqxB3KCgapwYH%2FDnO68BpQ680S%2FkW1VOR7T0UnsbvBew%2F%2FSKZ%2BFJqIhbQDO6MskIoJMo%2BORPGUqf7irq9JlxwpTlUGDES3StC%2BYs6UELTGKB0OTMI3O067sV6dbxJeEitx7TEPcbRupiifM9vIdQe3G5d8OJLDNlf2GtlUFm3N9wX0d4llGI10B0D70JqayIWRznjZDpm87brmbF1c3M%2FapjDE35jBBjqkAScaUbrxPeAxnZ8nr%2FzBIejrGbVRbS7mogxYOwVf8T9Vv8arnmzF2arHF%2Fn6pGHUz5xNAt1Vcorjq6a5K3OD2cwi%2FH84fPtKf1Hp8E%2BdY%2BNXoTDWvOTAOYSTr4skiJXVCK%2BfnXty4CQFDrGG%2F0Xp0f%2FReNBj%2BiripYGLVcOgsDLWgg4Kiayg9J%2BK8aR2DpkIo4dCPdVJdCdLjMWQvZn21ZmoOuII&X-Amz-Signature=99bd8e26c8be7a294d1b1397168e51a41e6a232921ae8884da89b3ae6f44acab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
