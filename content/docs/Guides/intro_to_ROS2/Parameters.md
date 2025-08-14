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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAGDBPM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2F6Gj1DqerWxvgvGIBFf0IJWuxBv7as3U4p2pZFnXBQIhAL%2FWGnKy1bTlE4RJaYT8QRUzQPh9dcy0LCyj%2BZwOUnStKv8DCEEQABoMNjM3NDIzMTgzODA1Igzm0Iz9vvXhs5GAScwq3AMnPOGRFqffsTvPvKir2zFns1PIb6pDzBrgmAkMLjHAmi1QvYKSityaTbCu0DnNwt9Wulk1awpsSjIqsHksfQMjB15%2FMpzdB3Q3oKbC5hC%2BIQmBiqySMuFJYd6RHd3%2BnBvyQ4XNjQDzfd1vPwRe%2FO3q35BcqWZKz%2FSTNO8yEE61h4p0SFJ7JLV7AE4sJZKejzvA7Pm0guitu91In4rwDnaX1N1v1r%2FOnQAYfdpc2%2BeGClTtlAcxWGHOMYmEXkslNijuPIEbfucw102JJpNenZuNvb7d%2F8fBYYhtzm%2BKvWNBBiw%2FxzvBuRmQoY26ZwzQ5tu78fricU5lkrrVRoxcIEUzYt9BwhrZcDJEASBAbUKmJRYTDOacmpT5OONkRJ4GaoFyFFIbnwjMVuPsx3JRrbFvsfpuCrYTaVJtWsTISHlsSoiIZDNjoUF%2Fd%2F3N38Zs3X3BuKclTaN6bT6S4s%2BvHo3Sy8cdQUJHG4XIOnOoXcEEQSzqKgLJBQBhxV%2B0TKWV%2FXXcTInM1XddgUXqoidQRyVznhKlCgbxk4Aet9yCbS520BDBghgCNVtXK7dNwK4SvPiOTo9HS0rszSfUs3MiAx4HOY3NKEnr1To5xND9fv39ncfLqcUai%2Fq1QO0%2FGzCPrvbEBjqkAUz44%2FN%2Fu4zO2rZemBN3Q6O5FSf0K191ceg2kJzse4xMheJCVaoCNttdGnSmjOd%2BS7Ki8XEAfohD3q%2Fu8xo7IDdDaV5t0T3KMZSK2fzOyd%2Fhn6vIItMnZonnmK1j8P8KOJDCpJmgz9F85q5o9VA083rtBqzqHDDMidMCRI3ydk57RRSH%2FLGr1dzwDPe1eAs%2FmqPgn1daYTca%2BJSmqWMf83LSlio5&X-Amz-Signature=0a1623e6e02ff53067242e12d46057fc95523e40942121c0836db58bc9049eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
