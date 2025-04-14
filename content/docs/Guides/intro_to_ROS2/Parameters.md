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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WH7Q35K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8o6WCG%2FYKHLIQJJc5upNGNDaz%2B1BfFjxXUzURykz%2BVAiEAvw%2BSbsChv80B1hVVGUXgJm3PnJklPtkyp6h5PZxeu4Iq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDARnA9HSSswUa4PFCCrcA0Z8frMM2XsFLb0UbZT6yaI7KtV3Y%2FEVcVwk%2FWa4%2BapK%2BKzc%2FLfxizD%2Bi%2BBZs9WrHl55%2BCGK%2BkEyGqTHUcnApm8bkCdqeO%2BZ%2BZjd4LL0pwAZ80sAr9cZMsZK4YFkue7LZn8Ce0l6UxCUBVZH1e4oiRzYlOrF61wRea6ctFw83iTkzITrsVLwOcwRtvSXcqekp58SVK%2Bt%2FIL3xsppq033wgQaO5UeumqlGo0IQpd0Rcqdk2HaHrdpqnPTxiKoc2ilGYNy%2BP20vpHtxfiY2MLNdo%2FZrBuSTdVpR1O1NmlYtS7khYDcDwl7sAIGyl9vLFktn3ewiElG%2BOiqzCcFQS3iExyMrC9MgEAnB8tj%2BfC6NAOLdpOTNFtXpE6Blz%2FjjYzhIAvUEVAnlCCpqSESF4GlCKlAy%2FRZ1GjpFXTpjUqqaaKOnj04y1iytYLlXX4JKi8tnpr7nh3QmS6uDBJhLij%2BHpwNpyMptN7L%2BWBo8Zqm7kPemAA5bQtGLZ3deeIyA0M39M8loL61mLlyyu4UmEmMJkyyS4oNfwt47HJQPn6%2BFDF5ApUMl1EAWxNldgF2xJNRpKdclkPLpO6to3aOeDqSVviY5rFi9eattyL48BgkNwpzApapLa%2FSfesD%2FH4UMN3A878GOqUBkxwFuTt%2FnI9URsgkz5a68Mf7JS86kXnkjSJkTzdt71yK3YD2A0YV6fvhFiEig5CBfOsu8xfC%2Fv8YJZuF31jeagYOJO20v2xYIOZZcynVHm5cwROLeawjjUqfdaiH1Ts2dO4dXYN4atrso4%2BnieOOAZ3YY4WHOKUGQbsSGBzehVVNysMmZ%2Ba46LmdqBpqpM93pIB5qZnSa14pLIhylB7bDUaiDo5H&X-Amz-Signature=2f66d7f0a2d96f197a73b0c3109e7626c6a61f36a23cbcd58eecb4880a43d229&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
