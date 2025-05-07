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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBM23OF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT%2BaEdtHyyg2NgeBUPC5TMjQv17P4VJN1WjstA%2B%2BucfAiBQffcWbndvryPhXJ1qKymET3PJ8UMGRFLeGj2bifG0jyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMLfBwMLuxEGCii%2FGfKtwDtQBXRNRaH%2FGR4OGRWPCzZZ8Ji9vjvFIpH%2Fd0ibHHOGUlm%2BJoXEEDTGMJqpiggKX98fwv7S%2BFxoPS9KUS8tjEzTz%2BqOPaRxfWLdj95AN8z7eURbGOjn4KxA4JNbRUbUeors2WF2xgThnLJiL15IuRjmd%2BaNqJPqnzmTdA7d05ZLKmcnZBlNhbM1i8ayFKDhtKCwRPh358qXJM3Ep%2Fc05WHSpF3FiznPt%2FXQJWBFea8rzGZJkKG2GGhY2gvIMjjM4NA2fxetAo0Bn0wpoSYXWjZNcFz5AVS2g8AJfWQ%2Bg5TGNn8HzireGd5nto4nr%2Fh6wBTqU6JyMZAmhtoCa%2FuzG6b4e9KuWq1vcjlM%2BBVyNA%2BXP5W7Q7sdCGViB1o25Njdtvqbg42vb3YA2tqW7RT1%2BGjdZFKb0kDNhYHbU4M5HPZhPhe734RMvKRR1yc59aZKWBiYRbnIsuUhhGAq2uJinMXIvnHhutbwJ9M5Fx4XvyEEzaTCUX0c4MRCcAVAZxXWM65MBhkRUdLo%2Ft5UQl8mixSdPhIAfky2DYqlcfGA%2Fg5gYuNDBinYXae4zyln4V61fm3k6mzA9kMwQnzc88t8Ny7YS4mGSX85u1z1Nno1e7AKO0bTfAJj2mjPw4rcIwpJrtwAY6pgEr3wdfBJQ1Zm3zIWFzbSxV6BNAzfmpXcDgAimEa0a1IoZY5aKD%2FejSA4WwZodW3FehE5mpNjWQJ2Yp1iShnhRqDUJSAVQ0DJYVL0fqGZPT7WP1J%2Fab%2FgoEJ0zPjlcdCThHZSO3wL6i8fZDnuxZurz%2FW0tm%2BtC5wYvmRErSbhmfGfZG1d6zbfjfueFA6H5peayzScoU%2Blu%2F572dzwVRsC47dJCgB3Gl&X-Amz-Signature=545affc490d2cb4d7c372fb7293b48ea02d0697305ae6c78c3288db9fe3dfad3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
