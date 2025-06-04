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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXR6HQ7Y%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIEAZlqZeDwFe8Rb2lubwwBnoAGXbZrok2J8kt%2B%2FFy7rOAiEAsjZqc%2FqO%2FP2T1rvqoCRxPwZM9NYyqNnTf8HWjNBBSZEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLpBfjRTj%2FHuDRqTQSrcA6MdaM5EmlSVSRCK2n%2B6N2Bfh1DgN1cXRHteflHrjQapsYv1baVI0r05c87mYxX6tMIlrqEM%2BviRSJEzHuT7Xnxqqpu4GMX8UICB6h7d%2BkMxiHxp%2Bk2C2UCy57l1q7r0y0grD%2FULnUSzYpRb0I5fb2%2FnPwVD5VGYeh2MjYaXrV8iLjEiM7ZSh%2FOVlf4Qq5HZkz4n3HYRGmsm6%2BFxN4Q3lQ9sQFRiUVARmkRAqrh0lVZLzdVIgaC3HUjE%2FnVMUb9T5rsifARaCv5DRmmBLbX4HrFY3K5JpHKmWOcOtvvbqylYhwS5Yf1mtnxcBNVxMh10korqREpS9YUJcINvHL2r9U2e%2B4x%2FlOxLUL30%2BRNRlq2hK5lxBzikCnwu%2F7ofJrMAkQYXFzHiZ53N1Hj0mLkdHv2bIFD9uhVV%2F3aiMRC1aVLg6TQJ45Zc4Vv0QqGCq1yf4%2Bfj9VYyOcVC0T9cU0aALFn1XXgbsupaiVyDNzKCqVADCFQycdJdH0uz0ySogFS68DFRXTaCFp81S7VImVlgBRcZcGOh4XeQ4ICCT%2FQoqXHWCoApDIrbCfleeH98VE889ORWnWWPmcNnELWf6d7Lh5Z5s6yNAs38AJsetZgZoIfSrAX%2BP1ZMAM7bslD5MO6egMIGOqUBh3oRMR%2Fmj5F5ki9%2F6UL5NYxkcyTJX4Y6l9aLjxyVNXjqEK0xp4X0mUD%2BpoLnGBH9FuaTxaiTTGx7OBZJIS9Qxc1VuwVInmMSa7C9zj%2FgA702GrLmuQlpdjrSdxZMHhMZ%2B%2Bo49lAvSzbm4ZX%2FzT9DsBCpCtzTO1lY1TAmevwEt1Pnibk5j4Bc7aZdmaiF%2B4LF%2F0Zq%2FGeZ5ybEurbPCbiTX5IfejtE&X-Amz-Signature=ca946bf80d995f9fbded33f28314a392c2da858f115456ebcbf7951f52343380&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
