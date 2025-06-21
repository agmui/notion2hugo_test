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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4GKDBR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHIn2qseugL%2BPpCcSvFEgE7MFakv28YAcUtHvuitAj0AiEA85zhxmg3zVe9%2FrBo0ICZZNuel6CcwG2j2yDWGRDpiOkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGrSR5sTgFKLhh5teSrcA%2FBWjDlzx5%2FLY53Ba53cTQmOz%2BvGjdacZvEik1gWVrDQX22C7krutv4ZPwb7XTCir%2FfXsMU0F8AzFmckNbjBa%2Fw6kJ%2FAefWjXmNhFL4Z0gXZM%2Bp%2BQ94z2PywnKJs29XX%2Bx0noQpL1AlPH8l6LfxZdRz%2BE56wcK1OP1i9InzJnjw60lkCe7i9hWAk8dpQ1tfoiND7XI%2F9Jw4L%2BfLdhuODWGWF9sBq2Oyv5fFiWH6SMCioz02j1y6n%2B1bd%2F8VXPvubRS6yQIWgj7WCUGg%2FsXfPpdfi68UUkycrtegzkWE%2FJu7Xi8U4qCQXTzH7aEU3z2OtuIH1GxZg%2FmZzfx8p0VDwNqExyuDMC5ddS5CxRwVsaZJIGdRgLwxiLZQriALju8p34TbOztY3V4NCIgFOzcj1uR%2FlPVOk3MNDkyESkVTq2cd1X46nzbiXUkdO%2BZ1ndl0OSxurfZkuE8%2F1YP4cEFHLHKFf1Vj4SBjY1ss964%2F9pe%2FK8zG4m0RyjHMxAT%2BXzccxzWG%2Fam0jCFm2DYL5nOB%2FZ7wFSJiX%2FhLFzDF1LDBeb38tStXCWUCuAGpv27ZvVaNVmrn4ZO9U3GkvDebY0c9otHG4dlQsoPKmT%2BuOgDXfu7ZJZgWaqrNvvSfWgeRiMN3X18IGOqUBprG9ypdnCb6xYPoYOy8O191f1dw6XuQs7SElqYMi5umJdrc0noYPLDNYptK8EZk4IZiDHFMrfIgchWTQAw7n4IL%2BSNLxyV0HLrij78Avbgt%2F4Lzi4f3OGVFH9rRbNBJ4uP8sBWZkCfSAqcKE1h5AtLrn%2BRwMMXHWhr0V31jvsJgfJ2UvJ7mQLH1U2aVT%2FvZ6crA9%2F7ooBYLUKAxlNuGdrgv5r7mX&X-Amz-Signature=330d94f2fdc35a968b0b29a5438a84a75e5d3319f6b8abeb302dedbbfe602916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
