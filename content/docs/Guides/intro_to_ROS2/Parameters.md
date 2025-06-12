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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP65M6F3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCkucOWDeWMNMB5QV6WpFrTK%2FzNQ4VeUjnrsbTX47XzMAIgbJg7T79K9Jvv7WG7qRz15ocFBoP3Z2t4tP5XUVseLBoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMV9hKwA35BWSiEnlircA0r9pKG8AC8NRVCxZJnLBwkGFSYAFAkcX8O63UNomokb%2BKPWqQlp86eRs%2FPIDPN5foCMtUJmqWkXY%2F9EwFEjn8ecxGScrsSqI%2F08LHivlLyV6%2B9FV64rK7LXjMF5vPAFH6pq1YbaQNKrSojwIiIB1i5z4KYYLFrxsG2YG0KrbnxpvENFC%2BJq6uLDcEo84%2F4gs6SvwR9MZo0Qpg%2F6PZO62L6v8jjbcvl1DTX0Aibahp6JiV9VeM%2BqCwaNHGL%2BlKsT0OGDh5n%2FP1wm47ePG67F%2BZr5h1mO3kWzZOPUX3G4kATFLXsZUMVDo6ZT1arGUZ2w%2Fysiptx56nxYRizbEK6xj8qjfZYPGstzSjBNltdOGQ8w9cInaZPvHoizzYod803MXyzIXwjQSb6gHcEbb%2FsYFeBo7bcrjwNQcx8ybPolp1ZohPje8TqMchsW5yuaD7DZfiUfcgYN%2FuPsNDdT61ORkasIdwXLugHWAZdbHcbzrA1SrVUspt8s6rZjLKGq3Sfsu1DvnQbtDfZZw%2BXNpAQG5qFXhulErUx%2FcUh7XAlD8l4nCAU3we41QMVgbxuz%2BXDh%2BldGIygODh42HPtPKMvFH4UbXr7phUuSFegpR%2Fraymt5J8LryxCTdhmG%2FNxPMMWLqsIGOqUBB8gVnOA%2FePs7TGajqrhR3%2BFA3dbnHZWqUJTbb08emYG%2FMQ9qFJEBUpbXEJefKx%2FABWYA9gPceHkiEOB6nHnSRIudy%2BXu8PtwpAUz6SgSMw1GC7dibcNnQVLYJVaPQqv7Ue4xFubuGU1rgfgzSbVO6QQVGOFEL7dDmVPCr08fWAmlAo3%2Biy1KWQ6paacgBS4Ql7NrDZJbP6FianWln9F0DFpSdTFO&X-Amz-Signature=95c7cb490aeb8c166201632f4862fbf5220a1ebebd16a52942158677468c9b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
