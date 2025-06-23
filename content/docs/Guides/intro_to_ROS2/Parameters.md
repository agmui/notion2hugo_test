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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQMJO3FD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHLlQMXjDxEf0K31LyjbjR3okwyjBG4qXNtyO7hm6u8nAiEApCy3%2BdelvkA7lPJOoIL2Yo3tZrEEbJKvxxabdV7Myc8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDA%2BJ7c0XWuDqxv%2FCCyrcAz6P85PFSuX4D2s0s3Qhx5Bf%2BTz01yTq%2BRC26qYrck0PaSc0yqlP%2BC%2FhsTO%2B4YebN4MBOPH3mkjwW%2FuUWCXl5TC7ipfCWvVu1%2F6eHAuqN%2Bek6ncuJla3lN6zUPoBalLlrTnnUe16Nwc%2FWFV3MDmtYB12ZHIhjk4i%2BXsUnHsFSOi5pOue8WuZcoBmec5UtwQ8OY3heGM4RfpzFyqqzeepGF1qBWm1YFNZHI6llvEecMZObAb2JBN%2FxBnTPLMV0cGnxZUfdgqtdh2tO7JLMyGpzzBGDv29h1YqVKvtV8UOGf97PKSW3sV22cHkoXeUKmkXoWrI%2FG58Jwf15FpjvOs0AGslihhjPYaK35bRsPzCGkZZYUQtV4EiEIBhlXYXQ8datw9ZCzCsabZHrVUciUynfEiogNkN2l2lqRcx%2BMyNnGk54sHCxb3r5LEeE6%2FxFZyYzcJX0MXgQYjRghay3knSEQSQLfIHeXtuMC1%2B5vPpCWOcNl%2BxVEUk0xU5%2BtEi8naDDRVPJLJKgCWEn6rX5MiS%2BMqpxtwqpK0zXSZPSHt4CoNMkD94OyNCQVymq%2F9FiEvALR%2BQ5w7BoMYQRUJGthcTMITa9XNGB81Ij7nR4L00fS68J0BoRjSWqlWzsqmjMK6q5sIGOqUB8zGtDWuF2LhNklKonPKx8xAnLPi8zu015gNfk5lo4qSULCBQjBG6W2s0X4pn%2FE%2F6kSA4VzHw%2FS7m9kfOwq9LOC8NGL6Dth8MPGNSic3RdAYA5yQsGlLZLQyZEnUeL7COXa6BtPYtfjDJHrW5WE4URZwKGFW2pD9rYCK%2F%2FYhRKxM1RaU1Fb%2FThh9Xq21eSB5cc%2FBM00MV2Kr3MP3dsicRCqGVKOYR&X-Amz-Signature=9de09a46a3a6080110f03dd92a9ceacfde8ea37e3903b4693283fc42f242e52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
