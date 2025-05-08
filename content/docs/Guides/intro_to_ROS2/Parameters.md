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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47XHSN4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4vxs8vJMm3j%2B%2FePWklFSFoibQ1Nq2FKzZvo513p0qjQIhAI4Ls85Z5zw4QTlAIdoDyL%2Bf7ZgGg1vaQgICvssf%2FYrbKv8DCHIQABoMNjM3NDIzMTgzODA1IgzalUVH9wxx08a3CqIq3APa5Ff5s%2FA%2BJqVDf0NJLW8O8G%2F5V78ixNZQY1hZI9snNxTx0SSjfft7oFqst0fcH9d2u5YWPpJwWS2VGBPRNixg6B1qS%2FbXBRZ8pQT1V%2FlS5%2FJDBnifLwjHzH83ZFKW9n73%2BpWC6%2BcITA9NY4NqenMnxmCmVimE8XvK7ro%2FNUfnsUFZC0%2FW4OH0M2qyNqU7C5HlisRctaJszmDsVIFYkzu6gdE%2Fdg7qy8IdfK8q0xYgYChqB3%2FPgg%2F3L0Wp%2FPjmx%2BrkNr4wWZQ8b6eGluDo5Glb2y2xstdlySFWQSJNpOycdeONvn6htDLl0oUG1GnpaZbtoFA7ByfKfOa9bptU9QZFMsBAXttZNiw3QzkZMyWyKxlFZUrbvmuAMqrThmKNdQXnrlnPGZzCRQzzAOfV0ksERCqBro5A9JGxD2t3jSjq%2BgDrhdiGj94XHBH9OSEAuw5aTh71OgD9MMGaFr2PreU5QWBKB4O4H5hE4UwmuuX3XtF5Ln56x7qkGYldnjMlrmNo6IU27y6eoNqJngM1ey3J37lK285d8aj4SbMZdFEO2lMiQApDad%2FbgJdFwg4EzEmiwRerh0%2BwTqa%2F0riQ4MlRZMlBoRqDHXUY5GXKoCd2wWTz41GtCw%2FB6eLk%2BTD23%2FHABjqkAclvIRb7c0CFWvIv%2FxkXDU2Ha5R%2BfENMogqwVYvIN%2FuITRBDDcG9vPAzvP5zY4QvyZHhwrO9v9BkxXf5f7Uwzw6pJsUW7m0A7q4eR%2FzaN9ulpfIvcWLAZKd0GiVGa4r%2F%2FVNrq5RhR1jl4SpNXhQVt8a1meAkWnaSvCvNIW87JvhBNcTA%2BWDnRwrnn%2FGmYcVizbNJYpEjgEi%2FzEh4dB%2Fi%2BgKIgry2&X-Amz-Signature=c0d73a46361204c6014ec179cfa1fdc1ed8f8c050ed0c0326516154f253b7338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
