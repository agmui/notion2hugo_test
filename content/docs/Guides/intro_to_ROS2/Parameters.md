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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5T664W%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChl5BW%2BebRpoLwevx6LSft7kaSxKQG%2F%2FKJzS6ZMd404gIhAJfxe8Kb2KSp7mfovMYhM25NC2yYC6nCuG9BAKBjGWwKKv8DCFIQABoMNjM3NDIzMTgzODA1IgzybDrJkZpHe8LoIsEq3AP5abeb8Z5uu68UIy%2BdmybVrtoyLISbcYjFX56%2FNeD2iTLaHqJXxolVt19ULN3Rx1xXsjgiempYuG9Of94cIpN89%2BqqBX8bykIvJiGdsgwm5u7dF8DhTlH4elt%2Fm8psEzvJgE2GkyE3YQ4TV192kR%2B%2FioWQeGvsTp0Fvdlpt5Y%2F9rnh8%2BgufwvPWAWmslBmuPP4cVvpynWuEAqpiSE6TOemVMmrE6n6KMEXneHLWwchf4O5i7O72lpPfKUJOz4go%2B57LsfY3qDfrg1oMN1XSk2jCkYxSp63HvvHvcoKXQkE0z71DD51aD8LlMJ3rrzewYQQg8%2Fdx%2FfFi20Atbxbvw7J5llIfC1ftr2QNgh58a%2Fal%2BDycyqr8mODPqHnX9z3j7lJynArrE003mVTtdHksRbVs0p%2FgPhpStywyfJGZeAxv%2Fsr192ETuG5pdPBa3bqp7JDXr69NHiOn4Wv4mWH0S6QTTAndXyzWLeGRg5Oaa0V2rC2J0COIFWzDr31zpBQkws0M4sw9X9vUIbCSernrM8ZUC5BWNYGzyep7Wceb5hKoC4VlnjdFqFSTUCZ5TuatwE7vw4f8ZcyxXs1YiSZEp%2BpiVoua2R0bsnJ9dOnZrbGrDgIMSCRtbLXm2ugzTC%2BoevHBjqkAedmfY8wEt45bXpvaNFUkjMQ6eZpkEFuFAI56rEp3t%2BkCJ%2BFoZ%2BC%2BTN0SAYm8mBeE33%2B3ZBq4TkXbF175RH1C29C2AHaEGd%2Byk9gnd7iJlNj30kOuGwFvBbbHhL0P1MEOZgqqN%2BXZIoeqiEyig2b8YUwOcjT8tskzjEeDjj5TzdAY%2F9W337k7bwmjB7cfhGvsFxvEE%2B2V72ejttEeoNEx2irmGLi&X-Amz-Signature=ae39a4ea6125fe024ae31b95e0f518f670743db85cab80be8af0ce5d7881d010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
