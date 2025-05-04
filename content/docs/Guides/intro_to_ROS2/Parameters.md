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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBUUMW6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuvxzOaw3mEg04ZpjpWZnGdrzgG8iLi7XkYjdjqBB3OgIgZVpVq2btaxry8ImZEbWu%2FQ1UH9mfLgpqh21IZYVmFGsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7E62947nE6sH4UuyrcA8cUJzKe9zV6dulVRLKUwqkzozWm7jku5vC1rvVp5Y45U8PNxfEhh8MkkIldyvpW7HwJvkptI0Shmy3lHbH8nDq1QzRtMWEisE2uaXtjYK34c0%2B2lYqkcWKcGLWoF4TD%2BYB%2FF4ioYFZay9YfpCur%2BSVasA2ZJzlylI8NgbhEvhgeC7tGvYXTpnQ5UpmvETRxMq0VgJZSYdSu1h5IZcduGQ1Bjzw0iTMF7m%2FPScq4J0JFOdRJHwA2ae0v0MACNmWbCOHGU3h3IEJq%2Fn%2B%2BDg%2B8aua5Of%2BEXuMPEqi9l%2BlkUpKIZKmsCL0ruMBDJL0EOa3Iyk%2FhMVD7ydU5LAJNeJMxSLoSdPTTUKeKfU7SVZN95IwASR6%2Fyw7jEXQIgGVjxzdy29AYe%2FUeKBu9lEsnu8%2FJei4DIT3LxbZwjmKt2p6pGEYuH%2BrTA8lpOA99RVGf9Asayi65nprOLsbljDLZIkBZy0eYeBl18RwztgJzvjm2t2At483Bvb604NrbJO6d2pmhibN4SVE%2F3HBUleuH0KQWfj8GAVQ3vd7uCYcxuV2CgnR2su4Y4gLDXr1TnCOh%2FpXxXO0vdrQ542494P3DaKGHfpa4mbZGpImmtBN%2Fxd3bUQ067PggwzwAgkxAZcr4MMLr28AGOqUBQkXhN5RRIfkCnySMJYnRwA%2F7An8QOqOEAmQ2V1O9bRy6Fn6lIymT%2BXYwbtvy5x2HkrrqOZ8RoUbaBUb1se%2BcgDzfSFwSN9z%2Bl9LwG5dgwmCcEzKkeVKL0WoHPvagAMPQ8DyRW3qE%2FlJQTnZAjBk66rnjkElgq9F3UBb4w417z0fTvqhEMcogRBCKD78I%2B2yMFkCZAspF%2BNTfMZvdyCNLrk0RpVpc&X-Amz-Signature=9c74ccf601e3779f7bafe62547a5894848cd739105f655d55f0c3f4f9d0a9600&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
