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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCNAEROK%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH9CiQMMKeOwJOuWwzrdRvSEvdIadD%2BYs5irx%2BVk0%2FCrAiEAo31iR5W9VQuv1ns7LsPRiHLOjg9XUu8M467%2F%2BOFZMIUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHV2CPlFb4B1smbYiyrcA5C2kTqC4rk%2FIYyO3jLNQ3bUOeb0Df4QJdo%2B7w1bs3w9x8vZiAKhIeQBF3jmTxTfyU2duB4gZxxVHlF3VUSIO8siPwNjHX7%2FnodXSNmJJXd%2FlbGL0zyt5ZwELQbNLZ8%2BRBku0uiH82tZepLEZRWCaBPX5OaMSFNFvsbuPO82%2BgbOsh9KkcundtcwUyJJl7Gex6mNGJ3HgjJ3c26LqR1uj4i227CRJuSXPPufsp6FWgpV%2F6skFbtAFe3UmUlq%2BG84sVURKFxnOvuyg6pAjhVDX%2FHw4Musi4nEquuY60Y20qOoMR5OgtCZ1VtsvHE64fQuVcabYhoSAlny%2FF8ilTpE1tPqRjmAjuM9cTkoj4%2BaukwA5ds5BznNZf7EBc%2ByZ5mw3uCmvUSCN3uBjE9SlFVQDeTJwFqTfGojDR1okFsp55aCOGwvJxZoKb5KHgG%2BJWvfXmtgz48y4gjTrwp%2FMpPsYF5kMbsJTaVM9UxUk3eGrpBTZCNv%2B%2Fu54sHJJIei0Sw0MoUwynz%2BxlCmG9PW7YDpwT94pV%2FrCOQ3vHiava6icpkf7qUatV4hGqkVit9ELxYCyTbRaQY14u9uVunmAvsCq2R2NYeNTC2S%2FsRnAiyg9Vq1C7NNKh8ML53Y0CmuMN%2BSssIGOqUB5P5qFTU%2FYjouaKXZOOAgbdDgO7dYVMl2LAp2RTBvRDjCR09OSe2O%2FlDaJYR%2BFpVlH5hnqMIULAGySOoNFnj1wkvsSwlS9PwLA7Lh8oSJi%2FSz2%2BJD%2B8mfr5MVMRfLPbz6QLuhfhAz5mwBZc9feUViI2O1YIy0HwZYQOZSb4D04Ybsy%2B7ukCHFYAHc4nwdtBsDpW6xZOQX82UuMuxbY5083p14iczM&X-Amz-Signature=99034728ed9defb511f9680143c0881dff0defb42d22d13225c3068fa47a89be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
