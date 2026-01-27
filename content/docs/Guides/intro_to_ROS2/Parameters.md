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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYT4NOXT%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIf6fsJln%2BFF2xDPcB1Ml6gV6xbKDIICU%2FZW%2FKhNq4WAiBUz6TMlA8dFWYbh3Ks%2BnvXEdBuuwVb99xlbpELSUjKqSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMgaShZaNssrZkC0XFKtwDF%2BDyXru596AsCoU2gQnk%2Bqv38VL29REac58X7ZXAvuQNiguYrMp%2B7X0x0Bn1GLodB4TgnpA2AUVFK08iDfCezpzD%2B7KD2%2B1R%2Bi8vKloJCRMpwrUa2ySorGTaO5zbQoBhlE%2FpBxnczD7bzOesy8PeudoUQ2E%2Fhe%2BGzp%2F0%2BBlJQq7Cagm7Fk0lkY1WLE4C7RTXeP8UCfTi%2FLCMl8whMcM%2BKJFe3mlVYzjtgn766GRmBMk%2FXpT8td6xj9ca0qW4WLHEpKu4%2BE%2Bl9w1PlA%2BUAPyZDrQ9LbO%2FonX4mmUNTC3FEVP8RtiqdK5VaVyZmrTVwa18at%2FAbky7OTHEgyUqxU4hmWvUOOYGyZ4wxvCgd4aBzO9%2BXk%2FFLfSFtX8j6avq%2Btc1DFGr%2FK4LgX1XGX6Zemk4x6iiU%2BWZK0AhjXmpRrGoG7nsfTfYAsHwKr9kukrz%2BiDvM3Xi1i976DiTbKSD6e%2FROEtDn6QuCpIg1SfWufDaVx8Pm1D%2B9AE4p%2BpNIyZ5NipDguXUzZqRM3%2BO5lTHcwCJdqnJBpRjqXBGzDTE%2BDLYvEQ1Y7sbN4n%2BJwt0sr%2BfO5S%2FDOezvDbIoYEEMRqE2uqAn4nDi%2BKw%2FTi6hGrNxD%2B%2FhWTjH4CB3yUQ3cEySIIwvrLgywY6pgEpe%2FHN1aP8gl73vPAUGHr4BAzVFVDruSmRmh%2BDPtBFfrD4cj7xnTkdA0wkpbajbP7qc2dalnhaXNB1jWuZQwn6hqXy8uCsmWIlQM%2Bi6Hkt0UuOn7r0GN3ZkyIZutipyab%2F7nopkep6gNQcXU7DSzjs383q0nSrhX%2BBZGSD9vTPws7bWNawKNqRGN1Lh3jEvRRiw8Q8wpjjzP%2Ff8F7LjDXN01DtUUnh&X-Amz-Signature=0154d1fb75717755d71fd23cdccd55149d39d55f1cad82f1b4ca8e0669526ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
