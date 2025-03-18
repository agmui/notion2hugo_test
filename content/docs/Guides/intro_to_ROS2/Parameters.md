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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S562G7DI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCICt%2Fa84iG8DgYYIab7EKcqdf6ZI7lWsahk2scr8LeJbvAiB1fwzWQ8ljyBfb5Z4E5RMYDSAZ%2FHUkKj%2FGZxMYTugeVir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMJvwl3C83eIM9dYUjKtwDLSbA33pMv1BDoVu0iJikhOPFg6E28HsMvRO5yPgcW9F%2BXP5jofXC7K%2FlFr3r68SZMDLPy5TmeftCbaSPrTK8RpQx%2BfS%2FOUu1VMgTWz2Td8dVi3xzTuntx%2BL%2Fnrh6wrn0BTfhVj5eMcbjbLB%2FZEbIqxOCbNLJX01AV5KOQCrJT6zTkjyuG2V7QE9UoQwIWbraRTlLPdC3I57S1ih7baUhGwnDp%2BMSND48G7uYSoYW%2BmS1C8rPUT5rqNxjpEERO2dEZeJievcn%2BqVwrZHKfVdVs6lgMhL0%2FZWIAGNwrNHBHdkQcn%2BjwYBsXZA4gzSzEKUdrKQ3phjF6M6MMjS7VWE9Qr002%2F2LvAOWfsE3FdHs%2Behq%2F8wTFeJYmqYmDwBUF8%2FTQ6r01LDHdk1YNECJBpTJLrmNxO6%2BcGz%2BDI%2FlVov7O5xvGcmUIoVMJh5vtj0shSy5%2BW4si5KqftykTpy4B2EARbLM6tsNOjYOPBSq0H8ijxPNHmdo78EXa0Tp2nOjghiHUmrEQ4Qvmn2BGeHS1xNsC%2FEo7MI6Egae0kg2TrBmcZErc8Uoovw1e0bzuXsQ3aEYhTLRnHq4fEJ%2FSAjFmeKRuMGSdE8Y6xEyOvSSL%2BSfMoxPI1TuMOglRr0rMUUw7JXlvgY6pgHyecTxc3ujWeqMt%2FhF9qGBB%2FBVA742KbdixwOQSaTUShLfJZ30mxNHaSXXVfjIYLCfdlw7WGPUwtEsTmVvVGST20xypwtbJvu%2B%2FLoF5%2BbIWvnOUOiWAUkpDuqPR%2Bn2RYX6DfaoDAzBliVh4FdVhuwVZ1CE5PALbvdYoHMmPhYavUCLWIcBUAX7sjkYjDAL5iY2ojsA%2Ff33C7QGjYy5jhTVA2WxwsbX&X-Amz-Signature=a3c100e45d234523c8862b790dfd2379d4fcb69880c14f07797e3b3e543560c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
