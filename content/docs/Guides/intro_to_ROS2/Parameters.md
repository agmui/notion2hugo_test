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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSPEWON%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEREme4BvLsy7FdD%2FE%2BeElOOGkhX8tCkou3uC65pOwjfAiBGlQ3l83RTzDkmkBOdd8fr3t4fuobRTXv83vI5OZT4NiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm3XPo1zspim%2BfCiVKtwDBndzK4TkKWcU4usnqUplgOiTOojENU1C15BGZ4E1%2FQFGGo0wjnY43eXqoQ19Oij%2BC9RR%2BExeCs66hjS1f0YfFWbzR1Mp%2BFMuvlo98aHlXuCzdd9NQeop%2FqzakNma9Wmm%2BVuwsA%2FEAQHlX6KZ%2FOEVXOJoZGVtEYEhAo8zZrdQhJbrTntIOdCkFrev5n3IGr8plxbZ9y7EVlSIA1jRCTGcWbA2zuuzS7uEp%2FvaOfHp%2Bahc5WZPNixZDxHFF%2F5de4du7NshmZzOmNdOsjyBTmKcM5wfezWw7vRSBUnoAlVCxDITqSgmzt2bJNiWlofak2bsE4ne6XyrRvpolcHQbGiuKu9NjZBTZAgC0s5kPCsg%2BVjCbHO%2B49RkLyf%2FOH4j9PGp0emu8%2FXd6peyjwptlWn3OVwSqndzIifHBur1tZwrxZ1Hm3eHJE2dCj1oszCQrd5ZY1Je8NWjA6u1ekNdTCYTp%2Bm%2BiyZn%2BR9KoXzo5DiFnQydz4Vdgc%2FZARBKHFbo0pfyeR0DcZIpiVF%2F8Je4OAwfQI7oUBkhNuWCbmxx%2BdpWsg8ehjVZS43155WxIh40wD41s%2FQ5wPzR%2Bl0FR3aknFYx2YgC1sQvmnAWZHs2aDkc%2FNCeDcaMh7T9zxeykVowvfSWzgY6pgGeMpXVL7cfhThOOtfc9qdSXqjx9MaKOK0plFxnI9oLq7qD6byE4mj7JLqnfBjQkFGzukwRZVbgfEbVnZQ7UhcAEZYWqhn7Axse02HSguXqhxxLeF4ZbmHsDAfxPxKZyKMuPTUWZVYcySpW2Kf5PTGjjBBfyewlDd6l3n8%2BcVWXQBn3oYxXDGuIEqJFCiezTRz2xatovoc4IsUWHFSp2pc0Uy2WrKYX&X-Amz-Signature=5381926aaefaab2fdaa5ea610bc07e321192a2ab84b817500e2e7dec2ae493e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
