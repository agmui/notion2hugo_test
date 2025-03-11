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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMWWHIXR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDhMNvIkm01D19meKOpWNu%2FQHeP%2FP553SHHdulZ0KjVuAiBJRBVYlwLKx4bBUkh0PrqhFqDeURBSwZzJeB0w%2BGv68yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKNI0GgzmrNtEpGUxKtwDMNgYG9P%2BLY44bXtCpOP3qiJLXgTyZk3FoO0eQzCgipoN2V4YvR%2Bxg9Y0kYQAolYP3Cqx42HimFNOCcrwnYs6RiOpKGBwPbZv3%2FS%2FPG%2FVi26h9v7qKujvkts21%2BN2Yspfq2k0AI%2Bq6aHrviHsQkbTO8S4kL0z4Zzei1JRxutltS58QMOpOtSz60nSMgjQSSY%2FUICb0Jyh3d6wxY1N9SGYuy%2BlMvyRS%2Fr82dWll0078TTyg0cOJqdcLPe9iS5cGXoGf2fFf4ncg6vmHjeD%2FnXFhiBW%2Butz2qB%2F8mZmfFlufs6Wo1yjKFY5iJ4MAMp73Zwxx%2BanVLuSmIC5u3wP2bhvVlF8mYIZoK5M2Pcb6MUTRCpmg%2BAvQNah1HA8gnAx60ew8uXBs017zb6FII3cDUfw%2F34WpLiPzOQf458FusBZoM2Vs10ipaWLRZEJ1EpUVHQUJXKzOBjBgWPq8RSx11ax2bsv0zaw1OuR4jY2S09I1HcrFWQStMgAjmWk8ahnOw59bjKTqoA7eGp6EkhmvZx2qK8mPmccerFmXoZ1h5%2BNiy56Tdbj%2F5JGKtz7gbaa1Rx84g3VieEP6mREkZNlpFqJkHNO1Czs4sd4UZuatTHHh7MVW6iX9z61zKd98yAwxvC%2BvgY6pgFMT8DKJ1nasWZvHT6JnMNgZMktjlbB%2F20k2ZEvrL%2FPwUJSW8Yym0hXucabTBR%2BG1NwwU2i%2FuEvRzHboM0DZ3XD%2FtLEjFrrPCqqw8%2Fg9aDQYSa1g2FnTr46EZ2FDl8Dh7%2Fxf8EghitZlqIe96BeoL3TKGqXcRaqzhPTOCu3ASiaqFcXbXpN5tzvv7brLs%2BtNwZ7Ep16cb7Xwpvwtsh%2B6G5diHUc3%2FRP&X-Amz-Signature=5433db77555ef371bb7c825729a11bd92c0364c0503da74bfccadb3b2e764bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
