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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUAEAOM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHa%2FnNUDIhbH2bN6p3pAGLmELXlQNRgZTtuJjWlt1yCAIgKUdGI1pgNBbTA2YBmBPMTSo7Tco17dt5VRdQlSmyYWcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKdp2Zswb1HFM7MisSrcA3nl3hVUruzCmnwBJ%2FICUtGstFnMakFEXYAONOQTcIieo8ard4soR9sDs7eaFATAYhPg9ukBOUZd5NPLGeUHnhdQ7suss2EhiZWp%2BKsM9h8ZaeVNS1crRbp%2FxCbOIVLVSt2sG3UgU062SZHG234XTGgFBtp%2FePBZL6QogXaC3XzZ3OGvG81Brh5gwwio1tdOxMSDqJT5AQrPlfbe0xS%2B3CNFS3UyjAnFuDi9IUkgSJzRXMfmm8kPWy78aS5YgVI646bN%2B6UiiYy6tYbniEsfgyGCfy3TZ2fVq7lYm%2FIZPUX3d%2FZDoCDu6AszIjCaVu9Iq3kG2F7bhw88TyM8YsnuQeQo6jOmoS1SQ0auUCc6o4fDF7agtSMvhb02ShOj0dMvdROSdg2RJK1N36YBux%2BZfXJhB9lTxmOl9TpPCnWTTBJYOBhjUSYVzdv0k1%2Fmiae4hHLF9rLYquftq6iYmv4EtldT3527ikC%2B%2FtTShViPFgNnVGdNh50L9C9bYcheX5CrbDZJQHyRTqFixvkNzjaHG%2FaRaUXS3Upc3G9ppmkT8s9jrNifL41LR%2B5QHRGD3%2FFQt4xm1CqcWVXtDl%2BjTZyHf7VT%2Bp6Y451SZ9lJIQjdAhRuloIbqGCh7c2pUdQuMJb88sQGOqUBBhV%2FAwZXpxYNC5vxfePYhm2HMG8AlNSQhfRXeVScNoCPBGIoIprjAKX6honvOBoUd%2FeJTQQBIoFm%2BWDbh3TIgH5sa2Oo32qdWfPbsqcnVfvlAQWwniQjXgpEP1Dwv7%2FOwbq63zt5G%2FUbppFUZeAEW7iB4OIxVy3Mlc3RxjYphJgVO7IvZkMM3MRm4poFTW2zWeh57rPzdbVHQFzM8vDkItSA0pLg&X-Amz-Signature=0b5440c1cc8ccf3d5cb9686274c72b646cc470b9ecf034639287e69b93d798db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
