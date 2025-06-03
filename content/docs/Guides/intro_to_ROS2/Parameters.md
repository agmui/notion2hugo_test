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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZQNITLJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCICOWVYAaO3jZLikRjsXP1fRFA%2BfZkHIf2yOfxVg3lz3nAiEAkpqLloNNpapPPh3HUpUHshd%2FGFPBPYKJmWZ544Ou2Zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGQXKZTuelAiTuMnkyrcA1DJWUVb6SmOQsWNiTIMGTeVdn3VEl%2Bc1ggftcwKKaeg9l8NXt%2BdPR162JcaxpOBrdw2Hy0%2ByWCkm8URzYGWEIflflZ37GDq%2BcNuDOWJKoD8dZ8HaefQRYWcEi834rJUZCPQr6dKfUH17Y8RYgiQ2ygmg2%2BFr36%2BWZ0eUDL2RUCOrvSIDD02GjwdMmGmdngNYqIWZ0FjqiV4DO0wxMXOsIZWzbkl%2Fwm0bknUsDS3W2Iz22UnZxFFYLGBkZKJQiWjNd2h7CGnaGmH2H7dcZ9Ko1CM7tD90O7H95mquciQuSK49LcGIdnxdiv25EgEs3ORvn7B1Kg31k%2BXP4Mva8zHZ1ECe5xHVbJYvGXvz0YGuTLxex3eVnfM%2BWh3w8fwRtKMQm80%2BEvgHKJ47oMVgU61zmR452u1IBlmCbS9A3jjB4LyCm4tO7qe%2FCOebtojkGjpEFExlHGA1dtCs%2F3qvjEOR%2BowwmzQKBc9f9vNF31YMiUmgF5gHrlpLrW9d76zymSJ1suvQJZANkhDvLkPLgKR5RXTJWj3kUKTGXIilhqNqKWsG906xnLAT4zrgvCFB2i5TY6%2BoDGaoPVDFub47nmmp0Y4V9qANr4rymOZv8mdOqdMRQiDzL%2F159HcNZPvMNzS%2FMEGOqUB3ubBmTu8dDqkGjEa32BFGhVhXv8t98Iw5wfZe5eUE%2BWr8nBZSmy4tkv11yabkPVF2jRw2%2Bafg4FoOCKWc6hF8nYAvych%2FN36c0DLh%2BBRWoIpGhbg7gFT%2FtbeXpdDR9Nt6YJbtQvG0zy6jHc1Wwbk09VDzJP5vkLGVYQa9IVO%2BU05m7WHPeMwIdGmOfhlIo%2FW%2FwFrJr4m4MKavplkKSAnaXRFNkFO&X-Amz-Signature=b901566898bb1068db73c0b8a7cea8539d19e34e192a254fa0c9d72d592aec1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
