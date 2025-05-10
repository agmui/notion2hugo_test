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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDFKIBYH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCr8KCfmtWvi5k90ucBLP%2BqWvQUTsAlnK3h7M0I92jROAIhAKYUxswyARb7xVDien%2FOBfXRk%2FwUcB1UXtsu5Un2KL0qKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI1ZrCSVPW58Jzhzcq3AMjET8OHFZ0BCYz9xedaz%2F2JwKChShQpGRLA00JafRSoy0CPA%2BWI%2BDpa7WqrISEjRG%2Bl475jdVAoZXxjXoKfF21MzEn%2BLTb%2FHGOliLaFyvbZ2QlapJ7bCE4TGn%2FIWNkny9Rr5gpYkPymD%2F9I5lmvmLpRuA58dWVBZxH2XuGkvWqso1lcT%2BDs6BVwtPMkwP1zv2V95f4k1vNs3q3NasvMgUP7QqoquhAmJIUSrd0fDzeMfYQallBnD1kdYsdmWR%2BxGA12%2Bd%2B4diK1A2Z4tPfRhmUOYPq2XlgB3bgkWBb5jQsyZ7bt%2B220PdMeYvYlpvHPrk9nSDQ%2Fj%2BnowMaXVsiUCNXbbsyCsJQBR7JJFhyxKpVr0hEHCW6D3oe7aPwPrV3QocikmzkpIPyaH4beCmCRq2hPudkeNuwi1Kgs1PegfFQcO3iBg%2F3zH5PDTKox1RfHm%2Fl%2BTnUIcz%2Fd0kPHvvqKp2LTezjI3ZLbjUtoRHrzSCyG%2FT2nIyJjwNrKYd3OUE1%2BNPFK06Inhjxfpaz9bTHqm%2FP%2FUNtQ3fJgdpVV4N%2BW8Y0gaATB684SQEyfxAytAEftBhKsCFn%2FahNBo3IcUDIwSjM0kBNDHfPqKuEHtv34%2FrE3LzD338keHnRCJZGfzC%2Biv%2FABjqkAUMxO60GRzjKdtBOwhBsrLH46onvdDpSnLPlOde%2BNTm7f3clUmvZAKmvxilsUudOA0xxej6mVRjR%2BAf5pd6IIhi2SoQyT7x0KG22fOmAgXXlqbh92D2%2FaeBcnrjbxFUuO0v3ZBCd7n4VrddW5dVgu9pYHHS47hFA4389f5Fmc38DQDzYp4q6Ng4E56AR3p9xsn076krqW%2F9Bq6Rg7cr%2BYWc7%2BB4M&X-Amz-Signature=c5cfaedc1a54d50706714eea5ed7bdf67094d7cde2ca2ac4912650a649065abf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
