---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Parameters.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDRGOMTE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCfm%2Fz9fBN8sUaG28AUNWbE3bBBhs07U6O9jc9yAjed7wIgTeFFlYOHzIbPeS6kPuT6s%2B9QcB9FB68xgK4uQu1C%2Be4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB5bT9epcttqDTvBZSrcA6L%2FO6s9yW5AicNEDKTVlcW%2FLtjfuqWbeD3Ckaz8XYTj8BsuUVQFQj5buWVXL8YAirLTUUbx75wvVJvCweIdQKRbxkUg1BieNIyjdQLfRm1YuPMS4XNgF%2BibQlFMqvavGBwgOGAVD0F6X7EQajIG7PMku91tCBd3i18biXxMB7Xh9I4QboDUvvp1iek%2Bx%2FY4Gjbcd1Rtx2m9BTe%2BCGdawlfpYS7u32nPbHzm2%2FqMW3TeEDDdms2lAI%2BJFcJ3vrRx3i0sTmfobE2evZVJaOd%2FhDnkvsxwd%2FZiWGJ6UbUNMSNilAQTLP2GIShKWHuAY3MlgIZ5Axekz9iVVjooWc2%2BxRz3SK2BGWC3dXXJhr9XrU3MGg9%2B6r2I5KuGSo7XJeW63lpb1soa%2FtIp9z2o6u5QDSWUZzt9bQp95pfOnutVZ3vLc3hc6Tln9piciq8ziHqC7I52jTAnEvh4%2F0yClfv7zjVNKNAY%2BNKNh8tUFEP56joMN2FyKs5fe%2FAzro95pvr%2FQa5WF9goL7N7y%2BKhAAbBegDWYNeBhxYdQ3KoKijh3vLie06XX410EDQTmUxlNV79g1OyDDAUHv6Wkx8ZH%2F3MURWgxAnip6UFyDvf5birVLLawWheBLVbs8%2BQM15IMLyVir0GOqUBDnje0nggflyLwiCt4%2BwWSoBhNT2MO%2FPyofXdTrnx24o8xYqbXePKyBc04oSA9uz32HcryzrEIXZNrdBZRWxvq3V8a3huiTNlWUCLfi7oK%2BmG1oURkumkNmCQ7bQE2M8pFpKMqW%2F%2FP42n8ZyJtD%2BqZTv6H9%2Fobo%2FZhI4GFgps14SA6GB50BvEz%2BJi71Yots%2Fo9U6eKGDH%2F6aYP6t5Hgr6FR6i4Vky&X-Amz-Signature=3b357e0cbcf06fcd9800bd55fb135765f4abe3c68db4be77f2a75117d2bbd6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
