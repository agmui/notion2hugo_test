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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2FZ6HJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAHqMmNOTuxInZPOskYfla1NVyoZs3HEIzJvUm2gXxuYAiEAwqpBZQ9y67ohTOqjt5Hm4LcGm7NJqjKcyiOY%2Bmy1V%2B0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDD2iGrY3mDKv4ZbA2yrcA2Ifew1gY2mE8E%2BKBditVDS1zhjdv92YpEgmUG5DlOKAV5kbEiAWQpz7WoUitpzN55MfmwTNV4ktrsG8YakFTIMj9%2FF%2FoKz99CpJKzg%2BlP2p0Ack%2F5SHVDWCqY3Qfzp%2BFDEYvmEJuSbt5sAcCR1AXKrFom4HsyKi2eYqz0D8fla50s%2BEDT9m2hVYnIAmi3Gr6XMkVuKoS%2BV9TcCiyTdW7ha%2F1GOqRZ4x5vm%2B2FdGCBDEVIX5JF2%2BrD%2B39sXIYO9qYhKHYteBq5MLt1d8eYfkYRjBovahzErEPzY2fD7SzmAyjmau6o9G7VflUVDrYL%2FrXZPIy0AmiQLtXYPacx2LBs7fbmG7DTBhpfY4aY6%2By4TAqKJ81s7sT%2FIcOKsAx9VMD66SRtjsD0vM2FQv6bKD18FX5R6ONi%2B6b052d6sMB7Upw%2F0c25REMumE8xZ%2Fs%2FbMO9Ay4BxcT1PwocNXHOdGUxLfNEKaUGfur%2FlDpAYdYqfRWDQlVu5T%2B5utrM%2FP3lUm65lr3p7hGwANdTPYXFVyfJ5gnbx0KVGriMwrICH%2BnQn9cQAo57E9oO1M8lj9jGlyV%2FsEr%2F%2BeZsymNE7u10eZ2NU23%2B7AyGw7i66NVH%2Ffr0cI9cIzT%2FxuATDryJGoMLGXzMQGOqUBnpECr25X3PXGX88FbvwgwjBm763cP29Z%2F0ZlZ%2Bzy%2Fc%2BhwYDEDVeesKiMfVXtVVfm9wIRonNGlrPHR3EPk0GL%2BDiNOUTFC1S6mNC8gpiW9YWkll8mmjlLeJYRQKPcnLhScn6vpR%2Fhhot1qdbCQMNkXk%2BYClWPymGxwQnXwGMqv7dm8K0Ft%2BgT5Weprx%2Boqw%2FgzPB3Vf2xMV%2FPeDwCCdn0FkmfC%2FBx&X-Amz-Signature=196101352e6a935ca3aa750d796b167196ddc7933afac47ff6f4ee9ea42099f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
