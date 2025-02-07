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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QEI7L2A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGe730c1fPTWX%2FtU26mbFVYHJ9mUrWC2Ou4BtPCQ8d4xAiBaPiq59zKlxY7kiwUmbojzbOaZiSH8uUpdDnGafSCbayr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4Sjl%2Bk%2F%2Ba1rll9nhKtwD00eygR8UScS93xWMBX6HcUhGgzn0GPQtlXXnbB0BLS6z0dF6Q9%2FkLpaiHJetvdjeeu07RRow%2BI3L85CphHgdnzPdKg9%2FCROSdkVxERxHyVXT0fyWdBnWZ7J%2F128PeZSKm4NZ420VJFLAGuaFJNpZ7XrLXnmnbWdvt2tkJZ5mR7jP1HEu98L%2BJ%2Fa%2Fux6NjKO7fiyUasE3O9I%2FPoZYYJycZx45b1pISUOTFTleSUIDtpyudzSUkHazv4gnXXXFRAKuBUAlCzodOJ8j2OH7l36pBoMqMXv315y9J4b42Z4dRXnVmOzliekqww2c2PBUWg%2B3kW1Wuf5ipUhF9ObqWm1Lc8BcmpEYHBDCEuWy3cnWtU5sj%2BK680IqqTYmUuCJJEPeQtUADdBLIFIIlhsv0Tlbs0uU240pAgkOSj1H%2BqyMKbq1dAZYHq9DmkKC9oOq9DOQrZJ4QdtqVhkIT2g4iWWAbViTOfO%2B5PV1xlM7u1HbcBBEFyC96TOT0RuDqwVsmwMt47gxOa8de8hZmFgHX5escCTtqJH0xV3VHD65MscxNbTVPlFaz9xNkQ8hlKwwD%2BPxLY1%2BFpOtOJz8qPi40OcdfkEivddBKy83kdaZY79xWeZppFzrKbeOhJZksCgwg%2FyWvQY6pgH%2BVgecvTchsGc%2FAiTR2pJoafnr9kzaiNlZ%2FFJJ5Mg%2BdGoA4tRnE%2FUlpqAIrEUCGrQ1QruUYw37M2yRaOf%2FjESXw6LCRg7p0uDnP9pzTZGyIppptfM9k6KxzmdlhdkZG0%2Fav%2FLQdy5TIx355iBNHnyRsLY1dtUx6GKzK7%2FH2zR0XN%2Bd%2BJajFe2UJY9W8QZPocJlnZxlSW9nrb3QbeF9NG%2FZeemKwdNQ&X-Amz-Signature=8b5f4b5530843597c896b901aa293ac29ea71a8cd13bf528ba41aaffe2bf4392&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
