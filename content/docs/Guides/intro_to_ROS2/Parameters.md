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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZNUEFC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZYVj%2FhcTsTE%2BIhoGXhADw5WAnpoGVO75N%2BZz0Up5yAiEAnCmcKfFAwAhP%2Fz3GKbzaw6T7UG8Ua6T3XcfgJdIRF1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT6YEJ1d4HM7C%2FMNSrcA4QNUrxf33ykD7VoFoB%2BEZkuCfDOwa1Rxerhf5i6rzPOho0npVHFCgD0thQmDmlDpSODJgRxhDhOH17OHRKzDm592Z2FIGIPr1LnYk8lNcdVe%2FqpSSsDPpqvS4EIermNnZNtXe7wZC9rHSbzURK%2FradRUgHrCv0OL6zBZP6FItk8UAX9FtnWBxQJKLuVjsepy%2FAMRMKQ6%2BJN6HUaW%2Bfp22G7f4pQOWmsH9CAsEiGhp%2FCXbha88ajFAWQUjCfncq1TMv2IkYuvg6ykIUhZqzUPWNtzC5ml64EQ2qFChyg0JlL3GuKj01th7mmmKTyYeBwmOmuugqvyJFMiRTYUQxssLoEIlA%2BZb8VCBVqj4ty83Q3W56Drz7y3H4Fv7lXlDzHobvgABIMp29mO6gEGyfQPf1RGMOGYIhROXRE0G4VqkrZ02n7z81HOhXlV0fijR3wVISkvoR54lPnM2v8WPCcUwUhgqrLH6%2Fydc8jOGAvqGy%2FhZxkjBkQkxM4%2Fh28wnHwtNMiXrSjv61PzE1ugbLjOhO9MuNQCdX8YdBcbiuv9IOjG6PL1rbZlwpdJC1pXuq%2FyKiaWmx18q8sQWfiDvhA7Ev9ljYfRScUnVmqCdMbJ2jOVhkZWS0JLV9mPfxFMPX9vsMGOqUBDmW3jPDCcsnzd4fCQiFGmzlNj4qg7%2FSUd1YNVrY0vdU0DaVyN8pmhmWV1JP9R2W8WPMVgCP0tcin5JpAA%2BuqlwMTVmOtp7RjlngQgeGdM5cnc%2B4MFpIbDP5GSb6ZRrC%2Fa5Xo5zub0fLXdU97LfZO1TlNEIukVehq93%2BoxLz9ZQ9bs9isDZqAiBIg9Nk71pEj%2FNhuNVw8wYoPlLY1g644QEU7u9e9&X-Amz-Signature=14aa2784b89d488ebdabd7ca0d5bd1fd6398f877b15d2ec91baec6a6f7754ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
