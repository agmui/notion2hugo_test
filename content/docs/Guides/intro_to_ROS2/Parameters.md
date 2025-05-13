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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GR3ETLP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDOaCqc9YIJUADrvS7yWDiUGkbg0P9m4XaHiA1u%2BXf94QIgCiUxoyIerQJauStr%2Fe%2BoBJ5Dide6frMyT8bYtHzgFPcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8pCg%2BuLwwQb90CpCrcA2qSamC9q%2FaSObJC460DRhYukhE1Yoq5elvJV1%2BGuHX%2BgYxY19wZTinebhbO3D0pu0HOgGF0U39cSmnkpkDAI6CSQiYedmPtMNcRTKHnMyIMeD%2FHBMWoKRerG39FHhWeRqqx9ATfgaFR79A3RE9reYiOai4qLaYht%2FxPk9egQlT5Se2YmHMGhxO3GDEa1SGrb3AfKRIgv%2BNLb7781ZwAiXUCwJkI3ep9mnyHwNazfH709rBLsNJgIkSSrLlpUT5pIHnja3W%2FaLccWrgkpdTuquJz5CVyOpjXuxIJMnCGGRoTJ4m3BW9drptbUh1gXEd8GHqJm4hKsabKW1HFPwJXEFTinuxE9a4c5fUz%2BZGYqR%2BnE7DfzSlTrQfIrBVJ9C44d5VDO%2BfBBbGDPcMMT2L3TQtZT0FEmaPa5BN0zw49LvcVXllTC1zzNUK2SP9LhbmZbDqI9paGI55ePa6Eb9Scsx8A6GWThb8AcfoPzeMfaCVq3uFwc9yV0OZbwOmthAN7c%2BQLU6G7Y8jVShP9e5NMgrutGiuV6CF5WFr8SUg%2BFv2JNDQkBY%2Fi9DkLSGITh1k%2Bl%2BFXSKRSPNb%2Bxc5S0HlZ2qO%2BAgrLSmCPIbn5hdyqGkvMBvng2cbXtNTur0mRMPyOi8EGOqUBTXcjwJUxYHdm0QE2%2FULs%2F8gbR1QOreCBZGf2A6Srqu5ArPk3yD0xSGDOaRqgk3MRulEn9Kl3ZHkEn5rHn%2BTHFcY4ulmmAVb7lEnT%2FKkDH%2BV1cvY9eyiZk9H6oekffi1ncZRSfi36VbNMyL7dzQkzIadaXNjFY8VGJ0Cj0xUXbPJBv6fMkelfyFK6%2BUDboMRRkuR8IREZnv5APj43oDiPZbvzUoxq&X-Amz-Signature=909c2d522acfdbee7ddae36ef222503e8b101f42b72fca5beda97e9da61f8b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
