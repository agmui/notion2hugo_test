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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAIOTGGE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDA6jPuc9YyMOE7B41QoqVvzWYlXU%2BVJl2b1RzcoLydRAIhAImi%2FhaLkh9InWa%2FWKK2TxAb8pJIxQoGJz2kgBkbvaCYKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC%2FzXblReSCDqvaC0q3AO5KBvyShuLAozhGVwYftqXXdvSnY3yrbcpQ54AXYgieyxdnrCfpa3mDZGnxWE%2FO4QELTyuxYYlC2EtxVpchJOpWxRLiDsl%2BbTKtHEN7Z9D%2FYzKiLbbEsepkHQUCHnFaL4AxsXJ%2FLoCx4eWFszb28pzvpksadBkY13F03MI1SW8PCABRXLNkAtBCnfl7dROh%2FNBkAvW%2BczHww%2BDPjjuIYiiO6Cxik6pfnz2Fb4JA6ixJTptJp%2B4cLpum8X%2BzWm%2FzQw6JYpOeOlt1hQQLpnoKrdpQ%2FaWf4ORkTd4M787X09D7LFIbmREVrpQq5Yse%2F1G0MSa3AxdxlMlPX8wLDf7pWoYkxqWcmFH1l1n0QDJdA0W%2FnYXBtFFyBzcDBwNemgMeqOKkONgmTCfdLDZGaZ%2F0T5zWTlHxOLCC9xBhM36wz3JH0QOjPouaHvkXOF6FRB2eFYWzwL846GkjR5FcCeeAf8bOg%2F%2BHYGNyTpwPI1VXxj1VsKa%2BYP7EoUVYlpa4kDcHwOEuTtmu7keuuWBSpfpJWzgTH5vOwZPigkRDYIQvc6HvFcE9S626ziHkL11H7%2FPy7fLEd%2FZHQ7dz7amahRknvDAHqLHkv55gNSJONIF5iuRvgTZ%2BIpHS2ulHL%2BF%2FzDogfG%2FBjqkAZOO96Ex4MTKYH6Nbm1KIF%2FKulRhLaNb4oAxGWQxX4Bu0Mx%2BT8kc4WkllEtjFbtw7uUSWMhK2m4makEk4zjIO3zEtARnQntcVTQpTMHRrBy05MCMfffgb%2Fds1vISR%2By5tQ%2B0cNnUiYI19je%2B2bHONa8912%2BcefAKZFHAD50LWXBlvR4foDHZpA4MtSNIDnooSYi44ADYRo5DFq2r3VnlCoZERb%2BE&X-Amz-Signature=2f8a3dbb97293f83a7e9c3bad7c4de9ca5b7546787db400689b68556cc54da08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
