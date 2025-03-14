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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QLQDXC%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkRUjctaaQKP2onGhKt0vrogSlMUSpI%2BdrNBtvwtukaAIhAJa5g%2FiUmaQGhG7t2zABCBZa4t3nyrEc46JP6k8SxsHeKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxus%2FKH9tdQpW1gRYUq3AMKn4RJdCbyNluq%2BHmrE2glpXDJ%2BRbXRjaLvlM5mDN7eXpsnyazSf7nfvcZ4GmADRqU%2FDgY4V5XaY4iuzvZtPzpfSTR7Hi074mBO0Z7VyS%2B4obTBl%2FtpKCdcRB7b%2BUuT%2BSB68fScVo5WygZj%2FL1eglhL9k96PnhtLwO112oR4HFO5bYBayJxK5lPDariTNosQ86x%2B53JPFiO3mqeuXWXzBdh45tUVrI%2B8j7EERSnUfiixVVcRJgnz42eQ4i7I2Pnse4A7liE4cRc%2Bn47lI9Kj5tYGSpFAR1jYGR0QKR7TpOxgETMgfKLIWpZLnxhAj35RmBg%2F%2BYI0ZsMSGEn%2BZ1mMtv%2BHBO3El%2B0K%2FkdyVYtiX3azuyS1J9h9yrKdlNjMHirmWrQ36Afv5QGNtuiBFt8%2Beqapxl1d7GSWkTh7f7tRumrUGn1YEzY0YWz2luh%2BLtwZwvZWuXSEZeccNIvoVdjDiEYA2TnBQwt%2FIZolgvRWFukTRkIOWYHgNHs2fTaNdR%2BcXAGP7xIDLvR6Pabc%2B%2Fe43QBjVz1UDfPHwLZt4az5TPrUfUMzAfQaeXCy22svj8%2B7wIDCvFFmBwftPprwyYjEiCj22HdFPGiyihAzdWr8Za6zvxVzJRjcQ1gBhh1DCAxs%2B%2BBjqkAXnFjZQyNm4CP6wXCAn01XPIs2QHMEutvPJIjVy%2BoxizxuEBcjrIPhbpdvgC82gxtRsjfKE%2FVQNj0S12Q6%2FL0MX9AScdG8Crs9is%2Bvz4%2BnDNZEEI1bxJ%2Fz76Nl2sTEdOwLjwzsWMnK%2B6ajtx%2BvlpBKPan13NdYl4Q4gvkq%2Bt6otmek7SnsSPqOvRs5XGerqRSXm%2BTUrsxShnFJOAGsfi5RRasovF&X-Amz-Signature=a1ac8caeb1b3265b31673dc2b2bcc4b73d423041f3ad69a6157f20f1630411a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
