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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z757MMZ%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC3o6UB6To%2BFgTd4AzAbCT17pHBIZmhIlHdygCOySF6xgIhAJc9W%2BqK6VYK%2BQ664Om94ftwakwFIhSYGGBh%2FhHAcmP6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgwZ%2FWd5%2B0nEdNOXQDAq3AMEctwHVU5hKW3%2FreCx72BP1zUdGQUAzw%2BQhA8fIH57V7kWfO1dVVZzKwZA1wtfaSkvIoNeqOT9ndEiwpaVO7LJnc7%2BmGAktLkzosGuU%2FRAq6qzm27fS1D%2F6%2FRb1PufbL0ZW0I6saY1tVP6VlCPBiV8z8XULvyOE1rKx7rb3%2FHcIzuu1wqdKtXnFoxNTIpx6sA%2BRuzRZ9k0N9Y%2B4TGsi422sOrA0FOyvkMDs%2BlAqgwebk9dNhePpCLqHpbbkiN8QxQ5aKKvZfJvThmcBLXPGkGJbivgZaIkCgCEdHp562QZpxnw3%2BYo7BRdsb3juPy5ATaWyVQBx3n%2FqeQyPisCcqQMFBMzyJ37PxNvZHAMDBBcvuUcTbml3CNBVfAgJYkfmfNjy2IixZKDoeoPoz1LTG1T55tgBG%2FrmJNg8RxX%2BK%2Bq2yqR2vT453%2FDpBYfoK0ywL6EoB8XHfHZRZqIha3k18XkBSdmysYiJZbroiVOHFNCF2u68vQxgElfwqYCgGfdteurmkFWLD6eWRnDb%2FEgI2XcMXKnRr8d9HyY%2BCovWwV6xXK0qzEUlCNssOWoy3HtHm1mC9gSSFCp%2BmBbds7qOIWC2WCPfPd53eH3bJ0UGl8%2B4z%2FKAW4dHwt%2F35F1%2BjDZ4KzOBjqkAZUMTPjuZoc5GhJ2F5C9Sp%2Fmd3Pnsqv2i5Dauk0HkPzsB9Y534XQR6aFhqFn2lCqeFgsX1hR2Y9VwQb64SqtDCtmjPk4hzPpvO%2BpA7Ov23yzc54EqoBwKXrJcecnaz17W%2FxkKtI61Ccj1RUcmpX%2FZTh0j1jZ1KtT38MRl9p8EaQmv1idPw0EtomyHt%2FXlrrWL9E54uIHRq3FPlgLnGhiegQWf3FL&X-Amz-Signature=565ab446ef36fc39e76ff8c9f3af2c368601f0bbbcfee0ffda0eaf7aa26b41fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
