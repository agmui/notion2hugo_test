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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2KQUU6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC3FhXsO6L0AyyC8%2FnumigR%2BbRsA0QzSggKE92yo%2Bmh9AIgdTRwxYbprOWS2oQ%2Bkw2%2Fe7OQCeadWnu%2Bow93zuVvUFwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDYalse92fJJN2QcoSrcA70hb2gVoceSWHLCz5R%2BqUpe0I67X%2BOsE3F7yYxnobTphZh%2B4gp0DSRfHiFC%2B54%2BeZutoEBNephlddhLGBkzy5shMdG0a5T%2BxNCgn7uhww9kqOz6VAjqZcwLfC%2FQOXu0xSn7OZITW9hLgsub%2B6vl%2BOhE2gyLV4W3%2FT%2FFqGkDpYsPkF0SAo5WdzAGAW1Rgnk2d715Clm7a0RF0l%2BfWnYonAkUZSbenfGvbqKIMh%2BKCX90m00zgRsG3s3%2BgyB7UfD0a7eoBDcd5lI1RbYpvUjzPHDLkL1aEC24oPuWLE%2Fs8%2BNVlkFsXSWxAaPAbrDuNBBTyV2DApwDzOOon7NEh2fE6f8Ooj2CucmYkRk8YWPrOmkXNtrU%2BUqw7xACx8RmJEsxJZ5ejtFtDERXf0FrMz65pZ5bNKBYd4WsbOseuXtnCy4ZfhepVKSjIJV42jfAQsQ0lVohuTJJDP7nF3YEarh2A7dKX%2B1f1nUHe0D0a4YT%2BGrbrBcTHvAjj2wSViEzewhgbDWRxI%2B0pONlgNXf8cZsd6%2BeRU8IDtltP0joCM1msfuQEYExC%2FNFsWTp981BYnQg4Uj3FkUu%2F9oIAvzYXnyc7jcZ7sntTb5cWMD%2FdzHfUnkxVE0iGIRzAFJwYucDMPHynsMGOqUB%2F9vRebpKDCHTTO4Hxo9rdW0JNG2l5ESMNVkwTHEeWNejVoe6LJkpXtjS3zpK9FakdN0VvybPTDwKSoGl95mlRUtm%2FAs6V5hbmIg5kATmXqA%2FT6TFqHXgcjJC0zE4pLNq2qszgOmnzFMrhcAQFEAD0EFlXJafcivKIQMp%2Fw8pkiRC96F4iaLer3N3wGG6K6G297wol9ala0mCL8oOTPS8GaOtOu5T&X-Amz-Signature=e8daee029f5ff3f8bca2f248dd18df1ae2f0c86335cd3d75e4ce3840b7358c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
