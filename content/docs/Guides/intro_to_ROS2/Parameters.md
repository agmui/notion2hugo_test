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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5UKGIB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICpwpDRKTiCgHBxBamavXT7r5DC%2F08xZ5aYOKY9wkvPdAiEA2iqVwQcHehHPBo2cc3tuqGFYNQxGftmyU1XMgzFcS9Uq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJBs0zB%2BCi8oSfVzhircA%2FOO8hq89mnDAPx1PlTNBCh7RBIR7bFZsplIp6UdS7crn%2BX4ywP21ljQprCVBQmMFdLBwhyRfv4rJAvCw3oR%2FIMCPcBr65k9G7YSnK7IRsysPH8N72I4wpMlwFLtWItHxuI1%2F1d8NkMMMtFfw%2FxZLhfX3lBrYMQ4LbTxJKpVGVtqPU9cYstroLcRr6yIYiXrFI3Re9FVstYZGMf%2BQWOLcA%2FMVNYXNndmaVs8IGNtQ98xqI11JjEMkUfKfn0fkWMv8%2BR85YPF4txp1nUdv5WPc5R51eEeSABkV5mKHG8%2FuDxlo3Wvh1%2F2elL9gr0eUQlimE4kFK8J8i1nInANyq4PAYcSJU2o%2BgjTwSzl6wXoJlcC9pXS5Hy1j16e092pnX6ramp7H82mL2nyJFaOVgaiUjNXp6RxAmkSBvFtHjmNuGkvYRhUzRqqhhbESkCs9Su4RAHq7mw9ChD8sIj5K3KO7cwH%2FQcjDBSy8EdD%2FQnMv07MsIDx3lKZvRF7yTsPczjnVH0RFW4AWVrEDSPaenkqJclJPJqpwSVLrf0Dy%2BH0uneJ9E5BXwM3yh3BYDZDBlxqeZixbVL1hAPckLdjHHDbXfX9jWAlY%2Bj3PR355HA%2FN%2F%2BYce64injSum3puM3kMN3Bk8QGOqUBxChKxbUEOfseTkIETS%2BNpDn%2BK5XzJ7zVwdWJs6kvJ90vnrHKjwT850HvQeF%2FKJY0mSDLU2O8PXSGYl74i%2BD7tiZqAHL%2FMX4oQVxfLAztSbKyGEABjKKAAStz4dIQtgkgig8O6gGTxxmOA3eLwSxoFAU2GiH4C6kbyvCuofI3TGIpHYkKRlNrPnZri%2F06Qu93C4ZM7ewf6Ycw4zfYCp6T%2BpcmZMB%2F&X-Amz-Signature=b081733065bf1dd12f6ae8dafe4e9b16caa529984616665c00b48ee4f6e59f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
