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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWBSW4GW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQClweTm9Y7waWYc81NRKKnqFzihL8UKQG20qQhwVZbYJAIgINCEllQSUMTJuT4aK77TRe%2Fb79NCzKLiH9b%2BIuOdkTIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFO44Gv2E0Rvtpdb3yrcA5bnu3M7BlrTOW4w%2Fa77%2Fb1o15YgypTXGL9800TMkJFuxmJz2%2BLQUtdlm1R2nX9WXa396Tm8lA7LlYs4aPKSEjQbaoWiqFpakPs4eDAsXJv9V5c0EypgJJ%2Bb4Bkc2Aow9aks2f6iSwaJF8iJ%2FsaYU13OcRWtW3AtidsZxB46cAJhZx022%2ByXdih8D0PfhevN2UJKn8%2FmuJSn6mLvQKqOXG7x2R8f7cmwSWG5ZtAKKppw1POXS5cLW3eLRfeOAXYW1GZ0I1D3BKeATR4arkIbsvjw1fUobaIUiNzuj7CmH19KHG5OUehHIJRG04By1V6rzhydFa2UOouAVf5aRn9AyQAZfs6Qsi9tPnwfqluJ%2F9UPU6qi7bNdpf%2BEIoStR9CEq3ND4ELcR7VGg2%2BZYvo%2B4Igrc11IsRjwhp3zoE7zIHfN9F1tK8PJRG0JwTywZUTn9hD84NNWJuDlpfBZ4lrDF8lC3AYGmcTIlaqx7KGg5%2BmgJNv%2FccnSFrO02sFKTB1GXMQwc4vWN8xxO4IUMsbqouhjMsEBGl%2Fyz9HwMzSNitj6FAT%2FKXgU1RN0XoqA8YXvk7%2Ff4tETMIMspUuzCC4nEdNqOyQaGQhimOQqasYfS9FEkj2kE8aEGk75rHcvMM%2Fgt74GOqUBDT4DR58FcAJQTc7%2FXL1RJgDCYm7y76UbYQB4mAIKN%2Fu6sKlRked8GP6nqOxlsvySCxCIpLfCiYE3tF7JDBTr9LVLKVOR0GHx2c7MGPrPLzbtNREX9Q5QEIATJoAZOEwXbx5O4%2BG0SFS4AL7hX%2FRV%2B4528AwQezJX9IWn0fTn4MS0YGNMoj6lYL3cOYAeYuGrT%2BJvNPFWLb1oJ027RZ%2F0RiG8QCiv&X-Amz-Signature=06249abd3f7d21ef1ceb4d9bf3fc2a8e268dfc45cf54cb79fc6b41ce372c1522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
