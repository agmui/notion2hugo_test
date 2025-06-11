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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIBMRDV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEethd6MTwMIUG3KeAdbmYcZx2j6TH5xa0kzz0rp6EHXAiA0JjPjmWbHnAYkiOemVwE0rqWi3dsiAfsIYeSKzR7OVyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMji%2BRlcQ2q6bOV3pkKtwDzyJssxhFmNrhL517L%2BGkzkrxW7%2FRvbH7acGGi%2F5BLQw%2BtMVEYngOrYwG0QJ9q7ufPkifR1YtCreg6U78hwC0U738MFxwrXmI52bo%2B8CIgGQaBAlqCJgt%2FCo3nVtsuZpw7NmCUIfQjt0E84hB%2BgRWG1Ncjm%2Fx05XpIwHHWNog795m9utfbWmf5DIsLXOcFtSP79WOGMAZP5NSGsT3OnvggUhxYMj8mQSYTyYj41LqP5pf4IngEo%2FgQ%2FjIOvDwX3RJlMgu61JgKBL4eaGl8DP23KTzUg%2B2t25jYdLbXyTMHrJpRrjXIzyOeOzMW1eaFw%2FpsM%2F3nQgTDhK6B6Rk2CmiDVmPY5e6gxqZj%2BAr1%2FkckVH1uhKF%2B3pgaE7ZPjIfq358HiU2ScoU8SJuMeNcjMj3TU20FgxgMMKIZhq%2BviF6BN%2F5ObkIUUqo4%2BGyH9COzzoq9il9gXagB7SSRnJpYscAhvdUAw6G2kCp%2BeFtVPSNahM9G2mqwCQVJNdF0MriQjSecnSut6J04%2FYbDF9Klv6x8h0w6ugLPEDGqrvex0oryWXoVMwpyxjFIePhAlJCCjSAI36uTZO0TZfrhDAC9ijNg7Cu8PJKYEF3DRw7WA8fiI1L1zrvBYl96xPx%2BHkwloKlwgY6pgH9xJpm%2BRGIkjhk90tP6Swu5sKAv3BpkNrjJOo6PLlE9B0vo6RjEMHKX14TZPz7y%2F62qYOS%2FdvOTdAigQy%2FFHXJ96%2BDP6Y3M1x%2F3c4JItKjzqu7SgrK7%2BHi66y4xrSW9LUnaopbhKvRG%2BZV3t2BkVY4LFkOtLfDTYSkflZwWLeGHKrZI7bWrO%2Bk172q5GmMqrqvGj9sX90g413tY2SYIwszk2KX%2FscK&X-Amz-Signature=2efdeaddfe6b50ef46d5e6afb38f8db0508de5aaa40bcb6185ea503d28b4ba64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
