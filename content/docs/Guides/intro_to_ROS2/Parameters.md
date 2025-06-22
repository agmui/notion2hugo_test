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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTL7D6G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBQb4%2BLL7GJcgRPI7Awd%2BSQTQVVJQ7Jzkx6zE2p3S%2Fe7AiEAh%2FZAWjWwkn1lcneVo9VFcEqJa3wmOB%2BXy8Uw4EPjjB0qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQf6CZGJqlE7fV%2FvyrcAxCWDMk%2FJbz%2BCucVjIha9pvKASuFLlpMYf0JL8nFaqiMojOfBCCACnY%2BWa9LUGuKc%2BiJnlRuBuHgkXBbjqRTV8W4H489u8Ct1ajm8iazUmMY%2BroWEF1k0HXvxgEGhxtKfqP%2FpAqe2zn257mbX54uC%2FsfoDkosvMxbkEVyeN0eal3aHARpQe61JtTsdpW5aCgujPMPbrqRNt2XYVPFG86Cl5ypGeEi5fRObRqDdJmRosP%2BwcAE8RwO7t6e%2FtPT1w0lkR%2FBYlIFp6zh9BE5UXSJ0XJgOjaCLj9z7GE8wK1wjqT4HK5tR5pPu7jPnVokrp2jLxBqLpGGTykTaVqIM4%2FEE6Toi%2BfDIZPl2zu7jCw0ijuKCD%2BmIRQYbsEoXVkXuK0ui64eZBiPRjqiw6DdMXnhV8SJUkwLfJeIqFFAykdem%2FAQjE9MrLkFMYVRjGBFpFH3F6jL3FFCF57vCQc3F1Y64aHzRzWEooNT5ecwE5SPzsMKbwIG3EytqV0ioCktYxOE9KLBxW3lHXqUWHDTahXXGPeibD4uptaGxPzmrCdmV7rn4gF9aClgtCESpDTdDfyYKsFpQe%2FGulDfNNOV7vSKdHXvGsj1LDGmmH139%2F1ZV1eVCnWy8j9ze2tk%2B8MMOPH4cIGOqUB4hrvct%2BVaxT1zUqdC6x1XH6ELyBQ3AKhSbaxtaiGh%2FggI5Hhfp8fmODenJ7kmMfHMsri%2FQd8GJRc7vkzsO33UY6DmVHaUqJEgAw5I0PmRPnX12%2FTK8Xt8P4ayxU4pTsZ%2BDBCMcWie3ij5Qjphn8kuScOhtWmmYRwkt4lCC05hB5cdJ7ujN5N9jGCBd18UrEICWydcTDErYF6udVUVPl2CSDq5968&X-Amz-Signature=34dd617120e2e215e6d1b3b9f980b0722e8e2d4a8aa5230152a928d94d024b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
