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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3PJEEQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGOajwNyWxCilMl2winxPHjSyDsvsd2a1r8T1pTxUUYMAiEA4aBkkS2FlRlpMUooJ39h6M2Ecy%2BmEV2GaSfIgpjHtREq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDF%2FSLJLTylxr8IRbuircA7Hc0u3xe0M89am90M5UZen%2FqyP66oPy%2FT50m12PX6ICPcGwpNHeenv162CdHcJIUw7%2FH4VzjSaaEhmX17XyIxayzZ1wnjH2e8hyvJbeXIvwypLApzrkjXOZC977YsWw5iqW0FoFw%2BhCRCCLhGbbjI96MPfcurs1a1JWb%2BD2w1kKyub1tslq08fogLLLDYCJY%2FQ65Q3b0uXtowY51kGW78crSf%2BXIIXWgLyOwC%2Bn3895sfBw%2BYV6mADwxxjOeh75xG0CiU6qEuxZov4VT3q%2F4GbJ6I7iBHdOOGzEWHfCDEAPsjc5kBGph%2FvmeCfyL5AxY6EdaguMxKx8YkUw5yTY4mJk8nSOks4lkRoNJSPRz2RiAswP7P4XFHPeZmlo%2FXypN37HF7JwZkw5ue%2F4%2F9cUmTlEff7CwAtia%2FQ0Vy8lXrsU5%2FDxL5CBUx%2B9uzsWp9cdlu%2FhR9x9nVYW5xYJVPKP%2F%2BHdo5a9Hfc5MJD2ZnCn%2FmGTLUf7uzeDGWqztoP4MDtNXH4y5hcB0LbHw%2B%2BNYaOZSeKdctLh%2FWIbLZTJYbV21xwQmwpb9GfrSsVxersBGjqS8cuxgpg%2BLLcB2s3KP%2BHHMn7JPzXTspSSutnSjcHu1%2F2XSIy7XJDpw%2Bdc1wqqMOeD2cMGOqUBDg9%2FR8hHzfTV1%2Buko5PxOuomYpIg3dEJxdk84bNdqjVEa7PLWvtnkeMYwMomhLXgx5qfskV21ginIXj67%2FQx9CHcKe1dNtz7Pn5sjoIH%2BVh1QHMx%2BjYU3M4eEDmuEtEERuSmtLupIw4RUGV9ZCNX1Dt8Vbb15gskcux0zzs%2B8LASTghJatOx%2Be4lScTF7fM7kdeTgmwBV7Ae7h%2FLF7TtzZG1Nx6g&X-Amz-Signature=b26307054ba7c89e777a662280f66ac6bd1715e1108e8d350110d23eb721ccba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
