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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZI7S5UX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC%2F1329eAkPIp4b0tVNU1iTwrq%2BjDoJDZvOppHPBAZjMAIgCRR1P13VOgR1%2FB5Xvig%2FFDjCDfmZuGyF8JnMbRCWjbIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDERq5I24tSFc4dxMbircAxt5j0v3oI95xvTNr8cepSd7xJWWqR87aH%2FSXd2OqVSWFT1CpV0Hc32kCZr7UOruCb55VSjcqHwpA1Q%2BlPLsZTSfHlfXvF1Wi%2BzP7bn%2FQ0qW7aTstUTKvKDlRMDIEdF5BLWLI%2FbB0ZqJLA%2B44cpsCQJKSOE6jAKs8pOztm2hH0HElwyN9uFYU09kuoPgqJw0qb0WIYpIalkDnKkpd1JaeyxStlDOQKo5Lk1LZmKKsWKY82BYsK2qvvrJ%2FD3vEi2hkJOlBPjPg1JcmQE4GlvxaBM4Cf4yHVGWJNMWj1nOQk7rzGlktinfMKUEeMf9REW32hX7cKiwyHu2Whd%2B7GyifO8t%2FQBHShhIWtZ9ou%2FB2CpcvdwoVzg2MjN1ngBQlVuAEYpSbAejhg%2F8o%2FLSxbDVwDYqTXcLwJv549FSz9HEVJ2r%2F4Tc574Kn4kpeO3j3KNamtnxTEIHlduiLQM6bpOb0ABaZeJ3zUFbHx1aJtYWB8Al2aO06OAN7M9p1ReMyvHn9PR9ZkyaEn3Kg0oChSeLxLah%2BukBUykRQqlYIsFdY6D1uLGi3Y%2F%2FAOw180nu55LcdYHEMbZ43eYIrZVZvCoCDP28KqYKJdT1%2BKGYPF%2Fk0MVi%2BJ%2FFjDbv%2F5kZnp6EMIr%2B6L4GOqUBdd46V8O7smF%2BZ%2FA1T%2F5rAbqlNtdokZCoeLDvkfAd8cqGsI2E%2F69ArGrHzVOdhAvqvTU%2BUwxg%2BBZnPLsAycIILpNQuCttgx0q9jHuhyZhL%2BbDlW2LF5UiHSHrUi0ussYd0bzVqnPdcAptyrTS%2BDG2XLnG4rhen6iGS5vmxqdjQFGOa0Rh%2FOF59HfbdXrM64GdYVTBEc7YsOa2se7vu%2FAkC8ZOkW%2F3&X-Amz-Signature=f247a5725b4481c7121722cd05b8e7e9af0b4f9e7df663071c64984a8fbd80c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
