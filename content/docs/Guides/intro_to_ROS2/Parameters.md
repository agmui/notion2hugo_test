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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEAAECZ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJ3vnpICkM%2BMG6jHv4YVwcqNgofm9UzmqxY1n2A%2FhrTAiBhrjuvDrSia0CX%2Fagsw1Zinar5XIxMhOaQdKFTYuJZxyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QsueF68%2BvHfq%2Fg8KtwDgz5Jjr6ZK5RqVnXEHbOVKILN5xJ3islc0ljs%2BRpF3op9hVXzEmZQlAK8kRg1kJuwSLEpGEAXXh%2Fo7P8vpx7duktyCPiSGI6PP9wzLeYuq42Ldvle%2FIEwmBplsR7yaZOoFC%2FnXNp%2Fx%2BSseZfOJYfyhQA2ARcTfWT0dlkwc0VSW%2BOYrh8qGTCiuFt5sVvqlEUBWGzEu%2B%2Bw5pFoeqLm01Aa29epFJhNSD6oJbmG4UWD92vQz953Ndl5YB1qhxfFf0iW%2F1GH%2BYo8vGEzy9E1I0jNlT%2BZykZ4Fi0j87bIJErGOrMR5N2S6Pgd35uy6v6E1cBfjrTLuI%2Fb3cwM0uHDhaxCUtNPMvmgmVMak8V30USQBZrt7HeiHhkpRiKeoPh5l7VHeEF8AQRZoqbEEwyxgDFMi4S6HD%2Bz0vkS6PQT%2F0q8UcpXacNNvUb4FdvL66us0OUFSIh%2BiQ5a%2B%2FMTWvEbLe19y2%2BhGfd5PVO1D63tyDWaCwW9%2FmVTsm6%2BBiFxo0gl8MuqcVf0fETbwDKWO%2BitvylRgz4xkofrAc3tECFw9tKAbC1Y3rw9PeYdx2nEksdZu3yg7ACiP3t%2FDiA5vUz5A7WszqXtJujMa77KQtDyG%2BPFnBDtNdwzrxzgi%2FfRh0kwt538vAY6pgGlg2qC3NsZ3fWdVS5QByn9LIxRL3Ji05HuO2GXQvMynGv3asi%2FzWGjA2gSKFf59PC7KmsWOB7%2FxAhjOSfoOH%2BrMq0nBXAZ8ld2O7RBLf1DvTsyOQNzCauHunMgKDgL8v3j8a7YdrWEcC%2BsyRGNJnOUv%2FPxA%2F1w7pu9LMCrD5W89kA5M2rINGgsdJLCQtoM%2BLhK1Fk38QwUN9H1XXdmLm2ReiVwQoFN&X-Amz-Signature=330c6881c890fa99e66d3e5541f616de8dad4c86f4c047118a5d99d3b3e60f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
