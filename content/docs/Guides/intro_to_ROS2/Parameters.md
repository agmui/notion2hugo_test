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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZZ2WRZR%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIERx9F%2FlB8hcq1khgI83%2BTVkSEpeckaKqx64xwU0cDeoAiBDzZ6rCVfvc%2FtTnM%2BTDDh3aaxup%2BSIswgjHDcTswEMAyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAE5KQXZ%2BKYy8zyRfKtwDj%2Fh0Hbwr8TRNwCuPbse8%2BYaXEVn0Rw1Twx%2FO50bMFcU392mIN56QbL2JrTJfKQ9eNs4CRJQcPl5Zuu224oQ37NaEnBoiczPU%2BVdDzbEBis6kwt%2FsQXD%2B28SL%2FiZ2u3HMwfp3klME5HBuHzPtoSFmxYba9qjosGLOkbEfemw%2Bbab%2BuUrJ8WtnYGY86QbuGeYZchHcWC%2FH2j6Eq0%2FVl5THsb%2Bj3m5gEWbdDl%2BkaiottkqUZd1iy3utRJ1mjgCUPb5cEhHa56E3V7ZMx1GPdA05qwsfC%2FgqhPP5g%2FQ%2Bs6sfugczWTuI2GJZCGNLgegDkC5ExnINZIth17lpjXm7gzU1twMQljCBrmDZxIbUDJhjeMpkra%2BvXAPo56VXU3BzaJrU0EP0MMgy7OEw0XNiSBA0q5tYimEce8ejY%2FhRdB%2B3rM6SDJl5MoBGEgCx5CNhpNd4%2FMIAW9kjXKVtpEYe%2BINrUj%2FFgc6TgDroEhGJvV9LF3ljkDLvJDeLgZQBa54BL34t4Lj%2FUAK4rLO1Dwb6pgorjSfKKCv25JIAmyCC0upqtbaK%2BR%2FRWMCXbbct3kC789ExZjCHXuohB33pIbpIXYqTPslV%2BeUphvnrACZhzXe1LXkS1xGzDk0XTsQT248wwd6JwQY6pgGwXB5sMa4%2FqBaJ9Xl89aCtnsNIjT6NFizym15xJIzGs%2Bu1urTc6NZV2HCWWOGsB07K8hoouo%2BscUVrOgoUXyenIRMUeqqs%2Fr%2BgmbUo%2BJktd3pxK0g5BgOhKj0irucaJYy%2BnNLYvxwv8wLrQlTwMkX6yk%2Bpw8FOudO2Mx9gVbf9sAN0xCn2s4Lsl5Uqq1z7rJvbkE%2FNyBrKiAkT7Y3d5Cts%2BpkiE5Fs&X-Amz-Signature=cc97fde2d6861caf12d566c7fb9664495d76d6df618f3f9cef22183ee187d0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
