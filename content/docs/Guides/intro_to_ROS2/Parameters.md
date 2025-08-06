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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHGKFE6%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEPSW2rNxskIOT4mS%2Fq993Jp2O6Y55EJiBsC8pSwSJR5AiALK2Pm1uOAzQOqgIP%2Fc9WpNiefI3%2F6hs%2Br2HDfTtGiTSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM7cM576SHCEow%2FQxGKtwD8qd%2FpDDrsE%2BbJz8nH6vubsJvfHjIUhYXuFvuubqXwWXz%2F1Cj4EEtVw3vp9LD29231DazaH%2FbThPyDvevdSUxTB9Kqj%2BEClwLfQMtj0wDBXQ9Uos%2BeCqbvJDvP0KGR8kGp2ukGIVMGobXrQawDT7LsIlJ%2FBsycdsQrBIkIn%2BTBDvIW9KrzxO9uWc5Ues6W8exgwn0id12CsmGCYqXdzfJoaSw6LNcXvu5V8waR%2Fn4wlEu4MCEfzLVWvP2eKnInZ7cz5Q9RsUKcFP3D8pwpHTBfj5BIsnzBdyBtYIyuCwSk3HRrZ%2BB6ZYWP7L8xKPSAvbMBxiqvgR5M4ekcVZZLiVUJN6RVEqMKx8zp5LoVuaF1%2FGFxxErC6aymlgUkZPEAr8A6uhlK80yqpvtdHv4u6cXFqxLEpqf1oLWGY1Lai5S%2BkBJygntVnqm2v9mPWDI8hB6LLuNyXjYQIHj4iEUcnUSc049ltjEQRlkt9JzYCX%2BdXoYZ%2BXY9N8kOkVBZ%2B5GCMm99buedisStznyoCdVWgoQoeeACymmgsXmjPDV1M%2BA%2FhUWYLOGaO7wuFYo2RL5BZCxYg0jY6qlWy3Ff39lZwrAUmBs0zuXhAL8Gix70n6VmRXXKQ4iMNGvZwLPpvsw1PvNxAY6pgEZVAb1adqSWg2XpG0YS51SCVqlw9T%2BK6RsPGSjPMOgHiHnkOmj7SLDjFoSuLLRx9vR%2Fowzb6GWgKoVWAQvYrBOYCUkiqz9ITorECPWkpRlF8dZwkqflCrdx%2FrrMSAz8HbJl3dBfn2qaIQr8P0il3SMukzsk5xMuZ4d6tgReyeCmk8M3Et2wUuPayYXLg8FQXZDxbCMv12E0r%2BTSlOovnUbrORakqe5&X-Amz-Signature=05fedbfa36b7a27f061f51faae2fa130c8ecd23e36108ec219cad01830cd7dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
