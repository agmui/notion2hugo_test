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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FGCFH2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIBTKvsagG41SPbkIun2dhTat%2FHwkWsyYMXMzoXvIVNY%2BAiEA41PnTczDjblXg148dANajeJzAVA3%2FpfOQaBshNYXHDsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGwI8V16FXr9B2n%2BfyrcAzcPOqcBlzsyQZQZQx9PISdkoY5YbYX8S2%2FKhHSa0CGCYOUI9THg4d%2FkpUqUcXj53rvhCni4yY89ecu%2Fi4vcnu1QekevDxRRUHwBpHgpgU3AuJJo0F0m%2FSfSbnx8FAWt%2Bsce0NkiZcNZmS4pODx4HOGsDGrw0TyVJdRrBKUNbhSe%2Bds%2BS8X6Hcj%2BxTAFs8vUrnCz857oa6BnDxy%2FKaLW9eI%2FzLsr9IUegv%2BIg8SxWg7FUKwG5EK800PBp5q04%2B7SBgf80spiF%2FFJuva7LWOodgaN1ODJdU5d1tKN%2FpYWkMIYkHRb2gYMirlHYV50xjylQ6oAt%2BxkMumMqECsqq3V9Mda%2B9GJOYzyQ%2F3UHVVWEUKRn7ay9IYftNPnWtNAmnndeWCE97C8xZ4D4Z%2B%2Ffwi%2BtiYoqSxh80Cwe4iXBoVcqlzkN0eQ65PTMWqpT0AzYOqmmk0eQlDZHRPxwj3xSWMbxEbMMnRbySxgYI%2B6fucvXTocY195H9bPN3D20NI3h9a0H4MP8Ig2OjbzZA8gYSDRewshmkWu2dW0FSEtYUUctyzlk32LRx9GhC4bvaczWikCKtbCOo%2FZiowPdfnEaAzIrzRDbtM3wMPJMiJi6odoXsIyhjNtCQOJz8N9Vs9rMPmtgsIGOqUB4LmJS7WZYQ41x7ceJ75mBGpkX%2Bj8xeJLwtDZewzvMi05lwLEPiQlVScB16xZznuYAWRANIIPeXYV%2BcsFXHrlNQXXdRIeWVusDd%2BUq0LH1iDsDN7xjpXTkdTb62ud7XQSVf%2FBl5It9BVKUMNSnQMou2u6tmhh1w0pevWI6yLKaN116Ktaneu653nTGat%2FUI8Amn%2BpqqMrbsAixN%2BKHoTHGtvSHYFu&X-Amz-Signature=474c33e597c2afd806f8ab033913353fd77257303c2841784a3944c0db6e705c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
