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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NLIURG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHnd3L9HErDuUd2sZ1mWM0f00Rfv%2BMqI5rj%2F2pIex0dsAiBUtKP5M2G305j6fbzTTcui2%2FDcJKN8%2BeDJciQA5UNH4ir%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMgh6bRVpZhv15xkKaKtwDLgjjzwfnoD4V8eYomn3Tq1SEXxvHMKsCLhUVOR9uXW2N677yJOwSbilaQ5qoGzFLkkRYXSlqDh%2FrnmshQb2utfCZHEYTl0u6Ixu%2BUtjIoheRF4FrTzc9lYDdrvSeA8ZGntScDMo0V9IeZcb1kG1MNUVIOu4B7Yzze%2B9uBpbxbYA29zV7HGD1kkm84et31KZgZud9UizXeLcUjYLLXxWj6%2BItjPZOid%2BWrEYh58GdZ7bzK9nrCmwyeS2q03QucKH4uRGd5JKbwpBt%2FOFrFpe3qYIj3GTTd%2BrSm4NrdGWtF6Px8TRriWdxMNCpQUUX%2BYJaJEH7aVq3ELD3SoiyNHQp6LlU8f3%2F3o93W7JA5myKbmikeGxNCrnD%2FONdYhAEmH9Dl25Ta3TRVFuJT40oNgV94VTs7cCyzyyAdsgiwcPspPEpa4S1cBiXVqCXJm8V%2F0lBhIIeTo6SPEQyUp6TjS0sfM4AMlSSZQhwQRqNIz%2FeETtAzeqM5NWSUTC9iwipJkb%2FliE1%2BIGBma%2FRnuWzadBBZ%2Bgk0huUTIA73CnwM75pABZVP%2BtsHDugngbe1bsm1GEtRpTpG7qTlKNNEErDF5Rg8UqPj7YWo%2FgxlzI6uroV1WC3aGaHSElniEiYeAowyc3HwQY6pgEfN4ScMd%2BYDnedz322mqHcnqKijciJr34o3HPudaUaG1GbGO3cB8w8fdTgzO%2B%2B87%2BA5gElqEJXa1qoAaDoThs0qi580H06eGjWeZv2xEo3r9tk0Dya4rmwJi6GJeS5TN68zSYfGq%2BEdfaD04SCr6s4tRCSutLl5w3%2Fhmd8IhIqwRLeG76nOzzYjo38CeV0pejnk87UjDNGa3k5t73hU8XGOi7%2FYPYR&X-Amz-Signature=c363951126d9c5d78daa9902c7385c7cb479b3b312a7127273a0b23202be537e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
