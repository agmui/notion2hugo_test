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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2Q6MXMK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnE4MWRvNy%2FJ4aV0l%2B9iBeuc9ZMPY9fYLqmLQbKVJVxQIgebcsqJdvq8g25P1H8%2F2cPfZg2yj1MPyIifdsxyeAGWEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMBKfuV3IzPOK%2FcLQSrcAy4CT3R0pcoPwPNu8AXu0yvibNVVaBmyEko7X%2Fa4mtWJp9lXu1Bvk1EDqx0MJG0v7TMJ94bf1%2Fk7%2FZAhFObXZOmcKg9eJfqhVldPKePKbsIKlhdfVnzi2XdDtto44W7V6ZKjlD%2F6xpucM95JNAhIhOYU0DTKFnSsvTOUqGrN9PYy1EvVrR6oMe05yShFx6RFkrWJDk50leS2I8VwRr2IoK8wVHfNfuoOwSt3YtPKueQBkjIYbDLW98YvdhQj0y0DEXeU5HOrk4k9yEhCHOCI0EgnwGG8NM%2B4IFLMhohVMtCngS7BfKyVTw6S4MAkfh1XSJr5VWwxIVN7ddNe4RXADLdiE6AdTplNrjosqZicAClMsEqXrH9Cd45Vy8qXah49BN0EsM0ZXGaWJ0I4fESgTzI2HNHF5AeT6tRIUhpvie%2B%2BQsgFMdEBfoCktnutLExJSkcZ0M8j%2BC5Te5EYwdLkbyO8u3qXp26xoJYo3CN3WL0CGxroIYsr12Ia4vTgcTluNZqxzDI549f2IUiXN5RWXP6d%2FUhZo7ogEy4Pv0bvCX3C2bDYkL10tB5DxlgKWxLNc5R%2F%2BSBrie6rPL%2FrvdyA4%2BQCT%2BbxLdGCkf%2FBWcDXj6cJvNQEt5mPNhllP4y%2FMJnC8MAGOqUBwU3DsqHkSeGEllSnpMnH987MgRtN8d2R95jDW3TC0dbsrXWjB8fWbcb7rAYhkzlVwSeiNiYMH8KqiUV45X8yNz%2Fym9vAbzsTLQNsu%2BR3cDo2cMlf1Wf0DTk3Qwk%2FUer5DjceMT4wDPYCx6aLExAFsL4%2Fz5NJY%2Bz5ABgQEun6vzWHbtkdx2ui9OLUp%2FsI6zE8od8v5o20hkdC6htgujCEIH2rWXzc&X-Amz-Signature=02604f7d337c4c32cac79d059dc71aea0a8f77a00de67d2379012cad2aae9546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
