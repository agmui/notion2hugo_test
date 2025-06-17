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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSOP6T3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzqnIc%2BAkwN3w%2BuDF8UEWZ%2Fdl80PPIpj9GbGvgXFAtzAiEAmmuAxtx7AhclyQrgpbI4uAgmZjNgJF4loecu6Qftu%2FIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMjtn%2FVhWpicbmKnkyrcAzOK75dsCwm4Q7UU8Dt8wLI1XZdHz50wzv29h5rfMJ806lvQ%2FyB%2Bh9NMtq6FFZFdSYYrms5GdyK%2FfHfXFEz%2FwNg7wvp5jPjEbJGFPHWL%2BpnJPsC8BRpH1PzMR%2BvtOQdpUN1F5eZ2DGwKqfGZ3DtGUNQ3B8Ljv8xV79%2B7aHd9YegtULu1%2FmdD7%2FY3RdvCAcCzghRAzpxuCGj8DBMUDa3lfcNcXn8LYvWIuMVSj1qMOVgljJaVxmbXE8kzgwW9xNRU76Eh%2BfHtcTx2sb77%2BmXbkO70fsdV9Yc%2FLTIl6z83O5MReayVuTkRv7P25KYCFNSmg0uKqeMjCmYEROjUthEcqN%2FoXZ9gNJ%2FJDk2O3vJeyvfxMOBUKdcHGQJS6gszGctPBBoy3d1l191tFQht0CGIhCP%2BJW7H9Xh48oHlypzexLjpD%2FccvNaqaONjeEY5qaU%2B3qpfU2Dv865ikRrR%2Fkw7JX6PPUBkw6%2BPG%2FjAaiM9qeP3uJi3EhymWJTs1Ii5YL4GgIGdrPQeB0FFY5E6fEmmJf6XUVSpMpZAYqQ42wH%2FLM7GiYHC0MGBxPSaBnCrtwZf33GjYPGLkH7yba9lY3y4WicpwfzuswnostBzct9DaFPdazr2GYFWGmi4r51JMLamxcIGOqUBM82Pta2qxsXmYpL6Qje5mkx9f4UwXUJqqe9wQoOL931Iqb1dpICzhlToPTmoR2bBe9WrPNxZtSa2ajV3IWNLoBO6ndZrfSRz%2F%2F%2BTcCamqr%2BLZA8L1kau5AKFoBuAIzWYv30s%2FTA2ggmXeHfKT2xTbMqVMV%2Fx%2BxNHllQDycFURBNif5WHfbTiAWUDdbaWDswOSbk5vTCSD4rX0K3YggUs8D4lJKCC&X-Amz-Signature=eebbe1211e552b5723944e160d474db4a0839099c4e517614ea6b35edbc9f036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
