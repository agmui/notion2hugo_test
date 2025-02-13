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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKVFASV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX2LNJbHp3Ef%2BOLN%2BJpIokFyDcZOePvbERFT19vky9dwIhAPzMuT8S%2FYqEr6GuM86OtHBgSfdTepB4HjW%2FDvvDPGPQKv8DCBYQABoMNjM3NDIzMTgzODA1IgxG0kMb2VeJt%2F%2Bgg6Iq3APbKE3LbMxlWnWoyl5w%2Fs2CCBWuu7D0QkgCbeky16vecS0PzZ4v8fTd1gqnrcJhyXYSOkJ1gXMi%2FwGAlA8SO9FktAGS%2B9MqiaQQr%2BZ663Ea0KH%2B%2FMhad7mcMDBWKN%2FPKOh4IhCvZCELwg0vauouF5nfLQeYPQHl%2B67gtRPsNW%2Bv3BsUPq48OAbMYR9IwsSlgPrsfqcyk0W8oap0JbT5mdUP1JogEf7T7NewkfmUk%2BxVudJm%2B6U5yc7kbTDdktHvc5ZPGM03k28A7AEftzms%2BPAcC%2F3qiZeux6D246X65utiGmY8rXRwzt29GW3Y9KLHFdqw%2FFwzHlNimsdBsrw0%2BZJ%2BO5X4Q5n%2FoM2jHACGJgq4aNOMfNH2pui8YJkufW3%2FuaonbvF5lbQmgzdRpf0ZVAt%2BBp3H9lODi1WP2eLXc2lHzFXsyyLQaEaG%2FEq8Pikkxw0N4hEB7YVDyOSf2k2LuVCqGjXFqmf5SgOqAqvKt%2BipIJKqcn8IZmHNskZZXXwm1M12RetPto8KhhgDgmRlPmGSsnvZRjR6%2B6%2FOGm3odN96VaMfKqRXnc3pi%2Fed%2FMuXDlOx84X5IrwTS16HkI7EI6Ugvv%2F7FfE8slPfGXphAWDK9HCGvcnzYs8ZEMoQkDCg3be9BjqkAeMs00%2BEI0cPVlrm7UyPsZgBXp7Wz%2FjQ22RfKb%2BXpnpy1uELokF72YAUeGbt7M%2Fnz0ZEaWushStQUp0LkPNhjXCaEcqH9smMbq7FCfR1k8KHNuqLpqEklf7AKlvirISObGhKY7RJ%2ByoNyD0sp7dq%2B3OunRpO1JZTcWj6%2BMH3RTuK5raCi%2Bk0gTO1OoK01iEC%2BruZ79OzdA3yVQQI4PCmzbwMfCIA&X-Amz-Signature=802e4cf77cba6156b6367d070bd6ebd0b17ef237c577e494205de5ba9c161a82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
