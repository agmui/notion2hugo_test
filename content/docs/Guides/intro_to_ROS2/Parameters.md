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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPXFFPWM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrPEIcLf6xtjp0RJDiM1%2B%2BfocbjBtPrIAB3XXPSDyODgIgfGGElB5fCB3Fdbwqi6BR1N1r9GZ0Vt%2BH1%2FOW65cKewkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAOFZ8O2ljpH1apleCrcAw2oh7bsNwc2GRgVJN5tdjI4HfRPQ1WH3fuYz8nT0byaCGQyrJHiJF%2BG1w6m8R20yJMWtvFMchx6zrR36R%2FxSdM3LPtMOsrYPBelmGrVKTxpHxdyEOeroY9EICBFveDQPivPvJz0rDFXhdX17yaOKz3TyHGJTh%2F3wPmep%2FNj63d96x8iGA%2FC0rdwKWMKxyjQw6i5uhFgob1FE9rRIWSLem0iwXzfxmTMlexq399wwqMrPtiCPJoKd2UygwtSu7Nwnvgjp31LGiPRYXugoqQFLasFbwqGwhtQ61rQq7b%2B83dPuLP9se%2F2m95a8r4j9UILU8lKDcB%2FU4rudtwkrhh4R9Obu5W5GMZm%2F59BjRboWp9mMPE1VvEZaQ2LXqG1MfzMKYoHhqKl2IgpA2KkfXCvRFv2FOmxO549V9Be%2B5qZCcwIJTM%2FkJrJONBpCklYoQNL6pyh4l7XRSCmzhYfraU%2BL7brQ5n2ZjwPfICC7qjp9tLGRWoMQcwRKVjw2rCT0%2BtlJlanHVKIIuM1RPAOqMaX3YooWAfudxD6LsO2qVErNB1O604pRfJ9I3HMru7ph9Wkk4Kx2RLeDJgqRC3WqkgRXCyFAtqavp5BHdrmJrd5dDwNVzk1TNyDchIWOeSBMLWAusQGOqUB6LPhAK8EZoxpqHnchWI6S%2BBCL6AjzMahknNHkuBGQZI0tPDCeuFOY55cSIZ5JlSwFCNo%2FUmNv%2BGEW3u0gmPdrQtkJ%2B7llz2zIwnuPeOsUIRJbsXTVUaVWRzTIvM%2BeT1vYH7ukcHp8GMH%2FucnKt%2BIofwp2vS1BkpMSHZ3P5cJwJti%2F3oFx1ZSYeglEjXEoyhuShfNWUyiq6FHNAy5tU40RcH1Dk1u&X-Amz-Signature=28bfc0e3be2946fef2ed5442091d264698055be551c36bbc4bca631b6c09fc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
