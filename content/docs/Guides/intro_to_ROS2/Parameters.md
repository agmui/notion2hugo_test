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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAS7RC5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhtpbYWnvyOhf1dP0ycQz7wt7%2FFuICDE06QZZnbKao0AiEAt%2BPwj6ph0lMJK%2BeMSo%2B0W4UvW%2BmKS5V%2BBNiTcgWFE10qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtNe2dZckG81twlVircA%2BL%2BIK%2BqEG%2BzcJohCpe3QzZg5SJGsdiplZSQZ0VodJJFy4sOcpdyptA%2BV6u9zzvRdLlh6IiaU%2F9n%2BV5Xz3J1HWkStBm3Cr8g8KtEsMrqdnF78OWJtKHGJPkEFMup%2Btarsor6hekvZX2x187r0ZCZ6sSSCI6wcboh5FHwr5thx6fgkABsleezogksee6UsIxgT8l2fGqU%2FUBQZJArW%2FYTzUpd0b1SyLGeqjvUP%2FhWaqRmsFiWikmXuDF6pERw7v9Nuqm5pqMzZ2N1asjsKH0%2F%2FaQQBkyZaJLKcQKrIKhK4U1MCfjnBreRtCVyo4rPFH9%2FopYNQL08CoFcXaSCvSoIvatfumQhq43oJPWNhubZYkYy9%2BbAi78BnmfMIWxBs6U9Yyo2a19jV99TMhRs%2ByAjl5k5pdaEQDqd9dYo6vSdqiuw%2Bg%2Bvf%2F%2B9EnYhT6yOupeI02fH06zvyWbd3mEK2r53w6eQ9ulcXe7qaypKc3iaJRkQFGfgxPOVyJbFGXaEH%2BmgsG9yq6FvnZbHUqE3vwd3EEwP12MXJrgpSMv3BZEZsh9K2mrCU0tD9G7UZdsOlgxsYJgUazoWbfdfgdQtxUPogvdaFC2eRArqLH1%2BviVxMBvlwpRLRYDMEH%2BgcofSMJev38EGOqUB7W7Phn9epAdwCAF3sGCc7LTt85jj%2B5Jl9ELRdku0xAYqR6UX%2FFHpbser0OB7yjU5uS8xZfKSAHJmT1sxsJrKX6wewGvLeNY5ky9rI6hxOg347dRzby03o7LIYkkfv%2FWy8NkYB1GBgb%2FLzQpIVRccNl1EMwDNwfHodPNrai7l2A2SlObXrFoAy%2Bunqq2DSXdRw4JyAMUcOUNE1DFpUcqxp73V2o8C&X-Amz-Signature=28f8f90d045f1430bdc1cc408fce346bd8a01023aa5c6a3185789de0dcb6f25e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
