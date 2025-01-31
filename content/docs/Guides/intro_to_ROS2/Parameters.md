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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBQP5YN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCro2TwbEJiqZl8ExLXmfMHTL77%2BoC6gwXipW%2FKlBtrbAIgRsQc5ou%2BYW5QvpGvOSz%2Fv3UlxHzjmGWUgtAb66VAH%2BwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FGfI6yT3EFrhGvQyrcA5%2BS721bKGYyn25QWiiNP3yRsRQi%2B7%2BPUhj3LbM0MWlyYiJlinnO4ywNiiZEl59bipJcAQiSe2Mq7TQmUydmL3JAcOieCvsrx20le78sMhmsR65OP1yCVet3R%2FDKi26XWI2xfNQ3leJJMaP7Aeaq4t%2F9AcwZPEsTj94cPw383Xb49wFg%2B87ZKSNuggLgLUEczAK6AmBeJwUaA8itHVIXxFN2uXEZHMXxUwNX%2BeCFlZ7fY%2B5wtSSEYGvvoLzvqgHnuxgIMQd7Lm8FoWy2OpqUy9OYEuwmYCAGkQJizL15SoBP9k2WE3UG3ihMogBvisDLWMJEHxBp%2F%2F4%2Bvj%2FjSLjxiKpSva4lQedUBxhMllsB6cIYWmE5qiHV%2FzIIIHq9rSGWIBvYK91gJ%2FXPygfjXI6mRNNyw%2FL2%2FrlfJM56G83mcOBU11S94nBkVmGz%2FcZcUj%2BfWW50P21dwSaHJXCeHMykG1J9fqmZf0IHCsmlyrkHtLbtP3b01KaIbcXMA40mgBsIPAmSao6KO%2BbkdNj%2B1%2Fjg8uceMHhOAiwbpY2HWUFzAhw%2BH%2F883DXt80GOArCJzpNAiq4mEwufC4vv1Vk%2Fp9lngJrIQI4TVejUrOC4QB3zvGRx6B1xZBiuhiViR5fmML3d9LwGOqUBDGq%2B7509rbQjwvBED%2Fz%2BEVGm1la5URrkSb6SX5uTnCssmdScLksBtoDbcxtGOYFm6IChUETM3tEPFitzK%2BGMORRtmwLMiMhxXkxqsPTKMocXXhVr6UREDpyHcw8Fw21WHaSrBGLe%2FQtipBW1nuKnKfHe52jOPsUpYSwT60i%2B2Gnv%2FXLVRimma1PigXyHzKIE1Pc9wtQ4YsOTdW7fWsBwU93Sjtfw&X-Amz-Signature=1af0844171a90fa4ee835019e73090614b02a850d3ddcd01f624d1557f875918&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
