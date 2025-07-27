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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMUWYOD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCZQXdXG2VZ%2B2zf2zLQaQQlp5%2BLZ%2F4lV3fEsHG6FkCmTAIhAM0GSiDEz5GDf9nOC84ESGRh5dWjXn7vKowqOELEE3frKv8DCGwQABoMNjM3NDIzMTgzODA1IgwOgH87B%2BEq3jxav6kq3APEgfin7Ef9XztzKREQLFH0%2FlU9fAVzcr8QqdKroRshwXSag4gFr52rS2BA6d%2FghCuvDn%2FggNYNEWTbZnSgR2s%2BxFjZiWmPbSUW4Gk23lbxWpD1xC1mSRj9pNWRxx094VruFb%2BCec0bHPckx79DOxFAq44AeqI5fdmHTvLZ2OHKCGIQZisj64a%2BinaHoWiSTUbFdGVmO7cEvUZVK1lVKSxHoYjmdlu9jZf52tL9WMwnjqRSFQJlYaukisXWxbkdeqPjvFEvRdjRUDiAL3%2F3LurJ21psr6%2BfTmLkKg16OC5ifhkpoJASKgZnNE8XRQjm8xPrdRtiMc5MSBjjKkdLpRdLCxA9Klz4LXn%2FvMN5SxddVlBz5nkWx9dTlfFrr8ZP9gHpED%2F%2Bwmqk22eeolzOZ%2B0CxbpAj%2FHMqAgrnZ0p%2BvmbPSG3tLCPWWgBOxrG9f5bMeZSsCR%2Bcta92oFwYNEolqW8833wAgs7ZYSJxSrk9ITSbW6sUMYsPe0aIg0u7ZjXjoAiYYo3qFWuAS%2FLDhhGrtlniBiVgDpGTNvJDLcGKptGg5hgHQpHlkRZPxYImmYqKPKwj4X9BywjXEbpgZ1zLfrHWmSCa69tK3qWgrmuFiIZhUtk1USzUNS9lZYfqjDuupbEBjqkAYG9lS9eRk16BcLDkbUU1UYfzcTnP%2FltzyrWlZVUfZZ%2Bgk0xaOG9bdY5iNYbotcEaSIe87kW2ezDZsCHZ3oAwA7xAJNRFOW9mSQdV7P5sbxmLSnJLFqxqMF7XAR3FaWFAUQgavSEiGg2FJ4PB%2F1%2FIMSwQfSujbsqcdNCYle%2F7J4zSJ7bGGnatkUe7bCt4mm3%2B%2Bct3X1PiXsTUHicFtLHnjv0eTQ7&X-Amz-Signature=bf37bd0ab1b944f509381caddfbcd7a53670148da736e7a6b9d4a2b384745f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
