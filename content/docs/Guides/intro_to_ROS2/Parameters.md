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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIIMTWH%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCRS6%2BAvqEq1VVJe%2FzrTpspZFuczovxrv%2Fn3JWpxNegIgdrItEMqZ1BRUNu26%2BwJ%2BlPidZiz5ic2UTF31RuojOGwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5F%2Fc0RgDyMX6BINyrcA5BoMODRjxB3OQ29sOjqrcPGz7kC%2FPFsuUrQQ2WtfIS3yqFnz%2FI0gL6YsC9lgIxAG8180GyChcf3kLLT6QbwEYyWrVt9Gy2C0cbZVV%2F9fR6dhTIV%2B%2F8i1R1lLROda9AzksBpRQnEPswDrgZcKJsP76GwLouIZSwO%2BPe%2FIE8Yzl9izHZFhmsRYHjfE%2BlaPd9IHFL7uGdeHdvb9qFIoqhd0p%2BRI7H5yRlbPpGHIUoUmuMxygzWPeztcNiGVGciZLxQXu8Ox0PXQLFXhZPDqsy9IKc%2BjbDp0ueEqGQ8PrD8haNqwRE9SaM7ZW%2BzzDr9aCYRztsjOGNQ%2F0jSgIsJ4FZE6jgSXs0i6nuMs1IXnsib3uwAHGYSqYYxAttSKFAahHKnJygRtjvLz2sKYt6PB08bQY2EZ7EU%2Ft0Upc7tSyVJeS4bPJfaukRquQAXPCmismfs%2FTQRQHDV%2BrCZTn8NgA9Af6bc1%2FkNVRexveHw7TX5uZVslI3jda4PbTxF9obrjx0u%2FIojedGP4D%2BWkCYoAqr7jblsKDm9xfrJhIgWWB12l0zjaihUSjXjBWBmgdwo8zr9gWuXRRjEqd7T1uCtCIBVv%2FBYViHS%2FTDoS2itWTReaFtZwVsrSSeMK9dF4SemMOr1zL4GOqUBlgOjyIxl4sHMrJORi%2FSivjXdUFz4LF9j15CRXrcPRKOSDwfmU1FexVS3Bu%2BZhmsjmOgo7YsrCiskEiozWpaMAtL%2BPt0q8SH3aqBJDQA%2Bpah7NjO5ypR7kFKbAMpAIQ50Lp%2F5sxKg54wWIsV8bkMvddvZkEC4INvOD%2BZf6y%2F2T6eNjdvlUt4vG2lrIuMopl0Q8PC4HP8maUybIInPaQUjzeTTMr6w&X-Amz-Signature=b9bb4249688359f4ab74e2cff46ca0ddf7cc45d9c21f846e32ad1ad64de30d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
