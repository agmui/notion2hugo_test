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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSWMQ6H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDHzKRhQ0gQCQIfqW9tzk3pZiioBjeJ%2BtjZpGMzYyn2YQIhAMTTxsy2k9AZqk0eLUdO4DwYx8r8FogFTNlt53K0o4AZKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3FC66%2FM4LxEnmnLQq3AMnhDvMRmxDisz383xgkToSTTGE4cPnzd8ARzdl3mO%2Fw%2FHyzwAPZLw3wEGNP3NS3pUufcbJgifG2up3XXs1L5jWX7qABATnFSUDOtcoJ3azpybCgvecFU%2FBY48CrTUMhaFqiN0bgcWQLjkgEd2qB5Z9MvSSZhtKwqFvbkrecGyr7sjIO9u01Hotg2N8QEyJAudhruDyUI3aYFuv9XcxFGO3A4fBwU3HuY4sd0lmZuQF6AB0JT509hzOBT60BCPTXYTF9QF7SdptyQJ8ijI67bfCOnWPa9kbo%2BL8X%2F8d4OVa95WCAImJXx2v6FFumIKNddYf8rsaNdNBCqQZYCFu2whCi7EmUWyCxzza%2B%2FDpfSD7EjHHm1VQqIKdukLwZKEJySV6qTGn2feJ74YST2WMf1kddEqSfSJF4mVUarjDD3ZaNKgEG4CvBk5ltWCLuvmynhqD0CMfmQxV1VWyTuCNj5%2BvtQggkFenU2Ks%2BrEVcwnTxbz%2FwPmxheLOb5WGfFmHAMwwP2XQKgamCK46XDw7aLodUALwxS7NJ5DV%2BReZ0yy09FxaYNZQQ9W2orEDlxDJ%2F3UyS6HZ7iXdkQL3IwN7J6paNCiRXfH5o2tWoPCPsdg7taUcU8nBFcktNUYlozC925fDBjqkAaq8cXh8mAPwPCjkSzFFn1ObN4UtGlFHiYHP2aYNHiR4moV%2BiH0jXz07A3QpIgoTaxGg%2FArXjdU8DUV2sbExjQybvaohJhko%2BfkUa3w1YwHT1Vmw1Iv4RyQ%2BHzPdCnsRqHFWn2Lvc1PnungVClHLm%2Bs1mxO77HykUUSEuzWc5%2BgCKwM%2BL39n4YG7sI5crGEyqx3218cwQ%2FBJxAWPclHU4cQHRjo1&X-Amz-Signature=a0c0e4616d814ad2341c6acec744e7cf8355bfe7b4adae9ce99d4ccd5d154d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
