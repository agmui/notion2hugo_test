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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS54W6UL%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDXG9RmqijJ5QCIl8e51qcyru9WKHmK4PV0kjZnde%2BZHAiAudTiF1RnZW6GnwPgKPLvBpyhijwGnb3TMBP9Tvq875Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMhydX8CW3yQ3b3KRuKtwDnQQG%2FB5vozWYZ2Yi9mRkU25vn4LBvNEoY7uiFjIdNGibkw%2BmTKt%2Bm9GGzSosKun0XoFSf52dvOwNWD7gkwmwXPD85Zha0v4hb0pDtVTX4vBjvxujAbYIGcP5%2BVeeb%2FO%2FXTLH%2B4i0JgiRCGKzG21SFmz33G7rij0aArwBtlFM6fNjurzNvKPJQ00jAdOijSACEzlYjEAbvnqAZxJi7yuaLSZTSF605gRjuMUibHVjI7Hww9zFXK5A9YGr9sZQRzVfP%2BEGQ3LizVXy%2BTkuf51%2FMaS8iNZtPum1COhA314VXcggJJ9o48UgnnoEaKNthed%2B5u0DSg0adzvlS23FpKeCUFKernr9nNHps2jO%2FprmTs3Qv10gB%2FSW7dZ6FTlnvQFcufSzrlEaGdAueEtfwtFC45qbX%2FNjo7JdkBf755jKHpUF6hWmiBsmLyKkLtRaC4Q0OV03aAa1hK2DqPK%2BaA%2FxAdU%2FaRWojgCZ5k98Wy4mey7d6d8T%2FnI7wiUJL1qLvQ0P%2BfHlSGKDYX34fn6zW%2F4qQstTnS%2B2DcPbug%2BNZk6ZxQZg7bZGUw1pS2UDoDbzJy%2BDu5I1FC802NAcserzfBdHpEXrnRXfjPKbDFbe67qr9CafAqie%2Bh%2FOGaVFtYswuOyUwQY6pgF1PGlsHWTduFe7ADslK6i8Tn0f3OMQSblEuVGC0JQpPvXc5NzGuh6jK7sVYmb8TCKOxZaeYAEkofZJg%2BIKilOt5EoGf7KDCTQTtBH7zOSI9VWQ%2FQAMrl8yS8TR3%2BDuy%2FyQeZXhUO1nuMAS84y4VIO7a8SHc8iwKLR6YPZxpl5aeRx%2FT2SacKo5elMEcnWXvxRFNWCal81ZDXjdSc7q%2BGs2xEa0RqTo&X-Amz-Signature=f1ab9de691a2a02af155a0cf5124bb54c07f4f18e725e93470ee21e18bd938d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
