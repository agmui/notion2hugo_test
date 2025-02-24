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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FRDRNK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBID6RokiHXphvkOoyXTzL%2BC3ViszVBYoezU%2BUZdVBckAiEAl%2FFThPkpIz3riz%2B7NHDN72mqPbSWaY7yhgCDkmJxgZUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKfPW0xsk1cTiEt60yrcA%2BnYBqD5jQLut4lC6icAKMEG1wFc3gGDHzpt1CxhpkE7cbdvqBgwwM4zZIXyRKFBgR7ouztD0I%2BfpEOk7JvnlF%2Brwje2IUeNm6dkPUeWnezbu6q2KFebRdfGCPrJsfqXxirbUgFjMmNZpujc%2B%2Fga2tvzrWr7xrz5PiGGjTiobcctlXYtth4garqym95TpeSGk5PM9w8jk7z7FC%2FvT7PXXjk8O%2FwrMIsY28%2BUhrsDO3K7xP11wGjDIDBegQlmZ5EyVNuQRx586pdqdtyw3U0wg2eEYlpcXsfZauhDUq4Znf7maAyHSbOQGDJBv6MKy0jU05OpI5H4Inf%2FInefU6kbdHiR8PKx7Sqt2I1gRkn3%2FqqezbnJurcS5xiP4gfFr2AUPDC%2FqD8Xut04BOsNWgL88kRtVLr4y4ExAUN6SMibIBG741%2FdkGg9WWzPckOdcQCR%2FJMzoTXlSXXMXQ8R7Yj1uHE0b9t%2FfA0S4l4uT2s35zNCTawZ3eWYYOpIEIKfsmPRRyij%2B3Gir%2FOeiVZeyNoGvzVTs45x%2FwkntNKAJbSA1vP9uH3JHHiAXhd3oWvfRIV00O%2FBErsbNrF0Gx1%2BB9Wcu3hHg5FvzhzeRMDAjmJ723aEVXEKHYbJFhreGhntMNLx7r0GOqUBDNcgPWGzVDtDZWUeUAvfgTfH51L9UggiyA%2FvZZwr8wcOIoVd9gVuwy6fz3e0%2Bv7AYnoIxfoql91pvCtrZC3YQdXfo%2F8YWSGPqEqU9eQVBkQ%2FyhIuR%2BpbwRSpUuKCDnWxqqOAm8scXuCoGiot62G%2Fp%2BUK8%2BTUEATOSMwuMSWDDbxN26058XfRamLZyql%2FaN1PFsbkQ0nJa%2FacFJoSIyA6ptFfCWmK&X-Amz-Signature=0a2f078c9fb443223cfd5db8341ad82ed8758ddb07da8fc94794ff5a2fb429ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
