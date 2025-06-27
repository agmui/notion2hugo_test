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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7VTXPX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD30SZvjLLytekOh8fY5RsDN7aj1XDXxgkxHhJ%2BShCZCgIhAIPt7EsIGtMpB%2BD%2B9hJ7yjVbZ4iTc9J76xZmbUlwjtACKv8DCHwQABoMNjM3NDIzMTgzODA1Igwe%2FNQH14WVJsQkFhQq3APjllpTuKV4Jwml6XsDeHKzIZCzRnOd%2BdIKZhsk0uM3rlvtcOmfdcO%2BOisAoeOfR9QxUyQMbQ1ZxLs0euezURdjQFvZ4MCm64KK5XE4fc%2BbzHlt3KVRRnh9NmxTSeGKAR%2BP63tuUZRwXjlew3sDmOkZGw2YIHJuBaiAsSCbIISNg3OvvoJcpSRCgtBaWjhppqhuka5ZBFoKakTYcv31O%2FB12lkbBBergnCElVLEd3%2BQxdprppk1fz%2BBU5%2FU1RQMTeA2DmRAUlsIdgWhmBpN5yCbC5xglVifDcV%2FDSnu9uNSdYg75ttc0tBlk%2FMUQRvQeyJYbg9Xs4hP9n%2BCQ4XsqZ6ueV%2FNZ9bLX%2FfbUmqRK84TNpcK73zbrY0I%2BX0NcoNCgTmZjdnDacPGTPyG6yRGQYWb6xkskROmTHfSP1381TDWTVLXeAi0DrIYP7vhBbAeaB%2F0SQrjH%2F2EFXuu7tDbir1Na9e7nnW9AkaEfGbaVpBz7W9hH13%2BjfmVW%2FUILMZlMqqVP1aPz1z0IrgmL1bP6jfzytlu6HmLraJKbCRark6pym8hxa8giBKk1vRUNlqtytXPlbHYAoTFCPoVnKY%2Fm0CN8m6vvL77fYFK4xbUWfq0oYERwvG6CM2d1UKL7zCmyvvCBjqkAehxkO%2BaSk7lO0E9Yculzv2H%2F8q8cWqG%2B1HTxJ3uFrMX0HfIWQ6ho1AFOEq6l%2FqPGoBiCm8E5R46s06XzxamcdpSpt%2Ff4EntrnqSPReMkgAgwbHuJKsu%2BJLbL7uHpt85HF6Y%2B2swEM2N%2BE0Sado%2BT08ypAJ3zm%2BCPQvB0iboqTfG8Ej1MD%2BgRE8O5GXc%2FZ8Vc6qGqSVdsAlASs1eFao8e%2FCW62Q0&X-Amz-Signature=fcc1a237c7bc615014986991859c5199689a7f445f3b19e46d2fd7042d620243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
