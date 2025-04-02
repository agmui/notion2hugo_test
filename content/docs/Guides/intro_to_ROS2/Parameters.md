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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4KH3NFZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCoe5%2FqZt8kbpFBmYlgL%2BvKppROoiDszjxqiV2%2BvJlCcAIgHc9dlKrucHma1v56QjOuXbgukqrGuA49C1pVpCUfkg4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBheND2%2B4YRl7ZVxsyrcA94MR1ucVCqVqBNSmLFZO23B8ns8JZDDrl17XmEo1LzDMXjylNbP6Wbp2lPm7vWUOp4FPBKqI%2FsitDUoIX%2Bd31%2FPN7NsEQGNsdiiThBHf%2FOq89IeTVCQKYN7bmM%2BLYrUDYVqx4kcXwaCvcB3HE2qdRvtW7oYBXjL42KzogZgRQYHbiDPwCG8Cvv7KURVdc%2BcFUOV%2F%2FJPhr9m3%2FAlIz4QsfkDT0AZUo2CWllU41BKv1RRxMFmjiWtp68OfvFeDVYMPOeXZJ2cebp5WTYkVLP1qC8j0DQTkEeUtHYfpMkSraUQEZ%2BP8Hi83Xy5Q8voS%2BPApfcRfHltwCY%2FtPCWTNVz6esQ3kq8xJBqEcH0L95wER8K5Oc7bElNQNxq%2Brpe0WxJUA%2BiNJiL9y1UI1Ll2iNggk8yH7LYRyogzdqt%2BIIpXlGGuNsXxb8PzSfY9xZDsOJB56qYqK%2FIBQR3Qtx5Dvy8YrXG4eWxgI%2FpS368%2Bo9b1PIb3JpWvSK7Yi6QYZW9OEPLio3E4KNUNZmtAtAGgcpGbDlTiXnhipQTobxE%2Bk5mXdGUq1gvXCEZwLf6ileW2CjHnquZnO70QR6yG8koPW2TwF%2By3Zxxj3%2BVl9G12961J379pm2IhkJ9ZKC5JvbBMNfvsr8GOqUBmj7lgDvawgSPxat4u6gCgwzpqKmWo3qT%2BRmaPHxdvqPR6lF64BQzRjKaKNeTbHUlABSEkKiXwXEJrxC2j%2BaeLwxNMO1ztzAyDW3IuQvV2gBJsBTLnRGfIE%2BiGe4ZrDLfvcYB62BKJgN68ET0Goayj3kRnNb7U4b96xy%2FhGrpbYdObctSLfvaZe56dHpjU0JRHrnvrKZSjFspyLcw30jM8UI2GC%2Bl&X-Amz-Signature=d77d0998f8e7f16ca604ab33ff6dd15cc790830c6ef1112fc58608275af66946&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
