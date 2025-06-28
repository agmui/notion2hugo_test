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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q42GRA54%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElLrlvaLD8gkLFMQlEBFTa3nQLRzbolpDRZ6HLrY3xFAiEA9C2qaSXPDeF%2B5DWYEi1%2BXvBFbkSsYaCigv5M9EvaU6UqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElYn0KxYcLmuV8voCrcAxqrdXk03puU6I9p3YH2cSYHasKnhZfNtXrjHOliPaUosqYsfgRYqAvUwiHSG724Q0XrKiShfcAIVrrKoaeKVIi7S8pTbQrIy7DnyooaXviwc0JyxCvPkJi8HBi7oJZCSoaxzFDiBN2iMcpeqEhj9X%2BGYoHsTbD5BlJwwJHVfEpmBP5jQ04rY3wJOcAyD%2FdMllcyYRm4VhJav9RY5Mi9Y2IAG2oLV7sxWcQOXm%2FKUpofhldothZRpgcu4MvBd2%2FS8CDadEsaje4CPj8i7%2B%2B5E8ZcgjbAq1DmXcw1ibhIM2Ci1I%2FV6qO7ybdJHpkWpLvo9aIihrw72r9j2vTxf%2FKHeL1qwJTVmzS9DSdS9qMekpT6jsr%2B%2BBNkLRUoQ98i0Nsx9Y8%2BCDHYXs%2FoTD0WUj8j6n1VfhJ69MTagx0QDec%2BZoGdsTQAA6c71j%2FJ2BY8GyoPNtyKioFUgr6eKzLHAMTRwcF%2BHULLXi%2F9iarQpmGDvULHNTKvfGVLT6dvtkpMwf9lpk%2BMLNvDq%2F3XurbSxYjozMmKyk%2FY6BqXGx1eh1noWaGyrtjgATwB7nOMKMGWtUcR7b7dO3HhQTB%2BcaZmz2a0%2Fmw%2B4Jq6886NQpnCLUzR5EfrdX5Wm5i%2BS0KP1go1MLWQ%2F8IGOqUBldhdRXK6pwHDmvUtSLMzwp40bbIOCDi1h8OAaHO3KkvEWG4ppiQghPlmpQDmFSnFoLncUcVDMyMhgKJoaxiQtb5nc7gEr%2FVW8G6hHyoVoYDH8g9MreiUPjrDeXEc4ZcslZpOPbX09s5yzPBuKvJAdY0bOT0l%2BDeTMQVSh%2FntSK3zRnBjcxzIoAaLb8qrJy7RC4LX9ldhpHjMX7dyxTu9pIS66Iho&X-Amz-Signature=1c03ec348049b989ef59b071cf67092ee390526c920050d9f618c87fb64b8c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
