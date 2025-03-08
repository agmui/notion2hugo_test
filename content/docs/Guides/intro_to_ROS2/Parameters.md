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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKKMPQE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD%2BbfdoukM1JSqESmwGvxccuxkQsvQc4l85MFs%2Bs4X48wIgFFp%2FWhkCT60HrRSTb5n8u78%2FcBogILzh14ryvUvEiaMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKFXWiFOH5OWUgmcyCrcAzoTc4PKbEdP3vnjazQeorcy4RRLo4ZnE%2F89fL2l4mUrttcpjRe5PIjyDL5CuXy%2FCuqhS2s2qtROjxD7TGksXpl9Ya5kktMyaxHoUOjXATQ1I3b%2FVQWiSYbP%2BdS5jn50ZaUk7BP3MLkxDMVQRQhdIhJntTj0iOBykmOnGwh1OdpPBecnMAS%2FUuI%2FOv5%2Ff0Janh2M0zNFQo5B%2FVXG0BB6zTpevbXHfbBT%2FafifY9L4fNi%2BXU4qJqdD0AGf1SMgW4mxoFLWLp99ecmxQMme%2B98NDe1%2FoXmBx%2FlcVbK%2FkqPq387dYk8Q9cAuh93Ivtbyrgz3wCqq1%2BFZCPl6H8ljUYD7lhK9jXulEd4tKXIHaPeXcF3pCOPadN37rlqv7dfwlEw5HTHTuhih6IYdZF%2FXgdDFjGtZVxRi17oY6Jj6xscKMdRHqltI2n06POT2CM366R9CKOFvs4gJWauBywfeI3YEWDDZPB48bVZWNeAN5C5gQXs6JsbPPdb4DMEdo2lmMkbHm%2BXA0OHQGR7PRWWUxqHHGmofeMvQiK5EYPAWe9Z6TD%2BCcBG92prbBaNPQP3xoH6dlvMReJrLiCaT%2BPs9fuq1drijkrF6xrYJMfXjShxTKB0fimv2JqjjRaToc8AMIXUsb4GOqUBzn%2BQgeU6y8AuaRrl7BHIcEMB1FhzMdIcvd1JyY1Axk9BBcK12YBMIy7OwNas%2F4GPaIX0NB2imFou16Um%2B3joV46tJCtNfkPV2f7y08Ee%2F%2FMmnjblz2jIefrratSa68GxY452RBKLIISeWTFr535GjKNfEo9Tshw606gUwjevUadH9jNzLiuBpdDXwp4QK9CPR4MOzvrujPECPkU5%2FjuxC0EZpyNI&X-Amz-Signature=368a3bafde6cbdb349838063d292a2caa7a07f7c3f156bf2cfc4a412db206115&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
