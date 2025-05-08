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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OA3L63D%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo3vaM57GzVLtQJrVzCLqzIvesTN5JQ3T6Py7hG5advQIgIo6fUGI%2F7mF8H1zTq%2FDNRV6b9EshXZbAUFrn6MdtM98q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNLEyvKrI5N5ZavS3yrcAzNAk%2ByCMjkd2yBwvqeVbJYf9dnhvz%2BMMm9y9dH2asfmDqjBLPK3a633jLVjUmdUzdwnRikf7fFBDq9bIL2pZTHaJGWFj3ZNXbfNiQrKqYjC4V7Ly5fQemosnmeTTkdllYbICmQcCbcki%2BEG99a%2Fdw255pS3RfpHJUmDJ2wOAjMYJ%2B76f72iNXKOPiGIq1%2B7hC2RPZNO5snefyTEgWtx6gs0Rht4n3%2Bin0PR9ws0Xu%2BRUJkIwBz%2B%2BVufjxGh%2Bo2DOyCsIrU%2FTs00rcktsGpL3Y6BvZ%2FEk7iSM7xj3gtEBLWK41NTMw%2FaiAhgXBo%2BKrjTdef%2FT4XJFyYV90I408L0bcrXOjQb063XjP7ty1k7vKtU4VABYssVhN59ttQ%2F6IbvoWuiNWQHJkVxmCLEQLae4hAqs1QT8GtQ6W5xx4b%2FS7RCN416UET7owXJ%2BTYbON7EBM%2Fx51kPMV%2FpEhkXb8NaUTa%2Bsb%2BamWFvIN577AXEI46Rw0OVNDCfGb1MrIWHY%2BCtleJCFSQJGoYmWHCsbpFQqtGaALPOg%2FwU9ueuCxNd4RjvCr%2FROSZ5kwZ8N7DQW%2F9QVkMTt0fKo%2B4G%2FC6FT11agQjK%2BZLG0wlkKI%2BPnfnVjOg713FW0si4RddAUz70MITK9MAGOqUBkvWF%2BFh467RqTX30ss%2BLZcGkzFwN%2FlzmbdPkndkDuSFwdVAz1aUjcZpfR2nT7idnQ1eWUqm6QWoMUu6T%2B9e%2BKFuALuPHV8pEPqH%2FM1PJMXaWTpYNt%2FbC2tfhCg5nPvo%2FQ8rVd8yXhRzk79Y3OdSpNKrV1hdnEQf14TaFKFjkPhfJs75P%2B6LZRzqSkDaa1DCZhYAyQ7UA5k27D9bodF1oG%2FjAfdWc&X-Amz-Signature=9cafb47b15f20061ce564373a80007bbe8d1589d0044c50c6edc89ed9580a151&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
