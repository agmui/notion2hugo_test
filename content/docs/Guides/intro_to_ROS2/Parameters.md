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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQUN6TL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr3lyX%2BNV2QQSpvzTb1eU0WT1KR5HC7TXsfRyxKGkzkwIhANsQN0WD3iZHgIxDA2k4OpBUIQBxrBzt5uuKUqzzgeUPKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtqNdxMhlFqaBAgWYq3APfY4sB%2BWBFHOFg0%2BV2TV%2BT%2FZtXKA3eSJANFY9IaZF5%2BdW5f%2F4c1Ymy1Q406GvzY%2BsHsmiNv6WEwC46kpZimOYFXn5T6dkbTR15aO6qDxervtUYZj6d66YRGBl3eTICwwv4AaLsKQmrxZ0QBHK9cL6zpOsvGmaeIEYyAluQ9hDYesRMfJbqnLImfLF6bbivn1r57TLWoPWZZV%2FXndQDEfYFh6yyy0fP00nUmD5lj7sWIO%2BSzuhIrvhmUtVPkccqVsNY0BOi9gkdp8A42A9dzGa7FlnmT6cPL2p21GZQ1Jmn%2B%2B7MvBnWcC0PmCn5eIX0w7TuRzvULMWnjamdlfoBe1X%2Byls5RDNx2TVgVmrhGJe75P4RMIlTKvDV27BTy4ubwF1QayAIJtTu6dyghHmiYH5eir1Tnl3o6z5GcXWDPtkk%2FmYcSFTdhlqd5P%2F%2F5IeC28ZQtUL0amaUXsSFgTOYzTUahQ8B0OIk7C%2Fuoa%2FktYGU3FGprJrIwlFim34IGcnGccCO9O7AhhEiM6MjjxLQotNtsAtO5EHXQVt6zYfaUlMkjskzzdOsg52lPesPji6xTxgVk%2FwIrPtKhKHqCu%2FQfM%2F7tPolC%2Fs%2FBmWD5PcKF5t5lQ3JuTIhSf%2F4R0oupDDAuPLDBjqkASguKn9MCt5CIwoKxswawJCMy0YASzWZmjgWd4mD%2BXPSQXrmjKskqYwCYubA5eE2OO8kzdlTHhnavsCmZ1QXVy%2BXSjlZtZHcDn%2B6t7HACVaTaVsveZJRa977AVomjmbsmQoXAn%2FZZMojYkXn4sH9vlifvwePxrv8Muu9xI792jxriGhfIMN18nBLe94P7Lfw9BT8wMzwA2WJc7SP8F4%2BXW%2FZiDAd&X-Amz-Signature=8fc55ee2c7282412b232e44f0cb5557994a050b034d1639c0188dcb435e7f4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
