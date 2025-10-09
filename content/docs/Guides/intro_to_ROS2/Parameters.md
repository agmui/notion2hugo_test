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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKHDNVK%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCqZOio5h14v5C3OvustIoTxtJwg2J3SMkCrQacxPk8kwIhAPOKAPLY0jhfIbNjQslm0K0fcAG6Knwu34SZia221stzKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyisl6jaaF%2FdN9KAXYq3ANuzl5grt7NbUHOUtIfz1PPgkkNTzamK3LsihQ3kQ572A52Zx%2F9LidtTQm4tUJVX8BWXQauckkYxK8AD9D56j%2FRt6unjLVg5U97MUfPvbFbWj7ka1u3oTFZfcqlsnL2LC5tDB4V699KTAp0X0SQXF5qgE6v4rTDjCrf4yT%2B%2BjFyNs5%2FNZ9%2BE7c4MafwkXxPUgmcOwfOmf8cGTh%2FhnHaDUI2OeoVK4tS9MkUay6UAuWhE17iDg3E25nyztmTtOY19dfuvcOM5Q27TC7V7PioX0Kn2ZSzQlxoMyCe4AVX%2FtOX1EuONhkqQAdrK8vZj1hmPxYbx6Lft3U6LMRIKHHr3s6%2FRviktglvj9O4Z%2FyH36PbKQWIZuCidfF5v9Q9zytaZCZ0gG4o2e2H36ivpBKkh36PJ9XbfFBAWSuLhxSLNv9DNRy81To93s4YtJhIOOSBREPjE4psql%2Fu7E0N7bEPPTu6AMr0yL5yQq6wn7hoS3THJhP%2BWINOFzYGGVzK9T6My9liRfzkTTszwf6Z5XRwd0JKNnT0VHlgA2N9Jjrwg%2FMCXo%2FLsFiQ1RatP0xWgMli6ybcCHRLw8giJNNrds6RRKowXuUZG3nywnwEuOVDNmz9uVFihVHObXHIgdreuTCF%2BpvHBjqkAbbGJipcpptUH4d2M6VpV1TOPe7DAdjcDmmmrhOKx9K3owLNOFyzz6MbZf1cWkh5KsQ1aeUZrfKZKGUfGICdIHby8Q%2Fyu2la8CXhWvHU5r0F4wgbP6LvkPD3v0ahBasw%2FujMMIW3GuxjNV3CTGE%2BKvoFB0sxiaZvHJs2jDIuVZB3N21KaJ13a%2FQqmDDOiu6%2BepHCiTFUB2eMqh6qxiIGB%2FhhQOi1&X-Amz-Signature=6b0b1bba8bf98aa64f8e3f4053e91b703464d5594d91b3ef6a87e8cd09a0218b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
