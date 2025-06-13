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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVRGM755%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDM0367rgZHmXph9LyBp1xSxPSY%2FpVHDFocl3kmWKrpNwIhAPAHL8p1CQfuoyJhQEpnc3nzLbglpUBRZD7NWNUS4Q50KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYaOPyiJS3YHcMozYq3AOVl8gsE%2FuThsDJTt%2FduqxzViF6MLE58UqF86Gs2cIPK9iA%2FgfzNeUONcNb8NAZek2WsFH%2BtLtct1OKmhm9N6K2I7m46lVGWajYOplT0oFnEpzW%2BrzWkYevd%2FcwqMyJlTpeh%2ByDfI6%2FW510MBtgRlm29ZlUlvzcYdB6Ef7YpmutVqYWZ9%2FNaEOOtROXvZVMHHBJ3kXpz%2Fvxp6AJ3bgRKtEe2FiLcpCS9vB%2BFUIz54WQ3KhwpyiHR7Q6hriswNJxvqDmeuyjA7ObvVIguC7WlIX7tEB%2F8DUDqYVco1ECQtXSOosnGO9cD%2BJ8xOZb%2FdAw3NJcmnJ0ykPcrylDfv95M8QrpenwBg23hjsNDb5a%2FUXGw%2FMFlhOf4BWIFsD1HGM3tDpFWuHntUrkS1h7QP2OIkfgOLGpwln%2FOabUZ1SO%2F2bjI7T%2FJMNr6btbJXyCZ%2BSw1zgNnUjyxuSdV%2F0hDJ1yied6UAKxf0Ll%2BPqbGXMwbqlAdecL8u%2B1qVFFfJ2F%2BOkJ%2BVGKPwh2QFQM7q23zzosaZGq8KGAv3xWtp79kS1nugpkYz9esfOpkvxo1UZuNjGzR3ggY5uZvkDXIdsLGw%2BVQ9rP2Eqj7PLWNphOW%2F9CudkkxSIRLhnCBTbPcGuCIzD9h6%2FCBjqkAZE2sN4UPD5TuC17ZeVQb%2F67e5p01Fx92UfVT98y2sjYcwh%2BnLUjbBQV0gkeT2X1z1CXUQIcCUzeJf%2Bq2hZq%2FONUGKdm6dgewtD%2F7i2Xkforbky6ObzOR9K%2FpwQVpEsi9N9kCqSbvzPb1ntkhmiyK%2FPAu93edSQNMCnZ7De8ZeteI0aiMO0RDgcEHiCuxmHWeJe4NgiVQOJeWxUF%2BbT2heP1RISF&X-Amz-Signature=0b0da5ebce0343b30789e51f93389763c2021845970edaa3b644c23307bbb088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
