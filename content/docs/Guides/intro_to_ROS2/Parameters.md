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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TD3DPUA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2SqwpTIFnY%2FzThcTDR5RRUfZ9PnJn%2FGY9OQ%2BFG0p2ZwIgf6xsu4KuqbqbJ5g0EVkf5qvKxvdLLis0Akl4yktn2lkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzU4a%2F%2FQ5Y2P4%2Fj5SrcAxxTOKaec%2FPbKe2hOQXzx4erdNNLjO859xtUbz82TDXQTvJjMQa12%2BRTKnMzRvCHqQuW82gfgvJwMgYA8stHMtG00Bk7Z07G52v3iLrZtCw6zxufJCWCz3MadcU%2F8te95D32%2Bob2FBU50nm%2Fw8HP8pXerlWyeNpE1A5d%2BDelY9aXO0rJtrNvtQj2NkvV%2FGhfiokP6nQJTWJK8n9yxD%2FC0rndExVaO5%2F6IDYrfKO35Evy72L4t0VvdRW2kBwqYVVi%2FWC1JA0DldghFFYPUGiHfsaEKBP7wgP32WjkFkceiYLsQFSIOaSKL0FFzuxMfXMn3wPUYtfXV2RYa68dUEk6zjnZmbNGnsOnE6j1J7oCEs90VQSd5ogn%2B6Uj02Pk4qqbBPmR4O40md5mKDEVWgWhbS9J5DhZSeqbze1XukBNFI%2FCtATK%2FPr12MD6sNL3frPMqMXxuxDfSdH%2FlSzqBazB7s3HFTucv6JCGngPtXkk3aNvDWtOl0EQS1BZxoPIOPegro1uHumRGZ%2BBuhCO0Q6MHbFLEUZITYtRxz1LooBoOrrj5%2FLmu2FF4cP0oLgrV8Ukyf3Bu5BfNkYiVk00TjTDX5m%2FwTpKEJqN%2FJVDeGerilqy2p5fucPPm3n7E7m8MIOpxcMGOqUBnpBb3tuB5dxeHOaHqSGKBdLZKT3D5uRHZdD9CVYYQlOUpJzBy3jURNh1RWRDDXrTSb%2B2UEKfUg5lL3tbulSeQBjdkIOa%2Fv6VJfLiRfcO%2F%2F%2BRLri7VKu9loVZBQ%2FBU59BSwDLLwhMqSH9GGNJXQ%2B5LQBbhSKzGxUd81LeI%2FHyvGen9lbp2jMIz2ka%2BU2KvmEIpgF8eRmpVSiN%2FyLpuzdDCX6ca4Yb&X-Amz-Signature=976b72855b2fce1ed8ce891d8bec59d9bcee27897f094a1cc3d61e8b9446ff7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
