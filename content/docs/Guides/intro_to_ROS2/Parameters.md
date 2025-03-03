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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJ7SHYH%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvTK7Be%2Bpanjv9SwAzAMj4jciWHXghbWTZCW3cZTB9fgIgUqb%2F75RuWthHXwR338NDsZdJ7iUI3wiHOsJs3ZgETJ4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApG7VNEKFUZvrbIYCrcA1tELHeN3t5rXuSjptq1KGcG779TqQ%2FknUBBSwviEjVlwonf26U2mMf%2BDtFw7b%2BWBr5CmareGbgjaFdrvJbbbkw83exf4TYOxJnymdZHRjaRCZ%2BdwQ%2FBfuwI77UT%2BIuo9mdHmpNfuGPvd4Fyip0eIFcChWjfkJGwHC54mqhsDg0ghjTq8uYnY9sUlzHfC%2BydKR2wKQ7HRjR%2Fmn5FKIlDWdNLa0HV9W0GInUnpg4azdn4hXDxJbnDxZhYEhljKKxuM0p3fnOKfiM%2F%2BfG27JVkChCzNjo3BEgNugevloK1ukXeaXUoh5%2F81WFkGwmZAKrOzs9V3VNDWXLAHHfPg57ZAwsT6b4N0b%2BL70NYOQRmn7n8BpfSI0pOgbRN8eJKg2P73rbYhp%2BppDiih49Kpmx8JTyAazp04sb%2Fy3wUFswtDnB52FyOR%2B7WqyiIBKvCyEbERmC1jTgclPl4s%2BF7mxdrJcv4lITAC%2F7wqG%2FH1b3HLCRwgrdHjFO5WqAixyUkmianfVO65R60pHOSjf8Wn1iruE13J8ZIjFNDQesfre6UGHTV9UvnkXzkJf8vne8%2FkRQfL9yuMvuxQOgmRC%2B%2BgfKHiSZGLyEhqSTYYbg7u5K8Karccu5jg4rMmlHbLGbFMKqglL4GOqUBddInKQ2WVkyAjoiwOoiv%2BIrbDK66nvlDAPelcee5kSzM%2BibnBgNaRaogdMD9vzhrQMqnU8nybCblymP2tADhsturUnuHrH8g6gQD7Yfr1H0LQ3lXbg%2B%2BQPChbYvGmy%2F%2BlSq7R8Q53XmmzLpwoB18%2B%2B3LD05z%2FWyIu%2BKuwwJgFcZ9RCYM6N58lhMn7fQ8CfdC3LeBA%2FVIX%2FP9hXKuWD8PBEmtueGQ&X-Amz-Signature=81c5d9b470e9d63e75ef1a1a82e92a03fa19a1da2671a93116ef2698e3d8a710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
