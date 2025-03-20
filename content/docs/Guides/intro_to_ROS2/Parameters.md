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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAH3IAEW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDeEnehJ7dQzCXOuOara%2BYPQ%2BbtXr5WDNOpDYD717OiWAIgD43c0lY7n7zkMw%2FSm8Ml4Zb9twqq5PsjvxNQMGTembMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuQKV6I7KBMzMlRYyrcA0Gx8NNCx0xSY9pzSksxw8RvNRPw1hC5OSVPDNV2f9GshzmyYEv9RvKBu%2Fta%2BlcQhTJwTtYmK3Gl%2FgLMURq4vIgQlTnLYzE%2FmiOgRjO9akkR5tJQzcRFfBbss5If8rCtNbQ47HxsXW5y6vlLqBl0DyC%2BQRD%2F2VyqLBT06RAu7co6Sd2jsJ6GOrumkW3jLsPL2Suwmeq%2FNDNB%2FDp0ylSqrXTV6ZV%2Bz0dgpIO4qhJUtY4GcYkdm63Z0amL5%2FF3SkT4ANIyNULje507OXjYYbwmbZu0anvSifMBxaRU%2BMgp9bUEVofrnzj6ZghuW%2FQCJs19dmaE7IFZ4AFg1osPBMkhs%2FV%2Fa3yVrMyLC79Dia%2FKJWIpyNyTBwXv43ET5wU%2ByYJWukKxUmyDb9X3c9tkc7M5QsIleSzD8EC%2FC2T478gxyAhNoDxJCewkpc%2BKh9pqm5DB6IxO8VZR50pLmJeP1XZ7s8lSZxMN5uyjihM1OnNeTDv9%2BcPqkBL5eGxufKO6HtNhXtMizm0%2BUT%2BkSaRUS%2FiTCbLXIzYBdEOa6FThU%2Bf%2BBTnJcwHXZ9GkIEefdv2dEdQLRgNtaFFOKJ1UX4q3bknmaKgSfzZul63tGC76XAoteMpcz38Y9khfvNDK4OsAMPXG774GOqUB7zOUk9%2B9uijyCNjBuzqcVnCN9U93T%2FPXkjybN9EsSJQLAgeiHvA%2F3GORFPsgfUYgWZ4IuX%2FeMGxEl%2FX3QsUlx2%2FDQMpuHefP6GIiexaKpgM28RJfXoy7PQMqhq4i%2BSJtKh71IqDjLPiRvVHqbo%2Ffx%2BFXERrxCX4J9pbFuKEzm4nisPXXnpDTKyVEZ%2FeWR0JyeK40aII8hfxKFrYFNerupGzIpLbS&X-Amz-Signature=bceceb22e06558fbaeb23f098c43f96411f65e2796c50e777278ec284e9eb4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
