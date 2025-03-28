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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5A5GI3M%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP0zDjGwRbZpXe68Wr7aEdesSRrYX66W1lwcQTxDkybQIhAOBWpnHc4zH%2FrEkuuvrhyJaSnh6vi32RyuBGbGTsmpQdKv8DCFwQABoMNjM3NDIzMTgzODA1IgxkPvfGPpF0loNWN2oq3AM9fkeciev4ddaUOaYfDtt%2FGedLm4LA5hc4uShun2KxueKegYdSG293V%2F%2FKEF3okqBaJ5OyTaa3QLVxdCWQI18Fl3NZDE5dd6qSWJ6lfitzlcKEQqmw8KPCDxX%2FGN6e8EJeTIpZ99QRLxH0buuY6wWpTfeDtFpU5LpKFlYspxP9%2BeTDc9veLLJWMRdJBtrBe0XLm%2FF1HjSPwtVJHU1rTLlZ7dOwgtZLODgn88OwMxQtNNXvROHUXuN1K6yG1Rokyib0uWlN6tUxxOopDNWqEpw0xpfzNhGTpuMS6LxO9tnlJJKxEe1zcXhCJBAPoWNT7q9ymFFpu6mN4wC2VU5R%2Bg1ixUYNiLdvSH%2FnpDAVlrLzk%2B7xdqtJLkgktNNxFhkJf2gUE%2B%2BIFSRH%2BBicMjrOR20w5Un1zv3pVsVUkD1UB6VHYUEZGnSMk2wPs1V3LVCr9tPgJzMNtwdF4%2Fk0empDi0DYKyJTrqKWja6yXgEoWjF8xUdhoYQhzGh5emUONf6dnmvYJylY45%2F%2B58KF7dhrMxp2w5tl5FRymiuEv7M1iIP3VPfxnfc%2B5xqKgdE3j%2B17Ai%2FOW1AyeF%2B63ZTzC6J3TbCdEN0D%2B3%2FkPu20Vz0DBV%2BBY2ZJUhOeqFGKhgomATD7%2BJm%2FBjqkAQSKWI6QWYvxxnlS3FfHMh7qI9bK4AcNXlMVoY9Y4EarwEct75hDYufEkdSB2GAxIis3Zw1euKb3lZvnTwTPqecIZQnkoBgmAxgHeyT3jQ9ETtLY8Q3y5YOboXuZGxdsjChIJylH1HlWJbX4WNw60rzylzeBWr0kPqIBjGTgvRnELNdp08Yigqd48YOhpfVK5XsZFHdE2aEQCoI1mCM9mLORyn8s&X-Amz-Signature=343c1bf989c46b9761d6dbce216953b0fb6822c771a4b702e4771060eef263db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
