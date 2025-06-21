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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFE5P26O%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRKZOcHFMFfsjnJ83HUjGBNZMSkEY8lHU0S5UBNK35cgIhAJnwuSnd%2FCLC90RI3TpOe%2FVIFwBQA6zW4ig1SRw9MW1EKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsbvRaWC4vRR6YJTMq3ANykLBKCJlAfh%2FAduGggxzLSjqZANgLefYvGQr%2BVLAbUjOcJv%2Fh7ioXnc6IIwo0aEKvtVtTWZSmqLi%2FgcWsRje%2BP65WWynA%2Bb2YcJL79w%2FORJxC41J947MFD5bQjsagkMhjYSyd0Hcr8u4QMc03mdNO5Vc8xzVqFxoU1stz3zymPl8VZ47%2FWLw%2FpsXFKGQx3qEr4s8Urv%2Fp2dtq7DZKXcEU07%2FszMVTZX15XNyVOnZaDsZA4vo4GWDlBoIXfnn7a35k%2BZrOLkuYNQ4fDY6w%2BFgIZTHzkXtbtjAaB1fCS8Cz5G5%2BCD3TIwshBWBNkCZetYsBj2kjFsMNjo5dImqu8U9Qk9OJ8Z%2BX31iotspuxatlVOXDFvkIa%2BNCoRlO7vBi30fGPA%2FUj%2FM2JQGGymPSwlmDomvACZg6tD5aCkxly3XRXbFfF7Jz9rKDIllF%2B5GfDlR%2Bqb4va%2BQdBKadIdM5uEGGORCLlmJWaGqlnu348B%2BMlW%2FJ7N%2F5D0AwXjD%2FIPI%2Bk2JAsdzv16LWbf41Db2FZt0SQZ4oLPLcQGE1ItqWNkL3dEmr10gOo%2FcjVDxQxFDiL4T%2Fu0lY1ntAWxgSYwSo0AHTZK%2BBpx4hWLSpeEChSezgU3Pzd%2FbAhjmvabp4UzDOj9vCBjqkAWuP7mIUze3AOOFxtquDO9y7dQPrwTTyk0tDyWkRhGL4ahvy0w2NY314sXXtJjEm776yVBqMOlPi3uFGgWjKcttQSg6A2m%2FSqYQs50o%2F%2FbNHiA0gNZ8oelrX3BmkIE4yt4LnOfBCffBqSIoWTwm9kH1bXuDwlABktcYzT1eKuADeb2tXSTDrcTI0lNr7%2Fnh59AP4HKe1Y%2FqQIxCybh6qGFQlScq6&X-Amz-Signature=0caacfa3ed5f04b7bc6486305d754988512e316eb3137febfb1d420e4f72f5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
