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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAHKAT3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2BpbrcO0H0yFeehhXhFRYH2L8ohve23dSFAIbZsjbcgIhAPLem7M23I9jvmeAtl%2FKoNxGGFZtwS0t3xH49%2Fb2tj5vKv8DCEEQABoMNjM3NDIzMTgzODA1IgyxkkZwFQEhEOTB7jUq3AMt7aM9i9zmMdXdtT6%2F4yZ5csXqjHJZc8eTVSeUa0jC4Un7Vi1x4kPASdCuf7B%2BlbBsZj8%2BZcV3VVUWQBy3M41OCgPq%2FRFVrqPq5%2Fb9mQXUC86HL9PG1OLn%2BepRue3La5sh5vIXQzfGYHSx0q8zwL7RYMY7cc11Vh6wfflBHw3mFuMfo2SmhhlgIWcSx8b7qzJMiMPtUPQvv0hSDP%2BNuiRn%2BAqhHbxj3Rlqx9tTqeolUXAYA5wXfu4xCQCDkUmDxEvNGFZufxHKnmXXZuEXpvfZE6%2FT35WIF65XfUKmN5%2F8IYZINxRynr5Qr4vLVLem8b%2Fw63d7hjmICEf1Cgnik35BTv2TPB2AAcLBrkwRSBsOU21fC%2FHNzX9f%2FY5AdnCDlaCiCBlPk8n%2BfpnkJiWSLZh6VkB3s%2FWV6JfFimi37pYvyqrBCVtdbDllNGqz%2BTKLbOobTQdQCOHyw0vgNYUFEu7%2FHNQPER%2BPjvMptH%2BkXYoI7luF83H1gTJC%2Beemj%2BDCWFue6v%2Frqnqvevk0fgW8jU%2B9DPYXSApRvzNT9Bqlu5R2e4fBSWo1d%2BDCTvF3noJgAq7VdJYXhL05uxWllRpu5Vqr%2FT0T%2BTUu%2B8izAJpBj4UQDzItgam7fEurJs3ijDCX05vBBjqkAXijAhr2JeNW5O1V5CQjOt0bzepG%2BEPSY4OWowZ51Ij9xBh5xi0q2hQ8YV6dDyg7ypkxtMd72NpQBZWvLpjvNbbmxPucSkMmEniUXcvjn7X3BkAnaUXgB3v0nsAb%2BCh5dEq67nvxkzuWUYdSTyVtQTtd0ZMTIUcjRJkLHLnBmyyaOMn8vmc9AVO6FWcAY6cvS%2BvahnzKdnI%2BDkVc3AYd0DHrIxVQ&X-Amz-Signature=14cd85a033e4bf502155d48b861b063cac36b7d95f10b1c71358e4493820756c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
