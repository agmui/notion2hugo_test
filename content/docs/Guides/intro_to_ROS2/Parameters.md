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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRUZRXI2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr0EJXchIXp9AdJZ%2FT3s7fQ9RD2LLb%2FIwJp6ShoHEtZAiAg22vP4vE1XWulP%2FFk3XZPEBFdukdqo3qI4OlAYIAknCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRzHg7i6AqQZZzhlhKtwDrR041iKou6m4SYVMqZFj03VQ1wBvZo3AU%2FTUBZgDsSSstMJ7WR0XYt72HOHSqk%2BydjN5XbL0aE0LN4b13e2yETAxwMHosi%2FFO1pb5%2FG42NKQ9atPQHGpf3YWinpGW5utcgfZ%2Faxaze887y8tLmkxNj15M1pAU1uv7QWiGVNiUsz529uRHLSfJFaJr0%2FnpCn3u1ZJtyg9A0zjGi59%2BHKhmBQdcmfPvnMDRtKuWHupm7ylNF2ZzcB%2Fw7HhTMX7dQTl2HGVAn6bFobMmpsnfMsMwBbiX%2FCz7NOntIq%2BoikY25aZB9FR%2FBgmW6psHYTIWEZWF3X5pON0cPQ0YFnEjnLPtD0dSdtK%2FHWedpZ4qBLGiFeJUev8vsop5hgXrGQWylQ8ZwCi%2B%2BhZSnurYDfptyMsYZD4lnC3OsMQgIdgEs2avywidQ2YyaugwfxhjIx1SMcF4HXhwE7KvcilEzUm0B75mk9flkwb9Mg%2Fzx0UReVB8Ceb8DvNM6ZfdAq2dsOCm4%2BTdQCg8%2BRnEyk3ot7NFFmbKzsiGZi88eBLA1r6hnnT%2B4tO8VPRfcFVNskPstNnmjiZZymOaZgfu4nqGta7vTMltBep3U7HRKbmricZCyEBSF2DGme2SzZwK%2B0xOpcwqai6vQY6pgE5JkkVNdz0dzUUPdi2NxJI4jXtBY9epJmw7Exq8J8qZ%2BrM9gCrfBDEwfjWNN1zLNG4UmVzuyQllxta8kJMYyrlrVOenNEXRtLIZuB8nwtt3sPVk414LALqEK9pBL%2F%2BWTMQTdO7xHO2AG8%2BQQZ%2FSlbzvHuFFaLy7cRkTnBVC2hljJqJQZh%2BtsG0Oirg7vvftq8VtAhzLuW8XWZqaxc%2BOF7FKEkOPkTq&X-Amz-Signature=b683fa9cdba36ff75b784f33a96b382b1a98101d5ad74b520e433703b67c2a37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
