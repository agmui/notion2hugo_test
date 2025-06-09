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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRD3CXT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDTc7E1xRljqO2%2BzM4FAJKxb0vDUW%2FhC16hAOVycwyXCwIfNqEo9uDFcJOFkwudLd2e9ewpAIQy8PKIPQFQaQZcZiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbMHMTsdUxcIaQ5zIKtwDmlNx9c9aevEpg%2Byh%2FcTSAINW5wkc%2F6cbmO2gCEQ9hi1YPKcvnEeJQsQN0HKAGXYga2eRegVbzl7gjBvWGI7ux68Rhfyfuvuqc3Y1de0L1jq%2BsfJCD0vAOJd6HZiXV0YiVVVZCUpbpWZcJLI9OYWgus19b6Upnc4b8V59yGqeMwyPZ4cLP0Leg526x0WfACyR%2Fk3QXkLMZ1dlnoz9mxFMeIlupDEvrd1CTh38sQ6tSPNcI03P7G8S5kd%2ByRBW5kMmpOfsQPgUpBsJBk4YlX5f1%2FPm%2FCnG7LorB4adhbE3L%2BLpCpEHr5RPvdjdAgjDzngOgCJufFIQd1EfvkFqbatliVAbup%2B49vTTFz%2Bk8NWhW3%2F7MXxAMgr9hh%2BcfspT36fb3zeapqYrvVglDJGAj3rG3SCfQLXz8fazGbLBh9IDLF4UdEImMXfMrTpZ06o7XFc%2FgTv0hye8NWZycMFdPo2aRq0LXFeY6Gf7VatBJ45qP52LzlE9q%2Fzbg3wEzZKrFoy5JiaX83e%2BYv4V3c0PSPyVPCLyq1pZU8YI9qZqkZY6INYY5uTRRAQZQVBuEeYwPll%2BhAgpZn55KSZ1xm51pMv7JcooOHU8WmjHh0gTYC0XW6fUwdMoLqYEAg8KsU0w%2FZWcwgY6pgE1O%2BG7uJTqG%2BTPECxnunXyBLBvNgQD5N1ogwvz51lDC4ITM2dDnUOyRDRsXsMI64ChcIO01OdwfVGnj%2FssTaBBl5Q3DuEabtwkTynKjUZnW1FKjZdeuVu7v0BQ6YFybbn%2BmRFrEHBbS8z49eQdncsCFkEAgcSpwvsbKTeXSrJIEJ9Pnz4YqP5B7CA34QehgL1jXq26M8XfCSW%2Fk%2BrKL%2BQPWeU4FXi8&X-Amz-Signature=dad44cc5ebda43206e0db8d8aeddd210e159b08a3596bf63a6f876fc420cc592&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
