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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQVKTWK%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDzKEP8FdVE62psmhpP7I4HSrVDs3dTmppHjGQ9R2FdWgIhAI8v70VFz7hPo%2F7trdHJI7DkOzqphSwRd%2BHU6my%2FVcQLKv8DCFYQABoMNjM3NDIzMTgzODA1IgyBqQh27P%2BvOg0i34Qq3AO%2BewqkEY4YBD%2FZvNbbXNSKUB9gLtOQSNq2%2F9SX6CRlHQOqqPOw%2BT7G%2BAlx6YEdfcFGWNHK6JB%2Fm2aetTM1ywOKZ6l4pzG9PCBjXzTtC6Rbk0vRzmZjj0a82G5h6akVb6eyeJUafq7hl%2FzurQvUppBYoVsZvqBGZrTHTf9ay9W3Bp2N2QZiQ11M%2FleZllrKqhHrRFAD%2BXCOqt2BU3jXmlUZKLAyXcM1FkUvPMhPeBKnL41h4jUpA9o4pKIOSkVzNohabwNux%2FK5IHM4Q%2BY7iW%2FZbjQLNR5JIhgVYsBRb49TifcpBApH4ctU7P1O32mnrMfo5hvKlEjd%2BlEtkzC6btpZnA56RB6%2BTWoi5HFVYt2NH%2BdTnvb6tQ9ZCrZT3bYuXlGCygNtNoP9GmnPFIjJ49GTkxK%2Bei7gOLVdlgUnTVnS4G1rqdwovLt%2BUbXC5hdOIvxIVExcWTab2Ehwcb8CG%2FfDwi3akFWxPSs2iNOtnPWUAkLDry%2Bpj0JFh6qIkaCWO%2ByoYuM8i2kuMiRBZMIucSqiYWvDYCIYn4IfuUMpimc%2BYzHkx43dkz5nsB35Rx6p3CpSAF8wMrO87y12d5jUQHBCxMxXH9eWE6uMh9tu%2Fr2n%2F30PwbGY0rqxkZXlozC43dzDBjqkAQ5XCWGIFWkKme4WCtb0aO2FQz968sSJ7GNZ2plDeo9zYN%2BySrd%2FAaaUZtESblTRacKblc7ZIAzXoRQbnMYLS3n2t7R40p436x3Jbw2WXviBowbid0J6DsRKhulPX8AYlTKpWAK%2FJdkObN6UAPD8FJLXUJjz3WEuTASDZMx8r9GHBSwcBQ2ouVx8%2BN52mrouNtfRGzD%2BcPumYZHmCrCB3enjAuwf&X-Amz-Signature=2cb1c98bcf448560f7ac5493e3a27a24e12e6ee8acc73f314560322a4c6d677c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
