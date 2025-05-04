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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYDWHIV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDRfK%2FVoH%2FSLYISm3f7XByEAMOnHJcT9GhKIVcQT8rwKQIhAMA1iChYry7iGGFllyZgDm2hVf2lZKHBa3%2BuWLjOzjuSKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTzSYIOO%2Br87s3dN0q3AMkcT7SSHsh4HG2x99m8JBaH%2BLs9CSooWw4nBzaU5NpN06xw2a798%2Fgy3hE8UDZS3VmuY0Xxf7aLdQNbgastNgHCzPJOm96Snf7vDxyNff4yOj%2FSdNPtJpihRq1Auu%2BH%2BdpiGap6%2B06LtqNgdXvWhkPqOUI7OJDohexrvJ6L5%2F9p%2B8oI%2FJyVpzoNbcRPRwB6BXKTKuPNseBNiJ3QlMZSdL2qHVRu0IqYxhp%2BwUp4DrD%2FYJYnVCVEoCrsdyZNPb8O6WBSd96eGCvzHTxbEqDuBVLNetN1ruSzGB3Yigm%2FdYJ80GH%2BqZ5WhL2Tpzj6Magl4spiP%2BH0CgC6y2fA9kHbIP4i07JuN4BmLXMZz%2FoyrtYq9r2MhLISfYfrgo%2B9IkfzyYiB59%2BCjaF8e7ab5E%2BNzfKwkynR2jU2KXngu4AiuBK0f9OG0GAaJxo4CkLdOdCIE21IhvEltIX19UwkMzwxKgK3f0IWPc28Ep6xpFW%2BYZRE17hiQMWDUnIWguWo3tuxfWk%2FIV6e%2BkuJQppSRlb%2FaN0Z%2B87ZrTDv0s8qvd4HmSLrElvP0OhravdY0QF%2F%2FPPzokuhE2Mvvd%2Fgfl8eDobNLze16zqaBnHRgCvD97fpiU7J6xvZIZxH4nIfFbOOTDp%2FdzABjqkAWJ7oLNwoVQt%2B3jqfEjEaCA40GLDonwl1suT4YlLawwKf%2Brj5b9DmyRdsal3BbyQ6o01WYiKuvUH%2FutkmMZdNlbnamM1g53OY28AtQUeFn9N9%2BvV53Tn4PkXzm%2Ffv379Qm3cyt0zFkst4y0Yag1eLmduYvR1tKQ1M0PmKPSmb2A8hQ7oLmTKzsMOXdqJg8tpHaDA15lcj3djfukVbFBL0PNBzp2e&X-Amz-Signature=2f41831f71ae8642a4e0dd411c00610bbe4ce195c0bc34aadc523895aa294a99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
