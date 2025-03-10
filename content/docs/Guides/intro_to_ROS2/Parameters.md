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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCP5BETW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCT8q%2BpQXL9ZIpAdhtVo4P%2F2Ur3tlUZmoez6lvvL5dw5QIhAMhDQ2wCx1Ro7QmDM%2BHIqmQIvgkMIo%2BuN%2BSNS9bRIvtnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2WnQT6t4F5cUxKU0q3APMso8BzXc1soYidq7gEbynbuC8Rb7cpzpBk9sFi3WD%2FEHZplR6geHE0FPtj9ywy0S4dxYS12gYbj5z3%2FVg3OsCOE0hmRu2q8IKH4aQpzn%2Fq8Yq3CRi1dOHH5QafddgKF2eJus3M99IN9TnftD3Gvfv2%2Byv6GyBdmXORnU%2BKfNYCOPiWCbOguFP2gqKVi%2FIfMgL1qqwGIN2xTfW42se5zqFbTYKs2wWl0aT%2BoZf%2BB%2BoZqAsY9G0oQdVAUwHt1%2FbWF9WUraAzwn1npJeLMKz4AmUXLFI26Arnxg4sFJxLvq33v0GCoNsqM7IGN5fKPmk3Hb%2Fky6SP8ny4tTC0HRn84ti9jJr4UQ%2BTnQcWIMqhTbpmqfAL0cYhKuHi1%2BksViMRvwcOPJDsTMrcsM04TQn6kiTqAxKPXFoNEe1g8%2BNhWnr%2FYdBdQ%2Bv3gKUVUy0STFwVRNeqnoI%2BYXdTjy1CXO5yHMvysGsuqdN3ilduEh%2FvvwCUY38AWMHUh8XQLfiJdGCH3Lsv6zQRbryRCkWQ46FBaj2kXvasnrjW8BcpXsijqCEmqkXAZ8I2pIJ%2F9Q7j3XapLpNt0I09yDtsjJptvulVEy%2B5zHPKcZbkYrAlyV55sQSG%2Fw53CnPKnyGoQUv4jDE3Li%2BBjqkAYoqN9BVKURdxFtX4dmbXa1FdooFbJVwJGVKAjRzgjqVPCRUXP0czhK8OcFBkyflqWSnRBBUD15eiA%2FgsbXpZSOnxcHQEjSdj3G713gGgro%2FnxGhlmW03nBK2nOj8J5EMvP8PcqPMPmGkRQi0%2FVpZrxHwqAaGmAC8EKYjn%2FZKwvdF0NG6HagW55EUPmB9RFqWnw1%2Fd08bdVcTvuwKC1nFwvZ0RdF&X-Amz-Signature=a703c62ade35393a35a11e602d9b39d31c93a1ca60b46e0da7022192511adf94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
