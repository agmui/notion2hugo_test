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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXYMZMZ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCWk7%2BYk%2Blwp%2F%2FlQUqt8G5fc0IbILZy%2BlIXTlHsqdBzgIgIIpNu6tI5zWHtbvZwFsbqzB%2BIsZ1mDcvGL2PSHASkXwqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhyyVeg2SGRm3NUaircA32s0BDkbf8ibdloeI1cuHUSVLazceOEGD4mA2TvbR2rK4Op2XxNd7Q1smgvon0r%2F7eX560E3hckMCNK5GSBw1F2aaETX%2FqPvCmiE1X6a7ri7NlJdkYHyvAiCGI0%2BQxiu%2BTEmszVUWv8la7wQKyqhwrTRbw9X7ctFVn9Jp15DDDOjuhbes46EQbzdIBaWyNhf3%2BVEJJZwUdQtx9XvtWHj64zQjVi17r7spDoJTP1Urk5jG1vWJK9ySo4A97EPCxIyNmGPRmeFi2uU9vSG3wJT%2BCv%2FuTpM4Ky13o8AdvDlEF8eqPkbBDwukSsW5VbsEqS3%2FylDYkrwtM2jbXDcN1hzYud%2BUMS6TIbVi0JOpXX89dPu4Qtj5RfVdPxh7ITAPGNyw1p7wV%2B2vd5y1fADItIMQBDOl%2FxF%2BlRpCrNHDX6oY%2Bi%2BoY0mWkTh2z8owpPliLhs3x407GQHq%2BGAR8Z9Egr5XoG%2BgptIhH5QXWGplIu%2Fim%2FMC07Hmc1qduBXoUvfwA6lwKFNxVRIaG%2Bm7rM%2BfjT6xlFYmqF7DJV4HmJZHM5amY%2FgyfYxWL8opN0mQARWv3uC8%2BTSRr4BcXeKe9Nc0%2BshXJEPxKCwdH65zAgC0kNpPhcxHZD%2FwW5Ppl1Pb2YMKid470GOqUBmeCPSk%2Fsp22d8qV%2FDqe%2BVfuN4novY0TwbJmgi2rBPsAyO96Loziyb%2Frid140SuVpkFnJOH1BplOgpL5Eg5%2BINb3GVeSxO9V3Wckwklo23pl1kg3h1QT2tUlBFLDUnQj4CBXIhKxRr%2F%2FyxurJcdgwAdgmxSneQBKC%2BgslAVV1gP2e0NwqIjos6sk1XYiXZUZg%2B0%2FXXOt6ULPLglLRD6wAIIpzOCO%2B&X-Amz-Signature=d4149a3f4ea2e290ed939357d1496f402cabea10b41ed180e503b6feb48fcfe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
