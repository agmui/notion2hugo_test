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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ3GYY4F%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0lhTnzYLqHiBHVyk7DUmCj2Wpd31qLuWacPr9P3cA3AiEAsXk0GTXb7FXPITYjrc1oqyD5mFyhVracN3xFrtqTpKsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGa5ecI1rVMYtK2ZSrcA9IpoePVsDO8h0MwPUWp9%2FjKJsAc2vxjIYkM9sdrT6tCcsxYEv5SbCDXvYO%2ByawEIvsa7U7CVhDfvP2%2FYVTm8Mjprgm4iUzJKRYvUHjmX6iLhLEk52uXoAIetYQmAYm3WBdLkhvWFf5SEYOfeMMpQFE2Uz1RTY6niwkTBX9IubD2umSUoXWZFOnxLbbX2LSkYdcS9VnpX4RlnVZz4j5nrrE%2FBMWiDXh6K%2FQ4jk%2Bfy7v51HSi0vqtYXYPhlffrGgZQVFl4k7%2B5fe2p%2FP4%2BsrTi2e1w07HPi8337K9Djp8boGdhCLd%2Fkz22RIQ7VblT5P0LlNNqF06v6IkZIZyCO8qukQ9q0s2bLgkTY0utimxcm7peYScDduKJoMLu%2BQu8H8BrTc%2FPlobnChiqtJ9bIN1ZGxTp57hR4dLicWh4hKxdrk98g8YrW28bBBef50e0YZ3t%2FUtS0CK9ShI3duJFvPOgd9E4iLInAw1thz9AlWjgyC6HWI6df5zM7ZWd%2F88dWKkI%2BkZ55adEk4D5QW%2FLkuLYDy%2BPkcaAM6Q5ecLzSb1dCInj1%2Bky0bbDAQAmpv%2BWECRbcexBup1RkwgFxs2U8GcD9aaoGDmRZmyElJ2VSTXgxcT33TchdKucua5pDWGMPyC5MEGOqUBjjUM%2FWv63X%2FxXTGzEpf1J6jL%2FHrzNJi2iTRqxZ%2B6YlVp5p9Yy8GZhpcE%2BHeoJMP%2BGYeWxuTg4PQeise0iJkyEi9GSUPzgI6KKuB6KffbagcY%2FMEBdzmJJl8Yn9beX2Q1eLZXmwTD6fl54qKgUmyOlEPcQCichRU3I%2Fn77IAZawYiqspLrV%2FDPJJnFQ3cYx8xWSCQlvSmhZE5QNgsdJ2KnvuZlmBM&X-Amz-Signature=863360cb0e35375bf1f9e931efc6b21cace61dafd0945d816e57f3a82fe8c615&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
