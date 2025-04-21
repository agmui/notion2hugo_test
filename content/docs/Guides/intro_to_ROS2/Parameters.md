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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI2LC6B%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAOditf2oWWm6MjwdnYsb7UKfj9STGWgz7Xy%2BzvbYtZaAiATh5xrGMEg4zVOsCjLYwzOg8DId4uYzeh5rP44ymLckSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvyukQ9Jb%2BZHzBvXKtwDCUtSsZGYIXdqfjyZgL8FpClxhf4TOHQETAZfJ1m9TzLUBPuxHapQF7ycg9gVIUA0YSsx%2Fm7tBTraZEPZHhFroQAeJBFU3tdM%2Fmfxth9Z2X0AY2SY021XyNqzwkjS8GGhm1Yo5xeO9CVW%2FHsSRaLvceO31iPQPgRjGWvPr7e5Ex3FNMT0gq5kcSSquqxeBXtOpX1GzJbgsCQJO%2FbqTFQCn7bx8CXL5uUrbdzFMCnB%2FUwjkxVEBYElJL3hoPdU8KfkZ%2BFrjRfd7OTaw3Uh3N5E5LaURlRSnYcA98ckJ1PNrGmMPf4KGflGw%2FzFfoQ2YLn9PAm5V7vVYjw7D%2F%2BVhpjaEorRv40%2FCDdyibIJvuRX8UC8xOGNOG7p7JCLl3bz%2BrzyDKcOqBxLAeX9Vmhle8dI%2FwMQiV8UfEnLQrCfZ8Ne1XtFNap34%2FQH%2FU2DYfVQgZM2HkrIdX%2FZbD48ORKv42SUMtmZGF22WS2%2Bh0f8AesR%2FYK3CztqQ44MiUXMcKOWeIQL%2FzMJAmmgRia8qgyiJS2cyqjbFHpUOgvYytSQTBDotQMRcXvmxGXfWv4CB%2BRuvUpwBw3KuqQJVznQl%2Bo65XA6QJ3Uog3vjG7UqbpSZRv1AgFy0VZz25NqMyUr8FMwqduVwAY6pgEBWfy0Zihaq%2BwdBrdOXUfo%2Bbj8BnaFf5A0CKVMgguLgmabQw90WuxzFrTeN33YDT4pSv7BR3SdjFvd058uNe3VwRTREzEe1iQ0T1DKjRDeCIfAYpEazkOcKa7h1id2oDGjQ%2B7ovMy5LkKLAHkA%2F8KiCgkCLI9By8XhFkUKdoboxKegx%2Bd7%2F%2BIMapyYGy9gW5hUhk9w7Zj5wmikhJ3gQx0HvZ1xHamW&X-Amz-Signature=376ca27c26bd208be9afc3fa52df3e18538532d697bf284b972942af01a8bfd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
