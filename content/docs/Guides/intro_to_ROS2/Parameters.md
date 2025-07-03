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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2JCMJJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC2qj%2FDwkU6B5u2kPrpRAWe0XIr3nGYF03lcY3wzNCNTAiAnVjue9SQcVesZ7eB3Gkzbj4EwWVNlF68hAUBXU12QXSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM6%2BNnUTIUDrWfM3SPKtwDLqrTGCtce8Ulw3IqUx2gBw%2FW%2Fy%2Fm3le0lHKkDglkIo3D2yzWbYn%2FN0iTm7i8DzIbpfAvGybV1h4CfgwfVZY%2BX7DjUHM0o2id1Co3aBPsjHB01nRtPsjrIDeSjsb3htu7m5UO%2BE56XCDVmZ5gauUXYOtk%2B7jinULfhc1yIYD8ciz%2FZT1RJKaIQUj6egvx%2F3zJjlvZiJbS1ApiIhMJXsspGMR%2B0LPJ7PkkKZGEIJ%2FMkd6mNmj3l1lDmOcBCAEJyFHocI8rPp1DOUOwVVQqWOR1sZaVVrQT6EYIu97lkRSmVLQXRYegGkee4iucUGjajydIxsGCAL7VNlTe30RGcK8dTqXeln3i86BLCW%2By24ec92zJPYtol3znswoWsV%2F8bvLTnnbeLOVZs0kIhA7PMKZohj78ySBwLtwJSP%2BzdNHNx6Y32SMXmzVOWMFs3Q%2FTG3NjZCI6QXga6%2BkaTP1quicTn7IgcFqgO1b%2BGNaWHqzrLJhOMLzqqagkwZy8r50qfZXRRH9jEbxXFRubRu8mNRbVT7ZM2kVjDXULppOlLfWMPChQl5LyfNxL19KGFXuQKdKWo06EY6G0BNxWivWwYNKrSHipz6ah4gXTygFwT%2Br3O6EeMt8JbVRtm7xAXQwwn7ybwwY6pgHVVVZ4qTOZN20IM%2FLrthxsyPZDNKloTKoe6ZGLI6tsUvOc99VpXEFfif5ASFOKVDwz3xBIg99i3CaWiD%2BJN5JQmkmZXln67UOp%2Fu6P56TC1y7nrIhPvP4Qx67P%2FMGBAct%2F92TS9NkuXzAXltD8kl%2BPpeoEJR6X9P9hZ2ecd%2Brb%2ByKkyzrnM8mqjZDBEm2oW7UaFqiTVjy0RtlXo5QHeQ9HUHIPuvRH&X-Amz-Signature=78dcbe4aa85a38b3bbfcbc574e394fe45d4c02a4e0a7735fec7646e3a775df6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
