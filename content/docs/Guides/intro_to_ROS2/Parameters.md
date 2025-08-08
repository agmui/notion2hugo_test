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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDW7JPVY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCjn5nNbtKjLHVjF%2BtrGrYJSg3hF5jScKxg59YzU%2FUgeQIhAJ3QjRJFgQEu%2BShPvy92S8eYW9cL%2BbARbUh0PoO8tnp0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwil4tsB%2Byld2GSCOsq3AM0xpEuHrqDASHBB%2BY2MgGmadR6vWR4ckXIChc8rj1vjtX0DXcdGkJCpgf34deWooAEfRcBrkPhIyFX1g5Xo9g0fLT9WcCcAbWW4OylcVIHfD8p4g59NILX%2FA%2FPZyP0eMrW%2BByYwCShCQsNfMSxqjKvT3eTubrT2up9PtJPAiKTwB%2BatkaISJn6Znxlli1%2FunMMyWBwuD7AKrD62TuTDQZpt7m8l1YqwU%2BTnya1pmmGvGlZNt449Bd5%2Bi9il8Ne6mJfaO8OeUMQRxeiF7y1rUHN3fg%2BCWaO678DNjXn1lsNgQ%2BbArSocis%2F5UBz%2F50NCbNJiIlJYTR7bQvO1rH6ASaGY5yw0LKRfXWFRdFrZ1CLS0Hrh6rHuJ4cE78t8YaD9qRYLCZsxpTaXZ6CXrjYEaKMcScOOdOFV6WF%2FBqgEdQhxG%2BVbs7NuaEjNf17Ogoq5v9bYBV5Zx%2FBJzpdbXo%2Betw25jXTjn%2B2Ez6oiXZ1tVW%2F6Ogbi3JY2Nj53r5Mz9swy%2BwpHOUDCBoB6eRIjqpwnqhYmuOLT5s1ifH%2FqSCkpExi9Z%2Fv0abMpZ6WRioxnRGhDnyfzUm5QV85GG5yQ8mW0ZOGuthj8PXbk55yREMGYI3Gq4HJgFuUff2zS6LG7DDZ0tXEBjqkAbBlK57eSHvjDH2nSeMBCgO%2BuUMB22CMYPsyUasHMcNCRfrqhOs%2Bm7GKOEEo%2BjL7g0VEPz%2BVbKNFiS0gVE5sRQAvyfAz7Uoc2JJKJHVmjxSDrv%2F9Dz5wiVA5ZfiewEFfVKHLNxN3%2FW2z5GC6wlfbcW3YryUGYwed1tSDJ2Q8mJT2lDROXfJaUE7ZV5WLTAlq5ZYV%2FShuhMs9tvNT310BVsnW7B8D&X-Amz-Signature=3231dbf533cca8010b1bbf88ba05e4c6a37035538d3bf133310fc80f4657329e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
