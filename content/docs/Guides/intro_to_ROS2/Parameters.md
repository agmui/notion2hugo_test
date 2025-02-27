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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2URCBQO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCqNaBrpofAOBp1jCQcqZCz2iGrFHypJNqNRd56c5KLnAIhALmZg5c6AmcpXiKUPAYoTwLXAR5OL8WSYzvLqtwDxTHTKv8DCHAQABoMNjM3NDIzMTgzODA1Igy%2FRQv8I12eBjFA%2FRoq3ANZW33FvNcZWEJVZEgqs38TbwiPHqqIk2aUI4czLpm2p1aHKAEhpStsGZeHDIfu5X7sjkDHdtIcYME0JADI8f6fGgbi8TuMMaT74bom1q1vkRQvWhhtNrzdY0LRplfzNuXwWFvkRKqienMBqoXOa7BkaQ2O%2Bq55T1zblXhfzlRnUAbrK0bXrrmNlGxw200amuxN9WvtkP9Tlo1ZhObWgBCD15y8QgjlSCITqP0qlpfT1WeFAu6AEfNLSLgqOnuZxanwU4ofmkiE7JpPTVKxc4Gfqnedu24jiiounAmqiHVsFMBFqYzQYDo%2BIeJJ%2F59aGIgy2ifUn84dZGgpjl7u4vCvo6O5Z3uLYwF4u9CXeO8OKLn2C7NxCtH4TvBVYqZIXH1SInI05t79VoTTBjK04vrEji%2Bkn8zMqUNtgyXeh2eKB1j7fTOiVLyEuViFo%2FEpW3Ga5hPjMwNrixVSBBm%2Fhzs65x2v3SNCtuVFW3xgHA23Dep01RlR7eTuohZl%2FUuYLZ8sYcIun6Ws7eFzt8J54XQ1LzE5CaqMZAzrHHRXfauT6VYhh5qi8dKqrBVzXhHnyOT9ur1%2FlzJzLckuBvxANjVtsyGVEkI5YzQRnlbo54NoYYRC5nDuv6Ecw5ooITDKi4C%2BBjqkAQQ8GKPIvydckzyIKb7IRkN9keEC%2Fbs1NE9eOJI%2BXfz30s5Wo8GWJYpojVnQ7mJTvcsiW11hiToG41XKiKTmPDfpo90lqjoHzjapKMXtuUPh5IYl7yiDD3b8x2pF58QBa443ezryChrJq3XIcmWHVb3apUX7cTutkkwEANbJkJi1g%2BkXMYjQzQNz7C1lG4X5VJfmlAvcNCO6et0pk2m%2BUJK6HdvG&X-Amz-Signature=f08686307d3a95cb7c2c5b22714a2946fe2e257ea4c2a7e78a3cfbe5c017775f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
