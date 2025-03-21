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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647GPMCAK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAP6QENGw4UAykSsHI%2FkHCOm34PFN5bAHnG1Jk8lw9m6AiEAid1fwjLnkmIExkQL%2F3XbaK9fRuSVkPJCXMl0dCWjNlkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcSEiCBflqmsVgkJCrcA8tUKr5xWA58%2FTmSG4UjknBVpWRC3dtNBVMhHho9iY5qmHlXDA2woPdjCKTruIkGEz4g%2BFbQK%2FGloyv%2FWslg1QfmeWGmXyvpKJ8cUliRD0%2FEnd2M2rl%2B%2FDV86EL0ZBOSecrFmkD9YxFLLwEAsP%2BDMy%2FDXmtReUZe7FXBsWfwMSFcEfYQLG6FMxcpgHA80LsEpaE7OmJ%2FoAUTplDkZC18aVWRuwcl%2BV0pxobGxN7JSTSBJZuEgmKBSfxkYTjWH12R83Oa8ugzf0wrcevoANHJebPnXHRMfj0JpCofvyQT7D7RO0v00VG%2BiQjrb2vedQbsLaiYa0onmr6NecRlLik%2BC%2FhPpxX06yAjbEi%2Ba8y5f628BDp20wEyON3yqb9hTW80gEHszpLNfnEsR%2Fw1nq9BNAT75E6glsnUkwTQO8G27GIDPyG%2BcucjFOpNk0L39M4PBwX8IsPHdl16oAJdmIZuLAL7MKH%2BwXgzycbzfffZGIgixAhPmQQdrl%2B0QLsnABL43iWJUoD%2FxbVYO5dZxbyLteVJT4grz6e4F9t%2BLdkBBE2cdjrWAQULS8KkVmQZcYRW4ItfM8UVAeYZzgqgn6VWBFs3FRQ5bNvGAi09Ibasbk5U2dWI1lXB9c2s0cOJMIOb9b4GOqUB%2BLLrSkezmcC5w6M%2F8UjI9IYj3auCPiDzv5wvF%2F7H8c8kW5yu4oEjOgcWC%2Fa2ivKGob1hpkBG%2F0VA3mTljIs4G284k%2BlKvGpM4SxZzYS7TWMUCTMP1xfThx09z4mBwGGgXEawysx925zqhQA5KCcvGelC8WjYjJZXxE9yS7dqnpgHT3v9xxy5Gwq2FeooG1K88dzX1sDAZGS%2BitIRDqI5dGqKE%2BdH&X-Amz-Signature=4fae9a0959426b5604a4c44f74ad1cdab2daf72b3c6c46642522d67a1c25653a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
