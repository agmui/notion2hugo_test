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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2H3APZL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCxmFKnmFKMbk%2F07c4WmmGO4vYGWKeBPua0wMfe3vNtmAIgaXvTvv8JFMEfU2nlwc6GcV1f88muuWEwxWTcvilBLpIq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOlgClfMyCwT%2FVAGnCrcA8y2EZFvr7HC%2BtwgLelqr3DFcztCkYvl37q0arVEqcPF7DVopevWH3q%2FTVhvy16mdBxIUBPbSJNQfZWxkFlQNma%2BGwSO6bANTdD%2BOKXenmi0%2FhogNCfgNqDk4XteCoWVIPcjYmvkmf4N8up71%2F87v3kTFGi3ZarPL6nYCuoXQs6JkqoqNHDp%2F03sP3CWdicGbZA67cW56f9Mvw2d%2BnTEnRwVxTotGCBHnKP5gbO87B1WbOhF7S65ntAjAUwklfqnNwAlwNfpjtr2byJTo%2FxCKHr28MyK7uktF4UMhUR9Wzcp1FX45NVhQkTJmJlwoXwGA0GN7vLBHMrVlDGsYXzjWVZmyajc91qqAhH3IyaP%2BU%2FHHzOz4UdpBz3sbvybGcvmQ6gc44raFnlkcEWNiEPEc7LEGGkZUvZHZkzB0CIBbgS%2BDzS1AEhZEzacdM5Rrr5ufZc11%2FXfHmtdSR3WhBhr08R1AbqnwPeXGkBziijqcPRGr0V8FPM4AShGgstZZkv67C3%2ByfamvbMe%2BE%2BvlWLXe5tsA48vKB5DYm8XyHVQkamtSjseJC0p13SBaWtQtESeDitfKdC0E4coggspl72Vm4APms7j12hkHJ5vFYBAcM9Fqdds6fw7a4c7gRBhMITgrL4GOqUB%2FAn0lzwDzP0Db%2F%2FVtkfgTEor%2FUvXaUPErK7j2g0iIBnl0yGJHuaGMDTia0RHmCyrLjWSaEXg5kYwhKeny9KeTEoPNxoxtzmEY7TEcsUNjEax7IFnX8bgqfktOPs8sKoDcE9Npd0F2TwlKec6ehDqTj2MS8VVZbRamVVbgAtnUe2DhZNVUAZEf3WH7gBuDlaGdsZm4voZPC4nUw23UAdZ%2FbeSy3q2&X-Amz-Signature=89665cd724b447523033d5b94ca96fdee4141e37fa30a9c53c74541cc26a4b67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
