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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOCNLRF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCiUu%2FBXxD7sPb8P8ud1vlzP%2BHVWIXe1o6xnWXeusexMAIgfpImp9Mzma7AvYgR75TH%2BuNMtbB%2BwOzgYCE3eHjaC9Aq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFpJe5T7qjbf6burPircA3IFpx1BGqloSl%2BArU7iJ0H88q2wPxUGHnQBdCtI3oqtNtsZb%2FhicIJmhZoJ%2BrZwDwTIKGIiraltU4hSe9mr4AnNwDvM823%2B0OnMwcmxRJOO4dR0hEmRiini%2BdUibSF0TDDVmVYk7gO3eKJPrU%2FPshRLIBM3AyNpwABTT9JGgDM5MFOAdyeQpg3VXZZGzfAq8HaJv0jXv66P7gqhbiWpZrVLZgkuq1vCen4bhg9422aBzXAgN5tjuBM8EoxY7UMWsIdHov42qZCpSlihLTPdqwaxY9oRuCRDKKCh0IuDIThtz1q3waJSL16b7dktzOYYrVXMEGEgglp1SCGjxZxpB%2FgQ1zHpl%2F%2FUvvqEb%2FsUHzxks9DKjK%2Bo0Bh%2BJmIh3ilAY9yL0RujVdQjRCnJ1mPTtYHMxJvmmzF8hnhaH00o9z8Su7Ajissyz2tVcMOQoQ0%2BbxeoSQA%2Bkn9rtofW%2BsYkfleJMu%2FsIBbWuXUfppH1K9btmcMB30oePa3MYZI73JhgqG3%2BkA1k4i9Vj0aZy5v1mZ58WFkgkQ8loBxWtfwDpILk6x%2BEqHmfkWVOH0OArgACXoXq75LFVLo2mHDR7f41BT1Ylb%2FJIbYrxT7FC8i7cyJFxdG9zCtbCkYyMYZsMMiousIGOqUBjXTynw%2Bbd42AyljQrxLR7q0hX3kysh3mVoLHs4QZ8qvUGZjLQ%2BH6EHRx%2BX043XRlpww9eTrhHxTRW59RJMPmk8I2NxkBoI64Kiw5LxSHNkrHyww84x8EwWRVAa%2BDzQ7EAC6riIyI4zVY6aC%2BziN1UMWZGfyhTFLUhvgfA1hXXTkaxF4RbkTJZ7K3hvof7IzI4jvYN8SvcGW42AOEFGYUIfcTB9UR&X-Amz-Signature=21706183ae998da52f0c26f0c51258430e3c6f38500ce5ae7511f855124c927d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
