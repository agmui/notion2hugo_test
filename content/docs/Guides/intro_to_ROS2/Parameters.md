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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIJ3PZHY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9otX%2FyEY5%2B7O3rOAZXHuvwu5Lcs52PODZYfmyubN0nAiEAwp2npoF11QjnKJ%2BOq2jwftzJASVeyZchGd3TCqRYaAoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiQeVy7Dbf56VabXyrcA9tWmOmtaCiGTxbXxSNsGhwu9NhDMnXotX8bUKi2zS3loNyasfXHtjrSl128VYvmUP8zWtKWM9J3ACMgmcvUhApbPz1hKGLFqaNuxtuAwjjY04XchA6r0FvODdnPRi4PhluWjhGLBTAMWkgIbuMvHu19kptUvlmh62qhRI04Q970AQs%2Fb0PgsSAJZSguOoiKNxdJPe6DoFX5TGv4plf2IXrsgP%2BOwG2fdD2Z4Tl%2BU%2F4vgxlB7urvM5kkrtB4SZJEVwp1fLfNQ900IxkG%2BoGHY56XPe2FyPVIMD3%2ByeRylfqSuRW5gVk8HjCk0EqJUrbbVu%2FKmG5xUkmBUahKXqdE4oUeZ734VkRYjkeANBr%2FQyjMi76uMMXl7ZMIw7%2B9nu1ZN1%2FoGzdglOnndp3hBx9F71NFl%2BsC2TNsCPSlqJI%2Fzkn5e7MmTPw1lB88aw2xTWVU0E%2BYh%2BQkvReGy5SnqtDUmuZKGnYTbKQFZKpHP4%2BZ05lok7FFP%2BCvLxLE83Psr6IrbPOTvy6nW16H6FEUpkL04chgooa1qoQAK5398ha8ctyzrc6uTunnTgmO0m3WzE6Kaq9AMtbcGZoBUBruRAX2CJXyBIgpDKZ3gPqbkl80EmOlfFr%2B3O0clg43%2B8KFMIbO9bwGOqUBNV0R51ZdUvrDVHb0KaHqcmPTSNX8Nzq9BEuL%2BmisSzs4o3cJ95t5PpAHLcjC4efbFoH5eMNFbcDrA%2B1Tv%2Bg9sxI9qDAAEXlezmbHfAukc6rFsDFGTmTmnTeptuF9ZwVRwCCMr80hqNaCpUvgRe80rPEuF%2BiAyAa2kMwbRUJiPZeFsORzwuJxLluzGzWp9A1VEMKBhTYDQhLJIpQIQw8jp4GYqE8l&X-Amz-Signature=ecbb81de037272348060cf20434ab6ceacb9ce197d7ddf491ed48002f39715fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
