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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXQ5LA4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDOkSqAZfZgy4BIf%2B%2FWspq%2BdvgIwVMafm5UUtJMvF7ZIAIhAPpTh91xW3dJifvgRfe5dus3ID4LG2ZQ6HZtwnNgHNSiKv8DCHEQABoMNjM3NDIzMTgzODA1IgzspQH4osCLyFauGhsq3ANL9gvWDgVLusxHRC%2Fm%2BS8k3kGZxoNUCpJVVdJ5RvsHdtGxTgzmPPC%2F3N%2Bt825m16ZVbmaipeFuw905stFSOGcN3h2UN5GHZ%2Bg0IjXY6INmrUp83xHDNz9pbkEB%2BbC9tuWB%2B4AzQcnuqjFXWept7O3Bh%2BEzuPVFIfx1FJlz9yL9s7W%2FmpiEqTBFftyG4arz0%2FDsQj0VaohDpEIGpPUjlrK4MM%2FnmSnS4WwJVJ5%2Fa%2FkPmy1uDQYNrXyQXosxKcA7SxzKGjOT8CyPDyb49u%2BMMzj9%2Fpe1DyUZycnEsFpC0luETTXjeA3W4m0KYWxuKvrPaN2QXrVKXkgwDFPAHI4Dpm0qd7UhL4LwCynXtOrBqGsK19Xc9Ykoqj04zgl2UmRqcNTmmQP2lrpp5ipYQ0ZiIOWZyl6zuUT4UTpx2fvh5GjiwZTBEH8bKI7hspDZynvNdsx5mRpjHRq4ShV%2F%2BCNQAdCwaQFtMy49%2FrYunQyfVz6J%2FdM4I%2FHsk13vqzkneHkt4%2FrpAL%2FL0cVj5Abm8qiHUDxDcTOYIHQeCJmJEu8r6KQHuETO%2BLfheBqcV%2FrJR3TCi1tvgeF0Pf2JHbO2h1OnaHbgNb5WSqpYvT%2B0diHp6wzvTZOuWeIDr4vzgaK27TDF94DFBjqkAdiV6g7HxImUcATb4Ep8AliSo%2FqeKR%2BpO8guMKy%2BDWGkFb4QHAFp6MddzVB5F5gMnIYhpm%2Br1yaUqMHHXEYpb4L9NuuUGbgTkPycXWG1%2FYEhTAJc%2BM2jkQ23iBeFQYjEcKXjPSXEgNz1ZAruwmBHvVZCgZUJ%2FPkx%2FS3lOFvtBqMT%2BsX4t%2FxhRZLzJRVakKfnKl97R%2BROpgqiNIGD8P7ZmLm8Bbe6&X-Amz-Signature=465f5a53346668c58aec496be1bf9c596ddd7cc9e24e0fce69657a35902535f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
