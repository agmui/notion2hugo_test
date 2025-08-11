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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6USHKOO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR6BTZSgZjq8KQZyLYUEwvwq7yfMMTVztqqOKw1KINoAiBh6e8lZA3uZ3LlRFFOTHE53jKhMe6eU%2BJuoMFFyzBWpSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy72Fx8lBS4KzSdvxKtwDChYDI8jFZauMLuYFYoKe6CraTn%2FhlwGg6agO94pYU%2FrLl101o17D4RsoEwpC3ubjtk4zrBmocJffiemGwf1PC2BpwqtxC6sCrytjTeeZT%2Bp7PpEurQ5BL9EVMHekEKBgGyZkqx9nHDqGZJe7DLiY2Q%2FFrx3aijG8KXnAMrBk%2BYHHq69y%2B7o%2BpIPwjgD4Zd2NIpiVaM6YwrQQ4t0QKkm0%2BhNFQSqIwDgjH6YQO%2B0qQytbUscmxnVjXgGclaIFO3jbRbh96gKRQJfAcXi4N8sShUob9D8vsphP6gtCbJ58lhwpP%2FpuqAFQ1TexbTfVkDLwHL7rznfpz8xo5FCpgAt3qMfinXl9zyBgzxuAHyrF7MuGqXqFoJ%2FrpD88xh4opNmgemobuXsIwxUBwsinOK0KQQqpb6iJZ4ceeP9l7MrOrUUXnd3nAASziFXckdd%2B6UP2Ngjqe5d4qT7St20fBw7SCOS3etBp%2Fm6niGA%2BdOWFpGjaqM11m%2FzWRI87evxWiAyZNjEs3pPLR%2FEZq9MWPLFcBzHflyJgpkkTReSDzjWVQUC0s5SQF7rJPVL25SZPALGiVRSl4h4aZuoGWTSBxiHkVc0IkOItCN7%2BDZyjwMplGzuCTqItt%2F25X4WjuRUwx9HmxAY6pgETWtLJcEKHM5t71blSPn5BtHKnrrcOaa3pxh5iveQj6oNMk7FrkRhIeGOzgep7yS0Tz%2FPQimZaczpSYGVEvCE%2BSlkOOye9wOts5fMIC%2FbrqRj1HarcEgrXuN10Zh8KJ4ORa%2FC8AlHC8vB169ShDEJBdcXrM9FnOclpiZWi28zO0mdhn4aQfd9Iv1xKQQGNhr9YFYTcJ4B9a2bIrH8LV%2BmrdyLcTcIw&X-Amz-Signature=0e1f133dbb29e4737fe1f6a06b5c3e69118ae2c8cb653d778f10f276ac2488e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
