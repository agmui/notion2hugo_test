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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAFQKTP%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9CXh3DECw4s%2BnZcN%2BxdptuspQnoEhuezEgFA7rGxy8gIgJv6ZGwxYfHo9cCKkdHbAZhdIf6HzuT%2Fjt%2Ff60WIJdLIq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDNFtLmpMCOnQgL22vyrcAyhdHS5o10IMXw%2FwpJbDBht%2B2RLLu4OKsAU0wGI1GG6FEITN5STtdv%2BXg%2Bgkx%2BVQXYDA8KV9HXlw7YuknsePJeTOlbrewqAiasgXd2G5cvLMCW2pLa4X25yNDwwwIUelrK17vxbuymL%2FRD2VXunVHylC7XXTgbVZhui5cCFd97STJOCEylA%2F%2BtYSyb8chxXdNN7M1YYYT0YL%2FWJG3cbkrDjLBQ67%2B6NIEg%2BoKWFTJZUKQms9SICsNVf82s1jClaU8bSI45baR4JY2vXeGskZb%2FP7x56zHj1982Rp5yyiy%2BFr58OVQff7lpDMoQviKvdgQlwQVCPYrxBNAmyF8SY5uAZ8o%2BqbFG92dKY0ruC3WFhH50dmQcmh%2F1ipTtPtckX21%2Bu8rgi2hqWIi03jVv9mRHZzdBGLyuf3cjydWH5OZdaOHsOaz6ncPfUBoKsc9cTc136TOmw83KUZElf7%2BNiIIrbrgE%2FkWAsxqbCuQd3IdVhpYdJpxyTbTQ5aF7oFmpNjXIw%2ByIPXUZ4nakAGDJPkmOorNlykBsykHnGxipbjnbVXQYXlOZcaNZ%2FYHb8o7rOLgRhGj%2BgqMFy8eyragnhXQ2iycOvQiqztv8Yn%2FvD%2FApXu9HAseArNNO%2BtpSzNMLWYjL8GOqUBjyDVd1vOHiGRjJqnyd6TdTnng%2FumdQIYU9MD%2FILjayRg%2Bvy2MKHZgIq%2FH9OZIgnRqQH8o%2FFg6DUi4a3ucGLGVw2GjncJNn7u28ZSko8zhjWoYlsQttYcH7MXWEooQwfzKKhZld4VJ%2FTLDp8lMGOJk%2FEuiFktfoVuns7NXnN4bSUYSh81Kl6N7o01V3A%2BpjzZr7MCOJsFTScaHlV0zbL%2B1ZC5dUck&X-Amz-Signature=97a1b1b4e1340e8082503fd47a9031ac237bb4677cc355cc133db2ff88a6d231&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
