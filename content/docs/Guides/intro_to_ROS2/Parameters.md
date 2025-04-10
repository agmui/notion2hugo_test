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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HIZVYE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIBu7PE5y6%2FlCk6LDLugsxTP1ahN0AaGnBDnY3Yb6nra3AiEAkAlLwNaWGSqYp8W6UU3vGZaK1Ru4YSuuxcajsuUiA0cqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1R6guxnhHO6gOcxCrcA1MZNv1HR4OAXdnVm%2FPp%2Bmfw6zFSQ31WMF%2B8MEYZxIl5ZPhjecti9k69AFqVUD6tz%2FOR0H0GqV4oEvXqxAS24K3XG6%2B2FIbJoGHsswVnttvQPjyIxhokU28G3jih%2BgtKYvbTtYHeCs7GxFj4amfb9bGcakrXkENUFVPRSFASfqeFOmkPrGp8f9EmbqPF9IIDk9vNncAliTeg9tJaA0i5XIyO3fyvUGE6Dy02zxPAIQIE%2BN9RYGE4YY5QPgt7x5zO6RT70ZxgoqZmvnev9aWLqzOmqigwebPdAUvnA%2BA1x0Gk9KGZZu3I0TU71SF02nWOWRdrGd4ULyfqwj4ACuygGGwy6VVVkKAwqASDaB7979d99IJRUUZuqR3OB%2FXizoBr2ZMOAD2ipvEFNiu5vpB2H4pZ0XvxEjp%2Ff46%2Bd1Ha23cTJJGCdzSIaXmd1xmvUeUKKgqlJwwQXwdUPdhJgAHQz%2FHbBRXtGc6%2Ba%2BCHHp%2BHVtVmUIz0wYj5OYjtW8L9Jbu8D0hm5cr1fX2lqDojs9JtomX5o3KZxLEr2Yxm0VTroeR6PYVM%2B%2FqT7s4XQL1rXz3wPXpkyFrdecnyL4uLzYzzXeRvvUNAEo3yuMHK8HbzJCisVf0U8AmgAvFePDopMM2x4L8GOqUBxCS9bUY0r9RlhTTBqnvUOU1KwGTmDu8B0yPZM6DH7XTJ1BAd0OtC02IjRIQfxdfqO0Ydkwcn1Yh9xvbIBR%2FcrdZzbcaW0idSEpvqKf51Q25Qh21Tzgd%2BMbN%2Bm0%2Fps2nvHVPmsaxPMqspoTQDKKS8hcoR2T4mZ5vEMzWkBONk%2Fz9eoSXg%2Frwuqw6nAT0jnOYqjYfMW3YkNJ4SxmwXFyi6Y%2F1cQkX%2B&X-Amz-Signature=f843d975edf840639c0ac5764c4978ed5dcbcd8d2931a27e3cbd4bb30af2273c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
