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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3Q6T4F%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIE1IuC8VYJIZppS7UxPnQDUlA4kyB7JUGyuiKjHVUk9YAiBSWNDyH6k2pxEG5uAshWK0f8CukdDg%2BeQt80fgPo0L9CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEqNVJsZlWw0lLclkKtwDN4fm8RYPklJ8DTwLfH0ETzoK2z6lO4SJMsEtd5QI4ASz5EzdmQL4I840baweBg7Abekyq4b9hoy3tOLSs6bxgXxQOZtiXaMAYaJPRpv4EBDbzYUxYgNYJ%2BEC5LX43yPq0INzVlQudkW5325SrUDOn4arQ1AFbBm6gIZES6OuvDqaobAd3VS%2BGKreS8f4Rgp9DwQAhL5%2FGPXCEmBT3Eq%2FrpcQ6N1F2mQdMhrC2D7PEeHjc5yOYH2egv8%2FN878sjeE34zG%2FC9lp18rRWJXDhLENAtrwygG6ReccbfY%2Bkpq364q9NLh3EmAblNYh%2FQkHLBCfA2bmnje1iMzxWl35SOWpbnCDAtD0%2FcQ34vdds72hoYplwoFLUDbC3CISXMEHehsTNmuBtnbI%2FlFDXAnxKKZ9scPguJ5SclLtF60VwwTTOk3C11UPrGjg0jo8jCK7BsrYdy6McvOefrvOT0d2vHawsTTNmcRRd4fFtLX3uSrcIMbxEhC7KsCvZLg%2BVCg6zZKupRQTdAxpzak6Y2%2FPFQtX97u59HmUFDsA1Nk%2Bt5ypRllbiPVa%2B0%2FHulFpBWfQn44okkcGOgCyfThEJ3CKfNuKD1bE1SjWEOGnrsmXuxYyEwnWjsv5IzHdr0%2FKyUwmZXrvwY6pgEb1I8uOCDXXDmVbm8G0204e04XYSQVlwGFWH%2FNqq52hnT0NOKJqUPz9YdlmG6TTcAEzkvfwULBiGKRoisB7%2BfZKm2MYohnEMJoSc%2B5%2FUDXSum3BA5s%2FkzKzJy3NL%2BcXBWYI3BboNhhwXox%2B3S0RDkgrdlO8LZTCfYJOr3BfLGGs5%2BNfph%2FjjEi8lVIqrR57iNplaPL41JbQ2rgqBz%2F9mDwiD%2BZN8HT&X-Amz-Signature=320a1fcc9c023f6b9711550fd408cad35de63c47c6cd247d800c966028436b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
