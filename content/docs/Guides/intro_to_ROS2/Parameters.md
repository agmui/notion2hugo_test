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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAU2DAQA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIBUHDLFIsSkD%2F36r%2F0DHRIKWDfeZfPj1BuEM6fQu36XaAiEAzsb2k0rbO3nRGs%2Bsl602u60inpXUw04cS9jA6oJupEkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtGdxey7zKoGvtwTircA7N5LileuxCbh4WryU8YrNzIcXW2gV2SERIvWe6lyxGhWQsOaIdiKD1LHCRaJMIF70At2SasSzZH6d8iAuqVSUc%2FQFOMfX5NxjJ0VtAOxDOZzzAbryWPjWCmtA5Bcid9%2FDRyazJpos0ajYEcPb%2FiQ6rmqvbQeM8jtPLYGl6NOQ0z4MT3gZZ3rdjQGWYuw6GL8RkcUS1ocLVjp4JJXtMlzMf%2FD%2BPtifqGF%2Boxs7PHBrRnbEzCAZQcQ6sydyiiDBQiQXwsig5nDVr4%2B%2BVoixdRsmoKW%2FqiBp2atvm2Ms1%2BdEbXa4sYWj%2BhXPJGhdO3B4KKHBuLYQyvOH55dhlySQSXtv8H1ugIUDI1jgIN9hvwlwwDB%2BngS27fGZ1KyevXyQpUSkAv7WyUb%2FquHInlqZTIcjPV1DjsrN6pfgGSPozp8zE0Vqg6KPRRpEqZjNt8CLCyU4vl1i6L1Avotn%2BZdNXNC6k%2Fuy45egY54KEw%2Fx03QW0uRroq2sASU%2FWjDeX3TpI%2FZ77ePiHkrqbmB88RXh%2FVX9OwgBaDRIUNROXU127IanAFpHgLSTQJY5y9OiAXisTmVYzmwQeybLUhR04djlHH9f8cW2yEunadYXkkUfd5ImHtaKqTi1gUnFDIBteYMOz65cMGOqUBvjmMbCHejwrOUZ7VNzv2P%2B7iah%2BHWuGMGprR92yte4w6DGhX9F9bTQm6I8TWLSp%2BKXWP%2BstmuvylTj91EheLcNtaXMNFdzPedf3ZG5GmXw16nXiSvLfJfqlcjjFNfBkd%2FWXaxxUPQP5BKij9JNlB0LCtz747hD5P%2B3kjM5zQPjyFdDvgBGOmeWF1lAxpuLmv3oa39BOFyRl4MAh6RSzSnry9F3aR&X-Amz-Signature=fbcc176b8ec148e6978872ff69fb0b9eab641e3b118ebdffbdb31fb5bff95643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
