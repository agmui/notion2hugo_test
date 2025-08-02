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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C56ZPXQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FzlcLMIprlCoRah64MlsIXIDbtvckQAA1nsAsDKBqgIhAI0JSSBO7aZbzU81D%2BzDZTPg1HQr1ImqV8iBcQh3zNGSKv8DCBYQABoMNjM3NDIzMTgzODA1IgxgxXhYhcccLYa9qTAq3AO4y9KmN2f5nqHjWSefBKD3KlpozNuEvth3r1qdINAQfTiPQ8%2BcXPIaBUK%2B%2BL7fICGlxlhYk4DXoFMvvZkxH8wTGEFrCtBkeHdn%2BwdMpuZ0slFS0WvbAMGteob%2FMNv2VzzmXBwwcyptdgbdZb8Ofjk%2BDHW8l505yDE6oeyPfnm3giiuIZtHMZG%2Bx5Dr%2F%2F6f3sTFNIfbAnnKNBM0TA3HQpKGhnA%2FT%2Fl41CWhGPHZkv%2Bojakl2IEaTTUPljNxtD8QmFYdtN6QIH30TBo3E5GczmvoEuMc1%2FwgocZEchUpVr%2B%2BSu4PBuCSf6O7Is5RP9UebUF5r3uaJY2og76PpK97Y%2F7wd2joTFf9bPcM6lOG5Jcm9zQiykwL71g4MlPoHTakvx%2FdLERUORpxfbFtrpH5%2FIEpoVCqrp%2FgzkAzBU671HuXn5FSI5gCvUccWF5%2F3ob%2FlHVvLGJJYCytRPkEPHu3c173RLzs8ETmlUGA%2FhBxZDNH4AHsLsOcujd%2BUjeAYugjRbj3vKPaPEuNTAsIKyj187dDKCvldpcJTMj4m%2BjB7O9iDE7Ngj6%2FFosUJi3TEsBeLU3WfYe8jTbI0gXN7%2BTDAIfQf0RJTqhe%2B%2BT5eWU4SxQUQLsOo269%2BukzW%2B0rlTCwjrjEBjqkAV1PFjZJoHrpSvZHNNRdb9GiUIabDBUiER30ubJ6ug%2Bl4O%2FOBNlkAC6hvSrVSbslgPdgnwI3rBSWJNm6VYVKuYcoZ5fK%2FrH7P1ZXqs6RV%2B5AedDqRAGEtYmYsxtRk9sxsftdqHNQW%2FUI%2BWAFMHgAIXVaUlAWpD%2FME4NliBKsmFygsQrX17LYflPD75aWfDMgULBfxG5ks9mKaA51ykbUX%2BlLn7%2BW&X-Amz-Signature=4fbbdff190a1d470f7acba9e5764c29913920e4c8ceec8f591f3c8e6356efd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
