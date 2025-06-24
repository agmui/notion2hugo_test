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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDXD2HO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDmIYhqCqsppYLi9RUnOLaKwYp7e43x6LYKId2Xa%2BPXowIhAOk1fDndcFR%2BtylYEgb9%2FJcejfXzot%2B0i03hCzaSuzucKv8DCCMQABoMNjM3NDIzMTgzODA1IgzuPnsJPa1naVl7dAgq3APZ5rdLJ1MdZqa8DU33lV9BsYOiSc6Sb2KDB%2FTxgW3jKT3m12g2l8HsLRsBOXAKfe1CZyiw1JzA7My9%2BY5mvonOOVrpmEBBWl87ufdPY0ioOShoY5vh7dJ4pj8NEyXFwsS6Q%2B8X8%2BlQdyenKDIMQXMObQ2yEVu%2FNFb3VOrCLEn%2BwIewj7O4mJAYgfi9YstziDQiams1IRtovyR%2FuNBgBA0hbJpCCHwCMhXploXYDbOpUCx1gqEh0y8Yk7HYhj5%2BHTyNJQ7WWGv%2BaRVCrfcDpfTGavL3xVkY3Fmvl6JZ3gZpdPl0Cj1flCE6Vk9H%2B3n1imPSbooAlgs2fbnpGnCB%2F%2BCj2amNq1NcYT3xsEuI2wNVRXASGz3rSJKDIewfwzuyfSKNFH0VBEm4NDZlM2rYb88ySgnA2aO15p%2FU%2BbUZB7UsLuHeGzW8ZcV0pA1cEe68AvMm94nkLvVi%2F4KdhZNrWDgmj5o7nJGvCmYii1bUE4wfOf5zRUyA3gD9hucTeQUXn6zJZOJDFzlbpmeCXBZzOBU0fZW%2F9zoANJsRrjkJrFOfFx9y3WoQirmTlswi1coLu%2BrTz2bfFaALHcBPG60vtieYtHhiA50atAZ4aPdLM2eIeXMP6swEUVg671uTyTDAlejCBjqkASAArHRnMn53YCDUDCTATy05MSKhaVZJzCawfOeWSgxk8m2Xv7fnKeVMz04xtT%2Bfb5bkDmqsUxwcQDjObY1xZymBKLbHVRoMlAIZ6i0OWGs8YhVB4Osj6Ub%2FGeIwK036iVA2CpqlXC44Pp0LWJBeH4KccitesaMSKe9M5BCK3mCx%2FcZ3cLrX6q9JOlQj9YmD8qPoAlgB3CLuQoF3%2B0%2FQ6NMSebwO&X-Amz-Signature=4340ca5b31f0d39e8a25bffcd95d1fec87d6722be294cdef69f4333962067182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
