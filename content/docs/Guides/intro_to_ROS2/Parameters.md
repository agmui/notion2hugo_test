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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PPIT3C%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDmefVKsOGrUYfRWgr%2BU9zqhKZF40mXwDo3Ztvhdrn2AiAyruJcwchD%2FIjP8Z8t%2FujIxZce8G3X4savLJmH5uaQVSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfC%2BuyqOIQhiciptjKtwDCfmorl1i8BUpm6bYmKoHSj1PhuzmCiuDXrCm6LstuDPaH3CxGAlzWXvSjnmfq6DAz72Uyptcr7SEhu1KGI1ndupo5%2Bv2mW7vTd%2FdmnDljSYfkh3bKg73X9wW4UX9jbbTrARKfOLqGDAn%2BANltpHQOdXr3rL7ftfu171mKKKYgvgqc2Ag25r1DZ8XHH827dNt8WZOg6wp48Ujrv7DLKEheQ%2FVvD7P4woprMrFW4mxsv0qY%2B8emWm2eFx6MWe9W7WYEuGRdb1eybzeEYtDiOKQ3ygu0Uav1ErTiEyCKasWfoy4BBC%2BLU%2FJOZqXD358%2FfkLDGk8uuukV0Z9FB%2BJgg%2BQb6nnCVlM%2B03U8yuhqjwWgeLB5avQ%2FraGiRjpJf4WZUOCaaiSoP2AI63S%2BMh4uS6iZw%2BgLNwGG3HNTs1ix%2B5yoXcqzSXwWp%2Bb05ZrePrwoitl%2F5o5RNufCuGO6eCAYR0kox8T6RG9V6btnoCbfCQo3j43MgdGUQBn%2FR%2BoPAce3cD83qgKos4Xgrb1YVwEPRCRRF1QdF4TyobR3jcMFSnmHwQ7LRvWn4dT%2FV1CURtfrieLrHVRW3fWSt%2BQ1uo%2BzXDJylJ%2FpFxu2QhxWFpvBDpXKVeVLNAJH4MnIl8kh8cwlMbqvAY6pgFl0OMQ335WCXbtSTdIAyMCxn4z7q6YQj3FyOIdGeXg9SUMz%2B%2BinffkMvjcLKll3WS86G0jurv5I2%2FqFF8fN2UgRPgxtVBfiXBBBnezbZUub1ohNEQ6WYypb6lqdrYOtU4Af3%2BGFySISmPJWIgpL6Nr0rabq9ss2DRMNMAd7Pb8UYtO1v38djEx3chKoQpqg3QEo4rRPIxCn6z1gs%2FnKCXkqeLqfow3&X-Amz-Signature=e0032a5dd1a3c933469c7147ce033f32ab34ab6dcc2e18933052fa60da3aa02c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
