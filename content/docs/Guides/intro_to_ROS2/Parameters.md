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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK67GQQF%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFxEwGSdCe8UaoCQyau9dwUm%2BexyvjaD2aFdNyDfUCVCAiEA4z%2BLklSATY5YgAdwT3OcmI79uP2E54SeW8Gr2aCmgvQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFKWLMi%2Fmoqqm10eircAxps3r%2FHRr5yjpoSvZVTLLbZnqMkcd5MTW%2FK%2FPzpPnKJNGoB%2Fq4VSH2FA4N8dTTqK3ouCY1MtCX2mhGz9YQ1U29yfO4PEjt6GEZxHTKQYtg6Mtp0HihY45YT8lJhju848pJTPONhut4Sq7Z%2F7WLZYm2DnqF0g6b4TQoeAyYqZAUpYrpWDYbSzd22noJ%2BnCqXYLfvqoHy8AK6MuhGc7xOSALqR4dsze8mbT1mMjIZW4P344HuklXBcBvrKFYAhk%2B4TZzHFUo7SGuK33BC562BZ1y2mH0XG4cte9fvsBWljn3h78L%2BuyGA5jj0o%2FVtRleu333p9NDRy1CohYlvt%2FOh80foNd%2BGTTgYSU2DIsNsrwLH7QtSp0OCapklF3AWuxIHRR3XVGGIw1NrcV1DWA2UI25Z3dTwSX916kociupdvxvBmYFzkvDVRjIXr3vO5WTXSxB3c6c83%2FUEBt%2FHaL7Rgh2Tehk5tCHAwY%2FvTo0u7flCl9w8wVGABlEHPZqButP8LuVxRXLOriZQ5YylaF7m%2F0nDa78frdiKKQkab6lWitoNyDd1Pb9leoJ1VMRpwHF3X5bpDIZ8KYemQT0dRfYfSkZvXXBJaoIHwseUOYZexy9NXmW4exfFvnKlmo27MLG1%2BdMGOqUBOGNhPnLnpOHsONNEb5jEXBgoum%2Byg4Uzmw6BvwdYyouXLVsNSrvjwpxIZ4PknSN66XeJ9txlfCfoVheF0ttzYipEpvXJqKc%2B%2BXco16DnNfJgQv4afuLug%2B62q7P80A1p8VhiiONUZBoHUkCAwoIjT1dNc%2BHxJYcgBlpbWmZeSR1CxavcUZh%2FyKEhhec0I%2FlsS1xueMaVZ7thez3XNGXR6EnYzIY5&X-Amz-Signature=810f77bb44be24d3634926cd373d23f7c9ec6bf5572368c5327a52b0ef9c2595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
