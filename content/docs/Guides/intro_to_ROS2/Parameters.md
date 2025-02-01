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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZVGRNO%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX9wDOd%2FdOXeIJexRFxCB8ytFLJuZVimEW33qqlkDQbAiAR62XKWWdZKBEA6ku%2B2EwdTyxjP9F7Y8SAhmw44y1b7CqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4%2FCjFKk7T5C%2F6%2BzKtwDBtMzZXrSGAXptdSsmdiiIiRyb5BLAfWqBbsXeq%2FMxWyaTtvqPBSEJ1iRhT6BpP8%2FmCALyZJiHevzAU3gzKvN1Nb0KeixNwYsLg8%2FSt6%2FR1qW3NmdDe%2BE2IFAGiC169OpwLEcfBsLNHttCO74ocdaZTleFNwzJpFyd9Y1cOx6Jqv%2BPGetdBP7JtrKP517m7u8dfH0m57dUCxXJ0YrS5gUzJdVoGiPInLJprzbVuvzvrMmPIAeI%2BogIabRxhc55Y7fnFWzK38uWBXRq%2BjMQf1fNv0txQ9rUMk77NfzvKCDSmflfIpqENacOmBLRuHsIHbKiD%2FTPHTYxfJ7rntmXNeQ%2Blc5Ij2WbkTW%2FpZ1SleTqdSj6SUkqgCv7kEL%2F%2BLu2wmA2gWfz2RscO9dITIXHSGfy4OzaxLIFVMcAYegoUjGbREZXpO3aNcfDj6Eo%2FijdbRw9fFbpddTMoGUNE3%2BNhGJR%2B9Vm%2BcFEzD9Oj4aQOlLdJY2p69o6EZX2SdRvlHabzvJK29I6NIZ7kntXVMJa7r9R4OEC%2B3c9q78%2BZOhR9dPvQm7UDgdeqVughC9wiSuZnyB%2B6d7Y7WoBb8prj7c38NClhnXfoLLH50ervJOtd1mIhDn5PHjMKVKh26IB84wjrP6vAY6pgGxTp8TKbmdIlPAspdXj8ouh6a0Ja7OjhFfmKpwtDjyBsScwUg3GoJZPiTV7hRpOGqoNbA9wQ%2FimNb%2B4Ua2XpFORRQJv2C8VvVp6NoakoEuXu%2F%2BH%2FekXz7wOVFdL8x2KEPU4ssWkytSO3fkqaaXarbUNySkLRudo0Cmxj3gjfH1ntT6pWxeyyHj2lC%2FY13v73H0JF6ekZF9s3f3NuAZX3Po79csoCrj&X-Amz-Signature=9ccc9d7217731811afa72e29309217f171f131465125be81a820f739713d2c23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
