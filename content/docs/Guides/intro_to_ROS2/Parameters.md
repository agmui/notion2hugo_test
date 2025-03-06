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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XXV56C%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsfWz5%2By73Mke9IsLojc7UlATrH6U%2FIEtNwJCV4r4S0AiBZjkoZqm9hggFNx%2FzOI4jLgL%2BgeNFfuj9gTfCoHPY9Cir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM6nQm6tOx1jPDeJi8KtwDkePOfQH15CKXT9alIuSW8mkYHM13CgQqvPTrn4TsD%2FqegncRwGxCoc%2BipXOIRwG1t0gVdJ0AIqQUQXO9tzLEykdbqNtRiRpudZGboqoSDCy7IQYRlrQu7ULaQwEDlEz8IwCkniCFxEuxNJ62a12Zrg64qab%2B5K2qxnURGgmo6e2tT7IT9cK2Cg4pRRzS78OOP3oJAsC2sa2ltvFt4%2F%2BvpFVxeMdznAnCdhi%2FzqCtIfPgHd%2BwGbxiX%2FHio39cCFKgjmBiJqJqSMkckv5ogqMQFB5bPSwxcD8DXYxuU6LS4z55YKgDmMGMjPXk8hJewlx8lMDSXe8LD3yvJODfxbuD3g0BpBNqJN3pEIuknBKLWTSDxx7NwFunW85K5Zyn4qD7kILp3%2B3PbBTeOGld7ckCQpGhIJbbwJMwacrYTeEcJKRj7MuY6zNJtjmFE5iBgiT9dhfmWehQaiG%2F4DqOPAyzEQi3KGf5aW92WEm9ClGx35DqEqBueFXHZJW1Rt9pJIDYaPzHL9cPDHjX8B6TCk68KvJ3XTkdWgLY9WlJn10Qkb8r7EPD83kkhgFEhXGE8tWZKPTvQx1c%2BVymov2zD%2F%2BVh70%2BNoUsbAuMNeHTtC%2BVsoCWgwXQiZeaAXc0TcEw0dCmvgY6pgHjDsw2S27qP36rCerkXcH8L2FbL%2Fx2ejn0K8x8nv89Zj5PXNiw%2BCd2V0Lnuv70MPX2dyM7OltscKvPBMKjpfyj2NhKBrIxx6R0bXYWHHeG%2BJUgIa8sUWm5GZkt2K%2BpnmUhhml1sLWUVNzYehLUjeIUGrs1mEvc8Q%2FYbQ82rLBza2ekdau55S5kQPkplJHAELnFf2hdvIQlpOMYRwzupH1wxXAmGCkI&X-Amz-Signature=06d9829aeb98d2eef954025865d69f656290a1138737436d1fa612cc59e6d8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
