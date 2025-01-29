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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2EAM4WE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiIhAhM0fiEUzjDRdAWirZu1osn2Xl4q%2B1N9tdILwDIwIgMyKDIeyzUCY1rH7x3km5er%2F90p3lwlgseWYRGh3Q5JIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaB6NgVLxmqQJoSwyrcA%2Fpy2RG3PE7sT7SNP0CF5sbUuLc8XGSNDderPA87UxRpaBUg3mCArzrarWsQSL0uYNkgaktym00rphtmwYG2d%2BA%2FCI2PG%2B6wRXctKxfuxmoIfdnctR4fMZOF2T306AjRv9wBSsT%2BDhAujYQYy9gwaU3MASHot85l7P3qJXA6QnwngkSVYkgnAG5IhTEgERWB%2Bnuqnq%2FcRY4gFxjE5U2DR4XKibW%2F0dQCEFF2bCQc6wSCv5ehYq%2FZY4ROTSe4fwrl256ZUp40D4ogL%2FLuB8NI9awcqSMf1AnOkuODb%2Fn3SMOJTGJvmdphf0%2BRGOdiMTq8tLbK3spupBhQvuP%2FjLz6xviVIIxFKtwjPJizs859Ln9hFb0s7tj7P7Yu4xl%2FsJ%2FcVjZkpsUFMQryqNcakjqTRJPpjCFkIxL4N4MgXp31Gc7hnEgNOsOgvdW0dn9a6guAreQsxSXF40hE3U2kGzg%2Fge%2FrpxNy7LrkC%2FOjmCcU2KBRMiX2g9lK8D6BiPeI%2FjsU2VI%2BhX%2F8zymw2oJcbaaWb75Y9i6nx%2Fe385YzUv4QXfRP8gd%2FKFT5kiC2LBv4gk%2FGeDPNL%2BMeVFHX0%2FdmrCcEEf4WezDuxX4PFnckRTdbMkysM%2BFx87V9o%2BsHfGsTMJva6bwGOqUBqnMZ6XMmerMkvoygWpMUSKsed3KcvL9xYPMNJytjs1detdU%2BeGOBHntbUPj7B8rFA%2FrZwwG7M30PpDMBc2kQcNdgNzYGIeUXmLX7K%2Bz4OUicdK%2BzWTRdrf51Dy4gfeLCek5yM7HPk904j1IwnaKSIHKp0TyskcNA%2BQwYmDPoI%2Bt93WccoXwVnlW2CsLPRnXPe%2FQLxjITlOiZ4xS3WQhX6JECKplD&X-Amz-Signature=8810e4abbbad6fdc17738afb2f938eadea4fab26b6f868a3b58952c156932a35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
