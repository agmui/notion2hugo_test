---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBAJU5U%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCpXFoX2gyTmCwwodYPgnfjj3oLAZ0qL08%2Fs%2BjENv44ngIgasu1Q6iOkhQGV8szMcf7PaJeKQax5WrLtMZMUyJ%2Fv2kq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAPjuVsi0abWkWi6FircA%2FWe8JhYXkDMjUFXF0IYTfeGMgdbzG8oQmQm4D9gHXNNN%2FZEbvafzdcYS05%2BXM9INYt2tPHGUB96MzQfDueAAvQY8wdCF2EG9aYOD5tOq8CGSa5vZduysA2GbOzQEIz58dTG12wZ%2FtYgmbhvsykzMZjsWcDWw7iYg63AwlT8LUHSOF1XBXodqLoYHvWm9fhc4IqGkaJQh%2F2o1o%2Fdg8jgXyCmCiYufVgcm9JBvynvLWP0oU5PHnBRBYxLUjlvG2k9Hfkt%2F458vJbGjmWyqIbJjP1yll8s5FiEevYnP1P0MeuZjq1IVNkEbcr8OP9oxHoh%2BywjgcChY6ydVOHkgQmNOP%2BXdZ%2BjDxMHBEeeb7iLBFBdgzC59n9tnoW3p2u2s41rMmWC7txvIzYULO6mhyQfykFOUwCb%2Be3ggkO1oy%2FIsjWsvqU1qTCzjvY6Qjn14s2cOQOBnBxGhGV%2Bz4mZYlW0zgMoxyvNc4OahjRg3Ds3IfHr7uPt1c8hYA0E80VhX9ZSnaXti4Tqg8biG8limiBGYIYgF7oxck69EE%2B5VGxMRdlWlRf2fckTpJf0diuKwnfS1S7O7rsLptyqooXJChP74J6oQ7y1SbHIP9eWD0k%2BfuUEIwk%2FBT8aGJ%2BGH3bvMImXjL0GOqUBraQX5Yn1QNb%2F6hkEwo1TPB4W%2BTUicYenEwn32xDHFDbMLmVTDw0oPzDe1zXCne6J%2BeoGmsAb9DHoQSaIja2LVpR9OLHOwizvuw84uKeuHAQtXFBXsYPidCqcPtn1gIvNNu5LBGUmypokVr75PKlFTZKCIqD2JEHGA7LACm7HNN2H7xpoQHER2JXOfbR8eMRs5HgsOlAyofQk9RJ9X3arStV0UOJ6&X-Amz-Signature=9b47616d1e92f52bc4bbaff8171b6167c25798485d7516f141135c6e1dba35d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
