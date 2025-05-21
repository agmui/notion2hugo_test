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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK3Z2CVU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGls%2BiVRxml9EaOYAQVOdzMun0G4pV0bV5n14zXN6ePwIhANl2CLQ6MIfn4b6Q6edooZ4QaGKpHZzZXg7rT8tJOBtFKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FBZtNbD5KXfXMJjMq3APFxy%2FQuP8NJxHmO6L2ScKyh5KD9Im36vTDZJ2z%2Fs7v93WkgXTUPDzYHjpJesz%2BZo4t0EKD7Kf4tPos1KfsDAg2br0FDNvFH8m0ZpenLyz0wVTbNLeadBEX6MOVYJF%2F7iwhsog%2FMOsqFCWaYMmvCbFUo9MOidng7TWNfXNdl08Yx8JpC5Tm4%2BLOnXPwj39AJ6UCL91eNDTOpi%2B%2BvxdiHWo5GYPDtQ607PgiELv8ATfswdeMVdlu8YtlTLnGDbv2uYk7G1FZqEADw8ypf5n6FDIyAtuwP293TKVGzBPk5OCi2nUKq8x9H4pB%2Fk2f%2F9FWwuYsGBoERHY0%2FTMvBqziEClOqR2iDtggKOrJKMr%2BdILdScnp0PMByaHlKcSjqHVeF0Puw9h4Okl64f8I7wqbq3C4SgpZQLLcaCqRHRu2ZubSSJKCNWJejV2wxaAkEImQKPIFYvcx2mFuRyYtWpLufLCb8XqrCz5W5coRAh4GZSTtTWB6R17CHgDbF1fRxYT%2BDmb4XLIscylK%2BLu3kU%2BohuNcs6eCrsy4dIm5HMCdc68urZBItc1fhADdKeR8m9rX23S44ypatXiLgJix3FoRqMwnrqbgI%2Fhyd6XNE5dKxmSoEWqME%2F3uNqyK4lumUDD57LXBBjqkAaP8HiuCshbSy7mWNuB50TP4QifFtuIFvB8QgzNeyDMnQsInaFeP0tzb1Eaz5y7BAeVckgQOFtTCa7u2Cbo2lfkFh0s%2F3beXS1J9JrQ6KX9%2F%2F0ZaRmg1VBiuBz9GmPTsy%2BwX0JOdfaHqz3HeXqOcxK8n0kxMqjj1CwkUp6JIQa1NitGBSj7RG8UvMh9ZP0Yrz0ZJYxN1%2FBIJvQ1hnx0oTLATCGrz&X-Amz-Signature=00c6e8b38a84008751737e34e6e6dcbc2c254e58b93c583fc60bbcd112559d87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
