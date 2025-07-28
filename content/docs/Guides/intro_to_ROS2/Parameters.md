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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7RMPT55%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAF2HZts6l%2FIp2WqF59wEkBtjiNKLsx8rKht2rBkecGqAiEAhNL1OZIhyzlnwUYvh3MPx2wp7Weld39t5A6E3NUE3joqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINod%2BPrrGr7lGiHsSrcA%2B0DmOnXi5UK93jFiXH9aHsBiipEasynBKHOZgmj%2BiQ%2B3VSXT2DvX9wwEgBxs5IepOfwk3eq2%2BHIyBpqAPGx%2FVVN9BSc6%2BjfXzp6YnCKhCEak9kRZgPWUoLb7ZEeKh0NDEpGBBG4JXc3tcvfVRacby3hj6rA1ONztAup%2Fe%2BoZD8tvN039pr5gkDCIWFLm0a9zVJP1eXlQBMk000ruJxTu9qua8mQYHWBJwcTfdN4Sw7PJfHRlvos41vAhFlE3I2VzoXJCSDUzA7bep1dfWqBz5DdlpfhwRzhK5oAMBF43cNdSz7dJ7Y9lsvr8jzRNawVEyUuUXnoS5DmSYRMHRiHbScrmY0dTkGcSmh8xsWWKC34wu%2FtcgIizdDJ45sXqWtQhXm3s4AHjlgiAfAr08Pbp3wR0WhRM5kMVUS4maXiPL%2B%2FoDIGvRtAdcwPt8Q%2Fe9ORH3QPtXPAZLh5%2BFoS%2FBwA3FGAfwpTkHkHRTkfd2UcWw7G7Omout5IeKoJmruA32OG4%2FG3GuBin2C8muUQbwgPAKtC2OmegRhZlEwe1hqghe9vrHQDqEyfLaznFP9Bbri2LSfNbjXZ5q5xb%2B5wCCGx7OTqTvtMRYX4Fl%2FmjKaUlrrbQQyRZ1neJ8QF2QASMJSNncQGOqUBYVsT%2Bkbf5CZaQVkJ0CYg%2Fhi7SWebJo6126ZaXa4JrzkF2qyk1Fi0wYxh1ykfbmYCWFLBi2hDamszwAxQwreXqgZTbd6gBWyxM7B%2FsXrV9V29S5iDy5BIvsXcBXjJTB6q32ZSey5oww8uTN6Bkdo93b6nqpRoT1WKCW7zgB3rQ4punShurJPsXDpH3mkqPa9lEWOiV2Ev7CvSouq4DfYPakdGuBji&X-Amz-Signature=5ef46743cd370fd3d6f5b266f6bc75b78baf8d39c986ad6aa1084857fd20aad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
