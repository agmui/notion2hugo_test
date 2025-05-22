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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHZVDRF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD4ayJ8hJj6CEL2C%2FiwoFJ%2FqMDiTIn4DMtVM3F8iU%2BiHwIhAK9sY7NTMvJzeJb%2F9zTZWWbnoQwuz3fydldXntgWq3wmKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzct7oqvTit%2FHqq6SIq3APABKWj96ZDKQWshi0fWUcsgDBW13NCb17JCcXf1rvEFI3kEBWogtFB4P%2Fu4mnsPyLyvXSCdgOfk9eugYpNHOr%2B%2BXhIynnRudKNhG6yuK6MLnV9QR3kOYhuQ5T%2F%2FxRi5CRh6x8xMHKp2ChIo9MdNxtVUeFThRyALekWqRIZvN0I4gcdVF5EDZeXcGJTgYD6Nstc107ZYsbYZHGOsUrtxPRrgzloRXU5bh6BKHbwlmG63PgcJEatuMO9iF1LmsbQIUk8b2sVga30I%2FnUqLYKh9LPWS8Hscip8osghPvP8fedVbA8Fzgchf54eXuRZ7RnbSHti%2F0NJ3dKIP3OjpmaJyI6XndAV69MS0PORnVMvf6YyPFkXK5NGiXGq5h8ng4zXv4kOuWi2wbQdZVXyaImmDf%2F0tGxqCr1qXFiODjI2mLefJrD8iMYnL9E%2FxJ8PaFAIrvrzpqK743nnkYsC0%2B62mDDt%2B1%2BnVv4gQGsaVt6ukkKUF32BttxdVrjfGJc1I%2FcCwN0%2FMmFMe3Otyy%2BcUKr1Cjv7Dduz4B7HjqJOO50gZ5LeeYjNXjkPjnlfwtMxi%2FsjFmMf6uxN4q9VzNicInp0KZGoD%2FRKRLVh5sBNffqxtIbrAzXzjOZxP0cNKg9JzCK3rvBBjqkAd8utaCmzZWzeXAEowQZ%2Fd0%2BmFKaGGN1wlTsOLYJ4J5Qj0BDZv0N%2B1gO4M%2BEKbwGGFXhsx0abbn7vaRnVv05b%2BTfCvmv0Z8kVIn4i2%2FZeprWoEY6jxke2AolVmvGRu6gHLnbHgUg1l8r%2Fhvr9pAO%2FXt%2BbkNDHc4NzjP%2FzCK%2BrgQGTnfRpFAlnTRogNAfwUN7y08ArZwQWjyysaf8qPz6bpGf%2FvMZ&X-Amz-Signature=6dd156adf59853cd8da0ae003da9e1b9ff46309cbfba9f57efa4ecb2d0c9ba7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
