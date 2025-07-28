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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636U4X4IK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD52jS%2B5vs28Q%2BzPLRD8kgo6HSr%2FJKK7qNun5L4fTMxEwIhAOOHcz0PHZK7%2FrsQWhcX9bNzPTInmiv9PkPytBdoy89ZKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2Fpp07aA7WMy3im8q3ANwsCGKabIwE5GScMTiv3p07jf5ZD1aGQ8yfFkGOYVjj39PUST%2Bar%2B4ijtvCRljHfv3uX6kPyAYVSSBz8oUERWYeLqsvn3jFNo09l4ZRlpmK0DFrOCwAHE9oJSv1bbY2m6fjXHzhKUJqXWLrsTXwixhaQ2FREoY4tXJ3GmCTAgiAvn97sS2ksRhdIgiqmlsiMRkQJlki6XGA9dFH1UCGbAeRT4cSAXbuofx0G%2F%2FtddM2nFFDHtKwiBb98EZ9Eladcn3WJVDapeGaVWeZtoy93fYc6F%2BVvOf9YUhhHNTmYShUt6qUV12UCxZsJq22mnaneHpO2vXxeAt%2F%2BDkYmSzWjms5ln3pXLMcTcDoCdEoe6D1pdAnjcIQsjrmQFBlhhwSerKpr9Bt%2FwNiYkQnJd6nA5Xufdbj%2F6f%2BuneiSol5fHSs4n6Ug82fPNCXrKCnFscqbo2KpoTLbXttyEF0lvadFgDyp0HEFN4HgSWU1iDL8vkYBjY5AmtG9fE8mYeF%2FjLX8CQUJY5WEkxkEFxlqZUCjU96KBG5QPv4F89RXk9WEhJjWNwM3NflziiJUXdkN%2BYSm24oX4%2BiCBJFNUKFNdAbkMym2CdZLAhuRCCH%2Fy09WX%2BRdwHvlYyDrsfY6kKqjDI0Z7EBjqkAYMctM67Vd%2F1qsmnIZyfXGicWJsZG7VIsbSHWBBSm%2BPYgF5TI6Eqs%2F5yfna%2FF2T6jgPVC2R94Bv0Avs9BTsSlWTabVyI0QYjIwgupZ6LfR%2BJMi9mbnJVdbKqI8y99vo79%2FYKifTUaWZlGLHPKPha%2Bg6lJUMAQYs5Olr%2BCRoHUYBxqnmoqnFxe%2BttQcftswk%2BGm6g3c6tRaieSk0Vy2EbU6u%2BZS0y&X-Amz-Signature=b05f43a064aa2a6f795264f44ff736d42b75ecad1b6e4d2bd443f13e086b112e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
