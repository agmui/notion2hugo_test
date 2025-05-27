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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMQRMG6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzV1%2Br58BbU9%2FQ49q8HHWP44jmEzVru8E9vin3F1jpvAIhAMq2zkRpIWOMlywDI2vHKcdXK5jJwMyDfP8Y%2FioRIxONKv8DCGQQABoMNjM3NDIzMTgzODA1IgwxGxoR5EmoEBlQ8%2FMq3AM0%2FFmPgePZuf%2FdVkEjkV2YX%2B1WizmrcFpJmy5XZM2ZWA8Tbrc%2FNC7eL2gwftkRWSV0%2B6S4hw0TNDyrYfm8h4YiM6Yi6RnENA0KaPOj8iqpKN8pr8jLhpehCj%2FckkQ6WOI%2BxPA%2FywYPQGfk9GwnwdkcU8W58a80joXEEwhWbcgnz8ZZLRU2IWQQUfx2OS7xIrcVr%2BK%2FLCmqqkS84E8yunPQjLbhCHY8NmZHgyQNWMwCo1BmGedq41G62Q7ATUMLUPBgP8raS5l662EwK6IHK6oNk2pgc4c5QGzuJNr3NCnGS%2F6G6CixyopFBAxwpjcUfGJwryHFWXyFRzMWUpGTLhywpKzxg0sVXYoU%2B%2FntHGuYvkacN8Tz3cPX5CxFcnglGwGcc7%2BKSgdam7O4bXfR8OIhe07wXi2XcbX%2FPXID%2BLsSlIOZcfI0b%2ByPi8KUpkqBa9gmhfC4uwiLZOeZSzzakczxlq0o%2Fkm4g%2Br%2B3SYHOuvOUoCgsZZFWl%2BmsMGjMexP1KTaZ%2Ff7CZBxY%2B2IgxV%2BuoOr5NyH9p9Cjj3xffrlZ6klXs2OZTFvgrQtJ9LcaG9m6R81Xzo%2BTFP6g6ANYUHFiH9ldPkMW9nP%2BF9xDKaYXj8O%2B412QZWQTgCxsYhq%2BTCiltjBBjqkAV39bSrKs3gSGwtTq2frqttI7SbVB8qGW05DC%2BWS3a34Fo7zkGrlhbaCtLo3nwA38YgJ%2FsnMbFiYiOxEOqAlq5IalfMJEo3yyFlFSx5mVpKv5Z7FNipyQCepmA4feqYyXlDJkA3AqDyNYp6Xcu0hdLBMr8z61aocvu6l%2FBfKqYu4qQxeMQJgwxQMq4jYWVlcRaipmPYJTGIaekapGoq0%2FeJOKRWv&X-Amz-Signature=8b2658e547f07fa0253f7320972211339b70e2866e27e1266915e925dc3751da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
