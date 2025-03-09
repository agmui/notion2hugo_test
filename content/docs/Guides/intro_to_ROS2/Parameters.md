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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PPDTZH6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFJZdz3V18wazGh5SjErnfP6ihvTOpT83ll7qMqxPMnZAiAk0Ihu2kvO%2FFvtGiWI8%2FF414b42gJSSZmyZ3VHyA%2BelCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLYrWAUznexuo6uLaKtwDSD0kibuZdY9TodvrHZ7dQ7WjGqQqynlWyOQ0L6UtEDk4LuzTOhM8dSqMa9N%2BsWaWJ7kjdhVk2pvf6Bfzrb8tF9ewIV2BJ%2B0X5SSz9xB5VE5juVKt0hrM76hPaLBVX9NV4LCu7YX%2B93Q3AJE9Ye4laMjRqf42STIBnNTLCnk2ZVJSAJUqvSNv5wFIZkRgLr0iGEIoacc9h8OI%2B8hIQUPODLyEXhEGzurQPQE0Sf27eaQ3jz7Agj3GlFkCuZ7MhinGORX3mOF%2Fd1AMAU03K0WQFU3R%2BjGYY%2Fmxg4DmpqUpwY%2FnWqiYvAp97k%2BH3RFcDFOZUvJFNClV4%2BQIp8ef0nMYR5P28wjogHIMIKGqzZquEB0RCMfveA3NMmH6MlngxXZ8XAdWeC3im3vFl625l0jN25yqCx855sjWiXCSLcCJe3ZiK6rHOC9ff8e9x7Y3VlWbXFX4%2BRgi8WrEBHfATVUzEQ4qdeGu8jrYELD1yJ3vmX%2BQEUEZsd1x%2BTkpwTylg%2BW2a%2BcSjR6Upq9NotLpoHONNsXDNUn01K2cWoGcJGivOzxS%2BaTxUO%2FGYrtLjAWtzpp2wZhBG%2BtabGh1s5lzXmlMUhhcbuPOBbtr2GcdhJwlKRYMhWXVKM3n2Sr%2BUPkwx8e0vgY6pgE0JXc77PZCxevescyu1%2F1%2F%2BVTdN%2FxLPyNEjoBLqnGB3T93QTACcnhx7eRuN6yBfRebMysbHhq2oNohXDXwQmZwtWqhS3qQxyX2LkP4nXOGHYUwUhWzqJvH79EmYWPi06ZGXUJocM%2BNM0icQUA873YjZB1oJLZv4%2F19zrgXjzp8HD96ojHEJJm5RUOFOGby9geWXX5ajMB93sp5kXkfb0NAMvlacL07&X-Amz-Signature=046e023631ecde09fe3dc73942ee69302b32b51404a9981e30119f22bc0e9212&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
