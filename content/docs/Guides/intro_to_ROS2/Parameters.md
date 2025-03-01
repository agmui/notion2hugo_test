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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7XUSNVE%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCg5tMaV%2B%2FmjfmNT5CYzs0BTqMo2jPOcMyZ9FDXSiAl6gIgBSm7kTE8jF4AtROX2Qt%2BWHnil0gyjL95dtk41k7bseQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2PHWXD%2B401DtsaiCrcA8pbaRMUlgaPGLlHEpCjh2bEeP0PnpgvIQixS39HpdX1%2BiVmLftDq7Ftpv9vqaeUAvRAUyhkhCFaD5t%2B3LCfK14aetH%2FhNNYTmdOugbMZwrYEf7uQSqYEOr2%2FPZpNm%2FuHoVqFJYjva2LQta8yFzS3f2PrQ7uMExiMU%2FsVsZsqvttAFA3tvz517uKw4FC6Wzs5Tc564cbnhe7aOIbhZagoBYvyq%2FGbCVu3OnL5IF%2BEwwH%2FvsPfq0BjW3gGav3AndTfstUADZvEciuCThvpJJkW53pKhRGYzB8HF3YK43ZVmEs6aaiHIK76CrGvNd6p6bvl%2FnUh5bkdSesBhtN933RNdE9kSQFL9UWNM1XmqZK23MFmwYO0ixnFgY53UpCtnj993M3hadCKqfIEwAKCqOpdaBrdOuvBSz7ItYLKGt7qpzfQdZ5FgUR5Chx57pE0CosvcScXXDyfdUvrX0welZyp6G7N%2BHNSdjo9w4GaNwFIAZSnZ6mNlSHgbojSeMHDHoteXLs05sSkEykk7imJ0BQJc50KN2YSkn8J5WQ4CPkokWTDH9YrZnjSxw%2FqjoWtjKavf3S84pU1yPXQ5N0nFRAAI4t4DJkFbpVgJzgjodSQv7Gij7P4qyri5JTcjikMNaxi74GOqUBDVRNk2Ttv5meJSr3i0fEHcJzJXeJsIjGF9%2FExQVMTFp1vNdSAexMxVHaooSn3jU3ReNluXLeBBlN5jvjfx9prYvS1f3IWq3uYGO36BlBfQbf%2FlDej7D8wTzHyNbPQCitGDVVKj%2BjCk%2B2g%2FfVeFZv6FZqAiyPP9DfA%2F3c%2Fb0pdyV72BDkiw9K4K%2FapjWTV6wvtROwVjgrSDStDEH7qFC66T7%2FimyO&X-Amz-Signature=56216b72400d42022ada89693728f0cf805f2183ff94201a3cdf2eed845b8468&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
