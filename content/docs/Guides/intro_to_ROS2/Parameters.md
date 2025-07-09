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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BITZKVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRMA3AD9zvW5VnO94KgJTSylOxpgGSJn%2F0tTn2DmRiVAiAF0aXUZ%2FGNnYVdo10bg3Ah90FP7X%2FHXCw9D%2Fh3hJS1JSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGa9EzxUyso%2BUEKB9KtwD5h0nbcONwGXgfzS9y9sAkrlxllq%2FKGWW7IwxBzAk%2BtQ8wW%2Fxv8CSpJHjAikOpOW63jiRK%2FRb9K17cx9BipwDvrCIF6%2FXs1XSiDT9N1TQlrovENU5Na6rYbhXIDHd54%2F%2BlMpoeqJNUwmujd%2FblH%2Bud0Ju5gVyQ0YEbu%2BvcKEdxiR4mJEUKAxVpJkq3vp9KpXMqWf5khX1kpo3alhGU7RzW%2FPJGZKmcqdowv1kUr9uhCi7NtVPz9jlvcTYqGsAvQWUqvYqEr%2F58fPslGN%2BUXljv7ssD0nawgcGRZEI3MFifln195XGE0ZTyNh6LzHgyB3wBPzDCnF2lUbbaXlU2jeAXHo2sxts%2Bo3bXmbUwDbuWGJTFRkkFgsLGWGmc%2FVreW0MtBkUKP2Kz8U5reem91yGVQpTd1jmXYKm3SFiCbUrUz5HlTh2d3k%2BuZPO%2FcY55lgWrL%2BhPHy7Ni9nL9RhMq4FVqPnSMahxbPVU1iv%2Baj40j%2FP4t6Xl58PXUYoMcXgLlCzt4cHCqjrBZq5Z8sLoYTM5zDM4IR7xy2P1Fy3hSC2xkyN6k7Yp3fAMSyME4HyGxSTo6q%2Fs1jrmDINYne6PurJVtJwg1lp64peW5ez3DatJCp12f1pgYTKAryIfNswjJi6wwY6pgED9FMdVK7Ag5UnC7P9ItBRr6Ei%2F8IbICa3JYuXFl4O6xRvNAc1fGYKOgrdYo9VqBZGuzUDnahYoORiP3yS70OnZZdkXZwa7PJDzA6xsE7DAoZALCETkWr7bOq62JVRMdo65ORtzm%2BGZYNaCbQ2Wv4p7FH6wRnmnPRLlIHQoz5hJT7nKZUp1FcPqKYunKGtz%2BsZAwBz6Q3DVqzpuOX%2FwPBHUJOIp6ww&X-Amz-Signature=01080c89df33137a144355b349108f7f9c4334f7c68ed3e224fd695707b7275f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
