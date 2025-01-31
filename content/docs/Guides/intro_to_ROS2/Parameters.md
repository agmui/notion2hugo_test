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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SBID4D%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1VcBzOCo0R3qVioCDprB%2FTHForXzAB%2BEs0aPgUt2SxAiAx9glXWKSP%2B5mbLIyAdn%2FzNYfdVmPpNd5zDW3nPM7gpyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fry5tGJy%2BvAzLk1eKtwDBj7FsX9hWsuz8m4OWXR7DjVu6PoIX56JTEazqQpmYeXaN%2BcCT2AUm%2BmnOWYehEFVTn5%2FME8FY8Ae8PueVAma2TbQtvJquSKmzQq%2BtJaUdenljAy2igpXeB3BhRvLTAi8ykPDMppjY6GtrV79D3rC36R95om22iP7jnzzcxXEUmaFuKfSMB4saDxKT%2BZeIXioPpjW3JwjNq4k2HsRF0%2BSpHQ5bgpyXU%2FOdN9INQl9bSSX%2BxmeDcmXGQGJ2ZnZ3Co4AUim53mT%2FarmhW7g2%2Buc6oonzbHNSrDIJpMvFeLV1gajy%2FqMJ3lz6GV7Q7j6eKhrlQn1C3rqJ%2BZApFPnh0S%2BChUlbgXlINlX%2FbINUqIe5NZkdJbd3xFoqVH3YY%2FaWT0HYcdC0OhwMDDuDdGFEgxrQRudjbEpfQ%2FVXviBL2AtmGSzvbcIFksrV%2BotPmcLduRrqVH1t2HW6wdmU303j1e8L6f2HSrAp%2Fd7VmDbTMHlV%2BFpP2286ZsQ4qdrgzZ8y09IAgwx7TLJJLJkaJ%2F3EtpPtI5TcUPo63mtEiOFKWz8SHCrWD4p0xLIwQTaDdBCOy71L53TV%2B9kQXwSyImM1aGYJPcDoUMnrnvzkm9%2FXmdqFLVSA7%2FuLdPIP1s%2B6XEwwcH0vAY6pgFuP5B%2BcNb0hIzxw8bjXafIIepb5xk3%2B7jMNdTksatbUIegxSgMVXNuZ8C6ZTD7WhSk7B%2FgRn3fm17%2BNqNr4jvLXyYZdovZxoOADLfdKNaNFLtlrJImTRYFGx9Yz3OdjyvwbdUOnyz5AS%2FcbqeUpXzBIk8eG0dqS8H%2BDRP3LiFBT9Wj3rl%2BYtkvG43JJ%2FikBvSdS3tPkXHe1ErMLQxzI3Zuf06vuQfr&X-Amz-Signature=52be798d5af20ba3de0450ffc35a77150543406bfe2328d686a14190af6077f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
