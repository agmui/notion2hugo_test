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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4O5LOG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIB%2FCtLk8JCQmv7QiYLGAJXnViQenNSTf5sjidlfik%2FEbAiBEa9StDKLfhgYIltAxG%2Fgp26pwkwn8jg09xb5e6WreRyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM6oicZeR5FK68TLVZKtwDPwd3mPXIjRT%2BWNa%2FQaunlCUCrFc9ujiTRYzUreFpXgwkXKrOhgksuFxvpIdqKOWWgzh%2BjYWs3oENjCJvh3QSblQiPJeKkDjZNE%2F6a9jq4Cbxdmk%2FOpV78a%2BTSwwGOW2%2FGoVsQ%2BR8OpRdx%2F40Yh7fKKwzKXPurGxi5Fzxg0E%2BCeAsYKdOoXk0DpKwNQvFzpSk0piq9cSP3b%2BtuWpaIQxn6QvM%2Fl%2FA5Uqo4hFl8ZQa%2BCpzgU56KJFuenO5aM0zPEllHbR3N4f9RNK1Y41vhKzi%2BtmbvmZ3MiSNzDsbLExuBJsILryBfCP%2BoyLQYyFjp3TGNlP8jw0oT5g%2FgZrsQSkFWPPIjYIX9xakqn68KP8NgyzYK8Iw9DqjXIG8hlotzUoHcOdXU7JJqlmc6vdTfqFCDGGTRFeT4N91mX6s38bw34vN%2FOzzRGqB1t%2Fb5CXTvQ7o9%2B2lslvxWQdbU%2FFYZ%2FOWM3uiqDC5U%2Bl5TUMxujdgyrPW5ms%2B%2FaR491gPCOE3YOVVR7RH%2F4eWiC%2BGBWcRTZblyEYAc2sNqSMtTAZqH6BUe64hAIgJqTwR0jqMhDKvIewlAy%2B%2BGkHtNrXsIfWLE1c5ofc1bQLeZWomeYAzDbqYVKXxU%2F0hqrwHT8JOeGAwrrS%2FvQY6pgHAE19wShvHDORrUJOmh6pfFVyfyCdFLQZ8gkSguLgxFU%2BahRz2BkP2wiKvzhBPNNnUQdjDZGWKp9m21wFlb4JUETy1tG3iV%2F%2B4llUrA%2BY%2BxX5UCfhH%2FBkg9EjvG9aAXEPZReIlVY4vPjajCTw%2BPU6NfRgQciYDcQTMqVobB6D3AeMlZW5ufWZfEmZXMhjdutRHycVf3n9hehh8Jqjog%2BJFfDoyztxg&X-Amz-Signature=139d1acb2607ca07ed385dc337ea706986dea8c09c04cd77d1e246e961ec2032&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
