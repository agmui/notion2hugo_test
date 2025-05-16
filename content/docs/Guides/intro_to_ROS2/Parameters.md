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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SXHTAJ6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADZ2CCTnm9TqOCWLdpIK0zgY1%2B9EI2Iz4kr0LxgVaczAiBnzntjDkZFUL7fJC8KtUS%2BuQt4RjSIp%2FSkiq19TYq4YSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMLkZKSymKpXtmZEIeKtwDafyJ%2B207hKvOPnSFRtq3UUSnvZ2qCERX%2B4Xf%2BNKJj2JjMPPCGLnOozry7VDJ%2Bin%2F3ZEGPPVmq89c9idxoMu6QOcIN2lBqTuSp4CP68IEJPc%2Bs0OsAGNZ02PVtpFD99HdZMc8RRZ1%2BFgd8Mv4TrSCF7RYEg6QmQJwQAHdJNtuJ8Gxe6%2B4Hn0KkqGHkR5E5UWRdm3xF5JfFo6f9bkNiv4rUulGm92ODqNnNW6q4frk3gWr9e22dpGAboLcA0XAMIgbtQ69iRfwS4X2XgumaN8u%2Fkngw6hdCm5LNAYp61bhdA5ApFqYYn7qnC8Z%2F70xR%2FGQtKOUD3aWHNsT56NYRyotCFE9yOyIgDs%2FF8rh6juqwLlZjU9%2FoGHzOEcmv6FY6K7B%2BAcZ7x0rDSQllExecja0XKZEi9d9MbuJFCQo%2FKvTMnrsUS0Fg6C2jo00njxWvySlbtdOs5NoBjzD%2BVoWHryMwbbF%2BEhQvixZJbXDO1NVNftlTV%2Fjexo%2FWCQcKtPZ00%2Bf%2BFr98qMa%2F7KXbEO%2FxG8k%2FvQPJEbpWzMnefT9j9EpBh0uymH%2F0qvCnHMtjb6fo%2FSo7PSpmsHGkOZcmSowYYAQ%2FkwZFD%2BOojMB6MiInuqet%2BSN5oGWVO3rkZySTKEwubSdwQY6pgGbTYGVtyhLpZm2LhvOQy1UoX6yQAcXy0C7d6QS47alKm7sqH9bCNiM1QnW2y%2Bz3l2gHipoG%2F3dZYyxzKk6xLaSDrMxozGf%2FzhcTJhLMLUYV2ZlQ5WR9c3hXTqznc9eiBaSdBsp8GPVbJGy71WGixvYCEzTGvXkH09lCGjt0uhfgMbs8THfYjHbgUavAumPXCffTg%2FNncReQrm1x%2BoPALPsTLVLc9py&X-Amz-Signature=a10ef85275b4db68dfa19813be73614a78fcd1a13efc2bbca31b44ef8edee925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
