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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT25JTJQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDJ5aA5BKqDZUxWDd3LAiaOMyqAoTO%2BACHVCeCw8ETowIhAM5NogAd3fko9CQ8NouZ%2FLCNW3Mvd5WUZNSv3WiqW1C2KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBXPPz2D4%2BK%2BDiEPAq3AOw%2BHN8qQsgg8llVOe1KjPLozm9GKIStfpAI53V3PzyD6l7RTSCSikFV%2FMgld4EfT%2BtKOV3A8T2poD6hcRsHV0QOJrBhU%2F4Pb1Mswhu8cr0ciRWEs3rip%2FvOaG%2B7E6mNk7oWUYTYRcCLXrSEljfl4hyuUptXKejwL%2FFq6V3YXJOmEqtCjz2LdCo3AG753dBBM%2BNMFp%2BxU9u1Ts3KrfhAu7TTfBCLzEtzcGHMaAwwBqnqx%2BzIRQYoFCEP4UcUk9T9IZJN05s9rCdX2kQI6lYoefmTrH%2BHB3hSQFVY%2BjCXmpgx2%2FwLZr6474UmfouTZqQZ1AtTJi7gRQR3ETymYY5vDMS%2FAA1jRwUO9C9DmwOJoOHDnd4lVpJy3RXsjuoNsgCWvqMlng%2FqaybYViSkzIg9ooL4Xw6T3O8VDo8MtRYRU3jTZmOaDQaxMi6%2B8y0g4qPtuhhjq%2F0lj6V7nLgO5q33JpVDK7ojprP1pvbWhXsIYr0Dncc4L0o6e8NXvWcWX%2FXQEPm3Ywr9OnLlQv0Pp%2BqGt6oQebYMwpsUYpBUmazECeIRVuQmGUZOxlmFw51hbbaePUdc2T3BkSR3EROiNOhjSn%2FTVbhHFFMbrcpoQQiGvhLd5oF8lZdW6vzDTcBTDCZ%2BovDBjqkAQVICrwm2LxmzAObCw6w1gNjomYPdORBnWKnQY7gj7vEhqBzczUUEIaqKnJV%2B5fdpU8QzOFFKIPjNaTtPKsIyS7wNqcq43u583g0pxK0TICFhB0xm6FD0d0OL9ffCfEmHuCGyfMFZcd9jR1J4kBUUrxgvFaek48MhSK0rJzOv%2BWz35jW5k4n6610ZReF49anMCRNPB20%2F9QpU5zXw%2BfkswrzLUsb&X-Amz-Signature=0fb4fb3caa6b47bdf41aebc67699c8b190fea651150416a52506ee6a23f52176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
