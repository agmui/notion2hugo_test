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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WYMDRYP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCn5SQIfoD1i83XCOl7nCmWxpW%2FhJ5jjNuX3PJCL%2BREsAIhAK5R887guFUOGUnBEWnS2GhaDXsQapCQ1c0%2F6vQYU3n5Kv8DCBwQABoMNjM3NDIzMTgzODA1Igx8cC5PDp62Lvi62Q8q3ANS8564t7q%2BZRtfDSRFlTfL1D421ndvMc74q%2FF1XtGItDR0wsu%2FYMp8qlxsbt8FuxzGCVbk7wwshgib1XaPnbHRTBa3aFmVCeYCF96njlgP1SKriVK47HIc4x%2FxQAutX7MyRGxIKxMcwjDC%2B4Dy6pPKxvd7QkX6KQb1A%2B1ER15tWPlVq7Kaz8BC0WPVI25dmkERGwcQZqeVaZgYQIP5gM0MO0%2BalHrlS8zNNgtni4IjpDDq3RM1uq%2B2Nte3ZEzueg%2B6Xx6J%2Fc6FMFl54lcdptuNmxE1yiM5wTxe03curxZbdYvigQSui%2FRzrUb%2FueYOWT2K1LHYI8anPJnzMwWxAETf%2FB8c%2F2E9jU7gGSKsQWZPxz%2Fhw%2FVxFNKGkhhouUk%2FRB6Ab%2FgMEMVew0sTyOvobKXaeTXWnzP5FyYQPxdROeZltZDbo8RWJoScQsCAxoff5QtGrWNyOnOBwmqlHFKLFMbWxj0BlRJfEcevqF3%2F%2F5kVWxNvcT1KHbQbl1Z5%2BlHwZsK1dhWpFOU%2F2tiRcSkczrz67lbhVx5Cv271h3ySSBT3vSuJhYopN%2FvbbFkvK%2BAuR7iCz%2BfroxY1PanMx9L6YsA5g%2FIehuDeHLZWsguMyJohU6%2FOC85CX3coQqGFgjDOz5PBBjqkAZQqBwr6X%2BQwP1OHT%2BaLGrLRX2IBKGJxOpkFOfMN6z%2BxR30UFO%2FFZYhJxIPCEGIJflk5nIco%2F6LMmU3KtgCt3RUlOeXdi9C%2F6hF%2B3WHYTrBsVKBRUtrEobSCpsuA0szvX5f92H5ebsH6IcP3Qdj44NdmaYs%2BBrUWMdp2D6AlGqlxRYlr92c6uhaXnaqSlZfrV8Y163eEsvS8CDkeDx7LgKiOnWhU&X-Amz-Signature=05261ca2b80ae5a81746710bd2362b0c5c32a464a3111c5e94004ac8e2e0bc84&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
