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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDFCREE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCjJNIjkhHB6MYFrUMVhXs65NMCbvLHoVQbqP1aYVIGYwIgUfy7K7CVoX%2BFJUPx6OPtYXID0us%2BdOxKxCL5Kp36wekq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCn0eqvLc7p9hne84SrcA5WQGwa63V5LRBP0L9XsNrtS0jlBy7r884czV7Hhvh5mCwhyhnRzQgK6EIAwiyweIQc9F2XziUjueVZd3bwbiHe4EMqEUcou1sEefWXK19a%2BBbqdyuhcZJD%2Bh8yS62bAmmu%2BFsWK9u%2BGokfOC4%2BIL%2B24fripFtcHF5GGt3e0m3asNMpJnB2GJv6fa3HmjYpAw9xb0ZywHu9TynIKYzihzb2Gc2YG3lmbxsCd7%2BLJRk1Hex%2FmVs4wya6xvsZtfy9vZqnn3FJdZwVMhzhAGxvYNudqgrl1Bu6ZUDmU5RoUYTx7I6lG7FDzrRRanLY3u7np6IXR%2BGxOqPkhzn2SOI7mU6dBYjsmo5ICHTKRRyPNoCy%2FTzUvibWWmPiFhalMstG2%2BKMBq%2BAoitJ5Wkr5sNpD66FEV%2BJszrq4Te7enUlHfaKU2vABwqnR9qz7Qpbb1YFadJuElFxuvWs2St5LRT%2FIIABeegrO3Gtth8cytL9iuIi9GZ9M%2BQkUsqjJ%2BALusSisFJmOOjbvzHBoyfAJwNH9s8knGe1%2FrpvFbbPFYaCOxaHg3pktQJzvGmj3BpVHR384aEWd6T6Nr42CnYkRT8bSnwyFIv28rrXrvzSJ4zdlKajDjsUwjnfRek2Yn0aKMN7wy8QGOqUBQVFCVkC%2F98UYSOyL%2FVh1d6EVM8FLFBesLs0a6ISml1UhJqUW0ZHlw40URRQa9GYY%2BugQLUoje%2Bunuv4cUC8iLyiotVQ7YsXoY23TQaBoSbmwOQrDuiPMbiRCxQPTGBRkpSihco8ovDvqdHJXaqvEYI5cmeZBcpt8htzIRbpbJr2vBljSrbU1e85GJt3bC4p6lkE6a729PxeCnIKdRS4nJ5ttpEzP&X-Amz-Signature=932057115eb7b803fd3a000630f896a66a037b6fd80cdcb093969340f8c8e8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
