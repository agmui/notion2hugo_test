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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWSRNDFY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICsHjF3fT2c2rZIfLw2sKNY90vkcZzgFUAOMvt4FkFDLAiB0yrsEajCuYQnyZLC5noz8yNLVR3qeArLk3Qv%2FuoqxSyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2LVob3%2FqpcnaJHkNKtwDs4ejZdvhwLomRP5uXO9sWcGG%2BSwTlFHVX0blD0JIUMbuzAyG4AhKPk%2BA5SXkLYW1S8ZilpoK9xFBN2xmOGq%2BO%2BHqfV041sGkviL1irnRvQQob%2BqD0ICsscOGdgLAhjziQYJtofA%2FBgDYwYXXS8oPbYBspDjUcOaoBaAyXPTlc2NWjW9%2FdiTfux4fZbjLh6KBg5h9h4YzpPUanVBSBdo8j5CtJiGcz0EiJcK7zglVSNKOA0tmLQO5UULqahLXJXYuKEbi6lEmW8bRGnOQqx4HTB%2B96k0rDr4PlysLKZgBDh3WQxw5eh6B6jRS0xgRacvcubIj5O5Rg%2BfjBZRmsj6jTMANTevKJNohvMRq5Y5YmQSoxhMlksrbjmaWoa7Qjzx%2BYwlbX9Q%2FXkF373YIra4g%2BVkyIO0IgPJOeI%2BJu4xO4DbgoPvaqcqfX8www7Tw4x0Dvjq5G0yW%2F1ARl31d%2Fy1KP3UuQW8pPBQ25LDUk%2FMwdeCuCRXtFmWelnNxUPSK7PKoczO1GKAo8weDTH8bkt2TIrkjLG9WTpDH9fSBFvuhGL3H1iaiF9gCm3s7eIR0lPyhTssmSa27n8EbtBPVNqu3PG7WGDOcZcwXQw19435kyoMxvLoO0q0949CASA8wu7ePvgY6pgGA23%2Bombao3D5kjQE5oJWMeJqVjQaorWLjVlbxFi3aQ%2FvdMESjeORfy%2F7XBozUJWxtfnEqS%2FAXYSi85yAN9i%2FZiRyUKFKjTFy17b7chlQ8p4VZjmvf30PkhH7KQzl1PHwAITr2bAHf73DLYVYG9KhQEkLmk1OIzamI%2Feizte4oxCfSna8seLHFrhhqeiDjeBoHbzdAGlNXzJD0iNhmI8BfhOvJA3M3&X-Amz-Signature=bc77dfa8ab8b5809d9eff3ecc1057b400d090eee7a7e917b574513fab39cdf0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
