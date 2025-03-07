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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWEV62G%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDm5m%2BxhD6SH4y3DKKeOX9lAdAbrC3hIIXIdMDHm1AbyAiEAgDwpwY9BxisvNs3bPu4yw72lrEB00%2FnewREjM0tL4foq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDOJ%2FP4mNUQlT%2F9yyVyrcA62DBZRARWitHlSqId0oY9YBCNJvgtaRdaPzqebpOC7zTYMhrdlVYcFteG%2BncPDlSFutYrYpxz3yJFhH%2FuN9CoQv9uRFJkQWtLsI6grUAECRH%2Bevj1MfdLfKhVFqHmVCt9QaFwsxzQJGm2Orj9WjreADBnjI7mJwVdKnx%2BTBxOrYnav%2BcvHOlTxWyGL7ZYNxF%2Bp2jaPQN07aUCkyod4ZLx%2B4FS04SPWraH5kPoJiaxL4kF2FzFSLVyEc%2Fz1zIa8yo8drHdyQ%2B%2F73KlifKShSpzuz8qzjdbT1oAQcTMi4a%2FT319xyoUEC1XHYKpF34ooW6nRasPuTR9Fvv%2FDRY6DLw5LRbliiYiwm8wpsqQIqamsI587qTyeNpT9q%2FqdcitdU0p0Am%2B29URJK6XR%2Fem8uhmLZCA3ysVzcSUvvjDL2VE0uJjau%2BPd228r90loSsFXEniIP6iwm%2F%2BQU18mOO33i3GXnGuj%2BMdUdZPjzvIJq4ANwe%2F202k94LRzNU5Oi4vX%2FlNnWsT0%2BegMMctF%2FZDWqqOhveZd%2BCTsk6Z3OXOxju9iTDmxQtXu53yxduythg3VPXFgum5xpBq5g4Z9EZpNIkwE0ouwm4wBYFu66ZdVbCRXzEbTVtXNuZXgl9qURMJGgrb4GOqUBf0dv%2B65yd6vodRsYUdhfEam3Y6F2wo762Kxe46XY35mBKP2NFiIzkPHidicIDypbvFN2qtNN2OfxXJu1YENEPkA3PZgvbWAQ%2BiG9oLbG%2FHbMGKXBRBIyHqqt7sYkXvYM9wCpAoN6o3nZSyopqxigIYjBEo1BiJtOD%2FLTE3TGyaBGatM6%2BTgjYDY%2BKouUIcHHhgJWAAn6118KNxu5Z5unOgYH3UWW&X-Amz-Signature=a109e90fa0e56f4d8b28fd90ccdef9b8e929f0694b4e49c5fa2ba8540ee6c285&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
