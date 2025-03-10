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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBQTM6Y%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCeuW%2FRfS1sXv%2Bhh1PiHLXFjHazZUqL2dcKCuaV8%2F5ljwIhAP5kGvItKupfU3E7kNOFXml%2FXqBi5lxScfraebeB77vkKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytdi1LQ9KGWecKjDcq3APX3uBppzfRlfjDLffZrQf2zwJaStPKgjAtLD5pVSOkiOref3wQ05bnNVY9vopS68QMyYy20ZJOSmmPlOEqv6lfA0cHhHPdU4ah4mNAIrKSIaaFw4iVUpZIcYC8bdKfBDIclabe9s7YMNDVK7atzst6Opeh7ghHTBKmD74cwn44jyxp8yNOTaut5XsmpxwUhYkOyOuCtwoTyW5yV4ebVx%2Fo3%2FtYDV8OYSyzjRrNM9Lz2qg%2BL2lU40jOzYjzSkQ9fUMp%2FYzUq0tlc6Dx6%2BhOaZ48PN2tzOt3%2FgtcAUQ6JMouvaomkvW4FcQ1AN9CtCF76KeYySUXr5hZ%2F%2B%2FQq7K%2BjKxgM8xHuNTqIZCctp1M9Doaye5h5NHyL3oL9OZCwMe0wI2vuV1nkuKDmrp6EBYJ76se%2B9Mp8Ef8%2Bv0LGLzPdzxJbyugz4ADUbbE1bvD1rxkkPabVgdRCUh5iEPKAFZpm1XEPRlA5SLlv2Wc3Rw%2F4Q7ehbyI8GNNVtg2hE%2BgdivmFcMMjCGKrFknMWNV5ytbb%2BeCDmPNxHkbJ8sowZVj79uZSxtA2G0kxrc0yLSeUfMMnr%2FGCAKVhm5a2xIzj6JBCPuKtKzE9E2nksMR7JsI9iXe9PX0gPD3g1b5r8qJezDmyru%2BBjqkAe3M0tVr9LdRAWJvOV2cGsxGmUWS8jCoz6gr5T9DSVIulgRqfG6RJP8Eq8tdsYfl32DbYB%2BjRNdOVXid3hqIvDsX9zSCybr3ZHzg5jivg3N3nCL1Om89NtL5%2FCG9y9PCu6Q6LC5ODcTc5dzMU%2FhAoDh0Efz%2FcLft%2FC7sdHJQ2%2Bzeobham8zaR264IFb4%2Bn6yUlwqXu80Znb1HpvAHcIYC1NIDc1m&X-Amz-Signature=7c035d1e64011ff92281ac8922fae045fdff6657d129049db6cb079912d2039c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
