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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCAJAC3I%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS%2ByM%2FbCjk93pjfD80EyP1ozkgJIZCEMteHZYAMqH88wIhAMOMS7zHIJA3KqEQzpVIM20gB4saTyx2alJfRJSmYTKyKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBXNdX4l1OwbWBqKIq3APwoTOxwKDntZ%2FJD8SpTb7S%2BLIhKJRGnD8qO5%2Bi1fhSToyHNHa3E085tfNbdAU6xGYogzn40zcNg8o%2BPBLBj773VYKF30I5TK%2FksF5RaTp1%2FvlspK1GC39V4a4GCs4ZvaznkbGnKE8CXYbDiGu8iN4n8PxYQge1wQKBjURjFOmHBZ7aFtQNqr8wvdnBen%2BMdP7WiCLox9ApW1lhO%2F6jF5W58bHUfh%2B%2Bt8XS8b%2FN5wBiPf6ELcUsVNKKfFnpGaT6mgu7xKGfDJuvLwSmzowNG6P4K27iUBBvp5rehfAPFMTH3iml%2BCgNuCeb9pRpsEyE4AH3YHTOruRvdFCAkGwA8naeaf7D%2FrWW6IxxBd5MDRVQBMGTwhEmOAxpDKDTjBn%2BQtBXIYgCe%2BttVGUzv7cwlJjdD61FZ5E6Mto5IyXkbKUpARc3qstI0E2i0S82%2FOya%2FYXQTJkofejLnIXRwcpMabFrNbHrkNHbY8iMoZX9T1TaAmqk5ihecW%2BjN1Qr9Cw4Mv%2FJEcYsmu%2Fyvdc1WmsgJf%2Fp9368IWmrLopZdV4QSvrO%2BohquR%2BhOxxoOfv0jrQh3cDlXG79WJSuXEpkhSE7L7htEW8gWKKD55IxHdirGsSUC5AIDwdMCYD0Fj382zCI3rXLBjqkAeTBIqSMAfjlsExG5Hb1WjsFzhjgxNf6Aag%2FSptSxOld0dEDZW%2BS92%2Fm2ZcC3Hslv5MwGqrjqSQd%2FQ5gKUVdthuIAvWxUtUDP6wBbOqvwGEqa%2BDsV7nh9iM6ItuNbg6a6N795bqTHGL2%2FLEicmVfCSFnu1WZv%2Fpx%2BgTXbYpcMQtLGpP8ORcrdRs60OV%2F1RbSup9u88SoHLRvxzbBjyWR2ID5rx%2Bb&X-Amz-Signature=71c27062484b6a1e6237a7afcb076a94280acd86b0dfd626ce552289c88f7a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
