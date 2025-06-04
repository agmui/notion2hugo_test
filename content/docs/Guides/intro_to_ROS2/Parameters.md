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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64AHTIF%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQClg4N5r5XczNCenc9pTnsAkmP3gnvoM9L1ZueCZJOPiQIhAIaVB7bxatWbwwtVkr8Le1fs2cD%2BiJ4DzcHGJNNXwd2xKv8DCDEQABoMNjM3NDIzMTgzODA1Igx4p6%2BfugdI8ouQqnEq3ANTZ3iu6WWDNyvPxPqIJuZ0aAtKfMNHlFjiX0bWldpeRMB2xxYsjFhXWVKyfoTzk9uFUrX2hCza1EP5rHVfiTsD3A0ZKBU9iKooYbZN4NjN9vwXlD0eI5IoouWGFqeOkkDvpTP99OOUajQvx13TNGvIUW%2FLCxBWfJOf%2BWshV0IaKhJrUcPrJEEYeHq1wHga5A39hIrAcP1HC%2Ff9mW%2BB4sQugak2lA0plMpifwOOmgf%2BSiV%2BbThH%2B2vXHfBoxULYz1HK4USebfSRugnnaeymSlRRjJDdM1mMHyGYOMWiBfWb%2FK0N32CmsGpCAjdh30JhIcgAEr3dvWIIi46k8RAnL9bj9jYU008DWPgV8T%2B7IVwXCV5NmtGi6LyhQ%2FtXwGjmYBwBMMM%2BHfphmrJ02oJfOyCLDPzBZ%2BsbO%2FTTSzmy7YssqATGhRULxJMLIEq3adson8b4F9%2BF2twE1hnTk%2Bh%2FW0Q2EWc3oHqRFh72%2BA%2B8kOiLg4%2BI5%2F8IgOx%2B%2F5mJHP8vHTP5eNpH%2FOrvPR%2FjdzNYSjzo8DVpJUitti6%2BRLVU3eyHZjoZyc3n1dq4S3dInoRSBRzZI3VSEhBPfSuXV4RRI5bIngx%2FRRaQMsJGErbc5bXwKAzna18skolQF53IijD73YHCBjqkAThJ%2BhgTzsF4HSKLEy%2Bxzua%2B%2FVikVpzZCwRb28W6%2F87uYBblMLZ5KPiQBPs9s8FnifllJScK4dJsgHerzjpmTgp2OBN5jQvy0m47ycGPoCqDK0%2FI53ak98MAVm9jBJwk8kV%2Fu9Q8k4pBZVZuOq%2BuQ1w6xZB7%2Bc6L6plC73ynqUMxnmlOGsTPABFcCElefFr%2FJ%2FfgxchXID1rKP8rmjkAnE7fYN6E&X-Amz-Signature=6297e48e5924fce2a3a7887d536afb33298e8ff869f883458f52532b36bc726a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
