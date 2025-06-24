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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQGTPH6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDvodDYjzJ%2BBmajhiBgRthFWYMJKEL4vMJJPOxCwscfJwIgLLNMI8%2Bc%2BORbvknKH9tt66H23wh3wcNtg%2Bmsn7Ki59Iq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHQqPUuU5fudN%2B5Z4CrcA3z2Ii9Q%2FI7QFPgy9OF7kcxnrs0RcfUt9N5LkBDTv0UlApk8Vn5reqc63gYbUBwfAygqz6CJFoQf4jVQqN8bsdBjnv6xoEo1jTX073SC350P%2BGgSLw7pwhf3aphC00bfRsFV%2BmJUHueLEUpHcwDd9BftGNVDV183D5nzhRkQKfKmxKvIhKskkBdZhwu4CHwBrSK9CQLDyFsY%2FdoxLnHc53GDDlJo7RD5iGcJfdhQ9%2FGdnPPmqfwtdljgI2ufBZoaMCctq0dIr7dany45%2FArr74Gukqn35QaNrA8EesFxwrZaI%2Bld3%2FRTLoZ0EgXbK5WRIbICwho1LdrBpDrtzQuY%2FDVaEAgT4vBOXEilPW4aVAV54nFbKDSV9Sxj0c4k4pgMq1nz3IZhhIP0VYCPDAqECT00DNbzIlfqiRNmiXoijWtWue4tqj%2Fj2g89twTCAACXUwFCuUYPJCY6pUAvYPvar%2B6%2BO%2FM7vs%2BC8kErIbc9tuBonQzan5%2BMu0DZ6g63bRnZTTZyTEuGqwIn6Wqfne7scHhz3qF3gj8BDQ%2FZSGNCeqy7dnoC6XKAkigNYJtZUbEWKIF6u43Hwr9leRTZGgeYWHxV5VgroQBGDXdcaeAkJ1Ln4JcK1CCLhF3vXuLlMLC47MIGOqUBOsAQdEUnWhMCI7yEz6EhpjgpaxsjTIWLSCij6PPEhgfYOSkMWTmcMi9MX0PeZAcIXIdG0SAjqpQkqz1IKryPt6V%2FTIp9hoSdY8t8eHGTHBKjJ%2FeXiyZXaBfyTgla88iMsJ7SlG%2BnpqTEqQ6nMmcf%2Bpf7LKMU9EogsLmRbBVBEfUTnHeIjArm%2BhANS8lCsGKpRHLDfo%2FBlyydwZ%2FYZteio31HkqiV&X-Amz-Signature=0b78bd2bba2988a6e2d65da777954b52e8e2b72d5e165ac554831f1e5916f018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
