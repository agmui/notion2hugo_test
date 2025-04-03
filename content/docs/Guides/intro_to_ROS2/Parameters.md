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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BAQFJI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDsYNBpYjh0vKaj4Z2%2FucT4TkQtEyzVLqjgID1rtJpmSQIgHT14TEjIqcup3FcXSUf6rS7xGVgrNzF60v2BSGNrHQkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnxEdwuFUf6DAdPhCrcA7kRCtgT13%2F5dJF7l9Cil%2B%2F68AwhQblhz9F0Z47bDSoQsS8L7LxRmHSbvHDFfXe%2FhXOxfEx%2BhnbultuXwGBPfWDtGY0ShXvwZhoC6bT05g%2FDq1hlklJrkGWXtTUmkT4VLPSErYgSC9xLJONWWk4%2FEJtqikjnaXI5UJnvcboEO%2Ftg17r%2BkMvzvE8D2U7V2SQWCkzT0uQ6gEv%2BMXmHVv2z%2BvGbXVK0FI%2FIUeD7uDoOwyJFBnOPjc0vw7D3VYJOBDrZnuuPkHK3YV2lqJfYhOQ6wZhN%2F6MnY90h3MHha9qjBRkdZsFUv3qKujyQznc5eZZACqirtrlTcXpBmB5zNv%2FAjVGeUY51H5FqMklRPrQbkp4oMBxPRf2CdzH97T6eWGnhPrjMNlQPPxH5RII2PkGHfNxlT1QZcONamZdYGtBLmhbr46n9etEX7%2BnbM83o4jj%2F1JsM7RNod6ZHqHPRmQbSi4psyNOmTR1DGUlPHZ8PNdlxC3XWuVt95iEiG9a7v95SYfkJ6rukB8KwgNWsMYTaQczg%2F25i%2FaAuy4p4tjCvpFm3inl8KcxPYLL2UJ%2BsOHX0Wsw%2FYShTVXOUu2f8aWsAMm6uzCvlRHNbpFg89Q5Kcti9n8G%2F5AV8hV46mSagMPDhuL8GOqUBR%2FmRs8AuqeDUzeMQPXh5A2%2Ffb7Go4MMl%2Fju8JGE033XvVwtWeX8Sh9jfgG3gpc7AdwGSjHAcuE34uSqATUTTDCdxoMeWPSFK22YpSc0wqfE6yqN40FqGc6ekvadCUI8uny9Chvh1CuoSg8ce6Gbe53MqxRwJ958IhP%2FqEMUeBmiRUGCcXS7I%2BL6mJ2BFSPcEKA6sVOfg0LMNg1%2F1IhOu4Mo1sCVM&X-Amz-Signature=4f2a9da6f1570e7bed13a9938611125200722f139907c7520003111ebfa8fc6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
