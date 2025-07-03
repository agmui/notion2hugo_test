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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7FQ766%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDiw%2F%2FuuzPY596LNzvWpXgAScwiYaSsMBAqzbBNeFiG%2FAiEAh8Mebcqqr6sYdL9QgdDiXwZaOCdYIBNXp0nIqIZo8wsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbmqIA16kbzNSytSCrcA1xCngZV3HJCUO7gH4dXijUPO2R7CxDw2hvm0IcmIfFrRYaG59ItT0rlDV3oQEIOK7%2FwVEF6DOpUDZoEBiTLO3r6v412tU5wQkuM1vWLIuWI2madMfu9llKf%2BPqZH6DUbd0nad0yKrBKlJk73%2BdsyNiAIVY59HUXil2AozCrmQlg431xFjrkn7lWhZGhxG%2FCdiSAmcDxgoj5rkIUZL7xOcCxI0%2FPbePXZvxpt9v0py8o9x6dmWGzciMtpU6cc1f4EuIYfz0pxX8UuAoPcKL%2B3HhHgDhYH5BxNPn4NftN1NVgSiz4B%2Fu0OPA1Hs2h%2Fgw%2BLrVgN5LA8is%2Bk4inz73SxOrYHXtcA2NTeC7%2B6YwfWIxk%2FaR5rTO8iTeM1d%2F3wzSH%2FkFGb0Hw7a5oFq9F6nKfDRzBFhiP3wDw4Ul5o9Ju1LYfNlMIrRyYZ44naD%2FrNbdafusLmMx3CcOrWN856CTumWNaBQBZcFW8foV7FHnhmzJQA7YzzR1s0j6pTACwdH3H6cKFGFxMwQzCCvnsmkwm56wr%2BnOhxIFKYVovMcm4QyGLyhSZBReMl4UHGSe9gUCDOjH3xcFZpnvEbr7fuVacUnQHIdsL6enHwCoN9IvU8riCPGlbFKW3sM1UtDrhMMevmMMGOqUBTJeLHiHtwoFGA3h%2FyV1VNEsBXB9TXgdE7iEQvDZvKNjgBI1lcgCKNzzjCqcDOFQOH1PV37gxmGiEnRbd7KOUNtCZuBHeOvG7FAg4FZ5vBAmcN9Liq8h3cqefjE%2BPt2sIiab4k5gioB%2BqiaPtppjUp1AZw4pa7UOXN9Nd2ukmGpO%2BqkLxrAy39gSTDnNlHFpAua1W6OMjwVs1kmaFiO57XNT1LrlJ&X-Amz-Signature=4df7a63bf1175a40e02098eaf2e973a459b83d0ffc4f7ffff1d771ea13438522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
