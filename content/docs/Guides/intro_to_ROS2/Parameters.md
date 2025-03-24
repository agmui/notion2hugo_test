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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SA4OM5H%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJjik8GZr5fI8TvZJ55exwHpuG45ikMyzd%2FJv6jmpSgAiAvR%2BiJJvD7zKuTSpdjKX2pGQ7hJ7ZRcagQ2A98SB5a%2BSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfY3ueKbmkgDbVTSpKtwD3XL4B37eDMaGnFZVtIr51H2tT7FLudrGBq3Q9jLDu76FMQ6k29WjnnVBSAXtXgHoPq585A2k3%2BjJSlPeC8Wx3yKb%2FbFD5OPs2FutnpKTAKlLdXgIgFK2xfNXZLv1Qpp5FvvkUlnYokCZV9o%2BeYmKQt7pkdWE3SUapqIKx3F%2FEwz2dmLj2%2Bs4SV%2BGfBQY%2BaYDOTarPDpFqu8xHqP6oAoWfF4oDvr2YkevyMZBnKhY6PPGFDO4exOHsX%2FLjEnaUutw7MquFqTFbg%2BqF7wZsoINd6Lg5YsQ2pAoOS3sHUS7%2BxBfwjJoyxNxTP4pXqyZyiLQH9HNKqIJ13E5LKczV%2FLOFDpih6TETgPPor3iA2IOh5%2FmQgP2n9a8CjkW6b1XAn6Ve%2F5buP31zWvogXO8ZU1hPeeldE8zfboQH7U1yfrZJ2zCViZKbO%2BLrUILg%2BiVGOwt3fbWmZJBfoLihweqe49zT6tm3MFYiyzsHCZmhzuHnO66OvJHaYJ9GE1BbYEM0Say6pvllzfSbFtQA8YgblmMj%2BZ5iBye7M%2BvomDwROMfqq7PVOJeMj4gbn2o63RNpzV3fMGEgKco%2Fkfpy5g0YFwKb8vwM%2FSv%2FQSHrqe%2F7%2FVB0C%2FINTDYscfGnLo5fzEwnrGHvwY6pgHj7IIkkvECnn%2FducMLZ5eeeZMr8HujViV8ImtwqIB9BRrCSnopohrepeECSss%2FvqPYOPh3KSJM3LTnWlAMiYMLndL7OQ8Eoe1cI%2F3QmL6L0x2nwssOjwmdqt4rSl%2B9IWTKPNi71TIbzdCZ1693D7JcmW24O1AZy8yp3a1E38JFTwnq6q0gr7FJKIbtwoHMKNTA%2F%2B6RLJ6OT43RkfJUZEtcQ7pDWOT1&X-Amz-Signature=28106e33c3c75b186615f5d4ef49fc50ba9dbaa68adf830ded948843b4d3dd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
