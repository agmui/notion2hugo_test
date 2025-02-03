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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJQOEFT%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIH2X7H%2BJUj%2FKd8zjGQAiUZ2HYqXdpvd4WH6m%2FhF2DPxpAiEAj%2F83xatsyp5EVeXBT%2FrkSg8Rj%2BpU9h1BYMR7U9D0g0cq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBXmGGG5YjXTc4TIeSrcA0WgaSD5crTwLusOuk0Bk6MJcTly6OYoSjP17rAIOfBbFlhCFBjqWxYhU0HyObIN56NgAN0QeAYjXa%2FKKjWazR4cperfY9vyCZIXVVQEslOLpnQGfPgo2Iak1NDcl9QmPsHMR701tOz7kET%2B1JhdZtPJEwW5LNI3ANa2DgfeglvS9%2FWWtlIRSS9CkTVuV4E4SlZmlwtZljYXJamj%2B9d0GYBINzR7i3eaw5svZrx0g%2BN4JTV6niSenCi9ZAJiVbJ%2Bst%2B8vIyF054blNjm78FJWEjKVhDgA1wq2vMAthdRZqIMVQj79OUn1nYrO2fePzhFCY1sD7Nyrfm3M7eBoyuzjqfRU5YCcQeVUAwzlV4OGnsXl3geZhSjUbE3UEeTBGlNYdhEKqM1bGDpM3tJeqgIaiRTUHLddXJkYo4wEsiFeeYTW9CjVbXixueq%2Bib5dHRDJu6XryZktXM6ips863Hk7A3buOnNVPjnNPfqnX%2FIQsqdwVH8sJSjTyiD%2F1xmKiNU0FLdkRFHZ%2FxetTefJcJzQP%2FwuQarhux00l7cAfkdoZler%2B%2BDRg1DyRhoHnuvw0WfwqspC3HqR%2FuVfZQYtA1XwUxW3gkMe3f8EWmIWV93joY16zcYiV5YkHSsx3akMLaFhL0GOqUBd9NSEngq%2BkTSVsxtQeZsH8MDUiX1bP2jFtuBO%2BcY6Osxq2%2Bc4bB0Fzi0jgZy%2BTmIzrRp3BmhqRpRdiyGNUoxHnZhs%2B%2FfhcteR1d7Cz9NiUY45FjKKf3e2Oc7XMtTuykkGywzXQmf04Qk%2B3FFzBsvKbUwd0DtTRL%2FFRUDprkVi%2B59iT999RMpBe3721IdsY4fHyFlv3bKgR5vSTaLPJW3yVaOuSBr&X-Amz-Signature=f86173d9cbb9c7ef40404f989003ffb4bce122ee37f08e787eac8bf54a72f257&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
