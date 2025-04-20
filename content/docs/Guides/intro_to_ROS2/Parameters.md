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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHITDZS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHgNaWXvd7OSP%2Fsnn2YyhObCvk5ik%2FFmsr21itCtoKYyAiEA7GIUoEHoFOrlTqS4zGyb%2BPkj3uxYok3L7g%2BsclspwXwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXmdy3HtkFaGPFKISrcA2VVTNMs1%2Boqilb4P2YLieIgK7hna9mmSoy%2B0AIfXLfxIyhftZuKLOInjDfbmThnq%2FgJE%2FLp5OL0ol4Trwv1UxKYUfdhlquo1ac4WIHD1kEKo0Vt2sOxuq9YImaZUO1SOkZy3q13NmfgLzAW0o%2FdKXLRngsA46L8k6SuH00WjPzz5gvDOvkys2MQ3vkhshXe5LZES3G44Ql7XsKqTCr6BSPoyu%2BvaeY35g0dN1J%2BG%2FrUG2PRtivb5aCd1fxi6r6%2BaGnPs6qU9vSfBlwrMHtNW7oA1kJjt1qusAbef0fj%2FM1oplWmnONtFVgSSk%2FQdJG0GVIXW%2BkhgbW14AKx8EkVts2LTqDzM1tWIrLZt%2BItQ5GBSKnHofPr9wBSwHan%2BIZzcDB6%2BaAglsOnRdtJ%2Blg%2F5lKGlNL48l77FAoYp5SndYh0lFyy70nqCH3CkrHH1%2F8qrgpgxVyuOryGbT8%2BbDwCKCx7YP%2Fw9AnoMF6cNPbF%2BwYfJFL6PKDge5ybvWky7bHEL%2FyO4o2xO202wAGDEJPDbx3HBJQ%2BrUJJAjHnfXPrRvyDnR600R01WxSBS2xJwTPpCmMDKTSMjVGGjx1HSjMe79XC2YU8%2FcVquZEi81QUb1VKQulQd7LXXmkqO%2Fq8MOWBkcAGOqUB2Fg9zBtFSmOM79ltnnnBoyzARtriXX%2BUE2BQx9RoGC8tiYEmiSD%2BRncmxKmefDBX5igC9AwzAMJ8D95OPaNllDMUl9tMgQjcMQCySg29w8beON87F8PTvVJRZXuk%2FesP%2FObCCb7vctntPT7UehlASXJpQokfZf6%2FZEmAIHopQ5gUwY3KvsRDP3Oy19o%2B%2BXDkb5c7R4XPC%2BuwJU91cxIGvgeLBk6D&X-Amz-Signature=acbadbf8bc3d24296b71755f723192d64f088ac35aa727ea1e60074599f3d14f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
