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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJM4ZHBR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDiqKCqePtDwn2QjArknsrbAyHQz3oc07LX62ld7QgypQIgM2Ihw1cVygsqe1JPwcrEMYEMuwFAVPdpm3oy%2FWPTvp4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErAv6pp00afjLDcYSrcA1AMpFwoVhcXHirMqkigfZzsz2f%2F1M3E7eKoDdu7O2HZg3dXd%2BCiv2UFcbua6iXtXait7zfebUHWd%2FeB%2Bny3XNkzKlwVKaROpj8SIOT4NDfoeZHBSuAYiNRwt%2FbmsD1rIEjVtOHPcUVKrrgJu9pnBf9w%2F3q3%2FVPEh9yd6sct6HgbgMCaTTAR%2B%2FnI7bVMW9nRqnqX%2BtkBk5krX1BMwzAbQO%2B3PF9GL1FMSXHZojNJYLIiPz0FJZUiu7xSOR0f7%2BpBSMEMgo8jme4X1yNrtQb%2FBKbYcb7TY%2Fd8WkLnSfU%2BNN1FEoD9li%2BMtwIVMnll6jW0ssrRfqWA%2BMAjBAMW1IOzpfz%2FBB8NG%2B7OYDmjCMgjv2ozCXIOY2Sj9bllZcLsi9YXBJpd18b5NkRYuhGFyAZ%2Fm29If6%2Br1tvr%2BeNgpCSvdndI1hJRTH947E6AhyO8HyWK17pL73AwqKGTg%2BKxjSONbZd2SAUYTXDZPYQsO8Od6pFz8qEXKWLL6IiCj9WuJmzTO%2FwbUDaln0fnN%2BmEHt2HnwHCs1s2uBQjepymIs9gGgwM92Ch5DtT8Itw0FI84S4VvJsbCqU4PqiD%2FCWjvydqYmmijT3fTkEUzGZ%2F6xxLmU87GBuMtr%2Fw%2B97z3rSzMO%2Bhqr8GOqUBgu6eh1%2BtkA1tvqGSbH7CjHLv66eUmFVfTdak6XfbIwpAl1d3oK%2FvVGhewxg9OLUJvWBuThSytrWt0PD4icC3Yk0mVfwUIMp5TFDlP8r4Sf5zanq%2B8FOSu0fZOUvcySDgnE6WU38rRM%2BvcaMolJ8KbkzAp%2FVmLZJFCpSlPHNmM9iEUxwhyq%2FhgAcsG%2B4Rri%2BhwG%2BZHglgCpHogpyeUcLNDCMSiJ0Z&X-Amz-Signature=61614d83d8925c0f9d90a197c401c46f6b90bb34494f6808d64208ee8d4444f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
