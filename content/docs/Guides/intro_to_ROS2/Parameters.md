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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC4QDT4J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIB0bDVcPMbTZG%2FrO9Dto0WZ4Y%2B6bPmfR1br9cWOlqrdyAiEAqIs8jwCcELgtwH5zz8qQWdDqA915SaVfW148mNlgvL0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHUOC6C9z9KpJNDxHSrcAyEdBQN8p1Rso%2BwrtVW6xn9GwBwmgLmpjbeQjhs8n4ctfAXYfgBSC3uniYQbRHIMfvSsIMWnijGWcA6slOrrtSHHAQGCxiExogxbTW7uPh0hRo4fmRNdvWMFjxbMV0LjpuwACrip2hdgI4y9vbZuFDxNHUxI4BHnyscn4JQ9Bj07kVqqgw5ZQZ96cIwuB5ZlwMJ1XR7QdmqTUmcSgWzBsqK5g22cZypdJIQVxpBXsrbB%2BwjCtOZt8UoDZClo18fUjeUNX%2FQ7iWO3MCmfFi%2BNPU%2FDURB9MlwKXucLGDPhrPvdtlqsaYK6Dm9UaZdf7dcC8j9DYI9T2Cyfil8L4VBBFTVb2s%2FT0wl5NksOL6ZT6QuYihWBDEMcEy14PxWNYHOhnyi7MES%2FqIeQytbNFRMnHo99n%2FB0%2FDpRVmLjh7kpKWiIMkgi7EtYCr7XnlZLViuQs2Y9c%2FmKgKf1i1LwlRrcvPiZKrg402WXYoZIanqrymrPwjhn0%2B0Xbs%2Fg6d37Z7U2BljGGMWKrOoAeolfq6S4iCBgfg34U1c3whHdaYE2562uwm5ax2Gdbv1NlNzzyFqcwDnl9uGSftuYNFRBzmOVnxUsF2tX011JOBLLBN9LGdDnrSWs9J4rWaYCMWObMKX3%2FcEGOqUBLoJdL4nLf0kZv%2FmSoWv1UjaEwgMLvpCxyEHlBgwWBKJXT8EosInPii3hkRs2DJWF0Va877%2BwWgiX%2BSpXUiJYAFBAv954eS4veF9Owg4BzMcnpcfTHnKrMQX8jEly%2FSXoyXU6GBZY7sRge8Vo8k38jDlk6rZ1q%2BKGd8gLWIBc2Ntmfz4B0%2BJJc4zXq7bbZB4XYavr3HccTVJbQ7weofkjH7vWkilC&X-Amz-Signature=c9f1f57e00b6860da150f1d9d923fff8bb93bf64fc5e7dd8e794a6ba91b5b856&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
