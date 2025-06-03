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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646R5IZVA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDHLLyPV%2BppyHW%2FTMd%2FOOZZu861YZ1PPcgzcTmeF8n3SAIhAJ6d%2FV2gutJummckS09JOTYvPzvYf9OxRIGG1cMl6vNJKv8DCBYQABoMNjM3NDIzMTgzODA1IgzOZzQwCd%2FsjgQPzP8q3APXp0aGrEzmii%2FNw%2Bts93fw1fHHwR%2BGiCxfbSmTIUxyZeSMVtMm25tLh9WVy4EjGLaBTAfnDOCojaAhopimcOPJPcIvCk3TLWjRLSw46VXauRhYCfK1ULo0MA%2Bcl78xkdQjT%2BOsir7t9%2FFvb4kBWUpPF88c3i7tOQnvxuDCf7aE3oPj8RcKX6fSIhqGbQOJseASlNtms89OU1ioPyxNLw3eSneUqzx27X97PNfD8GARH%2FbvSwKkgf%2FPsHNf5idMESmHGTfZwwjwcoiED%2FGRMt6YEGxa4UUyvs0eXcUEJz%2Fz%2FYMC2fOx2YLLORtNXVDBXuZDCP%2BTK30DkZBxQ%2F5oXXyIivaofcU1pMzpwFug4en3z0i%2B%2Ba1TX4ElUOMqXu%2BOkGwQyPWt5LgJjHZMiXz5%2F%2FyOzwYrZzs2r%2FRuhaPZhh7CCiwI3lEOQcEvDShT4HkEAzphuh1VB%2FkEIZq479aN0y0zxyGHsqt6naF6lkBNsvAIM4C4dwfujF0zeZ6nfk3EZMxd3%2BMycSoswObuvglflUUWR%2FrRUVkI23hmiiHMUydcXL4QLG5puayrZZPeuOgw3iLd0KkAMwMoDsiD5yKCjbq18CmKufw9nnIFu3zszcou6J5vCIVLAbkZTxxEejCg5%2FvBBjqkASmpeza6gvjEi%2BnXD8LqNv0Vx7GneMHHAdkhUvE4iwZcnvH6G72pMQF2hUAO0GozFCaAYm%2FfDJKTDF4A%2BAJKMVp6%2BHJp674xt3K1QwT7hqkYs4o8290lUnj0y8egVQ8hp%2FnCMgqb8rvBtaRIdxsc2TfXGW8PtQliDeoVonwNreNIMNbC0E1EU5hCABAvLa%2FlZGVrJqj2FW12dagxtwPWdbySNxSx&X-Amz-Signature=8cbb50ce0ddd4ca5768c65f762bb819911603220207795541e2de8d906dc6e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
