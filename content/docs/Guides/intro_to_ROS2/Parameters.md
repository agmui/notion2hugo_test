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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7DW6D2%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnieKps48M27OcBMnkuDK9Qq%2FwBvKLYL07Oc9y%2FMc94wIgC0EXx4sgOqiyAhiPxKR%2F4IML%2FnIGZ7rqFb4Fh1heT30q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIuMw69jqsl9dj4OjSrcA6gdr9lSf1eiXKBOVS6cDGrLjtq7NWTQOJbkU%2Fv0UdPBdZctpwQOqDeuT0DoA7UdF03JQ%2FKkdv9bFvmXKNiAwDwTRBc8rt2VFwxRWxwUODo7bRRyTPVcjQEgAoTB%2Fiuit1Gkt39V7VjeLAkswwzAn7D985dNN%2FXVHddvjkTIjC0zZTBo5v55CGweFkptequsIgu3594uKZeDmaKLweaifvhIUclB%2Fx39%2B2ZBLoLsZqAbfYjjeeK0rHL8WWcIc9orUg2nrfnnELqoUZbDaK4%2FCDvRWsSSe4Cvi2Nbj91ES0jQDKTX3bCdfWAyRmcBMhloalgaSYY4V8XSDZWpCWORArcZCthYLXUV2Fl%2BD3ovdTNb%2B8aV6oPeQSX4w%2BmIdi7xN9Ao6S9iBxL9QZ9b3dQg2nsTnqa9UVH%2FKVcFAzFqcLnYtAJNpCRmUC7jDEZ%2B5wCtvxhDu3qLMwwvkRSpGfwbWBXiysSbeCE2jb6BijZVndnrzxRc0Yo5Npg0ytWy2lKg%2BTrL4RoCH4Bvjd4VOXqgPiI1DW8v%2BskEoz3lwkfXu3VXC9n839DCbCnOH6DVNmheet%2FPXomCSCSnIbZFrtyA0nX3LMsrMPaAKgAOaQsdTWFvRR8IWSGbFRnL7bJeMI6Q%2Fr8GOqUB6YPQcpkXXp8RwKHJNwMQhVGqB6f7PEgeTrqQrMHcghYz9BacAr2JG%2FNWbkSHNjiStLkcjerI6jfk8UEKMsCrFFdO37uk9pnzldvzI1uqyM0U8SBAxpghXktvB90u%2FYRFMD4yguQfv%2Bku%2FdTFCN7hybTcbt7IT72QfQUcp9vmzrBeLgKClW6Ve5YADwISyvkja%2BbSEzu6jyNMbvzBRPXjcpALkWSL&X-Amz-Signature=12d3359946ba5f09260d9b44c31320c41acf0709dd25f5f71e671ffe067511fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
