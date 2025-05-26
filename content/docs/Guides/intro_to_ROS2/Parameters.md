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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4LZ7J7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw5abvOELK03eVXANtEJAUvbFYWoOR5mFDLjDEw%2F64zQIhAKyLlgl9PehKHQ7oOLPsfNJ5nutNHBVWwpr9qjQ9yHMRKv8DCEwQABoMNjM3NDIzMTgzODA1IgznmJDHFzny%2BPaaYawq3AO9V%2BwPv9T2CqnwRtsQB6j14qIBRPO4yTVoa4eORnJXidIX8EZskQKHOojFTOOt47%2FNdoTtCB6tGk9KlX7c67%2BOsQNLMXMBIF6R325Rjc3JrWsp6XyUyG7U8vlbBpUvzF2vYkZzX0EYpIiqQ%2FISdqjx6y4Uk6sub85SNBs7gxRbFh29biLxqrkcoxgI%2FWOZNYhy63ZsSExh%2FeLf16P7CKEdB5m2pOKWy8wdCeM6UlupznZNBmWZCVt3tcyPginRg%2BIVREk1gM2EiV2skrVRsgS%2FmrdJGWsQPo%2BFKV9ZWJIgwguzGIlMg89YpcdQeatrpriS2VD%2Bef%2FJkRYUSCYQzTABBYlvb%2BcRkzpiAihFS9ADVKZoJa1xUlFAEEgwhhOQ3qvZof4hirR%2BboSedHrAuRZeWoRG8OVlJ%2BwWVPSM3ZcdrezKMDY%2FJZLBJ1QIiWbeGoZvh3YzzP1QDTJfV5Dck1sEOeyFYUdLxUnOoF%2FxQUssS9raUh3cHZy%2FfzzbxY93Ai7jkWfvrOtqlcL2eZ3xXXwMXCVrh7QCYeC13xXtJtd5vYQPYs%2FD4yiuQj3jHgKgqBNT2wix5ZyiCoowoGw0wR87MOlQf3nqT92jGG3FvWoOb9SRHJXtYDsiKL4PvjC0%2BdLBBjqkAQR1MGgexzohpdHtGI7w4J6xxSB2q3JXzAfk%2FxkQ2DjNs%2F4MPb3noihD33%2B5vKiDvmq82Pxkve5dx0o%2FwSIopo3dcoHEziXMYjmmQ8fI85FwnAfoJ9uawmxDRwuKYQ%2FvF7ZzePp61DoYxF%2FDfFXV0vKBU14sxCDogJjKg0%2BMXw6ARbfOGRgw4jEQeiiq1s%2BjkJtWJoXpTjziK8aMFLmaKJnDtdhM&X-Amz-Signature=cf39fc94ae4920e561e9b8f11e6cbe1456122f84188bd5b92c2803a1c5eb153b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
