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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHBSFRH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAHG5kH5N2MQUkoM08nXj3q0fyXV53O3Iky%2Fex%2FugNfYAiEA0cdJD0Cj5F5SctcZ6BMQe56sUOPEysan8DclfVmxIxAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO4kPRpmm1trfBknCrcA5uFap8TtUjCPULrpdjnnDZJPuFqJyrxhLOE5RwNxph7uKGoXg6N1tJwoD0YSaf%2FfJqXlVkjqA%2F5pUnqgrmSPZpWAnS7YQqRoc2GcMXISQofznAtSLlAh86C2nxqo1HPPD6fifbPD%2FM2mvBQBr%2FPRP3%2BWQpFLUhxQuTZC%2FiTx77L2PPsHXbbtjzHmyNBq87Slu%2Bxzf65tdMVsYoi0mM8ylMyQksapyFBTx5ZQ%2FwSG9bDaQJ4ZPbc7oUV7TS%2F1EDMLoSNjE1am78y5f4x4vn9gwqsCevKG1vHtYmRGZ2OFNzw5kYAuREtRONvROA8ok7OJtpj8V81i7APMi89y5ysIH2%2F%2BbDVdFOEQsb0nngdGAS0ro4ngCCxa2%2BrjkUmry1PfGNKU5LbeNAGvZz2kXrfNxCDcE7cGzSPDBgag3hm0YmNgzoWPiskEG%2FS46po6npCIiVKP2vYTvrqxUydPPg4nAJetkB3kNT0gm2sXQeGYX8sb8Yyj0QYetZouPiAIIz9dENHpOj69LTasmIiy6Z5jNwFP%2FlkDnROfSH%2FJ4omjX5kj%2BScymfi3Nxmdk8pdJvczrJQY1o%2BDmcxsOaMShjRiTYafIjAurkvDX6XJJCmEsp2PXgGI%2FHHTkDE5GePMJWw58MGOqUBMXqIgtkGReak33JTYt%2B0vCHCD%2FiNoJV8r53Aej6V4HIy2vnXmNHHPw%2F6Dr5dUHFE7rKvwH5AbQMYfZH4Qg7JSpRf%2FtJHOvUBIQdnKr7ocVg5iEHOKQvYVheAUzReoRxyZKeNd7MincL18QdEoK%2BqE%2Be8Mr9b6GOVBU7160pdMCoB7sXsiDTkgwkxcgNImT8YWftQ7FBGD9ENws4p%2F6sYZyIMCzkB&X-Amz-Signature=62b9c6bba9ab2a38cb4192cb8a9ff281e799c53783a7e916e3f8270f5cae3bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
