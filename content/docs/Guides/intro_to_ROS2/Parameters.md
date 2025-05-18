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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YONBHKCB%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBniJgazz3hMhlcQDi6l037%2Bm8jSQ2wEdZ3EkLKvh5w5AiB5PT4DHgPlkwfm0j7v3hJkg30ywIEiWn6i3K3xpO6nASr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMTPUTInH7buKZjX0%2FKtwDkRubJih%2Ber1vqCwcuOSgFEYAV26qkyRJJQ3nufeTXP%2FUoNqp9ItdeVVWoWZRIyCY2IwGKXyv06noycE7HVlqCX%2FBlo4W8PAYDHrgnly1XW%2BDeIEGSO2e5aHBFeheucSPABJbO%2BETnqFLf3rbS9uL7L3cQB7vNHIIi3nc4iE6znEFNd6jsWlJ7noNFCtMvxB%2FxgguA4y2k%2FtbV9Lmh1M4rewXK8SeIrhrsrhBWlDrRlBhE%2FSC5oKGwgi2rTo0EM1EWnV9uU%2B4A3%2BPaz7B4Zb%2BlZJcjzdCr59MVO7VlJrTPNi0F179cqXmJwwCyGcehUEtilUY7I0OO%2BPThH%2BQ0FoPBPDTPjwGM401LQmNZH4x9GSFpusUcnOtDIEvRM5w9DnjdaC9idxQ2bZqdHUlwcNIXKrmUcEzoD3djmr1w%2FWLrGMoedcQI0vinTfNqQo1U%2BEVQA5%2FcY9XhEv3LkjOO0XC0rEkTsFkoYu%2FHY42CQwek9jMqt%2BttY%2BLI8W0WIWHLZjf6tuk20BWcGUkTK3spTM3wBSEk4gdjNld84W0R0ORVXszISTSgl7U65ze7jvP0IGf566rQXB6%2FH%2F7dpxXOF%2BCP8uZfDBnxVBT6KLFoxs2CHysT0wL9LYH2uDmWhwwiJunwQY6pgHts2MQyq0Psr4pc4hbpknC4VaYhXaySfIHby7hWM0E85xdEYW2ZAqkuam%2BSHYhmQhzEC3BQ82qzJSsWufpai3WI%2FpjCmc8y00htYsn0rm6E16h0RuApIrsxgyjoOU2BOn%2Fi8ekbtQy%2F5BU4HwTZpSXXpfMKAiwK4JOpZEn1Z4gDI2mhLI3RvefHhGgvWO%2Fs1uTMIOg34U6fTMWDai2lzJZJv0eP1cx&X-Amz-Signature=ce2e10c5c6be121dd7b3b0d49347239ac2fb715fca8dcba54d05ca370c3280a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
