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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CQ6WDF%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUQr0ssmnf81S3qVJyDV9Sv%2FZlQ%2B7hKP3MyPpktyN14AiEA3nUeb1jK5X5J%2Fl8KdHD1wzn4IsKXkiRyAr%2BAtDO4TOEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4R3FTk5TI7rUuHwircA%2Fy9qqaqK9wiXhignHJz%2BjYKHVv9SUFdEDyQnFVUpTQzeiFEkxguzHE4meZrhIbLknonwpenJ3JvTZqzJJ%2BZHkx5pgNr2A3aliLQy6yDMOBIQHdRViN%2BX9zfyzscn3K%2FFPI8P7zvDPIYjYCFrxWtE1jvdo9tkdntU47ubjJBElChixWgNekTUjockFk%2Fj6X11%2FByjXx5n%2BM8i6Yg%2BtZfIBIoLOwW99Fc2RHB2j5XGhBMoZBFxe6S950QkBo8iWxQyzbKiY5o%2Bu4vMB6kVsMMSKkuaxrzKVariEQPY4231VUD5jueKmoeXqg8NwKCOgDbgSpNOQHfBdTuP2kZp0GCwWYrzM0j%2BBfX3qpP569Q9zKV%2FuAiHPvbxsSMw%2BaTtPpoyPkT%2FS7B%2FGOo9CtKDVf5XuaU3prGP8RKVSlkNGz9r4579FZ7S06lpC2seUmSw1nZBltOerrsU7OOZdljBu%2BQXmm%2F9AR3p5392x5lQdiFa0CFxsf2Yd1JvX%2FVtQ6LH%2FXpW9sTQcJrUtSpK8iuU%2Fsg3%2FWoFu1iY5A8j8E2KSrQy%2Bwiyx%2BDMIs2WHHtyZ6MldKqL%2BbqhHC7Oku8Xm33UWcif5uAvrp8ckOBqT1p4qleWCHbsGtcIgRuE%2Fv3NhQVMNPEkMMGOqUBwY%2B3kLLiKDsABYeYjfT6Zdpl%2B%2F5WaHb6WNXMVIRnFhfegOVJ0u9bpghrmjoP7dXOh1zItJita8ECEQDV1ui81Ml9IzfuqxfsH2c4gG%2FE9RDF3foEbTyfoG067hNAckgJWtHdesTsrXbydzj1gFMuECVK3u3N3tO2Aej1Qjo9jXrEX%2BhJ%2BltMmnELImWXnYT4S9KDKNcDi8Wmtr2UcnZuuNz11DIi&X-Amz-Signature=c53ce579f9795771ea10875d258fff266acb0defd2c0bdad8f5885d5c96cb658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
