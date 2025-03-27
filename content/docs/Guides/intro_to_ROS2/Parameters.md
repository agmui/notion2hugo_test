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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGIGWFR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJnLuJRvs4QhvZqzu4D4pCIXntyT4wX0vPY6MNWT5tqAiAGc4yuqdj%2BiO50IIVNJ4bGwloBC6zbibRtevTg1apnbir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMmcyY4orFFJr1viN%2BKtwDue8y58M8ebRImr8RPbWtYO8HX8iqDfDo0%2Ft40GcNorlp7GdhGyAY1TIdq0TrXzBF8n1JvQADbRnRFHUhWl7NaDtX7gV%2FpgTQP9HDITXTnxcOUsO%2BSF1fRhwrzZ%2BQftjDGS%2FycfIkS40dPFiF8RGKpbTf1FefGSoBLEydBmJJl7qFF1AY00wv%2FQxc4kIWF%2BuUPwrDWPDxwWNqX4BoiTqIvd9XOIKC038zZY%2B0fRRtyRzUEW9zCOpKjYIGkpGCg1X8FtuLgPCrESHBV0KzHa8J6ExJgYDkpuyjTiR0cH8qnSdxUXNxEKsTn5%2FgW9NgDhdYBOxNDSO%2BFmf6OYF5li26xXL%2FMHxvbwvYcxZlt3XZO%2BBzQ8AfsOrN8HtoZ%2BAALPz7k9Ziv0S%2Bft3fDhne6k2INuEbJtpSkK%2FzM1nrU0lZ7JaMbZqMcWBYQZTsEY%2Fl%2B6dCUol8axUBAKuDWcOi7LfnpqiIoIWhiqf3sDp3G4Ek%2FNsonpCLnrb9Sg1e%2BtmH7Ba5Tph7OyIg6z%2Fj6UEluYgf6RKwC1M%2FbqJJLOkNibhvMMgx28%2BOgXJf0ZebO5mn0It1gTX%2B3NaSk6PbW1Rlhs3g7NXKXBzFeIE9cOBIqY7lUBBO0%2B8iWrI3RdGgnEQw8r2UvwY6pgGwoAbVwXkCgT%2FknUUly1BZ2z981R%2Bx2CXwaC0URboU0coDmku73HOjOdwCEn2TPnLmNlOaDet1nwxek5ivwYWQLfy6OiJ1Q37p9s7xoyofPenV%2FAeP1NkQ0CfYP%2FhSLjlb3vOOINBMn%2FOtob0NF4MPhhdtCUWaLnN1w6nMpCJJNBxk7peazYAnQ1mV7%2F2DtQiaswbScX6SkN0VBPyQgGOA5NwreLNE&X-Amz-Signature=7709b42d55c7aa1dcd3eacacf84202c1c408e317a4b054fefb2c018564febd2e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
