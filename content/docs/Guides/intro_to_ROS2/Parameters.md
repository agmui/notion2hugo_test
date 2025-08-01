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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS7K7BFY%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyC5Hxm44%2BhQOgvTnC4pYcUyBNDsFpcLc0UGK8Xd5OYAiAJpkJGqf27WLtRnwyyS8Bd%2Bt7%2FRIxO%2Bid7j4zlyWeL4iqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAy8sNwnA%2BlUQjvJSKtwDiIzAyUbxVDtUN7Cv%2F%2Bgzz9iCfrFRwuJ68Kd%2FI6nNVQuUZlk7RD2RbV8AXiFZBuC0MA5TlEp%2BcrnjEKPXwr0RLPZvAcMRVtzwxTfS91fcVRy7xGJBUUQ%2B0dfe9zE4RaQ8Cw7JYDTjXfznGKvQiXOy81XwQ%2FepjA0gDY8dXQhOVASzLfjnNrFS7yVjG4ZzMIBEEi3QYZzvPz4fOp9YGQUYKPBXbzE9ignutVJxk%2F5wqAl2PGH0DCVHg2%2FvRwWK2tOe5svrd3jIJcbNJ6PTMENvN0DIAO3iGBr2Vx159yP6TiSSTqXMR2fQPVw4js014oyAKmKSSsL5C9%2FQ58arO22%2Fy74OBXqHLJxdYjzEL7p2Bq5dVIycdM5IWzkYNcyj9N0FEST3C1iRWcwo3ognJ007XkIb6yRIirKrC5O2IDz7VN9D%2BENShrPazrGgUDmFLwauXBVjzC8lYoibCsaeBtqELzI3MVIj3m8UlFEwzfiRV0XP%2FsIS4lAEJ7lWKsjOgK%2FE2KN1MkTYhwDK%2FyPSaXEYxmKbX%2F7v3flKMFmFpyG57iVo0IeDnYlkSAmih6vzetiOn4vAb%2BzmiuAgd83YXZFZxpuqBm1Jb3N06QhayEDltNxnxriCS%2FsTErNSaTkwu%2BuxxAY6pgEOHR5xRQdg1VkjJf8dsHbSRlDMiSpcQrWDNfv1ubICKMcDc4Hw9e5RYqPAv2QG27%2F5A%2B0sqXUhAkcf628DyhfAlEjOdTCk8rB%2F2qXeP3s6CGYka9emCruZvAOxzF1PXqhCS86%2BvOl%2FWa%2BfnOPaZ%2B6%2BByrjgeWArJOVv%2FE6y%2BCEKugacREWMDEMMNRHRuNMMccLhcUntBdyWn19D22e6c9jm1QMUcyq&X-Amz-Signature=40293f22bafcfaec6876e4c069c28454f8958d4e5b2c462b5c3b91778ddb80a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
