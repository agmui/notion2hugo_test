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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCQZX3W%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp%2FRfdbychRXuwh8QBs64y4jVks2b%2BA62XNiOLiKA3iAiEA7wYjCMNLsfyosvYZQ9uix30VPpvg6Qw6Nqsno%2Bf2CooqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMn7dyoOt%2BCT6Y77CrcA1OL8AAnFlJ9LmK4zGEIZ11ws8itlPnH6aCuXJMeAjPtq3czyknv3X%2FdVpyEmCqOleT0T8dRA9gN8PXG2lJtGXKCziar3F6aWS96%2FBYHtPs4hrhWznQNxShBhbox%2BLy%2FLSDiaD0JwV3I5o5ERAsF1cDXRIa%2Br941FJJ3P1VIz7pykPpMg%2FFxneInMF5oY%2FI7RMMTdRJlCrA2ViIUcSb6GIlLr%2F933nOH4c0Kl4BXWji%2BmMJbnPFjuq3MBTvz67BN81WX3Bq5jBTcbijEfxLgZVQlf4xq6fXrPs%2BcPggpJc4vx68Honu1vmxrOz2TuDy1IldU0%2BHWF0bE7dMgtY1DUmznGAvxGT4a3Z8LTK4FxDooAbOkvX5b3VowQ2X7%2BsGla7tSMoNAT7MhSGVRoRGaDrKX1Jej6U4KJGull%2FRpqITtXFixyOV1gnK6ixqK6RibFZ4bN46LBoShLnJlm%2BYY5rq3jqc4GjKbCUlrpa5v8QrK%2FydsfPtXhAUUaVrtxVOBBMWi62P%2BBxrIqXmFHnqf7Jh1AwwE3ctXT0dgi0JTOOApOCx8sSc4KbbQJcqNG2eL9hMeG6Gt8j5AFB1f5SPMZlhDBW1bVYGD6Tdi8hhH2PfKVefGPWnNFRXbJlfFMKS4pcQGOqUBejOdD1Wts0PRwylfGrFRecuZf8AIMXbOIqze2CLr7lzRHBQAgbmrqxNQ3ppYqDUXWqsVEDaAgwV9y%2Bv44vvHYlKqLmSSbVrhq5wxQ8uk%2FsZt2svQ0Cbbfzj6osTCnyoSrCe1rV%2FGNtgv8LKH6xCt%2FBzh%2BFSeSLMuRTIfflW5qYoZYVKwiLMBKF7rw4dQzFsdjVB%2BzcvEHu5of85SY45Cj9crkbVD&X-Amz-Signature=041ee860312c83013ac67d07ede081934d43f4367fc3ce48ad57fe4f6d3aafb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
