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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AZ6YNZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCID00eBblm%2FVh8zkjtYTNbnsnwG1pBT7QbS%2B99w1wonnKAiANl7PhjcQ%2FpJPc0dgtr2SXR8IFmy%2F2s90BXaXDpsT2kCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTksURkJ4E9jA1uGnKtwDt3cKRJtHKEFiAuGr%2B17tsm1YKR%2FeRb70icp76OSnaEX2QVV9cBXpOvEpz7wMTZx92sdNV82ByIsxLUUJxnf300XZvpXdYXgXWEWE6U%2FbjF1ZVE3tRthVJRyewIcaDXGi%2B7aQRSEs0XRGlxZU6k5hc11lIiWGJDnL627%2BmGeE%2F9vGC2R3pZlUEF38G%2FobRmnUp9PlODACtXDAlIewqLUuMtTiB%2BajE%2BhNJQblZxhORdSx6pESA0k4EMGtJru2H4dW8glVnWfoInNQ1ljw8pUdi9gLE39BuLzUo7A9tb1VHCrG3Z5UBApM57VMJzH2%2B5XVudr0RQdNwS%2B4UbZlQWvKwFSk0Vbtrjm5fVwF2DMYkImTsb58DdiCbxOaJQ4UAV0cDr%2B0ovi6DEauMHvOSO5K06cRk0sKhwgrFblxbJICe6CmN1UbSILTTiHp6Mq5gnqbYQJHXs6OkvRqKoss0fXX4IcoAx5MDtGRUt7%2BK2RN0%2FDhPnH%2FDDxyrQLUZeU4sTd5joFQcZQJafUnTb7yq1BfofpaATDdkQVGanFma63SdtSeGSyfhx%2BVcj7j8KPP3AR8T0HPDKEaZ3f2EALCgx1%2By6YKGQnTJuG2vicphVEJl1pDWlbbA2p8Bps69Rwwjr7evwY6pgGBPTeZEJDO1c3P0Cov1PBWsxm%2BS4t%2BsTdf7b80cvqYtVkDAgBuweGeD7QBR%2FZ%2FSaNAl6ESrbaQHG0FmTBVkvIx7Nc5NQeYmevxCcxMAEnqA7ymq7vzTHV6TDKazBJq2SQq8H%2Ba17Zlb6x73fcaYDMna7NcfHPTCTuksS7PCR7%2FpScFHROhI4V8%2BllTKcJKm7Gne2H%2F3jhu38AE3ldc5XFuWXkvFoRZ&X-Amz-Signature=f6b9abbf9eb10deaf4b008e62a8693ddc15f5a8ff371962ba72c2a207b1d9add&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
