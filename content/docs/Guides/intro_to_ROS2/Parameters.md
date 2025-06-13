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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4QDHNFX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCVhYnRLE6VfDshVxuHmZBwRqYSrotrBvzIhoeBewMfdQIhAJKmwmEKHRy7y%2FMlpYmMhN5BDTlWIIsBxGRAlPZmh32sKv8DCBAQABoMNjM3NDIzMTgzODA1IgwGa5fOXwWtt8o8jfAq3AM1jreDeQzKRtMeBQ5wL3rO8P7DZ9Cg%2FNvAEBQi9OSJgP523PXcWUWCbJ1a%2Bwnau3oimJK9wQTIydJ8sR06pTWTpLmIydodkh03Wa6mHdHnQZabCoWnkO2%2BEnOnWjrPmIbfsue%2BV20qD7E61YS3GgM19qiAb%2FGx%2BFk6cNvvD0qla9e%2BOraF21aPExgrYdZzEzkxiS6TxyXX0MAT1sXgOOew2QV2H7noVg%2Fn1h62%2BhT2tbVNZuBevENg1CHY2YAeprskUHRG%2BDXv2GjpRRcUnnkepvzAyke6wUzun1FyLobv7B5drDRKQcRXOmBX%2BL65Jdxn2N0kv0OgISqwqvK2TSBWrqU3Ytc1nWWZ1quxf3IvvheyWZw5ZZT9LW6ZT6deDbXJvenRL4S%2FaNmE9hDBOUZ8Rg3EA%2Bbdqob1UrrBaqf4fq0dMrSU31EEIXny85WLcdPOKJcxuYquTuDqHMLns9wuOgniRGg4yZBeM13%2F66j24031dYq%2B4hpltknAymsV8d6sDLUyPSFNMgoR67ITsZeh%2F1Ntmm%2B%2BYtPQALVC7MskxerfaQoUiqnRtP%2BeQqrtlHBE%2BK2E1PgFmQ%2F76vyr3IqoXg2bY9ExLrDgqjHFXrAWycshmzpIHQwe2SKn3jCrlK%2FCBjqkAUWP6KjIqPfeViZ83HTyB%2FfD3E2lhhKuP3Bax8jRNwZEELB4%2FAwtxcajHeG8yCx43CV%2FsA6dQGiqrYsqN8uqiX9oHbwi3YC1d%2Bkc%2BPVHM%2BM2lHgRPjrksU5ahoCfrDr%2BBoSLGeYsWQCp5m81SnMv9UcXrUdxphVYeY6837B%2BIiNDUxGodpbVorP7DGnnun2XA%2ByQW1hN9GO1%2BslIw%2B3zrFag9fov&X-Amz-Signature=5555acfe5db5a5d02e4dac3d3cf680a41a0e85e0efd884d3c9ef029d46719fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
