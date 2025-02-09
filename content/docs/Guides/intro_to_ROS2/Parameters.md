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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7CEGM6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8YYfNCRnaMhnFSaZSbwcTU6cmCAe6Z%2Bj7wBRLaYtBzgIhAO9jPXE8BFyMG2KOAjc7pTzhDupG86B7O1xwhiXwch3iKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8zR4W3yMaGf7O7IIq3AOLmGV2AogcMy947Hf6rSsArNUmX12vcULIXgZCBqm6KuHVH9ot%2B5dOSy5WRPfCn0LaepIBBJyblFfGpTd9j3IcxX0gN0GTnPhfqt0bOIJ7eHhjvCNezvkCsPQhEtr4onxTSjDhgphr9lEFtwvGAfYpdPjxqTByAu0ZE2q6a5QODvcBWAl8mlA8whcxltXOM8ffW51Cw97hVyW14q106lQww5s7OmR7d%2BumxW4kJ9HNQlxQW6xkOkIU6r7WX3SoO%2FMnmigokd3LmppT4EeFpzDWbWAbQZIIDMzvPn2EloATddDXNZ7mfRq6obBCbCIpEyD0OkP1MfsMLLxGiyBMTmNkLYLH9iwTOHvMozzapviP3HXPRbhozQHhYzxtkkvnZOtnLYoAs7jlXErmb3yWf7OxkIxzDuojcFKQxObj2%2BrcGe%2BMEA4%2Ba3b2ZTOP39xKNerHubD3c76o5ipPzU5Nh89TIMYym2xC4BxY2HWaOmzneXGJESNCRYh9gkM6yd8NX5T4QptOdDlOUXxtsCdBXXqAMNslcXGaPvyWjZ9Ip1wJo6KdqHacgis%2FKXczWEAujPv9IJtcnfpNEh7pY5ZeFp1MyWDXTxC9soyX%2F5vFULLxFwHryKChxPcW5ipfSjC%2Bv6C9BjqkAU6Zg4JLzXMUPdr97PwRMzHNYoAKn2flS4eknzCcWZ3armYacjOTGkNJwdLz7RtF6bbBb4p%2F7ndJJSY7m22dXlxOfFexgqGZfEWpGyUbZF%2FQE7ad0y4hky6AoODKT5kwA%2BNUgwnR31Fg%2FNcDJIxJXQCoJ2mU5FleCHjL7ajSSvJpkX0i8Za3QyjETkGZMieqZKtRhm1X7Nj5LmpgEm11DHg9QbLh&X-Amz-Signature=587d3e2357db621ac89cefc4f37b73271dc6f6893c2ef6a38d390cdc5f251472&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
