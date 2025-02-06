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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U4OTMKC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD50%2F6SEtBaNlEe3mUBK1OW0zdDTZZZz5EkfeZBeeCgFwIgIOoOeCkSHJzrjCo3UKa37X76hdBx925oMQYVW5TM%2B3Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDBiDU9CTDKpsttNNtSrcA3iV6H9WPHyp36r95xYvm6o5mmK%2FiSjv434hAAec5WH1R%2BbTnWY4JG4N1Go4HfO26tYbc8ufjytlqNBMV16aFV912nz9nrXncuxg5liglDkreOwFRnPocTqAxR%2Bt%2BG25eTSg6P1OZpzF28t3jl%2BfXGvjTv8c4OFo9%2F2pMBdWfcgEauHsLebJqNi9ZSYKZOTSwZqIKCjuqZvL5UXEZEjJE%2BezL6yRdphkcCfp%2FcEWu4Qux5THCR33SiYODo3VHeu8vs5pcHV2mH5VrXypyJxgYcal6bnQneJ7UdEavkUWdqsZm5zFqTW1U7gqWTS3SO65b1xMOirSvrXp5mVcBEVQryCh14pEJlP9ifdiE7N7fgVfiMC83OevyI%2BtJbHZdMnsx%2FsGo4qRQjSOzSGBztnAc81LAPLmo5O0V94%2FrUGQymenWV%2Fk1ws1GyBMjD2F6EcPCiRyEZ9ikqUTDiziRGLMzBq4g73UAyRo6491BVIXFrL%2F6zF3JAtF4m%2FoJKUcZMZL9%2BdEX8zY1dVYKXKHlvKYrKYNVY8nD0KKVm57ndM40uY%2B9fpg1FYaf8GRN5jHgX1YoIfazsCmlUWsYvG5PdE3mwDSDWo2F1sNHCOd5p09D5%2Fst37juaJz57L1F21eMMTukb0GOqUBEqnV0yCKW5jqEGtMquxhpS2nCYJlG0pXJyj9v56%2BMR8XjV48H34AEwLR283HUyxzfqT4GgK1%2FIiy02HycM5AFfiaTMxt8RidTLmGHJFwBcVUVeIJY%2F%2FaV6vN%2Ft3kB8qLbr0Edk%2FCfAo6JS8D2zwRCb1cI%2F8L2Imk0rVg5VVq5yVakkI1jR2PgnpzWoVJmtESZWLIzyP2TCt54Pit6aw9ilBwT4v2&X-Amz-Signature=e3530cb5da79df400c2c6f0c73499d9a637101248d29e1a0d40eeba2fa73e013&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
