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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHYSBVW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQChHwTcuL6PuMc13W1RTAh%2F0If94ltPitTkNiPF%2BggunwIhAMT0SS%2BYan%2FTyxaHKl%2Bwa6vR129BiuJ9ockSpR%2F%2BwZIZKv8DCHYQABoMNjM3NDIzMTgzODA1Igyq3PaRbgK4QUQ0%2BpEq3AM0mdPBFMjgxmIfmUXH%2BYhEm1smYi5e7IWBBjKMT70ERL0Cct9d04JjYH2f00nZ6%2BsotHAw%2FjHx%2FVXinOfKZ%2FuHknIy0I6K0a%2BKnvmJarDfEMXrrg6LAMsno8lJPZSRnTX9Lwep9BjioGJzoBLii8Dx5aOIGDvRZU4GrXb4n1uSiW0eu2oIXULSOz91dAtHkBmT9GZEyL7lO8ELE5lDSuqoSXjhLU5Qjyex6ajBxWMOoXj06PFufTKTxdqycOhO4e5PVtGJuDnpO%2FGmZEUMk5t%2FTbtHPkTF14iY1asGQLcwEcu0XbOcZhGx5PUF3SHlO%2B54V5g4P6ieka9Arm3DqWedXFipXKKKmvCDmWk2vnEn2r75YkT8OzPib3SZGbRUQ1bKEZUFRrsTdaip%2FxTXOz0hTuCUGtNton5cr5GDkXz4HA%2FdphIwUsmK%2Bq3aqEwQTJ9KCkIPnu%2FPr7W%2FGF3u%2Bdr%2F%2FN%2BQWMoskBeSH6FOhY1IJEdmckAl5eAQkJHuLFAfiSYme%2FMjgAmJgUaD5RhPtEQDYxViEMOH7IG%2FtNmCowQgcT600L3PrHygkxPnYyUvCqSCrPwz%2FV5Tv6GvHyDEWaKJTdYb7tPsYPAtjlVgV%2BB6VtzCP%2F%2FkpGtirbI3qTDd4ePDBjqkAYAg588ZmOx7vpWb%2B4buNbA4Znqu5RAa3maRw0Ovz0GwzJIuRm5TRqdlfoKahLTWNo5ECf4log8Upkn18iXDSogq%2BWSD5O9SIgKRuC7%2B6ZZ4WBrTxOFZi3yi8m%2B5nzXC8GDRpBuzmlLwo%2FkkgLXaXGYU%2BXXOsXBIYjpT73o3YM84Ct0K8xI612h5RZO5Tsf0wUZ%2B4ACE1q0eMdFI81GPWFM69UhF&X-Amz-Signature=f1ddc044ddd972f18917381404bf900dcc8fe1c02b8d62603256f2bbc8634c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
