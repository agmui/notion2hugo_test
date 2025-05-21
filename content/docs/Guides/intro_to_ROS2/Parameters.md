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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662IEO53T%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FC%2BwL%2FQzT9Q1xWN59L1D%2BXPw1kvs4eO4wLNMx3ssgUwIgQaE%2BCi8FxA7VwlGCQ%2FAP8xzNG5NLv%2Ba7sbxRGo9Mg%2FUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5nqt0XB03jxDIssCrcA6VSJLkJrcXy1ja3tmgxbs8GDrB7%2F%2BeGagLYOdZe81Qa4wNamBtrAz1dj2BAQMFdqN8U9L%2FEPfw76qTuVTbTYJb9k9n4gtWbzeT1K%2F3bRWn%2BSNXHgMmcGNiwP35%2F4v2SJUWpqp8CALqWbJr5Yw08EfAqK%2BEX1sZ96P0t2jNx2oz7lJSUhVaKSfQncvkjOdt266077akbq%2BeLs6Hu1W1Qt%2BN1c5VrzcQiMBG3Y84sod5397OQAtCzmiFfUOSW%2BA%2BYM%2B7u26jQ1auqpABlbol9gRXcA2eCGN2Z8ZoCBBBL7DTngSXNFwqYXV2URUN5KMupOqTnB2myrvSRsjEKzHYabM2oH3GTtuWX2rQPEHwcc8XN6mwogAVLQCxm0IRhE8wVP6tCC1hG1unK52yNcGBBw5w4ZlUjf%2FgMmS7CZZdF%2BnGWkCHYlbPX8IU4iP5e%2BQ%2BjLrEcHbjC%2F27Crx4ZVAJP7XXvMIVwoUA1UDbmTU8t8H4We8qDnSV2PtCSIhykNTjuKeVtv0eKExmR5LYLXU5gUCt35c%2BNBLQnUz4NjJvta64CGX438iNpIR1sdCoZ5i6LHW7vaf4s8cvr5lNrCauvTeX%2BzEg2xPtiZSVALQOWOw56QJghWaJJhbidBNQhMLGvtcEGOqUB2zeVufTmwkxCO45LFzVR4n9n43fVif4pmdj7vL98UvuxI%2BFpKy11VhWxMqI0%2BElWiLWR2j6JNaVhEZTAaZcWQ7tcBwUJhb71t9P7vA9FuIEfqSX3XHaeA0EK5CNwsr1e4Gj3b9VcAP8dpBwLbaEKK8%2B9a8LTu4xUdF7Xlg2B1BCMOyPMJIxU%2FrSKu6LMfNU3OlGCwDjk%2FfRloqVxjyJF7cJYkVXO&X-Amz-Signature=46744a8d8c95d7d4728f91998c7baa4e0f8c47b5beb219c34188fe762e9d028f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
