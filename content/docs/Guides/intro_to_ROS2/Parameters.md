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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7NRGXJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIH1L2qh7rhPuuirvFz8Sl6U%2FmRah6bl%2Ba816KfRwBRrfAiEA3WJMaXw%2FL4qzn54KVtrPpxzkWQhlCxvGA%2B7bvMRE5f0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOK%2BqKMR%2Bvo1bil3pCrcAyk9Lwgu9UWIxeh8%2BkviQ4KnZ4yHyreYqex9PrQ0QZRPukJuHJXvX56SYh7%2FZBdy8fTxXKmEjy33Ofv4K8yGvgBm6j1Rey0g7IShN3wioyE5PiwvvJvNloesJfxRavRkgsvnhoZ0ktjQyhT0znUFv3FjQf9NCcDbY0Q3xcYPjuf9ftg2P3TV4wgH2%2BYftnpecQW1c84zfoqzhT4zNNsTvSUgDWxGVkY%2FhF9N7x9HUEdbEqLp54qvKwzr0NY1YUl1%2BYBO5sQwy6ZXYJFv4%2BYZlPsrjDIxVCZ1K3C6xfQg5tSRpJiV6wRQKfJ%2FA6qFTE8v78rLK0zEuxCstpAModed0PNVvHshv07Ax19rzzZyuV4iXZ0iCsWZdYhk9n8IGY4iuk7zyBIxYP7FausG1KA4KfKPKchnJuvc8GmLPGiU8BgmZ6TSxDynFTVYb1zRqK5ZDIPXPGiDZX8ZkUpFRBB0rTlqi%2FqdXajXfyftwFW0Lq9c2fG1qcNTEMfuQkOu4eKxo6ktMhU1DJMwH%2Fs0IMw7bzcsibsHp%2BpO2FCMBH%2FPFxD23Q0gZPwT%2BMV1wb6nNeNlFwpBekHm3F58Afkhrd2zwSrQ8y6idlBfMTyyERpXnB%2Bb1n2PMNPtSTDcTuq4MJOVjL4GOqUBHhT2XPiCXjqjlANGgUGXqmbCrDwGYwPN3dCoFvp8IUnEEO4S0FH3F%2Fot%2B7aWqeSC%2FcqNcrjjkRw112CTPwHdEBTTZQDA8flduXHxPIF0RSFgCSRGPnWjhAGtWLV1hOwY8kI4tSclTJiAw%2F8QtE6hgg0keuab70Pt3gDnZCmhzieN114xY0vLcmX3hP2WH3ghdDhlc7Tpwjd5Daaf1SQlEDKjFmfQ&X-Amz-Signature=07421d0aca3fe8dea0a42fb6ba9420fc067b47b534839ab3a3be14ae1cf8b1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
