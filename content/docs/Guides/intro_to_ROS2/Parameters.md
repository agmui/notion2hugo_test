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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52CWR5L%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDMUWtfHLQf3WHW6LpqmuyuZQZMsIwF8PNXszSEVCBOxAIgVJe%2BrCSQi0cF2yd46OcH1ZNSsCkebtjSc7SZn95YpOAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOCP5TjmyNrg8DAu6SrcA5X2saeRXOKT%2Be7YOBVHkGnXp8hwYcuKGJ88CXLioQ2XTgYTgk5sPh7vw5%2F2qF2P5R86Y1LhK4uB8EryATvi4mtWhr95QHT7YiOfNk8l5eVRU4CmuJhbA6gpcBr2iIV3qD6OjtQFEb6lZzLjcvMYeQmH0Q%2BpD9XslaseFh2DeUKPIWWlGLw3BiVZWVkGB8cLNWJjGwirHbc01FD7Au4Wp6HcWlUXyFMXmtOhrOKqsM2UW9BGSdxRmIF%2FjVR9p2sa%2BYHYd54tizbmD6nG8NNKlIrEp8aq8U1hd22b%2F64w3AAOyfFXqSGhiu8vYnPsDo7FdyzJSYn5OSXGhdYAATSDSW0XFsYTL%2FsvGDwmGmFBIymb766LSf52dGgYM1TNUHLSh5%2BJlWxbz42shyQKbKURcqviC4nPnBj1r3QcX4H2D9oujl%2BuiaBf3T2xgcFTnT4vEY8idE5YSaPSQH%2BPsSCFr%2B7OBowrEI9PFwYut35ehi9Djk8AMCD2j1V5O1DkdeYA5WALNyXApOFGkyjsVs1KTm6J4U2csrbLGmSVR0RCkqLrEF0JCwrj98kgb9DQwnEo6oprIJWoShIU9iaLtH5PuhBx9N8Opd3bXlgy%2F5tSghOWDtM0P8vAJ3CuSThFMKOe9cIGOqUB1IheMBOvrKymiq8rSYd7LZk7Du3mZlmXgbT8v2xeBCh1hiT72RpESySbfzFVFv6U8yZ5%2FF2kWiV6UeIvkIKSCDwgaGyXkzLc%2BvfNjLHxILCB%2F7ycEsvOwrbNG7myyYNPYFlmyfn0ZJTbLLODI5rF36h0UTkoqp5Hd%2FRtZdqY8SLBBdiBkjw7YgW3ZCYE1egowO8JNdu2zS3EQZuFCb%2Bj0Fy3e%2Bxp&X-Amz-Signature=89dc510f1a4dd7391eb43110a618220a9d8462fe62f9b2138825f3cf00623a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
