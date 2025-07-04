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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JJS65NF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAfQf1RuwFE9qcyYafNeoOW8sU%2F%2Fne%2BB%2FGf6RNMKA7s0AiEAkXcCOsBoSq8rRpTM%2BN1Azl0gsO9oTq73V3jBLFSWWt4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGTig%2BO50BF04U0%2BvircA3emqAbVOw037%2B2f7b7cPtvAAIjMjfF%2BFAPGukYRtApxZjD1C9WUQdur0nSRtlGyrm7Ru2o4GCUyp8hR6r4qVUIBGeBI4G%2FiIuYCLoKicWa4Vnnq44LWd6WCa6mi46wLV3y7Us4irRu54tM4CTvOuD%2BDwvdaZO7iZDAZtGxmDj5EQGrs2Vm4YNXX2uFV%2B6IVD5GtaAeRB4KauNbSFQKCaiP7UpJxIv78w2zDPoBk2T5fiRI5CrxnR%2FNTIYYVPB%2BRdxWDZK8MhRVvXA4C9uiKBzWZoQN9%2BvT4wKsAmx2TegFTLH%2BbNuVMjNaRQ%2FtHVqYcCoMs7TYoSDL%2FgiiddeV607yuWeAmW8VuKvlRLScRJGGf%2BU60K4PxkT%2Be25Kt85ylDuKApBKEJ5Z6510Zx83dbor0UswYZpyMI9QfMrhSnTkeJQsnql24VHTjpeSoPZEy50thLKPCDYmK0wYtkdaxvrXwuaeFUP28%2ByJJexTQCxJuGQqEurulHZr2UzwSMdT4JHokPgdvCRWGh92A%2Be8%2F1I1AXeTW46slqpH%2BsdTMQj7UrG1FL1LIFXuVUrlduKI4BriwiZ3X5ReBjmtEsi4GS9Jqkmrt%2FflXqnGDXlmsb7ObyjhGYNaJ82OlydfgMNjnoMMGOqUBXTIeKOeADtr7D39Ii5nOu1cQR0ImIgvT5viFGgQ3%2F%2BKA35ieJx6k4eNc7ipxjPq7yv7zevtgbYQQmyDXg6pPkzbBWcNw23hXsgvEpnAtvC2TO6HwVGVbPR1%2FlmB1pmhogz60JOvhK%2F0e6POWFvJk4Q1jD7aCWeAdC864%2FbprQpcuTlmcenzkrnJMzK%2BgbvMYisY8U57BuZsoFPVikKwsRn9Kf7Kk&X-Amz-Signature=afb826c6c1279674dca84533b2278e480244018f51dd1a00cfe4689bc3312fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
