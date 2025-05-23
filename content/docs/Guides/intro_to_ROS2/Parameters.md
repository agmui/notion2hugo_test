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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5J7FNS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDiJD8edrpwDxEmLLx54vTgJD9wJIq2IleXkvefSv77WQIhAO%2BI3D98EwyWF2zHcRlKEi5dylR96xVWlvkU1PHrSTE5KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPQMtKYhKWLWyBgiwq3AO0DyXkEzCHjpHAu56Zbq7kifeGUydM5vGo0d8bU4pg7ftby4yu7dujDvka5VM8HuZ2h3CekSxy5s728GOE%2B7VxmLlK6kBsIX2PnVeMjmvSyqKCltI6sjn0fGQC3MOxGtB8iq3W%2F6k5r25ItJO7JYPQ76ILKEY5Ix0nQZQRhmaTN6uWkTgkNANEJK2YZd%2FYFOrMLgz2%2FN%2B%2F0CxA4llbb2C6yrjk6YEKO9NfPA0ImXGRP7DK0LXnC2H5f8B9Wk3vXFYK96KxVD1q%2BsOlwUiI9yH1r10meNvnn77o5Xon8kOH7ChpfmXrzwO3j8qXZdY7skKgzX726YtqbtjL60SMFaAoKdmkk5KKx14GGG93ksS4sfFk3aacXzk5jyg4e5I17DhK3OecemDYwJ1B0foChKSFMx7PhBzODQrpjYBnmgWaSmdJg5VClOb3X3EFIbzPpew0izCDhySBBWOc5GO%2FMKP6GbEBKky3N6bN9kc2O%2BuBfYcGww%2BqDO%2FSTkatvKDeIX%2BzXHLJtjzGod8X9R3l4lRTDgw5vrSYT9BC%2F%2FLYWKouBgtEVygaXsRSmqOPf44GfeDJe3Ev9HQi01SmgRat3QSpV2NW466wHdFqeEs3QIyvv1rIlJguEk77NHCy0TDkwb%2FBBjqkAQoqhgZc9bcOM4qIsdJJs2YClan7wVRYNj6Ehu9rje%2F2x7hz0NZrKPYekQH9C57Op0OX0s4Zpdp00GOHLw9BmMBpZGOGun4cyigHxoTGBuy9jovRTqilc%2B3RyS%2Bm87whWQWyjsDHXByVOQlUTqSTscH3fJDZhhNyhl5z%2B%2FywcKTfPZ2qBRFHjbUKObgZRQr6C6fEMSsH7YELXJwTZWIPeP7qtvTO&X-Amz-Signature=465eab55c82c6fcef6713d4f725bdbb719a06a62565c8ea197e0a11041025802&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
