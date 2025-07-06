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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVACHR6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDD1lgR1LdmuM56hqUtWtGeUfKcwW6UxL60BlvnaNl3bQIgAud3GwOO0UTyT0obhhoELCD6vcjeii94p3S937Bd58cq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHPaOtn8KifyBGUx5CrcA2stbIpJipkHhoBbpKsYwVU%2FIDDiKF%2Bk%2BxHegBh7hHP6UZjT9Yb6K%2BFSOAmNWuXM2eLM13mcTofZsbk6yBqHvZnJJDL4R4vaBZ7G1G%2FJCpTG5KxszPd4e4JFFI%2FHsZ5qqPGCJ0D4Q9qAeOiNDq0g%2FHim7QRyQSbAvTAvYTaXQo9hKKnH8E9aAaLgJTwwaTzvnE1qmoS0k2H9eh7zHLWK9YZ5iSPVaV6DDsBCKzn0ckGyINb2ZF7Hj16pIv1KwmHRMaJsq%2F7YKNQWsw%2Bu9oIOG3OdBkqhAmZJpA1SXfvey%2B1nefysShjEOt0MgnAmnaxd0mVJKRuGvPTe59jJG0TzDGYKqQ%2BSnUiKQXArLAw83fNg9uV7Wet8Asii8GZcE9IIzGfpjBuIUg22%2B5zeawqcOV%2BnQnNPPizBSGLubv7vWOaJxD8tErHKpVZRbjwILi97Xwifh5UqvkTv3IYCAF1cSJSFGDG%2B77hWYGl4cufHvfZLvyFVqcKGjpOTjGp6tGSXyYm3t362LX4oft3uOdTrT6eGJWbMKcmVZmlrqoGq0r8nZldE4sqftqaovWPOJbV0VyMmKf0BRKNGzrepZYFppHOuVApcgHozEG7%2F651dN6SD1APvEWMzI2AWk8vkMLXRqcMGOqUB7oTDASHPAvSWrnt8j5EZ2pG1QyuFBzL0aSyS2t6kygyLGqHFZkmL%2BcCkeRguLCV%2BmR0f37wf%2BHHM0e746cJyRVADYdFCp%2FH%2BcDusEVLwr54RNcU1KjYeHbNxhZv6z%2BKmWAXvcNODJb9YL4D6oSA%2Fa5BI4TNdYRbk9VgG0Pye4PmrOPdM9cmE8CCfab3Ek1gGhllLEIwk7IuCD%2FVkQ67NNkQijUEC&X-Amz-Signature=972db261f364a67756e638996d131537d5fab6e3c9adb1f9be301ede0b7413e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
