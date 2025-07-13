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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4USKIVR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs5ASyAzua%2FFKlh0eQK1qCnD%2ByYbX9vA8qjBAxucTy9AIhAO5ziM1LN4ApgCdAT%2BhwD4RYVd%2BdPrvudsSY65i7ylieKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8EBM1xXrsnIZBPoq3AM3c3f9L9iFjvxK9APIN1SzbnnbJNVdqhyxSgZmbaSWhIgLUk2E3eM8%2Br1ApRYfIoxs%2FuDXuCBZ69QmfxK1q7o8j5ji6GcCtKChzgvfUsqduFy2aJZ6MnS38OnfbpsEIPnUSbAnofkJdfE%2FTDJPVReDR6n8QMmZCrWm943Oyv6uxz2EC73oKoOam6wLpQiHhtmUc1LPCmaCEbYAeCBdWExMXAAAQg3afYeVHWH5MdzMGr9qJFBS89fv1jRxn4mIdBCsOMcnO11o6d1PwnPriCP714fhsAVOLW62mp6tZIuNLI4AS0LTtMsLhXJukS3kv0PANkgsd12AmJ7RBojvV7i6rkQNWa4x6CC2iMIYnE44n9DvDTBJLwqUC3y3dZC91byevPwv68ctQgeFYkHT%2BB5rv0kB3Zga4EtEVyZDFEoqudxOnJQPyj%2Fx6g5uOjjLRZMVmoHdJTFkP34%2F%2FRdSaQAvJZR3SsCQkKQnxSkYlFSCj0JDMDfXnEowJVtnpYp7dF60JLSkQDQyNft7MpcNemcdOKUlwpeACzx1fk49EVBlYhFzQ1x3fwas3S1tygzy6PMC6p5hPO4prqvlhaT1SvoCb3i%2Bn3lVn6%2B8nfX93V4Eree9OVhZvl7tzSSjozCgrczDBjqkASQnotO5zwl6LBH1%2BRYuD44mC%2F778UsgOvr4vsK8aWkAqbuD2El01NuqPPNPViRl1Pjb8d04GAUFQZkwh7JRth978QygNgYLYyqQSp0Mc%2Fmo5W%2B7bmxe8Uu%2FgAlkpjd%2BKesTvssFKWLdfA%2FPCf5Y5vzG7Kt%2F6VMuPfKXbWXSHonY025RTWevYQ7W1yFl33QyQYsLpaTQw6CnZks1FxI7daHBxL%2Fg&X-Amz-Signature=f89f6a0cc73e47b6667471b6e474088cd7c3d4085581cee049064775b9e8dc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
