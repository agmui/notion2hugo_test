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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US52TVGX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEH%2BWzHrH7PRVPYprdJpybPAqdelDhsDCFuAo%2FJvChIaAiEA0W%2FMyuF7oQCM6QnTlTdbLgD%2FKoHq8lMZPPfmZ%2BhadkEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNccwA2%2F8x9yB%2FEB1ircA3tH9JUZ1xLGmQaCtbvuzyXjTvL8n2nftaN5sY6AqaiLBVCPQZICIKvhFAetD%2FXYVIGuOxB5EwYx4iIespCwnyaV6JtXqQCM6UTUNT3BTVrXORApo9ziDH%2BhAgfqQsgZVOTSzTKZqUvVQP1e4TVgVLQiJECD0asB81Nv2x%2BBW8ibBT8veImaNQzgL7iSeI9RDk0zb%2FWin3lahnCTJH86f1OeuP944Cd6Mst4xSar0sGJyv%2FIefW9dXxMkJArOw1GWgrjIgq2oTFGjOgGrXYx9o%2BsgDtCrE1I2LiUUTpGzyo9whbzY4bXtyt4tIQq%2B97ZqmJVWLHGp95aHLh2XEZT7AFmJjzcjF%2F1D5suP8H8YsUjX1YxmhTXeBc1yfAsndBoydimmBHbYou0W6IYts2Wfc2SBzDHtAVNTuaKXM%2BO5AG4sAq%2FgnghAlNUyg3F5eNR4WEkdZV5hEJnTiHRbJ2QZYMjc5MkWiqR3cbDPAE%2BkSlQOpOZJ2hZQyyLvePgkfUPFwB4OjAu7S3%2FYms0utexsurkO1BFY67NeE%2BtvS7so52KXMRSeHinBmTNHV7TAtOa9dZcBggZR97hNvBRmNNvJdqSCSw40G82i987spGSDVlFX3lfWRvhqNn0TlftMNW8ocEGOqUBrOBFfbfY%2BztJemVT1soU9FFIAho%2B0yTSR%2F328t66IpX%2BlMNwdUxDu0r0ca%2FxslOpSFXLeNkLCchppBfpYTWkV4EJrTH3f%2B7qHg2TNksh00kRKcWgu02YHcBIb8hWIHJtvGIX2ORbs995R9hAvOxnKYqS%2FEti4kHa3lvoue99MQ1O5hRaqXFqXM3kXd%2F%2FUtaObfguZgaUc6bSaBlTtSN00Uxax4NW&X-Amz-Signature=cb1f8cf0e8c684edc34cecf6a66e559a1d7c9dd2dea6d8b469e777656f320a70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
