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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633CGEXHM%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDnUO3LWg2GbucboeRVerGxMpx%2Fthda6VEv4vsT77oH1QIgD2i%2FwhQMgF%2FW6AEGQMXAAcweUMRp%2FETN5%2B2gYuLh9fQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA40pt2eN%2FA0lJoJmircA2z4H0d%2Fmo%2F71F6b9qI1AcTco209INc5tUeZFlvQPEXfATto8v3DpOImqS0T6HnblntnTleyiHrKp9oj4e8XZnUMHpeL1zOjBCeRoi3Eu0XFareUUWFQ%2FVTfxeSIv0iEe0t9TWbG0MHUGu9NSl7rQ%2FfK5tNnHUC4pny2wGCvYSVlWxXvZ1tUxmbtYz8%2F4terf0OQQVP6FQZOlD8CHVgpxsAB%2F0Z6YQJQ5dN0VADbQ6ibGDmWuqJg0NJ5M4hnSRU%2BWze8RkOp%2FMIu0TujUR%2B50VVC7dm4YlIephaRq9UoAzymMI%2BecMr6zSKPoBHCasryqlXrwGBYO%2BWHNZgiSmZl6GwweyZCXn5LO3IuVOKlbL9B4g6kXYJrUXAbCZBndA1K%2FDT8FdDWNfbau6X7ftLpUIvPAvhBVofdqsJ49yEsuwtFg7inYN6nBT14piEcgBTvGp14Se%2FfEnebSaQi94uTpmjRqxRU2TNcSuWqdqYgDofIfbB3sGuTJXYMqm9pnLScOULn0hsdt2Ha9Kl8hukpSLdPkgEVKK69EtTUB2oNuFJnmieoCazzM5epHvD1PoTuOwodTLR8uE944LbZuG0VrGK73OJF1e80QzKGWKd1XFDGOTsHZCvYK4XCRk7pMOvp4sIGOqUBUnAkpvu2Gq1nFp%2B3oaWk0Wo2T%2BV7k7hthr078YBvspfcjdi6kq2OFL5oSQD7OTMNOXzvkVwWVAzWN7R6V2VrkchHJSWu2z%2BcpH5vJcGYLLgn%2BGBR1IvVRmhakaL6LTCW18Mk6oJfLsLaEvSuBVZnseS3A4ePw6s3SxAwFKS3LkbW%2B3T7K75KOEN0%2FW6DCsyEWdUttcQIzpkroFzrPUDHNnlg31tI&X-Amz-Signature=1241a472ab2839646fb2f82cbb561401d941b07156ec25367f48e935f2daab5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
