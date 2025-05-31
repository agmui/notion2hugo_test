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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFC4BCER%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6BP7acFmQzG7iDDttREuaisQWT3yPmoNGuUpYHRBA%2FAiEA%2FoIXGePlf7FxDiPxxxgXaEgkuc2EM1qi7fTS2XIlSNAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5r0Pl6%2FE5Z0amJ3ircA%2FNxJW3vtdd8O%2FgoCE%2Br2LUeTp1E%2F%2B7ZbIVmkBxGR6eTusSb0%2F7Bway136%2FQH37MqMN296KYeZoEG8JopM0FOkoUQkrwPTOVMlLQVzwSIasyRn571oGr6p61CMUX8OyycBE7b8Ns1QxWQhBoVrI7%2B5K1DK0Gz7%2BD7ZjtFS8Ghx1DX44Tm9%2BiFtFDrOmbS2F4crvCbd1sgTaUTmi%2BR2%2FvtMtTtidJBjzAf8osLay9AKSJYenbfE4FRsK69IQ7IZwAG2Rwpv5YQTB%2BRin%2B04yKkBxwshOIdy90A22kd3cb2mqEOJ8%2Bsq7B1uK4MqO6FR6Spyia%2F3jsA5F%2B6gnWDOOr%2FuFGHnusfZjlVlzlRqdCfoxJuu%2BOW8fBVxALTNSy7cHTRt7yYSsoCQW%2BZf0toboM3Niwi6AGVxEDpSQ0L19uPSDefxUVaFhviZvjq0R9%2BoHB%2BrMS6IEgaDsumBIBdYhf95xUClqNYzuP6WswZ1R%2FaGYQmxZecdtmG8mcBkj63OuF3GfZ8Ggv5O2CJmsLYW91uWNK2pxg3A4wdArxUNoisGGpQbzscijVDPelFEHfwpIoTQaOByoDRufJYC1mL2jJPAqf8j%2BNo5gIzJX6in3KxuXYEigpz9s3u7%2BEYJfaMJvl6cEGOqUBtjqm6pIHz1ZAJ8NW2WShBAMlXd%2FiZqPhyeGRL6BuNnLWRDFnzwD9E7tfiD4VohOdYBb4KEtXCMERbTg3VmBRXxiY3tvlrAtZNdXkPzcnQgSPF65g1y4aVy%2FohVmWsNPQmke7PfXOkpayRGJFMX3z194mNHITi7swxrBITXDjpV0%2Fkr3yZY1OSbBBUqqoR7pZKADFka8RJHB8cYNZrSeS8B369XXy&X-Amz-Signature=3f4369b7a882c285e15011d8c19ad049e7a77a4535eb235d4484f44aab4bb3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
