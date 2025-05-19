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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHMWWA5T%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqqdRYixZa37CHAFzpbytNpKbyH4GdZPadz9HsY%2BC%2BCAiEA2qaMohOKpUHH9xCrxYMahnJNccl4vBKbzmETlX6SQmkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnsdanx6QrPa74QkircA4LmkKUQZqBbRj%2BEP%2BoPadQd40AGpIfTLja7y5ptlC8FVlwDp4b%2BqffOlUAZScg1wVa3gicv4krFMDG%2F7RzKTIXxWKdWyPYdbTZkJaGjMRXHC211UTjRcm0PtEym74%2FK7%2BWVLtNiMT6iF0tDNvK%2FAlICU6qQOHaa66ee95AkAzESRWoJutDMLvVTkQD0wqvfdFWyhxHGWGM0llGgykqGdYY%2FJu%2B69UQsbqfLxgEMjFcawooEOIG2r%2BEVCgOD5ggwtYNy2AYZyFwp8Q1CJeKXRqo2jBcD9tuGr2OoVFZUaAXh1vWdDzScjillGUqBVWo28ENpCwb1qcUC%2FiRsuu%2BMunL4nKGyTUwLfDX3IjubfvXsJLQgwlVWjJbrudIZHISUqp86c04kY7kpS9p2kz%2FTdc8ofNy%2FQJ81Yixq%2BFWdq5ZawGkHvLmSuDtqDiSH6IYgt1oalr7Ovugh7vxZqvWRR4gj2yHNIRObJQlR%2FqMDiPTN2%2B9u6kLgnZ98IitNOqkv1nXnjG5y6vdelqrN6%2BPDa4hRzpnJLgIMYWPFKT7eg73UXrJWiqhcrzHMtPlVPlvw0w30yA8GG06R%2Bp%2F7IShpvKi1y7E08l6J9H7EsN5nwDOBDY5R0gmYw8vlZQtqMJvlrMEGOqUBYwGxPjBezxHef6A%2FhgZxYsypMr8vXDAPLMkS0x42kplCuRBIjWy8l3bTma9OkYLTiKwqk2Er7fA4alLDE8NMMiumDQZF9pw6cYz%2B5V2Bmuwgk5u%2BsPPtt35X%2BvPwnSoaPU4ammWTOrt2frS3lVuUrGT0AMN42hnjjJLFEsWk24X49adh0Mpc7PfA1LFq0a82CBrXFYf1wr8ClRg3E%2FKP9Oijuwox&X-Amz-Signature=f38552a4f220bde58cec2ae3b4c7c54cf12c00003f4666d42e934bc8c052c208&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
