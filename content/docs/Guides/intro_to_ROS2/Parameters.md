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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSCNQ7W%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf3bl33Rn%2BQO88EFfSdibEFv5nKRBMSYuZeDJ%2BwejNDAiEA9GyLfx183SfOXgXljAdMl8%2BOcnuMFmGdLSQp1fBojOAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ%2FvrYYVvTFDujq0ircA9Q4GXmxV8LbNY6UlqRsOg0K2LekRILn4b%2F%2FVAtmVZlmpxziY7geU9szF0Dm%2B%2FK3O5ut%2F6Hh68cx3jBWlZ4mW7zIxvbXGySaX76gKnSiJFrugBiGc242wjPIW9jYk0mTTVLF8a70Z3P3KuP6tBuXxsHz%2BZE9UTIzCNtyEjrjN095%2BAfa9Y%2FaGEFWknnYlVQDjsCQX89IdWEz74oj46tVoKjV24op%2BtKMmKgTUDosU8t%2F6%2Fu4yKjqxUEUK5fONYPFo%2FjzOoh3OcRKkUwiBCDwBIf2jieGHchdyw7mkvqrr0tQBQmhTuk2UhVHigM%2BLTbVQMBhA5aHBoq9djg8y%2B%2BpMvVVlsYWAId8hFmYt%2F%2BhQ8xcB2jjK2tOceuQWNw6zxwyufoq4OrUokbZr%2B7ntv8H8VivZ%2BtamsBszlVfrbEJ53Q8vDBJexYt4hPf2hxEgJBmrlgRaS0XIbU%2BRvXFAhbFyNpqjan7DYeCqSlhJNXMnpGRIbwH%2BBr3%2BwfMVeyNLQMTz5FcajvreOGT0GTLdKaPkvJNK6BQl7NT8w%2BAWU9Qr6Lsw5nWJLiQvT6h6ih6fhDue665WLxmsZHeQ03dTbehvkfNXjyugknDKFrJgqQzvu0dD5HQHwi92%2FIa4sOQMMKpvcMGOqUBG4EfANe8bNAld4IewOcfVkKbNHlRYk2TUt2nmqE5Od6wzIIuFtItDwuakPMBO8Mubl2WMhdPZm05w4bz3xxGiace%2FQMJJGvDMtqE3GhYN7bUAjGgjmbFojFxzQ1eVygvyV2XXGSx3d63xxp8BcyDBztkxvLBV7wo87bFx93Jel%2Bk%2FHUavUDKr4OMDBqLNXq267falEKmhpBTya%2BsekUUBMl0uTV5&X-Amz-Signature=75b7215f2dcab69a5588731246a0ee5fd8e56d126e09abc53fc3bf27687bb8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
