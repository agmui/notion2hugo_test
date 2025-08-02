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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FR5NXGI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZNFoJTvDQQ%2BojK2goJsNknYljJN5Wd3yA%2FtvgMHH6FAIhAJDrRP6HrY9yvTDr73tAKKhjgyCDLbvgt25SuprIvSqUKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze6Kbtgkr8cyTGkRwq3ANP6pfAetrVdT%2B9gFCIMFEzc%2FFluuEl4Mr%2BXBTdiMQAfFW2%2FpwAxlAqGp9mnMFIs6PqsyZnGA3N9%2FQfHlBTPQg0oY7sRpYrAHZMqBVrtJCqDLgBCOMbcwtMEzGF0G5VnGSwp279n3jyoQ8V0ypUEWTSYz3A0FehGIN30NlPLhDPAxg7r1bKQsXcnxCUdBPbqtX6M7MptLOBH22W%2BP5zfwwpWXDW%2FMJIryWLC8uyU%2BBPn6H9LTXGVeTRwmkdb9dSbzogTaKXUEdDsNFID9l0qNW52nFSLQvwfrISfV58ntR3%2BNvIT7uTTHjvgzN3m5UIopE1wKQBAJZC02uHbkmIJ16NcV9or10YXLt%2BYMpIdsG4vw0yJHSs1QdYkBe%2FLEGFaXavjU2kFS0bCd6cSp9C1%2FVr4jQHWA54FLmo4fxhoKxvC5Bxn%2FTEueapjybaezbM30N6n5FVthgMySHdwzg%2Ba7T0E%2F9WZj7lOcXcsZTecpi8oh%2FYsJgYlvzPt9grdtX5%2Bs9XDeEnVfhFSxpO3szj1%2F8tx9VMCnIHzmb2wzbnfrktYCLrROT0emcSMBG1zVNGEha4qaPS7QUoSF%2BmKr4mrrVU7tyhgDwGF7iIvjlfi5UFAon71mN4N%2FDzvwrp6jCDnbbEBjqkAb9suOAgovaHO%2FEc7TZJEhWYm3MmV%2Bb%2FXGzBC3p0LHJzI76yNnaF0JLCytM90jxzEzbQCYoB90lsOVT%2F7D4%2FyXGLzGgBHsn2OinIh6EYjIIKuwe1V8t2MFWTdtBWmTSday4ka%2BQXypMb70NlAPqtEtMbrX4NL2xh4%2FW5TpkFPV00Q4y7C0SfiRCA5NoFphgCx57gzLH0W48%2BKe0fr8uTN15ggJnA&X-Amz-Signature=8c05266eebe64630c9dc762e93b399f5e50b822e76190b011fd391ac6368609e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
