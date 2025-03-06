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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AGP7SHK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGcsTuKgwTxAHx5hYr%2BPakxYwQqJF6MQ9lHZYqwzByOAiEA%2F%2FKlN7Dt3VyBLAeT87qEhl0rL4qv4xDe%2B23SesJGtKMq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC5e4uBI3GLuefyS7yrcAwywI3pXwWuWgShkJVBO%2BUWm8D4OxRaeanehUQWiO%2FH7WqI3NGBNNj1iF%2FaSpcCcQgp16qWOMUf33U3ti8mSL65z8ef%2BXn5yHFYaEbQ5tp7Yfax2bv%2B6d2HQW%2BzeIYLSE13fQYRMDrs4%2F1FP4CjtB7D0nd1KgbVEJqR3bWqRHABCgPSDCVjEsG8dlrgMVYOe7IQAOexnvAFkZd1EUKEAdAj3ghVXwaqEm7t%2BAkxMsKrBC52fhaaPxROY8gpKude9UNN752lxREOUy%2FD3uw7m5ZWkIoonkwz72Yae5GPUp4c4XHBy8JC0UgC9e8uhG04SpZk7ImLbkHKeNa0ZaLPQ4aO8OTTyDBXFzbSP5OyR%2Bl1nSxE003uMqa%2FX2xjoOPM0YyC%2B05npTUdOgmLQIEJHoh%2Biaq7x4S4tZqMP4%2FLm70%2B%2Bdmbo6MNhel1vcxY9euFEJOxZkkZSrr9yAlhp4SRKIhmKe2YDFHKzsPqT8Fvb3sSuK2OWX6Vn%2FID7Q98DHyxG2wm1HN%2F2y42RAcumN52seiII2la3cQlc6UITXgq%2Bix7O1OjYhaHXnvLKmpmGoMsOCTni0OvL2KIuEzD1oZcz3nResa%2F8FoPIUe65Jxw%2FxEqgeVoSIBqrT8u6JuN8MPvNp74GOqUBmhbqpyCu5LaUYY7edPK98hkCjW0%2B84moPSXGmuJjm%2F%2BxqaXMA1emtGJn3sRlVYLJfV5FLHuAAJzye2UInx79dMNAo6y0t3pQGgLq7XSZcWUARjKTMaJRB484hFMQ%2FLXsssjDdOBSqOyOO5ZH9Ax0am7RvQAxkuBuYymn%2FD93tkiVpu34yCSiyv1oQBWcj7k3iToS39jCaoxNBPv4FuZnDG8F7UGH&X-Amz-Signature=357bf20b7f1ed58ef368a0232fd45bb9ab3d6659a3441dc66b63161e94f72d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
