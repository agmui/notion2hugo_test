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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRCO7KL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQohdBw4tAqIPNBuKZw88937BOU%2BDB1dLUZpr60HC2SAiEAuQ%2BEXEEdeOFBwpWKLsOQe%2BjUkBDyCWCVJucf2%2FLQGHgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDGNrTln%2FQQw%2Fd5ljpyrcA4H2QoQhcX9AHjjZr6n9M%2FmkctiELIdbMzAt1pJrpG%2F3tF5LmFDwHbJY57Xr962%2B9oeuIbhc%2BOrVWVMkM2NvURP6nG4ZPI%2BhTwmuM1d%2Bjbbmnm07L36VMPCjaiIhqERA8b6lvApOfwjl6pv2A8592KsaP9pbVHaCX4S%2F24jd%2FRsx8RT2AnKcsJhMnfS4mmGCpLHG%2BIShT%2Bqml%2FEEIkCNJdrJN%2Bvayo3YsRypx3oy7klQBcYbrHyH%2FOBAxDIJbBeHOCCBjtP1NkBONGg44NtQHfRq00qoPGSwUoZH3gArC2uR7YBbkqGy9YQ0F%2F%2FDzRBMrwG0PRKwTYlRJCQpSrB%2F%2FauNT7v9DJW7GyoogJ1j4C3f4p6WwJp6gYa%2FLGCEsOgjR2dBoh8N0rrGhjbUx3K2cRN2tRtTzbqwTtzAMWgVVabmCjwusbcqO5UQ8QRICe9Y%2BDwNBiYQXqg%2B9CnLNcN%2BFb%2B31WeH31aoUHAbunq%2FAtAJb%2BDxzV8K0TgfjkttPMA7kMDmLHx0eaaNCIT0T5rZWOA0S%2BlOocc%2BrL7bkBk7QPhVTjaBnU20qDPCmy6S3i3EmpZA5dcQlcs4nuaChIGyZIzACxAVZlEIcUUukjWLOvLPsSf8QcP3%2Fk%2B%2BmTteMNzhgsAGOqUBqneduV%2BrHWE%2Bp5wM9dgiJIVO0MvMWXYdIAPC%2BbnC9C9D7ZfYMoJZ4zvDyjSZ1EMwSvxLKcJCfHcDNi11TWXssqV399gcppn3VZJBItTi6hARE4RAbciYNE0Xu5kzrekL1XxIBCwCk2nep9PnBU5hDx5fGwpndMYdt70UH3a0LXc1nEjsmijXbxDqmS%2FI%2FZ1vvBvSxOOspbMIaEcdTIWHIjU%2Bby6S&X-Amz-Signature=f39be49a0221355b9a487f4eb353803e49c94a25139cf7dca1ae551e288b9468&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
