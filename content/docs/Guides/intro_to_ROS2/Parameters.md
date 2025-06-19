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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47ZM4TV%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKwFy24NfMhVtnrKvKNvyzlRyao8Yu%2FAVow47ldYLhiAiEA%2BmTcQ6YohTma2Tw7IgFp%2BT4UMMcGS6%2BVVrA9sY2lhvMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8F%2FaACdkO6IhDFDSrcA5Tt%2B1P0LTX51XKumpJJNfHkU1Li%2Fxvvpgw5PmoBXie2XF3nO1k8sIB6Ay11bOUil5NlrGF8Y6x5P3slGRR5%2Fo2W6Yg6IfE%2BAfmsA1CjrGVHLQQkLmgUHe1jyVky%2FvPtdKtXhKuUlZbb2qXXBbzhm%2BHo3cHMUdx%2FGWve8I90zSLrot8SSCQUBqgVPpoGr5OOavYfzhMqv%2Ba2vEIMErovj5y%2FuSNfMEWdJ2JziftVs%2F3GJZ7ih1qZnR2hmsTQzFmlNRCGu936j6dvJb%2FhXE7ihwyvvjEwbCJPgqyIpYFxkwBEeqZOS3dpm4y92L5okFiSEDFKfVj7tLimdJisLy1cOMpHksSKiBJ5dunjP2dqY1cJqPTEfqiD9jRhg0VgzHtL1VXll0sAoARCmM%2BS3K%2Bm0tjodG9MoQu%2FxqE8iTAi1Lv9Af%2BplDBrPM80N%2FTcabjD29e8RMga1wUCnBf3sFNJbuduUEfacHX8W%2BigmyLcwheqC4vk9uPC12MmOswbYWjKyjQAmio61rCLsNl1Cbe0DJMdYC7M%2F9z3f7hGzNBtwqt%2BYW6F%2Ba0w0FmfhLi30iVWZcDeOdprleul4zYAZy0FiFID1MCMRpUbzp3F3HUYpJZ7GUkyDjNsVIzfUJ1HMIW20cIGOqUBsp35C6jkcA%2FsQwe6XvmMuZjGqV9vlUSgHKQnCXhlJqZOGOQKeJ2gTLgxETYxlz0CNNsV7eu570kxkPb7YbCEGZatjEIX9NhGfsDl9rlXM5ycllhcaUjMFl2Nzj7OXaLpu0U46HOV1%2BENHvNq9YlE7fGiOcvOvOI5XJU68A7HrL0pk4NvyyqT7aMfEVkBeGsW7XRKrQ9QhI%2FTi1wzrr%2BVrwQHolkX&X-Amz-Signature=8c1412f49486e041441bb98e36eb64f05f46a90cd0b46a14a4bdd1758680590d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
