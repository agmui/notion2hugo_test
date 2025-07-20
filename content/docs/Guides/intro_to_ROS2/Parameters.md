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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZB55UW4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGDdImNZwRxVOqH5XnC0x%2B24ZbjnvIcSfZDqOn5EKNJAiAl1o%2BZSrqfRTDtagqQrw%2FWPPlaRChywfFgGbyG3%2FB0dSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBHssW9FUAXnTjg%2FKKtwDNLLgNCEm%2FropDVH%2BZx%2BLXyX2FT%2BpFHFl%2FvY6jI0k2A3qsRmnjKuiRyRH9%2BjlwssoBsfwlJBR6BEknAGFbhBqFovg9GOH5TcO5NE1lLPLreR5jpRY6Xi1%2FDwpACDDEEx6gbI1SkTNCbXsb%2B2%2BuJrjqi683yhcXZMNqOxAkYsWZEu84CjmSdLWAxUPfl83frajyc2dUPCSrETb6wma4hLsFeyw3f4GKchXhU0CEkZsC6w5erFspO%2BV1j%2FA0jhLZW81OFKE7M6WxXrLWROqaDj5TZAanJIzz18ur9E%2BplV1ap3GdmdruWimnfL9ygTIX%2FDnDrPXZli%2F0T%2Bz3dlo%2Bx9dJVSw4yuI%2ByLuKrmOBkQ8ZcPbFXsQG%2BAa9%2FABtRM52z%2FVkfBLZseEQhlF6FMDwCTMrzx%2FelFFgIY2%2FRuMAb5z4r1kHoqsln951l%2FsixhpH9SDumdbRsjPx7zGEDQBAo8hsynK9GK%2BLHIwS4AittYLeeg5DouB%2Fr1XlKq%2Bc6rSiVck5PqKi7PXbZwRA2gKecXqkkOTmOK6Zkj23eLbdfngQkuxmqnYV%2BRSm%2BFdT%2Bi0II46j4F6uTE2d%2BD2fGpozpStUvuKZppZAWkbKPmJYb9OmlGs0BqsthKwosbvYAww9bbywwY6pgF3go7aEYKpZNiSBbZSn8XTUhQkLRi6XnNo91fs8Fe4%2BU1aEt6BKyKNVQ4TAugEVehf0PNs0D%2B5e61jGToR8VaYsTEKId4gQUV5jTBK%2Fhu7wtMZqzoFntw1XptKOFvWPpXeK2zn3wNg5QJRtBfM1zv8f4KQXDovbP5QlDsEYLSs9Dl6FFuh0h403vI6EFO69wYFxjFT5GWprw1gjTJEok9m5LJrotQd&X-Amz-Signature=e0fa35f4d0d8ae2eb948d1424e846de3bb06cc2c3ec6a650ea42ba6ca2364986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
