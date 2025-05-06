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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VN74HX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQnNo%2BDhbQVokSiT%2BoSEvyUlr3RQuikY5fnnLNO14twIhAPK%2FwuAhh4B%2BcPBJRY4gIjCTbEYu13cw2ENZrg7k2Z6cKv8DCEsQABoMNjM3NDIzMTgzODA1Igygha8Cfsl3OsrqxOgq3AN9cFF90zDemiNfVGVpT7ujfK%2B8YA91p0q%2FvdTzYH%2FiCYO5xoXpGTNaUocxRSTpBgLic1jHQ726%2FeoGolZ4CjYVUJ%2B5bxCW04a4AEiFqLX4eFc3TDUblh%2FPgPu73Iht3NCJZsPKWxcqhB6ixvt%2BEbuhGaEt6iMxrJ5LWBr5uwwz0UQnDEPMdRXwlt%2FF1MWBj9QM1tByg%2BwyDljdbXoae5Sm15oFeiEmv5h9o1vwVJyWrfKavf69tivKn7%2BFnIh8FxdGWq3ScnNA%2BczCmgfyhNBJ%2FWokoF66CZR%2B6CyWRZN1DWHuGR1d4fdpUh9aCECzLyU65Ow9KMfMbcVgdp5gG2tvBse3oNelsEcha%2FDxdirqVMLf4ERSM%2B%2FbxV3T%2Bnk9ABkMsX9XnbPUb1cv5X5wQlMsn%2F6a0Q5j8O6dDrRhqCm2GHlqAWVnRUcYzocUaAxLY943sBWr%2BthW89ExQMM432RD8aqSGlvaD887DGzv65JFijC%2BxsGOH6ZqXhTYscfMwoyhN6FThLEtwiiHPnxOyqd3xHOCsVRMXC1Qa%2FIQePFSBPw%2BVGB%2Fz%2BX7P%2BbcM04jJpozM8sMFJ8%2B1hAQZdW84gmTIRX2xqIZPWmuC5svZfFHPRdis%2FP9jbSUSxENETCqmunABjqkAQ%2FWd0xyeyxylesWwZUDuggmHIVEmH8XV2vdPxVs%2FWQPMqGOHeffE5213j7eebyBz%2BkVcPnCKn7mhAGOxuETBjhcAwugCdGYORjWG%2B3y%2FOKDPTKAKnIxrL9bMeLu%2FGNUnTeoaMEzk3rthQfv46eECXodAxdp5jGVCTR8LoS37q4DR%2BIo2tKqRzgCl98a%2BtHC1E0%2BRv0zVvx08NoAlQEOpCAtVbpP&X-Amz-Signature=1dbe65e45372194327c1927dd63acecbfeccaa8900ef62a0f25130ae0146006e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
