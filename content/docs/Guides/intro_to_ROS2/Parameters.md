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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFPQIV4R%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZt8ln0zrjBpA16S1Ou2ix%2F0bCUqTdFkr0khRWyEZLQIgcB7qdVGN3GtlZwc2wQpB3Uhr%2FNGf84p1RvTKe9gdFssqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi5%2ByauhrfRldjUircA1liV1R5vdLvlJoc79aW4Fvt%2F73zzibpQzQkr1OhGaWAyCIFFje3Bk1TM08iFu7%2F8a6PHPhysPEXpDjyI2v4gg3HUP%2BkjxMLBJ0BofLsY5PjeJJo1tiRzq1tup62V%2BHQ0Hl0C%2BFqwwU%2F5AzIC%2BDtlNsByx%2F87fFcduC4XK%2BJdGkVdSkG4DmllHB4FbWRklKn8EBga%2Fa1Wxu85YruJCkfPmnxOqB7CQ%2FJzA1YvTTEO4U74yB7i7k3YLiXNnwu5fyzRcPmdyWgNUwbXMbZO1gzeau1NyROezJAorxP%2Ff%2F1VaUtmrQu5pTYVRYMR3EshPR5NVWVHw6QgoR%2F4gtDLFAb82VfWvo0HICXqinwvZyaOpUTeCfjGnjFlfFYmx0TGOaVAPEY40TSO1yL2LtLUXf%2FzNNDLmrNemlBwKK4b15%2FUyMhjfDLaKvsVtxqnTWe5Dq0ugK2HVOmLJyZH6Qilfus1ZHP6tBxDheUm%2BllFZx6ZhzjcbMTQCoEaJQQ%2FYc2n5Qb%2BVvRVDWGpyDwsuZm3hktOICs8bWJ7IL6YyGoNwTUPQCIP2ozRzVUQy5ZY11ukCsnnfzzP%2FsFXPZn4Ei6Ir9yRzbWi8lew0TtzzRWhgWbfFIHPYPcWG6LllfY71g%2BMN%2FMhsMGOqUBcl9fShwZmJCktcAq4hanh7CG0aCXXZ7YQ5DpPzfHIn446CSQ4GThMlx3spi1FSTPwmSH8qbTZ%2BkNvfNdLrAiQzyAHS5uqnrBdl2FhJF14H1tMZ4vYfk64z4%2BqdYcVw%2B6JGEm%2Bzo0eqc1OZ3sd%2Bp7Yh23vwxHz9WU5OBAIwOcSfs5Y5yR1Bjq8JkGOkTxjAFhZ6vs8hSKUivO8Ar75Kokuo64ImM2&X-Amz-Signature=d81b44ffb2ef3842201e975ae15d12ee35ded5e3e72b7bdb288efa68fc633246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
