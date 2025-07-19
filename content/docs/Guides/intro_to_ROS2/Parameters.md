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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPM5HY4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDookqBsrRYY6p%2FcwLMegH52%2FodJVtcucbmXRJR%2Bk8swIgW%2FK2sqJU8%2BkuWl8PcaBnRmV1jVrZMCuvk%2BTH6N43mX4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxVuzw69WegQdksryrcA2DKX2X6plLOoc7I8mGzFuweA%2Fp91LbYNgxnAgwUp8rj7qpAuQ41OjpA5YOf%2F%2FbD0iRuWmq0u28HOQP1JF0cAkV4CiVHSUnesmuaFakhWpyUOzWf8nOtrx9xv8lDLnp4E%2FMZZkHuFLt8Quat%2FFd6UzjVO%2F%2Blqb1%2FHGIVzxXujbQ0vuuHhPmVkEeJ5aYFTfAJA%2BEXRBV7gYr3B%2FM2oOkqsu9YdzWP3JoSuScu16muIkJw%2FDwecvc08MSnmIlNPOnR0fE5NVVNb88WCsAhKPx79uPe0KFRejvOhq7BvM8%2BnswgPjKSjWsh3cqOfoWqgKiJaDVkn8vIKWP1gOS3LePfXuxTrh%2FB0jTAzdaHqUhWqSvbZxIu7U9ooJ9IUI7E3QBa%2B64Seg35ylrod6%2BCPlS%2BC81QqOP8i6Xff7Ciu2O5nbGrcJ0ic%2FMyrVbRmZxI04y7VVk38iVTGurJjCPMEXK%2Fc5IqecrDe4X7aG4I%2Bv%2BLnaGoxHIAzf71ZNEywGxRJIdrlwYFkt%2Btvhj9rmz3gsGghFSox9i4czz2vDfHGD08LEXzjCPlvDTzf2hYht%2FJtGK3frqZekYdFqskf8%2FstLI98CBxLyN8eaC0dHonah9QbHSAfRu5bpmLkd8QH9rHMIah7MMGOqUBIJSyLRAPjtwGyma78JmnmPsx0yMXZbZBU7a%2B1v6oU6MH6aZjw6isltbh63tAanWAMkaTIO2hcKUUqKqzYC8EGKAh1bZCG%2B0NaX9r7gpCS4C3rzFW7NSIEG8FVP8tFAUWD%2Frvw4O3Pfwm9BSqhq0QD%2FnDtV6fxkutWS2%2FtkCK%2Bt0cqxdpkYlwDTmJC27MgoL%2F3paXx8TpBc57poA7tZsez2NI%2BD1C&X-Amz-Signature=4c231d237dfd44df8419f126451577b46d82953af363695f2a7cf5c3c610af9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
