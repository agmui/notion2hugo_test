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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DWLRWR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvdl4zHbsYSs63CB89Nppm2cptQYW19ukuA9u55uwM%2BAiAGixROzXM7NuHps3p%2BI8OoefmqEo0vmFLgx51Yg8STWCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMZ0isUIHoU3GpWBUBKtwD%2BjV6zIGOKoYscj1c0yD%2Bm98LxnYE%2FkYjinWnqui4OZbii5XnqMPJQhUHomfHIS0%2BKZSxM6xwYxIZGB1F72UBHnVLLYOFBbjHjfeikZBwCggEugwjYH6OpwdAov6ijIaARCuEpWHybRHx8xiJwsHTf80er0aJfAdQcHYjP%2FA1urfLqXy0YBNxChPSufXaim60HTHpuOfjGJ%2BmVzBMVs4bpdjRGyLIODqExT8WvAEhb3XvX8biyXgE0aNMYgRtv%2F1HxDzu7gZwsqm0oFNZoEph8F1ARBX6cpwmnkLpyf3fja8DInW5W8YJro0SW4imqtR2IxT%2BdMhfH9GoY%2FzU61i3wLT5fVkIhOT7zrVzuWOmX%2FQYchiwco%2FrWHM%2BEkW4hzTD6sh%2FOEqt3UDMAxub9f%2F335717csrg5GVmgfLtp6IjWpIldUvc9R03D8MjT0palHhi%2BdPrSlGGfNL8yxv0edufDItKZc3%2B8YEmOlfHip5qLXGjAbAR7jc1WvgiNXsL2pMW4syCP5Xr1jYBvw43OCVSM%2BfqgVXYpKMk2erVxM7bxK71h2ZZyhC%2BVZyFOXxEslLSKk2uR9xf%2FLJphZTsGqbsugyuL%2FB1uECCgUGSMvW%2B7wrPnA0oMbewjYuv5ww%2BdLTwQY6pgEkkNLzQPMERggPGA33Gd7%2F5q6fUcg2Xru3LuQTSg415TBSlHHzhMvuBBM3dUL%2Bqnos6RtxrVbUf7OBWD0CUoCcF%2FeOAMZPa6UjKRNDklGnZ3tAynNj9k5npFVjWLr7x03gQkQxVa01x%2BRr5FnAnKqMGaJclVdSG5%2FQL25uwd5oabSIhCBsL3dunglor0q3slROAIOPGZEMK5uQN%2FBMFwXEsvNrTA7i&X-Amz-Signature=6c2c4aca47c41e23f993867636a51e07cddf084fd52cfdc3825b736b78f4ec1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
