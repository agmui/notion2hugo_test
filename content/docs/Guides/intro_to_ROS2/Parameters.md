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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562WIKQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD5DmB7ZTjz8kQHhMcCY476FPAwhlBW%2FWK2zNzSCAdvEQIhAOIEyE9Wb8NOf8MH39ftkejL2ZvDUwd1jZ9tcW21XT%2FIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEECmyit9swnYIdgq3AMlbQHHqq%2Bn9gMRJK4Y3yXFmvL3aOBI8iuBmc0mYolPx8XLjMfMmewJkGwXfXe%2B9gpBKvXfRD4ye7VQ9hRl9Ygu%2FzPsmlLL2Cckvr%2B6vGH8Lb07ZRxSfWKM1nH1byD2WQqCKpAMnIfg04eEwJ3d8JkatJqqnvTRydFhao3C76UKNnwDF89R6qjLwaiKrEXVs8QXKlDAH1voYS%2BQAm8a1JS%2FguK%2FbMwbKsYTtN2enkYyFdWrzj1LlraBqNvlRmbb05jjYVe%2B1qcgGXViEkc9t%2BUpxqL35S5%2FFvtXCci6S5f2cBgGEY1eGZsxnbE0JwIKr9DgDcDPRApAXkce7xP2hXjKjINCq8CWEi3umXdcrjHzX%2FMX1P1l%2BCjtD6U8rEKqjUexqvmiSnePzjea%2BnKpuXtLaG2YvTCZzdH7c6MuVimQndF0Cv4Nvo5a0FdieUCFEaRHZfaktzr6ivL3TXGJ58%2F0CnQZ%2BfqBJqximQmgUQRPikZ42Eou4oPYKh%2BOXIPR69UylzpCjQXhhn7grr%2Fh%2BXgb2bJQJGkRBP52U4%2F%2FoA3AkONIc%2FhI%2BGYjUyf0PR6bUO%2F1K4AnY5vc169whcLanFXvMu8kiqNOurVDA4o%2BArktsln%2Bjc02xrdFtQaD2TDYssfABjqkAWUUp1ohfqdiyeSlCXUlhMAdGB%2B5v5OpZPaBccTTE8i6vIF59e5hWIYAagODEmIDHPiRfg%2Fg%2BmdkOWgAbZyo1x1fD2IkZnr1ByTdzkdjIXUeZdFaUo0Pa6zQPqUfi6fbrpB3C9ET5DASE6dve8BrWCYTWYTWJ8sEO65k8QIMBF%2FOASNbzvQOoNUuyiAgAAJZIKzDK4nq%2B2yeuMg%2Fn61XLdK%2FIvOB&X-Amz-Signature=c9cf3747fa688d97581f2cda83dd7e4b7ba7529b8eeab613bcb1d28031f3cfda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
