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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774ELKRT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV%2B0L%2BS8yaltVkReBQG%2BhW1kfh%2F8viqvKa3%2B%2Fu5T8vuAiEA1lm8wbhCuSpVqfFeXbIti79ZvK0VixmXQ%2BDRXRkwKYsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDL3Asz6ssFwWRFqSHircA6tjKzSrjoOF%2FV6K0XcytiChprTfEh%2BBVdxBW5XGW3OK%2FmCU3hQuAQQawlfJtOnpwAopUZ0rc4URf%2BpfKHvevGVi1crPyG%2BBIenw9Z%2BuZ8UOK2kcsKsH0fKiG3QWCcrXFOgGWVWW4%2FLXZLY0LudFXYyO3P8QgrqufW1cJooj3G7zb4so%2Bmdj4s1BFawzudAXKyKvqi9xc3h%2BrhgHGK8MlmEmFGNuymg%2BWO30EC2lZ51QvDle1eQWKO7mlaAyFb5PwvpQsAqkm2EUXUtRcnQ%2BAPloD99TAcFEpwC%2Fyz5%2BqvDceBvrIJQTBJtsDeYqt8jwaUXPEp4Q%2FWMS0Gkc4Iw2Angtw5tZYUqk7Fqh%2Frq5onu8coOPQJnbufdCuq2T1zAJ9g7NfmtARkVvtiWfC5t9EHJVEVWCjDKDLVp4kSmyUZBWD58LpYhX3XNJ4FnZkdZnbHi91vnX1hS65arhRbJvuh7qilnRQxR4I%2BLkwm0IOBqsiVyZiysuxCyOyjKb0whoW0azsWZuKuK0%2BibiXzu1APHEFg90PxEZ0jqHjhfPTo4ZP30sCkVqzerQOaEslwY0EQS189wltgjxncxrs7K7b%2FCiMmxvElXuTRFGQQU%2BqJA4%2BYeOtAae5QL1pTwXMJn43MEGOqUBlXXlaR1eWUQk9BZd98Wq%2BSPiZdHHgpm7xzQfYE1ejkxgpTqRa8MYWSQxj9GVnSBM7S%2FtTuLiKlU6pbRz4eWBvXw3CLqpuzWYFfc0XBNbaKuEc3fMSzz7Zkjkb8gqZdVzkg%2BHxt9nOcqyqxzvclEzrDHOMFGFjEhVuxULOffDOXrxkjevKZRL611r9vV9la6ywdSl56DnyEwcwxuqmGmhfNaqU2pm&X-Amz-Signature=413bb9ec579394cadd41b6a23aaec5e85644c042db0ccd0941d299c205635a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
