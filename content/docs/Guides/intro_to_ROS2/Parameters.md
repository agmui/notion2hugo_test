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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCC3G4E%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIeS%2B7qE20DZfavPHGq6L2ZNa9AbFYFu7P%2BAEtLWEDlAiEAzFDRZYrU5mcgBZRP4z%2BeayDgu7rqVO6b%2FnXnhVyxNQwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCKigVNnnXqLQezcqCrcAzBcD7kAlLbv9umHDlATcnwN9uAUh6X%2FeYoxcK2MDXlzirtZ4s14PLMcl1p8qwmMnOCx7rfduw1W%2BeftdNBoRYlM%2B1ZNE5TvAFNjqITzwYVMtxWjHxdtR7Um7BtheHKM9Wvcryo3llnTkKK0ptCgf4z0ipcryfyo%2BvSDrrCq3QyjxkCjKGyzvOcm6D327ivpIedMzUeFzy07P8q8Sw8hoUGEv9X%2FdYzZE3qK5gfhn5VQ%2BBb7lJYtZwS9VMgg7pRQLu7gJHG3TK9UF3T5W%2FxTHTgw20WwbkWvJnBCuWZrdL5Rkq2dxnjkMQGIW4iodmhvCWsZMTlP%2FClltNsBkhTPfsknM7zlodh%2FGGgMnKa%2F1aa731ThoDIs%2BBpLTc3o3hqFsa0i20n380a5vA2ZHpI0xK7yCKgceAEiJnNXr6h4AQrgF5SUxt2sbl9ptJtU4zkfphrcmXgTfotBQ%2BwgrcFEKAlqBeXaxcD10pZjVgX7Oca7Rw2U5axLUGiDHMWQpp2%2F4X3gLanJArJz9w7nz5YHTHgu%2F0MAp2z%2F34DQ9ejSrtZPF5uJaCK06FPjKuDNEcLurL4YD8Yb86y9OtYCh00BdAZ4jiD0zNHL1jsLNl36Go0SZgYLNy024Jp5MdxUMPK7w78GOqUBE452AcU1YMGNyFS%2F4d67t4G9TONN3Y3O%2BhgT92ATp9HmN958A0mmGy63tx7MSbkcHrJLerzoU%2B79EUEnMXGIWpF58lj%2FWocxlq5fl%2FDKn8RQsjHVKwj7XoMbYpntV%2FITWs79v97HxZavE0NR%2FYDe3VO%2BgLELG%2FZAw8ajba4DFJR9FrdbVYo3xUBZHr13I7ZsFGIAs5oRZLocge%2BiizkZgYtaPOJm&X-Amz-Signature=ef0502cb632fad24a7a11a36a0f1f47f1f2c97b10d0615fa09c8f1f3645c12bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
