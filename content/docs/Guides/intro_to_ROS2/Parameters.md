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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWPRIUH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2FQF3sIgAFwhJVXzM2r83CV6jjnKi2TwZNlfthZLqxWgIhANFlswxVej0i0wNaRi1%2BcQzpBO6LaOhAZv9K59TfSK4%2BKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz19PMLR2p1s0dKeWgq3AMOwwgjaNVBO7WWb8LlWe55j8u8Yaxk07ANLfYwHB2SBcp3Qj4uYnrqsn3jkqJh1yR4KzfTlrwyF9MKRRPfMfli%2Fta7uaDGa8lugKLIT6RTRddIxhe65ETTLL8huFPvoM549%2BkB4Te%2FSNC7RYRqqZrEgYkmHgqqq%2FeJJGHZOLiYQf1JaWVzGeVeJsuRkBkynRe7%2FV0xRcbEPArs8aVA1%2B3sQq%2B%2FAv4ZvidRYGb3%2Bi%2BzqulZwKtyPJYAwR%2F%2FFsvqStitiserFlfkxCcTXm6hsRhqZvDTrCpB1HkuWneSlk3z5aDCX%2BIefZG%2Bgz6oFfL%2BKAdu8VMCV5d8VonN52J60ZbaBEeiQQp2paF97gQS1WMib3MWwkC8%2FstrI681UlJ0nRgliQQp0F%2Fh9W%2FVhBco%2BHq6fxw3QEm9qLKFPBcca8M5kPR%2FHqclEio3Uad4B6d9LUt%2Bxh1%2F8mO7bc5mlrkjsw%2F3dFUSyjVtIy3Z%2BpFIqnv0pcUPOTr7Wuuy%2F8Up5hKq9ND2KyAEfKR3wZirMzwfY7Lpq3QHqosYcq0tA9ft%2B6k7x0nE4QGG1irsXq9CcoHkHjI8F4phw5TxgVRFA88uc7fRzgAIlW27vt7OYqRRHnFRZV%2BGxwDTA7Kp9m2AGTD36IbBBjqkAUK58OwJ3AfOTP%2FCV%2F%2Bqbvpy6z5YinmRMPjL630sUTh8BvDVZ6zJ8A5Y2qW9oM8D0H3sEJTUT2OetJzuUNBw%2F5hAjWlWLmuY1UstPensVWCN1MfAorU%2Bah02JmH8LvWgv2v2cLf8RaTSqAK%2B34q9SSOEkO%2BiKs0W6t9s7geCxxmSB5HSQfrCnHeAHyPsdEuGPvXlpfLOZgkVAURDHplQ57BxfBEP&X-Amz-Signature=d15ec0f9538524e1c30b77e247a13e26c78e68d3fb9d486951b1b1e0bbca7e45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
