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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TKLR2M%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICACR6gBCBag23duJ4Mw6svxW5wPQRS0GKwfMYjuTJ1PAiEAxhYO2QTy2aWA2fXGIgZXT97v9ZJBSR%2BzWhI1KI7DGskqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkiJqy4SUChQ%2FMiYyrcA1nkPUkXUm53PWEwmEt%2BFlzlCt65rdXIqln58%2FIQAOBZ2RDXjyzgmT2hyqg%2FzFREsh9NWAGZn0G1WHEQrO3e%2BbKdHyaLpG%2FSd772aBXzsSruWahPfCxzvqh2%2FGwNceLL1OdXVYME1wtAdFnemAbPYOwxfhS90KqfkzozXkKziMlUIw8BqPFfgYABENSDDiYMP5dLJOhiS%2F3hiFGwwARaVRTRgiEBW5J1FoLFtoBuAnSPAojnFSklapv7dZ%2FIT9cjtZ5MLmaiCb2ODH06O8qhAzkR82Hn9AJmmF%2FRxGQluInTBwY8L7YWF1vEgFNd3P5NnCUEf5JKmsQ96%2BbRIMmSrNRo3z%2FrMGLtqTPoAAt938M%2FTOBC1ygPsOni4OeurX9%2FiQOnoZ9ALkthl1Z8BPnnzxSaC6QZNcTZ%2Fs4ZzcF9FDwCt4sEd6%2B%2B4VGBWX94UhdgMnCbGnS3rkX%2BicGIrbGrBGk2%2BT7q%2BzWGzvd0tebhziNF9btUqe8avth4KxaMJydal8sek2sfnURADAm19MMWrSMFkem%2F7iGYCGpPwemUdOnaE%2FXv81V4BExse6x7F%2BuN0fmep9StfaBmu77M24cah5He8becn9q5OFoQpormFLttxV13ZKFhgXfJUIxbMNSiicMGOqUBhbDo5jU2rigAbn62U%2FC2jZiJkvF688JsQKGNlC9OtMD15adVQyyLLpKjYCeeKsPYa9A8EDelHsMkgBaIfVULnhEM%2BYndRPYkxqVKQDX5v3ubkpK033pKzaXqG2sEc8waRLmEJjqvh%2FpHSufwacBZ4HidkLtGE12jk7xsxgyfN4YY9FbIN5lKKr9JUMocQwio3GiT1a%2FJqQ9u7%2B%2Bt8SVsPCneMWav&X-Amz-Signature=b04424dacab83e77ec4c1ddc03ef5dbd8cfada2e332243df0374be16fa88afdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
