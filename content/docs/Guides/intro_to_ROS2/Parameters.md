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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDIW5G52%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCgkXAPIb%2Bm307sXcxl5hnpqRkLOA81gSHqQ%2BrCc%2FxPKQIgD9TWK7z9pwga0wTomJWOXspUsKep9%2BdhcjDVhDnYRJMqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUZfk%2FHhmCt5Pa1CrcA66VkKMe%2FIv012xoJc8vq85eCZyMP0a0T9Ku9VvEj%2BUfDCS2lscot85BSMddNAST4tthCM65KDSKIe8JE19AloJ5FElG2aRlNIa8qabEZrPS7VuabXcrJdLpRwV%2F1pLy1OPPflmlrD6HEnb6kGr7IsgE29H05FssRuGfTM110EJd4tPgKjUVAc4PajCm2GrvoQ0EJjpsDL91OAEW5p6D87vgryXXdDnHMiCyvUoUH8R3d3RI8PpSgbgYcGJReYEZRSLR%2FbF9auhreCDa1SqVjgMW%2F%2FbJ%2FO1%2F0aG0DjtiWZscI1j%2FiqSniun1uhleBR2djNcGGEeX6WrMZAyq6XURDs39j7lgIOhkpsr2%2FFvpH5J3TT9ZMfuTgMrvlPHYN3mz63JF7JYpY5cEwMZ%2FvICydBWZKZgxXNKC2oswEsIP3lu74G0BxZCwZGDWvgWsRQi26buy1nBMQhXbM%2FLI2UpRw%2BNP7d5yWJS4GptRwzK8rZrn43Z84hp%2B74OguXYzykGL%2BAxX%2BXJsbQgm%2BRqn1EeJ%2FfyQ%2FQ3Eo83tuNvfgek6YA9wyKQuqRFcNf%2FPr5S9WrfJL1lehJsPIi4YUBQRdRgyTuh2whMCgHbD18uVTzrC4dAFPOsYZWATy7tCv%2FxhMKuW2r8GOqUBk171rp9FeXdmAG6jt7xKk5Y1BwZLmazhXzHvLp9qhYVrman99nwsNBXBTNlkfaycmI2VICk2QRa2qu7DHKtenFj0QnwhQQCY7FoNxria3K9o9gMIH3xKPIAjIpaLwMgt%2FAxdg%2BLIR2MYyfs6hv6TomPfqLMsBU7BCkpuPNaecHQu%2Fj7y32Yq5cUauqhY7FTuWUGcwfdN3FKuGWmpJ7%2FEpnCkDj0w&X-Amz-Signature=bcb26af6b0d3f35a5aca949a26f2ab00b069c9f148c2adb4eae5951d72527d77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
