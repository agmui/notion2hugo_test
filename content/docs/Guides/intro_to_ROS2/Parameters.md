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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDSVBXTB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDo05t1LK5wbGBTaYx4bNYjO6mWN8KbTiLzbgQqmjoxcAiEAyjjyX%2B06tmJULsdEUfU%2B22yKzqnnQY7L%2B7ajkm1f8tkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFTyPlsVgnZdUAsTFyrcAwM2ZVey2PVw2Qao4yLx26cuUAtLNMeDgSnePFaXWgPKOrIzhVdCu174ALci4%2FRwjHLMp77Y5A3G5cYCuuystPzSoBpb6WlN0y1wWyuNMBAp%2FDSzbkdtudABsPeg7eXpf5rXeJwiybrvgu0G7TCm05FpXl9qeJxszNw2%2B%2FoRBntjyMFvagBFIYma2sFbCjCVneM4T2zjcYbT3cV2tMuoy3rzyEjxAF9ihhDdi2CNTaFZbVEiqgPY25TAOUh8HYtnDD0mvBVh0ZYMjBIdtlHMVtfygse9xnbA6rSIFdnQvW2DCRy0BUXsJFCeQLnVj3RohmFNX%2FoN3jpN%2FLGwXEpCpMABQ1edeHqxcFg3dROEEAOXTec8MtDLYanuBLo8%2BzWkUDZjIqpW3pRjhjvCVE3X0xaa%2BIlWsi8i5fHzn10%2FNuTFgnSou015di5cL5st1VEbHrDVlywFrwetbU2qBlh1GdBGfM6ut%2Flw9eYHomAQzDS6QlBVVzKmXwKHabY9bXAEOnv99BgDcXwimUk0Kpbtpt4TGty5Uy14hAMAhrs6JGjHwhc9SGP5adKJpkVD3WXOh3JykZie%2BiNj4qYjYJMFrBCp7f6PeQafG8A5RHbZayIl6SdVNrfPqI5%2B5jnQMNfMt8IGOqUBWTNEpiPhpLpkxqWWOrBWm1y7wrZwuPs9c%2Fq5p1xbb5h9Cd%2FiioA6ugx1%2FcKo2qslEV5txSMVaRHgig1Z0y8srwxToamO2mVJ%2BpLOQhCMHi9R6Z1En8TLC%2BVoqkGPikZF4lD%2BATGCI%2FG2MUAR%2FjXywyjhFHlCAoyGsWeYlAO6iDHs0z2IidrPRvvLbNJdGR6Vw7JVB0E0Uy6vhLf5uzcpCLtdQP7o&X-Amz-Signature=dcae9f13025c8572a59250db12be37200024c91055e405900ab77c3164f6a9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
