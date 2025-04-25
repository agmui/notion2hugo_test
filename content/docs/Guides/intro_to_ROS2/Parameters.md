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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHCVFIKZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE%2BjEhZEjDv8tUC93u5gtMyD2wSDKDmz5yKFChu%2FbXwAiAym5lwcTNGPrKhnE%2BVp65TT2%2FkY7CZznZCL97YNS8AHir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMRegchG4VEJ%2FtYyafKtwDJEyI2TzWvL0fNTC41F%2Ba%2FvU2CnPXoGP%2FPj6OFRfI3gQ%2FioVeP6hxX4jA5orbWcpMvc9fwMvE0odmNDAbZU8L%2Ba3zbwIIZUw74sNOYOgALZiMju00%2BFCOAGvohArGM%2B11155GWNg0YujJMBlqsk19aeFajz8xcG%2BYjK39MEXvE%2BNLikK1w2YoSWcUoy93khnwVX5WJ%2Fe4%2BjSfXrHPDUTYgBLBTQvGPXKyyMg2Mk9TzH%2Fp9XkA6Fl873ka5iUHRe7v01Re41aWyeOtVcMHYolgAedIxVAzazqvbA%2FZjVEh%2BpwAWEMUVWM%2FodLuMksovp%2BDqXgjmyaA4KkahCICqF3ye2dm7nnZuqY32V6VijswGiQIZT7ZIRfVgngc6gEOKkkzrcar2aGEw%2Fpk9z0YkcL4AN44yHjCFX0s3wPXieSzMoBxuP%2Fmhena5v%2FVr1SznxOO4JQbDTuyicEecpGxmuCc%2FMYBgy4BOSQCRB96hUwk0hqx786Umtbqj7DBr3MFA0mz922w%2B8n4a5GCB4SiqW0iZE7tMMa7mSKQ8vSDw4HiHyNOW61KpmohBZ0tNo9DM0%2FbhWmQHXTvZjtkb%2FW9kwEGEXlBGBVJWmP81z0GXObTpSW92hK5fN49I0TAo0gw%2BNGvwAY6pgGTQKsnxjMcxYRKUfS98vrc4vhy4%2FC6w6Q6ftZpqlH3eEWFesFBGP4gKO%2BjSxAUM6ZqN7ZyPqrfN1KHG1dKjwQG5Z2tvqrMmocp7tqc%2BVUbHOE3eiOxZnqbIkRUV5rpM6fRrfbUJ0DWAT1bswRpMcb0rblFcgrMrGJ%2FrvwMH4LUfH0H44C%2B2ZPfS%2FyibGLIwpe8jRlzXgys3GsfO7PmHUf3YT7cBnRV&X-Amz-Signature=65c80f3aae3cc6a905a4d6946e4de6ebcee37895162f493bfe06f5efb9016022&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
