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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHZO56H%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCVQ63q%2BtVLj%2Fd6RGUl3x6tXKKgTeD5SP2x%2F%2FAmHTXYbgIhAKmy6A3k5tUZAxkeLZZDCKyXk86yRfHfVGiltSNE2FLVKv8DCD4QABoMNjM3NDIzMTgzODA1IgwF1RA8gxfzdR4fcY4q3ANFSSRp3G59%2FgpbA6Me%2FUr4Sq6v3x9oH2EJvkeqUenFuMHAuIFDJ%2FYtOmVI%2FxUL9kFEM9p%2Fr9j%2BsNMkdZNey2%2Blh5WK%2FyU0DF4HwUJp9QzV2k22aRFCj%2BwMI8NuApqHe0Nw7jq%2Fe8DlUHIRfQled86D5FgwYVkfWz00PhgRWiXedlp3ka%2FWe2SnjEvuXTBG%2FA0EimblXMDylbcOI6ABpf6XQibtqUHJfQRnwhr%2FlEo7kgtA%2Fx3SIn2cZ7lwuNNE31WArHMmdXUf8jUb63pYLzxZbU84z0NGbmoM4Ft1gjdVAMFu3EigN1eP3L181DXqtYsv5g26XbZmJML0pTW2C2%2BFrnOQY0r1pMOt5P1A1laNSBrP%2FGEKXtO03%2BIfJI4lcZ3KCjoOkhhqMYbtDX7O2zlDEhWpZLsPWGJx%2BFgmhDoTHP%2BUwX7Cl%2FKgcNzads1swSGdaFXGV9fTUIwJHUEalKTWRH5qxiVYafS7bsxR1K%2FiMkNTpVtcz0vWZkuziJno4moce145mYQpU6iSAWON6uzo5Zi4n1M9Q9LdADQULf6ETvNLHgfR4KPZUS72xwxNiRDBhwWuHb6vdLVZX7SN8QOx7%2BRsum%2Bym5gOvoVZTuylRn3E%2F6%2FOPvdk%2B6s%2FMDCDscC9BjqkAYhGJeXfhYob7%2BAP1rqfmRjJ2iDNT9PuIFc6VwIaPdBfThwC%2FkMF5w915KkD84ihn%2BTAscmw5CG3j8REBL0jEhYmrsbWM6KbRfzhNxaC6ZYZth7P5ov7JFbJdFWhuurBKVyDe0j13BkhAbO%2FoN0W%2B2Ok4q1D0%2BwSuLfABcVKkrlo5gSr5gS%2FIvhDTNoxnkClp87bagmL90%2B1rdAslwzQTwAtrO%2Bc&X-Amz-Signature=b076abe599e459355461fe88b2d7759775f0652379f3719e598a649963c8b9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
