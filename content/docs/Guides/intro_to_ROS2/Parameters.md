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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4HKF7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyJ8Bu8qzKpoI%2BZzwAmvKkhzgE6D3z8pCjIhCFRrB0GAIhAPSf6m6xMqE6MrUggGCrqcyQoi%2B656gupTPcSDVxmKrYKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igymz4dzG7s7F1ycCRcq3AO3j2UnJW6PNZNBjcvVLoeFgP7%2BCxP2CYgjTRinxFyr5NSh1dzeqoLi2lgcKXg5kTziuCt5VNgpo3ToK7%2BQ7cypZiSmcfh%2FCXQHJ77wz07j0%2FcKrQ9tFVW2H5YwXA%2Fi3h2BIEVdpVidIEGgMo1Dj%2FQaHeedZswIiYQICtYOlEsqRtzZx6yDDjNToX9Qji8bA6%2BOinkExwR0vY581aEnjtDyro7yd%2Bt3522FeVYSBtM9mf8zT7SW4YcmUEy3ALgcsKTe9CWXSv%2F6PpeJZWwFraiCjLEAEHGzFhrjcuy1MLm1GNZYIiByWw2cwoWHhGy2hkd%2FpW1ZyKinzWM%2BYg%2FKCrf2xIqCg4nA7D8%2F29P2tZtodpU6k6pnxYib3SGWE8QKLaNEMjA1485tJtEV%2FBlAUDfmqb0%2F8h7ZKOWLBfgVAclyCaNhV50V5OJD6aWh88iN1RVqmpWXmfaz8oJFtuxHC93f5Zf%2Bh%2BoS7uLRaDsopvfnMh9qUHCUBOSqb%2FG6sYtustxRmu8b64Kt%2FzGYisdYf%2B0qim5ucoyVS5GR6168pSHPr%2BCOTd%2FIVOJ%2FbLP6YzN9ySgpHGWBe2hZ2jj%2BudijgcAGpVsNkPD8zJL094q19r38o2bvMaJw0Se2NEg5KDDx9rXEBjqkAb18ybQRex2k5G1pPJK7IGT53g9YvmeMdr8%2B5QyGE0rNrLukBqTUMYGkT9AjvbJTdZLF3BKN98WaaoMgAWOadckss6kv088kuByriHHoE0YYRSkXoZeL1wyHFHdeztHV88XDcIIHLp8eTHD%2Bj4Z7DLniI9YUsPRb24qZS%2FzGgP6V8WL6lJKzDSJKDvJqdDTpGZ4DzlbuWhV0wPd7Gr%2BB9CJGx4CG&X-Amz-Signature=1d879ab0657f1a2dab942831adae0f31584f3b6fbf2b4178fdfd319660cf50b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
