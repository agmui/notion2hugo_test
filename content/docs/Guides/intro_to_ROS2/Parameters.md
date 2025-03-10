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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4RFR23%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDxKwVXk%2B%2FRUGWCH9nh31tvmN4aFrH5QzstI1Yqf0sU9AIhALzh29hYypZGFvMMaOawgFY5OL4sgVJ9jAactZPtFiVOKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1rSQWi0vFosty3hYq3AMi53DtHk%2FIIldqtp4M%2FZoT7vxATUzxYR%2BnU1CKJiIiQqtIguvF9w9id%2FcUjNTSQD2nKzRItS6XVL6ZZzbvapoKYPuKAoK%2B%2BdHSlqJ85cFJqEbAQE2wlr9x5jKnDNMOzn80%2F7gDzn4iCdTH9SXM2d%2FM72xEXtvZ80Soki%2Fn3%2BC%2FUkOFBeN0rXfaRLbRbP6qdaqmz%2BWV1T5w9HW9cX28tN5mZhCII6CWwCUmcceNCPemf8w0onbbyAjJ9t7H6CCjtK1mQUCcZWeDGfIV45pQCU5vVfOAZVVV8Ve69oCrnfqoJiRszoes278VKvNRRDJvbNRnVwqSga8MtrnYCuK%2FRTI%2Ff9hR1d0tEcO2Ul8ZnE5%2FbsJtayzc2Q1uGsJC%2FbaRCPHAbdZeQOEqFZFpOyMPaWmDcyLxplAitkpQC3Mp2p65tvM0WcTbwJwbCNOp871igbGSCB2EXkJqhFlf%2FDn%2BHR2x85ZXl3xOfIP1C2M23ONh5TPLMZhFSabc25OB1rSI74uXHZJntNl%2BoR2wG5Uon0SAFASXzybywBtDMy0WMpuvtNvu%2BLrWO5o19uM29p7tscIgG0wjkTRN0NKnonjBiuNwSvy3iyXK6v%2Bm%2F4ZgqOxPOS0gX1YjkpwYAWxbGDD1yru%2BBjqkAZUNlPqJKMORTlywrMIfJEpVYeUkdwjsMgNtOu7oKMDUFW4HUPkSSaPanfMOwCnVDH39X8EZkLK2cZm8ZTUicDIAwis43fQg9lOXlqo8Brmi0baNBdxFdjA%2Fc0jJQhSjNn7nxBf%2BSy1uu%2BEb8pX6KJdZ8tSyw8B%2FUFWwgVa29EFfz2XnyEX7nI67PncS4QHnGS1rqYeyvJhIHGPu9Lx%2BtNi5O2UL&X-Amz-Signature=df9c4699fa274de14753bbb8f974e243f1ede37ea2391e68b8bb0d76b56398a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
