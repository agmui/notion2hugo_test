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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HKROVO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXRvxJ1x4chg76LZgu99KrFuKYHkS6JNW3Z%2Bcf89YVxAiEAyi1nl69zXXKKtfuqvCgJVXM1RIDLwAJmvUFEMRHV4fgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHQj49R9FSrpwyMRKSrcA%2FfzedSLad%2BwqR9%2FjcJDelG7kMmJQbkZ9kbLSv7KOV0hHM7nXFgNqF3EiQwhQNMLN88Cmp%2FBg1gUw1KjaswiEGlpVTxbQasdFQnx1Q%2FvC1WnaF82zppLIx64ZmgZLCpL62I5H9gCL86GM0qfVw7%2BxAW1YS6xMc9%2FUaDEdhXWOhsN2HEdjAVi4ElzbWrqQOqaXF6DJJtsQiDU6rqCroWwBg6MG2QTJ9L7yT41AVdNPDDXbYsPQXb8uHc1mLyQI%2BoU4RPVkF%2FT0G6HKTiQitjjEKvRk%2BQ6IjUIvior1lDUfSgdEWEtanqjaTZsbrssj0WyI%2FxQiFLS9aNlbyh%2FYmS59mGV1oIOX7VVta7cLwv7l9T76%2FcvrppiZImqkGnefju6DvWB7B62v3EWcqi6mbOL5KguaJNrO0VXgLIr5KifjbEAdDYSLlWPoSlkc9c7u%2BHnLO4IlaagZeBJR7M1AVWKfahXSD3SJu3kNoSrSJXysInzPiItj%2FxCmXH3nv8zn3cjH9fj5P0Mt0VEpPZSJaOdDOd2kTdjftFbOFOgFd0FdWdBl5uP97M3KM0cwHXG6X1HV0U%2FRkutCOjSf7nHOhKbHWUfy700O6HDsgbhdqI8nL80IW7UjdpSiO73OkkaMJiTxMIGOqUB8yEXikfzm3cDFzEO1rpxwFFmRuO0vRisCVEyfhg3ZFUzTMn9sIBIJps0rPUa5xJgsJGmyaxETXx6NCkz9LgSLVRbA4nSC08TPqVTxbVYELGrEDRFx4YC6YbYoA3GRkGZZ%2BUUe3pQIcJJf3d1TLGEFkfo2XP38E47khEaQhjo9yBssiJzTr9E%2FzyWgby%2FVuQSmkk%2FNisobY%2BPT%2By%2B77jL%2B8MFwo8V&X-Amz-Signature=83ca3d153365945020407f1693a1c7e021f411c9630df8cfc3633851bfce6539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
