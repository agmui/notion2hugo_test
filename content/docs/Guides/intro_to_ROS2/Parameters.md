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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VP52LQX%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMgHFU3ayWNI1KPVouUWCASK1oNclA9xlgH0ZLeAI%2FgQIgRaM8r1QXBnJlHcB82obcjv8KPIIAwFVr%2FYB97y8YalMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhFen9coaXy0W2pGircAzN2h%2FxR5eAJF39gFfqKgpatnNY38ggjnvCgQ7AsVSEtez1ODa%2BruYnlFJktm3vJp4CGExpGh1ptwvSEJ0K23ophPcEYb765Su3lWSgZInjtTSuhT%2FAA6LqEF0cYNDSr997L%2F5bIBmY%2BPWVn0Wxe30Uh9Nu83mJCcqNtrcrF%2F6MbZ5gTd6AhWjJNFChOgWp78TxyUXFEhzWbim5EKTSRY11XX1yHUmu4rXphCkARuQg1oMMlj90sEE7VY%2BvP5FN68GnAe1lRfu7zXOV4ZL%2B6qLJQ4XgV5n4m8zI0uO79XUnze0tWu4O6aNTkyaBS6snsH4EZsm%2F%2B72JfBfDy%2FpqQBIsxriaBGS4M2Y4nt8Ya84OkRsne2ZmSZI6cNk9h8vp6PGElVMPDBH9gkYViiaywQ%2BfpCB%2BEdE3nT3bHAW8eJCC%2FMznaUezErBzrVtmPAHvDKSBNb%2BI6L%2Fa9keTxknx9arfsinaYQYQZ3wj0PoFbQltHPIBwytnR%2Fr%2B7RCz4eH%2FJgU6P3Fl9S%2B3C34At4Em6q5L3WjpaK2VSDpeXXkeKvXbmhj9efDSW66Ec2lXQPZmul%2FkBOGq1zppYPO9jxeoS%2FhSC1yWod04ObMpYZLcATKaanh9CyBiCbBZMH1pRMPvy0coGOqUBRn4CKEQlmTlwHj4JY3RuO%2FAVDg7afvuVCDutMrwJkM%2BQGJmqrUj2%2FkiQc8HFDajlMg26DWqpeEdUss9H42V8Usq1b%2B422wEWkHaa%2FXSvCnPsy7mTm%2BT27W52Ej4brKS9h4U9xB7BF3%2BvcGNYzPi%2F%2FSlKbLZ85bSUbfbgTFah2HmaOoa9CjSR3SDaS2qE35ES7CP%2B8VOjh2aPjh%2BrNdEquaJ3XkHp&X-Amz-Signature=61250033702042ad1c0f883c72057b15f95640b8dada6bbb6da19a1ddcb53b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
