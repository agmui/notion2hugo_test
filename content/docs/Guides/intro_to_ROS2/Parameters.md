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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTKOWYU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMi6tflCSecPilJYG0cW9i%2FumbRx3VUdZPOILsbDqTLwIgDVEVcz%2F2YW24zv7SDfadcd5HmpkVEXapun%2FuaMVwde8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5PROqbPf8%2FCD7TbyrcA4v57PA%2BcdzgBWd2CIJGdQhm%2FIOZoUIaAUe3KyBGRvmCOxzLIX9Wwr0pSwf5%2B93hwCjVL26gI9O1sAzNYI8NIabwN5FbRHsLJD8K9MDJExbIaAzLTLxOM9faz9v4tBILghGxNSfFqOppDr8yUCUKcGDA6J7GKF5ugm8PvAHSUkcTR3kOKY94wPng5ypsVmr6txUCKfDGXPRfbJwbiLyhat5IIqto1r%2BBGqmFT1nD5pObrAcIaKpOUfDsGUNmOSE9cRreyABYUP%2BM80TTRkyGehqJzeXe6XaVjZ%2BWMY0b3apPsTN%2FyZufhwPpZDpLWMe2wnA3mVlxLeeL5RJJoGghDS1DUJ%2F2zFL16fFskavAGRo88mGLXeXU93E8AIl5Ra5MN%2FI%2F9fwQyhqk5q3i%2FeyZbWPvHiQOP2d9iz%2FXI%2BFOSMV1%2BRERqZqGJ1g7JQSR2e3zinb0yRItHlhPHI0QQlDlsOtLguus37Zh8f2CHFGFXLRu8JsR5nT0rd7BKw5agSZ6T3qC50AQKLOhekBYeVg1UdGuNxpdDuGMzsugcSLcGOYSTSrPCFDxhF%2BZxRYoKEzKJSfFH6Ug6pZgVlF0MiCFZXdlG6F7iNY4v%2Bwsay5TZQyLWKG5yWD25gyKjgbRMIyw2MIGOqUBVu6Yg01fFxD0YkmXniee%2BPdFTaRk%2BNSHGQLxSp6JU3GtyHfB99o3qEOYUBmTKtq7wbJ7EqXlYOCOYcfem1FZAem0YEPreHSIWOTfWX%2BlIHuIsf4FZ4aUky17qROptD8DhYhOjPDRLoQsA5vkc%2Ffe69qtFQC%2F%2BhFlIp77yHGWWZJr9Q%2Fc220fSBy%2BRTuGqEFbZ1AMKhV6SVi8kj5MN28btgiqtF7D&X-Amz-Signature=d25cb31f2fe499aead3a16f12ec3c4e6316bdb093a2a72273fce8e8b5f80d1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
