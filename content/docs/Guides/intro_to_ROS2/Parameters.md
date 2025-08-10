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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7MNO75%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T025811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZwYknT6HjyqwkccOChFxMkMZtSf8Bvw4Y%2FzmQFBMSpgIgFXQa2YmDwX7qYtfhRjGPzy5S%2Bwq5pGx5wDZ26Ns1gXoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMId5QJxJUWpU%2FbsHSrcA8jOh1YlJutMnOUEGfsIFdO9z5OtoVV9Ul4qI2%2BsV%2FUWorClhCihFK90Z0rHoUt1UuIVw2n2jis0bCUanLolnO5v4TBhPjps6eO73Fwiwx6bmTS2Uy3dPXzW%2FuhWv8ontP0DAk%2FfCg8h3LOU2rN%2FwEo463bjlCGz9y3YefgoTEdH4evMgs2lK10%2F0VLAF%2B1ge2BMDz3id3RWFhpto3YS%2BtApVSBH4KHVo0zDiGB%2BSFD7MbJEod8ICNNoN3U6uOeL7VrqkJEJI7swN348mKylJu5d7sEp0ThCwQ9cLTRs%2BxxIpsQXVypBEJbHiaGEtM%2F3jr6ccXQTUnxn%2B%2FApbdd0gQhMc6hCUjWVx7fPWzJ%2FZGlDpPrugeHotykoASBPI34HFQIEuXeyxBflY5tpaPF%2FuqMrsr16qlJiKfKrMecM0p0m6rBwxg7ziKlt7I3VCugxDy6kbCA2dT%2FNkyo462EPsG2m423RMKyCNxvHfGczqE1xtNRqVnQkVIKUebiifbbkCM1%2FNPwAPyoCFZUeYvrNxTi0QrpKMfUwMQH3a88nte3ze1vqByCIgFi3CP3mXlk60b37CRWCGIiJjGnORpU25IIzcSTHp3Y9U0yUUpolCsjoYCZxzhhuNGDRHHEFMJ%2Bz38QGOqUBz9Hm44tgs984Hb7p2tkqtZclG0xOzMYUBHhIh4D4FmdkToUJZJJ306ZChVlOZqhs54nCERQxwXCKEX8CEDjvFvM0OJRbUkTMPP0aGeQVO414TRgnY%2FnzWS1tvR485AiBozErVazumV%2FflH0JtOvCAp5vOzyVjT%2B1AKxq1K4yAcFqhEa9pLTwEQ3MMj%2BOFmAHULZohesi3dpI%2BUy8eT0%2B20doaU4F&X-Amz-Signature=5a59e16a81d39b109c905add86be33dcdc7f36f29923fc816b5447e70b861ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
