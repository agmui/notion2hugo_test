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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X3TYQ6C%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb2JxblTY%2BOrGfIcyjcLkxjlNodtGfkWze%2Bgifkj%2FbyAIhAKUKuW2tb8%2FOQie%2Br2lSD4l0Zpgs2RA9MRBDPhzW4G%2BvKv8DCBAQABoMNjM3NDIzMTgzODA1Igyx5nrKE7TOFN%2BY%2FVIq3AMfHL%2FgkiPWCWb6mpIUNktWM665sGZZFB3gEL9BpuYPDZX8CDU8oodmIkBYMHMzKferh7oYNlNR%2Bn799bDVOe3Ml8CqiRTj4aE%2FU7RTgPn0q8ofPltrgCIQoWYmO8YvSZTPiRbEJ6UvCbadMDXrseSDAPihDfPCmhKHjRNpGJxsUxC0O6tyIOObRdwt5SJ%2BIW5Wps%2F%2BNvMQA3DjpwsY8%2BPC8Zx%2FvmJ5bN86wEVUpFECxRwOlqzNX95cxqfu2e%2B1ztC%2BbtuT43kpoSSfCrLi%2F0fy621MfoJkJQJPS8TsjuoArWxtkdZD9Pws5qBOVQOoSMnyDT4ZWXwp87APMqaEYEuQp6i0fgplznTksjoJM%2F3x3V6u0j7ceAYP3SAPmI1hdt0hbQvZnj8P3Ib8SgaXtDtFffQF4lp6F3MZ7lJO%2FQFgD0W7zzsJ%2F2VJX1szBrC41eKju%2FKt2g276PRZ9c9j7%2F1JG0mJMrUpG5UdaVaxqVaqruGhvX1c52uJ9Rw6EXI3DqD%2FRcIDRfae5n%2BUg2%2FkGFoA0QCYEGZF97Tju7l2%2BngZbFzSgOwZ6xXmdblwhAlYNfBS5QU4TWC7KwaJnCZW1JuUWH0CxLd2t14zaOD4NGrPDWLX%2F8Hin07fnOjZ9jCSpc3DBjqkASkM3neZXN2YmhnhYnbLGQIa1bupCRPJdrsm3XJUZ0WVII%2Babui5o0cxYsANCzgI7yTnUzh1HDCMaGup6pSm5j9yJNB%2B93GWvcF9%2BMxIP%2F6Sc2hlo7N8b4RJZm8QtlcpJLIg4MyI7%2BlU%2BGigdp7L53KrgBDyGyV55lyoWnkWAKnSMukl3qCdHPr26OfDFDJw0IbIxWnXVAeHaMfG5VR8USbOUkWW&X-Amz-Signature=ae748953029acc51269719e76563c7604b7757b1e2d1ea2da6727da077035cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
