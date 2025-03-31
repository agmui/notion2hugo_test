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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XONOFS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBG2h0fOX1M%2F%2B2H0XrzLUwP2aIdenYgA9PrzTHGBdLqRAiEAlw0ga3DNCXIEMD2pOzcB4Bhki7gkO%2B%2F5MEMYOqO1suwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRq3QpltQQxdo%2Fg5ircAzfbapkzWNMUuMHI3AGDLPXhpwzknPb9oX9ZHJqI9EuJ6FxUwLAk5xjFiMIRcMem%2Fr7jjUn5LgfmYmosERWP9J7TrWKmHPt0QnI7jVJIrhrmIccFoTvyUKWumXwp8VrDJDnSF3O%2FPGMpCxVhuaGSb0YPT2BkMUmiH6tSIJDwnJGg4U4LB7ejItA1EB8QEPGdpEtKkknoBChkPsEi3HdC2r%2BlrkIVvJkWsRy4xNGjZQZBerWuTuNufbcfSkIGGxnfUuCEZXApBDBzCxg5n6blWEryXWyL3AYj3mBhpTIZNjRShKsV4jIkXUE7YV559G6v5tnp9oscHSDcG4iFT%2BALDy%2Bjq%2FrKuqgnVLxn2VOCXCTkOooTioV6GIydq2FbYGUoZq1RC8rfUuQ7kW1CVR23OjF8Yz8OuQ5O9kTaGbxNzYHDV1Cdm866U0sXsdZ4T5fPvh241agT%2BXhaeURDLwxsCaagYJA%2F0giHUM%2B%2FuMDPJIdn6WcUkLULtZwpqegHdPcXZxGNRpWNdu%2Bh6a7LGTDS30gxDRqLNsEVu7kbFIRjumpaCiO8PihU3nHlC8TnH%2FOQo2HsieAJJBIcVVhL1o5hzJ%2BPvEwVVD6%2Fa7wDWPwgUc2YuhyYQYsHcM%2FG%2BgyvML%2FMqr8GOqUBuxPBBMW36HBHQ18TvOECd42TWTYCimbrpjE%2BTDp%2BZ6uFV2rqOBRqhfXokYoeOTtR%2BksrsGWxeDzR0ZJ%2FyihOv4ps%2B4rht1eBMeaxXBe7A3SiDmRPTjFuB9qFGUxokwmXoRZyuGcJ8bJBQTNEWcMhugGnfxIOjQ%2FxW95Wqaok9B6cV%2FVC5I9EjPEC4bZ1QiAxdWN0Dxxcb4M67K0wOL2u4RKZS6wf&X-Amz-Signature=96b979b201e03955d39f96ff07270313f99aab978b600ec98d91dbd5aec0369a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
