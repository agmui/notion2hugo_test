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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BNFNJN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGFJ9UizRLR%2FNebcEtJ9ZPlVR2Ue4VFpcvH4FZqs%2F8PFAiB05U5mSWUMGQXKTx7ZfDtvrqxr8%2BG%2BKfD%2BHuMKE5f%2Fkyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMjEAa8QgVmD%2FekJrrKtwDVSnZQvcIs8YZY265u8ShAoM9HDKeJDQQ2Jk8NjgSPGpCLqpTE7bTYRHkOCS96u3d%2BMDzlkkxAVLbdZHhNY%2BjH3uYnX9piavpkW8EKmh2yElx2VL8qVTx%2BOrq%2FRxU8MS61ML8T8nNsE7oo4laxn3rWjG5fMwq7MG%2Fi4aChygUXiWBghyL4QBeCayDOqIiB97RRcxEknGFDRBm8YPDNXOHPv3MzdlBBIXrAOLtTa1cWoyiOd8lEP%2Bfi%2BWZJLn9AdVQP7DcfrT3QzPCJcvVsWPLrA2A%2BwwFTBGoBkuFZmvL%2BCwKEQo38VnFOIWBTQVOsAc9kSHowKrM64mJ5j%2FnACohJ05HNNBlQiaGHXoXfyArCmadwVCsnQUugdNmSs5uGEIaXyy2Aatzpzl5Wqarm2wLY71yyJKO8a%2B90KXBkKvBglcKp%2BvmEdmtWu87DfJBa2%2Fa3Zpzopzv2UEK75jB9Vyoal9OrdBKtZliHU5AHU%2FjS6MbRyQmQd9of71GpzRxgMnVRgU%2FNavncMDRDi3iUg3RuX%2FMr8ujauooRAFXj0xcQErOf6W1vbhBqNHZVceN2HGtAJyfjbXFausQ6dp6vALN3CzhB9u%2FYT%2FGVixAb99PxKe7mHq4l9JmtLrbdOYw5bPGxAY6pgEnlut5JybV5W7col2T76pMsEahDEQ9jJlB7Jb6k%2Bnh4pnP%2FG7Cpp%2B9rlaiFvWJ6Y%2F7Ka938GpAyNjDj9joxsID%2Bah1wvIRWUokLvjwxMmwQSRoDZWbuXc2fQdImlx%2FHINyRdYEFYFSVOXf18mNWyxTjxPUlPO%2BobXyET9jeBwKAWqD8X3i%2FpS5la%2FcOsILVgbUc2myFfVTrfj8vdYWkZo3hEPgUJWn&X-Amz-Signature=8ff98ad1a830dc2fbfb3380d4c05384457c5cf35fd9ba3e241a34134ace55ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
