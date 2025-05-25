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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQSK4NB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBP8PmO7xZ%2BRSZWH6lXMjSFXwZkO2QmHe%2Bmvqx7euRM%2FAiBHWbLFIXA%2F5N3WWuINNPbGrRxv0Hr7BxxlVZpw82Rliyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwQvjVLI8BRSDnY8HKtwDi%2FhODV%2BDjAxmoamMZO3KOQvOIrg%2FZlFih90JcWTWiwJSbZFqFGynfD2o%2Fghn396cFsVBSZA1dOaa63ZLzPN%2B7%2B54EODED5KRf3ZCBKxfN%2BaryfvyIaNE7JEEOuBohLqfzKB%2By95vednBGPklqe%2FbueNRl8Iti63bmPcQNK07fF3peX6kuX4DjtbWpXCRSWuYGiqky5Bb%2FCiW3WTnYtzt8TFoMlU%2BeLm%2Fs5w9kFnLuENmBulk71yU9QjKwjuOjs6getMjPnWXj%2BBoffq1J4eiAIyBccVXe%2BNj6Ot7ZcIkinFDj7119O82Hp1s7sYoPxCNetmEl7JVPX1bsh%2BsDLcMLcOV%2BULXTn3gUNaORVFQwlOWAv640srdZK17dQTHf8cCUoZUZgY49HRyXGBQGYlx0Q2EVdEuOCFTBKjeAy19k0pJ9eMDLBM67pR0dexOjBe7b2EEQgpTn5BwE%2BzzQLrfF70N0uvsGVJwAaMnUJZ7IAtBeImRvq8EPtMaMVhnkWzA0FbDeLTPYFoDfbuBtnsTvpboVkOrSKBVuxZa1TKJf%2FCSwZs6cy5TIvJ8ysjDO2nO69aNmW45MB5IicLmDQfOXVw5MF5F1a9qWTPtUl2q4FWKcEFdUdfvRnEnw3YwxbnKwQY6pgHab%2BsPSaFgByRAic8313Gme%2FNBu%2Bp23esvl5aNnHxhm4cOEDXI54IohXlyxu3S%2F9OUog7Mj3t1dIaBFZMv%2BF1kutHjuH7oK77pBBFlAfHDzh9C5EoSiG6AkERQ9DF1ag8JS9vehOI%2Bq%2FF27%2BO4aZkIN%2BfAEuTkoNbgfODS6IVWYREFSd8OC3FRqla3yt1UkGwFuoRYb8W5kLL%2Bsut2Lfby%2BCH5RsX6&X-Amz-Signature=508aa57577d8fad4bd5888e7a8244f0d688dc3b974d541685688491fbc9827fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
