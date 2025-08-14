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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652H7FKSE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSHOLEa1rMXLK0820rA7dMcjLRP2B9vOHQaLjdxJbmFQIhAJdFzn%2BWBlt8EZnWyFFjgxAD6jRNEvL0U%2B7l1%2B1vkF%2FNKv8DCEMQABoMNjM3NDIzMTgzODA1Igy9QuLCSsIWOEmlF%2FIq3ANT12QEcsQEE%2BdBFdRLDXawEE%2FGZxMS9sGt9QuslVrjjc9hmKeqAtSYDE5YrlSO3dmaFTXx3f7BeDFuVB7xE6j5DB6qMyK82dziGbBtIr4lHhVVAi1Qxf267zQINCUNE3N1ogs%2BGK3vu29qdBdB4zW%2BNzLVHOc0TAPfBKXkxVyy3AfpFbIJsOKL4YmvAlCwpb%2BAR06KCNEsmszRksCYzyMrNGYnSf47wqsnlUXRprpqu6zPIigVP81ht5NcKgEIGE2zqR8TvvuMl3SpzU05nDvMh9HHmKaj4eIKr69kP5g%2FplCtz63RfFPuzgFCmdQKH%2BgGj8nhWuVxeiUWK8aQE12Oo7urIe0iW6znrqh5f3a2pNjZOSmsggmbEh1rCdTK5mSTDlNH1gCveDZZ2C0uaK7SaRETXMqBLtUfsPhmvxOQbllhAbpO7EhaSaCYOh64vP9Vcgo9tI1HqmcRxXDcz68DMxosHMmGTkLcsDuiqnFeLcPYjWrYTGIgUlno5u5VgytNnAOOqqSrI50Zni2rZOF4MFlqW3c1TDfsX9eiHaHUGL6vnwbObBBEm6Lrhyf3zmrtt3k34X7VYJh5SmKFGEvwzjeVSUUd8F1d8req66KkF0j%2FkxTZwJNERegGSzCC4PbEBjqkASd%2B788u5drakadd3fq8Qsf4NnCIvRAiaVQKGf0txHglxeYBAXL%2Bax%2FNUZFMybUzSvldwWWf99tlJlo%2Bw%2F9GqhZ9vkCvTDd1sFPe7FSzRrg2n6A9qIA3XTPlusxNhx%2B3ezAmg7Gl5iocJ%2FLbdtU21hgViHz8Y0mwwni0zZ0b1pVDEVEdZQIiJNkDdOawDfKMEbFZ645TATGvCwJ0HcS6yifGuWgE&X-Amz-Signature=20bef2754c86affb73cd32b7c4377da33ac6b11964447fb7603dcfd3cab5638f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
