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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDA7DNT6%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkY2%2FHQnHx1zAjQE4vqIybnvAWQ4KQfVJEdk3wUu9qQIgVOpGd%2BXRki5rPdXXTuZcZ0u%2FG%2BA9s5KVPxYYDIIjR9EqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwtcDXIx8MFn%2BB0qCrcAyv7okQAwUMB1dkMu16YoZe7YeDKeUTVog0qU6Jcp6Nse0P6Z9F7VhbcBiXk8xP9X8HbPVBy%2BnE0thLkjkPwbAjolrcpmPqUHssAyrqtZDrNJGhKsnx6iOyw9uEUmDyOORVXyzVWP1CKurmllwL%2BbGhdtHmPVU3NSJcH9gEr%2FRavCkfGlBBJ6wD0%2BQ44TKvEwb7O%2BkTsyRqUOBV7EEhcDPDJzbsOjPQFSOGSkYFAq0lPZwNU%2Ba4Q9yRbw4C6u2rbpXA6iO9NUVwtm45phJ%2BGQNCPh9zlkc7%2FLJYLRfCFJlYMMNPZ22AE40ebKcAydp%2FITDS0AZkihVwx6FSjqMFP2TgICMrudif970%2BEEzWFWQ1d4Hqzha2QGoDr6e1QKQ3y%2FSlqKpCsW%2Bz1yCuSg9%2BZ%2BLG1ti15NPAiym8zSy7vu%2BT8Hj2cEeiE9YeJarpxCJox4Rnl%2BoxtkBh13HFhBw3ELvbfmQ%2Bmo1w0%2Fzjx9QSgMsHz6y4WY3M0Bgh0%2BLBkPyZKLXGLM9Gkm7zEEnsNzeak6FNcNzB7r6XcXzByUXgBCC3VI%2FV7YHWuh74c8kmUwBShyA4ld55TpKOUse9aCznx3XHk7xn4QcIc9Uu6rIDb2KGUjtLpP%2FhAhLWXqEfyMIeGjsMGOqUBZuRRdJcyGJL92PgtbJnhDMtpoM6CrEHmeWpnuLm1csRd%2BR4rGUpW5Ajdhzw4kdb8B888pjWPoxk%2FlRLOqXwkNTD3WbpCeRYrwxM0XX5yk8bLErNEm%2BkzyO%2BV5VpJdlavY131iUNhU3ctzbsPPL7zEzGGBdwl4q79IKBypiqh%2F0BiwONlYwGsA7yP7kdhmwNX5p9Cl02Y9D5%2Fr80pIPvMnLpAETwQ&X-Amz-Signature=19af632b104bf058af5bb8a30003b76b30b7d603be068090d6cc1073e588fb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
