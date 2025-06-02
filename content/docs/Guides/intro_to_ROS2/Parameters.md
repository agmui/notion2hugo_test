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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBT5AESK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGPixt2Mw%2F6EU8JUxNuH5Cn7y2E3sAMexnEuL1XZy0g1AiABLeDOKxQbhPIjXMGh5REk3l155NjtVprngGsY7ukQZCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMic9OxntIL%2FnNkqtZKtwDpj0nxvoGEhkf4vX1mlmkhgrqwfhyddq3ZSm8liAPU2JyOVbGCOyplMf69VbE%2Bk7hbpN6A395cQJBqFGZfuEoOZu9sJeStXK0inzdkRStPK5Ns0M87P0xsXGS7Z50n8%2BHdpfd9ABk2w%2FM45yzU%2BsqgLhqpicgzJTAWpzujCdOFzCjjyi6nCR5IZsYQBc0jbLbFnF1c4%2FkGZpZolVis1sY3FIJgKROzFrCLEmd5xYAfz3wH0Jndtxw6Xd8dAyP29SteG1D28M%2FqaNxnQkWiqR%2FhB4d3kezcgqBhuC1yJmC2AcztRAhAscPLi1MPvuTi4hI6b1cJSgJq2Vc3lHAXf0tE%2BMiPqFGMaH%2BZrr%2FDsgdYcwEfIoRVMoBVXgZIEVbBsVPMF0ZhU5zezryOfMrG0a3Bq3LnF9KqA9r7HJgy9fQeWre65hf66FBEzNMn2nIFDQb%2FEHDJxb04qgFp89wm%2FzijsjB3O11udRO4YsbU14aJKzAJiekvitF1gn5yPx1Ny2boGtVhAO0gUywwzLgjIiHoaSn4atvBDP%2Bq5ucefaCyM78H4Zkancjxkgk4xgk8dSCttWxIxu2%2FWUk3VXXtuAhmnbG2LFDAuczg8PWwGUgMb46dVWhyyrO5%2FFHEoAwnfT1wQY6pgF51eKkaiOKBllv6Tvxe4%2Be4mCHC2TgQ4SNUPaZ%2FWx4R0GLSRyacH5D2hW9%2FCdxO4njiDScMRhAqWqb0yYQE9hYYqmaUJ4RX1l0kXwo9GG9NeFyskELKiQ6HTPJFgggmvsVFy%2B%2BBZqPLPrxn5UfZs7wHmiHimBZ%2FNh3hyGSgCreUZmtAX1le%2BzccwyjgXIPpdE7RsCKrgUPTwEyP8uFEzcDFBR92lNX&X-Amz-Signature=e6bd48f4c8a48ce296eeb9d09b24c88be21b17c16ab2153ba9387ebf678ba260&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
