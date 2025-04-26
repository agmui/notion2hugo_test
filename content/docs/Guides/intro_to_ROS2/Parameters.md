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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FTJTFN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnDyxIoya8InZeB24h5mfwjSDObkGWFbdALIRo3z%2F7vAiEAzUpeOhzwcwOXC4YJryv3%2FCH%2BYppI0wVgqmaw08xXuu0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDB6%2B40p3%2BOp7ewEXOircA0thw0ZMjAs8%2F7amO0O7MBum4m9hSe92K96NEoa1cCR829QvqSJQHZgm6Rc%2F0R%2F%2BPlsQuGM5Xz2S12MAq2%2BTjWVbkD3pneWlGzl7RIThxuJrp4rB7Pynq8JiN4BZOBywsiJiyS24qZLZEfinHAoDQgBi1PpJOvPZFeCO33GHSWpCpKn%2Fx9yMVWrXocm5CIdeFIOV1MFHOqEWuZRCzJNdqTRH3ZttuKSP8a0EkvCHWwAErBSSaNi%2BJuKj1nYR8Fu0bwrJSTXCfAedi4gICXrn8hWtlaVM3KiIqfxYH9iIMSDJmHD4oRFEYfvHwny%2FEySXe2xuuWZOSO%2BY%2BdtQrs9YLSi%2FkupRUzkveRh34%2Bi73sDmwp5oIbcxRY47BZBszr8zhdr7%2FqmPSSKUKbRbEEBO9UJr3iHwsuQM%2BmDlMrPhEpxqQgWOhqVAcJcHTNPw%2FZexH2441MnnnEOEfa0%2BSKBZpb%2Fks6q4H4cOFvi%2F7Xe08b3A8xDVOFIzcP%2BJEJ9winpNGhuHJGXpIycvYj4MDKuX4O9dmBYJqZkiXqTqkF1%2FIhWBWmFzW24%2ByBNSljoi%2Bwbtm8OwFbEf%2Ba7pPsRWWAKx3l%2BR4HrwjWbMB%2F5uIO8L2RmR5I7rsm8ECnqKTzFCMJaptMAGOqUBx0yQ7Yn3MNPe2aG%2BrzAI3i3Z2EYjg2VZRHlalwcoNx5oJGgdTgEWuf50I%2BCEH3q1jdmN3SS9LCwNJZyAT%2F59z6wxVPT93vllrKzLs2eSJahgZl%2FVklXTRNfYQK5G961Jsci704FN9FQ5gZOLQIToP63mONJySFSlDSRd%2BflqZFnPInzWiY0qe08F4zU8y3f%2B2KVdtCcQI3pzECvyrHXT8GFSpSQ4&X-Amz-Signature=7a588e0925087335e7018a4f0b8d8777f6997e0a2c865bd465a929a0a3bdd103&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
