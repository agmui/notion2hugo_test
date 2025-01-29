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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL6UXC3R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ggqiiLCHTUHs06T8%2FO4QCmcL6t6NeLBa1Bu2jH5EXAIgA402dbS5gbGDIel6FxuqiszVgYBImoLNI7E4Lezjf54qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEP%2Fm3BJrCuARHMuircA%2Bhr%2FOKgWZ24an4tGp5IQF%2FnJacauzUcKJNs53Lk6KAqx9uhJ3ozkiX5SVhf9s94sWallCECPXvgn%2FoDaCDYTJxJtrmhAP8fibxMmN9Z9kPsXB4uSHnfvT%2FpOVKWVVZmzfBfKczJQaABE1xexmauqrjKa%2FkptF2NAm4t%2BJp%2BzaYbl8SQM9AxpNnXhzpFVvh8jeeAyya2ttsL%2BahM0p1UJ02VcBJFn%2F46PW%2BJpBb57iCVD8IUuR74v%2FZGix%2FaqmS56s75I3U7LshX3mdw%2Fkp16GGcuSkNO%2Brbc9ht%2B3Su1d1Y1eguz9pjoAf0MO1O0j5Ih1WbLul1e0ASwLuxRW%2FSSaJ25VURHjiYavXxV620kTnAE7cQwAcQbSJtW0PLvmBhQM7%2BSiZYhCCQBLP24PbLIIkutDnokWplcEdrlArHV72jvH6X3RYnKAidPS%2FuRZcTyuizwfaZy6uC%2BCevqNd3QXBt4ueApq23QRwNlHMOM4%2BMd6EppdmUcswCc1%2BcqJBfc9IttwpLynOC0hIRN5XbFjaGqkPJ%2BvnE%2BYavd3QjYJiCT5tT2e6tMbvNhClaTkXjA8ZxvEnOczxWozb2Idb%2FzJ7YfGAgzPCnVvNDtlfs3NI9qTvM1dZkaJa3U1r0MKDG6rwGOqUBuvBGV1BdRIRw9gx2amHzfeNL4QDdTkZWOnFwt%2BK4zYCZ6rkKZ6uknNz2ftK4E2G6XaX9TRS%2Bl4O9CC5Pa5tQdJkXARtHksS%2Be1P0px3IBfjiSixqyvam7YXQImyNFiJV2nVHIUxCdUpSGjkLf9l29rhRlmbR5qSMvAe5nZh%2FLMmgVsBsyQHMIYmUebQ1fbPFy%2FSJ8vlvR1kIXbnT8L1XbdFSQGVE&X-Amz-Signature=e85e44ab52bd62806073f3cf99e9c4e244fed88b8d9be0778577a55530216ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
