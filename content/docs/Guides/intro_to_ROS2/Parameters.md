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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOH2TI5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiU3v36t95QjgenaUmEPIyt0m%2FQsCtLp0TcsafC4zuywIhALEDQL1cwMsYgww7%2Fwyvcttg1vBhtMS9ocSRm6%2FSYoPjKv8DCDUQABoMNjM3NDIzMTgzODA1IgyiK3YT%2F9F8KUMCCmgq3AOdf%2FALr4ixoz5zxOtif%2BiD8%2BL%2BL848%2F6oIVyNXwx7nO6E%2Ft85l%2FKOzlTRIf4UgLwugR9Lb%2B4%2BvPh7gNwOIUohDUv5M1ROLRzxpDjHMR21xioK4IaafZ06d8YGWBDwzDIbdUGOGZbE9NfdISOPD8GEaNNC0JvIc4usHwjjRGDB8YDAEjV2MgAB%2BA5n2fY04fLz91beAqeI2GoPoGOCGoFSrgByq%2FxXxh9WvWoNdmnnyrvYsAA%2FNdZCD9WzFURIJnd8AFQ8OGI%2Fsi9nh1aQ8Lagrt44zCVYM8Kb05xCJdHUluFk4uCt2MsPeZlynUWc9Y%2Br9dZuClJrrxesR0ovKqjHI3QjnqSYa5Xz44%2Bdp%2FIr%2FzdOCYz1HfP7WcWRu2O5dgKCc5bjPHrjA6d4tpXB%2F0F1ckgOrBrUkCvZMqFr8YAUelkKA1RRpp81SiTvZUqfG8dEpv3b%2FYzb6kOHsQYv9%2BdqEfHE1OeSjPwzsSMaErNOuR4T4BL5A5RviLQ9X8HePX%2FLue95Kj6wt2isSB%2BvvS0OR9AZO391WVzgEmZweRSf5ZDdfSt6W%2BQLyFoH6HB2LcliLyHYIXaDPm5lttRVvufBpl2lWGQEx%2BuHbpKkp2yf8kDIPsetyXddXgRQTTTC0suTABjqkAbnWU5tsczJpWp1f0DHbEbWzEeNraUpoIKD8I1p%2BKEbF04yFGuVyO8VX0C33kJF0fNeQTJDe5lkHnvqAC0uIRdWAqL%2BSyqPBFh6kZxveKrB30SrxA%2FkIcEjTNQWCd%2BaTIbgsValT7OtCitC5me0s%2F2NMNU4IDBvojPzkQVIz6FcJEeL5uqU3o%2B4spZFjrnAyhdPjqwb3fN64uSxdVB75Nc9hbsDw&X-Amz-Signature=bc09515864e4191a51569099244b2afca420641621bc99689615b969dd9917db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
