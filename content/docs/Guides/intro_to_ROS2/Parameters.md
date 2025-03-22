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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4GO6IY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAp54aoyKFc4FIQaHRUv5ddbtNxt%2BYEYz4JH16%2B3lW9%2BAiAZXacXkvUczrd1SPP9%2FBP0KuGYOUWTHhdENB%2FEWqjg8SqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjCSPr6V1KzyYFgaKtwDw24URMZXkqPfmY7YQIG3y7%2BsTBzkiboHa%2FKjk06ITczI4J%2FMJSJUcsirR3RmtO5w58xeNQ1w5J%2BykQe1qoEALPZe6Ilfj8uuzKbEtCti%2BAkiQ7vJcyOOEHLcS7FAOXxx2easuZ94ntJ%2BklY7ZkYbOUz3WOyWCkKlIFXC0FbGvY7lpVVLPtwopaOuEArHmvE%2F93v9uhPFKIZip%2BZWV1eZm1KY0tKV%2BY%2B8XZT7PDi3KPJtVpqDGmiQ9SKjvaHRoWjG8SL0cEvrRHOA9u8N5PPVYw%2BKjacPQkximtu8xYopU3mvVVfCUVHgdBnfEytZE9jBv%2Bm5YH1QgGcb7YsVfH5jixWnLjc9zoxFgUthxgRfKHDcEIf3WM0KzZKxx%2F9hLaHVpDjCAhQBLymVahPZJXJDMdtXSIadlWdBJ4Zr5nL6SCHLI3yKaDmstGNoB%2FvZsVuh2MK7UC%2BEVk3bCkVcPR7sovXPacc8lw0iujsF6ROHrHdHE8HJW5h7BIJfidDO0i0u8u3dufVhL1W0ES6zKwyzUQ1MLJgAc66YPWHajKXek50QBlJ%2FRldR7RsOaVuO25mFLGyibwOMkMHXbUdHcpmWhsEhiGgnztOkwCCcnh4SHrX3HNxDRKp%2Fa92dWl8wuPb6vgY6pgEwLC%2FLnF0t7rSU5xjH%2FgRw9ge97PYXJqkeF6NM14XuskzheBiwJ2JhdSdvBX7lfIqbyE6NPNd4wKjSevVgGF8bCZqeEo9hyxc%2FNsvtHP2kQN4HBXeIHuxlGt%2BY7kwEL22ZqOWmchi5NQuSf2DdqBo%2Bh00vXMUkRUdJDCHzJhSL4pP5iBrJvufhP2%2F%2BvC0rxMFh7rc%2FBsrUIhQwHPDY3rXUhoRmDZLW&X-Amz-Signature=6a6fefcbd8e042bb647dace979b5c7e5c93d8193fac5391e1e4689c6b8bf3f91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
