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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4FQDNGJ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDjRGDAJJLyWdjpcA%2FsuKSGvbqeHNbCAJmMbwI11iEqRgIgQ7TRGgNVNM96SVe9cip2Q6Q1MxF2crYurcJ8vHsn%2FtAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKF%2F2XjSNtSkuCDcNSrcA0vOA9H368ZpDOg3WftcO7ECT2WCfky3W2362XrQUP0PzMptEsdU2wMUnODJHEEJqaDOEMGsguIT11LyvDeZ1wuW8rR9gCJ6f1itCPjLRixQ2d3HfeGG3y21JKbYVlH4wVj2xsqlJyDWrIG26vLRXgbVgL7Sx%2Bnw%2B4qeMbjdIKNWARlkA72kR04ZVy0t%2B4Dyj%2Bb0ptkBiaO0mmrPaqIGy1QsPiJ4Tywt7ISfF9bI3JDgNIZVhqE6ML0Nc2LLMr7VEB4vFIGdJt8cT7x0DckU4ASoTU8RNmsKeg9EarxRa1YrrC5GWMP7R5tXCiW8LZOSL6HVVn%2BbBG3Hvf%2F4KUw0wbPVOqM9JmmGpW1j5hM9H6iURZTvoFjHh3nv5FX9MOqTpMP1ze1%2FyLWbcuM8%2B1vu1ysCx%2F%2FeVMErCrEceInNYvXcqgrfSVJzjX5JtQsPsAf5ME6IRxE2aXEctH%2BXiaz9csrm3TW6JOro3ZBxuiY9WIbxyU2oFr80j1Es8vnIZF71Pa9g9LqNXKwzPluvKV0kHLdc09jOHiKre4C66clcFwW%2F5wmf%2Fc3WKo5t96dEx0JGyKceblHtBF0H9jQVL9A5dg6zuem9rxbBQzNCreII5QsbUV4sc6vX%2FtikdYbNMJ6Dr8IGOqUBLz%2FRKgwJZFeaJao7YapIzLnjUtW0CxRYg1UfHaVRaPbbje4TfJBCRnIzq9Qvijg1GhA2nhwxFWjYy%2BGjQLmzCCsPJWTqtfG2Bnhz9Xug0kqJWNEJsPCWHKymAy%2Ba%2B4S8BplaBhpHapo640mtaZu%2FwKQdAikLD%2BeLE%2FYhOPK5z5nv2UIhXWQjlqRk6tDePdvndK%2F%2BSFc4Tgwax2AHkibL19%2FxD83d&X-Amz-Signature=69e2448bdc800889ac19d1b0d4ad4c0142b71cb64b41975ab02652e7b144c646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
