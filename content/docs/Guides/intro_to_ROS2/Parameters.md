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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRATA5RS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FI0%2BJJMyKU6LAFpS9dU4Hb94wj98cmfq4u46X8OwclAiAA65g%2F3e8saU%2F8S2MIlkabBnQcVw2rW6wlTcCzEF0Lsir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMFAgniF1ZBT6Kvx5AKtwDWqD9HKpWdQCNGhy0WsG3KWi3%2FjuGlKn1KmO0cs%2BCS41HZXGgQ5tWUnmRjdV6wxClhWa%2BVt1V6wlIr2sJtjA%2BH9akjySC91LC0LA0HfdMfwhGLntvHHO9CgTVvcsNL5q80DRkwlRW%2BuJXSS8BxP9eCzBmaSlilDF1llao70hK1a98EO027PFqkH4nfzm52NHXk99LW0KHnsfivZhU7IIA1ajHSR6WgaryWVL%2BmLbGMyjmt6z9DD%2BigZKPD0sYhTTo9MFoRzPBhLi%2FIWd8Lh%2B9e3c2q61zH0XEvWiZt0JgSUJMl%2BAUhhbuG3D2jM0ZpTfLdRZyQqTm4wTHvD81t2AjeNCKf4OjUNBAASEsxwYzMq8IzjjlSh9u%2FYcSlACjvn6NgpCkRGZd3GGKmPdffh2HppaUOk7R8kCAkmQFxEBCmKBZSg%2BJ6Zaa5ypIRNnrHtX3YU0c7twqNupkIHt7XmHt94rtkzSfvUM7ywBgPaPHZKAt6%2BSDUMps8NdW1uE3Aon8GA80Z%2FrGUqW4%2Bn%2Fd0UyKn%2FSyzx%2Bszm51EbBA0zEfueDQDDqEvK%2FXA%2FmCl9sfubS05c13hKHdg%2FFD8exEZpFuuGjgJjoiMmQTf0LCqFzw0g7eDEPNfntc%2BcFmTFgw4pLcwQY6pgHB1Cvok0I%2B2WVfRGbyW9UKFdpjVPD92tRo%2Fd0kULCWMS0dR6ASbBVQteJ1Q8xEBvYf%2FHw8fHMaKCSifjBSk2nFQVsVg9mdyQV8nOskucfYhvABAg0aWhUStmfcDmE6zg%2B%2FPAnQ32IS0kiVhgGf3OrwF%2FuB1QqA7c9DSPn0a4GqQ%2FXYg8bRBSUBrXYVH2iQAjhB5BFKWQRHLPKLD1J7O0hVVIvueu7d&X-Amz-Signature=6aaece20de9df75d5d21493e6e10f79bc131d2e56c7493f58eb0d34e46d56504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
