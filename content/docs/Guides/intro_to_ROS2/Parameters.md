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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVDOSLF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOI%2FBcxCC6ScITO8z2pKUcadf3xguYgTjNxaEfPRwcQIhAONLZrFS%2Bg%2Bcz7ysFUO06359zZ8V4OHBDQkCgPqVtf5eKv8DCCoQABoMNjM3NDIzMTgzODA1IgzGgkzbh150hiHCH4Eq3AMjx7efj97YfbXZtpSk8MOZPv0PrDHPgs8clSPF6s%2BWeoABsGJef6dAokC5CppybpAeUWO81Zxwrri3PCE%2BiLpy6vHXtNd6m08xAv9GvmytwGvxvaAYpCTe%2FOt0NO9TVA3Y3rr3YzgRWWi4FH1T8aR9ppuQGT4YZEa49gUAnH22X7YHizglhKdKmVd%2FyE%2BwG1Swxndj1Mc%2FbqCbBkzoDy26KdvcO8eFdRC7t4LvWdye9NCd2oCeCArtmqsKmZcxcb1M%2FjBjzWX%2B52rgYJl9W6luIHtNmBfbAqxIR1czQij%2FrUam1R6hGr17ti76ASR2iBONixal5bjLrIhma35kel6vLZ0XqyUFcdAMFqdZlsUVdDwAzGYbcRqWEKBU8yLROorzq1SIBMAfXpWV%2F304UDbrwXRaq5mGhKCT86v5UhpgtXJHSIuRkJ7IenIRW0f6Ydx83ibh16Wcfa%2FwDCOhf8N5lh0oJtJ%2FRfaPJ9fV7eo17bsV0MvR9Q3Io9zDF7%2BD8Q0woE21%2Fmqv%2BNB0NTnpTQvUE%2BfK9w6qZRXAmuosOc7gv152Iw%2FuPwV9SLBMvO1SrZioUpXtl0KHqcBBRRLyNWy5nWCWrnE2Oix5rip5CbwpLCWX2Tfx1bQClj2PrjDwvbzEBjqkAT2TkLsgX19Znu0VFbvuumhfCupQ6fLHfLBxS%2FfVHFEPwbRt%2FoCIzSZNyGwRoahY9Hqtoa6VCC9T3BnFPeZ6XF2tFB0P4dm63RnVwKMqz9XLPoPxxtX7BPj%2B15uAVnR1YQZLESacWHxaOFA0gotFw2iw5QOmJcGT1tm%2BMdcYSo3aBoDVA%2FVZ%2Bkrv0DIIvnFOWs3jrrs2cWW14gmSKxXgWVjhUruT&X-Amz-Signature=9b308253deb42be03da13ae687607ee3b441f3e811e2ef2b6e017f4cb03a2c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
