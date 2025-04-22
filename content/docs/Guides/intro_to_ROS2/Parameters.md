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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X7IIX4Q%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA2TAStO1AB5fpyt1cG2DvJaPqxeXr9I4QeZzQOEm%2F2lAiEAzLJlaZQa5JgnE3CUg%2BlmRqy%2FpgOzBfkoJZBPQ%2FIzwd0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGV1v7k1zXNp6RdXqircAyn7f9XDCFtQlP4CPGuK2SY1IDtVaCDPqZR4Zw5gSz10Sjnec4AKxXRr6rvxZ014S14Zjb61dnNIfzQwR%2FpdjuA7V%2FtcXRJCXuxUW1GKnO8fioSz0nSpelSib%2BTbeCO7p%2FxuzaNQN6ExY%2FzNt%2B1PEPSCEORaq8mSXLimcJWqDW5%2F5zdjFFitwH4CCM8yxq6b%2FH4RHj78%2FoY5r9PZf2EDGFlnNqpOR%2Fx47egDChWsShgrtsmYF5O1uU25OCMGx8t1GXWPpMkd8Q1DNaFjClfMYZxU%2BjeSKT%2BuTlgI88KOX9gA58mXLUgVH3C8GUxA%2BVogGmHhJDx5xxs4dlCiOjmvQVOQFVcL7cp4A%2B2VVlB5pxkEaAmAUFpbZnk06w4IttimyeiXX5VLij%2BwFUAn4j0xBObsbubgXdxIDE5wao3saJMN3FBymp%2BDQUnwwU5j6dO4U%2BZ8muPwX25J%2BQu0Wk5nNcYiN4tz1u0tE2kaKQf19b1qF3cNnRVbEMbJhWN4RJf9f7RSJsEKUlycsK5oOgVC9jANAA1vC5P9G4%2FcliGcHfdYQK6Vd0Mo5C1FOU3E%2FFYo5zvW2KdUSVGSA%2FbwfqQujDsHan8%2F%2FuaHIkKjPu1FgY4UTCZ18B5wNsB0MW8gMOLCncAGOqUBS7r4IoLF%2BSEt2Abl7DMUIwHDz1G0A0xbbcRK0hhWom%2FgXXL8Gz4KLpSXkApMr%2B8rRM3uQuuJ8ShU6XApiHdxadWzEkwo6ZXv4PezXJVgQ35Rz%2BZ9iQUkqqhSH6JgZQk%2F6EwiUeqPyf4fSjNJXNfFCxGAv8zYdccDPVMgsO1oEhemoOA%2BV4Q6qEMhMzPnJ4cE2EnInSXxyfLQyrsaWQsF830FeFv3&X-Amz-Signature=9abc55d7bd2017f8ba9535a032166c830ff0e1a1435660a678f13de5f4b83e89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
