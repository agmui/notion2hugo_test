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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE2FZHGO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAZh3iKZhJMef0I2chHQa4HPlJOldbY%2F39Np94ED9JYBAiBvcl0dtsoPo%2BnWg8Wv%2Bw%2BFsUUphHl%2Br%2BcRxh2r1%2FdlxyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMiEJAsWMldXAaAEKtwDHTni3Bp4UbOtj%2B7i%2FZZ25D7tUSVKKWwqtbqdOBT6SrngNlyU96%2B3MSq7L52omXPy%2B8wUEJ3Zh2SYYk0Nsy2nS0Fx7LRNYFLscgFU%2FzoQvmjckZcwzItIWw0SYTT7i8LfsO90%2BVtUjJ5wIaAFxxZhdMYe4gWR7zgk6jQD3koy0CpI%2Bc5YBvndFopkDb3qfpfoQrZP4OjNe1Gz3R%2Ft9a6vKHKCP9cDotw63kBd5HzSqKLSuPPPYxBb4NrbrEJAQ%2FvfpX33R%2B4ZzyYIR5C3%2FN1yUiOecaaZMtYQIdQIXxT0pt57IqgD1NrhCFs0bqVePvo9ikp9dTH7OKnRuANaYxH%2BaFCO8ex1HpvOeot%2FaQRgri5%2BbYH5tytgQDDecjQlL9lutb%2BySrwIsY9w5pCp7V1e7YIqiDBV7%2BUMPxAwqnLZjGvnNaA4Qfy5XC0jqDogia2q2eJGiPzCGISilmZvnAqdwSGXQ63qvCEvCGgJyaq0ltT%2B8KuB%2FiHiE1kWFfg3XH1aJWZJ70TWuRAgVMi7HPkZYiDBa6ClQg3WFpLXwnUE71ioZ6HynKh0bqxTBBiQ9d0BubE3VlO0Rm8%2BzLfQ6v0RmnDmv3WdFk41SUbpH43q3RQfghCQUMuSvXCtOtow8Ie%2BwQY6pgHX%2Fzl1W%2FHDowWrwey9n1AQkF855EqXZIc2ZS8gcztoMNA6b2fYCKoPjs3QiJqv31i3ARA4eR4AGJnU6s3XvnOWsw%2FEskAGMUHOR49%2B7Wk42FasCkARj3iRkABtOd66CLlCIC71M4kanaR55p2lBzMFWN3KBYFPlylAPEzQlRx1l4KFoluxxwegGnDr3CkFjb2xYsOzWg49lXOfl%2Fg3twiZL7A0qzud&X-Amz-Signature=371d7c59089aa8a366b9169916fca38794416c2b09bfde2370af1370d1746d67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
