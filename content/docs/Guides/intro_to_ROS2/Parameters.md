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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS6TJ3Q4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEWMjq8%2FpV7Btkrlj1qvu6sBUot2ha8Kf6LjsAtJ4lCpAiEA9pNEflGe%2Fc%2FxgiYBnkP%2B640mcNC9YXdJBK1jjn6fR50q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBYaOnXsImbnMj8CEyrcA%2FrXfTaDUp3emDZDD5%2F50K6sSxT2vmCywNmL64gl3OtPCg5v5BMSnBzNc1ii3Ia65jqHOHr53grO6vOkP1cMRs5WNzldp%2B87YyImrOW7RnX95kxb6FmSuvNPIbTS41Nvs7fDO%2FLrinYMZ5aWeBGbk44RxWvszwmjiejst1YLW%2BZOOOaJae33aWrPStu44Y5Eqq%2FDvDgv7mMvmmnOMXjqNxB5g%2BvcFDfIniMOhAOUM9HIqK4OKU4bWSB2O0Cq5zTvgxCcqKIG5z14NfrzCByU2VniKXeiiN9pU0Q37lMHXWZ6xEHKl4G9LbGMp1B%2BhNBIsK6tARr0CAYzeqyprArID%2By2PDLLtuM7QcoOW95lU78Bg9qwommnbnihHH32%2FhQcCmQ3ibLprsDvhKVWHPE9J6WQfli38qBNwOmnsGB0L%2BFtW66Cp2yLh%2FGucz09gLS3n0KORnGTosg59ALxMEW9d02n2SaX819ATNQhjZS%2F84QD7D3R%2FtY2NUJ32ka7pF4SLlzomIXDfwoHv4O91VtQzRI%2FekhxBDnT4ucKtaCpJF9NzeCEcHyNv7K2XDJEGwyVqS8ACiNmDm5EuF7PebIluuRGZDQAGgi4PUhLDHzTerKebT9iJrwH3%2BzgYOOXMM6vo8MGOqUBn%2FI7snpZt1iiibdM0G7NtWWNua2EoeRKOz3%2BW7JOWR0WA5fVEcwE%2FN795puDP%2BI5%2BkLNptke8ET6CGtzmvhMLRhvtVN9a9epbpqwvLRiMhJe3C3p4teoCcDS5WCbHWkhEtufgzHBtV9Q6h1s76IJ8OtCVegXujDUlyN%2Fmbes3G6Xtd5DEFncpjDahU%2FigmmyRGDniddFUDs2EOHEMSzAVS4C5t5y&X-Amz-Signature=1615ad82f96bf7f700999076cbe07a239c47eb7e5e4420ff58c9a4cd8bece1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
