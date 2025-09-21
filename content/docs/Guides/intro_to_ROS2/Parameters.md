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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB3NAGNB%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGshgX9S1utxY8nb6vVA3gbfL6j1zvxeUNt0ulmIN4ywIhANv4%2Fd22rku9p%2BMOx0QQgFZ7XQELzugikAAGIqKa%2FozfKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVAr9YPr2bbJ1e8A4q3AMhzKNw5K9Pc%2FchqN2PHJUS8oKW9il5yW70YwVtrDj3ZKsRSwZzcWeNQ561OF9K%2FwqPJ4HwHsWvx04E%2Ftvy3HMsf7%2BbFixmKwUdwa%2BzLvyMr2q36UbkM5ixxz9KOyFoEiI5Vj78Jce8N6nkuRsYPqQ%2BVYCoMQifKNwS7CaUf7eUzUTCDmh1b3l6cy9oPDvfFPOAc8CX%2F9bjikOPMmDBkIRCihE6GiG1NZooQMisF4pJmlMG6NCHc1%2F7nreUUp5SZFlBTNma0yhHSeu3MWTesKw2h7aONCTvrfuBSLRzLA33g3K1KniuHU0%2F%2BQhiC%2FP%2BXQyzT9IMh7mnXFAbthEPD%2FwQ8MMUjXRnuld4TXVxY%2FYhKVHV7Ok8G9P%2FOXxNh1q%2F%2FfgmghFnFZ3jqJurDWYnUTl7bh2vO8VQDhBN8a4EvGdcb0Sf23%2BlMxyOoerkQRjzg9QcVVv5Ck4iioZTDVDbLAqPIsUp96LRei8mSq2kH7pMHBT51p6JtwI%2Fg2VVZYCbRppqU0TzLw3PHgQD0ogRudBF92utYwT3sCgFs5Y6dXAFOUxbUm1H2bTV2C%2BfKIeNpMKEkfWbdyVdurZH8m6GzLcGXEntA9ZE%2BkurQzE5TulbuL3aNKQWuwnuGkGFhTCUn73GBjqkAZo0%2BWmTX%2FA0hAWW4OBgeYtANPWX6Y4Fr1xj0xy4SUxtVXiYAGSi%2B%2F0ZitJi7XQP2TI1kq5DfXCGxbl0lGd0ZQ3wIgtNGDvM6HWRGKW6M9iGjZa4nYGrIFPbYNYR2f51i0l4y9HUKXjfHN34FdF39PAdOvL2Rs1uxQVkz9LLXRvz2jlRfD6mqiBd5IowaaHPGotoqMhD%2BHRAriZw6zV8dGLnIv%2Bf&X-Amz-Signature=3bc8b5b6567ec7b8b8b8f7ee5a4e03d639935e82f45d6ebd99234bb7879c5fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
