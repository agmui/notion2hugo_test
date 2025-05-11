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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKLRCHMQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHzRbtGz%2Bll9kf2JeBxoXceFFyG6jIkQ7qnuJLANnvzBAiAk83RT3CrGMcuXpGAyMKmOqeV4AOJaRnxYJ2uOFJUqeiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqliQM%2B6kEW2gzRqLKtwDz0X75pVmsMDkOSQz2gLkkLlk5Zd5wsyMulMdD3CxIhETq%2FmWZYTvYH9CipkbxO1lA6p33DZGTffkl04R77CWcg6W6%2BxCnTC5oiHR%2BDUs16DpC4PI%2BtRMUljoBwLXzt3ri9MONsys689%2BI6vVE3Z2cDwvrvdGu6iVw8g68oF4%2Ffk8l28T4nT%2FB6%2BEDue23POMSdd2KB3dmesI3OZGCATmUzYghSs01mPox02xKr4yGtC%2F7Ur97Sj0ctEpgsplEOP3d5d87fBL7HGRtKGcLchGKm6S5t7UHyIVPwVWSyiK0rn%2Bzyl8RFbwGQMOwKSSSk%2B96y4PFJOG9EIZsYuFcy5kewCNqCbbzw3FvKFOr62Io06nvEypjXP9wwpNwTBlKhhCPbf9a9vxk3mEhbavJMNJAEXIZO0Ba3BmgCBdESgzpSQcA0Uq8N4ABIeUsDLykGU5I8AxNBI9R5KFGtmX%2FzhdCIkVNOQNIOFpVSMJg3hmK7L0bxt3EllvpgYjjgKC2PbIi%2FqRh1MGHKxy87syxWnLMboFgGAahQ6Msr7dzt%2BY6i%2BvS7ZxAQsFcdxYcQjQt2WCruhiGaJ2QY151Ay1G5ZHHOFRsnauSZp8g2ysJ8djteWbExtYFNrYdzA6u3Ywz6GDwQY6pgFrM6uIYXFTmVdt2lYe7zwMYDjLIQUkswTI3QN0402ibPALeZu%2B0h28oDJURZTxUazQJ1Dy8%2BjtUTMqp%2FnTEVeRzSduoku2XMfgezS9xc7zvSIQ%2B3HQH9ix5dX4ht2m1EOCFYhrbVbUJsArIaEGkyNcncec1e%2BAhAC47GCLQQijmfZOWdP%2BvTzJqUIT9RCAeh9nkKzxH3eaFZxJRfhxbKE6YIH7Cjnz&X-Amz-Signature=71f64469c90800f5540bb5a4127eb6775adb12db855d20c7bd352fbe2ec6dd66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
