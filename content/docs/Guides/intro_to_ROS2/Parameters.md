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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6IBUXL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCeeRieDIZ%2BXsQe12a8OsQQSKmTNE4kyLxxTM%2F2x4MSAIgCSKyrvymSKl%2Fq34gQnGevI%2FVdRh009o%2FSaNLtoUovJkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDK9957lo3buCdOgclircAx3W5BxYekZ87rKIrD3mMOf9sIGZUqD7tc2oxQtkazDH0NWTV%2B2iV8XmArq6GRKx3aO4knFOO%2F1n5djh3bwLdH3l5EG8odR7o7qhTbHThDIFpRjlY4Rz3%2FV4%2B86jWgocsbHhZ81f3bygKbYCDUUMkOMy6Gy5fEW8Yk9EXYxnTFkbTayWxNTk5RkqC5KzsqQAHF%2FeptxVMru149ait2GFCzpnthUbfAhR44lwe0E2ID1mV%2BfLqnyApNAbE7jZiP7NRzb3BBI6yKj43ZXkcPvGN7ymC%2BBUs%2B6dbye9tdDNC5w46MJKyX3vsYZg9mhunWvD2f%2BgJTPrKxKYW3xWJDO0nAAHPNGGN9xw4ELfUF3YwgjOYwtJRDE17V44x2NGkMf7RbNwv1TAGnQqX57dIYYkXYTgBKQFsK63shUgkxB8zcl9ZJMfvbVZYMonF8QaPRcpt3LdNusOmDUxhD0oiPhLiggM7xti3pJ8vrfeP34li7dF%2BlKiMus6X4%2Bn%2FcFgA2gwgg2X6HxAGSZcuFcgMisO0LdnSSX2JkZCOdDJ1mfzUdxuG57lfjOYrUnHhvBiKS%2BxtAprI6vtXJGBlQ%2B%2B5J2zrPsErgyGIJf94YlMxdKpxZiGnyDCY5De7%2F7gV%2FsTMNzvtsQGOqUBqAWiHtcHWydukTTx%2FS7hDqKSlSKFE1CptcYiwsoCW%2F65gAfX06%2FHjgLYAjE6NB0Y3XpUywSoB1LRI22inG4vLszC%2Fv52gfeEY7YMNobnZt%2Ftj52nwlSDHoeXRMbwV7OpBVRuB8GYkQIZUs5ONnBZxvA4PinEMAW9jIodI7gVvpN7YuwP85HV6GXwBahW9wXUH7KvDvy9gm8NP0eHvD60NdZB8dok&X-Amz-Signature=e79ab8c181157156f04b5ae43668b19b90dc58265e85ca86ace7c0a826003ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
