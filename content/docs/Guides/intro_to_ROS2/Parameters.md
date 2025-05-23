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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ABB7LMV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB9jhMr%2FC1%2BhSzNotfY%2F6Erdi1TFIm%2F0nnOtelN5rEMGAiEAppkG31dPD2ZeLxGffgtVfZXfArpbFo3vzkIDQXPpR7IqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwaVdHhmkGtnAeq%2ByrcAx1veKvez%2BTCTbENS559BrX%2Bql6rFXtAHUybzhbCo%2FANjusxy%2FGzp1Aaa%2FmMEAFppMQ82CxxcE3cFA7B1buKX7NQshF2XAcvU50ciPM2O0a%2F%2FUxW8UoU8jfwWMAzPPWVL4HfpXC1AY9VkM7j9mz01rSMB0kOYgO%2Fx1tMc%2FAkWzSIcLtVHqdOZmHy8SsSlqmRvM7Spe3VakU6NjiCJg3X3To4ftcOLXAltAGA3m0hQoTuCIIefsaM8kUOW5%2BgCmrChB09mdNbdfz%2Fpl8tK7%2Bf0bmyaH%2B2nZgtU23M4Tiww0sJ0PbKM%2FcUoEUf%2Ffp1jHkWMdE%2BsAXOWeoTnDh%2FNyrNLVZVzgTrvN3NTFw2Ayp191D%2FpS8I%2FhHHcDU0k%2B72ows85y17h14b%2FiqW%2BzMpfmaNbEFhlzwwE9b5YLNXpqjBpLaSADfUtnGlmF%2B7nICgLZXAe6OI4BrwAJ%2BcL%2B0rdVtqFLlDxGb%2FpCC%2BLqf%2BREM3YOKFlhvCMKSLGxlj6YBGNSX49Bu76mKSHohYfFMIY7u8BKbMXzFpoGRAI5rHly3Y6QndfEGdvvD37hLICbej13NpUWGQWG1y6Ev%2BEV2eF9TMIjrzo4iyIAIJ1m5NymtE5L8w5omr7jjyiLKxrrkOMKa%2BwsEGOqUB0kEF2ZwBf4oVneIUTCUgv8LyHQkIr4Bs4C9Wtbo4m5%2BjBW509srHIZ0F9xIfTm2sKj08jlPrFbX4UuUZJ0w1eSHbQQb3XHdbJN3Kw2KI2FsDbkWdm5g5iHfS12hdsQ46e4G6L3U34n7bEv1mQnnqA%2BXyspVTrzJVP6%2Br6oRMtyBwsxxRkNHbPRkdh4qytSd4rh5HwKOHmbbNTjFLsUc%2FkN0%2BGu3G&X-Amz-Signature=b99ac8627a04b4cd2be654725bdde56ba2f241375a3d09993c0f22f25fc49afd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
