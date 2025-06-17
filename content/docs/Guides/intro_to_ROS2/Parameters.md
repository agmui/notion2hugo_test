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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZ3CPY6%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrZwESydsj6eA%2F%2B9GN74cO4Q2fkHcVnzIHtFpMh03sTAiBUqQVU13JOCaYqzdLqDnKHmZZN39PKW4XQ7bPC1mp3GCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMhfE6Sw9qvFoLivDYKtwD%2BHq1GoaZ9Lctk%2Fj58t7lyKOPPRJzJYNtZMqWKIb70suDdA2Jljily7VHJxmJzcXyUP2LkANYGo1oSjhFoMJDCFpv1ZeXGNZWl8NBpNfRQ4GvTGGufbKTuEdCwNDlz83pEFfmS9qXCKzJ%2F8GdGWVTP1ABfMq2TAt1leMeiXc6dElkN4FCjBMnTcAT1h%2F%2F36Um9HcxG6Nc5zOhOE%2BBrouvNHsapSkE54Z8ii364Cn0Ku5cSFZ1u26TXkjsDrSyFZkAqNNUm2zT%2F%2FUlNCk%2BoF1qHgtntk3NOlTu%2Bmtu7Spz7m597O7Eib2Bm3CyxmJKL3vRkhJg6c8e48zbgvj34dgqXaQpFl7vC31cdIgguFY9LcSnkb82Qp9suTPGoovDcQa4MpRaPzrv9yy%2BhlIuP1kqrxFWtNQ4LuTYWRf5PmVLqYfocZiAZFhhiq%2FUuQ6M48nc3k8Yeh852DiRnf6dpMCnVQqOGa9UE0jXp2g7rzVlFlv4uicRA%2B%2BPXSsNDZWqrDKoR%2FnZ%2Ftvq%2BLcXNqT8yJckZ3v%2FjkUDZoA5VE6honE8x6%2FQC7xn0yKL8w7%2FFjCG4DtHu6k0XIRMhs107cxaq%2FlrVJ%2BGN4f0cTMj6vxpqWgj27%2FWiGvSt0VEJGaVhY0wjPbDwgY6pgHXr%2BjM2ty3v3xk%2BvLrGZdM9%2F2tmYcOAkuR1qqhgCvil0UTViGd2GckxW871KQUZ4RBaMp4Ok4NeKBQ4WjYqDMICrdJ8U8jRmYzsSlGHy9SvQb3%2F2iiSthKlnPjW5AhB72CJS7ga7F%2BrAfQOEEo7oyvizxcJVuaR5SmIptgl0oxIHQFFifq2WdFQQ5ccnqYwziU1zNV5HewdSYymflxbFRyoY7rcY%2Ba&X-Amz-Signature=e7bac9b55025c5c62db5ead23039a975be9bb8de04e8f0fd5956945959ba4d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
