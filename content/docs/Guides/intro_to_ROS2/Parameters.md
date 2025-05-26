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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBO3QWJC%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHp6HpYNQmtvopkhbCcUuyNtjl2PpISxw7ftK2SlvFxAAiA0pTW%2B%2F0JkwnJzhMAb6unYoT2l0kX0vKcXUYsVMNPe4ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWU2szFcX2zs0acztKtwD7Ynlgx59XeH571ujHiSNCmgfE5%2FGYjigutp9wNdrqmy8%2FAa9uBbdOD939W%2FG5BBIPLNLKf%2F0aiunNgT0dN1OT%2Fq5zmcSze8u6zv3L5HsvLbjlpLsmAliyVoFR89A0PxgCHb22vryDTb1FfHEKJIYxr3sa2IBHzqzpbTKW8k1sVJuN%2F%2Bx8HDlIwRZmzHJlTCClD1QSAeukeGsUh8YO%2FeguEEJ94QOe%2FRegMKSFo%2Fm7svNjtMXUnWz3ALLQDGOuzChFKUuOb71cDyIF7G8qJjBZQMbxzav4bNVHSpzWTKuLOuvjjxc%2FmUcvYZs9hJgx7DXcSWJSL9R31RVwmMZmY0ek4FoiVkc%2FqSDZcel9Jhqeo8G55ktQ03%2BwPcJe%2FHDSXe8NG3nWoQWdSbQpfjd%2F8iDQ594wFgbuMDY%2BOj25WAEsFnNWtXIHYdlXthainTY5kPdcU%2FF0vcqZSNJGQ8axlJpJRpZzm8OaBjHUW2dVt%2BnQldB2gTIIWxYzygP2aF%2BlTlcmqYA%2Fa58tl17tJXH%2Bgu6ma1T2CRCD%2FE5zV3dgzU%2BGoUmvUhQ%2FrktwDxDPp2WaXOK4Igqyr3Wtzuf50Ryu1zBc0bep31tt9Gv4vOqGu%2B26Du2nKieYDlPUviKDK4wy6vSwQY6pgG67D3FtyEAi8A0UDAvYc31%2F1nB27R2WZp18A7oISc3vvNfvLUBYMwBKK5syB%2BNil%2Bh0TpQ%2BXGXhWmTZVAOVVuIiBf0YyL89eYYYAvnevMzR9BZu9gd%2FspR7ef1NZNvGMcVUrmwgLEg4A%2ByQiISBBUtT7SCzKGfdwSJ7X21dmH%2FLLWxpfjrLAz7gaFVkrlKHLPyHH%2F1Kvd5P4zeG6P6EaNT%2BNUBYcNc&X-Amz-Signature=0d44782eea28b33d6e146f4e6a579033c439664e5f6dc46e77bdf625092ed782&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
