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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVO22CPH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHSm6iAzuF%2Fhnx4GUfnyMzSBvWCEd9sao3odp%2FmIU3yqAiEAhRBcoEMSs914PODJ81zndIraSZUzla3qpDKoUct0o7sq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGvf2YwPLbtfTwwZHircA0afOmNnATLZQub1ZLfn%2BgeA6ClYBNvn%2FZSJgKZEJN1mYhZ%2ByDLnE%2F3%2B3vchAe6XpUcGjj2f3r5GUqDUgSudVhNtQjvimVtXw3D6MCf6xy3C1VCjydCR%2Fme1iIR3zzTd42B87aRAuTeVnmgaxPh1NxXVewnDOjR6mYL8TVp03Nc%2FDPidEIzbNwFbVUUK8CXHVN62M7gmokGatq%2Fw4T4horT70jq3vHagjeFw2mj3Gq6Qmb8Wl%2B6bx%2FdpRGTyy9uMVv6PxU3DTh5M49VZd8UUmk4VkApXV08NS8k%2ByjXWRgid%2FCfJQ45qsAhL8Ze8rl%2BUazwW4K82QI9cOKTSOxOpZWyVosXN6%2FFwhNvkbXzeGBU3WgR8eLEEq5X9MI9Cgunk4eAH2rC63pcPCovxKKH%2B3W%2FYtwBoiIla%2BxbG0Uz0mu50jkqGR%2BfTSwCE%2FVQYVYaVybnsgMRgnWclC4P%2B1kLwfV7N8VT4AiCwObRBMgDmvh%2F1osBPe%2BwNUlWJkVoTUM5IutffyHeodWVCMvCGZewK3QTYMMFDWeQSrbZGlFDFW8NY4dC7kjNA601Hvp%2BzS8A4%2BpzoNIoKbGmaA0a5KFzfrb3gSRKK4SJqI60k4LldksKbdjnvUlaASscGqlv4MPyQmMEGOqUBbyFUw6vdIrPwS9%2FxIJfhpFgtYHb8PMYOlRvt2nNtUsdKt0Qou9kViNijvvZBqtE2T00lEEocIvZzAP8Y5zExjR%2FusfWV9vxWyoukZhKFtCuoav5E2e886rHLQw0hvxxPwNgP2kiuOfDY1nK%2BtFvCXZxsiJUoARL2eNwCBez3x5nWSGEuHHQl0Kebty4TDMeDqUfM9MKvEFtqKn2cjhr%2B1ar4PLr4&X-Amz-Signature=6c01f2c991a1b8857ecefb27ce11e993b90ac8ffc45471d8cd360ec170d037b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
