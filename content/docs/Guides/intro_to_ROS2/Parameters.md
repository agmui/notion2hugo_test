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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4LYW3W%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUErqu4qcHRdkrhZ8spmYrPFEoZaJot626ebtle9rI4wIhAMUthcUx722wf2kNrACPVezRv%2F9IhK8tMtRKHI1BPjwHKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuyqvEU9oP7ImqPgUq3APxBvHLx1%2BmAyjz4MmvcEB%2FTCaKY1NPnVmdJWLVtsoxmBu3mC1WZAaKg%2B3nHjLZbT6jNj4Cvsjn4gsv632jd5%2BWHiqotXq74jG6ctqtL4h8TRlw48AimdhULIuNsLTYBtyvIQd1KYa7PGl34YXAD70%2BA1Wqupj%2BCaUMN2uGCfEmrttDIDsr70VH8eeuSiwkXUhVy1gixudQKOGR8T1Ci%2BLzbG1SCUoCz%2FsR4BYW9f0XIXTcnIwgxQhVPcdHKr0LuIkJHbjwveTQAyqrvJXKdESd%2FFRjZTlt2gjdUuJQgIolopwsUMa8Vo70cuCo1vqvYumevoskfuyrLeq%2F8sr0keWZhemHCRI%2FbB4u5GGi%2FlBD3R5mnCiS%2FPDvnzRvwhawWr%2Fg8%2BhNrw2V6jdrZbhlQBDqOwkJKRWEAPzEgWSI8JYWzW4%2BbW0QjbdjgT3oh5FvFLWZINdzxHdIF2kl0FkjhPqG9mEC6e%2B6oT9vBnAlal5EQQ7VEDMiVnMO6QPa%2FuW7FhivfQJZvYF5157tutRr4Y1Yejgqp8JGonlpvnvjVVIenrhUDvVQ1781Vz1T6XbWi4jSOZmeTFaYPqCJ%2FfC%2FxjrX18qwWyCSCajLutEb16oeUzfn%2FQctkv5erzh6ODCQ5P68BjqkATAk1ujG3YtSLBMsI1Dvj2pysg0tnr%2B6dNg7mb6Jq%2FmSj%2BCY58mK9mhJifTH%2BFY7UuPDpqIu%2FHPHjHAsm2AXj85xAooLffLPHycrlcVMYsLGe3IrcSYYz0o2ORiAdYyfXMOQgj8IlPFQhI2NWhuFihblJ6g7kLYMDBLGFJPKE7yNt6EpUa%2FWDDAzvs6PmUixhyKbLfll9pJQgk1GLTjKHH3dSWGb&X-Amz-Signature=67c29426196cd32a514c6a677109a85478b07fe060ececbc188d2b3804115049&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
