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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UEOD5IW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIAyhTrnvXoayg0z09yPaz0%2FVSsSBLDeo0eVXYgQBSwABAiEAymyoyZDn4nD%2F2YOWqM6wXj41AdOlgC5rA0PMVpERaV8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDF5VBLbF%2FtKNxvg3yyrcA6pOTUgR%2BZVdavVyuLhfEPiGVNmOYWUfU9zdm6tuqpa0aeTtJg5PT8ETZzLMrgxH9oEFZ7WCFga21l7%2FUZ2xz1N4%2FxSirqbCPEUBiJn19VTftWGEjGTn%2Fl9ZkQ9apSt2KJyKC2zzwiZV3rPddmc5nILrfJpNupi7QdeNfRE1SoYhILqewsYSu6zopvzfoXaw3vjjlxNemVLcB8UIyhbIeTfVsyGRnSf6T1lRByOVhJJKuuDEBvy9KJw%2BSz10X0p8f3GpNHFfsQQONItJwL9BwCrjdpM1i86OdhaPPFTXjLupfi7MpRiNiW3O0NMyqaeF85h%2BJNJR2Gx4jVgug9pUqI3H2fUFfb2rj0TGxLJ5GIrJfX2u7akOwrgRwDzf9%2BsuuVH2PlOjsSvRddhGR0nFBM5sHvjs07u20iODfKKnhAPFR8UAr9p35zcxjQvAZbKEdMCXUe8WMKtB0Xo%2Fk8AK7EMvH8Q24WnU4hKwWLVDQ2fr417PS5xcmx0K9mC4Jm%2FMgBKb680QjRyTS95xEALHV3kUwYmjPN6m3yW0viJzefUOk7po46ef6fQ%2FM9g3EwTNEuD%2BOs8QaFa0C8%2Bu1vZsEA9FHCk0SLCrfv3uOzO%2BG4rTMMZ9ho9Uf8EAwd7aMNaJi8QGOqUBsznUIdzB2LY6QHDCUb35FXglPw0XsVfm4q%2FgbkpsBUr0MtycAifiCh%2BRc9gGr0QThqVXAvNIGOKUqvIq7PP31TlLP%2BDGw5SfxjT2koBkmkaKls%2FutIkG5AdvL2cJTtL3OyRcfm3mGbGfRv%2Bhfr2k%2BxMpIxaYJvf2p%2FqcwSgBxeY2a%2B1SF3OBQyGny0TU4OcSLVk8Fvn7vwOfPnmL7qCJWhDU2Umj&X-Amz-Signature=1fe79cf7956e24e693b1f7392e3492ea3479cf11fb81f156bc549ee73b2e8bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
