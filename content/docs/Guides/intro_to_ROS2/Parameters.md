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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4BDXNT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDMRtAC8Q%2BH1lCV3Q17vqKKQZ3M%2BSiXNorK8yyxBd%2FA5AIgAemF1AWz0xtwGVzNFjsOc28SO5b6QzG6KJCQJnLiKHwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDwuKkijkEi0Nz19KSrcA46TfM09xnGi2E2mueTTn8Di%2Bu8cx6vVzkMFwkF5vLJVixNElzab6mqDP3h7p5iMFQY6HTLA2ogyjLOly8CPT4a7eDCMSduhMk7xaLgjvWfGcf0HnZexnlMRxWdf8hw%2BCYXMd6MVBOjeHg%2BT%2Br%2BWhGj5r8AaY9bquflFhNZydR5KyEjD0b%2B5z7MHhb0qwpW30trEl41EyHTp3i%2BV43IprP2Y%2FMp%2FR1IJP9D54tWnWScwkYrMvR1XaXs0pfXL72gu%2B4hXJkFGBk5sm2ri8d%2BcPmO9B7HXk3ci6OLM%2Bg6%2FF2lUnCC3RnTmdewwoj89gQSTWxGwmMqiTEdGhVSPsVizvSw88sv%2Bub2ITpyLppxyYwGwI1lNR%2F17YRw3lEmOvZUlKExpov8a8NDjd8npTf13P8p31MCAACGdM7OU%2FYvassM5SSZA1H7JroritVCB9hE%2FXn39MHYWClVQ47jFniEaFEABjQ6zyKknyjYjxnIARv5Jq3TDgBnjCruosjwOufML9GkWx4GoRuxrpKr5Tgm3lXv23f6QXjKN6tdB9%2FWl1j2iTGY%2FBdsE7lnXXshJ8vzcthrvAnEaOdtujKV8KsWfzZzJQayWlmtF%2Fr%2FjIitAMPZwa5loucG3vcV1zK8wMIqzgr4GOqUBK%2Fx9z7AzBgjkUdTqgIzz7tM7Cd7YNESu8ZS3MG%2B6wWEdSujVJ5jU03t6p0JLNQ7GlyXzNgOJuVjdTbwO7rw0p4GyDUb%2FBkyC5YwY%2BGRMubkkNg8QlRBVbvDvazgmI75iOAn04K6t3TWoEbwstwlUxijrebXRtxFe%2B1KreFY2ngFkgniRupYsq1KsoD7vDfXQalNhcKs%2FlOvxSC11vkRM712VZZu0&X-Amz-Signature=6024e7ab2222b2aaf8ebeb2a7840f0ad23b092a208d6797cfe7b547177051b85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
