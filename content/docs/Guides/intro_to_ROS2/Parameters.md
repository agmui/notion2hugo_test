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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X675KSMW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH8eoE%2FHcXUSu7n3ptBv6ULg7ctqhl9GzwcvZJdfXqz1AiBBYoS35GF1ZHGWMOXfSe9ftdowPFqbYil8xLrwRpJmtyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMpBAeUNcKSdlHZf5LKtwDF0FSpFLghsCe%2Fb40s7d4JZWloEAfn1xkfntSdjtFlRldvySFurZNPqMyqPTrKAA50JqGW8bGcLwPWAYq6BE5mSiNMfQ6M%2FpeELMXIfa%2FtA%2BgmSZ8KWWS1KHGN0qYRBXbWExWH3FTVDJqQ%2F82Ctk%2Fr6n%2F%2BVGu%2BNe%2FKtCW1%2FYmx1poMtsGfiF2GupQx3x7OMzEgjf3jtxFpsMSFjGwN5CLuebq0nnLYYlrG5Wi5KI3I2VMM3uMB8ylPmP481H6IiqGAUVIBGH6V1youpTLCv7WzKg9M7X5GicuJhV7yZOFbg1b%2BPNsHal6Ra5MyMkxYNMmixqLsUCfosxupeQLNUkXdgu0w3x6aHtFxaPCcYhBHLtp1RFEXI3OQtyMbTLqNPVPj2FQmpP%2B%2B7lcJCakByJEceIe0fD9UZy64ySi1II7VrTq2qgNFeO3wDt1ThaKItF71Yul8cXYTdrzAOVpTK9nf96IBlgOVwrxdK9SI1Nwxu2VKi4hbm08v5MxoUZubRQdpLMYdbos2SEODDV%2FOe7CUeyF0bImHArd3X15h8RJR%2FDGFWGMue8WxcvIWxiBwMHyOoUxXQYqvcChm25E7VJocX2xiizTT8IjKf2PIMbQYPCLqQa1JPzCjDnlFLowqLnKwQY6pgFQ%2BBeHwvZIgPdtWjYgB0TLlbxVHDqHdfAVG9GIfcOpcKYhn6YkNvK13UTauCUYjBM5Z451bcm4ReYDAP%2F9SO43c47%2Btx2FbhQkM4bIOwrwIbwAlX%2BoK98KQOZ0csHnbS3AB%2B%2F8Hm%2BBHjzieYN3MLPLaO13Gsju2kUSSabvSSeMxiBbF9LHVeL58%2BVuWnnZRcAiwGG%2BIOIxRD3Kx1WKY2mpmZS3HZGl&X-Amz-Signature=b5d099bb7491ab623af9b41741306aed385c7c91bee3b2c7000cfe17a8fd60ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
