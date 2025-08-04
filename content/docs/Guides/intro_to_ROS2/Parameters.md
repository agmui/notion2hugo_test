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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHKVLZM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEo6cooXspZwz4hsg%2FD7QkiECWJ2xBCm0WoLJPw8V1rAAiBgtwnvL9MuCNHkCeeqkhzKDSrUGfCs9TOkmLM2KDFFSCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMFKFHN9SpyX2nEzS5KtwDLVoQDncW9LWCHW2f7xMkrvRqqfw1v8pK%2Fw5XqxEsZuFnIe1gRWFw6WhonJ3d%2FTaNSS0FWbMtln4MUI5vnT2y4ZX9x2LCNw3UJY7H0W4m2%2Fed%2FBwmtE8wIr%2FjPEGXo7uLOuKGCn7nBKWIskYAoP9LBwm5%2BmQhvwm79vIZfMJVFZKiH0xakUHkTTJq4ZR3DTl0B3hCXd2QwBFYdfCKwH2TEuUMDTe5ejDu7q6Qm5MNSHsfOtVG3JH%2Fpmqe2Pis6KNayTS9o%2FDaP2pt190fZ4Z6e6%2FKcHQ1aItwrV0hJR%2Bbue7KaXCyD%2B5DOS5J6LOm39P%2BRXQUgZFF6UMsyxgL7IXg%2BQdE6wyCC5cRSY6po%2FanKn58Odbc9L2xAN%2Fi4vUgDICFFfvHp0qouWKOhJ0xzTu%2F92M7RrhpCk%2BU32O58TxBJ93Et4Yas9P%2Bf5rNymsx9XPVwPe3J4qIofa%2FWd%2BGG2CJPJYUWYwrui6p9DehF9KO99ZkQMao88Lod%2BvyrVxzg49Xcj9C%2F%2Bb6bIYV8jRGAr1zTnHygfy1QKB6ufgho174S3YnfZ9zW7ofDkBequu%2B1jgu9sMMfUlwOz6%2BvJWL1rgru5YcXRrEzli%2FLAeLv6TuD6pdgvUEYEtA9BQzmfkwk87DxAY6pgGkKOzDHgm7F4xD4ONx9a6qVkSQvz4%2FxH65YuUGWAD%2FjG5hPJxhCrayc5%2Fev60%2FsH50rKxZxOD%2F88DmdFolpYVtF%2FC6uoYOQVSPLbo4QHfGAxf%2B7akzxTGFCScIpiferWoBEFmJGqEEFZCeiLOFBp9AU6seMDWX8z%2F%2BPN5W%2Fslmwzmrl4MZ%2Fgsy7PW3SIxVnVyRAOawSL5On%2FOQwEt%2BSACmfYAkPDNw&X-Amz-Signature=4a879d5818509cf380cb68dbb5fb0a778ec7b52a8cc0f093a1183803244b3d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
