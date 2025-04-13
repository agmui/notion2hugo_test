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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PZ6CPSN%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCFD3SWn0OzOIoMGhqfYGtKwUwUI1K7o80bHpYNFYvTrgIhALb1tmdNS96k%2BKumuoCiFrd9u0tWbmWDfJb3RtMvPmsUKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCmMnk2M5hhFJob3oq3AN05phKqdkJfvokBnX278cA8Kj2spGCb32V9f8uVQyUdBEWRdj6KVfoVsXVOZM50H9plGZWNrDrL4WnIryOgCjeoLpIIRJ5jJZ9mWoDg0x7RwRWat9qEAtT%2FV9MVxVBTXocyLO404MIkpnzpR3O7gDi4M5nH2aC39Ss57JgUpPUYwGfgvKQ%2BVmbSYE4yusF5xZQgVf2HEJpqghfldxbKldo8JJqRyu8iHsUMDJrXYZIZAw00ZJJJvlRoRPNQ2QwrLtMs2C9lxsijoPtCJ5wpwA%2B55OIgaELB4q304W1Pchp8K86iN%2BbWG2lwXdnCZMaHC46B48h4lhGbivGqiUXwOpqrecN67lqfT%2FScjbJgb6IuYr2XZjXjboTe8LQtWP9VxGw3RdnBa%2FzDhmAcb%2FSiql3zjyL2yCCD592PpJ5ZoSJ1x1E%2FD7PkfZeId8ouJFzLn7aXnx12F2fqww9Qeq%2BWsC0FTM6gaBnYhohaJR7R7xXO%2FK276edGtnQFMKYTGvbzV2UUMq2ystyZ%2FycQPARTSSEX61Eg%2F3Nx8Tb26TZx4fx6h7sIIxg%2BnB17RGOqAt9ZjAnMFuah2F3Q1%2FhmxT%2FpXEz7xNHjvK18Ni0YwcoscbpYe7tabxGTpGkborydDCsve6%2FBjqkAYRthwCsipFqgjmTN4cCI1uwadXhBVreDUWweRtoptYuEw4zHzQjJhI115D%2FJNN7NtTbOyXu0yjUhe0US5j1hQ%2B5m1XIWz8Wvz6rNjFepyCVfpaahNE1%2BFttoPgQEq9aHgK5v%2BQJI0DvFdcjRrGjq%2BsOeDHVYmZ3ibH%2FHVHBMKddiaWX%2FmnAX%2BJFlxw%2BUG1FCTDG19TRePzoe4pTWoaDp%2FNPRWa9&X-Amz-Signature=aac94115ac68392650bbe0aa5b06ca0d37e0cd3d0d0091bda1904a4ca9d9e421&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
