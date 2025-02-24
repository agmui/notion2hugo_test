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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25QV7NR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeZbKYTg%2FISapgdX0c0aKSHgOwjkCZ40%2FkB3pp%2B9%2BfmAiBI9uw6NH43FYRVAC%2BU%2BP4VqWeicWSTxC0ssacBBxFk3ir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMc0npN2hBQCkXZ22IKtwDQPgudaU%2BC7gtt0NHlOJ9NbPBBtOnsLe2hDjMH8FwS8pLvc4H5a27%2B6qtUKY1lbUZX14v3zlqjOn%2BAPuvknmboTI9harlQ8gcsNGLrSYIwLSyHiFAj4vUIYUlVB5LB7%2Fw9fjO2CU4Tnxc4VYlYDO93GyPNGL7pcWadWnXg3pBoRhkatMy3NT00ZiKLYAof0qRhfaKBo%2BSuiFT6JuwYamHtJf%2BwUCXsFAMmBs%2BvSXZdetpkYNBDXSAF3wFtfvI2MmMVfkD5ks7upXHmk%2FU%2FbR8FvVpeaMWKtSuiB6TBzhAf9cuREzoyXbTDzheE%2BCbu1KpQybgmAroNb1xV0Jbp%2BHJZ2svhXN1tDXfsBnXmjq8J4h%2FuarIgZRs%2Fe034xN8o%2BVDSqLl6pdk4xgMCWiAGqaN%2Fmj1gXk1VA2djF5sre9SaTQ5pmf6tnFl%2BCymAwLIUlTpDvnU%2FWk2Hren6P2RYzHrnR6aerNKp5iWWC7iU%2ByS0pyjGTKxYaOsXQDbmigLpuO0TM%2BUV%2Bdm4Tr9BWvrLT7d0nJkG3HCejygdlTOypr3HbfUF1qg3KTq5JqQnSnP3g6ZtnruKdbmcrNFosVFIrB%2BbzUPCMdNScL%2BjAoJxE%2Bwv9H2z0bWTrev8E%2F5ACownOLvvQY6pgFj6Gpvj%2Fl37zRvdPJVBhsfeAxKl%2B7qMzUHhhj6pennaaTOunS2sLwhaMEg2JJs33RwLgVldk3h%2Bv6Jg67tjbpgvOBMAQJVjoNAzzZw3HQHUb70Q651ExJyZNWgnEd8xC3CS7PlzR%2Fto2vLCJhVLpGlrM22Nw5PpHrn19jmcPoY5toqUk8bpfa%2B7f%2BhdKB%2FmbCyo%2BdE6drLrwBSk0IqH7L9%2Bpuca7cr&X-Amz-Signature=b39c6f912208fd667dc5c8efe4a3e137f6e64555ff1ed9a36cf38a8cf115a538&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
