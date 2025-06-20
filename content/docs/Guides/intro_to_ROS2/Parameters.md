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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XRCMEO7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxjIUTrXMt7eqWzvMjXLpV%2BCRnfk5%2BiTHgDiSs7xtq4QIgIgIjrY90StEeqirswSjQPzknNR%2BAI5J6E5%2BOFOi8ULUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BbiXjzXbOqvXWa2CrcA7idOVH%2FkenpudIheDIPcg1qysAl94OdQZMJ0GjTBgcgQQdGBPLDzAkooXlRQTmFqlfz59A1r%2FcdCtXXbF2BYvjq2IZzG45iCeOrzBCT468dmiXudXtk%2F07F1n1SWWArewZhTtWmMUhFRA6jr%2FiU53BeNrU8OsatHsVdUyUIynSRoa%2FIlDOxUviOLyHqpaLue13RdNF3LM%2Fd1YDCg8bVSlmGnhAFKNfYiKhtjt5DRgpfyM%2BholMysrxQIgcWsnSXJfhPSWiwgQ4c3%2B4HUFBmSWkkOkgzqOWPY%2BfYvsSiluw5PGwHb45peHiACBkMt4N9V%2F%2BTWdFKhQRlrjz8dXEif0ziRW1WKUuFsejBtvWbJRMHGsPy0HwuyzxOGDnY0sqP3MhWP0%2FVYbxT6laniOu4X0qJu0YuiNodNnxt3fB8xAkQHnl4CLyXfbdhaPhn2AxAeiPMiJ8LCY3gZQJqt5tKz0tsskCHYvjiwvrAc%2BMama0xb3vo3zaVHHeYuuoNvtXPOATH3xdI9ZNxjeYYsADA0BEJt0LHE3TNx%2Fa4hJB95ubViwfAlC46aw4z3mJuBBH5TPFJAshFWAXQiZ%2BfaKNrMF3QdQYtTqdR%2FeYwpmEwPVvMumrB3IClOS2%2FIbL7MLfx1MIGOqUBOYM5oOain3Qh5%2BE8oZGI4Dpv9NjNncOuzyQD1h1%2FPyfMxhqihaUgT5jbJxjkkaNL8RVyeGzko%2F9ojc32UpSEwQ6JzitEwQ9sKP5CGitjNKHr2ZCw7SylwBDPyDF3F5QEwRSu6t9GA9PrdzoHeRNlb%2FMb3APSACHiwi7qKjorWgRSqzdSgYGIK8DSxKHC%2F2ESFVl1NClanE%2BKjxxEyV1CFSeKHTZJ&X-Amz-Signature=751f2db9a39cf2a444d386642e2cb20b2702d91a8f66075b26eb659ca0eee305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
