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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSATVQFW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCICul4Y9q%2FSGmhcAByTQCcOepxtiBiguRJOrD2CrZDLMNAiAg4bfpkoCfspJl%2FEZit0oBuHqEH3UK0hoqcnITl%2F7DWir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMUo3lD%2B%2Fxv2pbMw%2F7KtwDOAffYvgXYWEQIe8yObfeNUM2XsAk1gH8YG2JqO9SrgBhrZ%2BLkZKp8PBcmMSk6fEOwBXs1Jo0Gh46GKwxtGl1fMmECQt2FYFoZPh58%2BHBI4K%2B5KYeJH0kIAj7xaYhBKMKWMVVP2I3SUmlwLomVrD7tpZTFt7mxieiugI8cyEtQHd1PjrvobtffWeaISOSJOPEK0s2fS7ifIq52SK8WLuS%2FydR6xZdASAppVLn%2BNa4v%2FLoMsMroV7jk3yEvm1Ew72CFh0bspv3U0SSS590rjjHnIWQhtP4EoVxwNs5FLc%2FWfX9ffXyk407ijM9LRxI%2FfQmQp%2B%2BEQl1JHCYkttQgyzA3vFcBd0vyGUv66Iw8M08Yea0luEBzNV26fn7w5dMR%2FWYgREj4VF6VXGaYRuGJAvIrw3DUtK3mfdnXGMKaMxHr%2FxHR3GSuP8M19yTfg2K%2BTUEvdDN0%2BgZzHAT%2B2Fhb9gXhU9SAcfdWRCi1xYD3DAv9f6%2BKpQJc3bUgMc%2FKl6a0ixHgEV4ktopoWj610We6ogWH%2F7N3yQrwiEzTJ07JZoVWfC4tCNNqp%2BhwBCdES5M5%2FfXYR8e0E4LJunOHftfaXfNryPIzN583XnAJVaSnZ05mFkL5lt%2B%2F3rvFneHSI0wouDqvgY6pgGLo7sEd%2FWfu%2BOFYBprCW7AB3W%2BYFfl%2BcBYgTiQWuWUucUKcaJVnZmrsZLOOTLRKY0XQa%2FgKKcLQEUdWxdsE6b00P20da95%2BtOCBaJX9qpErWUFk6jBXj%2FMRtkiOMr%2FVeQsJ20VJCxQ9R2sC2q8%2FyIa%2B8EUiEJCLmpoamY%2BuazPAfvAtkQH9I2gv0HRR1pVfpPcTHQa98aMC11srOACDxy9Q7aeCUwL&X-Amz-Signature=90d9cf9e5c3d12ac3b804e98d1c7a9c2dd6f2dd6285efaec59066cced1d65c5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
