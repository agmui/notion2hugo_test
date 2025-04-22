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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYYEKPR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDmxW7b1bBcM78KUHNRWVKmdnXvR3Cfp01KnVwNtJ2XlAiEA%2FmDipyBH8V7mADOgtsAxrn9iItSgzRncY%2Fy06%2BwAq2AqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvcsrNkBWJKbtvbkCrcAwlwl%2FcFD8OjLRz1%2FvQlwzSbvHay6m7tLvoi7k6l7OosaAqtbGeIZve6eEcEBMjV2nj80PnVuY8iU6B%2Buih18EPSqOWMZd1AzSt6VI1wgL4P3hGO6ewdhhUQbvByihcBTIsj50lQ19MeIsiJjhXg0X1O8ztuWtHu6fo4NceOnoDZwE1UiZQVM1cOJkg1GdE2eoFTksZNX2A9t8csLXhNkIbk6gEisH%2FxrWEXWSnYeZ8ZlnmbaTlHfp7sddGqI4cmJd2KuVQh9vu9hHbcEFSfEhheowM9oBWrDzJpyRukrhZJqrQo9AHDUckO%2FdexwDluQOeES0s4b3owiNtwEPg1PjdQ4xeuqejKd%2BLFoi0%2FEcAaWXPICpb4GsP00MjK%2FQDmg2Jr7smWt55eBWcDy6o8%2Fd0hqhEO5f1ocjNklzgxJhP2Pm7%2BadNX%2FvtMmjxN4erUL6Y1XOyEH%2F35so7oDCJdZZs4RFwxtSeTykIoTeULadMipHRkmR2aWBitIcNF%2B1%2F5cF5tC4xtKVGN4zw5YTaV%2FlCIpuzxKgpBqJMLHGr8Ah%2FL5R0w1HO1WLtkBN7r0%2BUmu5zKP%2BIYvRSH9zXItdzrk7Fp2y3HbRDUhmBvkO%2BPz%2BzCyRja7sVmzXZ505TIMJngnsAGOqUB9IKUIQgfLlvOOMazWgmDQZrtR0C8JeQdv2DSKxRVZ8ejwF04PvAe%2BR6PDAioXEirn63Cd1UbTjUIUo33pV%2Bo178cRTYWHr3jDe3W5GOIkiOxU9yDE9cATY2JFduwvkZtefRWbevGgmUtVYETnLpT1yk4j8525KhZ9OCDI1Jzo2REEsoHzDQZBQ7eiy86KKT1EP6fnshBGsiuD9rh1vaS81nVbZyR&X-Amz-Signature=e1a1f51f54757968d46f847cd64c8d27d8deca5cdb59676a3ba9a5a6a64214e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
