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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWW4O2L%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhkQBIkPZPa%2FNQhIYJ88b%2BZzb%2Fb1hO2jMi1DN3mb2QsAiEA2cHe0xoevaBNVaQF8xKK%2ByQwbJ%2FgHW6RVQCL32ecmqAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNrcGusry2C2H8%2BoSrcA%2BMhfUvNC48LKEkyAIzbUtW589hkdMj%2Flx0N54O5uBBNcWuRUaWU5Mk29goUSNaqTCXtREW65OI7C7AUtLvzl9iqx2oMmDOvfGoVTinxTNJ7D%2BQhJO252zV1ReUYLkDVtW%2BEp1g9gLPNTdujcAgE5Oaxz%2FzsbZVLzjJljoSPQ2ijCP4wYulNAYWARGdlRIYZ%2B4gjvWq%2FV22KrBq7vR5EB4kHZC3q2%2BJZTV6AS%2BZKZ%2FR1t%2B6TdQOs3ll1Wn1KKaEnDYZ3Iv4HgpI%2FlzOSZN2MYMnyHsbfikadoTo3ygCb5gXaOho53AFgZHsIhvzwjIJZAuTSRwAqnseL76EEmrXHPEvNIH6XIACsVGRKOvtz4Zuoi2lvWuseG9XT0zgIMAaVmvn9Y4ZzmrmnFeIFz9OppyktDPgehipomozBKxAlGSt8gnrR8l9Po4cQATZdd5Zi%2ByUzb0bj7Lv1yuvKLsbf%2FNIFKdLGhrC2eUOI8KxtAMLB0QzylZPmRt9%2B%2ByTLruD9Ja7kX5mF3mreVUcwnOYoTR7G4OecjLCdVz1U%2F%2BzLXxIJD%2FGFmPzfASmJ5m0nUXxD4JUc%2FfUl5ZprqzSEm9gfn9erF4PqWxeBOLtDnJdRzEK9vtdFf0tckhutRt4JMLPb%2FrwGOqUBeSnJ699eScjC68OFFqmQGrR6lXpS2uAYR0qh5mc%2B1%2FGSUlK7hxQ2j0apqTuhzjh8%2FEdJPPBLi4AEPr4whDofonzlXE0rnSmwjyJm1BC7Stma44jrUt3VMAFhtf8CoIUq66pvIWnrOsJjK6CC5nqT2zmw6OkrpziPny9%2FS31TMib1AzWyQhIb6PQUUs7P1x%2BP5AVGM3vAQ2tUxMl1pgbuhHJO4p%2FS&X-Amz-Signature=e41e9b23bab342d6a39912b7a4f328af18f2a7e765603d869f9cd1e149df80af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
