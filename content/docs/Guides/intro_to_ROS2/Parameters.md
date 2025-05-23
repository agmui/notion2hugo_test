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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ6JAUEA%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCz3zLKd27cYLqUYqLnwlqZBgi7%2BTZkpGY6xOU2yaBSTAIgfzFLBXrH%2BDFx0FTMySiVmGvvvic2G%2BtqiMBdG29kASwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2d6YtaYCyqjM1PRyrcA9JGEwO7MoPiCSwC7INSsJcgrLUTGtxvKjLLjcMebcF7Z2SFDFvE0trMY%2Bn15axTkDfNh237aEhfjOZhKCrypKzNPcxFcqFXcDna%2BORkFOYj53Nbf62BneSaye0gvI%2F1BaodxITqT%2BCFwihbBhXC503RfNNHXkgCjJ2bMgIyGPkjhWXpNVpKj6qJC0X0m%2FM0ev0RzBOWiDEQbaHpQ2r8t6tgEmWZ285%2B7xwzGD2nDKZmZ3RhpUbedX0Qkuv3MEgKq1beP9RH1JbPCkdrKZv54pGZAc0h1QFJV4QTo1V0O6gMULq2NKZ0b1Gb8lhUBiCIgL9jtuK%2FbgKuuZfwwkpM53kJpUJiAOKcRWStzga5%2FhAe4A4XwiAZ66J84d4fYXgkGWNe8rco48m9GDe1C18sDVc%2B5sZde64nltYrzqtuqsFYwOWUM%2BOpZ5qfOtOPO6RWHNqSsdSusEOFWIIqeWPWHRnw43sAkxQUMcAzf8QaL6Q0C3yf4MKn0Yjn22zCampuRXhfaaW3F3ywsNOZkOvI52DuXBWFMgVY6SfH%2BEbQuYgZr%2BQ02HI8VqjasVUb4pVgA4NzYyrf2W0Dq8A85vQOHLpZi6U%2BaP8tdpKBA0A32ZU2kFoCDP8yKv7OJodFMIv%2BwsEGOqUBmRVv0xAeqoIhfes%2BFNgqwiiukaysDMkiB8IbsdCDcDoPGW2xCu4ZQtkVM5FKd2C4eaHdk5P16tfCdtlzRmNQ67eqUE%2FBCydWsPRaiIL9hY4FjdMCeFRYCi8SlIsXj%2BXMR1%2BiQy3gM8Z%2FL6JLiN%2FdDDegF2hVHMV9yb8gVmUSbR9yRgJuTCcvsJ2Wp%2BU9Taheig56lVswNgJKPlTrNR0tWhxLsYVm&X-Amz-Signature=3bfd1382a720de028bfa1479d9f97b01174423212e9f77f693d86534c73f32ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
