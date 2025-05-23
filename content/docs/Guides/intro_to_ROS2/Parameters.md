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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXVUBNM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHyz%2BxvMP6Gmvc3PTsqmEL6wi5CuJYLzBJYh0jfOsshaAiEAyS1h4hl8W8E%2BrpMZV57KEwVa8oDqeu764V8%2FTAAJ0OMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5uNsZYZWTeAaxMsCrcA50sDTHndJuQyoDXrNzAh2qFlvaNqJF%2F9UXQgJDxLKykX3dwWZnjgQqW1WbpEngL2tCYWMUqSCF5IzEyqNugCdjaVudb%2B0iG9ORpz8oOdwuuorpZD%2BjfV5hxsgftmq4Na1HUxOHlE0nl3Qta%2F5syVQQYtF6xNES8Ey0EjGyHaV%2F%2B85DBBS3%2B7DDpyoHd2NvRzhqH42xKOnAbKuttNuUbMTuWfGEK8u2ao3gPdB62ItyCW9E0dWtYVwJul7MhH4GkbXBp2yPahQhdNUApc6joP0wmQB5bWe4eeu0izVOgLXcfwxn29YUKq0QifeuGY4zjDsQsgjP%2FIe3iNni1VScwRpRhyArPaNyN0bT%2BlkB%2FAantjpygJuAyjAQqgJMG%2FliD%2B93o%2BFHYOOdBAdH7Wsi1qkuk0j5Lik9cJCe7AFsealNvIMeHBBdbgUl2SpSdEC2nQ68jZr5Kmyx59B6Snu9fU%2Fb77F2hPxrjKnj1B0atkDUxWlyL5Q3BKvTsMGh4YQxGQDk0Kx80llcuU%2BCqXPPWy8XyK%2BJrEghnSAcS6xExxgHI0mu3BQmS98dIV8QyDmChn%2FkrvmST%2BIctaaR%2Bk8t%2BUCqpG1sHlZ9v1DGOo%2FvhfhAv38jfU1B6LfWnUdg%2BMPjCv8EGOqUB%2BTKwcwReupTWUWDDuQ3KqtXi9n9C%2B4T0rsOusi0lAEF4IGL6OTIO0VL3b8j%2FGc8DdvsD4Gt7RLuULw8NMj%2FAHSIW7dR4tUg%2BmcrKZTI%2FOaab21TA2IFe%2BiNFNcHTBZDRpca1gtZ34g%2FxXWZlWaX1L5Ta5s2h2leEds1uezcklpEzBf8xaqRLWZ3GxFvPzKxQdHshYPXOD15%2FqbAmqNaeBzLF0nZM&X-Amz-Signature=60f3fed7c877b8bd1951e3cd83f6342f77c2860c5b9733fb815cad5e7afc90ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
