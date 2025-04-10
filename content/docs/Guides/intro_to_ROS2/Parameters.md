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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJT7KK3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDz06UJ2c7puRVuZrl18%2FQZI0SFLMPpaag9BkSjOlZmmwIhAM2emPXb8SDpzHA6fD8Z96OaBAZZdVPmONgstnmOvUelKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX8VN4bvHY%2FZ%2F%2FvpYq3AP7iawPr36l79gVibwrxIEzuaatO6XvpJj8BxfXKLeEisW4HAch6SxHuNvyF1gl3nhQoTU3gkkaW4yW9mkf%2FEYdSRg6xNh%2F%2FL68Ybe8oi1VpDF3CgScV7tgKxBb2FdNsyc2Z1TI8a5spDoDYztuYSF2rBu0R7MmHPl1dsJLICjLI5udGBWtoQt%2BxC2752NdUCWU9YBDNtHOlsMBG3UYBCUAkeFAIftqGjpruACUeDjgGWgPZ%2Bghr7oF0hRxP%2Ft9jDzXHCdr6sfDmBphobRnpwvSJeQ9iW0fY72F1YTgF9ut%2BUV7PfbtVBa9TkEY4JgTzhz2jOlHETqEmexx8nIjlo6jN8KHcnMGDVrwb3PSE%2BpRAwrAe%2FnRW%2F1yAdbMJceyA7vEzFJSvF3W3q%2F8jnMVFSLfW8zgOxj3fvbajeMcXUbydUysXmZ72jk0MGNaBTgSeqnM5lc68o0E5vPNWa1%2BoBxnTqbQd0R5ecjEaRNsscBiuaxbs1%2BgwzyUBg1N2Gl0JfPbKRS9lB6huu0U2YT%2FfZISdUvqbBvBloh0XYhmiY4uC9EWZoL41%2BzKDAth5ez2cpjiW0EQFwwKfRb6ubB1gpuCMTSJcB91qqcFAPaP8jPxyE7ANctMzENwFlZRrDDooOC%2FBjqkAUBZqORpn8rDGWwDXwhW9bFziZ4xI2JvxxlaZixpEjl0ssAWU%2Baxe7NwJqj7ZDiTQHywDg2%2B1heoaHU6kkiJ3W1BZS%2Bs1m4V7fwX66G6i0Ai6cgf8EBL3y2M%2B%2FBzS4KS8Ig4AULGZTnFIwpnqAqAjbL7L8AhjyVy3OCLXAiSpE%2Bhsi5FTziAE020INiGSm%2F7eZqdaQtoB6u1VyYTRkU7MSGQ6pTv&X-Amz-Signature=581a405e780f0d60f5db0f1b762b649f0ebb4bcb83f1780e40776f0cb9e05c26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
