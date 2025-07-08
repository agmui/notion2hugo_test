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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CRCFSTK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCoDmeH7QVuGCk4HZtxEkSPGsrc5Jq94VQHulU%2F2clrfAIhAM2QHYJo72xYUwVRo6cnYBTW41HnABAN%2FO7OSNl0w0esKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuykJKwrxvEPTYCzsq3ANfpREdF8KcHOqe2uC%2BqnXGtcIztD265LlXgTMgvxqriwXrlIeLGhyN2S642yWd%2FYhonaowQrgZTPZsQp3a5eSBBTRYtoiWbhA84o7JzCheRAbVVvEzs3KhVvrO6AWFwEmd1YBo373z96haUA1wAb1C%2F9kcruUdWWzDE9bY6LE1SnARtcyxF7MSIbhzVOv6iWDu%2Bo0LdXKxdjcBPjaXArnYmN3D21jMD1ovkxFsTUnXCBd4UDKeLoO938j4pcaCToiAtZOjZZkL7upkKqXZJhnwKCh0Mou7qNW%2BYqnRlmthtrmeuaYAt0NIIgw8BSki1NO4kjes1ImN0LqZmEjS%2BJyNttr1CVT23P%2FgNf4JAtXVnK4ajkvnZxNFAVJ2QPV0oLojUp5prw0cMprYTnkmnCJ0CSPthSRqOrxMZLdp2wAaXYRYyy8ErentH3Ql7lwdzRwDAIQZupN0hucUYFoKu8cZHjNT8av0emgnVxTcPl%2BsFR10q%2B6KrpUaH2Rggp3xvaEPkQm8VKNYb4MBUP%2FoLXgmHsT9W1v%2BF1wV59DDFHi%2Fhbs%2F896L9uHD2HUwxsSZQ7rTcwbif8c6vRh7IoS9svsRCtYq%2Bc%2B%2BpsxrKuyviQZuIwNhPAV96t5v5NhfwzDHg7LDBjqkAcKJ3i28tKgLK7Fje9KM9hOUruBE%2FdgyC%2B%2BCrR7UmSYngpQ5Co38hbgKwbI4K67okwYah9xnhDQtsqoe%2F1Bk4KWqxy%2FuiEUCMOOhfTTIH%2BJiSYe0ar2QiEdvoAGARLDdB%2B6VU9gQWG8Irce8h4Jx3VoSWKhUTZIKb0rpCU5srfGWZRZQXo%2FJZWISz6mhvhpcWgJOGxpR6x1ns7ADbCwiHb%2FTY8Ft&X-Amz-Signature=8a562b2b5011748dbd599368205f78cdd98e0ce065241845028b9313db773db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
