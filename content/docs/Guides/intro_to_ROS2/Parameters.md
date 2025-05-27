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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZMPWNL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FHgEuz%2FgbImczUSmzkc00UOiPEMTVnpEn%2FvirzPChQIhAI5MLzk2ZvlSKmn3eE3lCm6S7lp%2FRsFmmObqmvle7LskKv8DCFoQABoMNjM3NDIzMTgzODA1IgwGXTG%2Fhn14%2Fa4f2yIq3ANB31%2FR6Bo80lkG86gD5FGVQRYpWf2kH%2FxPMQgwJ0ronrUpjhsb4sAH%2FvXf%2BJe1%2B3vHbNQtckPUceAMd%2F6IRs8ONRFHsVqKAVGheTTOcM3P0LNHr2tFQkCQkPpsTxTcYqJrBvaFDyQjfC32PEi1Hy0aamG1TFZflWCv8EpwINtSyg7Rrz1jTSwiLAh2%2FpNKaz0WEwcOPgq9VaE7dbt5YBDU8lb7NLUJ5cA5X1z99ppnOvVBVYJoIKqdBrPHGz4a0UY36Gr3Su0s9Fa%2BAZ7mXKarElUBdX5rt9QMVcBLxJfE%2BbBwz0mPKRkCQi9KnZpcnvHr2pL406i2vamyqu0LBHAs232NsZ%2BWFuCjSxdAN%2FP1O5ph9uecWIhB5KoaBW7NhFg0cb1eYyXiNi05zvjE1aKf4bbcOdvQXzahP%2B0KSMkF8lRBkbSpthr70GY%2FpqvLcEGSXuZ4tUrdPQ8cYLs2rS7vMH%2Bm%2BC%2Bth2tU9bR9Ka7t54GaSvLB%2FE2v1RQcXPtlEywep68o14CSmjleIC8bNw%2Bz49XWfvPiqZA48G8yN3IJVccYILZ6OP%2B6CFnkv%2B5dsWpDGNoHB4qbkQ7hEzy2uSJ45CGZhX1ITJYrrY6JHPQ1rY79CXAk5M2uMoEPXTDDgdbBBjqkAZu3ZrEodCCFIKCI37HOizmWaRiGr02s4GuuT9bSU0F%2BUHGxJO4ibiP0c2hg1Syu22xdwH4N44nkhTQLV8qve%2BC6sRicu%2BmPAgOkHMx%2BKa1agDH2U21XLGkFg4Y5e2j9IAfpa1LeHL%2BLsOPyH7bUxDGva1wF%2BriUSoiPDcNCFtXMmDBQ68EtqlbJ5HO%2Ffh4mLxcxkO8AlU6F5wHA5cyR9txPIfEY&X-Amz-Signature=d988fde2443383c399916397daf9e92d348acba2ca04257321c6d342e0052861&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
