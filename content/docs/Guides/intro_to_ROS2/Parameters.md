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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSC7HA2W%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD%2FMx11pQe%2FWCL5gs1CkRIuxpJhrqNr6NaWk8TH096f8QIgbs9l%2FEFCLDC3xih63lbEyyi4%2BDsSR%2FO5%2FBgTxlT8nGoq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDA%2FcRw3CBVSS4jMaHCrcAx1%2BTp%2Fwpqdyc2zA3GmKcHxkaUXRF8M9BhHX%2BmBl0MSP53rsii8GjxIgi6AlbR6isaiDo5jd4QqW6qZI9GOsoBY2WYzGhXK5%2FUS6quJ%2F5mN%2BjbtxgI1d8vvE7wI7Fzp41ba6Z4EE8gK2Ugh8WwNHpi4DF4NY8eyCpXWDn8lVYCh%2B39T8igadn%2FDWInPmZUd%2BFm02dm5LDfP4otc9x6CqM7WN176pIOacDr4%2FBbTEvz2wJbFHKM8pBDcsDY9xT5NNJr3917N47951%2BdikTJl2opOPbXQJwLKxL%2FQPu0IXh%2Bld2z0%2Fry4f9WEpk453TzUzfl76Yj1K8GmxlLOU693JAGoQh%2BXgF9RpZY1svFcgfD49cXoACCtZQ%2BK6FSjvAKPPGeVplWrf2mpj71ZYaMDpnjgLm9kKJV61d8y7%2F0XTo8O1S8qZy3b%2B4vsBDksKG1xZgS8PM7OTmqN6M6BhOYeuvOEly5S595G5uCjdH%2FzE4OXzlRhx5wcl3j0fHRwVjWWRWcWreTHRMg%2FmlFDlvDzxPW1j3Tj7UKCROLRbLiBewFRGBW76CYrDQWnPJd439ZgA9tulQ3ZV%2BvztjHrc0zsJEh3%2BerSNZrzYjDNedma%2FvxVndxGc9OlHX3SfVbxnMObI0MMGOqUBEJpi0%2F5uneILhPRL8Kj6%2FVvb5ocaIwoh2b17DcYB1LoEMHHKsR2W4c39vyl3Q4skBHEyQ8qPImk%2B8rIHHjoeE7%2FajlRWsG2CcCmwFyP%2BvfZ9vAnUJ5LKtio%2FYjZNbNeDvS0ZeRfpNLprSvcsM%2FNipKSVPd7YjTN2DNFzGqPQlB6lXtcj95P342vqpJW2b4zUbEVaODuxvgWboLD8vmQ6dbUsEwrY&X-Amz-Signature=218467d2b2c2339eb4af7bd913a5b90cfc92c4f4f525a3f2fd4e65cbe4c9db9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
