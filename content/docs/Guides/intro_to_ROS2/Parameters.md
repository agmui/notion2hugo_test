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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJWCHOKN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDSeM5zXft%2FNDxORGxHgisYR5qFBDSBcz2cobmKmQqiGAIgLLU%2FLzsyKgO2%2BVWMChmzwVviUSqsmzpeRUJOVggECeUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtMfzk861U3RluE1ircA8%2F44g05qtPldmOATg7muSzYNsZ1OXH%2FtDgBVyOGT%2B%2BcjZ4%2BhB0qduiZW%2B2FzFY6zBUv3HOgDBV8V%2Fb9skHPFGvBfD0ZIWoXQ4dNJbrEhK1a6I%2BLy6qWq3iga9THIjCRQPUDpCvgixWmsbRr%2BheiZdE%2BjhZvsKGFMWZwk%2FbSSg8NDZs0uaAAYRuMFdkMc3GJNwpewbatbm5i3MSU0cHOiwiOGKrP2ljhqC4HTQDOCXcBKJUuSDi5ZM63MyD04qSnAxstnXvjZYjgHfIJb9jm8QKAGCpOQn%2Fh535TpCVDyfF3PNLjQnEKQBAWuXAWROPNr7n8sc0tRKa5Nfxy7%2FTcGY5%2F72QgryIUMj5VyVJzbiTfl6G85cx9GV6PyvqzJFxLR6e%2FapshvJ9Eh8PqZgmeCRi4p8IiPIypVKNMSbWX8Lf07OE0fVLcTZWzQRzmP5MQ1%2BqEpNd9qQv2Wjh0DFfjO10c05eI0T5LQXBtDXhyDtpVyVIOELBBwCZJFHwao3CL1Sx4FWIpmgK4flX7AKVpE7%2F7hyIK0ByNvd9NWu%2Bsf9t9PcPOuEzELXI1m2AZj3TEqN3FKfvDj%2FaiUNFSqVPTNlwxzInsdgQWXpg%2B%2F9ixiF7YAZlxxAMOr2jdA03RMPXl774GOqUBun%2Fho7ZNHM8tn6qdbchxxu8mro8FDFyUY18iKkg5n%2FYuAZ%2FzarKIp5PPpMDiIwbV7hrpSy2Zg%2FWBsOBj3bQOTu03yfoHO%2BlY6e%2F1AlsyvcunlGX9ckuzODIZybj0gPjeMOHeL%2F6wmZCjO7%2F%2FSlUO6jyaxF5B%2FRdygH3Gymu8uL63idxEWRptulwcvLwzMrT5OA9PqJbq6kiELP7Wferoo8M7h474&X-Amz-Signature=4fd0b7e1e3f5735b0e7091b8c3009982d98645805265747d900a1117a50ea994&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
