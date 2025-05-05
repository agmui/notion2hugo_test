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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OC7GIFO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDwAR57CiutCBs4Qe%2FlVvpjGjkxIgyn1dRLCFnCX95zAiA%2BcBtQQnS1P%2Bx%2B0iK9vub%2FLDjXyEKSnyGfqmW%2BXUHIlSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM5NINDxhoVtZLtS%2BRKtwD%2BuNK1GJrcfxV2EdGyIIa4FnkS9dpYl7PaWJwq%2FPqlJbAMZs0xvRqbgPbul4Wz5S1XLhjJH%2B36ahYdcJ1fRYm2wHwJPjMUzzoU1MUNoKVYhn8cNGv6pooSBy%2FJtFJV4hY7CbeyX%2B5kwHnRDAQb%2BE5G3vw6yfGNJhYkaJv%2BUm3dr6iEmvnCzz1zA21sNHA%2BhVEezbIxnMMNK%2FKb3a9m%2Be0mhPHzldHFu5S0RyWrzi1sERvyDFfHsrBSzDRKSysggorF5uXjhsdgb2GKxhE37xQCJ6D%2FGLaOiO%2FnLSTzumFsqkDkRirL3aUQQ5u3Xl48lim39656sQlhYXt9vBYQ2q9tnZmkqMeyteHo7UdX%2FWfQo2EZO446GWTH%2BdmMA5h1ESctDzAXSij%2BAkQYaI8BAgo5ZSwaTBhjcJ56WOFnHwcT51sGz144Q%2F72GmRNEMiA4w3Aj1I7uXGf2lxHzWG421cMMCSAjKoLgpSnIQ0qYO7kRr8GT2jD5EBE2frPsPbk7b8iHiQmFIvYvSoPk8APDqr8cUd2bScHMYkQ7v5HxNzuGZceUG0vUs1AzmQrC2V3ffqz%2FQwK9m3CSZKFAoyMuo1iomCC3cD9nADcom1mliuvSgE%2FSF6IUoPgCHNvBAw%2FszkwAY6pgHK0duCzYpz0XQhzr4vS1zH44xVLv2dT%2B7f5VqcpetZ2DjlVqCasJxLd%2B1d4dhvcDBsfeZb4vhoI4ZTeUFmRmns4A6T6JkuXn0F6q5Ku2m69YxgOWTs%2Bvp0w8j%2Bvp7FRLZV14oToT3kH%2FiPnLShPjBfWQi5qAU99xQMrEeTWf%2Fxg3hcK8JQDnlSDrB99%2BH3R8AbJYvZ9N9gXz87AmaNs8%2BKO6ETIv3A&X-Amz-Signature=ec4d86e2cfee8066a9a2c54355510cca5ce054b7982ef3d4412c4de60c24b6d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
