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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXTJ4BME%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAsSbcFZZg%2BsKDIPQpdjIIj%2FOnjUz8xaG0L%2FatMWKlDtAiEAm8avvCAkl8aumNnJuo1FpvQrdrx%2BmBdDjDOZAmHISPQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPFE1DvXWYeIl8%2BPhyrcA591%2FnBEyZ3sKhuo%2F01ghc449kc8llmQmWnuzrNmOCJuF8gX3FRODYj6uPKH3A4apabhYyfB9OWfb8TTHW4dgSiwQ0IVv3I1Z8vW%2ByUPkXw4y6enDPUavUN5oKyMMeSeYXZ4fT9BkFxnxIkbFps6Z20sFg1WNph%2Bke%2FlTgPCascMpKeq7Fb7zNHZ1zMrd2B3fue4CqMHbhwrM5SK5IlUA5A3GO6rCMD7GWy%2BYv1Qd6Bk33yCLWQMB39U9nr5tUjOne%2FSJN4nIWMnh%2FgsKgb%2FdEDFH7oSBXSiJB1OJxp7m3gOcWUGx%2Bq8SAQeA9JVc7cIxRKWWyemVWTx3VSdTT1nIdCwAPZDC7UBXtOodvEwX1h7W0Of2sAjWddZYoaSPEVg2eRmFaPq7HWjOd%2BFcMPoJ2mO6b0vyndUOHsWeMe3z1yKGeg7hSXcDbFqKuWICJHRJVpSNFjsDlwt5z9e2jzEJ9C%2FDR2em6hXidPnUYaudFfyE%2Bdk1VuwYPtWtm8Io6vIaRYrVgiXwGS2reZNrFQVeUgzP2T8n3iEtz5YW6OfBOavlW1r7eSqcuTiTSVZJtgiyV92ODvOU6UGXZOHTKM9Ea3z%2FYomMYXfPF2cyYrJS%2BvY5Iz1DPrlJfGZWNPMMI3ooMMGOqUBQHnzi30oOcnd73sR98wugV2rIpPYAXgOqXLiG5TCyYAxvuqxqav%2FwQUWGayCsLIXYvPojbtFqqQajxA8OLRIydmFKVpbn%2BphhpWVEa6rJ6UL08niyHXln1tYhWOHOowwCkJPoRFISto97dVXi7vnKWS5EON944upTMxrZJzEZDQHeYAQqanQjm%2BBqI75wSTxDjyED9OK7Psvt3s9TGXdvqVcFuDx&X-Amz-Signature=f505d287c38d76cf2cb338368ceec43a98b6c0a5f707c25c6c60a2ab4a0298d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
