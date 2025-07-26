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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HCXDVJZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGry1CAEl0Gg%2BK5aCeaLTNDZDChrDaL%2F3CjTp0I27rcJAiEAq2B9uTRf8JvBBPA1LhpciTzqYi5u82jxccTT29o1kUIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDL2YAAMUZNiZQOqx6ircA4ZlC%2FVT1yJw5EPdXFXG7L1zrYol1k31mTS3AJhRCXUri%2BQHV3WCLvEQ8MQcDz57Bw3ojxBHJ2%2Fv2%2FyQaRiwsdhHFFogm9tuc6ahYf%2F%2BDPBVBQlHHi9cSv1v1GRCbOQyZ%2B7EKlcajzo0dR56WNquswZ51StRRq5bY83PodvQAftAiuzJMfZKqVbo%2F%2FuLP%2Bxqpg7i15ehlzmICmCXTA3N2%2BMLsvVJ67ckx9XSg9QgMD7id41hcrKLwIa6ApO3IiIrc5zvhjHODWUXWa33HKKQ8kpCflYBMdaVCe1i11tSxfsbb3spbf%2FIHCDUBgdAfWA01Wfyq4mJIyxERPsIZRsYbWXi%2F2ezPMSsuuWagbvHC7yk6eopj4wAVa5wG0XEdy6v72TrxQ2sn1edmZR1ET6rEccKUPe%2BnIIhWVn%2FLJVvxBYw%2BlaaRR0xxANjmbhO%2BzzYpJ2vjWxtST7I9IEUFknZOLbF9HVJ%2Bmy8tzgBrBDMB6ZBhjvp%2B6uiG0eBZlvS1OV89yU7LVAti9J2XQOd4pYGW5IAKfOULi8qhpj%2BFLRD%2BJZ64SIP9MXwRfWQTYJuR0khOg7K4Gaq6m9tuLYvw%2BLLI2SiaL2f5jkoq%2FOUwTQZty7uYk3VDk%2FtPP%2FZoVGDMNz%2FlMQGOqUBIrfujNSNcABBI2qKer8zCR1P2mDtsQa6yU%2BTerdrhDEaTCP3dl68OoA2qioubrdeoE2U0nNc%2FSKsE21BkNOT%2BnALmA8tEhSAl4pNM694C1Z%2BoLgN3ywAYKtOjXkPyaYfxkWJVIyWlSVltZaKIP5SiD%2FJHpSRTf1u8abCKujKjoJPDCsSMDDcNvqGTbtv6HOX1f3nWZ8eniPlpt%2Fx8M0Gllpx%2B5V3&X-Amz-Signature=63d1b1ebe7222fbcbe28b8a252dcef42039476f0c9b38ea62d9a8cb9a8607bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
