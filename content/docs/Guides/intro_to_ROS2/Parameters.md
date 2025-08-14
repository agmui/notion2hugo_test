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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6AEWEG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDvd5iEoM0kNu%2FqQGYF5mTwqaNx61vvn4K9ClFDZ0XuwAiEA%2FSC9bUE1BWnHagxqfJJY4zDx9ltH1y0u0nsUNwIAIwEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIoUGzVFYVRk14ZvHCrcA3ma6NgY%2F%2F2BWlZFta6ElHTaTW5e%2FYfsNzaE%2B0T3k229dbLH8SwoEzAtYtFIGbhlnQomIyAvrGDEr9q5FVgIRjVokaBGpjIsxQ3VH9yN%2B00GxV09tzfPoeh11mtHXqSanMdBhQffnpob1c5xertcAeA8bdx8CLnKYwDLRf9swHUgyYhPdK%2FfC6TjHhN3Ag4cFAjACUeKhcWN8euJu70RNJHMDCgPcI3ehglL5yx%2BDiG5CLWE63iYrUgoVT2HDUXw6aki7L6GzkUpg6uFFGRpyrRwTAUfyksDxVEezNo%2FC1rJB3uWcV6aWNzd60Iu41gO2OvxTKb8EmvtirXr9A0ayGbOwIJTiFEmgiSFkBnQvKbwhCT1A%2BxwjLCVBB1dZPeVFCilxWLbPVaiy%2FSPLS%2FHOeBqkKXhTl8YwGd42osZ%2FQT9%2FlDETNNRg60CPcpwULzt7fTuD%2B4e7hXBjOhRm9gu2eAX2xattrsFCmJVQxDaiT332ji0NgvJmTSxsFLUycOd1TTIDo4mAcci1rp5OouIA%2Fgj8In9Rul4P5lUw3DTQB6%2Faa9953snEDmuL270vNQLBpaaxSrbbbtp%2B1D1feCdTcCACOJVLXMfHarUCLWNcznk7%2BuURA6QTecsGj3IMJDC%2BMQGOqUB%2FdD3agpETgdKgApZZ0O4qFIdJeoaWXrg3%2BdQVEDc0BZDOdJn7kgqfFBOG7OwsSDDqiagAToBe%2F9mWoflsU4fLdO%2BurWA6GlsTFmeM9CYuv1yi63erx8xhT9NtIPwb0jvdyf4VxRJANk0J7n3HoxhLVXyIDkWYV63F96ntxm9eT5zT2P3b%2B1vh7hSd0Agxhp91en2IRRcvRvYDMLmOuu%2Fnczq44VT&X-Amz-Signature=b9542f92b6737c722b91ca3de7767f33fe45a6ee8578775e7ba11a995b10011e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
