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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA6MIYVR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16hjvujqtl43evWZhwfkGGnpyFr%2FutKDEymMWlON6AiEAtp9cNS4AIpKyYPNuSXo%2B3sduVvoTQbKWY5HqqXkpa4Aq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIJqMhrgH3K3GPUA6SrcA4SsKYnSUZ%2FRXPTvOgZCqSdwGx4tG8B6DNw4plIy%2BwU0w2dZgXJ5OwRL06%2BHJJugi3Zgfpns4lOrgwQa8u4Au%2FjnYVwhKJsDySCHYsOO%2Fmkv8TKe%2Bh04sgkWePqSvTMGJ1q1uKixbSdPiaDGSfMt8auPDKgF5mSSNujEjUyl0OwQYz2QR2D5djJq01PABqQsJ%2FR2JuRsH7W4WlrA9cXVVjnNLHmR%2Ftnygi7J5tKEW9LhJfWsfV4xUQnecTlTT%2FLFUfzpc6dF4Y35M41bgK%2B%2Fgbuch5xVOgT6d41lGfAhqGTwWFSQ3uDCyo4csKOLwqYhsscR4tgmHPja4VqHU8IooKCWAUE%2Fo5FAXTtZ9c7yeBo8SCUV49sun6xv13j0Lm6TVhLsB9jbs7ooNtM2Hsfz4zUlh2hWYenM%2FG4HEImiJy6ClpzVZEt2nV3tEbYIm4xKtXwcZNElrAgwpupFqTDxNHrARIJeqBeXVsZqPr0WCbmnv85vaRsSHnamFNK0bHLPNAC8AWbbP6PRzMzNvJHu0axNVtNDNwFzKQF2Y5DPJZSVgl9F6Ac8755OpiZukwUQzBA5y7Q%2BR8XOyHnX61mIg%2BuLtEPwDekKRjvwsVK32qc53KA9SNW06MQD4o9yMOnV870GOqUBaXKw9pXVowZYCWn1VPgDQR2Y8nMNgzywZZfcRr%2Flfu5dXKeOFEx%2FjvHktQgYAKScI5fk4m5VRvBbHBmlsmY8MnuTtpmbEFr3gpb%2FELbwJrE0%2BgT99%2BfRkHVWweIAgIBim6WAaMqGecJ6klD%2BkgdqCXUWYQPGwD7AxQ8%2B2ATOkgVMyX6OhHSY092UcMqXW7cweSNHkQrLP6iZ9%2FYsXOeqN8DYofxT&X-Amz-Signature=2e7534b9200260f5f1e2c90ede12c125611e7f86b8e43ac62875dd4553b59c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
