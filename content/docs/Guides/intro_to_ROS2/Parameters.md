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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6VVJDII%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC8%2FXfPgBlqKmgpPcfILtnK8%2FS5E0dw9aY7WqeWdJx82QIgNom07V439JFYAFl0vrUiKSwDwKLha4xhixE5ZMKoa8Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPyrI9BO2DVB%2FDSs6CrcA4Mf3AvZjkKkqB2BkrA%2F%2FRmMN3mRurYUUumEVNLAfW5Gn%2FNFDSZEcK%2FdELaQ9Pq3lKj4yhgA4etluNInNPykR6612vuVo0DuxdB5%2FfpAsWCRUOGS6ZUnmUljXVxRAOgNaozH2ZVWGmpS2z6Msmo5QTPntf%2FHMdKqR9YjZJE7%2FYiaUEHdh62GiqtSX09GPpBrwAAPGavn6LEcLQerseEuQks7YjECKjR04y78JZWyxUS6ERhPIwrtAUA%2FveMSUNt6BbfK%2BtNZqBak37fDK53tQNAuJD7d9g8%2B9ybESOxExUrPkveFNPpS%2FFVbkXyTB9eYa0b%2BTzcGc3SrTb7Xnh1mI2tbXXXgiB0ebuvD%2FF5YkBRWYty2vldg9fDaI4bGZWbdWOPi9HZedLCdiURpTZRTPHjgLwO2Hh8wPN56kxcjfTmbnrZP%2BmXQHAadv2FIui93Otpi%2FzqWfpBZAeV7sDngti1pTbA6yXmu1jTUdlFcDT4ijjrtzeYEzZNflYnhky3YZt0ALl1R2w7qzAJjtDoBUVe%2FJc1tcELyszZHe9TSn3naugZrEOkX3reWw6gcKIoGqrKxK2quyhKqP%2BJFaLaJfbypNW3UUJoZI1jDzdry0h2q2OokZ3J0RCPdykjzMLu4rsMGOqUBvyAJb7rj24YEs%2FtwnAM%2FvwWLBPiMPPKUYwTOkeoCAbN2gn8yVHEITRHU4Cd%2FTo8nicntc1yt%2F92f1A%2FPIyEEgfcrzsd%2BAwWQcG2jBb%2FA%2Bx49QE65EXmguoSgw5FcApttBCz5jgG7MZ8G%2BNNe9ERgFOcr56qn60h%2Bgu58xmxesSKx6zeWsJNvMnuPif4kc1S%2BpgEuGQCEGlYsfCO1S2rp9DPb8S2q&X-Amz-Signature=9c9a0fc90cde2d388d88bcbd635768439798e963af2396429716f8f9e77f2ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
