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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE5QNQ26%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGjCFJPYSpA0GC4uOq%2B5FCDIMvooLRXqZG8jaE5Es8ghAiEA95rRGRtouhIHWpOLTS0x3qi4abVF8jFj3QzH0tsSkuYq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLtnC0CWNATOpwTQeircA617aJQfJQSS94jTSUjHsJCRsv8L9OxLTST91%2FNf5BRLpVTS3fNM%2FQ6ItD8qR4KX3X%2BfwXjUdGyt7NqF57fHBVfIZ0VeAqJUZrq9dyEv4cavoQkF0TZuUxxdAkL9o0dra96nUPlviyENB4pRBncib%2B%2BpsizsFlurb2O1F%2BWrKaJfMg%2FNTvY9r6lSBlHcvmNwb4cbULFl8OqP3WTjCP3ybGulAb6cmdP2YVQTuddHgfov2wRDG8rC8dx63%2Fzt69W%2BtJAiNoeqECLb91MXAL63c5JPGu7nO7clxupWlC8KVLS8Lx4qvKQKLEJAyQZL7cF9iUADcTBRPEJX3q9fYcVwofgyoIi42Y0yvSZGNlybXGV75n42buaPprCXyLjavwRKVhZEIxauWUlAEftHWETuQ3UO8LtJjoKJj8bz7Pj2oONMELzyZS7PbY1vPeWvlqcXkAwmBVwqynw5AKlFmu0t%2BGZhssrAOiUWV%2BWfgGiPIUEYf3StggBBSCQejrbkYvypglmXdq%2F2N5ct1AkUOa41bN4PFqdKTuD2MAcwMDoSffm3y%2B5QgUmU8%2Bzp7%2FTeyu9iGEjG5e1gvHVgkoOYiPEdRwhfTJsnysVRPrUbiZ3a%2FEgnrH4vpHVSU%2FgUgp%2BkMICt9b0GOqUB9uObp4sWtgqGJP%2FTxtjGmoch7UeMIlTb7nZLwKWNBx48dSlzuhOZDjEpHaZuPWLAZDVNgdXHwxy%2Bdkv117zW5b3Sc%2BDvWAe6OGrnX5qEHI%2F4UGAX%2Bpn9jZSVTW2oF97J%2Fx5Mvfz4CVTF%2Fgb3OIEJ8X%2FCXMlBU%2BlY%2B%2F5lozzUXWeM572%2FpmcbXQpEwSnoY94G3rcJQn9c%2BxNef%2FtXg%2BJwKmQkYSpI&X-Amz-Signature=4ce66906d0d25e60989fd400de3e5c53d346a153983c1435b48724e32720a72f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
