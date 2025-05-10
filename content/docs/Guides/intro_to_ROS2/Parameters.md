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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDTM4WZE%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T210544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCL%2FeW1HjHjPFsXNttC5yPFcTuLOBTYHShOHfAtvhW%2FFAIgEJWgkDac5p0uU1J0%2FQMq44uR4ggi59jJojMWTdnHHEsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS8KdR%2FaWO3zQ%2Be5ircA07lHaGmj%2BVWW0lfNObzyg99nJ3Ma%2FySdxbvX6rc7MdhntZXv3PZjoBzknp5v75Xw2%2Fc8Z7ZQy6kdt4aHsW2whxnYWjYkdH2diTqrBMbdG84aazhZpP2Tu%2BFDwdvycWqgX4aUAi2lEcJe%2Bgp7qOCs2%2FW1uiX7TXq3yTNzioQd2xC9eG3elKOrOwXO3DCA%2FQEwWsLdNOq354HhRpZ02oA5NQBNRRMyZVWIqaXS9a855%2Fi4j1bX%2BX%2Bjle5tc%2B3iWALjuLoOsgxmASrFpAAEn2OXpH0MlAtj%2Fr%2FH%2BRHdJCk24P9B6g3z3QUfN8L%2B7ce4EiZFdmTDzx6et9VTIc39LZUVMlslbMltaC%2BiocV8%2BI9q%2FwiXpPzio4efS8A8mJkGuF5Y1y2sIhVF3rTIsixJPVgqIQa7ZPlIwqW1VRUGuyA%2BIW%2B%2FIJHK5vmf6j9pqZWVuqO%2BO8YhZRGubRtzZZGi5nVny4VCzBldyHu90khbAvn3z%2BhGflzMCqgNEwAn53a8tJcZUJSvhVyF6J1p3B15tQnTSNLCOBbp4nA%2BIF9H%2FlpBt%2BCHTG2lLQsKmAb7oIE%2BkQaR8jRM0RZNub88g65BwMQgJDCvBKmYC3ocI0ezk7NdHR5dhBNnqrEPZrb%2FCKkMP%2Fs%2FsAGOqUBpqaIe8MgS%2F8RC7uDQtHGd3J1LAKOOqPGhSGKgH%2Bj9pUxhOPhv6iGYuN9OFf7YDZiTHd6EgdAchBhgsimG%2FqSL4I5wi7XkLvv1yc6uslxWd%2BWNfWik75p%2BDexAlphg%2Fn5qlJBded3N9a42UeNwK2qAqNK%2BYBjCeiQNiZG2dg%2BxdmymXNS5DMg3MsvG1F7jP5GXkSIp7EQazlNewgvxAJ6WJF353tC&X-Amz-Signature=47f358e48c71d6f349f3619ea3c4fc4e145d1e7a7b49916484498b23af729894&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
