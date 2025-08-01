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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKGOPAL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9XIRSWpZg%2BcjZCcO0PYSgG%2Bb8lbiK85M%2BqKyLY00qIAiADhkSPH4bMIl3zna20arXg4X%2Bstjv2LcBzfMtXOxu8%2FSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYweyc1zlsgWsnHOlKtwDC76fg0CTLlKjm97idCuuIV%2FcqD2g3DIkhDGBmhzhpb8nhzKPo5I6avpnACMZ1MBt%2FLI1vQrSaNmySoi50OAWNjCM8IopleLsLN3H3dRlNsGqoN0eSmOQ%2BGjVadPTdQadij%2FouT0K4cXznDtTDVYsReSqJobglEXod4ZNjCyVtcD3ITCDR4Q8QR%2F%2FSiiVN3olxQgeGb9DVmWJjk7J0g7EVJHS1QHzmduE8BfvN0uCRTyy5iq0XZtj4TdEPB7SgOQi%2FW9gwovipMChAq%2FfuwJe90mbQdSF3aRiUx3ByAW8up8gjXe%2FTs%2B1C%2FBSST%2BILa0kS%2B%2BWIbPzwnA01A%2FwrOBMTzWWs4S%2ByRM%2FPCdJqHpE5fmcc6z046dq5XTiJeaJvlRRvd5BCmCzaXdpvwrjjYkYgB9JF4DApIVMUdvT%2BzbFwdY1BeV%2BBChfFqCFSznmc4x4LAQVM0gCkgj8kIevK%2Bgak7rkhm1cXtVX9trgcivYUomw4D%2BhPJA%2Fo9yI01KZvKJINwGf%2FJlen7AQbbDLafMko2WEqh5D%2B9%2F1qpgxP3dEqgnQ1jKb6VpD3uLPPy5C0B74YO8qkNPdS8XbogVNFuldYI4YAkbgZ0T5n%2Bcyg5mL9k6vAVVvPS%2FBs%2B1n2aYwwYmzxAY6pgEqufubP7YbhhIZaIudgPfAxyGjOTKkOCUa8rXdKYKhQQm2r7Yrt4kC0g8lwfmk%2BSikRD2a4vJpDy3UYT9g%2FEjviUq%2FQumEqDlFAcRuLeMpM0qB3Nx4G9AsIs3tL%2BuZieoJv1cdy6CN6bxO7FZQWAZBftjg9yrAjSJWjb7TG7ZOuF%2FwM46Tdr%2FhoZAtvmB%2FIABU0G9DxDvPfxqQXqIpvsox%2B9H%2BlLnT&X-Amz-Signature=56f3374f2c186c909ce8d74b763e67082342911965776905708e4d10f8025ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
