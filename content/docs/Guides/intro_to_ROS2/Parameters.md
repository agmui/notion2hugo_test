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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647U5S3FK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbXJ74dxmHHdgfDH2iIcJn7mHZzBZsc%2BBYYSb7E1MLhAiAmUuCWRP%2BVDClrXR3w4UzFTYqxvO6VQEMN2Cc0l15XEyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoCl7vW2iDvv50PTxKtwDnU2ierJ2MsM0Y3z2%2FCGPp%2F0LWv2dmoHjnRC6uoYToXBKpzx15SNdGWheMwKAk6ol2zmHRmk690aN%2FsWmeuK9IoKWCg%2Bov4mbmRDbuivMK53YAei%2FlLxPcd2qmmE7MA4WUWdEeH3BA9GepOG2H5%2Br2ZTQZ%2B0q9N7pS0OMMEhfHmvKnVBhiYOgYeuNymJZn36a%2FSof9o4rbFPUxg8jSAKrtoZP0IEVN3AD2zrLySwlp6BRUIo2foW%2FynuAMuA06YKytKJqSSBFPjN%2FkZGbkvNNG3gbgVO9qP6FY%2BqH0tGNrN%2BKvyGEVBceFz0S%2B15dp5hLwfrSXAi8GauhH%2Bm8fbqSwVJ5df6RHsWsLgIdJ9v333nnYQ90WkbWm3fJciPKu0toG1pUsi0%2FzwKw8XErvRDHDorVt8lE1cqa8YC2GO499V32hWRpwYF2zzAI8CuDbViPxgmB1NwKS5O%2Bn52tnLAL7Is3GV5QAibgEtEFxfSwByWJafX46Hu%2FOp6urQaPLVv47YTypbZ1yFS%2B3gSvFhzK8e4PNP0ioRgvQiybMEWRjr8VymTdBA80jXr1Wja29dmMCAe7B4Rkdih2jDvYqhS6lCUZTZWqG%2Bq8tz1oi0KdEgka3CEwLik1h%2FrgbDkwy9XFwwY6pgHzAUYK6OR65mzAQoUgOomKzUam4lCqqE9eUt4mr0njtkpnbtnmMYG5PPiWonbECQdL4uU0RpDTQJbVE409pX03BlSmvxKki2kEerGFdxUV46Tl7VEK0uS3RPduVxv3Y6powWJJt4fFfbuJuf%2Fu2WUil%2BmdWwblK4ZOHaPdBI5OMtv9I6hwIhLypwW7BdTv0tu5iu6r35vu2fRktC6LV5zCI7DZMpfw&X-Amz-Signature=14a72b47195e009c5c3b283a5cb7c58687a5b2a8b114ae405ec747113ddd75d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
