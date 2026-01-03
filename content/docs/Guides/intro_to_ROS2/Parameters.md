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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2ZPD7G%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGyFvca%2Fr7FpJ7kyZRJ%2FKLGRmMrFMJLxTqh3%2F61bJn2kAiEAgOucExiZ8Pue2RdfBh8vqCN0Ho8aBvu4ZGrpHBZkDd4q%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDPDiltJiWNK4dxFkLircA4VG8rAPxygEhXt%2BUmmG5JDkU1w2RehSbEta5a557OpJvZXWTToub63xyoJcvgyL3vatkzm8RLv1VD65gJNcGr%2BAncy1LZBAx73%2FulkvLULysWyB272DAYe6nPsFkOA3oUEYyVtPcCQK29vHU2A6jXZp7C1xgrOG9NgJNYR11e%2Bn8r6bqFS8mS40iO8iwS%2B5bs7ZtQLHKIZEj0StSBlH3fUCbe7O4RBr1QnTJwoGANH8d1NuD%2FPVw4%2Fu1TCWHZYi8LPPcECM%2FAtmYNNGDBXeyYh5nF84NSLq5F9q4yNF4J8zxoL23FDPCkOYn8RvXuX4McJS8jfT54xpV5qAQ5HxE6jDh4tUHJHPUFB9HaQvl%2BIIi97umyMp0ufziAQ%2FCWkZBl9ilKd7F5YSSQWFt1qajxvsPP2zrG72Vst%2FMRg8FnwEmvAARr8UjsfMh23PXKVtUpq%2BaZkf6Q39G6uBpSbG75JPJSSEPvaooU3zsd4pguCPwktqsCKc%2BO7dx1NaWMVRvy4VgxOfZRSZk%2B0XiWKqjsfXeWSz69Wc85HgAc3XQO0MDv9hUQuyWx4MrmReBulfus%2FDQ88tTBjMbgl1lSyALaM2jWmCTP94oJy83XKyA2LURSHUWdRtD6KcyWdBMN%2FS4MoGOqUBUPd49O5bzux8irD%2F6nbckp%2FSVRJCbMbdUX7ULTtBM%2FqGDxuUiif1SyexfK5Z5y1Qh3f8mjPzEVgzAbevQLytHtGWUkbFCKDgAFo5m9YcvXRPIzozS5DCInDroThcBe1tx4EcB5B6%2FUA26WqMmZesgERNTto3j19Omz6uU8qt%2FMxp%2FMtY3Y7RJ4jttjqGJhMyvQEb03SdjyznS25GpSdES9IAn49T&X-Amz-Signature=13c469f91bccbb7f14b85a2d4176a2fee90d9145420160ad60de2fca8ef97a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
