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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IT6FIR2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQmcVoY33qll0pEvADpDpcoGyn0qZ2gCImLAeawrkuUAiEAyX4uu0GevChFcmxdf7M7wiKlgeGO%2F59hV0wwUzg7ibgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAV82wR1sM7ZOhv3vircAyLntjOfs4Iu7zlDovag%2FHW6W9cMfxujtnvWaRkwtMP4Alr3M4Ii8kW5W9NHcE5yiO0rIUB1zWnSPPrbhmxBhKPM%2FhUzFQ6e2VeuVgnK4z2ZJrUrFAktGWw741p2%2BR4L1rpOazFI3aN1s5tL04Rj21iKEseY%2BM7KigHS9ZiprJ7ECa306Us8a%2FhsvqiQqG97RCMo4bo6o0nQx1rIxUJgw78%2FGcxFbf0LMURfECKqYrjE3V6UA6bHY7faQFdiWkeRxujiMJTw%2BLHKQa7v5ols7g8GAr9rpx4BZqJoF75e39hrx1ydsmzYxMTp5RDxVTYeKv6XbxL92N4ED1QNoQqUrWJIFwu2AO4onNQ%2B0T60ygAQmpaXY4nnnsae6%2FHNqCUp8Lj0h2%2B%2BzuBJu7DidIYCe61%2Fq9eN50DxudzDpgAEcgm4ZZXOSx0eE4NHYqlgfWoW%2Fe0Rlbyd7OIODQtwZaTVfCrHY47W1HM1amy%2BKNdxF3xTAAFrlh4d5kN6xd%2BmfFJbRDdrUStnavArr0F41BY%2BxQKX79sYznPy8EsTer3TYPS3wGUXI84MVHnYnTB%2B4mNJX6IMuQiUWzXN%2Fdc48Zmt9dizVzw7zdLTBNRP8LLiF9JMKmeMqljMMNzwGjgtMIev374GOqUBoQ%2FYxww%2B%2F6TeVnYRCpHZIY%2FEBNBA3xsNhdR1zYcHJofKnF6BftjWidGLhVfl8ffmzHeayv5Oy%2BGvWtv7hmpIY%2FSV9wNJUQ%2F5e%2F%2FcAraXTEmyzL33UvitH9f%2F41bsXYrETNXAPNdZ1hnFGRIpqbIdPboYszsvClkMFxICANX4D6IlZ5DnA1KMStBKlPyzQNZ6gyZ5aBpal3we3zAcPvyHS%2F4TMCo0&X-Amz-Signature=6f0529aba6d8a2dc65ea359cbeaf6bb0694a4140dcc9e35b2fe51b1b839291c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
