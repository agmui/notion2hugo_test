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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPQWOJJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSh2xYYt9rrL3F8ef47N3RTfFntm5%2Bawoi3cUJn4krUAiEAtdX%2BeHoVhitBbu%2F6JR2ct4vzuQmKsmlIIsx3icmWSkMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEf0TjmkBjnyjCDBSrcA%2FQoqwiPDi4Hw9GgO%2FGG04RT1bVdq0cn9dBOD2svaYoVa12wLRO4fnV%2Bu9Pn4WewvaRHugD3YzEfW7wKJBkIc1Pk8yzGIU0MPfI82Y6ceuQNJkss6DFkeDSFvdAwI0H1aQGTAvLT5KP%2FKK0xeoWFkHKOm3TYbnNWAnU48bnVpL1n75YzNsff%2FkkhrX9mgQlloGlGwJtwP0hGTp1InxHpPFrJxGmQJzeoFmyMkDP7YIf0kwfZ9DCje5Ctg%2FXEBXsuRVbnUB04wVGWK99O1d3RUAVIYtdshTwLn3vO%2B6yI%2FXgmJ8%2Fjh4ojMjfbnEu8vGuqSr4uAQtVMbjO9A0HVgCMleUkCky28OMddBEh0ujqMMykCJC%2Br0EmJ52xqz%2Fb2T98HfwlisPawOkCS979mHygcQPnJPGqxCphayQuLdht4AzUPJ04M2lOcm%2FfymB%2B%2FiLQET7MNf2KlcIcjnp0BtjB4saIjSpSJQtFIVphKfYHQwb0WfVUffBvXVcaneVqKRrfRBWezEEONCVl6%2B%2Fr7vpHayrIPs8GA9UnW8RcnI%2FzdlFHgwjPVrz3SVmHQAOozCuGzyHwtiBzDPRg0JPEeFZXGmrP8bB3vPqggNZC14t0U%2FvHkhCnO1y6I3pgX0rwMO319MMGOqUBwF1A0FBCavAA%2BhJKqraMWQi8VZRWPCAqT2%2BlCiUrPIy4PxRFP9gywXKeyE1WCtucdjLt1X0wzq9jblQcv5ehFlhifI333mBRU2U0slhM8Vg%2FcH%2Bwjt2uOTf91ZNopEGCdscZhNUluwBUPAih95VIP9WA0nT3%2Bm%2FEVNNCKuOSCn1xmg4xF8W6b8aFk6n1%2FsNUQmx2U8haLoqMtCvaGQmanivZ6kul&X-Amz-Signature=1ccefba816e5a9d1521199cdcd97da71dd1ef901868db24299af22b2d29106a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
