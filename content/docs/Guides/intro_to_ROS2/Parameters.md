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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVTCBLT%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIE6Ru4Q%2BqZeYQ3f%2FRsQvKX%2FjHD%2Fe51FXERfJxqyxMe4XAiEA6kxAagdssHhyC1UUYMQPutfWnKz%2ByCvFRsqhL%2B2KIVEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDPDdfop%2FG3U9w4bWLCrcA8sbCU%2Bj4MAfPmTbFOybrTBaFtYS17UWw0wyD17RBMiaIavaoznJgr61TgXG8r9F2LWfnLzAJWMPp2b1L%2BhS1u3EstJjl3FwPrx5IbyyoOtbMd5Lrm8d36OGf8kOhRtRuhjoXTaTHqpWFw1IZ9UiI2Ngg1YWdTDV0lFWVOVotT99CcdSeBQIlcDh8xgBBfrbtjc3lPC0oPH0PfzyRqB3kB7TR79Uw2vkHFf%2BwSumUbsWRq3xXk3vL7LNBfHjHqPV70ym7tLWm499Guq%2FcQ2KM86XN0Y8Z8pgps%2FtigsB4lmRDAO0kieReToori2zigUALiL3W%2Bwi96Gfw1A8585hehVl0RmSPBv%2B5KYBO6D139OERIHrCEasJMTMdQixOyIa2%2Fak5M8kzH3FkZ4BIreOhE%2Febb3WFKj9Rb%2BwHZBi5PJSpKOaBaxkCkhTylSzX%2Bzrke3GBh9dULQc37H5A86TOnIGi5%2FHDYnRhHufjA9TSOmCDkPcSfM868vgOq%2FLiSQ%2Bk3H%2B41HgQhvif4Csx7ru0g2D9hcTrDm7A0%2BK0nYoGyMJ%2FAScoy0w1he8dWQu2H5eIoG9EsIWwiymK6dsAM0T4UQv6xM%2FjlmP7OlZUClWDCr22EcwSx3mA1pZMJMDMPD6lMgGOqUBh3nElr%2FyNi7BrOxOCvu9G4SPwHxgHiQffE8aztb09eYfI3yMrtImMOYQa6tOTVEwqnNF%2B10Vy4IaxdFQE2bOatgNDIFGKrUZdPjdbRMjjYcM%2BT8Nf%2FOODRtWY4vVduxxqH5HHtsQecF7wh8%2B0o8aHoC1hiQ39rxthAnHyAjLlU%2FoqBT%2FlWrlEuVqLX1fX45quOiv0FS%2BAlytsS%2B%2BC9QzzCWah6Fu&X-Amz-Signature=def48af588f6f54aedd36c457c95ccb044941b19b901c93b4f3e17f77afe4618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
