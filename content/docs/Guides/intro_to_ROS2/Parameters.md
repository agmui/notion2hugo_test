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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCI5HDP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCM5njJXu2BA%2Bowqlfb0Nip4pb6XE169cB%2Fe47j8DPwBQIgemztFbxgZVNRp6jz3cVW3v6bzLFspePkR6CrepEAwhUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPdrLSz%2FmwpHA4pCgCrcA%2BSQX63VV1BfU%2BJuOQEL3My42wSvNnRDDz6JEhTQ4fxNomzSNG5e0go7RpD6MtQOQgW%2BtLFyyvAGSX0vYF1YqLpb55Kng6Oy1UgOpzo3FfgzaOJA73MGZed4iyiVjtwFeqLV1HLzLqMkNKWIEGb8h4DAFXHZzPQAW3MVkmnJB4JLIaKQ%2B%2FJTrVNyHvgfB9tgNFAaJ8EmMf3b%2BLppNBlEXsK%2FhmWIpKs%2FHKrqmpfFh4cICFO2l4MyrUj4ZOsUNVFl1D9cU70e6xkNeXHcgTGc%2FbzC4kB%2FxnrIaUpzDOuZpAjQDhXnGcjkyuSdZGoeMgRsq0wJF7StCsqK6z08CFtHG5A8SVsn%2B1qgyJ%2BdLIjCg7Vh%2BDDwWEjUvB4unb7VXKbr7W9ADznjKA0oboOspK48TZ0kzmCa54PXGzj50RKkor9%2Fw5T0KEETPjxV4pub%2FoIaiN%2BpX6QyRNBJVbfTuM%2Bz%2Bma%2FQfACWQSR0Dav22vKLBbXFtzottcJDJ1M6kIMQhkUe2zg%2BFjW%2BHFYL4%2FFxZ1UfrX%2FRmLhYy8IwuV74KL0N%2Bbrdz1ZI87%2FGKoVVecVN7vNrqJiGUKtAbKso8D%2BDn1KbEIbH%2FIkfupcyxsecoVqrt3Rswk9TTucgLZmNptwMNOMr8MGOqUBw%2F4zPwdCAXhIiHSVVQa8grbilY8Ju4oCHvJXzqu3tl2aLDcf4lXIBgfS7mO9nUGaCKX%2Fkp6CzOGsfQaYCoJV8gQkDQ72vvggW0bvwWA9GH%2Bem%2BVeMHjiQvW3ZuYsaHEuRz%2FaOa82fELqqu9fr%2FnibhEh3LgP5sDDoujjPm7upLwFE0%2F6vFOc8PJtczrJmYOaRFOGSxmJjQhs%2FC64x8NLzYnkQ0HJ&X-Amz-Signature=da72e96637243010c8b80b04a4fea628d4bc3337bc301bad3ba6c905b273dc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
