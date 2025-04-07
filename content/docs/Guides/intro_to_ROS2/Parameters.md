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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDZQASJM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgsBhtbAS5CW4P9YGXTYri7RrEfdAMYvKXRdqZqmYDnAIhAO6x8F8Vhbu7g6jtQyqWbbSG1mAxFOTnkmlopuI6r4u3Kv8DCF8QABoMNjM3NDIzMTgzODA1IgzhkLxDTSJa717FzDkq3APDYvFvyEMHlpYq9G4wDtm25Pdgkdn0wJqAwwiebrvaMG5gt9TvFrh625EZLqMuGt7o5ngQRs2vw0zeaYAk%2FfQ88oSQyyUd9vRdbA3n5th8rWWV9%2BZbbLXFkULaHBvUvLm%2FngzB3nfe2js9dW0DQ1FBca1EezqNT8WijJlFEI5J3%2BiiZM086lrP1f2x4xun584B5VAZ3evrxZKbHKLjCMHRUR2RgHUKo5YOlpRZTXBbfOyDtfygOj7TixrW9%2Bf7sw1VmfPIsPb6K8RG3nFtEWj7slOHGm8UAMBZljlon7sqzc1w461IuYnjh8wRGrQ28PWyaILyY2mMyj672zB1vaokUBYVW33VIAhkNtMqhr1ouNWvSw6NQl9oZFCKwHyAY9uhPo3f04zMD%2BmRnG6fW82VgnnTXyD%2BUMfMPNRXGVN%2FyLO5To0Eup4TG6dXXaYqixXPDm%2BHv1PYPqmNd1G8P7lTSpnouH%2FdCkbfjAYFdvYAl0kPjKP0lfldwQ8YANwcTs39jXkqWTbSue3h9T6k3DU40BxuDj0l8AYW8myULzVBtuW8lIImKg1vYCN03cSNKmFV3%2B95rxXYEpCZ7iaDx0U2fT6SGEHdjQvms%2FABlzWH5Wgg%2B0eWe%2FM0%2FLgg%2BTDdts%2B%2FBjqkAS4aqxWZalqwf0BcXMu5N5YHsgmMj7Y3iuOvpYCoelnJvkzH%2BaZKtIx4eOR6GFDVbT%2BlWGTITyEOger6wvKS17Fsa6j%2B2jSURWiVV2nTbBt8CsqYVJSaiBumWTZh93SH4LLwk4KsLjq6q%2B45woWBvtffbh3GqoCSGYmX7VF7IywfDzqsWGW%2Fnca65owJqRGnFLvSXt3vAPQUxOiue%2Fb2%2F5hnu6tj&X-Amz-Signature=1cd60ea54b3cbb90b0b0802e7084d9c90f16f3faac32d44a67c8fa33e2d47000&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
