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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUKQ3KZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDprjWs2WPZ25Nk6HW3WLH1lAeXNsISu5yHEwllPY9UDgIhAPJLZzJtV6EaDrL%2BVF8lAZ2Ed3WL6YPt65hL1Wj%2BtzBcKv8DCBUQABoMNjM3NDIzMTgzODA1Igwj8w11scr6yCoTfm4q3AP5qbpF0ja%2FnQ77f%2FRdNmauuB5qkUOnuQWPdyC%2FLjW8dM%2FDE31SgtjKFzkfuArnjjIm1smy0qwTxRcs739jYOJJtBI%2FKuMWWOuc1RD9nFMTSTOD0UFpgWj16uy%2Bt6f83J%2Bqm5%2BYwRIUYtRoP8Zap5wcP7ktgp0KibZzdnUQeIHF4I0SwwZ7ChETmWT5fmpTWh5NtgwEbzzVeumaorvtQ75IJS3z0q%2FQJ24qMx3WPhzAeAyuiD1RUkkQ2kS93ddjiLT9%2B%2BRIzMzZrgC%2F%2B%2B5H6hRkcKeOkN2Ucxm1ApMw6gQ3ROD5bbt3eP7ILgKJB%2BUbwM7VYiHvNPlgwl6UckwqAznzOolIbzJBvIGVWI2FJRvzIZoGeZ%2F%2BhWuSWyazFKmx%2FpG1QY4z%2F4DSj11QPYAIrPwDS1m84k%2Bf8pV8Rok%2Fw6ejzteIzdacQ5sZ%2B8jRFkdoE3UbLAuPd3IgI6C5br9Ayhx%2B6DX879qtA5KPqPyiMLHQoW8OHTGcV7sB9xMAe8jQhWDAluSV65KW9Lo1JZO9qGizipndIkaXcJ5GoxLX5muPFuX%2Bh%2FJAWg5xU3bIreb5BQru2dxYd2lEiF0EDxYEPRz%2BR3kJmNT1ERkzKMtJ9S7D1puHbZT0ZbTm3D1ptzC2jeXCBjqkASRwOmNcL4ER4flRXxNHpFzmrt7PzXUs7dHMFiTQkKt9U4Z8aZBK%2Fv0dFnUXW23DUPPb30msjfCqAKvTJ%2FSeMmMvaT87a7Ip2jk791LQvxyaau7lmcoTATqgd0%2FfsqnTqhQmnIJ09dyYhaK8QQDzlV9jS%2FWleScx3samBA0W49aK0Y1tjc2c2BzK9fDGyxN8jj4FcNZZFJ0jrhmpwziMdrRNxiIV&X-Amz-Signature=d6495f8c4f9712683c3d90f834b80234bb420b7a9def0f01d4f62aa0447bae45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
