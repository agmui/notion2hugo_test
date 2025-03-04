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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWKHIS3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy21TnhLnDjWaG%2BMlp%2FAbwscbEbyp%2BY2gWdjehpc585AiAOOS%2BH2vQOkbHhpA%2Bh1PAK3avCnpdnuvNO12eN17ttAiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QF9%2BWs3aN57XArtKtwDSmBvUGHvxMEWQZIfo%2F7EG%2Bd4GSVQrLSTAWtE28WT1DE2SIWJAPNDqKFG%2BlW600A51zlyClJm%2FiJafatN36go1dRfRgDX2SCUCDxSUmov%2BAT10iXqnJwjQMrUhfCeGBdm6aHP1UAomIQeBLPPuQi%2B%2BjR0i79X5VYf8LcMj9p8yGz4vmyxfhYlDAwwRJJGlbwYyHQZ6fYoDmNBb2KGy8PtcNNYOwKiDTUxgLAJhluJLkvCMjtjzJjhCxsqnwoD5RLX%2F8NdHOU2I9iZ5x%2FwyY274rPKrNOV79xiePYF7s5u3jcKfAEoHaeVofl84Kcw60DRbHTiUE6GGeAT3YW5kzSO%2FPMjNRKO8%2FHEOYbh5A5nFtfUOBxfEhpna2KIHR3AkI2gFjg0Uxp8CStbZMtROuKs5w1hMxMP2%2Flv3QUzY6Anvk8AvNidLSsl1IrndiI%2FkJ4mvI%2FXwoTd%2BAqm4jFAmIdbZ7WY0fq18VJW4MCOjhKcrh4Rmo4OssfQ67meVNFgXr43GNKGvNPuiwTFAooSDpBjsEIuIGxsR7n4DV%2Bcdowu0YXBaho4I58eW3sON2sjpx3h0K6A%2Bp3%2FaXD6wNIRXmkRoZ8FGc0Nn2irLBRQbnewNfX%2FPhiF%2FlmH9P0dDm0w1p2avgY6pgFqqf8S67u6PyzWk5Jq%2FGHmL9e8xpH%2BD71Pz%2BtjcrNMXaYZJsD7iMXjn9BwK%2BDIxzMm0U2Kra%2F%2BsfiCkR4wXs0fb9nI58KLk2ikUmbLnLUYJ9kToQFhdbI1OLcPj9rx%2BmZLDiuX3Y7ZHcKM8AORBS%2B4sBoQK8mlh0NRvySlhfXxiSijSIWY1WlxlP9JYp9viAX%2Bg3Io5JHPlTsv57xw5g5Q7Y2H4UF6&X-Amz-Signature=884add5ba1b2415b8e4474a00e937de0e0f02b1c7b483d7e0757fd35f587c3e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
