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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GQXUN3F%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8hiIsy3oUj243SNVS%2BGJfsHgd7kQizYnVxc28nbHPAiEAwu4b6tJ%2FDRS3C2DATugwwMzFW21myZzAPtAfYTyPHjcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKj7cjGf52Q6vrgEfCrcAzEQMJESV02bevHRQQU3SmEAqnPaR%2BhZx8Ox54jWt6ec85N%2B8eDQHknwqYc5xI2dK2jvmtRO0PtGZBF4trvjwxopmrwffJtIFgbQ7PZAsZnTloMSaOEj5JQjjuW3%2F5YccZisiLRpjVpDPValkrClT%2BeegX5AVdOMLuJoFfPF8CMB%2BYEGArWQXi%2FuVk1z7EK7QnWfXDkBys2K9%2F%2F6SvNfewZRKMQ8bGtCztWM2SQ0hMrluvZLgPqfBYRoeMG7HQ%2BW40O7NZ5GzqKvTEPp%2F9rEFsHfzLPVC66Ukkkk9RUSSc7woNu7jJpdkDToFwxcGaVlLG2vcbaJ%2FaIoqxngsf1lOM4oKEYwtUisU7G%2BoAewsof8guMtu299IXF0ElptkFSPDrHGwl3cNwzjD5OWL%2FE4m5%2F1gHBmUbv009hvTzra0YTUG4rfoL06p7H5r9WjgTIUkCw91jNzWZfelhyYhOPLcs2B7o%2BH7agf%2FyffXJ3R6Gc7cQ7yRqNjqFVx44QtR1dWBWN0QSaAdxwcusgxJJQjIU1Y5rxY1t8dAULQYeMt%2BZJe0nsjSNJhS8jHYYlj5RjqP6MIkDlCro5EeSkacH26HMJqQ7NSBA%2BpEitd%2F%2BKmmHVG77W078egRqZzpHkFMIrX%2FL8GOqUB7D%2BNuOaRmOWLeMNsNVL4qK2Wh%2FmYln3Q51uyDpR9FW4OxQlolwLLTuvCNoXMaIKSsuBO%2BF6zMEu7fkMKq%2F1Lv5dRhek3Tpm8RM3Wd2hsQt7o8pALL56dUKQwoootQV0JZ4A3JHFoWLfHPJZbAiB9jqZzqaE8lGN0r%2BPlz7LNHqSvn1E2CrDTKrQzPQB6uUpFILYPrxFSnHS1KlSVNYdkCZJAsgYF&X-Amz-Signature=e617bc32486bd8965d905c861410e2a0268b237741358939e0a9fc9131f409af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
