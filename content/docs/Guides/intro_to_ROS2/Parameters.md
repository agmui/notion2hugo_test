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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q25IDQU6%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDniV1x8oWducOJL7dmJlKta1ygmS95lpczqqvJIljEegIhAKCCoByRZcTCLYTT080lDxYpPIM3GNYvHNIPo5hZ9sNEKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUL7B1KhNFhSsLYIEq3AOSJUTs9oOWFScf0wQEktJNCNqUeDUJtjToIumsEmPTm%2BcXa0ST09OLmczumU73XmPjjjgA0Kkb0G8i2cnOfDExCatqnvJcezQG1MIH6EhEHRcDADM9M3a6QJUjLOdSC6OZU%2FLlSWgLLB%2BgTjhOg%2FV8fYZVfWelEPULThWIDHTmhfEor6btB1kCb2hrFWC8pQJsbQrKxxXZZVP9SdnCtQ9jbwzLOT38SbiT1fc18id5o52%2FSajoS2xmQsePUfou01KPPJ4I%2FVFXZwWs1kxYEjfGITG0h9h3SgqfrjVhEHnw7Oyi3hEGCfxi4G2UWg8IYYJYsTkKwyhLW6qB4dNeMJCD86jZ9067cz742IenY7irDF7REiDWfuHwthRMBAn1ipuiIvzKnwp61K7a9Iiw7bKQUD3KR1Q331NvQAfnMV0jtwNu8HeF0VwcQ%2BCKwWueuwiTtZBV2ha4i2PRmAfzYDeIszYjDN5wkhbiGAkDhppNX18Gzp3qTKJDa2nEQyGURvaXihPYUNUa4pam%2BKefy7zVhGXCHFeSJSnRwxfvD0ZcR63j0WBXUvfijPKR8ekcvbrZrnRYKxBBPyS6xaaDz82Sme1wg%2BoSdCP%2BlSb8k6o%2Biz8sJBomTPeNz6Y2OjCc%2B7i%2BBjqkAYAT6mWFHSKcpvdmhhY8E4ChwEhBrLxuyBHJXnhNg4FMdbGdEi9atOVQLpWfTwU0AIIWik3Zv8Gjmo7SV4OU4AYm8rZqKcP9bIpxOCY1skKjwheawewKFqS30cd2gthJJM3oih1Zqf%2F24lihr5RrQxKEpSM%2FYan4XcRm1Q%2F7TaE%2BlV%2F%2BGwF%2FN5iBtBF3Bnd1Z%2FD9UMWi3teVnwnolq1B%2FkGyBaqi&X-Amz-Signature=1577d3a2ad71cd06adad29ee91f7c906dcd60cf4b0c2dfb22f11ffc010707205&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
