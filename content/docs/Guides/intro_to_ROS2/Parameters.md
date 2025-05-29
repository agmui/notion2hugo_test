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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG764J7K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MIhTlxtilh%2Bk5C07pfnYFllx1qMvSJlxzEK18veiTwIgCDg11uRfTVyuz49gynbk2Uj876GeVDAv%2FXCUIoifUSQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC841rtsi1bLRXaV8yrcA%2BjXDUZ5wBWP%2FKEpk8SqC6EnQuuZ%2BjwB3YT3wykAxu5uy00bovr0Ce3VWSoPAeZXRqjPSvUFlXjH%2BrHoGV5Jg1QjOxU%2F5edFmZ1iT47%2FD4v5N%2BgUWoqhuPsOFDTK0YHkrc9%2BntkOQILARKLrtkRTu0VfZZGj1Iu1wVmwRof%2BIDeWBusFPXmCCzL%2FMgzflra3Bf2ERONjPebsXO6ChszCV%2FnNH6leiYAVeHyGFOnH7WtLmZnF5fcC69f4vbNADOiV63zhWECbybfcuMu45XsGvuPjLyu9u9FwJIOQ5XB89%2FvpBGN%2BN00wQJJb6HQ3a%2Bkl2aaHgV3YGvkNLP7Mc054WBzoPfQQfO2tHWypDygQnksrELxdaLBtKUfzRpn02tdi488NjA9DwcRh%2BJgaQZ7iyhtXlRhVKcmp8jbaq%2BumEqB0KqTaNiiKbbf8S1HP%2F19nOzseXPCKgJ4Uv7rM3LKeHKqPnyuf8E8bef9lpNTkl1sGgKGs2GHmgzMHB7W16OvJyeRdIfprM%2BW7GvgLdcwMRuwcT9iOGMB31HaC0CHKDqu%2B%2BAlZBxaSSba%2FC30FvJqrli0tdra%2BKxFW9wYvSfguQLhYYswbB%2BUY3ssAI3%2FD1PuBVaghOpWFOAGwjG7GMOOy3sEGOqUB1yFT5F9mZY1Tg4sxSegRNC5rFt%2FuxnXs6vnX%2BdpJc879lXA6PfxrAmQOyO6VMFCdN77dUcFKl8PDtFTaV%2B4tdAI0q%2BLtmPzmrnkejXAk6mu%2FAU5y4rEOnT4aRxpoo%2FdxF2HGaVX%2FUdgreEzBmflQdtHkoT%2BMFmEimzs8O%2FiWj5glOQcXqS7tyNd84FR0p%2BbMVbBihoKsP3KgbU%2FT5voV3ZSTVHaO&X-Amz-Signature=26ffad940ad194094baedbfafe2310969831f72882567ac8925f2a16d9962653&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
