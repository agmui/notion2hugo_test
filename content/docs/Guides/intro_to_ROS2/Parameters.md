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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XG77QR%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDv71FdJG9YYx7sjMW90xcQetTV82OGFrLBFDcG1UMCPgIhAIUEoTf54gtQyw%2Be1qE6cTJmXkiq1AomI4Z%2FP0JOe69PKv8DCEMQABoMNjM3NDIzMTgzODA1IgyqRlNx7QAaFPlyAS0q3AOvVz5U72VUtoRNTcfDiUGZofzF8IrX6KtEPGLYIQ70i9USeZfLY4G46%2BNmvzl%2BxrAl%2F7bgZrCKZikKypDbB0N4CtieIAbzRrNsZlWeHW6jat60FMUZmKGV5C6%2BCJM707wNWbi9ZALVzsC0nkSPM4G2ncRwQG%2BYhO%2F%2FxMAYY0eJRmpH5byRYfHL35AyIgZPqr1m8VpJJ2WleYdNtDkGdoNk5Gz4GJ85gghmEM9dxzBAV0Lk%2F3xKqz5hGEC6PZvIqa9CEY14SrZ0Az1w78sVq3k7q1j1XzlJCOGsV6bWVycM%2FMZo%2FKEIlph7AUBVB0Oz0RhB5Ll05K61Yz1StVUTJfiVgBb7iv7kNF1MLPDxdlC9DkTDc3jiszHLdV7VwYynvFmNj9t6qSp7hOvFFz5bzacQh61Bm%2FzaRvcZaIUrZx5iohVE68GnYpngbaJSVazqyEvc0QmtAE2%2BsWcfhKVgiukQhRMTxl03yOXOKP%2FwUVhS8GSL%2FxrD6I1rBfI6WsfHM8KaH8SlkVmpHUyQLATJwzAPjL3spaus95EnrYRjrFJcySLjfMRghQIzGUXqdHOhtcXxJKpKILjXpDrC127AYKjjafChyUOihulrAKTpL%2B3Eecfu37tj36g930xZmjD8l8%2FMBjqkAbH61%2FsGoiTHGQA2AEkOTAKMfyc34KA3dhXDRimu2UE3pQl4Gmy63GDC0BWywotgjXNGbNRbOBpehaObNsZ8r7IrVXoFIJJOK1z1WXQhuGGqSkMF1BfkkRMlPVNdBp%2Ban80b%2B96u5b33jMBowwoEwqpuheUniIF5kNBQGe8wbLypoGphOkgVKnvewUjrz0bj15KjSToPcTqU5OWuQ2TAmVVGmgBE&X-Amz-Signature=259d8975a4a060b33c762fcdff644409d3e7c568f8fc998420c1006a8b36f6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
