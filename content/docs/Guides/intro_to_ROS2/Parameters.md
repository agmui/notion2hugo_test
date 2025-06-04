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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQ4QJTB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD%2BiUrRm2dKofPGBr0z2BTXzgB7c%2F3MOE8dQG%2FOzNRC9QIgC4nYq8hE9oKU2%2BWblMFJj%2FdTOoMJyccGGyUyZzya960q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIhyZ%2Fpek%2FwzJk9TkircAwzCm6ZcXiHxuG9mu8yMVifRv3GoU9XSCfoXtK8a%2B2YYXixfa76ae%2BmtGcVfOi7fMr3Rzel9vKCvMRP%2FqsMytPo3eARydl3Fw%2FhmpUS16R313UuDUqSnIWChmj4YhIIV7LOplu48JRJTRUIobCqca1VLLXb1q0cLf2nvP2i3qQsa3pWxYm6D9tNd3mDe0FVyunF3PU9Oy6e0CfNS71Ltkndux4Cj6HG1SFC525lkE2K2OCDx%2F4B2efiTxMAwzxevPJ3ZOzy9F7gY8tcOyt02lGk2VeG9n%2BRnJw5Gpm6%2FwNj1cxLuh%2FEmtnN39jGuKjhlAsbYvnHrmAP7A243%2B1GMVmWqFodJXsfQo1pB9CfqRXiqrO7PN722Jy2PqTtnFPIcktMe%2B6O9GeKWxxMPxbuLM8dCuX9HsjLcc5IJKixaQTINEUJjIQFqmoikxBrnqcn5yZg7Xawo2tpNzByC%2F4mtAXTcVMBt%2FNrHgOlgInI7Tuo7Q%2FvLBos4QG74LVoxJBLN%2Ft8JQ3DHqTk%2FY%2FxOcDRwWa1LyNX9pbytNvPQDgQALPRIq9ZpmPgRHqq6MEIarnNEZzsNCpbsEsiottOZuFoLCR8u4LGLqfx6ZND8Ywxvv4LEJvJ7iP27ctsVzf84MOuI%2F8EGOqUBelE4Ywqv2k6%2BoArfPOav7r6GpwMEXonz0rS72vnaWeEvYlTfMTMh60RvvYUSWwi2gcnM9yjNZUW4KSyd9Dc%2BULyeZBmF%2FNzPbn8exwecr7WeyddlyiI1EoSt5vVQgXSJj8aAMxojH9Azl9HI%2Fee7EV7V7WriEhBOh3GiX9R0hK6rKKMYL2qQbUSDP4iT%2Ft7whtxcqHGGf2%2BEdaDi%2FAVrbDq0Ne8k&X-Amz-Signature=f632ffea2d34120cbec62433f8c851a966c77f7dc1757385d6c5320122178767&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
