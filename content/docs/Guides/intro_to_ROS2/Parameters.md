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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U27W3OU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICnai5AXe%2FmYJDimLPsLpfNhc%2BOYA%2B%2FtOSjti4m0rBrEAiEA%2BH3ldhZSkQGnT0Y0wygGPNLUxCnqWiRBH8OVfBT6tZwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCHCoYIjTPSv2sXVzircAwLLDIUKD%2BIlwkpwRGS8luoOSOdivYU9xODjo9yMi1uVOxcX8LeUW84FIegvSvTEY7N4d6EAfSgSweXqWQRN28Tfhdxc2P3aaxmllne0jgylI4XbU%2BDxqCEY3cl%2F26kDrt7AdSDv1oQG4p3MnwCEXw30TbT5ZukBXayvqNKMMLgyQx4GRHy4Ojr7e6ZuvlfQoP5crav8RMkYEQA3B%2Fxi7GkkPtV%2Bhq5JtEw1hfZLXQvKITINDWeqokdCqJqWXl5Ax4obI4i%2BCUmwFJ26rGIWOotSZzlvGLK8XpocbM1Q4r2NmaFxPuwePwghLzmIsnqZZCcnVmkBGTrahJthZ8T8klHBjVpjKetz2c%2B59nAhsqzMlo8BFpLnDUV0Ec4OdihqsHJI%2FXwaIR1rjymM8QjwPjDfbydlea2%2FFRpXqiRp%2BHwlNKBOVaeP72TOrwQAWC3Xir7Lu3eTj3nwMXTu9YhpdxvqmDXRjcAikZgQncnBgwyaZhFWgLYkmx0nGY7VJ%2Fb7f1WGAVH5nqsVyK%2BoRWvaah45m9WqTLit7a66jwcDIpE%2BlQUbWJk4OZL8fbKyZKFNc89HkJMssmbPz5R5agaSdE2kiuazfg8cstvY7%2Bq203o%2BDTCSZDBuURI%2BNJa5MO3enL8GOqUBVMBvgEf06kLQW6nck54ioQa%2F2J0%2BVf3Gt7xTNkd%2F%2Fo%2B3%2FML4EtXfTYW%2FKKZgy4RicdgC0xt93m%2BjYn%2BN7o5FTNP2hUXjWjYe%2Fg%2BLF%2FmkGNMgIrW8Ols7F6WBok5Zw5Yt7tXdB2nOBecdtfXLEyTWMQRqCLaBCAdJRkKYbxFqELECT1wFG5HtqVyD6%2BwpSKDiHCs00ohZnzNyoW8TmGI1Nvweqs42&X-Amz-Signature=3e45437549947652c7efc2dd99b3ea4b56f8bc2b21f4c60ce58dd3344f6620b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
