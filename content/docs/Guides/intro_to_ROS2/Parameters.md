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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEVE6TB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnlblOG9zf1QMeeIrWOaRtCJeqe2xwOxPkqs9%2FYAymDgIgBeUqalBGHsGX5ei9uUFUTo0k0UOuZz09oNb6L5kaI80qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJPClmLryoY4oD%2BtCrcA35OBXPxspqWw1lL8uV9mdayTYvxO5gXxGB2Zdmq9wnyE94pVzQ%2B1QV%2FGrY8amxv%2F5s9hrpVsY0MuZxAGKTuujbjf2orkrD9w18gNVG5Gr8BHjDu2suqTxz7EB6BiVql%2FTejtAR1OWdycfBLJjA3O%2F%2F63OiPbJ8ScMakRKMey7r2BK5r598yjfPgqd8KztnXJfX0sqcMwzojMMqgo%2F4TWOreV9zrOvoo3n7uz1DWC3%2FjwwsmL0Cr%2B6gmpohxc7F0DG4BW7l24sMfTS7zwYfFhTb84Jm%2BYg%2F62OGyP8CTWf5sCxxO6pttWikzNgILPwxOtqBT%2FDdsXLdgRzAyltXzPPFMM3Wnm%2BLUbOZ6PgdiL3W9ZBwM7SQWzBTYjLewQIfesgXOEHkFGYe2eqCv9YOrB26IeSWStx%2BQX9GSQBWk4BxP2xDUF3OdZBarYnyQE1QdLrKcJL%2F5t7uB9OGgyHYkCVH4Vl73hjiheUlyixP%2BkxuCBldr2jd73%2B4pKeLdsmqAOomRF49zysaUJiq7I3wejY2NcjvKzYEqFW%2FpeJXqnmSlVpEaNBZ%2FcDRo7E88abX%2BjXgS4%2BYKv5JJDpUlzDGHX9w9E2haf3c0Iqqo28DnpMmT5AZwZht3JjmoHAciMI2UosAGOqUBeSY0WyShe%2F5qBd8YnjGk8LRFwA%2BhyaJ0Z3IUwayk1Y5bkH2d8v6Sx0QPsB9vFGTVHHMdUWRe0QM2WlwwRtfhLOAxu91Mj9qbTML0MaIzG9XWOB%2Bm4fF9H31zv%2BekBFwwfXqYqmwp0kxIFllJTTuaHu0em6V0XpbuhOhczNMqZ7hGRA8JH6J2ua9aFoaZ%2FnitRAi4G2vpScsUnu%2FGaBVqSDVX54wQ&X-Amz-Signature=0f6b76ea43e2548c2d1ccc9a059d81b36a7e4f8f03dae01a11746eaf9ba1e64d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
