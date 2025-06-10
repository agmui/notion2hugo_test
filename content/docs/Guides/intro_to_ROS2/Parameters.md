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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXKKY7T%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAF7FXsP6v4oj5CvPtANXFZaD1L%2FIuy0J2VlyF7fHT%2FXAiB6gIfOwYnZb5ulAsfFNKFHVOdQXTB7Xvs%2FiEO4yWMuuSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlOXnvV2RrcETIJufKtwDk9XplbYia7BkIytPAuRqGyLFwuCfbZA9x861whf7wu5I8Tx7UX%2BjZ4QRQxHuabcI5PwIsnhjlk3E1hKjkizwyyJOK0dEuHHorgqs9TxHrsXLlMzzpV%2FllmtUUSEG3Lziv4aD87SYIrUKyNvY2hsN4BMmNgqXmXaupz4kamMevOEI7II0StnD%2FhTCvzkfJ2EOul3xGYtbxYops9oh0eDYacxf3MzPw3EbKwlFG2P3KC2NJ%2FXsDnzdo%2FwtY796YHywDlDp4wKEWR3Xjo0pxq2CfkZTJaep%2BUu3s5BNo49sFFI%2BzHMNo0qmsvZdNRwYUAMYiGbmDkcaPcUaBVjTIpbJP6JbtYBdPwmqMw0mOvAg3xJ%2Bdwsz2omMGx%2BITr9DcbgYawhAECf8F1LIhspZRi5Z621zo753%2FP6aVZS1X4W%2BJAbJ1vtwFV4PiHw58Shmm1YFUiZyFrxzgHjuIZpy%2BYieS%2Fyz3XB1B9y%2BfTnhiuCLFW8qUfO2HkQ9%2FdDxlt800btKJyh87xT%2BFktSSGrw6qx4rL8cHcYzoVxS0YHKkI%2BxpGSSr4fC%2F2u5djGri%2BIUn6PO5VFtYo6tRLxJp%2FBOEgqyUW8R7bIjeVWxQO59La%2FXFkvthGK%2B%2BKWz5C%2Fbyi4w%2FPKgwgY6pgGazA0fcCNNTp5WAd%2BthUdv%2FiJ04OJRk6yC8flAhhNBTb3Z4VddsvYNpOX0vDyjL4TfwOCUZaDoB%2FSerYibweKfoAf7zXJeUVjqVJ0RHJqtFCnyYxLdi2uoswurV27yi%2FgI1EGp%2BsCdggGJ02gqXK6h8DGOFJOYjM3da4OsGi1%2BurLqgwpANHka5923pxj1d%2FZ5efZnIPjKbfzxhPDef5F%2B4ukZ93UU&X-Amz-Signature=8c56f1015462db5507f2594ae387de4d862c0d57040885484c33e360da372cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
