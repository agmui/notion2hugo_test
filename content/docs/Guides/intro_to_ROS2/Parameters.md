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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5IACYT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFawM7h8qCBOzzaRS3tI9oMdSEp9AD38R3wB8UrWFrleAiAtwQNZtp9v76WIXIv%2F3TL1HAWR3P73uW1f%2BUlKRjTkMyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMnn4il8h1Qi5YMZbSKtwDY%2Bozg9ilXPOV54EHVzcEtoPCsLnWUhVeNN8APnsGFwgW0j%2FLDhKn45TUaDleYIv0hB7uM6j7sErIYVSX4J6aybMk44tkDfvSAJ8vZCozBwGUZ%2FF56X6%2B%2BipRPf8lrXxQ%2FySgj24jKt%2FDR6OtIacz7%2Fe93mKpAVH4bF2IP9PayxzRCgY9rLEmjjBgNMyTgYfb6MZ6Y4DkSE68FEgXYE6NK0ciunN1vZDDfTpVHl0iaGBocF82rRFSr7cV0Sdyuq1%2FsKqRexLPGGlANRYZfRPNk8nezmYOcIzOBQwCuuy9W0VQIEbe0I6ePQJG97cOYHhny5sRzRYnBLcsrv4npENqLd7D6xBFRK1tIsAFT2g1gJEnqlGP6XrVhNceEfUF2fVd5L7Qn6ipdKroLZ5ghzv8nTjOpIn7xTl6OEHuvqEy%2BB2S0s%2F5Yl1eYW%2FOy2kSMUYKC7y7Fn%2BolQ9fXnGdmHzA1MXIrhwzhz3FkzBH1c4%2Bg23jpPq6Mdl6bdmXbOgljmVRNjhUWwOFZcsRqMWSEPMIpexAl9BotTgcrOzp4WbWXEJtOwcCs8qdGpIZ%2FWrFjgnAVL9mh0tu1FUWSyiXiTs8%2B%2BUDkc6VDZ8jcKUaIfucpuXCNQAhC%2FQynIhc5rEw35%2F4xAY6pgH18tozEj5puYrZ0zZKYVWhIzKf0m0evouJbieGhKZJeXgi7MMcgw8JLn8GpHVrrFlBBb8mwtmVe1HOPnZDGKps%2B1%2B7gbr2oilUtsq8UifKHJTogKD5eD%2F1qaKW4i1ncyIPg0BEOIptBtTc%2FFmeb0zNWDvYlDdUZk5dQuc0r6KSP9zTo6t2eX5KQ71azjGrk6%2BQlsAgVGkiXbgq72dVha5%2FGFdejiVs&X-Amz-Signature=a25b774dd5c8bb564d8d5ab1d9a66cf5b362778b1d1c7549f0e540cb8a3b7f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
