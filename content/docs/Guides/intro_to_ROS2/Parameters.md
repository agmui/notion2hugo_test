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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOJ7UWW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIHAlNPxs9QNkQqJKYJVOmgI2wSSG54pwjgB2fTNTPuAiA4gar%2BKBut%2FSFfZcRHNHRz5JlYaCFWbnAEcVG1z2cwdCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeGzQSEn0hAdFjDC3KtwD7HHjdf%2FBFtiS4%2BsyZq9IyQ9xhrRxrV7H3gzcHI6%2F%2FJVRG5QJ9U87h7qG6QTLsKeNpcSfmypdFSVmYpqwjznzYdRSgwvB30cM2xrgimFsS%2F%2F2qlVAAKUvxc9YOh6cSC2p2P0Hf5LrPkUxATQJVKPIcFT6479nTgbK44psVVfHF0B8pkRH%2FfL9Kba1Fzm2nxi5vV6WOkNp11lW4m7%2FX80%2FHaAan8f29QFGcaXVUrDfoQu%2BTspyPx605AccC0VSaHXX8eQeWV%2Bma9E7prldnafsHWc3s%2BdqgE8uAN8ylkivUSTGJR%2F0FE%2FjpoaBb0qGKWYaaP1Rmk9wImWNhsd%2FZ1nnR9%2Fevk%2FfO%2BsG3xfyImotml61HXPoD9cmS7XjbMR1Z9fA3NdhPImafK%2F%2F3KRLVfoQw5vl%2Fm40ID5aZQBbAHL4cl9zOXtjgvJy7E6zwtyRI12A1LPt23fkI7go3in5bjUWC1wVGx2vodg%2BXZYwAeYuV2SeNjxMUYO70FK%2FW8FHLK4lDAtsUExlu4B3r%2B4JpylOSlK6GWzWHbzMgdhP%2BUafoHX%2FXwkQzw%2FgOpSCprKsQeRLIc%2FBrenXsuFj%2Bxp%2FvJz9hnNF8E2uTnfaFYkCc0%2B3GM1K7wbzw9xfPEmQXpYw3PXjvQY6pgEoWWUBl%2FkfuTMitYVKC%2FIfsYrirtM7Q42YuFcnXiwD6Q39o60mjIRjaf2g8utHknmhfhDgyrRruxhQw43yk899qcImrCrWB0ojGl3bBhmA8nryj8H%2Fgt7UYvAMDWNcmtiRgZsP1sRTgRG08AiNaYZgZvCehDvuqYyaN2K6Z3V0Wj3QcT3zTQco%2ByNYQZUPkSMV%2BOyD2%2BVz%2BK1HXYM%2BpnfmzhVD4QXF&X-Amz-Signature=f31b9d4c03810e4b852e79d94dee7b7b55d13fcd8142e371f7942e7106b1487a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
