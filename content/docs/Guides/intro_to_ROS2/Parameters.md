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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6HFPAT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5tR02vBCXSr9lGOLBSL5cjJCRfxHqwWoHnBqe1LYltQIhALMg60Xrvi7AS7MqrfeDm9BMx1V3ku2zuq9mo09BGivhKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG3db%2Fxz81pmYfJ7Qq3ANGEN2P7ENe7rqc%2FTTO4YBf6j1iqgzRnTHD76alpogHg5TLu%2Fsfur%2BRbKgaHrEZiMhZi%2Fmp9TR0OJqffa1tF5jSItxRWVA1b7ysdrY0TCfDUPIhfjxafg6idlM56NI5ItKCfN%2F2th3Wwohp07mYUGgT6oEzPaAnBOsOCp0HgADltr88hHDCYxXhziNW%2FSwPo8UsHObpSh%2F%2Fc6rTvD9cLQyFoPFUU71FbMsYqztxlj87VFvTF7gcAkg1vYTNByUkzb8ziGcts1wBcS%2Bw%2BS0qmFSwio%2FfiNHjRKU%2BqSoq%2BgankLsKXXw6Mfs6HoKXb%2BTxSzbQ%2Bfnvpk451f9rIVuSBSjDv%2FaUy9QlO4Ucy%2FTotraAJAdKxK3%2BW8y7vzkAaW3HBLD42hSaAp6iZWFN%2FY5FTLnL1e8U1ZxfgpRdXU9UD90gTgMNTNRsFe0KLXAnN7%2BRs0TYp3xjLQt%2B0OqP%2F6lLYS9t8ViE%2Bwyo8pMuZj5wg1KjAVKsgc6DavW7U4FQjhFjgVZF1n14QlOL%2FlbR2eTtoLffVwQ6hMWqaWoZsWlFJz6yYDXMTWqDSJdfHl9LBznP%2B%2B%2FsNWpzJTvAb0PFESfMtCK6pWrKRUKIzwRyF3st%2FdkjQApl9EPPL1j%2BFkVF4jC%2F6JTCBjqkAdVw6mQ2dZJRSiKuBKYHeO3ilx%2FT4dIL1Z4cVtxyq5KET5cLpKFYBVE8u3dcBWvc5jyAraa8%2FpVhM%2BzsrdwsWYaeDTs4ISJdBORegawNK6Lnp1PGBVJQipE%2BBRx%2BFY1WYo4jqcm5v2%2FddSMlD7AYO5GAkcxCac664v%2BlG4rYOE9npsCAqD%2FJNgYVcLTozxpJqIu9WgaLHeDD0jkr5xJ9J9153Oj6&X-Amz-Signature=b35aacd9a673e0625896321ab8ae761da7970be3d10dd018dd434ede4f1800f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
