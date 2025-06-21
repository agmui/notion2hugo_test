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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEY5FO5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYTqky%2BqNHrhp%2FVxZD7bfAEsMmvTzlRGvwIxafut8RVAiAlEHaEB0ujsedMqwn1lTTvEXzo37IkLgS5Uhfi3ipzniqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7Cvn2vQVdayr5QZKtwDR6Tmm%2BW5Rq%2Bb78KmYVVnd%2BufN222Ruqe6YGEb3xLFV90jBPBaVzvZ3jTk%2BT9DGZIhck3LH%2FeadtZlFw47a40faPrmAgJycYq93KdKeTkZc8JFrEReLYiCHNduWltL%2Bb%2FR6DzCAjMTMmKCIQh5MHG2pZNYwobpfvdCExFpH6Yf7DRb18YnFd8Rf9e0irmCTQw8Ea6BxcdKCGC%2B2Bvz9up6JvLQDwUWOchgfwxVm9kZFZxmfpj07zlICDFIbAhD2we8Yag0kRgFHXzTEqbmxyMFElWQD94Sznox22P1lu1%2FGTKpMLNb4ZIUsC601UkhaTPELMqLWjWS53nwXwnY0WtBp1y2nTIAOpt5sfWsSUfHqSainF7%2FuC8F3m26gN3wiFBKautMY2%2BC5NQQoiBxISbd8mNp6kW61gsOgl9R1Y5pMafa2H9sPemtZOFA3lj9c%2F1t83x9FmftwKs1oZEGzmj0FW6Qe0n50rLBUBKFVth7isFTGOeSnk0UMhTPDul1zMnvOxe9tfgGPbIsN1PsQ5DiRfTnm3D4xg7fDKY%2F40G%2FKL61JNVPEtjMmHahvEpbDodCDHAJM4b4%2BV1po2cgravLVY0%2BhVzJhweBxk6tXijQoxa6%2FNj4saHz7zjloMwjr7YwgY6pgH28PhQNjMfg7p5xjJfMHHzTVu%2B8tq%2BTwfWrw1ELzg5piMpoEWHBlIFhbvZd9PaplCAbUgCW5yzVyAGAIH0VBBxOmqei2YOnhvaxxlMcOuBDc%2F6vm4vchU6SoqU57Yy8%2FU5grcumrD6YVQAHJXGYB6ATTC2wVxkRDdMdblfaQZ%2BRQBu3RROyzLhDdsFs%2F0ZnB9cbkTrgrWHIi8MkIhUuCpkWGJY264m&X-Amz-Signature=8bfc3f2be46b495fd707423a41864aee5b499e077c6edb5c3592292a26e44818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
