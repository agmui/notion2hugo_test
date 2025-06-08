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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMDOL4T%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZQlEqseBIXYGB0bns5buoqD%2B3ytafmdqiXmV3DKr8SgIhAPi%2FAQdsm1ciOut5nl8MRiw0GBtAHkq0c5ZMNqs03mo1KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyghNV8Ux7ICqbtIfYq3APVjI27XPQIh5Ep3wuu2TWOlmX6b5TZP7Zc4QkTHnGYRD1WR%2BWT5vuUxSv5lJxlG%2F0RFag%2BMxrLdJcY7elVTJR2gIYy%2Ff7nLXVdZjeYd6qws8CrU7sR4f7zsv9zCvAVg8mH%2BNQ3xlII9jHYd98Bygv74%2Ba0N48c%2B0%2Bp%2F3oW2o9ZVImSUROfAIJZPD3g3hhRVmuTB2cMv6XsO%2BkEe6UWfkHsAIrdiLqW6%2BD80GaGkWgVqNnpF9DX0VrlqUuMrBRP4QL%2Fky%2FbJPikE6tsm1xLvUTdnOetLAGM%2B4FESYujNoxepjT7tyrHElz7isu1Cf%2Fi1XiDQlgSB07HGxcMj9p2vrUuyqR5N24S09vvlCJQnsfwhlI6gRkxn%2BBvwspTLbgxDessSbeRxZ7S2mpZLbfdq6ybpJcPjtJNkt7PhNRINtfVUdRoUqBCuUtLagAQlgO4BBTbxld9bqkC5gsYD4sbBGXeKdcFDxTYKNUNbfssaoVdsZuFEhvbEv5tA0%2BuB364ynpiEIUOuljoqtEK%2BIGadmXEK1jgoYtCZKiSvkFtm7aXZagsEWHdXuKkaUFsL%2FDiMVfL4V9miCWuEYX4ypP58GMAafgWDbUOPdnpbDWjo%2BeN3rNVkaXBedlWkXgQezCsspbCBjqkAXtOHenYScAV6s4Q0izBicLpDq5SuiphJFHZrmCCQG2tvycJBRcTrZ1wHnlp%2BoBYAK7zNC7Td9xXZupuJBV8F51ZtOVgL2sgwpgO7fu57hDvTa8C%2BTmRdMDXg2qYr87ROSIehnylZpXTDmJ%2B0SEnbSGELwMsXxsGsMfGut6pUEkVYfdHyghk2rqS5bsFoU6sg1wXHWLc5BOPbLxaZWaVwtk67EUC&X-Amz-Signature=bb00f33466c0fab3bad6d87e1e82bbdef8a13c8013b4f3879e9b8739f80527b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
