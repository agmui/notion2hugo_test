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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CGCGAA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXEgVqX9WVb7suJtN7%2BPCZ2BRXtemLAg0UBgiJJNhFUAIhANZlTNHl9hFp0WX6bcJ0VLrKwZyHErqfl84Jrv%2BQp3xMKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycuwNNd0ADkdeovIq3APL18MdXVFhm6HKBiQr8h3%2FD32oVAxnC3LUmkR3eW8%2BrMROkf1eSKn5gV4o%2FIEyjTPea2ijRGBMtl%2BSMlFyTK19YJ2Yt7qkiRMcptYU1FvBhL%2B6oTuBuqBEkZ1vczwfTLrXnzivKmDHrAuefDK9Ep9q8lAqnCqqBZV%2F31kJgScTXlg0IL0e41heKyXtzEkYd%2BrNcmlSotLtS%2FqsNShVK2e%2F1Tmm5O5so%2F1oCjCy9O6vbM3kHe%2F01CauWt7TyIdWQmipQgbaytZLfyn0re4syKCMi4%2BZCzQweo2zC1YePdgWWGFkNIxmigYYVooBwujstYThb1O%2BXfy5t1YFnl7nnt4l5E5EnEm4upw3SWh5tVa1J7rUdxybDKgPkBsQ3YJznlajrbaO8N2qqFAW%2FI%2FJhsVOJbxOdC8szaNCSfLnEa3kjXH1suj6vdK%2Ft2jsYN4ges%2FANxpi4FGzw9CRDIVQKyPOO1EyWSI3PYuNZmL7VtFUsIgxhYgAqiD58vPUshuXJA4Kb2ZtDtJxVfMu8b02O%2F0BuR8rbIHP1YSwPIXCpuWox94fyOYmQmlNszrQISWpf3yaC0axWWEi438W%2BI%2F7MzJCZDFaP99%2BMsLlZig%2FVNF4oiR%2B9trXfFJ4guuUazCM%2B%2FS8BjqkAeokmIMIsFx0x4b4S26ebE8RqLq2qsGAucelvLGNz8PUFpxbdXsDvvez3gajQIJ8X%2BG9%2FtcLuN7SlzYAS28pNYq76AtftVmhVnvNR0JB1ph4%2BIkBb4Nx%2BNjziqLzLLr9Mgp37LhUCRdbnJSQJ6vQCS4Xtne%2F4UTIbC7CNzVmUbTenRq5potzxTKOQtoflu8BxCOEX9cywqNAGK%2FlIBUMyoYVnGD6&X-Amz-Signature=4633ffd3f35c06e302f2923b5b11cb007fb504ce47a39088c1df376cd9d053b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
