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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVFGFZG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDt2Yrgd3dBc8B6zcWc0DP65OJ4%2B5ghfe4zoBrhToW%2BAAIhAPzvBfsvhBfQ%2BhKJ%2B%2FVBYDKqcptcrA3v0lQJJPpYqzELKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3xrKD0orVPNfZhosq3AP4yIOPuZjB7xQMAo702TRGMQu6DE%2F3B51p46iA0MZqZqbnR7vtbsN7pw4CQ9dWu377BZLVV85JyeUEPYhshBU%2F%2FiKNhba7PGgKJqRXj1eIc7SdXbXrH4sCayXA%2FXTyA46i72W3HWmKojMtZkXWk6DdDRr3JZbUnZdOmvkAFQx%2FhIBxIVjGx6joXvsgPj3xB7FlnNomHRZ7iZrD73zwjtgPJE0I1iEOrrFxF3y0A2zPoAj%2BJe4ZRwqLV%2FWW7DCoPd5DT%2BTAYa327MhM1lbngwBwEoeacU29OQ7fio02uqgjT6wR5OPjL0I4KYPgAQc4oTtBAw1jm%2F1VdBN74hGnBP9V3JOZTGQ5XIAWub3kEXcv3Wn9AnV9uqZXVcGtBH8%2F1VP1ypzmdXfZm1Odq354gxrfv9CyvD01tYPzX8T7ygOKhDH93Ua8dQweSqCL6OVYbdwLot7dL9hTUboG7t9v3Ni1gyy7OD2ZQdKOxPDCB%2F9nhhe%2B8Z9zwek1eqoUl2EXxs7W%2FY5tIbhKllVjeDvQfagKlyCA8kp1BoMd3hptzqUDQIKAz48nAb6Cq0rtx0vaUAzIR%2FRAw%2BITgKGQMlnS7BhdWZmHq6D07h17gxheRvGYBXkFBoAYf00aUQ76xTD499G9BjqkAac5Bb3BikNimau59%2BsAJ33r89sCg1RIoHy1oC5RkDV2TjeyA7l4guiPEh5TzmQp0NvrU3eFhCZfH9JBoYfdBqcAIiUs8hKB7KUSQZxYFz2xm9H%2B6yZY%2BJYftz1ud249FaRvUNplA2BgREj6sVm5U%2FgmoJQCPFZAjRK0WqYRHAwZS4biojvIVPuF%2FeqK56LRM4gASix5lDtwIJyV1TGtRNNoDQ21&X-Amz-Signature=e8b5ba7e67647df64f033df0f113d8a592758199453ef5da7ef1adee0a64be3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
