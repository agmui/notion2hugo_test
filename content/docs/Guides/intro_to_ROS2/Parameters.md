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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667MHZU2R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Ke%2BGHMaRVceEBORjgdxpft%2B44447CA5i1Ls7ZNCA5gIgOeIJS9XFRi4Zgcc6uYeL5phXmpsjIYUp280pc2CfAi0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPUn77NezPA%2BsietyrcA7KT2RPLn9AcWViHiFlMFtIlwDrKO%2BIBblRKLu9eZdORBaoD5dm0QNquOnfVyLwWWEsXvnWoOaoaAdehT7%2BHx0sQq534dT4AMfcxCa%2BGDDuelFealW0v79s7M8P%2FUvO7vInQU5RCcIj1XkLjV%2FIh7%2B9KqDW6nzOV9Us9MPIegXejbqVecgvYb6afXE8BFOXztCigM3NKxVWvQtNxqfUY6zk%2Bzb9Bb040KgTYPH5w483jWDYNx22GeNGbNPQfUCbby62a5Y4dzht5S4%2FzPzxCEN3K5w1fJzuvAy46bRXIxq1kJLLzfBsmbtPfNWkY8Rn9%2BxieaoNZKXe5l4Dfsv%2FKIIlktf706Q0JZLoM9Vkge4cSI9W5GY5YDM%2BHVuas6TuL4hXZ1YYOGfalx7XV1Y8Z81qLSCCVVUk1VDfoqpTI6s6dFWVqCEGs77o9%2BeTjgsUGLOh9NS1RRWUFGCCYbdaAuHxpPu0B82QUztO472lUictKkJ%2Bf0Gvot%2FnIo2Ly1iaSthJwMnBkNA2JG5RAlKDFTZN4ZhKCyXzdsQ79JjhpvVWu86aYX%2FHsWJE5WqGyovrfMrInWL83Ms6HILtYNbCPTkf8OISUWMsnSkPaYUGt8rXs1GfJgdGd8Hw1E9%2B1MLOTm8QGOqUB3KIyqdv2yCrOao4cxK4yE3YEaFkQuuy8EGuSi%2FE0xTqSSz7jv7sjqJyGI2f02dBzKqTf0vINGF1kkhQCjUvG1AiYRErlH9dInWA9edCpgTVgoCeMCEO3aGUpqj8P35aFQsCU3yTvztp2KYIDeu5ofjsDA6oI%2B9AuUA%2B8SOyqQ4LcJA5N2MxHkLcQCG9%2Bcag%2BTIF01EbvtpzX9NtBJRYKyxe%2BBtHu&X-Amz-Signature=95a00671df72ca3deaaeeea386542df6adbb32f73b39c9f6645d5fc939dc469a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
