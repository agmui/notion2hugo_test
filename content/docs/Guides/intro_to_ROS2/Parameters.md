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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663E5XMZE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDf26yPBV9Qn8W%2BRKDLfgHQLZXLzQkscbnBNkpuJJGhqgIhAPwgJ1qL9bC3qoB01q%2FBd7oFh0Ccx9aBHOx578ce6XzKKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGt6CViS8iEdf8dV4q3AOcdar8G9uuLnoZLM9eM3VnwkxvmSuAEOMiuA9pUkMxx8RPtuW3CwrZxBhJ8Qzwz0fxQYY3OyMe1MGBOY4cT5SHxNi8SnepnijVAfH124tX8z7ag%2BpJ5M1UDucK1IzSWfWqebzOEeu9GpFlZyuoWeSTyMl6%2B9sTTK0lvFOVaDW%2Faf%2BV9VL9bSxtJRc5uTwqYeGsG18M49r3HGgM7OETxkdMzo%2BVp5q854cmH0Ezq7yvhXIVfHOqxm6LiAxc%2FcfVhDZs%2FLOVBwrxKEWTKytgF4YI4xHFgPD8FFSLUv4Zdiv6Nh5qsvJ%2F5Bfj%2FYBhD%2B8PGMsCtiKkzQQvwq02XRkJRde5iPFO%2F3JpPVDhU6sagMRFjln1UUvBRAHP1VE2p2HHqzEv830GXJFD%2B%2BnkasjqM1uXD6ERM6jbb28rdMM7Noj10y7R5rIoGav64qWuE9e%2FSc4qzC24%2F9qUuwrsTYAOwyN2OmnyfFgd%2FwsKa6mY3PDP1DlUnjOLRgIrOHYoNlOq9QD6soHn6mJoCyWAxoowaQydfqyyuEiCYnsT4wNz3h6t6YLuzPG6gj9USzvPaT0mO11Dt1rLgqQSfdXmwpaovtEebJSXo7lsxjch40RXF9MQJNdC0X5v9yPSHUCBozDv3pq9BjqkAZqTeMJ4pw3d3vnbWk85KqcJunBE2mO3e2oqR7Y75JZ4O3Rn1vNWEijbeKK1koOou%2Bv3ydhPcziCxSxgosKnyiAs2Nqs2YigwkR3G8IEulQeT8cq1kRB2isocePtj0Yse%2Be2tTV3e%2B1EgmI4od%2B6uxlftQWFCjmP5KGmEAKgYGFBrqSyJj5Y7cBoms59EAu%2Ble3AZgGn69xr2F1MJsH9PqHJrj4u&X-Amz-Signature=cab610025b115fff9843f0b7264a732380fbed473d1e7d965da3ae2072c869ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
