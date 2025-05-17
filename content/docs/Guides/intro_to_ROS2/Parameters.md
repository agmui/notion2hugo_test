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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBD7XB4H%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDKYngbhVxpGagP76fhILhWubGNFLHo2LkNTyP43pggIgbHtFiiinihYPljZWrYn4%2FKrNa1ggDsMC4CEcutE0XH8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIkUdKsjNYdEztgHdircA4E5Shz6pdpUHOqZiu71rduRAGB2CuGzGo1O9k2nrfH%2ByZEO8ik%2Bw%2BQRvlGADgR668vNUt9LezRAJ%2BxIIRRbHb7YUjYTbkFA1ib54wE0%2FRgcwKGaL6vVHGmV0dgfzb%2F00FlFzfju6iEtWzYwQN2uAjid9ukPA07m6Q%2B30W%2FoK84lzPzkdS9bLLScwMn1ydIqPjOF81dxjJaV%2FJhmPDdoHefYpqR0kD4CW%2BSQzLEAWLnDlRmuiiqVqEaocimZ9TCW%2Fk4rQCtiXbabtcBgW6J5MEPtNQWlYVFW2qpF%2FPO9C19JglOf4pFKv1DKptX%2FNDMSrb4pjwhMvVpaznF%2BfvX3idwgdKWgBQOsgfgvJQtj7emYTrAQee59WOzyxBaTaKH7QTJ9pEsHjFNfldI2%2F1rxtP2xGSkQjhoosntzwik2Cfg0KT0T%2Fr1kqgJJURo5mT%2FOg%2BkUL%2F3uZ8Od6xmpF%2BJbhYvnyjAspxlWMZyQtXa1LykZZzuOVXh6jcx8szEQGUe7XSG5mxSBB%2Fl2XsdFoWX%2FUm7YTYbtqYl2BlgkL0hjZspbYyW%2B0OnpLpKnbdIrcZFVeWf5nN3gY3TAyUHKptPDihnlMia%2Fo19xCdvc6IRJqRIBOzxQknxb53Anq5T1MJSfosEGOqUBJkdGMIhnsbTzlaEHKOneWinbNis6jNfs874QATKCAUWUiT1YTfymNQwT2IqGM6%2BzsBOqS8IRFezT3mmEUkkc4YHy%2FsSxYMzYFHl0vVO6NCUJSZepVP%2BKrX0AiytgebD1pp5uWP3mIGY0AKrKNM%2FdWG9HYWJUm%2FEYk%2BECP10dx9AQWhnY4GBz6vUJiA%2FzxRACkbyiF8baUBMEf5iEaRHH4pTYtqoK&X-Amz-Signature=790bc85eecdfead1de164174b25b193098444939de17bd86e55dd55eb13dc141&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
