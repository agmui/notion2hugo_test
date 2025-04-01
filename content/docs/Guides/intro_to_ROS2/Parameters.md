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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUBN7SVM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIC1CHh%2FG2F0UzizHhKaFYQv5Soo9uQJ5YN6rOr2QI7drAiEA%2FI5dVT22wmv2fbArNUs32dB%2FHJPbLOQi6GlzmbRj1HEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAVi31TRL7hcR0bBCrcA%2BegTz5kSn2Ji%2FdA4I6AhWDHm8OmWFBgMFJSJBgpBZcojYYOOlCJeWlN3WNmG9XlTdu%2Bngbt6fEH6aJNN4n94Fx3SX0qcb%2FWsI%2Bs1CUGNTUGBFgx8XtF7W8PCc3KP%2BiOBt8IktRCoV4%2Bz4Xxb93WpsI0RbRL%2FS153lVphYcZ6HFB5c54vgtSiZvg%2F9TsbfNx2Rl47r5PqKBAKO4IQ0rupe1tIKASPg3W%2BaXusAgk72SU3s5zL%2BgbV66gjK%2Bes0pqD%2FaK0MPdqU9faqWH1QYp1wuguAqJQ2b48C6ijxNSOrvc3wxKRmvUWob3CoKQwvn%2B1oXkb2eJjS%2B4ReuY94zirihJzpV49iOavp%2Be0H%2FdTW8%2F911dcD1DSwmWlCwPyEFupvcefT4AJVWBVWh96dIkcoRyxiZlDcY4qDccMN5XIZKInOd9KhLk663sES6KcpKMDNG8y2hFAHcSiPyIOeOuMAOPZ4P3cWnK4BeiKOMVpAKEqOSBoI4RnBUoxZlDp69qILxhBcBY%2FB%2FLmsm5uMIwuiyoWBPcO%2BAguX4Q6Lvf1yaapGB9gWgCGSndamChbGRye7G9hfcTcJzp63vBSdiGRoWyNZDKNfIuI4T3kMxLK%2FFPbtfx8u%2FrY1Fl8G2nMJ7Rr78GOqUBBlPqaIn2AVGkd4zxZDndil%2B2R4uWOlCppxjYrJ%2F%2BYR3mMN%2B8JOMq%2FM1JxSSzfLQ%2B7gHzbqnXOHh%2B2Cpz5%2FDSuxZPWbZBlkYAkbrZ%2BVb2y8K44lbH9AuCEfE%2FhT6OKlapOkOW4ed0%2BKTFHaIv2KlvyZNpv3R3LpKuT6yzqZaCYQlw13qEJ4rPydPJCUGrmATisfOGBzkoO75%2FDSs2LHMjgudmRO%2Fj&X-Amz-Signature=edb7bba1a8a51360b987ab82cd47655b195f98adee726267785bb74040790711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
