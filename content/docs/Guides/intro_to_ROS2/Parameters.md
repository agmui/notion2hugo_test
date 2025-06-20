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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XGMAEXG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmz1kTCLa2zJL8%2FzXZSLVTjIk0o6lamnQldh6bC%2Bhe9AiBbub3Zo0V7TsQ3%2FEQVTmn3QO6kwDdewWmoSM1%2F69EpPiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbkMASxYfpSny%2F8gLKtwD6JzJ8I8%2FfN2orTCIJil3H9Ei4PVCD50uDsAZ0mRmmx0btT%2BTEYm32GDcSbU0YcVjvkhs%2F%2B%2BzQDnUqp8XwCnHr%2B2m%2FXEl5BnNnD9Rigt%2BD2UWgJ0RDrje%2BlBysRODP0Krch8GV6guX88UC%2BiuoOEBqfIPL4Qsa%2BbOFnU7BLIuHwgJrjS%2BGQpnxsP%2F%2F2pmKC91B8SW0u4hGbkL8NutJxt7VUGhUEhpoLZTgdWu%2BR%2Fh8a%2FVShR9OiiqAJy6wz%2FnvmzSJTnanAjJoJ%2FmhnSC%2FNRBoA4rtQOremxn1EB02NoYyHndwRht0gNRefKIGIHTpML1Um2woHdRAQty%2B1eLOFkiYn7%2F8Kd5QiWl6qfUPFLWbGQSL4d0RrpEQHcnMBWKlNs%2Bqx5q4p6e6SC9gNEPs%2BdImwfPrDDmUThZsk5TUQ7j9xT1EAigir4bBU1%2FQVNRoPewevnYZW3j3iP2xkKjswbMjtzyKiYGViIK%2BrY5nzV1jfd0SKAGXQVs2P0rz5HaL7c6azxu5nFemTS7N%2FL%2FL6EDmJ3GGD3WwbKdx6iYKnsOpKMUtVGRdnqKGxK9QdAwKNnEwDo7p5F%2FtptN9tWL15sJUw24WnH3phw986gJSV%2BZGZXrFV8mcdhe9F9l5lowo8bTwgY6pgGHLG0I95mOyqUQjSevaBJo2SyBroVx1JZ%2FXkxb%2BOQRb6njo%2FoPZMeGhucR4gCa99C0BX4pWn26hsOVNF7t10vNxGzWAkRWde%2BGwYeBMQT1%2B%2BIJ5%2F9%2BPxiZXnZcfHVNtyGL2ychRVf5KbjkWUIRAQUSdtBBUbKAkJqgItZ0hahinnEF6%2BUmgfQRUdZn3X6N%2FdTtutkmaF4ZEGjlDREEPcfCE9b3luMw&X-Amz-Signature=16530aa8a2561f08e8ce45c6bd151dc5e626fec0cab17a642fcc8054574bb68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
