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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3G5BXUQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGvU%2FTmgN37tLSaQpZ2SZzWjqQvuajjPNSsNrwDk%2FjUwIhAOf8cwT9dmra0mHK175xQjULkmTMDYACV1wEnTmhc6IeKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRLAn9P5yuqVRhieIq3AOsCjiyPXu4LfZv25MZc%2B2Juxxb0RCPD5JnD8N5KCgUM78dcTeSsi4Q1kRAbPGgoMUetpy%2Fh2t9TbfeocfdzluFNNaM7SG%2BEc2FjLQHdlSIy2QCnypUJRbzoy6V9doFKL%2Fx0CRl8HQtKcQilcXG%2BvZB95imzi9OK5MmWozDoGbr%2BjBKLlAdMLFHi3%2BWhgpi8ar6vCreRA%2F8d82oAJxu29kzTxPitYL607uaydGU0qWRUZEpgjthCzyxVxRys5qcSYWPPrtatcOdDpETAuktSjerAodZ3pTCESMfgnTEf3eB%2FY0ctBLOZEShD22mIjdZkFTToQjsYuI8LLdd1RKdnX762EnPbT9SRRhgb3%2FVPS1kfyZEId8%2Flnd5UoXz2wYbXhr6zw8wrN0wPqsN3Ku2xNc5SBjgGYtSh5FO2WpZC3W2mHNnJkOG2U1YQEyyZg6yUr4RUEfak1ZDJkzz6bd%2BRMYp8TRI0GiRlTHGrjLpyZFV6FhHP0snDK0oBKQHiSKHmICZrQk4BaXrmLJii9mx76TGr3bKDIHZp71V4EZ7vtXbPkiXiZiLGz6cPdF%2FNqfRf9aUIPNlW0LowOBNulmTFOZlMWkxkQQMu5E6dn3KJyFYnp5gYSe0gm2eh8PbKDDH2Nu9BjqkAbSVjLqlP5tUIYk6%2FdTvLZUzBgDueAl2gPUSuVr98breHJq706etohrIp4Npxf4FE5Du%2BD9rJZEozlaeNmv5c7qlktC3bg9dotlc%2B%2BMtbcDXgAphzEKUZp74anAbiRoc8ndQblcYggG4sqfirj3XKHBHrb3l41JRAqJCR92SMeGempCOIMu1j3fjGk3q856AWacVog8eMSfDf07SwQnPSiNQy%2BZv&X-Amz-Signature=7dc22fa31f38f39aa558d0f9a433bc7011f80e9a0b0afd6c98700763775836bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
