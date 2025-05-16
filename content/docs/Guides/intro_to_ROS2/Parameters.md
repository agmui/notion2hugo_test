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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C6HQD26%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxjEB3d2uu59z%2Blog0LdQkOulpSr1Oh82bBRTGqY9XAIgM7mxZpR841io2HzhyyH6t%2BwLUigi%2F8bcd59pZ%2B8%2BbBoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGmpUOrgNS06iuN95yrcA%2BvPuIqyyJzZuMqR8gLbCnN6QNL24pvDTQj5Dnf9i6iPOA6JZRb2tIb7k1y4Qswf9bKaK1y7xHdBNgPFDaactROjqa1LyKTl17o7Jhvn92AL%2BydsVYNr%2FiODyxzYcJTGyNY%2FloFPXralP0EHI02ESt3vPssAJPidBQrSxOGUGXomI4yI5kNXyEbRG0V9sQR6%2BHSucleT7q75d9oPx2zwb18TVCox9OSxlJRUrTMZjp4epTVhbW6GMvaE2pwNJFNPXfxXo1PQSZVLA7SeheqCG%2FrPGT33NopplhcOKHM%2B9VwH8ZWIbdi6%2Fo1uMphBljHrWlHfc7d%2FxJr56ZZiVHLlqFA7CoQvAUfXKDqZ%2F%2BnP4kCXlPuqhjUHKTKZFi3ARaZBm%2B6zZVM2wtwwu9cpjSMLmoXlhKJvm5koq%2F32s%2FkMphZMk3myNjq9xwBpdMuTQYXRQGAIT1PLHnsBW1oHoqjLeej96JpvCq9LMZkVLIKW1WT7N3ZlpWoIYwTtS14x6q4uVaj%2BIQ3f9XbMNyWs25GaV6KAzBZ0CF7uHO5oAJHFruoJtde5vlZ%2BXMuhBOTXMm7XJXLlAJYeroQztKxTHvJIH0MGd3qS%2FsrNJECRbQ8BEJ8GnR0Ti2%2FWVLkd8eBkMP2Qm8EGOqUBhF64N3XW42XCkaetZDp5IhaYOsCDK2DHTFhj%2Bx5uyrFYD5pPPPW5Wf2WWgN%2BxVRQp5jHVUvOToJWOCAXkmrXiINBD%2Fndsl%2FmYwshQfhw5eC2cM5Ku87GYEYZe5sxG3gXC0iv3lEd%2BERiQaVK9uXz%2Bm3%2BspRbJvWVzEoD4nHHLwr9nSoxG%2FHiZQE28xUxIBxa9E4NsBBX5unNvMfrtYCFKK0St8Yz&X-Amz-Signature=8369ca1ea419b0ed877729118366aed35bd9f60dc37705108861580e1c6e5a53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
