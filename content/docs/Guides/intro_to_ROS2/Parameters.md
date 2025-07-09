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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWXWZRG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUYTsG0s5S4I3Km3Kt72G1q1LJgHoHcjIMPAuQm0pecwIhAJSWJBKoJVwO4pOVeFxmpCUaGvKt4Cv1g3mgQqZUsrB7KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpmw%2BtHNoV%2FwR6Hm8q3APjSFP8dqV5%2FKF1tT0eof32ZBSyZdhP9gcOJbLogwbUVTyGMfDW2WRH4QOyWek62r%2FhpQ%2FblDpNZXKtVm7C7zjC9FtcCqDBHCWyl0%2F%2FwcUVdl%2Bl3zYvfOVyQZCfckWvWh%2Bg1Zvw2%2Fe42A%2FSbNtLeHFQ3hu5xYn4foMPBqPHOAfSEQvwTlo1D4FCpQmIl9Y4%2FSZQdxUNsNLvxJeF1C7jlaKmD0itcHlXgmp%2Fjei1g95R6QEIIYflGPkH258Gh3TWOut2wZWlc6yV3NsGz44srtshih0aqR5zYxpYzMs42twWH5HHP4V%2BFXSCOoxpmcnR80PmubMTB7FG4JapXuH%2B7mhz2pevWxpzVV3DyR4wuEQo1QHOw49cr%2FUvlCeH0qfdpWWQJEi9F0itP2842Y5Sl4BFNlXekd36kg9iZiX5kuLcf1wL%2BM7oGZ97Hn67RB6qdm7Iym8H2PkQfmqybie7Xx3RYvn%2BUjbeDWqpp3CCsm8A1oFJfUGdq6coDfq0jpTyZ0tyLxWHCGPYQRzAmM%2FpvpEfKtH5GWYre2Vsyvgd%2Fjm91aDzD27ZImakCmPqcy4cxrmNJy2HlLvUeQLLW7IpLpocPL%2FgFZAyJKAqnsuy0qqrh1OxCM4vdD20qZrp7DCwyrfDBjqkAXHPNZX16fyltMXpPcTy%2FKMHYY87isLSHSP%2BWDWcQztHOh%2BD5p61qqrOzxCckkJ5O92tMnJ5y9%2B6hXI4%2BWB6om7XmvmATJvzxLpWOAS8o14QrltBflnU0YMt0jeoxwrV%2FpDVTF80HkYp5AilwAFGt8rzLe2Vjk%2B1Hm8P%2BA1CS7mpaXSAOTTXDq%2BSm38nC55WdO1D9aDQ7yzCYjcRWN8nK5GuXsUg&X-Amz-Signature=4640e6bae5f3314fd2c2912669acee69f77732ca24aa5721daec2f0aa40133f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
