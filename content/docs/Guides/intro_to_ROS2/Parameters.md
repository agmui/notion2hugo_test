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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHEGNJI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFPX01lpAcdcKwSJ%2FIa9UJsxXX6qAdNFP0MJd7xayDjoAiEAlMeJc9Pt2LuShBM6Sz720v57XAS8ESmR%2B86pNskhU7gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHYjSbzIhm9lK%2FF4eyrcA%2FWHVjFrYs0oGdPsH79DcphZn6SQ%2FHVS8z6ylGzi66lWn%2FOgP2xn4ZfFH9LRKhHwqPjpC3WtKTb91qz1MS15AhyHPc%2BBTqqhcQm5ZcN2hTJQJVsJdGjhVMCWt%2BPgwrDwQAUhnlUIdbQYHasdJkjhVpbkE6FKCP0hzKPJftbAPAeaqbNVHdZ9lg%2FhIux8DC3H1tSda4q34eCWRyZMqojvUgWbvIUquRLllH2%2BH8%2FcAy66mOoi6AIpC8RFVMzqeLp1Y30Wlver2FCPCGzA7t05%2Brl7EL8KLg52E%2FOeBTCpGa8HbJiYKQiW38jM62CIDA36dqXWCVuR2WY6r1Tx5UH%2F6%2B%2B%2BFhcq8L1V6OH%2FTlD8av7xepXvYILz%2BazXQHHsOt6EyfAeP7VGCvLlj%2B%2B1OdUZKLQv1DwWSvAa9KipjZNheVWrrZud0KYqcYPRcP%2BK%2BM0GLjDAqM4sqWOBbfyZIM85V8%2Fn0%2BbWM18TeP%2FCt9359Ar89WulOfq%2BKW1n65orJKiDbJTpsCvRkSpUVpEUWNCNQ4JXIDJCgzBsWpzfZlmI4ZMSdDYX7c%2Bul9ZDBK%2BjaZ%2FdmrMnnRZgrNwOZPaR0LktPnzIxMNUp4ztjT2wRWIo3GtOczBITKnx9oPwcrdJMNeugb4GOqUBIb51mvHXKuFWAlHvK6l%2F8APiiEBnFrt2mhFUbHWdfkJgNQMhC4Ni4eg04PnhvSFm%2ByI9%2F0rKUdwhddPlEICbNq%2BBvU53bvcBZ71MYW1UdfnBrnYNf8TzDcnJvdGhtvdrLE8uzqhab%2BVDH9qzQGZXh%2FKYL%2B9ksA1JeB%2FcBaY4OEqb9O4wlL0r8G6%2Bvz%2Fj6arQMM4Un7Ex1ruQMOm7L0c2dkZo7goV&X-Amz-Signature=34e33b1ea6cf0250cecdf3af9b5b7f2e56e1c1997e5848b46cdbc115f9737f36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
