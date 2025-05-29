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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBI4PTH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzUrk5XMFxPpomUvxdLI%2Fm%2FH8smJ3%2FeP7kYsCYT1SfjAiBqnjCVI4GEHfZngI1yGg4V2r5%2F8cnIg8uQ5yjQUAgZoyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmHr%2Fd%2BW15y0BBDzrKtwDqQMRhssbfMxUvlqu78aC48Hm6MAKfAXxp21UAhTtaA8XQGM5PFNys1cOkt3CDKqsj4Y9MMGLIHUUSc0RwutC4eS2zyvAvoWN0VQA%2FQ174sG7JuVwOe4IkMtgcz8DQYtpYfkiVUldMyiy7xcDrYfR3oUO9AUcQP7Y1KOKQnzttP4YxhflPk%2BAt0IDWe4JqgCx2W9BURGGJCGsgTAonrHzlCjjSfskTn%2F6hMYEzqN2fZIwGaePLr%2BD5gYBLWVPolS%2BPEB%2FEcaImXAjoRX2W%2F%2BWFG4d0bqOEs3rzyUK0jlPZWk%2Bbusj0T2uoJEuymHk2AqLz1Rd63jxv8iwzIIstcDre%2F0pmyv4l9P1xAJ0SPtkcUVcIz3R%2BGzqHU5Z6tM1bgIrTWUTBtX0Zg3P%2F4nhYy8wxQ6NDRkyz8R12e4nEzq82okq9TLqHBtKkgKBaxjb2E509yQF3C5nAgs7pJBAy3LUfpDfjzBOOgLKOpSed8QUt28nih72cNnnme2zQrf6HYY4l3OLVy8srtU3y6krCMxRqLIZxzWJRQptYdgRK3BZFbwSAuj0A%2F7fQnpTZjhdU0%2BUN1T0K3ZwaeolEfpKCLj9DtQdobjwRC9%2Fz5uc91TToBFb%2BR6V4VLuwzDw6%2FMwnbPiwQY6pgHAcGB0RwNDyjMeN9%2BVT4RMzBtHuqSC77qXCl2yV4ps2uMCuXsdEw1MmX2xnRC0AjKy9%2BVNsjvbL%2B38kZNe47s7hnG8mpTv8MjTrHLzYt06%2ByatJMs4OyiuZs3P3pmjJz182ho%2BWrbzomMqFOGPBKE6wFDaT7gMyR0S%2FrpS9%2BfhK8j%2BQPALwizeNTgMKrA4PysH4NlujzIyzRMUyxVofWOpT9so1r43&X-Amz-Signature=50438f975190c64d302e9436ad5775f19f65aba3285d543a6a516690dcf12129&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
