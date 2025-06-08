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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUL2PTGS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEelzV%2FCUNzf0BNTJhLYvjbXBZFH4Xo1ErNA%2F6tSQ4BhAiEAzxlKXgjik7gIlUPVEoN44vb0HvOCICtIalx0%2F9SyOK4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7UpDWQkcuC%2Brp%2BMCrcA3CyKgyFvGmlZ9OpcLlcy3jWYej7XbfZa2htgfqWCPGGnr15bGu6PkmBDi8fw%2B%2F88WyaZoW7xpr5N73onXjZrde1D71LMmJAgYb1swDCq4Wipz3%2BjF%2Fg0bPamzR%2FpLyWiD1GL7NK%2BxeDm7Em1rAv14AbIaQP7ToBskLbH9cAtwyQGbAocXcnxi7JWmel5HM%2FIhupX4IFyzX6A7RCZ%2BQlKnKuDl6j6Cz59mi2qo%2FaVVToCJdtPUIF0%2BR3XffNqqhIHnfE%2BmCkJuuh%2FfWunf51FpBHcy50vQQnarenT32MarqL7EKdLfp051q2UgKO1xQJlkHZ0ac1mWR8Lp%2B%2BSZ7gs3MaAJSWc5schgRWiL8gYcDXMhhIbVjkjfpAmElE6KCmfNaIlzrH05jjILUCz2ZuDfVuzUByObSes35WRAJYmaKvdfGyzjcxO3VYNJTcn9xRBoRdGMy%2F1GneI7A%2BSsfHLsjKqQiKoVOC2rrqb10kpsDaUDljHFvif0S5HAXJryRze%2B%2FxystBJZHSVeWIJJ%2FGLIYPCUZutJqDyFj3xM15QMcwKML3Bu8J%2B2CopldAyWZkQ%2F82HpCv1%2F1AZZWGma4DFC8aJi3rdLYvmMWUsUpfy%2F8sP%2Bm69Y3nTrkoqdNOMLOmlcIGOqUBXqyp3nj9s0sHMHH8%2BZN4JYzPGHSwEwc%2BA%2FDMW%2Bqx0fB607f6JdOlVMY9OsG1U7abL0nYHV9C23lbcBLrlIWwu1DexCVQlf3xMyHst7ijXRt%2BmkSICqbS0ExP1NE7EUG7kwAfNqdNu1lnzgW8ykgconRRvYDpbA6qn9N0TnlZn6wjR03vq%2B3R4oTCAtTpgU%2Fo7LDPVHgw1IiyW6TCDaLc4KAYhJN9&X-Amz-Signature=b9302f585ae39148f3a0a622896dd95299ff51d37a75847b39b5b5c6cae20dba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
