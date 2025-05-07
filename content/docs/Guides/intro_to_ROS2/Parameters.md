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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RSNEBT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg0YMCGalHBdZOOc%2FgyJzTmGwAqWjPUNwPUHog8ZABzAIhAMF3wXdPjBvt%2FGEliiP3FpAy3XyyZoSdqiQOaH4QJDJ1Kv8DCFMQABoMNjM3NDIzMTgzODA1Igx1TkLJuMotm4viK4oq3AOYVyg666Q8Z4coJT2O20djTMPolYQ42O5siqwxo1Vpwca4W85%2BNJhk8dnumDUtW53fpCL0qJBED6A%2B7IHpOV8Hi2Zbd9LWPXrgSqHYgFSU%2F8eKXjBuiocpCwuvQAWpKxN1%2Ba8jNYW%2FPBfxtO5BGcMpxy2b8RfiNyHEnv8yxxqsguRJ4AXIMIRAFK1RJhXd8P4zxfmSBCjO6whitM2h5FJGOT3o9lRn6C9sm%2F6htTmnglRGElVeY3aAYySJ19t%2FHDQbCSIgHb0vL4zzRohM9fi3UUuPp5u0rgUES9pKIAV2yPOmuk5wvCe7chRgi4cJdvYyGlzKgzY0yw2loHDow2qGlQaZ%2FPnLpqJ2uVa%2Bfn3Xfg3U7Vwr8XgZ81%2FJDbb1wzymWSPYQg4J8YzgiJ4P0D%2BEbpaW2aO6R%2BTsBABTlBCMkSt7Cs55cIGE%2BrPYLS3ypJcxU9SQsnS%2BzObh8AROUqgOqu6i1m9rYucYfoGqc0PRm0PMr7MdsjZ3m4AwhQGGuSLFVTQx%2B7io%2BJETRn%2BqFS1y6HlJBp453vV%2FvOcI9zr84AChlap7fUR8jvsAZ8EDXc8SNRTE0ojiRPOrkta%2BxZpvX7cezKOekdnzqdAY%2F9gBPFynMtUflJNncXQk4jCP%2BerABjqkAdvCv5kZmO0F6Gtq59KUG5iwrrm3%2BXPRTmDB5mOA8TSBlF8ErwAP54LmPeB2aDnkLzk3YWYgLWmeNPuU9zy3zxbsg2b6STltw7S3FIwy4JRVHV9Qzxxihq3DaCAm5mCNHTQvi5lWwXHv1XGmgkfyfU5b0585txudFxknLw93CZLpQqMhrKF4TZZ0gGRQZCSSX%2B7DqNflhvEZwgSFtVMDFA85wRcs&X-Amz-Signature=f500fe814a6967a36eb025519ccf777c78616b9382da60d6d761f0a1ad322aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
