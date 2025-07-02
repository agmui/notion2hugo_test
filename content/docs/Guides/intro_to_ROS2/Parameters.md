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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLWJ5J7T%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHxhsddrCpLQuhX63LsnTfefw7TLynLy%2FmzIyKnQL%2FHgIgUaSOwxKfXwjRkJQcNHVNmZ4AGmcmzQSAWbExzszFABEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlavYHG%2BtpE7KalLyrcAya5JGpyreNLS50tBUuCmD7a3ix%2FBtIp0mfdZ5aEV5HgxRHOyshZb4pb3tqGc3RX7uzpk%2FfKSeBTyTSzh0JrDRevRQrAkCiR9P%2B2HscPqZjodB8nv6sJ374L2nei9uqn8l523uI6yUAm7bpB%2B79R%2F%2Bs4v4FdnCu85X2d96UsVgam0s3q2RJxjJ6YyBX%2FkVjiiqlk9GY%2BA3TWX6uLtyNB%2BK2FdmBzlNleoIkbWL9BvgddYJ0uNooLf9gtKn81dxGl0hFSDg8oOqZi6oXxjoZdTmMjG%2BOCfmdvpoDbx%2BzqXMA4CxzXCzn%2B2qVHin1If9WmDUFQnHWmKE4xZUjZWdpAH%2BpEbCgqNZCegDeh7Tk%2FK1rblM%2BP0ixyeJH1iJmyPjNpoW3we2qs63ET2MrSHuJxQt4sWwn6nAnHVadsK%2BzCEu5h3P0u%2FHSeW94K5P8K5bjR5mUuQbA1B4AFV9T%2B%2BFEiOTXk8jDzHXtHShUUSDJ0w7oijmQ1z7QUwPW8BVTeC1ViZQIZVMRUrW9HsDdC5McNpaiUyLOxgIe3OQI9TmbS2tWlj3rMjwHK2loPfn6J%2FcqjePBS0Q7TFBzxVV5lqUbP1Sld6rGK2UG1A0QeS%2BY0tOmekXMF7ulo%2FmXkgtKBMNG9lsMGOqUBdSFqllJVPpvRdInXtL5nf1pegFf0ZOOhxuONCAKhRW1e%2BvPfNr0XWkQfhXLWJuuqjzHbdvMe%2FxvRJ1gRiqJmziVv5Jx%2B2zrGfZB6WClLAKKuxdZ0ODCZ8KefCg47sbtbKBTsuuuoaNKqlSPum0KcD3CKs3wwVPxWcOkpWTWn8JhFeMEZ%2B4maK9v22LzV0i2x6lSW1Pxatuglbp8P8g41Ywr0Kxlw&X-Amz-Signature=401da524af591f2c28bcaa7d6155ed3f52a64e6549cbf4c34bc2f4a903469d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
