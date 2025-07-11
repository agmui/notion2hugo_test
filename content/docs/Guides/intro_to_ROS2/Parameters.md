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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2M2JJHP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSctxk1A7qXrROIs7uStepdziuK3AhKJ%2BU7eGiYKXgwIhANimyrXR2%2BaymIltcCg3XyUc%2BQkQARSBrRjzONSyINxpKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbgQ819XzAkxSKfLsq3APHjtWrk6bqOZj5CExf7CHR2Rebl2wW9E7u%2BBJis3mrrGu7vgb0dJn9SmlemX7jsyJra8BUtRowNZ4O7QZTomQAoYk6eq%2F3bbyzlLYxDlWr72oS6A3nJEkG4GyKfkV6FHxHqq4%2FNacTKULo7njL81Ee2oDPzSN4T2qfo0zQcSPZws%2Faa%2BCiZVRshCzreeLvG%2FxioGNUMFdPnYtL3pWlVasTWalYGkXpQpWWREhtIN%2B9AESys2dg%2Bf7nSKlgYlkAj4ztzu5b%2FLASb%2Fz%2BBHVKX6IEuW4fEQVHg8nvj7Two4OLimP%2F5tNj7uONnENfFsQvGLbRSaAOfyJl6epIuClKkKLeaniIMuCMSC1psqT5EavL8GaPW7k5sbHLU9%2Ff7dDUpG0Kkz3jVrkh3A9zyV4P97jvQSufBT7tWJE%2BFIuQ9JZUT10Tje%2BqyvDw2N0A4AYDA4cbNJK7JZeufFExL4VNFBtGutY4sDFqBuXUrw3eDfMp5hOtZFSCCtmN1U4JIb4I6q2zIgHQOpmLVqGjNH2oe7j2Qn5qhbg9o%2Boq39%2FtA%2F5yel8dNAMfOi5Y6OgpuCTNEX8AVrcLSKLyF4DMdAHdw2qEk%2BdGIBA%2FA1gcgDb5hU53s1kopcB6QjT7cYb6rzDFg8bDBjqkAeRjxLMCTnbf6rptmWQT9yC56%2B9QYMZX6AyV6XrHeC%2FIHLodjcibW%2FmDziMIrCOJwaM4pe0v3IqV2wzoxfnNXIw3OYYh3CUldIk8q4iCOEF17GNE7QN8Hk61%2BgKYdK6Il3fhBrGY2bvQTwIHa6F5hUVQqNfB8GbErevQvO72yx512xEgs%2Fza9jb%2Bi6W0Zd1fhd3gBCngwS%2FbP9FQ1RjfgUJ89c4r&X-Amz-Signature=93abf6ab263a114bb842f3cd174c8c13728a7a2a962048fcae58d88166f391aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
