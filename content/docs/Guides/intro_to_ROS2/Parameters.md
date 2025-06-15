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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KJXXJKC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICYIgPxhPUdKx%2FLkaYIaM1wZha3vzmF7DlXzE5SAb0NsAiAwaRkoWPq37tjJyT7A6my3ZUlDPKDvq1wBAVhEKmX4mir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMt%2Be8DB5%2FqAJfZfIRKtwDmyoyeml%2FDohhREEAnZbnV2ETt5eKMZ76xVfyDUYmeK4LPaRFkYOS0FzH1w6jnkHMP13sJ3HkIhthcw5FWiZXpOJumtdoutH2erieMSnlSQuzEcoukCL82LQTBgWIAzEPXASGJBlUqR1z3MbF%2FrknB%2BTDNwJcWOfBgDfi%2F1fD2W%2BvoyDJK8cL4P6EaPDi8xSOVHGMIE2577JxeQvvKDPn1rgQ30KLjmY4u8D6K%2B1O9Z1R8ZJ06zlAn093iaOOXSZA9yFVD11KVI1xH7Fk7gRYT5YYuKICGLt2GkA8O5XR4yH2ffH0IMJRH2Bp09fFlv%2BlAU9OsEkxgqXZsfoxPJshzeToaxXo%2F%2ByvKFtLpsfzRhbxDJ6MFx%2ByjZtAe2Xk48GHTgnQlzBJwi6laNMEcpxZHPEMefKgXn1WFzw7dlE8CVzLjprv1Y%2BOsBBbPlSUR603784YZ76ePFWAMTJYEfqmlfKz0igqAIj9JEXOEojNW8MK3DHed3WLjfQDzNDP9K0yB0Fwh3LDtTCXedMn53xIWFXKP%2BWlKlX8hiAk3pZvQEVV3GrNtijtq4VicdMXfQ%2F7%2FrcP9ojK9Ceiao4LWrDRv46%2Fs8hjIOkzcO9X0C1uvtt5PXRVQJ5GyEMHUPcw1s68wgY6pgHMR6QWt%2FpNkeK7J8P66ynVUJI96RK3lJ4HGGenggYJaHCJqordZDYZ%2B4J16cF%2B9IIrJ76CTjmwWAtCJ4z17LfPKPF0zUue%2BX%2F8J5hBftTkmRtRkALerkfEwd%2BUnk8SBAWTc54Stc%2FGngx4a5Wq2mgt5pXbQcdAsVE%2B6eZ6SmuUxBgxWySAgsmAX2og0BtOgpHyyDAj7vfp%2BmWLBqfHPyKO9kf%2Fh18U&X-Amz-Signature=12ba363c3438150e6fab4242a0e1152df60901ba4849e8d90ca91368bce09a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
