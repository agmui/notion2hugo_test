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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ7XQS5%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjZu56w9%2BcQLfdnUHOP0UPzjOE81BVrQBsodAhIgUNgAiEAnKSZpaGEMkF7If3D%2BYFOesWYQsp33nBl7jmMPyvipvIqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6%2FYS5obRf9NcJsUCrcA3AMZtwsGF3Ef69L%2BlAmiDuxJssXAQGpL7aB8%2FyVe%2BZlsjZhEt0y58WL0k6RXbguh9r0OF9DHLDq%2FwHR%2BcUOyfrnbpk%2Bjj9B1ufOrHpxQohMTuB%2BM4WsivZ%2FTKum7ua4o7ueNHFdKJJy5b3eXwp4G30qRsMZ7nUKoEKvQwL9S%2Fp7QFkI0jA%2BHHLC%2F7YePEkc%2BViD0NZKyQZ5Nwd4XSElKNWGo8MNcVH9%2FFsVW1VVYsZNfaYEGSHHxwNQButxyjk0sVTGAG6omA6zFT%2BLWkKt8ns8CLF7foElDvH5pjYXV2RmpTbjM2%2F1vSM%2FsoR6SuHROASxueKQasmx1fdFAmGaltnXB7tnMKrAwGK3ZlCzVcRQYMer0j4%2F%2BWasMchG7p2hdpL2BIlLemf6FLgq%2FmIokJLtYaAli%2FVAqDamDIjy9P%2Bcc9JoNT45ZmB%2FKQnbPqi4a%2F84zVLpZjFMlsoYYlLeUAVzG0j40%2Fmq%2FoAZI08JGUEP3%2BNPJrXkTynZQ3wOt7%2BQ1PkEuK7XAnMKUdipBlct16yBxajA5hP86%2Fjce0vHTT0de%2FG2uUel3WVY4zL%2BW0%2FWRHkciFh1YV1xWXWMmWX1SgML4Rt6JCNKPTYE7dPX7VENUSq40tJGBX%2Bd2g7xMN%2FN2cIGOqUBtn4SwDjPBVjYVgoZA6zfQrOv2ZR842%2Bcd1eRvwBGcxoklnBTqF91MqclHG%2FU%2F8AT5PzVxb1hAzRFGrYtfRXr2w6%2Bx9Jn%2FKewxZVjY0hu%2B6xB5dwcjlCO8aVwpfu0ksDYR95zOR5lSf801Hfxl85se6LwPA4b25us2KTQ0DOrxCpVllfur%2BeR94mymXnEoCeE0aRPNZ7Vswwgv%2Bnh%2BBp1QJ6j44%2F8&X-Amz-Signature=03d7a7acfba6e6759167c12ea63b086a4d206720728eea545a9515673ed91b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
