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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFMENAVB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxEMtoLtergyZEWqDZXXs9XlPBUTEbF0StFi49064eZAIhAJ9DeaUetk%2BI9cMeCsrwR%2FxA4PwxC1KkyhnM6Oaj286nKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPww3xJHWkv9WEXRsq3AOslRK2XeLO8gqCVhLDF5qIoBERdqIvmh%2Fiqtvqq6dlLbt%2FveXOAG6WREHcRJ3cDD0c64wK8I%2FnGBk2DoQPqaeWv%2FH2%2FOpsALnwZLE2nApEH7%2Bg3m70m3u53PgFPH%2FyWYSCkwHY24U1FzelnN5Z1zTcobEru8Hwaw4X7YXh7fXyz0eNbrmlTtkKByowpLbBwMZM8GZA78bkQViXeZ3XqtIfLvLqYfjYyReirgGj8Vv4ENRLQbPhxUiTP0qTfSpnn8UEBBRhvsVdEluelIxleIjoVnvIgPPTlwp6Nqlg6eolOFEG%2BeffkRu%2BHEu3Jdxn5Z%2BWDNiYEDitvsH8cbZ5XGDWeF3aSGOEqmXmWD2ux7ubboPx8KCvxKsuG8nog9kQr2lkRSZiMIQ%2FLMf4S2qjIaPqadYGoiBR9QkblP3a0er89tD6LmF%2FGoL86oVZgeyyVj3cGf1nc8YTvk2QwLRnxT84YRTfOoGZiQNKB%2FPS%2F1sSikBjlLCaTQJLC2NoMD9%2FbHYwU70kEjap6NsvrBnFXGQAb1zTK9CYcj3jdUBbpqvVYE9a88sdtwgoDAZGL7UaYTgXN7EPPAtKvt4YLCjedGc8UhVpYpIgSkRlZ8i0RFGL6Wo254aZdRDzWygiajC9iNDCBjqkAc0jcfpTHLm80e6rSd5e7DzdtGcM2SKd9AKJwItX%2Br7Gf%2FD%2B7QdctEGVsUTVn7wP0WOKWTNMquMSNjJ9H%2BxOclWzt2swAE5DfPl2TCQGOoiqIE5ur85r8TaSki%2B%2F996TnRMJ3R9IxzCLQ34k9CHPC2%2Fe%2B9KwDBEr9KBkeMFJdpJvhJg8Jbuksb7BvtJOCgmkkx008Rujsc1QyCuZyL32VOfn%2BNvh&X-Amz-Signature=55573ed0ab52a43e3cb3b0e0b8981b4ae59503998db80c3f7632657c14de7557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
