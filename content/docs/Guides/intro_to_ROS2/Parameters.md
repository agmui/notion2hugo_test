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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZ3F3VV%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD%2FBOp2sGxEY%2BvgtEp%2ByOp%2FHSEiqyr80HXMR6Ssps%2BhAiAOZM0kkn53OYeyBAYfWMAN23ojb4j17NgKgkP5TNdV3iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdkcwcPeeAgH6K85KtwDDPmEfZTB%2BiQ1aS9%2FDoDc9LsI3Pbw0r9PGxBMgu6UwXEppjdw9Uq1%2Bn3V5gn3DyfdpU12DohqheItZBS4nZCmDmQttyG6LHwxWAFhTNw7S3jJG1H1j6sBe7ajKu29ottxvjE50ho%2Bxc28g4Vudt3Ze%2FakpaA5Mb4zyy1a%2FA7YtEaNbFvhsTfwaKNSKNdvgIVXQ1fTbbjguvOhb%2BSML%2F8a9MnN1Or%2Bq29KQ7uG3kEQg5IQr%2Bqc8qGcLeofQPnf0COuweTaWTGQDWsUWRkC9RGUOTpLGOkeq03D9nuTbs38%2BpRms4PaF9bLLjbJbM2kUssxN%2FoQr1ntcHK3C%2BPvLwVDbPFPCXZmijo11yKyQdfYBDZXphVKAVE%2FnY1Zl7UeeTrTKqB5kkEsbZ5oKU3EyWDoRCYyNjJprhzmweD4IfZ4QlmDMdbfG8VLCqdNOHdX943O1SjfQRdlIGaLg4cUulXTKh9jjFIw%2BTTGKZSTkbiyJZXlCj2kUmtRjQZHGI7ujNlqpEPuomNrw2HLttY0VPGqITqOOx0bAzbqpeWTsnOdSZso5y4i7k7GFjHyCTS9MmX5fkSuNuAtTiDb5tVo71j%2F%2BTB25fOpOzBbagmPdNOT3m%2B4I3DZYetd7y2Y12gw8sKj1AY6pgGB7sPjdjMsVb3fXMfd%2FT%2F8hKiSO92MPF2yApXDJHyPsENoJAFByduRUAlzwozi8f6VmfyhN0lL8udaKRK%2BTmWlycY8IzTiYJjk3HoKtxMyb%2F8MdOKYdXnyM%2FpXtEmbzb0UzRv%2FWrAitM5paAKU5AV5SEFEM7Rg0618tgymVx2M%2Fjmfc4X3%2BmDx%2FLYLAP0C9KSLQ%2FgnsbtBpVdHf18SWjSGUNXgh%2B64&X-Amz-Signature=03ce392f837dd23e433f63eabfb8c6ad398e555b9e37b7b5b4bc9d366d173ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
