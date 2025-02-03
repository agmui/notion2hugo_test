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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXVGBDWL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4xPNRE9UgDFsrpDOadyFFyl9K%2FTs%2BESCEko0AByhgEwIgISlqgOUDzpgbcaIGlUVyS8Kq7%2BnJw940f%2Fb2B%2FZga%2Bkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLSyV%2BFStwd4V9ZJsSrcA0Ges6jxXtWvtCIbBYatPi%2FhccNbrVAodD31UFP%2BzPGeGDhs4sfrWF67wZnOCcf71bVYmQaBVL6FZa3fzgo8g3A3xyqcBuF1S23nAkJx9btdkRAP0DLGaU2iQVsX5CNRL7JSztmtYAfrmUsy6x2eQVpNiNfJnA2eQj7rQ%2FBnQXrWDGg6KfSwMWOnVslaWiH0ZHLwKWtMjEvZjLWKikOqbORnilUKS1qK7GlbLhEnaw8iFDOnMu5Z2G6toneOQeZYjGhi%2FQ1Jji9hM2Q8FgGgq83Gw2apVYgoQ5cnMmbAhmY63pz4ho%2BWazGOQm1P%2BsO%2Fk55YT6NwqpnQFMs7As0T97U4o58LUlgvQJ0JxzbYxbn4tNk2FEbrclTv9KsGzICXngMZ%2FgKeAIod5n6E7oj3zWSChqjCMH6Okv%2FFJAlA8Db%2FIaktsYE3RHcXBHZB4SOfA45O6BGNXkpvhmII%2FZwdHfxolReTCD1%2F62VxmovK1b3pk3X9zOTPtd2Fk35qospWvcfxf8LcjJyzJA9BNS2udHGL5zaZ3H1D0xZoPpqXVNxCu%2FR36OP705HrhdiaZe%2FuhiOhb8zzR6ic%2BWOMJTqoYh7lSLAJ8HfjC5p95KWl5XzZuVaAQHYVcRRtyoj6MJnzgr0GOqUBhgLQAiv5npsgK9YIDy7awpNcr95Kez4bdfnIuOuxaxJFomzCB0AXvb2OoK5YyptEl4khzSL8n0lFouD1H8Yh2Ok4f8nkvHPTmIfgC6wlyLF9yKYcIits7spsTT1M8CnvMbhV9Y4IvOIp7t2saRtHyy3wRb0YXtlI9jem1648nx688LSKj%2FGcHH6tUC0mxFBSflb8CVFZjSvoKewsaj80GVnVMIsY&X-Amz-Signature=eef0c9f2fb65e44f7a89719885afbd648d7e275a925af0c53c9658cde0867bab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
