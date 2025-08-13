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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TTUL4C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2l3KuIzJPCxLGHIavotQekvOgf4e0HWg9LZEyAyUPrAiEAhqqye1OKVQZ7F6lNCrSta%2Fsx1ez%2B9A9Xh9bUEXraPesq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIJHEv%2Fnj1AILalImyrcA2kljNkABsgvxhTt0sajNLIqMVCmikWDmEGqPTsywHSAome4gBSkxyhpU6xJMCbSoSEstu4icPqtM5lN%2BsqxBztnQYMhEsDoMSqVFa9ud8Vu%2FeNyWUcr18sc8Y%2FstoEZAJxa9VkNnvYezzWfWV0JT0oo8spg1SOhf7a9GHFWLFFvrOY8CO5xkWWDB1DMS%2Bsc7W6UkmIp7YC57rFefZPcjYIaUfqn2NG34cihhUq3kbGzPIDVjcJ0645ujiXhtGc2PXLgojoVORhklF7CLP7jWBdhIoG7HpfBbvEdKVD8ZyBIRX12TJgSMMufdF6oi46JJLPRpHCR4UGEqk0UqAKRdv1i8AU0jV7JA5adhUPhZ1qHh2aGKoRT%2FQ91px%2Flxdz0cKZU0ta8wdxaEq6BEDWbSxFmGtGVOaHeprpSGXDbo5jrBqMv3xfAuum3PUbELkeVTKVJOOEIfY7YBjQXCAOA3oYNQab6w9cc%2BpQuFvT5bqCEyWhoUM%2FqGNiVnijM71izUDSTC0x1QkK0e2iyiX4QtPNkW9H9uWRfiGJrLo71TWJVOc7wACVOsj%2Fc%2Fdejd3jngYa4mSunp88cMijpT2n%2FXWWgxw%2FhYwkK5az838SCePrkhucrN2KNxuvsADqjMOaG8MQGOqUBXCgzgVg9hqnuJEHNn%2BLiZBHdnMDYsJ9N0Y7yVsWKeqcodsTxSTII%2BlkiIl1fzd3zeaUO5V29up0%2FFaV5cd6lPKxrbZwEWYGKRw5IiW7cHJMABcshknQJrEL81ommO1GEaKMeqO6ug5c0yfNQkfgmae3VPdSCiniKVK1hKtf%2B2rUT%2Fy23R%2F2sa%2FHtzi27IPVIAiOMeZUL0X6pguTYm79OArIzk%2BQg&X-Amz-Signature=140b7fd664a03f03382a0d826264ff1e194415dba0c3e9187a5fdfd3bb9a94e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
