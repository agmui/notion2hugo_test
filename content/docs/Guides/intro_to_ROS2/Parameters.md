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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H6V5PJI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCh2LE8UPmIqEf5MWJ9bIgUMQ1AWwHZop8moUj1iIaLfQIhAO%2BR9v2ibczZk5zOkgldbPgc9Mkk3OOWhGITWAWhAnSAKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnEqUNzEjYto2qgQgq3AMkvwNOKyHbCgsnnGFbl76CGO8fX2ANvW6Hnc9YCxlX5DSld4fN4zf2K3sHf%2F%2BWhYupOv2ey54QsGOp4xTBvbSkzERf%2F2n9%2BfQ6RH6q37hz%2FpJTA8VDrr43Cdfcn3VI6I5PmSWRClwcouBvyYUaoieFwr60X%2Bon4yyUnOw05QSCM2lkIDkSMQbBy%2BTYjgM%2Bm1VAluA%2Bo2PvwN99rtftT8jIgIValhiiHfDvatMWWqlNyYMWrQidWTzSBBJnz1dxTDhbuPw6kHPUZ07V7mTu12TdqyK8XyQy5NnLJaiF%2B2RcpI%2B3sCD67alSmuZuliytRSzUANlrqbJpyJ3DoSX9idWf7XiNqCUfGA9YKIzGTu9HFkgQYImKCn9bbn9h8VglQkS7zgJ7OCAcZY%2F3Bgp2zvFVb6lGE5lA27XYYMp5NrcXVY%2Bd9WKO%2BkGI3GAcVDrsS6mQMrwlArARAMKTz1NDYfjn8KUqq0WrfusCejGxGomYPhZmhWAukojeN4mZ%2FjwIB02Tav6OZ0uvQN1VvXSJC5Y3plXFKx%2B%2B9xh3ycKtzk0barU49WKZq06LXeCOdQTROeYox0YeJQdKINWayFNFIgBnqvlm7vVc3rPcPzT91Aio4siqeOX1yiiMJg5eTzCQ6tjEBjqkAba8QQZVfCbiUveQyWQS9B%2FQ%2FzR1G0CP6QIfuFZVDkpgZ9koP3B1b969YFpLSYZBzhrlnJOzbwWPakxB%2F9Rf2heioChyPSj6OzpWOaLbRDDdQn%2B2rDEDXiKJ72nPDZHmAFD809Dj%2BdL66oSY3XzQBkajK4wwsFPhMxCitaTRMKt%2BM3Xp3krkGDZHJWLpT4b5DEAzrFSaDyAytONhNJqLhCork0%2FU&X-Amz-Signature=e1dc414c45efdd0ad40f8f171c0531ac5cc9a9a9264bf6257d0a9f980562b2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
