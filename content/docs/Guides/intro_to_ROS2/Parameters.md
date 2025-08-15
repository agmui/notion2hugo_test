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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHKBAMK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDIuMxcuaeeZNpmc%2BMvvlfYlzdsPQ3w%2BMbWQ0cA4X1d7AiEA5PWBjw1qqSFHoH2SUpPuwFaDhPfgZlMNqnJynZKdW8oq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLrLKrlcBWMJN3w3mircAyFFaIrYqL8QWuyKCs2OG4SGnJHBUxIlYxafYcLULnN4x4m%2FrzRPv0%2BGScZNO3O0q%2B0nhsjHKkX0VN6LsWcs7YPyoxPlRSmFANpLU4ssJcMRmikjMJN1D7%2FpOhAO82kqrl%2B53Q6mGtJ10HzqKYfo0UMoF%2ByBCRcgijDkEHZMmxANdFd4JTMEbWG%2Bak%2B1wPYZQk6uwpZpYp%2FeF9T2oi5ll47yukqth%2BxbI6MiAaj1F26LuQAHbwgUPp6ZImYgTFvScK9GekSKTic8co6mJkzpF2vs1PbLgw6tB5o%2F7sOiczkbL2XFgVumDLuIKHE6aXi%2BsB1R26pOIxmCYkk7rto4%2FHUI99XvItI6Uu0XbY7lcHiZGIeoM3FVB%2BYiopylvvsoE4Uw%2BgA5ZkEG%2B2T9qUX0%2FaQTY4Gh5lihEMehqRAIryQPKyDTgnzzrlVMn2nKZjwBJF86i83qLejLqCPKwa%2B0VlOPBYlup3WuDmUiapuTIb%2FQpCTpa7h2N0EpItHcK0L2xxtNkyCoxvD0g8y%2Fl0cYsWoW%2B2MWCkrBOGumkEXW1GZNEULtoBiyucNc5reqmFY66NwSzQBMYECXyDnBH5NfPpOokhy%2Bw0zHPeZK7je4Aa1SAUxHY3QLrMayZ0o6MKXb%2FcQGOqUBDmWPh33rBIo1pT54GDJHZT3puxuHoXOqKXN7wTGsw4S7wxohzXBdmQsJhm1EKk6MO1p33T6rvpb8cPTWN5Jg52iDYfUkQEi%2B4DZ8mxUZ88k8AjBWgcS5h1R%2BkyiRwOQUrEEASs86Mrmi2zI1ZN1A0EhMJYFLebtt7wL1f65U0U5zanztchlf0AHpM8I92z%2BxYGEbSZLJ11vXBPNV10ijfnII7RpH&X-Amz-Signature=9dad0780006aafa11adbcd525ea2e0a3c1a2da5fe1a7ccc11ccf1665c38cf54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
