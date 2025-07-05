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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4M5QSME%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFH3ivjNJz8iQ2giL1mAyYoIAotfvHQIa%2FQaUQTJZvtKAiEAkKopOnVAjSkYDVM7OmEU%2FFkUXJtrJBCHugaSZYKeqbMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK%2BbCKmD%2Bo3zrOPktSrcAwHGtqD2jQ4YU7yG4G1yfmBX65EpGNGJLzNMdCZVQfop0tFlawMWYjT9TF7KQFuhi9dNlqnv4kWrlkBLcwaS0a19XzSdXBaaq6oPb4Kukg0MwkgrSRGpD4vChIYx24rvb2JMV0zmtnBHuiCDtW7uPZbZ10Hmj7wwitC2v19QKrIBpIZcidTbF0z6z9mFV9rdKgSOWt6LqArxHnW4n8Foq40LUXuMH96v2p8bmuxh43W9ltoLvI9MCsBFdpN8XzmZgjMunGhYkSqRs6lsQd0w%2BdvINKlmkRnYfQInzXzdeJa1RbeDbmKCVi%2BHKK3eFu%2B8ad5Ydxzb6lPdmu%2Bf0fH%2BpeFML2iha4UYs3L5c5PEo1Y%2BFk0N78wePy4pNE33epUDM%2FGINqyW6cC9%2BJhJqPGSqUEEVQYe%2F3sGVc2fJEhrIiltnn4lbMrfhvbsFeS%2FSe7HkzF%2FV3kk219JN7rielI6J%2BupZynQDQXjgOWHIlQZ3aPhb0wFOcMcbv4%2B9Pv7g7fl9VRBED72oi%2F74oy3U2CGu%2BhawjzYahWpoGlgLLsrtmW77cnfN5DToOIxCEoPWyL3HKyVuhvzoz27s8TMdsCxP7mn1TMJsMQFdrhlWiaExN7ktqaM1td76%2FihYvTHMN2jo8MGOqUB7Gqx3ddTflQ9d5Dh0tRQ48U9F2Rp8pPA6yuYP6TdwEGa8%2FBxKRUFkpYsCT04xLnG%2B%2BRYP4mQQ7qjqLJVUxTgBH8eZW0I2gTnUrY1%2FYDMcvd%2B81Ki6zbQ9ICeeZLMzcfNFDYxVVnOmNwV9C6HpsRPV1jHPbOHh%2F1pedTQQB81ja%2BBfVw%2FYtVJPq8DLG7QiGUvabRKEWw4BP%2BXAI7hlix0%2B0%2Bu%2FES3&X-Amz-Signature=1e3252845b4ab829e80dd038c9325a34eb8b25f285316eb2bf3a5e35e28e2e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
