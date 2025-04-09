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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHRT5TI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIH%2BIvK0tcEknddQI72l92EmmPSOIDYa8I4Bpt%2BQbvNnIAiEAhyJj0sFKJdykKYj1ZntwgwxiXBp%2FTKiH9619%2B5oPsxgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOshzim5Ebyn5PHIUircA14GoqR%2BilSl8SiqtAHvWjAIRhN6gDaOGi51y%2F1JaVMY2mn3dhfWMG3hWanBtz7bJDCX5bl8yHM3Cj6W1mBmA6slNDmotxPePtJ%2BGgOnj%2BO6%2FXjBUIVDblvlvg2DK5yZ%2BpArNB0ctfoDI4u%2BN%2FK%2Bvda8hVu7qfcqDX%2BHxhNpbGQ8Lqj8PAl7d9W5CBxgf9zQL6rytJ3DuMWPfUj1rOgpWxkPKwn6%2BFSbWPpv79e3et9WK%2F33Rcy8afvdKgLtYtxEJAsr0svZqTIvYgaTnO%2BIBQwuNL0ut51QsFsth40lt2SghMp0ZNt1DcbfA9ItLpPVLjikYjc47KHX1K4QcMiL%2FHHc1oizvdvSAFr%2BOOQ1GoLbB%2B19QoPiS7Z4ieDqvkLI2ka%2FEETkTOvy%2FfJgu76n7t%2B4gmuyJSv0z49N4B5ckxYLjfFobT5HnI9%2FjJoL5ZWmam0AUW29FMIsPgmNxUTO0DwzS6y4bxP6VkgTC93cWegINLqTYJaiRc8pQDKvGfAPNYM4VwWkj9Pk5mBZzIIJje3T2Bb8UVTLm9NymoYIc4cudnxgAqlWBiWuOdjwgZJYyBWuHF4wRebsw8i0q%2FEa14k9WFzJJ2E5EK9gqS1XN1Ie6NK9QQBGuVBcXepoMN%2Ba2L8GOqUBZLDyaouaYtZAeDSdwqcC21H9FsYI%2FXaLcZ5lq30CobtEWqkPAj9KEFo%2Fj%2BK%2B53GCGksgiQ0RzqF7triAficaclHhTLtoaFgYdRL0pBkj7Yc03n2ka0JwC31BLSE5yk1lRQ6SY0gWM8HNi0PAIYqoVSpFg7NTcy0h4zpUlRjlHOe6lhz6tWTTALiQ23rCoD8aMutEJEb3UQxJNx5LxDZbV944LNrM&X-Amz-Signature=b848dc0df135683f8cb133bbc06aa12383dc2e430dcad280990a07f41c2f62b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
