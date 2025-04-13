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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7NGYUW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCx0yWUAZunZe82Er4lYmgE%2B44TLw2SutLZaXf3713KGwIhAOuJfYu2WRhRGSrSfcRyq4HxfhhUYn2BFFxCZiR3B8DgKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPuz3dilXTlVLIP8Yq3AMQkwowQJ7gi%2BsUTySpnRBrNbbtiGDFD6f7AMaxWIXjJ2rXaa%2BUAXqFFq%2FHe%2FW8PLdaiRZh5ztqZ2yEWPhGjR1kbLi0SU7jhY%2BU8vujuIPmHlwTxOqzZ3mEIEWyyMQIDjnVFDmxopjlL2Hg3y9p%2BwwB5zw%2FlFA7SRXC0anVhripjf1Jq9eWUT27PaLFZykeNLzqjDs2w1K5%2Fj%2F1J15maGjtpd4XpRdusj9Q0vxf6RL1iFgN%2BzpuKk7jYOa6MsaDf%2BNKYsTuIS4R1QOjNQeb3aNMz4GV9svRq%2BWWBe%2FxHObEYgsiBMg73Z3dn%2BpUpVEioZHxpkhIEXRgZM4F9fcEcZOYuCBqKIP%2FZlDvDmpigLkcDn1CCt7Mr7zjVhFqFN6x1Zc2GcaZcJF8wYp2KJ0yP7UfuezeX9ZpT5C8NKKBrQ6bpNOHL7PbhR%2FmEDBAHqpWGXrRSLIWO2s9Lg93flQ%2FWFkrXVjlUuznHjV6vK5NpBETpUcNMb5DKVMv1NgFiamqyHre99SFt97BI9DDnj6LRTPFK4e%2Bqql%2BfzAUSi5Zayeo0El98s743pcaZyih48nOxQQK8zoJKvlVS66q%2FluhOi9N8ygHlS954%2FG8aaHX9QuIEE5TlcY2qvKFHhWfnjCJju2%2FBjqkAQraMmVdjqtyc5M755lvzJJASF58NQeLptVytMG50Okvs3XfWJfldVDNz6Lb7Op4JKrK9S%2BIGZJl%2FJLhAHXQPaFsymM3NqDEcpYbPh7HfzJUXOmEA%2FHxtFujUB8c1afKINJ5LSXTOqSWE6Nc1k3i%2FSxiyS%2F7HrgjQ3zgGSy1rSy4%2BixZkZn8OwwZbHj%2FCJBYKV4n9HyYlMtbqTfpNbCHvhRsCWF5&X-Amz-Signature=1707256825ae092822e4e8e8bad183edc0776d59224170e007f628614689b335&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
