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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDO7GTPI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCJUfBDDoAIhZH4ML1Vlb6%2FVpmd0gD1aEcM4DaviiwNhgIgMlVMWl5BCIto0PDO7dpRW%2F01PP6ODyXR26jpuMue1j8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDD0hieXWSaoUJvF1XSrcA9zX3fxXqNgkz7Q6vnAlJ%2FxG0WEKg4bBmJ0lU7z0%2FD%2BV9kIoZeYyOArnY655qa9vzEbnwWoPikOiimBC4hRuQxuyrv994su3Yic7Du1wNMQMw8%2F2BwHpHbQ3f4UXKkEm8XxQS32MT8kCgCcqOJlLwQmXEg5lM6VsTfa3NvcrZG3GG8HilNggxYIclFgs%2F7xUYg8nYmryhS1JDxHaOcMHZuvrjYJBhdsimbBCpJFjLqJNuZVjzueLCRqF7f1G9Fayl0f0kgqh%2F76HsR8xuARE2CiBvTV867LqitYBI3vxooxwS3y%2B%2By%2FeqCenJGbgXqAuFMm%2Fr9zDAa40gQZOegA3wqN8GkJCVLZxbWr8r9Adqld84Oni1gPyrBVY1FjtHeO7%2Bqy1BSGJEo5F92anYBMFZCwwvhKoCS99E3QXEp8Lu03R%2BrDtTsaallRE9f5%2BvAkrmAG5Y%2FeXitCGdtLk9oUVK4VXz%2Foxf1Ea398rxrI753VIh9vkHqc0H8fz9e3cIipf5iUVcwiATNPo1Oad9ppWIFlwHrH294xlHOLKUnKUHXXym6U%2FzuCeosCOMjrqI2wSRxKbK4aGaqldlLYeCswxSlsmyv8EnzgR6p%2BWjNn5%2BGvd%2BstB60ATtxS%2BjOMcMK%2B8qMAGOqUBfP0gmI8cNa79RgVbo5jtFXTDZA1OcwuT2eR%2FAvncNmNQ2pFEQQVesMAdtQXQDXf86BQLTDZpWEH3FPkTCnojWpcK8ShGaQHobT2CywfCmPnkGje%2BL1VXWtqq7lB668PY7VOY1tirOYjuXgKhh8zhBlFA1yC9A44Y0kJDellvj9gybbufaap%2FwjyUkH4g0J7CRKx3zjypRlLfFwy9AwdZuOLa80SY&X-Amz-Signature=a45e9f2071b484b4dded5e68a5a2a448b76a764b4fb80bec5351f3753b81eebb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
