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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVEDF6E%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpjhxrKdHzpwJiCQRxUciaNII3wUKlvzipheDZKMWIQwIgERpyBG9zdYakV%2Fi5gp23j8N09noKEi8cSt%2BQxVWb8xoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FkmUL3U5SNmHQ5TSrcA9JgZ5RTkXB78MmBI8IBbB8t8zT1XTh8ebLrcrmHeIJtXOCUE7dnc0ILX6BfKytuJNZ3ZiCSN681c8hOQxQcWgRNe%2BZq1CCpZWUPqHhjEXV3RR4amAqWJW0KGHSI0hMO0noPg8R3J5pFF9CUpqX63T8r2pfEIHoUfekw3cayMBHgBXCdUFhSyAwEZsXk8YCU6o7LDV48nEW4FJQJ46cyTgn%2BOnrXqFWD4mjRG%2Fz8N9%2Fm564m9hOyW95GeeoC1Z9%2BeQ%2F%2BvKBRAMeB3hAvRiUq7Sq6OEnkKihCzfBhb%2FLFONbzpwuoN4h%2FRn%2Fx1OlHr5IeaWm3NSVrgQoG5R1Fqg2JgGx97JznB%2Bp7aMmwn12SXA%2BuAIPslRvWkZhPKdQtwo3UQOa%2Fhs0ijyC3EczZ2deeSrxPhvEZq9cpp8A1QletXxYNfWP%2Bn25fqUSu%2BaSDMRc5SEdStKfSvzUvub9xQRhUctTwSL0QdaC43fMOMXSEHOKpx%2F%2BqBQrEi%2BuNGU5i5j57mXYWtlpPRWqg8NC8%2B4jbW2vcDbcRUqN5eysmMVSTaH%2Ffsr6MmpHFsq3jYFL7%2FeEG3HLxL94xCot6UHz%2BTTcbED9fudEzG21DEH6MTOHlf5L6Bsq0JxBJAfOFMhHAMLiIosIGOqUBlaRbK%2BJv1NVB%2Bl%2BhatUZVXoyiGgFvJQ2VR%2B7VGHDonBa%2Fb5k5RymVw6PEeP58%2BsrLtMNrpG7AzyP7yda%2B1cPdCMAGdJ%2FLMD7SylcCn574nvP1bngzUanEYix9nJCWY9iJEDoKaeE5P3ITLjA2PEbQcBFVOb3se2YElCjGmlBGm9cjL4F%2BIEnJBblJ08tVDQJ7pA6SWNwIMp1f%2B5IIhdkSGdk%2Bd73&X-Amz-Signature=cbabb115f0087f8606f2d3db7d2da891939d82b3a8dc5b2d4aba2c94b835d521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
