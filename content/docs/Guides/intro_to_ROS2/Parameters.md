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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYNWQ7C%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEC5v8nnZeAt2c9cGoppW%2Bj1ifNhZJrgzE%2FRkpAkeOpgIgXWbdekzG%2Bt1%2F5SwGU6WJUbozk50q7XVzDkU8xVwxY4wqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ8dX14Yl9urL8pPircA1dwQiB1DVplXslo7e8EGoEdjZ7EOzsuGvJvjydOIsUzFMd0kbz1LdoUxodJX%2Bc0kv5Am1T5Ry7XGucXbY96Loah6zJCehSfMNg1AS6pipRz5GcYwXnCrKQp5EDDK2yQk8r06SHCLt5FHi5D4547P8kPPKDPTyZnQPDqx03PKLyQxYtfVCdZTYjIQ%2BhgqVMIHiattSriiz9cYjaWl3%2BKfWVeIBMqzcut12zyIhMcF6247nB4sPykbh%2F%2Bur9Ipcv8BA9DPW9z%2F272wTnxWd6t6iz4uuLupIJ1%2B40dpfUznmq9L%2F3xfyZmFNLGvoy4wutMel3xgoeWA%2F2tOCkD48TREyEAZ%2FbXMdR%2Fc4In6mVJpWGiX%2BS9F7Q49HllpbovCyozSS6a%2BAZZ%2Fze86ZygEYCufS45jExyJiwLZaclryty9m0Tvx8s%2BoQ%2F%2F2Liip9kZ1dxLnkZQnPhYVIXmhhFaSbZel8nw5EQzZkekI9VjuFBNvHeBl4c701uxoZT7DLXpUZXmzUElmm%2FJvy8Fundt0IJHeKeeYyLq25ZmJ5gg%2Fbb23xZ%2BZs8uAPxuczfydd98gDdX0cbjB5to6rLnL9OoRefxzvfpXWTRJr2fdYQSXDD6kFG1mr3%2F1deeZPb7eNyMP3lpcIGOqUBMOh7pi4eZ7fjGkiZSO7HhtuEZoKTBZVMqIqjcgsU4L3BG5iRxXKIPg4sOWV%2F4sNMlTPCVBaSvB6Iycdcq2Hyw8i4O1omI0tcI5kGeeicqxG3pUqUQQOHYAMwiSD%2BaRIzhRM1MkBHlivGypqDNbClOdyJL0VAtqcub8xzncf%2FqQRSXhwo7GvcCa3ZSxX5BHVHgvet%2FVPzmClNkc5uNxnBfSWuyxM%2B&X-Amz-Signature=a00a9515d73f4dd55ca67293ce9c0e57b4ba63a456820abf1b6550504b1fde06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
