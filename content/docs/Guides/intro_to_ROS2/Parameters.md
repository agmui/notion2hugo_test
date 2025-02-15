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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7Y5MAOS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAPZDX2nE1S5vUmTJGlwLFgVN1Qf8qFVL2dnCU2Aaj7JAiEAxzaYEN2ukmRvBhuyWyR71%2Bx8pqaaByUBNLAVrqKxjpcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNeMTxakazX9qlPNnCrcA6Co36h23vWLCWdqTFgfqk3V05xW38YhTzadt7yeQ0Iv5jnLgoYTslPhf3gX%2FlBLi5wPlhPalCzsqPHHkPxoGNauMlhREy3Qck6vlj6WrbTnMrx6QhXswKz7MnUUJk2iL9LnA%2FPh0DdutHE5h7UwKpZ0I3Rpq2ko8%2FQ8oP18Dm1CvQ7d1jJqGqc8ye7hzIqCkKDR6Qls8uzDw9%2B1bwfFcT7B3YlOi%2FPrWHAiSLFjRKg8b5BmZJPK2hpUnI3d%2FHP0eLm2OJJN9PTzLN5%2BmI17gpC0IVFSMA3faE9pFdwA36h%2FNurcDTq93Q4uBYv1eGvJIyWkzdvSvEXcHwfLlv2ORuq5jh4K1rvhdeFTSdHXbHh03Ug04gkIqiIXhTq6tD3oV0XU7bfYIvu7BRNWSK69KARaB66QCLiKUXqBF95aYiEAQtlVoh%2FRg3UYstJ5x%2B3Ncu%2BsY3tB0qalLNIrR%2BSJIeLIca4ugWlmNshy48VyZiW9xx12xEEx9%2BsVyCgDZ3qzqMWG9Tz1sDfs3oH%2BHi4wGI10tid1YItPZVRHVWfCl8YumZIu%2FdGbX%2BYsTRHvC1WgtkmtG4WtrDYfV86O9MyRbmhgVmDCIiYwsWKfxT5%2BZL9b5w5WEu3XQwJE0AlnMP7owL0GOqUBbhQxWk0TceiYK6%2FOUPI2JxUPYubo2v7N20kYXGw84E71jApalZe6tJlzHnOB2VFwhpvfcLQ4aqQEWrk%2FJsLoa7a5yu3uyPkQVpcs9yJ0D6n7Nu8lQgAYmiqDCY5%2BdG5Xwl9XgWgXJK9jSJh6AtuYd5GlLrIA4KO0soiURMIB2g5sqTSlO5VEkjP5fVpMGDllny3FQrgFWC7tuwf8ETEbpy59g2zD&X-Amz-Signature=674ab49e5212a0dc8fe068264d331038754b393e3f6fb0553930730ababcee84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
