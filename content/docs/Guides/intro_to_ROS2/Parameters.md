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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PHUCRU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFF0iRsdH20%2Bh%2BDH%2FrHNy3XCfoQ%2Bub2FkGGVFnuQI7s4AiEA2U1%2BpeDNdHaI2l%2ByMDK0yUPKOzVZYga5ZMZ%2F0UW9KlwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzUZSq3AaopmR6uQSrcA3qlC2%2FZnauw2o7U0jFRV0yV8ZdnjPNMxMGpREZbpP0ImFNeLASq%2BEjJ7P41E6K5fVAzvD%2FnW92aHywX9PuuhnsifDnW1aZvhwpJqiRmqYawjsReoiuyelroEK0wRBf5mqe2JBYScAa6fohe8WgC8VEKnkummX0oN3PBeGYhaiwgs6ks9OEj4r0qMIlNWHVhdSL9SqHdEEDGTEAtNwZO5JeWES6R2GEgKUodE00DETRQnaVw0A9IR3lfiX4uI44l%2By8jHjvQA6mZx9hE%2BZxbmEKu7uhuDJkOALmd0mDQI5E9OpvHcaI93r8fLHCZg1C2A5B0lhBCjER7YC7OCn7NhvlVtm3bm6OezCFVpRMc7pV51VineG6rYiS1pCIZh%2BHuy1fkn2wbBW0Xq9pCahANwOztfkW7LrY3Z3Z6UT9KH3tcG7waYefO6LLqqK9x1G%2FTfwj9%2FhmKGADqDBJRdiWFChIYcIrE5oRlpRANYsFQpxwb7w4Bu1jVwd8smvfkYrUvP9ygAZdLhdV26Q4yQFveGvqmy0SAk7hPp2vR9wGohtaSArhjrfvFM1fXAMpsoFNLXJ6Uo8CDJdSOJ%2B7Clli1r6Qu%2F9ZLDJx6trVZ3OVblVT82yB%2FgcyjRCDCjOZ6MNHd3L8GOqUBvY0WbuO5frF%2FrzgP%2BWzXQgCt%2F1%2FIBBsAHqzgjO9ySaH2S52ubVLn9gCdIlM3EQT%2BlXRDvE%2FqyE1xk1JWmnbJ9AKwm1yxeRLnor2D446Gx4lNV0rn5ctecN6tpM5eA5hsgFzpK9W4fTYDUdq904RSHYAr1JUksPxdWUubnJ69i2%2Byq5Pi4WXXkt2qZxLc4qs%2BGPBCEvyMjbTcr2NJKuvcdGvf04HY&X-Amz-Signature=7f5d899aff5f6614b6022544dc5ac7f6bafed99ac3018dab276d2df2581fcb42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
