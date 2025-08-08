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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XPPLNQ5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGbIp2GGbQAH%2FpNmqj5Er52pJXWvPUsJ5WI50KwIWzS0AiBYawKawAAueLd9OLaEUBVcLYdwvPfjDBQKxhdSI6p6ViqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZvsHGKsthzm5e%2FgnKtwDvqjCPii%2BcSh7JwYucnZk2c3WARRPl9gt06mtq%2FlfMMhRok1CWz9NmrhLJe6gEm9F%2FsjCx7a6zyR17DplCm%2FaVx9sbEL9XNNN7q5QVkIgoYUMuzyZ4pmVSQL3FNxypkx%2Famen6Tu53vRrYDyQUYSsSHulrYv9VODWvsmJTJBUGSh2uaJOP4X6CsK3Mswi7HRgS0W0JXNVSe6BFmt%2FwMGK6xYQhNjkQkEsZoBMejPMI0iOIy3%2BE6dPnIepikp9mZy4S5193FGZAAD8O%2BURAg%2B%2B4w5hrrcUyIZfVkL74Lht8w5l1Y1QrovnSDlEae7tvOPEgk5z8UXmTAx9eixiWEnqq3xjw%2BkKn06%2B292TJCjEPSz%2BA%2B8FDA%2FHmGnR2ggdUBuHeGINYo8Ucv2tY9qMz5dQMBFG4j55Cz%2FWMD0yQwTTLXKmdTORsqcof1ukYB%2BQwDqn18jbDhD6x4noTVOhaBCzaHuBuZkU3qgSsxpqWNWnzOH2pis93YDsb7FyPBZT1kL%2FK%2FEagJ%2FiaCsBZac6RJ1bpFqFszA0coOhX0ZL9TSYF%2B7cpY0O%2FlOHAlJIH%2Ff7oMI%2FU1GZjV3OCzLtZnoEfCc0HJMdIkb%2BLyCkm2a5QjMiCDxTUHjuLfp%2Fbkd9k5MwqZPXxAY6pgE53cepfe9czR4ADUYZI9eS28rcS3pI8oX6jNkY1ifDpqAgr%2FsVSMmMyTpUrLyQNtbhl6OxOQBrNx4E3JxbRwG%2FBur7da0usKVTtRqkwTFjK97GUxb3byEOPr8yQ162doEz%2FetvnTwuhrBIcXcniPMvI3SOjTttw2CkUIq0npkeEoeIWxfKrc1LaslvqWa0mYjalXydmoxIHGbZpgbdZjDV4WorcPgh&X-Amz-Signature=2c271747a7be34822d9e53c01710c98eebdaa8ec72266d924f4a03f8227563c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
