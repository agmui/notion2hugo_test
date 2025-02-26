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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP3FL6A%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGHlVCf4OR11OekoK1YdZksDtirQd%2FgzbGqBI%2Fvw4KQEAiEAmahZMoCce8bQo73XGsETOK8AFlZO1bhiUg4dv%2BCkFJQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDENmMa4pXzGUi4JokyrcA4Sp%2BeNGDkk0v2FvFwutBYpbMOkvl3u%2F7Rerh4RGX7%2F9VM1DaHc8%2FAwvYSJbslHF9QO%2Bx92VPAjTuH%2Fqi6aOf4Ml%2FrdLHWCNqHgg%2BSHaP01xqkXdMZ35%2BrgkPns8%2B8WNuAU7m6D4eKPRtY%2FEBfoxG%2BPJtBAlVkDlFWWLOELbgAiF4HJgQUE4QAV6O3SIxCe1m7ru2pJbLIrELO5J7ypa%2BG2s39ZiHzWwhQgXKP9UC9JStgvxxde%2FMaEzmkEW%2Fe7J%2FjGitmyOG%2Fq5Dfwsyi6WyEQVDBOaiQyIrJd9E%2BzbVa2UvATf6kqzsyOTMhAUbx%2BZUtoInNOWxzB9zJam9DkXAS6wvAI06VJAKz2%2F2%2FUxnUAX90PTX4kPdKVlm0iMuE8Ydd%2BCD4VVjWBk6tX%2B4RTg1K1DeJj%2FQnRDeOWF2yrBPTUPyKR5i9rJ6giQxT7a2DP9alx6%2BtK7h5fOsksUUJ7gw1Rl0Y2eki%2FWPYjKvTPex30ZHv1dzjVqDquUzCN1Qh1MeAtUnpL%2BWFKcNExKSZr7HxW3R5hGg04e315lDgT9cPksJekFWXDcnFPiQkwy2FhxIvO5ZXS4GbBwddZD5gsKVjw1PqiThofFRGQe6P4lav2VTpQOCMl2Lx7GLOXYMMu8%2Bb0GOqUBpj%2FfpfJizHcaiazC0nqeMalUCQgv7s5VUZAQB7kKiqttgHO2bQnrrhKJ8FlrMnLH3Lq7PiBQ%2FsYpJZPXjvf9AOZWSa49BjIU8bPf8OiDM445cBne%2B%2FvYMMrro9Bd9JtvETwSgJRXJUtrY75jhDZse%2Fg5h4qUwHpvLe9WIZhoWbbuDgFhWPpmBSaj%2FvBJbuNPHpXnkrIy7AHejJRjLVoV4RYJ2u%2Fc&X-Amz-Signature=8b6346b442105e8d0174ad393fbb56393f82f8ab40edc7d7356f5e9bdbf05f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
