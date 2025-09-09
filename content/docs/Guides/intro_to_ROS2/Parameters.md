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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YM3TU3%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDQwM69UqIiZsp7gGkLz%2F%2FFaMk5pz%2B%2BhZ3len5Temv4TAIhALknFCedwJbJsLeYQBSimES4E4FRTJXeuoCG%2FpXUdm1LKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQfdn9uu2xnLESfn4q3ANqz0hQG8bClJvcyWZZflslSKOjSQ0k%2FS%2F3HDw%2FHDq0g93%2B7lHHCkukgxYd3MIm6Pq1nmcHGaQbVMI7h087NPsaop5AKOIc23xp0EBNKSJvCxcYV2YhvE5IaYcvnNDvHdsojXV7PPFm2NvTbjBvrt30twQ3F%2Fqsh%2FYEHyTJ8nojM0g6Uktsx5B9XIVDVqRQUSwq2JzZ6K4660kjWGUU%2Bv4QIMy%2BO0WbjwX7P8lAWZ%2F1oSB6t%2BwGwQl6hnpvHlrn4I5EVxgcaVUaZlHsUdBMgBBbyqznHfGBKl0ee8Ta4oqZRbHMhk8TWvoS%2FYeM%2BqwoVcTQr8awDtB2go%2FUGBy7rgSYlnpFVa5yV3OZUs6gm0wqethO5dZlN3BSIn7NG5Al0wbB8q55q8YtLyBrD9hKbo6O8om%2BYKd%2Fszybzck7O7AP6GBpTcOi4Q4Pym2PUqfLFbq3uJXN2UGkLGtOgpcfUod6ZPWZHa0TQhm%2Bhwb7oADA7UNSOdOnSBa32tkG3Sn%2Bepmwp2tD3nD8tQvdzTBtwQ9glHmuKQHCUM4%2FSWFTvJL2f1u8kt8dzIw4uk6xn378lZkrMseVghmLaWRDkqR0DCWXaB3%2FMHdLqZ1H6ucD91jjmNM4rZsq8egScOnv6zDb8v3FBjqkAUUG%2B%2BXA8fRU6Z4JT39tkUBUUrp3FXhfYzsEDGB6vKS2uMfQbSjorhVVtRYpy6DJgXleEMPTAG2PVglBvjacqfIS3fySxSQ8cLVsbEO2V%2F%2Fj0CAn3FVkaY6ivAvVf0rQgWlMtVXylgoEwQDbkn88OW7Wx63c1FdrO4t41XLdoljLU9n2kqTMpeP8tjHpHQEHEBiVYBbjnTPyfUoPLUV5ZAWyr3DD&X-Amz-Signature=37b6b7a9d8d83cc1c8d10c7b0e3ac87ae56c59f9be9c8f37fa52bb6d9de03b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
