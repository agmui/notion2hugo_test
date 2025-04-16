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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S2NXYD5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLIgalZEPBcnw4pUbmR9EAJ19B8kxBzlrEKtbnSHQyHgIhAIYlTabWYpk68lJXifVAY2r0Fjicv1ryHkkpxUeSOdtzKv8DCE8QABoMNjM3NDIzMTgzODA1IgytHRB0ynyuS1N%2BRd0q3AOtdEpx%2Bqv4iHVumhY9vtB4Lp84FsPvocOsmy3UgQcSyt%2FO0IkCnKismFHbfDant1CD1Cv%2BVzW38xOT80RpTtQGSm5jhNk6QJtaK%2FjV6GkMLIEoTUM8LtfxVtoReZgls5c96NMAGS8ideiJlHyHjnfiR0vloCNnNzC4YvAfB6oR3ifY3mqymX%2BcdFPZ8%2FV%2FxyOn5GsvX6VMO635X8hSSmZipd6Xug%2BGv4Zf1SuAQ6e3SHUrBOHYog4ftLJkMRCRI%2BHcnLGl%2FwxedZxgU%2BIIdAdAEw1bPtzwNuXRIDNpaqqZei4iY5sqAX4Zeh5Ogps2S1G2HRYl8jr0O1dGFUiPYh08yeXPIe%2BUeAnDsTp8XE5DZpq%2BSuKhVjKOGglBqA6THpTBTXjkYH0iX9SbXKbBygjA20HXZt0V1%2BlNYF8AlR3HRwlcgfv7z%2FAWHByGZlf8Ga9AJuF%2BRw1LNi5C5VH18OrgJa8ua24RxcigWe4eL9jc16Nq%2B6vRYj7ces9jK0ZtVjRT1CBqzu1vdHg6u347PHRcxwgcTtw1vI700BcQ%2FmeoSjCtwNpWLGBEQSdhqg0R3yacuLGnQczqDpw0lIwBAKUCMQmO2kE1fC90GBOl8ZAcnYbP22l%2F8PQUSwF2ETDIxoDABjqkAXhqsggB4GeSiS1S0bIlyXuEoVxb3iqG6vxnXKSUBVdOP1svezldnFTuOZhgMNmDlTA9si4y%2BYGyxFFeMpOuW3RfIF4Qiumqw66xGVns2oGabASa%2B8C2f83c8CEGTNR6BFT8CQK%2B%2FTHCDErXwtCbklJ7i1gdGarTDv6VCe6%2F2ypVfsHuJ%2BSgby1RmUHKRkkwErt1D41Jhr7r5%2ByleZIU8baKhLca&X-Amz-Signature=3fd1d8805fcdcfb593fc52659b579a15edad558d580131700deaacf033f2378a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
