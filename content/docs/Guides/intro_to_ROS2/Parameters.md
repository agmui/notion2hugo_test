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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AAEP3CF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC7fcydB3%2Bhe9iflLe45%2Fy1IK8osfMS9Bo8hKh0gyyiBQIhAOQ0fGxcr13r8acQd59JoGP1xh7yT6DHHc3TDAARknfWKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHIHsI0tWvDzeqzQgq3APd%2FlGXAK2bM2p6HbQGUEv6peF2hMR8DYCRPV7N1XU2JCCow8FKPN8csd%2F39S8Ge2FNADNAG3EhhA%2BliERfd6aGKsVIykJKLiY%2FgPzR1MCtW%2FeLR30gCdlfQp7a0zqrEA%2FyRqADjcUSKF3PFBfAMmi5Bfq%2FiSRkeYKWaDdepLqsMJT4g97ioNpE4hkqcgtvDVqHNgN0D0Ewqtm6GrwzfFIhs3KQla%2B8C0oKVHOvVluLneJjgnV1vn%2FjSJ60zn3pc1AJ%2FkATdZ9DW5CpDNYteDugzx4rhn9xP1b9U2Aw2kplSXKfHQ8UUR20WMFR2lrJzKXNRgq6%2BTznjiP44SBBT6zazebyT350l4AOpROkylRZ7V3%2FnCTkqo4Qa%2BrcdfNTIHdbLFmlcORgY1fehBJaGwxk8cPNbIUMyCr82t3P46vWsfmc%2B4CX4bo58ydPl8cLML8LNl9Tf%2B0H3K02jhc0EhKMR1dkSmfD%2BbCH9MNNc1m904VqC9a6qdM36CJdfIttoAI60k%2FHFi0lhyz7s4uQStjlJCHM4nNBkk26dFP9N6cVqkk5KAVFweKeLFhoyEAtHG9jsrSk6SxwUw4N1ARV8%2BmwNSKykO63NMLgVE0nDe%2FImWV%2B9zvKsMQd5azRITCyzoe%2BBjqkARId%2BuBcergwB2GIrYSPy%2FH45rzB%2Fic6uIw4xygw2YOhSJp%2B79Fsw%2FI3KMi5CYkeeS32wWu1c7%2BbX9rk%2B3FEPW7dnp1fgNk%2FT%2BjCZZWBiTEZHLGQ0eAYBs9rBYMO7ya2b7%2B4Ja86iglPfKYi0CGUshlSd5%2FP7T2pH0fiPm5iSvC7bwF9Eqzer5OgUWg%2BYzRXGHhpTyvQprwJO%2Fpd3TLmZZHNx9KQ&X-Amz-Signature=18e36dd357a976fa6273e90720aab9fafe21e212887c36cbee47e0d009013f77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
