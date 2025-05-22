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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JY6QVGV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCaaqP1qvI4JkNbXd7kq%2BDn2OiutXCPPRCGaylmed8KYwIhAPwLFjxZTE%2FFZQzWaoZvu%2Fm%2FxKzQ5wqc%2B9gd1LKAFB2KKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT3ncx1aBS7oTVJ4Eq3ANCztgnnabcgGvRNzq0LOSJFIbDhtmqvgDGw7xhAbyskYaT2%2FY93PuS7ZL%2FRv7TPiwSlQvVUvQgHEXCW190oCzAauvHpTfwYnCdLOqVgR7iHxIlxD6FD%2FHGo5qG1EeQYgLOcKtTvgTKuLWb3cNooUXkDW3nZLVXqlhAV1g%2BIoHF4Lv8DpQNJauMQ7n%2FpZc9bk0QDQBDW%2F0J%2Fju9PRREk6QBrYAwg7U7JARsj52Bonj3ERQtfziH%2Beo0mg9gBJjBygkcXVL%2BPXzSeyaL88nEGF9y1Jmrw51WjvTRYAN7vhvLRrDmlaFyrp9jyJR54FKsSkspd481A8rsYmG7t%2FreZZOOn%2FPeVwRRDMWKG4Il924bwNpvIoKdwa%2FX3730BlaKhqM2ebIq98RzY3A9m7ZsDo0rxYVd1ocKNlvxeaYkajRjnoZK%2BetLWhmsNU2rEgHNaTw7Bnyxm4G2zb7YtAqDsjmRpqdmtqG%2BfGgrcp6%2BFwJVPIvnErGsvanI1IGg39ersHjbp1stEVXgrTSov5sWbqa3g19mi8zBezcOJ3C9xd70nN6HrepjKx7bfn%2Frz4l0W7mC6%2FCRkPRtUHz%2B0PFmi7IFNM7dnyI2ytsggiu112tzURYr9BPBewDR8ZrHnTCOxLzBBjqkAckQUaXa357oSqK7JeB2gQNDL5BFuy43rLt0T16kGTlZwssjwWawGsiyFkPXXXuQnXYzVQGD8vHrV9FTHcfdS85tpqXSoW%2BOsc4FzjAXQNoeZzICbkkTjkmMMEL7nAlWwhzQxJgCC7itoUOvUZvw9XqdkCgH8pMKX7nkhRxazQKjtkYhpLCKCkABJU%2Fe8EWIq9dRbV00TuX9JhfCtR5D7sICacMt&X-Amz-Signature=e4ab7b9b4779ecd88d68792f22c9622b098178bdc10e677376e61fc665155b18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
