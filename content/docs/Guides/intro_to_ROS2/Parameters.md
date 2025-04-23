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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZBZHLD7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCSnLLTeRME%2BWbDEoPmATp8xYzCAxYWDjtze1rQSNPuNQIgEicgj8lDDxCiQ0%2BSGvxk6VyMEOB4tXaj6IIOG12hujgqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLE1RhPseto%2F%2Bi%2B%2FECrcA%2B908sERw%2BeEdH15O4GPgBKu7jGHBFNtfDxwLuBpHJmfUJoMjX81CD0WvL4ujJb23q27fL7Ni972ToCMJLKexvQdu4PlqXyfgsbVaTgn%2F3J9kcYzRP1IzDcbWzmJ64Ji3awnM6kv6A0lus0kc83xjqxoL4vh7hdbCqNtt%2BHDESJuj1BrtpjfLBpi23iIZV7D%2Fqj0k01kyGsawhya%2B90qU5HanNimsvdQJrXPqpaHJho03Qsa5PBfJk5UDdT4xqx%2BFoFgPB4euB%2BGK%2BGWC4X2z%2FqJDu1C99AL%2B5RLGunIoc0YjaXfValu7VlHDr0Pfl%2FfHYcNUBywYak96gsrezIVkm1iqmeH57dy%2FyZP8rFm7ajtRm8AFl33udl5%2FXs%2FBGb3SfafEBxG38SgkhEyGaDFsCiaOvASnPxxz5JFTKHEFsLYfK0weVjOMyXLoCd5xniUFc6n1%2BLds1404CAzTrC2lpZdRzz%2F1mCXBz0O1eMv7GndqeXns%2F61zy3%2FpcZKxCO%2FQxOMRhbH8gNP9S4V2G1FOHZ33buSWJrpOLz%2FX%2FDNJAt2b084WNqby31k5bZCyt%2Blp2%2F0baO2dQgVqov8Q%2BlNLqSdzndXmUVuVxlKeCAp9dCfLKXB4m%2BVm1ZxX3AfMPe7o8AGOqUBuCJ%2FOcpxPkHpjQ2Ms2RJDIUaiOw%2FqHCvUx8nGG4oRKZJWyl3aaH3rjPcBvCZaYy5ka1rAcjybC71IAXTFtQdxtM%2BwNOF14ruwJohE46%2BUnJvQsL%2FQ%2B4WjVbiT%2BJUcoJdygRQAtO1RDFhmzdRjuDcNkIKhVbAfZsn0K7atYOC7ZjxicYfE2WjHRQJbf0AnISbdnvSOSJLlfrB8MZPCR4n7WeU1ae%2B&X-Amz-Signature=92b5cf33da649a6839f1eea56b1ec648fad2b429e5ee3325f55a965f42956fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
