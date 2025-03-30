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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TVL7R4M%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDHWkfsIJ7K74uHOIkFCXwt5Ayr03JL5z9Eyy9s8FkUOAiBf31xf8RKSYztVF6yTW27jLMEo8PKoHQlSzJZALCO%2F8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1aEoRdumcnkY%2BEOHKtwDcganjKhy%2F2K1M4LwOxDdK7wdm1Nh%2Fak9PErrast4t7UBe4HPaVtAO81CXhaKYULIZKXwfhgsTQpJ2tKkgwT4eD8JZKAds8R6G6p2SZHJZjklhjhum9rYnsYctnruJClMOzGUyhtsSj%2BIbJPL4RNnGKMaY8j6ekdjzkbmWRRHVw4SRkLad8Qjig30sD55IwRI%2BFoVuyxYel4fyiWnmCBfKmZTS6yFSjfDX6UNqzaz%2F%2Brda3iBycAx1GGAfyc1CQ7vSh9iDhRgdBi2EJgMZEjqviO5wjn5Fm7UwArrPouCfmDYnLDATLlcxJPSDoqAXCWC8LnmLMscbEDLOu%2Bd5x0Rm1QGh6uIdX8ZvF%2Fhh8LrXc4DC79xTxv7yp5DjHEhNd6NKXF0EtfcEcf044LSK%2FQuiA24uNbtRzN7aLxuiZ0zWD1%2BU4ayK7Fkf6KMyC5FLzFDku4vXRV0yoUbC6Q65vjaE4ZvzmcCIqiThX9eo%2FXG1Wg5Y6HKGRsk17rE7xbuQMAdRb7HCVojLn6RM4zYsWu0WQsCf0sGtOhlHDq8wFnfxETSyqLtPG%2F%2FMwgKWF15BErNtQHLCWmV3oCmTzDtifKca4I%2BqjnKSzj%2FJ2WVaomIElnafTdmz6pT%2FTYXsYAw3%2BmivwY6pgFp%2FLKHE%2FtKLulM1p4bJkOMnTXa2gNRpVgmxf0u2IXfP4JbWRyEGOEa7VEAcDx1yiAQhyeOH62CiCJ%2BnsWKYdJh%2FXTs1gphPOV1dZ%2FSAFvRtGwtPNXGGOfYItF%2FrQjlPBEputV2YsEy5Mxelx8nVdY%2BqLO38SWoDP21FwT7DcIrFW2aQ66NUqea8sG6nwgXSBHcvcrOSKJHo%2BRsv8A001mPFWoEn6RF&X-Amz-Signature=4560a1674557ae013d3a4f162a439abf51d67b8064931f21a217bef5dac81dca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
