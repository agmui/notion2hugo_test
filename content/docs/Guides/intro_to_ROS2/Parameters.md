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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBR6EL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHy2K8DkNzS1F%2FqdprfBeRYB3qts8P3Lz5hbDfX5lKBNAiEAuzEwCCwkPNZiJVcV5vvUARGkuqBxvXrsOJ3%2BUDY7%2BUwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGhcHZkoZmJVdSnayrcA7ffs7pSSJa%2BjSXsnRkQjg%2BA99%2FUW1rPAhuNAoIhTy2eSkXyp2xVok6%2FbXs6mtT%2BinvDdQNuKpqR6wvrJedtkVJXqUX72CKZLIM8Pf%2FBG54hnm0uq509lKpY0Asoq5bBwvJuJLxCxhqIDMyBSud%2BOCkq7S%2BmM2RSnOwaVlB1XizF%2FKc2fsIjGz%2FSBkgBrRsqv3yDjVIILJdByXAyvLt%2FNvHL0eNfuCAJbkPuAKCKHaP9ZtZSECaOvk7NoLgP7Ug9S0Wcrgf6HCgkH5TKoaMDvL0y4eTgUnqOk2tuddb7SHuXcfCys1nPfOtGGyZVbjEEYtccXOJl5cqNmlIZK8Rajm%2Bl85we5qOdMERDU2pr1KQ7SLY8kstHAKqtBkLv%2Bg3uJIfpoJ7Mzvvt3LzRd%2B%2Bd2PWna5D8Dsp5%2F%2B34kaJZgkN8zwxOxMz1ElFNEpXPtnD%2BkrgnDsGa560VXYzA3jTLfj7DdLYwkINI0RTCOx%2FG8t1UvA2F7uYEHGBBoj6wM1uxKHlsdhkz8UXvb7sgcHuEh9esvcFXIb0b5zMEJtiLzRF0fk%2FjVM%2F%2BIJ1oJDVdfs42c0YPoQ%2FO9tkBTiIHYAOfUepPoSMAV3AfykZ0rEDFXfTuqxq3F0peqgcfkf6RMNei58QGOqUBJdc8%2Bc9AYSSUgEo7q5n56wtKvWWMztGTWvGViX8gO8XMDfAjkPFeUtx345i%2B4mZdz6as1jWQmyWr%2FgHHCh0uItoxVi3s6tAfH8gf4Z%2Bz686v4hun9uG3U%2B1wmtLkMuEHOiqFI1DF%2BIgzfGl97IgsZNVRr6Zwb28gmnbiwnJv6CqbF0ihCbgL8UPHszsMdH14PZlNhouFET9fWI3blo1xES%2B0mPfv&X-Amz-Signature=e72d91c712329083c1a65d6d4c20d18bd7bcdff580dac8c1eccd076ed296d2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
