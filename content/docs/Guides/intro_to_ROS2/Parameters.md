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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU7LUHS%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESNdE6aO70yZkKq%2FtBGAU48V5hHpi34lY0B14t6tF%2BDAiEAzXrW3ytYd1T6vZJsvypUzB1AoLDu%2B1peugOB7uj3gyMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAZ5seAg%2BH5%2Bk74TYSrcAxVZdbBhVjKauu6lj0PlyGv7vVhHQ5VF2QR25T43UFBjH5oOOlie0qntBonCnIwDlnvAcnXB3JVkk%2F1a%2BXcOUNaAIqNLbIOePqlZ%2FWG%2FBPmHYgHahKomG9qYpqQeb%2B6uqUeIzDU5goGCdfbYCE%2B13K6m1s2GObm%2BEypf%2BXcUxdMWaAWs2vuRvRlNBqTC%2BiQs%2FOEMhjdRPXvgUM617ctbYzxUV8kafsmNxoMh3hRQkpKYjvDq4%2FockOUtNuH35yAEJ7P1B2CWrO%2BYtjelc9S55Kp8mmIT8uzsbfpW01hGiMD%2FubI0lDsSOXYyCLZjoZPYwzp5X4LR67Iz7V3mehzU6wUnK4WEExdDI7H7L5BdLBgVp1sTsuwjEcxR30Cse8dRNRwxcRIReLKUd3SiZJEjz7XTJ7gxBWQyudAcxrAHFMH3RnI5BUaHzazVjCmZridQ3S49J3YSgb70kb6C4r4WnijqcZHAOXMqYIXxCkkPkFvo1s2FjKh%2B4md1nnCHAF650n4qZXZm1az%2FDRvsnK7BEa7%2FxNnJ3vv4vTYJ3k%2F0jyAA%2FpElMbWUKqUJmwdgE%2BHe0E3OLlfxJhT9l45%2FYqSfxrm2o4KJdJS1L7mjLM74XpXvZV%2BpM85OoF8mXDM1MOmVksIGOqUBWfUFZSOV1qmkN8IVp19Yx5egUCKEGiIkq1zFCGmZ8yfeOGah1ZIR9ljXVoRort6Y9%2BoyXMzm1JfZ8rhuZhDMWQDlBt8CR0ccdOUte%2BFH%2Boh8erXTMKOi235QAU8QcXDPdQbojJcjhC9PQDOUoSjIB%2BUfomQdBlxLf8l58XRW%2Fj9pDPN%2BErO9d7Y8UtUJ3JwJ6TJxySPAsUfrxwKKO4O7kOmIj6kJ&X-Amz-Signature=193a503aced5139f90149881838227d7f5cb2d2f2c8a1346d7e9031ad138b71e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
