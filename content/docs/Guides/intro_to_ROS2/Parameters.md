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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63IY6BZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIH01IE11OOzUfLLKT2JY6OqCklR2s7PpRB2W2t6slK8lAiEA7LYczoJTP6NodeWQsIocTTVj29f6DEMFrgwPD7YWqE8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp6MPT%2Bap%2BwA6QR%2FCrcA7PsSqnVRbjwl68n11jREPc4Ge6cgX4%2FyEoY0Z7J3god7v6fInnQN30eMtkcCh4uh%2F1%2FEmE7GladtTGMVni%2BnqCREp1PsgpykLuJqhTs%2BS8%2F45%2BLaIU8dfku4HpfVCtzmUtstQeeOpbCw9hHI7%2FbHRif04nF8o3VHp7Qxg70XNiBnCsK8XuyRP%2FJ91LHRBKZDPvmpQIlQ0CLhqNj1LX3OEQjXeGUHw8H%2BogZetVILWv1McGgnUD05DZRHtnF%2BxhZ0igqrcJYyRM9D%2FWCFhSbzuzqcJ6cCycs95%2Bg9CJdDstttnrWP7WhotjNRPqM4kS3EQjqyEJVjvmN39SoK4jMAh4uf0EmGh%2FLpuDIN2biMgUmqm3mqwNNryRpsMFjQs2sd%2BnaqDAmrkq9YcFdF56Rva7WVQlOHO6DSMt5HvRfgUSPuqGRqYiseNxSF5URitFsP4DvL9YpyxM1kEtW3ThfkfoLbO9xenSKSVMu2VecwMbuPMyN%2BSq5ui%2BaRdUkyacNzbGgs5f5TU2XWW320%2Bed3MXr%2BE6rQtYDlYq%2Fov7l8BpNvYdOamaRy9DDwt%2FujFJvWw4l0NUwTHuV70h4CjCoquTHbxWcCaq3AR4pPMdxs0HlrwJWxh%2FuqNudf16OMMT9mL0GOqUBNG2Ha4MMH59K7GBHFB2LUArUhZBZ2f8AXagpvHqN%2FXkKHe%2FGvOgZFulHebqT8gwHhM1eyx1bpEQnWNX09jKFnsUBcAUhj%2FHdn9lKbLvjxlbbJmCSHWSe%2FsB8V18Uo5HlnC2%2Fjt7zzdHi%2BJOzP6mefdn0HOjwWL%2B%2Bm%2BvnmPI57oR2N%2FN0BGOTVbF19hIT1Vfg1Kku5xggI9KduNzqLK5N%2FJUohuWb&X-Amz-Signature=f6d1a1e1adeec09e7411cf7cd0fd9f1dd68bfade5d50b66d39c7ae59634fc6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
