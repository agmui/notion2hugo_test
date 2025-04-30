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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUAOUMUF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSjfsY5WNt6f9s2XNxGcTQrQGRhEW9Cur212eKIHagQAIgHtdMgehK3xcz%2B50nWrA2EktJofBCww0QqZTLqjnniCQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3%2FXnyVTmt28yy2vCrcAwZ4JEsKv5Wq3eK2lbyS190S2IqdDwavx4C1T1rPnRwi%2FECfqVK3NjOjg7pT9%2Fc0ds01kMI6zrLTsTGgmBEaKphtEgfrdIK0Up9mt1OqoF212D19UwdyvkT1pyZfkP4cD8MUqrr%2F2DGCEPRsQoFEH6bjRZsgLi1Y5MfAEQdxslnVvq9xppxzF4ug3dBtx23AigzsmxE5%2BCwdSpItqhpIaNuaWNFC2U9zerN3N1wSl5ERo4XYdSnRZYUrPv5DjJTadb4mRVwzVgiRT446cgrKiDFFMZWTkbYrJj2vQ2yg%2Fq10lMIRSDN2B%2FoL1fW7OJAUuwWqj4GCX72qAeqFz56S1HPwUKZlU5AlnCYz3BA8kX2kwKOM0Ky4MELFPr%2BXqoKQvnD%2FDVEQteX2Veg9b1D0A6q28L8318j0r0zAnnqcPthw4LjDJiQyn%2BdnmSQhHTJXJqfQkJqH%2Bekpzmz4ZnEnbQ1KzN9kExV46wtw2FtZGazJJEDqcosIKVJwmEMj9K8MdTR8MuOfMW2aR9DePtwY7lYDsr20ZIczZEFHt2TUnTXLMAavbyEmNRKKrOR0UcxmsQikxfJyxm%2ByjTXPwSWAgoSX8c2a2dvVFhZkr%2BZEV7h23zaBgzSnPHAJYUSuMPr0ycAGOqUBmT2EC9EbEv87HPa%2Br8j1ENJf7eFHTP8yvBHqGiPLe9Mzn54qJLYrmRPMrd0LC4tyZfeWS4rIDbGONeCc%2BtU5eNf0M35wtJRvezltVbR6vU9e61YwmTRzqfxP5g2k%2BgPP%2FfSJfTY4tb38Im3GkiUfg4emtHL69MPk4rlyqAzH555EdXJL4PoUPie%2BdT6hvVpDbGvMX%2FoxDyP3gyFAniZGC5BsQXxT&X-Amz-Signature=0473789008472a5ba114d9500860fef4440e7e34ab085141cb442aa6d3d9fd62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
