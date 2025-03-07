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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXOGQD7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBj%2BskujRUo4C%2BIRFiG1oXa1Koh2QEFhyPH%2F7SeFkJbaAiEAlenLB2RgUNK5ixamQWl5HhEsi9ZsDWYWRnGOtUwLhOEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCv%2BmILShKyXD%2BnLqSrcA2VNsXGu%2FK457Rq17CynlMVyFKFXUX9YXhaXwUnjkVen9vgw2GglfAlvbVN7wzsqhjo0Z3RIrp%2FZDv%2FxWvKy8u1TQQxTXdgR2lNuceZ1O9RaUQLHqRwyZxVt4cGoPDE8aLU5%2F8zIwgatmi0DXtDgRXM7eicKowtyoPhkC1VdNtCqLfarf%2FiP4Mq7grbrdJYQMbQXCH2QEPgLwkcdNYWbfRKdo7tc0tskk1boG6r%2BHCH1XMhXDmM3caJzX0fL975qggssb9PfxHAKvuxLdusKgbtYXvn1chZRSOnE%2BcAyCAF9Ni3wvwcS4oC0j3SZn3umSBsOagoUlLu3VVnf2GIcGRRaOvP8BECnZbYTcOUqtLH2J4TKUgWwyQdAnxrj2%2FnjqWQTl7SULW9tljPkvMgvNF77NQCmrfLfKXXQqFNLijmei11nzDhp2yB9M8pkZ4zxlbiLxG9i%2B2L2EgajJQDh6Hi%2FkwJs2idZfOv7aOS0HH0%2BFmoXlwvvsdAWE4nYLTTUdbvBccFbd7eN6Tr%2FyA0RxG1%2FkA6kLS33f%2F%2BEMQJt%2FZLgzFB0Hyb47Gs%2BxGNFhDZwE7z09H2yZ8kDX16ZahHrVH%2BHSzUZVS1%2Fx%2BcdVkJei4MYFcsqPv4hYHh2CMZrMLL%2Bq74GOqUBS4Txv%2BRI2hW2hft7KMMb72cA2rEIJ0I%2BWyuVUCq17TVEEOGTae4KNlw5L%2FLLmWQKIxYs0rNetYp6HELVZ1Vi19%2BeKfwd5bOP%2FL%2BdAME2bnyLLc0GTvf9WLH9AvWMYGa0VYD3a0FtZAcOgJ5KNm6S0YjPgSDJxq8duAC%2FokIs2mta17LsI8hGaAFi5S26At4G4FfmugUonUAiMjVAQmfCzT%2FVzlfE&X-Amz-Signature=8044da2d0ddd7a64a37531a1a50705d9f2067dad55a4488196f4c75f9c298bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
