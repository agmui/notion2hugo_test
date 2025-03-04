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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262FNFFO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FUbIBQSR4xK90VHxMeNC60hX7NW8QpEpZQxL4Liix0QIhAILEkMQ8Mz5WHNqLydx1lVRABW0KyjkADeK8DUxSKWiBKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpmGOVSH6YLEDX0G0q3APudm%2BexsfvaPvmTW4Wz4O0%2Bw6Dn3OqIduf1QICxImb4ke%2BQycfoeh90fatIYFRJYBm8iZXHQ3hep6gVuB46F2I69o7BmeCc%2FHPgZS1eJQjquSFWPS8wNOOD1fWdog%2FclEDDJ1jyKEdj5DoIN%2FhiuovZFNADJspiLbPMXp3XbJI%2FSI9fbZKKR3hLQiIqBKi9VXkWA0LYQSQ7s4CB13gqMxRWZMJjJps5IC5E4KVXqLrZIvWzD3Ln6gS2%2BJoLBZtnUQmjgviDcM5xuLi78OrpkXqH%2BYsyWJaCAAtlUv%2BM%2FC9k%2F1PyS9UVU6EmYMpMy7fN4c0fNirc72hGVqFBQrvxM1IZYlF9%2BcaKrkIb1aMS9oCcIVfy22Q6Jdpg1vXRIcZLj5rxy3wTJVbg%2B3BD8hd9pon7%2BD9CgcXbk1l1jt6MpwAEw%2FVVC2HUXonkZacaJZjjk4R6Rx21xYZv5qwrK2SWSbCyq5onbaGG0sP9Ep6fK1DQyIRWePZ2SD15S0IHaw15hbCYxJCnrHpXUztecVCmzxeSmUbCZAAsN44bKhB0XcFPSl8VJXXO5I%2Fms0NptZvIOzcQdKVkDT06NkdPCyrqzrEOMPbcZMEC1qKlcYzkvnwET38KMZCETrdxKo2WzCo05y%2BBjqkAaU5oe4%2BsknaZB0X3sW8kWgWYOt7A1X%2F2McqAPDcswH%2F3Ol6TD7Jcr%2BCzEvWv%2F3eHJkM0I2vf83FBqMXHAIf0k05jt%2FUqu7%2B%2FKPZRgJQBoHhtsqAcT0pqeckirCfsvtzLFGGPAGj0XUVqfIXTrpUGnY3%2B%2BAZA3jeP8MCvPn6gz1bSNI3%2FnYo7X7zaXeLxi5rH1LSIPisnOMA4FApPCh04GEaGtxO&X-Amz-Signature=b87bb8cc3e805e226c57c5029fa2e7837ca2eee207f0d8a17f4101a416a89867&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
