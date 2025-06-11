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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEHCF3XI%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWw7GAzMh1q4Vt59uB2Xm3XhnDVH%2FVmFLhTg0BUsUzRQIgB5IuhtqwhGWSnO%2BzWbqK%2FxWIGmMMI70p7pCEX909MyMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINzlZFCsgRc0CDibyrcA7cX5zw12Nilo3wPs3sHuz4F4FB0TzTtvIaw3C1jXPm5XP3KLf%2Fap27ypE1w0y4%2FJKskz2dMRcUXqki0rh7WsbH%2FM5aH1EMoTaMT2%2BZMdShlvV2S47SQLb5Ace%2FNDn6mD37DDkcf3W2haCii75wQG3AXMeUdoXvDgp%2BAo3a57gjelvs4DMP6qLo3Z4dGCRton%2FIOvPQHpBYxhq6saV1ofg6gbyLGaAIJIDcmN78PgPCF2da8nf%2FuRJhEHmuvAHap9s3zNAt56n%2BaUj0Z%2Byl7dEflkmQ1nPj1NRS4MGyJJ%2BLoerFxRG3tteQR8crVLAlQnHHZ7%2Be94VRiQysc%2FQV8i7gR5xopKHJKAIR2Fi15o5VrvpIIvQ1WCmDu%2B0Xa3ZDxmWXJhqeWDfl57MLvpOdbK6gAOC0bkWEETAnVgtlkq8%2FmZOQUToe7oLFUAvgoeqVtYiEowlcrlG%2F7yVrB5WY6l1GFhSHtF4sDn8D4KtDoN3xAcfw9yK8bvYbxddo41THTAOMnkfQ0fn%2FtREdhV4gUtwcH2oBIbvefPcgTvY%2BepheaC5wiagD%2FRj%2Bqrcw99yFvbMenYwAbA8c6K0mXu81tOp5XpUgmp3icq%2F5insqkf9PejeYIIKXgcnDtDZYYMPXJpMIGOqUBkTOEICjQSg7C2GfGfpu5a39ZzD2tQTf8Xdx%2BEqqx%2Bqj7YF2kk0jpixhVLhzOo6IbUftrGpzi5kJzpw383V0CcMosDDZkcq7Y2CTbgXbP80cfraHeC%2F2k28%2FS90gmDnP96%2Btv1JoPfjILsR3PDkkCJwcxq5xlRdtJVSSm6C3AcXmz14ulZzAv7lrggrZyl3N2f%2FAMJx9ih%2F3l0ONzw7YJkClWgEFJ&X-Amz-Signature=8afe3574f633a983f42865272aa64dd9949cff1561bc1e5591b311452ff1556b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
