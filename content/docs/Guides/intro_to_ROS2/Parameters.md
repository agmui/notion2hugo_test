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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ6KDRN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC7Tzl948XGG8vCjj64er%2B%2BsMXr2HyXFhK%2BwZ460VSjugIhAPYsbSmuGLk16XI%2Fv1TP0vEC18hbzRThQjbl9%2B2oof9BKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzotLKmm6mAHAoTGZ4q3AP2rl%2Fo2nwjd1n8Cu2Jkqi5i8PYj7EWpBm3wDgfpkbmdiu3rn4rLqFsiyPenEtIzGDMVLELg%2Fe7l9ijduwoQeyK0xNJ99eVwqX4nCspVsxtthV5n3%2F2o9F07jWL1GgXxGkAF4ThVyHi63ulB9vrLkt%2BvLc8MeP%2BPY7VzWgWFOIVAOKnXq6sSXb%2FcI2B5IZrEAwqeC%2BlNkp3d2Ws1mOY26HVSfZ%2F3jhwpBXsvT2pQwz4IbwzulTaRmnGdaatXP8rzJMhJaQHspUeb%2FAzeJQQKNawMBcA7%2F3bfkUc%2FceNuVER0oHNqmLB4qmHTZqUoOvtGodwTFCuOU4S7qxOeiUXpSgGJwiJfqvm%2B7xnPSxBuddJz3v8kBaa%2FUVRnH8o4lP2wFvH3Rt1b7mCG4M%2BXkr7WG0CIgStx48djBIiCKnhNjHP4SZdnIdGMQjkKXWyw3E5jbCZZuXpp9mphbwy4ZFJQuTAOj%2B9hlIhvBoUqJBV252DN8LmYhxprEBR47LBp2dJ7LldJLQ4Vd9IckDU0euwrBEsvUEbT9UyyI4LDG%2BrNPvC8iYyLUMzKqI4oBH7vVNmiNja%2BfzKuIkL2qZsZbbMopkF%2FbDEFWsvOOHHqVeD%2BXkZ7kTbLQgndRBuV5lNnTDrmJ%2B9BjqkAR0Du2Wal0O17bgVFeAuXSeZ6gHzoW4Qz5dvhp4fgKaBCNooNrttUKnfjcQNx6bTQrO0TkrV3mMO4aLF4IZgVuIkbOgMHrjqoqFbNFoDHdKWWZJ3TDOSNYkqO8D7ii7f0l4lUMzjekVUp47Y0%2F%2FHgdZUqlyxEbXQsfohAKm2Mi73d4Z5SQo7bQSvpeP2fiKECte6UqzFF7V1M7SuZWLszcwzwT7K&X-Amz-Signature=c21aa1f23d0a12c24b01641134b6b1a76930b885b04e401c01994ccd1831bf1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
