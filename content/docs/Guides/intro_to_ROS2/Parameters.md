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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFHH6XV6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaTyYeII%2FlCRRlX0D%2FoWC7gSz0UQGLl0KKWxiFRXG%2BrwIhAMCgKcdh5miCLCX4UoKPTv8zy75O9nDQUisx2QgYRqZZKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgqjtG0hCatkugpo0q3AOxzjpQQetCYVfYvZ6iBHdd%2BbB7%2FHT6vsXSzoUuo9XfuzTicSw9U3YHb%2BxncX9yD1IWKMJoYvtCE5dP6l6BGjPzidhvKrIOGM9ZROYuhM5FQp%2FCi%2BWiRBTu3CdOU4SDPdZdLIzvEMTG8nwV6xykiSpwwoNpuj1C1%2BpHEi9UOGz4xYvc2bmnJCQ0cTRQjANj1dzBE02v0VRT28l4PohGWYps%2Bs2F%2Ba2Di1tA7z7Rkxho2ZQRxeVKj6BlIFHZsE%2BSPP8cHRwEtYM0%2Fud7cYctzPlCYQgF0weCa666OxoZrSEL%2BQ1D64QKLTCmfRktfrA%2F98KYIgkvYrZ6ZRXU%2Fz7rsNKT2sAqG7x6oS51zx5iDNl3aZO6eONvnED%2B0BKFZ%2BrXUj3AC8GEq4V7DeN9WZVB4KcBksS8aa3ayA0N59ti8g73kg7SP%2BwXq6DGY3WKlUad0chMu47zL0lQiN%2BXBy20PSIdwotUBOZM1O9DWPlEoOp7SLSr5aLfr4vNaclQTTAsio4EAb56%2B64Os7K6FYOLt5C%2BRdQ5ZMXxbLCbUfMahwE7tNB9UKwHCzrbxrhIhPHkQ6gt6qUZdXvz4uNTGcTiIrL5jf7yBJJb5fsDYpo%2B5ZXw914oU8KmL3kjr2ucSTC0j6S9BjqkAepwCV35b7XAhM80P3tg8uOMK3U5FtMbeQdV0SzH82EYfXItW%2FRxXs9yd5Z0bd2xasfnzyLGJ1nFx1RYtAIVDtVbginsiTWywguu7CQwnx970XVf0EVXBfiyV8spCho4ESKuNiaphTjOVhFZS1oJGCDrnjI%2FV2ee8ivYv1CfDVHQJRYBq8Gr3h0XwIwJh5ZowpbTlpgojs0zoohyqUkGyGHfJxeD&X-Amz-Signature=8931a1cca6e475dcc6289d185801a985bd81500e65963a0916dae8d0518fb886&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
