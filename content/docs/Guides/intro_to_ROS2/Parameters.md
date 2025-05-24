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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGO5PVH6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCNijNPvbS2KPzwFgEx9DeED27tGqXb2Pl6i9GVr%2Bd7GAIhAMRUAIrJKdPeiVEObZDWfNv%2F%2BPYX27z9WMthpvZqxv0EKv8DCB0QABoMNjM3NDIzMTgzODA1IgxvZfBB6Wdq%2ByUTXGsq3AMmfLkN6JizyoSphkqjzpYahpHBzyVV3sEb%2F6d9fCw0S%2FEZlBDkSDPRSNLpt9fUMfyNnrdGLiBPAajZBV%2FlSC2iwrQmCkJE6YJS8lGgCi8pBtZLJysxvPpBp9%2FZAYdCzKsRODyd0t2sJRXw0PwsU2MfDPXKt0T6vLnptDLdi7uR%2B9ungNbKsX%2FNtfFs4j72Dg3GbHe85QsiBzn5azV8JcG5tQc2zlHnSG9rzlGXZtPCXIeKBIQxEMq2usV%2BaeEQEQqnnNfjOcedRB1Kanjjvwg0iu0xxOAuGrKq16vNP7uYGXq05C%2Bqi%2BfDes12JsKqteGMa7JUz1oqf0NpovJGNLz1%2BeHa3QnLUzDJDXRliADGZwvc1yerwPmJzltaV7G5sncHIJvP%2F%2BV0giAdyeTAr%2FgKZFcbBZjAUHO2gp%2FBNwljditAeOGjIhx0m0wdAvs2NPVBkMmePR2qrzaRS4gt4KbsI%2FH2gw5q%2BDKxAFn9O2vTX7MczvsO6Xt0k4XEuuK9nqnY845OrjqYADtkxng6HIJepNTYP2BfM9mwHgCk1OvCSdklCymzNbKF9qtGgz3dR9MJsvAmR8ejfd2SxBGyasb9fBUspcoRfHFOv8X0NijYeN7LZIvpEuS5n99%2FEzDtu8jBBjqkAdf70ni2yncTmbCPwfDw5IyfeSu8htGgOUaN2gAq1wX3LAc91OfJlTe4ZPo31menRtXmcC4KfOon8TdDudqWfqr5PSASueo0IhTHibl9F7HgFMWACcS4Zy%2F0FGt%2BWsdXyFES65dzE37KnWCkb4%2FfwSOv4%2FFO8%2BMc6SsgkkudWqUMmPDIicrzfOVvQpqpK0DdIKNER0hB8JOBnsPMW1xczVIFkkFC&X-Amz-Signature=5ade9c062e5921870241de477758519e34b83be662d4dbd7888e642fa85382ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
