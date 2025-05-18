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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSMJPT3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAABZqW7dnitscbk%2Ba5cvppUWXB%2Bw0hqKDARWT1VR4RAiEAxefwdATqQsojDN6DYVgP3OaTOeX%2BBXo28hrorNCchPQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCDkT24fW1VUMFwZtircA0CqWfrPkOSRz6kQXBV8gs54mTH2ZoNFgl%2FJs4djNcfd9lABw54tv0xOY2D0y1HrD57dfa44gfZcRViDpK1HZN0oD43HILEcLGxpMMbOzg4qg5bb9YfJyEMKJMvzCGLaKTle3Lq15J83Zd1ZEcJRalqwsJiLdy73jOvnPwqzLrOlA0zB47%2B11CFWCMGqyvX5ZRA56f4zNnH3lBC9YeOs391B%2Fo%2FJds%2B4NltGIYKUl1HxklVcJ82n0U2SoEsxDp2p8Pn%2BIAauYLY4R%2FFqxa8GX9%2FFdMZbffesOhXvzUb7dkb1Gxy87bK0bnMvlVWPBPYcaQgZKlQ69WeJw2s2mcGFBJ0wGm%2FTTHxlFyRavn8rIUX582G0QsxtbnSC%2BkTTWRvGsJW3tUrTSkZpYlSBITltf3eBpH6B0ZUn5KxgASEh1ja3D62JKj1JGiMqF2VQAw9YYLUathLUXRO2BWFOorfoOvLiRodoJX97hy7qfi4Ip58xdP40noJnYtzd6c56b8TxsNuIObhL3IQmu3OPrxTgUyZEAOZ0hSsWcKsg7qLjIPMPl%2FXl6BncHmVp8a9p0FBBl39kXbU6yFoIqU%2F1MButeufL09aSAJWe2%2B%2BG%2BEr92nkP7NhdTe1ovkp%2F5WfRMPvwpMEGOqUBurYmrIr7lQA3tUQt2geynVBLpJqEeKqj7VBuDoHbV%2F%2FWoirUpJT4udJkxClghCr5qX79xJ7Y52ChObjIoOrGYRxB6lBOwg6LBzy2m7aK7OgmS42QciyyY9u%2BImXxxjOCl2WV8f3iqDSLHpm0IKxWlpWujGKB4HWQLR%2B7zS49xwQbpmipE7GuI7QtsnSQtKD8aXRYBQB7zdLcP13Y%2B2bn6hrVtT0e&X-Amz-Signature=2bb8e2fff45949d26a31f802f7b9dd05a8446e53a285e1f1550364aabc148ede&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
