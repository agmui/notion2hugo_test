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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJN27SE%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXR%2B6UTwKNo0%2FQwENvQfO%2BjYCwmBhErMpaCQ%2BqS1eM%2BQIgSzqNi93T20rRzvonKWxzQ7Ls8eUYHC%2BsvmQkq%2FMYA8MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiagjk9gBTRQTdauCrcA99gjnmQ4ANPBkvzmrG9sHQub82NXXBPMMMYwqxTUuUqjeOtfYzO1qeJJVLtkEqH06UtLdTrraa0%2F9JZe%2FnD5rCqb0FgNoH6WT145vI5RU7G9aIbCcJ0DgoYZ0r5BXaJHlJayikTTFW9posuArbcr97pSCaYbzfDXHoDQ5DkXkuZHfLTEp%2FPylCncOrYsgBUkuY49JJ6Ap4wicbl7IIr2AKy619iW76eCXI4ZdF9isWqymz%2BFbl13On0RZo8Z6rEtgCyX2DFNAOPzADb4cSl%2BNsFPS74MTzt%2B%2BxJzhR%2F%2FtTDc6KzQ6hPCO%2FicoOKELMaUmey%2B0KCwJFGD7YHW3fT0nwhBTGZi6P2j74HPrHLpyRIs6k6ZnuJmTS6tL5YH4xSl87zjo9i21BYSLcJorLQBBU4vbhuaQ%2BcNNupnv6hRy6hqIOrcswyHnMpcth434KA6Y6k9imMTp4Q2LUZgjv2GsiJC3snMBiVrSyqjsGX0piBgg8PT2CKAMI%2BqYJMzmYz67fGk2m6ZT6wF2j7bdUCE1xg46xJdRdD8CLVeDMDNIysJ%2B5N5Di3rI6P2XSi%2B0tTxu%2BFsjmNMcI0PGi2cbRY2594ycDwo%2FFOBt7XAUPjqXoFNxADUILgXIPOKrJPMO%2Bz6sEGOqUBl4233eL1xrrOQAqZVEl1OJA0giRkRq7XGDZYJCMb9AxzGTFi7DXsZBdC39yAxr0nexgGvVAw6wryCrdIXLr25%2BttP%2FKbiS7RF85VFsh9FnUSb0b4lmXoBMtq6nmVIVaWID5O3xSWkVmsJ%2Bg01KIHCn1BQZwJBLKYzJlLNPDLNPxB20B6hJkRn80EulrnS4tawaMCMlvx53g7PsfEr0kwb9f0vi%2B%2F&X-Amz-Signature=91d266201b206f89b614a71e816a3d682c1b090b5f895580ab425990e54bf5d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
