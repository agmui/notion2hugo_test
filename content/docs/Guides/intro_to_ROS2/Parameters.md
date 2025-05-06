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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PWU4ZD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjJCLr5NQNEVaYBhZ%2Fhfq3cA%2Fa0yR3nv26eoDCx7yOwAiEAz6SeRcIENGWidLIJttWEyn9feirLIrWOCpq7afWL4dsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOJfiN%2BySnfRNNFt9SrcA99uOzFm1%2BukwrFwjwJRH8Ab4bAMGItgkRH8LrgMkN9Kg9FrgErAyIULSk%2FL8%2F3R8mRYhQvnuYWsNMUrh54Fy6UPNC8vimzbI3DY1avBQX3fZzfMMVbdTiMXVfawz8Ag4eObl0W5utDKuU%2FCnS0hxvI4qYCGLjETcyWCpVWJha4kHT8mS1XJ0M6yoPOyOfdHXN2B7tSgZJv1Z7Qk3HzComyLuN1e1%2B11kGSgqg5O5Xxyy6G2wazn8ovCQUtCxD9x0oF2oKYIwvzyq%2FuSDf2w2u623JzQR0EO9xvSLRu6ZLsjJdcdPAMbiXchXNnGW7%2BU1YGlY%2FFuaz51somahMqxwH7rZv1QfJDC4IdEm2dv%2FNZjszraF%2Bn%2BEMhriIONpl7shX0voFNE1Nt5OTbSMoJ5OzrMppgSFm04vMKc26lPVMaQ5lXRLSUyHLYYqb3oeEDMMwjolBftHHgtw1z1BkNEJ1p%2Bsb7i5G8y210QWdgRNak3DsfgKq1uvpL0gMQKMfVFm06f7%2Fu0qcHVRNOMXKZwWu8bjmm8Hl09hK%2FHZh9p%2Fpisg6kno%2BoPsfWJIfpBKopeWoLGR62BE05HSAccORwLlSkJiVkIFlYMqjE1u9mpuzZ9ht1UA5tDh1q2IZzkMIGx5sAGOqUB7eaL45VVdlr4QX4HbC897Yl%2FaRM76vI%2FkMNrDS9ojTKrN5tsYKnrPtLgoMDnCO5dlJBmf0AHcBPll2Bnn1XxYB6K%2BWQpwmlO4pZa2%2FAt6LZjuGRczZHO7qzvjQNk%2Fsfsh2oS37vl9NiSS1iM1XJlGcnWEpmj3YtT%2Bf6xRsO8nRTZ5qaqe%2BvJBsX%2FG%2FsxfvLwnqwSrB0wuV%2FrsXsFihVGTZLYSdKh&X-Amz-Signature=51bf26ce00cdd3294cd9f87a993b694bd41ffcb7ad31def7e7ace20254e4611b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
