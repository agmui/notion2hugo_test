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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673K4KITX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCABYGafYvStzWabh%2BnFH%2FCkMyXrSduaJFg72qL9Llv1gIhAMtvcby7xDMqmeJQVm9FxDuk4jRIm%2BLIQEp%2BdX20HmNdKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg6%2BCi88uOzUO3XRsq3AMccOFfL%2BEhlTu9%2FWsspzOkJjOKj0jzARNK8tSS0fQWlfLlw2aI3j71NpgRZrRaWqVoogAIoAsZnABPUxia7OF5xaUM6BSbsH1MTdQJb731TXbTIOWFJS9OZPZvd9dEZ8eaUcJqaBzfBEeJ5F4G26te1mkW9ktDaXAKXXMpyRFPOrct9xmpl9nCy%2Fba6S39GLR5fYT%2F1a1cdYKjl55pWqmehpaIyNtU3V%2Bgvom2kQ7Rw0sksPSb66uUTYtgYsXhJDKHbdM7N4Wi8dFAgHZv0mnMtB8wMdlP9Y12CJdIrrQT4lTq5No7adLLqEBnSk0gr3xeE3dh%2FroA9JKeH2b3DFimgh5rLzBW91BYqw7qHvE7aUzXR%2FF%2BSfP%2BMwmOG2QR9kXa583%2BIzGQzEznfj%2B%2Foxkl6y6D1Bkorfr15pOCt95Oj6QorwZTip2p8onQXwx1nfD4Q0frnfwZl776KOiHhDSsSvkqz5SEPAZ%2BnnuTmn4ARG9lYhFTxX%2B7YXp9rCZucHeYRk8Atj7kfSAn5bFl8pQlFnjNC0ylVA0lygMidnAYl7FUr86SFXU8GtiHHY2BSyiUi1L40e9kMSF0zfS85CjQ%2B2myvaFOZN5CyE9ueq8BgYAMIp02szIt8wwqhTD1ktnEBjqkAWN%2FwNdNJEXBaoy%2FFcr3iwSbyOfoILbF2CpoQdoB%2FwSeFURYCoQEszPH%2BZJuIquFkiH8UTAQELcxJNqkSWBk8n%2FN6sM0Ia%2FuE7Kce%2FRZf3EugRCeHBSGQn7yaqE6rxSquUnOXd7VrgH8OEOYMKtlttKlZumOIaiRmNEAX%2FaJcAdLPZbu%2B5ewBqtf0S5mZmI2O5DRBzt%2Bj9WoZ2N2kwE%2B0Dh7pba5&X-Amz-Signature=6b5444d62aa466721924711245201c45ce710c9b3823055d29b85e5284a72ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
