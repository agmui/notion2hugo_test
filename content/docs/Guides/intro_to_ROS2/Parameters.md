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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFO43LAY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEN4ppM0jl5d4%2Bpw25S5uT3qqC6Dg9ziEBZ2pWQSfUc2AiBKMyCTr9SHTvs8vTgPcf5PvoN4YCzIuGBw734USrVj1ir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMMnztVb056IA63%2FAhKtwDiKlirbkhJtLZVSgbAYoQU2Uw16tUnCAxFhzQo0%2FgzH1NDTIsMSCGTSnPj7Gv79DfrGOv7GTaWQPuJna15mWPPXfU0FrZV05n8bBVIHtXtHnIr0ejG7ukIbbPiD%2FZq2Egfwtl%2Bc%2FCtvFDL4A6ePdF8SaplWytpT%2FKBOx4v1k1d2MQtckN9b9o9Mmllebyp9UMoqX2czLLTloYvHryXfVNM32tX8bfl54FzURaVY5i5OUsF0JL3LaF4Lapjn0C1FYGeqyD0FdQK9hdEm%2Fqp1WZ2TSl6uBLBs2TSGGcoQnURG0HW0XWY0R0%2BStWguW64kl%2BTk1Cv41uNk3bEhmfZ1A7x09bH7V7qUDiCPz8mJkkQq0%2BKWCJZQcVji47ynAgsMuPKDzhi%2FQ6BlmdkL%2FwDjq5gHG3LPleJDypwjAJGuuJjthWGlbAQZKKbD0CwBztddP4bEjXhJK2iXKggpNQRsbgrOj2UYiP6ZGeVSwQ9atVG5f0ntM1bxNx6OpmQWrAxaltMQziTzDNhUUwtdq1Bz9X4RXo88P%2FqQ7EGc3eZrgFIBNfivxNYvijK9GfDEKnc7e2Qd466AMJho7hFHf%2B4hKA6uUHm5ZKqeq9EYdNq5%2BLK3OZcL4kY6w6JX2fjxAwiYKhwwY6pgEpNshzM05iWNj3MyvXvh5s9rhh4UFUDDMAq8%2BJ%2FHyN98sL8UOgIXYe9Qhh8flhtO%2FLfzfApi9eYwAUQ7JaklqY8ulqjc22kX83CNShh4OV10ADoib%2ForA%2FprjOh8g5itc8SvVyYr9r%2BCRrVP1RLkEZEDOxFeTwQKd%2BTFbBAfoQvAkWmWRARcFhPQP0PbkCnOglbnjY4mqRT%2BRwtSGNzBfpo7jIg7vt&X-Amz-Signature=15c02000e9f4cc13d200b4905bc3384689b5c60ae5f4f95bb5f1129fd5044891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
