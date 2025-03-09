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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CB5PRYY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIC8sZXwujYO1QPZg4KnocHlXfmRNxjCRt5DG4PoqcZ2fAiBb7mG%2FHb32wxaFZKLXSFsooEhBR36mB7YJiBCMUjJbqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIxpwkjCvaA73OY%2BdKtwDivamLvp0k%2FFHlVz%2BNWPovtrqvbySMf7gKxNcG02SxnnA2gXad9yaqJ1jnupXQZC5vsySiw%2F3GwH3U9HvAc5IZQ7EElhC0acVJ%2FIEye0iQwOdEO8eAzL%2B0ata6%2BJxW0%2FXnS8khT4lK1LtvrhsEAUqay2zFfUThtCLhVgny16%2B1SbcHcRk%2Bm0J2NfqDVvnwaXgAWgtkMuWNP4mZqiXVoVW2DOsVAUiiNTiuFp7btPKoGHurpzmqKqe34v8BaB%2Bn68fnP2JfemjbhJA8%2FInV1CdnH6Ipfhqx9Xl5ufENeKQA2UtAM2VpBOx3xwEHF93a77suhuf9LXgNeOUFwfu6nvljkqsbyrOR4m5wZXxFlQujJnVSABNwFCEJ2gyaLQuFQ01G8z%2Fyotq5oQpwP8PwSHclDau6Fn9qRntdvyOZQ%2B0oSPZdQuGwB71sM5sG4MURexNqS7GQW9BBEiXSHbchr1Edutgs1Gcz8rUMJBGE3VtSLovN8J4iqKMeX%2BtCSm185mNBALIMFfz7HcgqQV2aaXzjxsjmISEaEdZwnsH9O7pCLmArUpIjEAPs5Z%2FiPAZ21Cqd7AGs7u1cOvVMb9NBtbp0kh%2FFOmQ1Op6XRAAeRUYqTT3TRvKqIA1Ku%2FgmBwwso62vgY6pgFxLfLMXHLtwcd%2FdHAf7HrmuJ%2FjTdDxzTWm59DzHkHj8LZNj43bbvZSfA%2Fgx5e3KMnLQIaIL6xx0%2B9mFhSTI8KGWs%2FjUrPC1QZKwjTFaYqwJoumIRBMZosR08rxdMx%2FOAL2PacFpehi2UgKVi8mZxUxtnaGlX5ue2RLpCy59TFlOSmo%2B9EbRvKzBSVuzkwM4Cmz%2F5EnSItsS974X3Jnk1EcR%2BpDJulq&X-Amz-Signature=129d3b5f4d0f169a055054442022810b3f63ccdefca95bed9b0975e1924dc87c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
