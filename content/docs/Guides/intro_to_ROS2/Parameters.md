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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623VHXRCE%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF646x1xEN8%2BvWr6lvrPXKWHN1PC%2BmCl5DZ0HZYxHA2dAiBUrHCIwBHqD8J3rnLKwAgAA%2BtUP16h%2FXvnS%2BBCfEOsOCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqd%2BeV69tWNgqxDXKtwDcjg%2FSBYLyjfi%2FAKEZUfY5s9SyqpbFpc0RKsSkBKF1DdFsgMr%2BOLX4BWJSXGh5I%2BZ1oNX6umOpvTyprpGBhTeGY1Ybx%2BCsUyeCVXk7nFCyeKpARGdw5NNVCis4Uvwc5LvbX8Sbmsjbwn6zxDcaW%2BqpPmYz3CQAFI3dRvbBDqhdvoI47eDsjpddG4q02TVNE7bSZQoCEich2LarhBAzK4WxHzU5mh%2BBug6O3JxLK%2FSLMdzlK2qVYX3jZ2pnPD4Ako8gL9G2m39Zd%2BAsFqjYSIIYnzAlJP1E1sIVLCqE%2FA5A1GpcOgZmCHh9bYKVVBceuttdFCR%2FbHrszTmWXSJcFsjnIzShjtn5Enr51B7aFYgZfhC6JUj7dqD7JeKTqWaGTcRDH2AIjnVo7gTHbTuKQQnhZw3VBHbOUTv0U23eu%2B63VJTxy43ZJpacY3JtgPZGGUH1qIsdM3%2FX5nkNHf5aaT22gavdBw6srBRjCdQSTJNaA1H5lFnvp%2FwgUFxrczCqt55m5tCWQofNM07C4wZro6CwwUnLyGamRHAu0b%2BtjPGgVONNsxcl%2BKDqa2UcJfbZ1dPn%2FDPQO5u9wRpyv5goRLHC2eoQkxiBYcNlfoziXTZ%2BvFKmvyrWRWJkH88xgowr%2BHpyAY6pgGjzKIWbMIXIfrQlLnSDM2zkKdiu81f%2F7AbkNuOfUkGbTkjXDn1GQ7uV3Skg7kIFqhvimasVeXUWS20XYWP7OYLYw9xgaiuHp3HfrzaBICN%2FSeujaJ1XXV4cGahSFDC3fofohWggFgTrYJFvFGm9RloZgFcXejTU0v%2FMUUMvX5qYefsnu%2F2SFFuadWzFVku4WfS34MKgt8MSwBiy27g7n1qku4J1%2BEI&X-Amz-Signature=9866e318218eecb99fc6d76a9a65b2631427da07d41cce184d7d3de75fcf490b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
