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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565T66RQ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCj7AesoVKyCesipNkLM0KcmALQaCBdXFAJwlazowkWHAIhALlt2O%2BtzeDKHK23NLZgNUGWxA4GVznATCA6X%2FmpY5oPKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkk05yHXZPli%2BGK14q3AO95nHFP2rZAjomh0P0XM049Rxn0F2sKwLnQTCHTP2JzLkfjivSUjwzR8PRZDAs4hoYQ0evxCVSrQCyAMt4a4AF6YL%2BQxn7LJ3XZN%2BhIraOVZrMpRdX4xOYfKqI6s0g2EwXTrVzeSGL0If9kYLIaWYu0dOXNMMAIHp9ZkW%2F7RX0Gv%2BtbgtawFzDU6de2CdKhIULfSptIk%2Fqc%2BWztfnsdKC6K6Yj3Wgplcs%2BLIUGVyB6i%2BiEkApO8UZLEuE%2BJ5aU2wypxwNcWy7DI6x9%2BCD2mttjaqyvwS3W02IJgBO7LxjIQOVoOGq939iaZv%2FQlrC1z33cnyHfs74E0ZXrX9N6hcxkk6%2B6Z7EPa3D02lRE21lUdSTPvozx2j%2BTSFzxphCW%2BsGknVpg%2FrHKn24tcnILlJDEqQbn2RonzGkqxTFA5Gz2XCFV8UQgsJ%2BaMU59tad%2FKdkBbyk9TYe%2FIturEi9majfWjpFq7drQlWFGiCDwu2o1vLWnxfT0apAaM2njF1jvxJEXV%2B3y9%2BsxojYfeL0Q8v4WnZkA4uBfx9YJ542wzaBZf7zg1XsnpWxvekzD%2F%2BvxZmieXA0VthaC78c6TkH1norVqw9nQ%2BZTf6gIR4bniDchJmIG914V5as3bjmkMjDl8NrABjqkAWraYo8D%2BxuRfO%2BczhPK8Wo0Oe2UqyBfvdEo9DZKdhJyvPis%2FWGiG9ETbkkGrjRVD1XKshy8aYHoOVPhYUCs27ciTzk0xbDdRyIPlHdSbRaEPN%2FRCGHs9quZzRRbaNhFazRIY6P0wHMeZ0YzAD2KerPXMLRkQmI2YZ8Lg%2F7CN8QN6%2FlvdHVkf1NWCmJ3v9aYNijJG3n6AUqNgOuQ9cXDTXeLr%2FNV&X-Amz-Signature=5c6d538c5d4f13e55ae30972d1013da03e8739aa4e8ec57ec77d8bad18ace6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
