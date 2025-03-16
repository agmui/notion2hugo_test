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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGC2PEEO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fn9l00Ny6kSTcuD%2BiYWndVulZE8ScAShI7MhyLkZc6wIhAJae3iCtp8dMmEBakf4VUOIXWfUyzN2ma9HcBKHCCKWnKv8DCCkQABoMNjM3NDIzMTgzODA1IgxbW3Vi%2BMs4paqNVVMq3AOXLLNDx4RS3QnDdWjlsoKP6%2Bd6iSp7JvIjeYKMZg%2BoMcWiPquRdO%2BKPYUNnpplcBjrCDlSwUenb71zdyFOrne12o79bFGHbqwj9cd1UP%2FOZddzJPIyMQNPX92%2BIJDYmeMg8%2BRT7hWialbuWEDuF13ETVKMW9XndRMK4%2BQSYe5zN4tI4U1ICoErcHNB%2FkY8y69G7f6sooCJz4vvIkwVpYmebjtCG%2BVc5Hd8Eb%2Fyr7p%2BbmdtL7CWVrlLHi3XzK2qDDdgpc7BPI7dRheAXfOx8E5IiE4C8%2FPBTTpXOR1FsKwju1dMA1Cm5%2FS2zRxOAhJDlIM64Th7aCG3fHPzLKpksD4bmpyKhNnGnKWnBqc%2BMWvniYPcX1vkm7ucrCNdAxtL0AGCQKBhQe9LUJeD2TzBdnUL2y70%2FJX3BTpbhFN5huEAqZxiRfjUBCibUyfZ%2FgjZphzhuIwz%2FGYmvMevV9Wz%2Blkk6o04o2G20sREyCPJk7FhvuhZapScAaIzh6TbBhx5ZXh3I0Ft199Zw2XZkNQHb1whQ37dxT3nRpWFK3QPXYWDSBOHHMiFRyUdouU6tBygYU%2BRG5MPsK5Xqh4D96RBbDs630eiC6CbNocBtxt70VqBkUNYfulJqzK4ylG4ITC6k9q%2BBjqkAQPtEYmmlHAODKy6r6IWd7nLZ5qsRz9xtC2fq2h5wlCDj7J2qgAwY2r1ArxVWlIguOx123SK2zE5H9rJZGmdzb5awiOq0gHakU0%2FpfR7atM0IkkFn0gOENQbK%2Fb66akeXskxY6IrIubiAkS5Rl32bTkUmRea9NerBzaZxU%2BimrP7iPh%2F8nVWFSJKHORIcQzpLJsrIcjvXjVTp213bKbcmmq0rQoP&X-Amz-Signature=0b0b97a8e235412542abb40b82e0d6b4072832190f370e590d35c86eaca6eefb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
