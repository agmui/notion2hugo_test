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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2AAGWU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCtFM3vj1vqUcr0hC4POe4tpwallXzep2uJd%2FY40sumvQIhAOeUi3wAsFcieTlAMG0AhPEi9t7dLLqFmu2H4zO%2BxVGeKv8DCBIQABoMNjM3NDIzMTgzODA1IgwV88utmzjgeM0DOFQq3ANMLt0ElM7F%2Fk9PVQ6IejPoVzsm7sY9LgXW%2FgJUXIvMMrEKCoJVXjlKLkQPX8ginHDLegFpfDidrBeQqTAXOvWN1Fve1DjRk8dTekmI1ER0q8uLvj18tUx5I%2F6d3B2QjzG5yN%2BOe7uI%2BMVEI%2BhNewOwNKgRvp1kSEe%2BCgq4vDGAxvGmepcZn6SEtI0uoG%2BpVQIdykLsxHcyzRFIIncsnKhxP6dMseiBSpW6rW2V9ED5kyMz9au%2BLotcPrakpJIek%2BG73xBxY%2FU2BvwW76jqz%2B3TyEc0H1EegVdHbUupubmY4UvMtJYNnnjhsfwhCDVZ7877qLXml2LgcUU3u3Ivbck%2B1xNlMqQMhs4LM0Ww4DSDWjdEDKmv1%2BXXt5X5DWIzyuxzR0EvnYJDZ5COds4BlAT11nG97PQWid9IYvqHUdNQ4NBfTtIQ9GxjIU%2FmHVAAuh2Dw%2BSFzg3syRqyGLRvC0aHsfTEcnK9DtuHUOAKW4yGRXJJXeC0RCZsg73ratw3Z8bseiVnxiqH7G5V4jb21mbxJkWMapn35p3oahC2bjyRwZiBc32W6sJ0TmqQb11QF9DxXDJs9HoDRO1r5J7ZI9uXnVi7q75uvgDbNkCm6PIgHy6apqAJMRJmvxIrLDCg9PLJBjqkAdxy43tJ8cLROLYDKKhNj%2BT3SkuxpLeHVY8ZeJ4qkYd4NQ9%2FTp4cTO8gnQnUCnZdE20dRHbP16dMYtf8AkmuuaYqrmJbKJKjZM0iXHuE%2F0scmK915FQT9Wu0EIE6gaTAOl%2Bejgbw0%2FVtbY2NQzbhSVbtB9erL6bA5qdWOhusjDnMzC6uE6VeHBAaXHj%2FfYswTAiXYDzUTOzZN%2BM1PpcdlsQ4ezxl&X-Amz-Signature=74d7ccdef64466587f0e19941c3f640a20de9eb819757a66df60939d57bfa21e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
