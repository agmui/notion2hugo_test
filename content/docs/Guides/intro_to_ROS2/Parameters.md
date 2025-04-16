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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMVZBG5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T140933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWK1HH0aDI6YWWcMvCLxxtWU86bQLtH3akK%2BH4%2FjGDfAiEA4%2Fk%2FgX7e4e7EwybfSNeew70vg3IG%2FiFgWR5tdCv5M3Aq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIZ0%2ByHgeeTsW%2Bg1JSrcA6EnfAme4YltyrzAwFC87sl1FZ4Q0gE%2BS%2FDxcm0LlZS3IwoKLFonrkfv2OOsj4aeyeAe8nVoBaelw5EiQ%2FXnbqXfKvu4Vgn14RhPYGRqTq1aQVSHhFVe3MbkEV8ylVe%2FD3nWzODPdunmtKgOR9091KnwHHWz44YiJrNajEsPBk7ecExt%2BdqT3t5nRz5cAkdavCvhyE3lQrgDLeQoI38bm%2B9leFJo7ByLGl5Q2wZJpZ0fy1M%2ByIU9Ligi7pTwQWwH4OOD%2Fq9vJeIgVjJS%2FqDhwP2vVNrAol5HnlAf6sNsJZDHAsN%2FwLU6rbIyYNBTkM69%2FWIXTS%2Bcp%2ByC7T6b0q9iuH3Y62LViEi3kRhW%2FMjSOxL7ISlAupLOOM6ziXCOUW12eGbapLEOTGQea7jfTDhpV19pp%2Bj31JJG1tuQ74foyzbiWqDovRAaBNvUP4gvf0%2BkeP5OrhZoBbFwXYS7STL5VcGi690bWauEBSGCugpLsfrVg0ogxRD1hb3KtUrwdm3RMPxYHJV3d4tRL4bSH4DqXyZf1vq7d1LTz1EIrxRoaziwr70VQG6fzPDSPFBZgCr6vjiUpDjBWpBby%2B2wWZR9E0HxG1P3HF%2F6AqnEUN2bC%2BCmhFtR%2FzPGpSTcnSQ1MIPf%2Fr8GOqUB%2BaYkETD9U9GJXvuX9fcg8yxQE7YktXpLO0xmlHnQEyE1ahk9rcdxtGRORT0%2BOG5HQmpWxRowE66g97H5rkmgbhaQn2mzXcziQBdK%2FD0QVQdHwlIdILVzWkDA7Tei7xpUq8TQFrNF9haryKTbFVhs1x4JXPUyFMyY7WQdxw%2BLOGd3t7xjfaWDmTvA0jpB2RJ17IHE7RayQ%2B8R3rpd6oImR9WY9%2FIT&X-Amz-Signature=952dd25a508fe6ae820c2a522c82909e8dd8f132633636c305e856f840cffe68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
